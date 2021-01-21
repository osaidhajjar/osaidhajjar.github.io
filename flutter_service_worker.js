'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "e810ea50eaaba41f6de40785730941ac",
"assets/assets/bg.png": "40dac8fa326f611ae3446a16385fa2a9",
"assets/assets/bg_level.png": "86594d1efbcb2b1d3e8536ecaae8f38b",
"assets/assets/cold_box.gif": "e900b96188e14c8099ae41dc8a4b13d0",
"assets/assets/fill.png": "6a519e87681faf156077fd78ab4c0488",
"assets/assets/floor.png": "269947657babe7a1f36ce8696a150410",
"assets/assets/floor_target.png": "142e889b7e873d0eea16f6e116d01f40",
"assets/assets/frame.png": "7046c9fd4394c6c5c2b32b851e12a256",
"assets/assets/grey_pin.png": "71d1470d1abf22be97bc90c61516408c",
"assets/assets/hot_box.gif": "4d429b73c2126f8c9c8daac3aad8af09",
"assets/assets/levels.png": "cbdde6f028a101b151219ba8a87fa27a",
"assets/assets/purple_pin.png": "41ddc12c1fce4a0e693d36699276d1ab",
"assets/assets/rainbow.png": "401a780f0077ffb87b0a11d915944bb8",
"assets/assets/rainbow_missing.png": "356ce981b24cbae997b3caf82dcee526",
"assets/assets/red_pin.png": "b9144e149252ca8b3d17a00f0e0431c5",
"assets/assets/spot.png": "5fe002b9346c045cc3964cff5d36c58f",
"assets/assets/star.png": "0e42fa8a6390d4e11652d3b80aa7be96",
"assets/assets/try_again.png": "34356eec2017643f9b93998c72d71999",
"assets/assets/try_again2.png": "c23076233797b3f189a40ffa277fb692",
"assets/assets/yellow_pin.png": "629817dbe5f8918fe5f669b2f2ec5ef0",
"assets/FontManifest.json": "392eb497a0a1f88eb4288dfe59bd630b",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/fonts/Tajawal-Black.ttf": "a515f84cb1a7ed89288dba4be9719722",
"assets/fonts/Tajawal-Bold.ttf": "79bb19e04937c19974260fcb4128270e",
"assets/fonts/Tajawal-ExtraBold.ttf": "7bbbfd28e8dbd463c9f449aa96ffd7ed",
"assets/fonts/Tajawal-ExtraLight.ttf": "8c37c5fa0335c5d15c2a9f182af1eeb0",
"assets/fonts/Tajawal-Light.ttf": "fbca61ce5f0321ab500bdbb168b775b0",
"assets/fonts/Tajawal-Medium.ttf": "2bfe3ee2145f6755e4b5960310daee03",
"assets/fonts/Tajawal-Regular.ttf": "6b10b55e4df612910047b7e5d596a9d5",
"assets/NOTICES": "286df8bbafa25f43d9f1ea1f994a8f1f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "6ada2cb8d4d4854696eec1aa592d252d",
"/": "6ada2cb8d4d4854696eec1aa592d252d",
"main.dart.js": "a0d7ace14049cd21cfcda2ef7702321d",
"manifest.json": "f35bd00acc6350598b6e1e2590f088e8",
"version.json": "37da58b8142ff9cd5f0f2c9db59f2fcf"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
