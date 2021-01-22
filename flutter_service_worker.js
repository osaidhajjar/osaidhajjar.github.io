'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "957fb5f9572e1a543a6b3338d8cddbe4",
"assets/assets/bg.png": "40dac8fa326f611ae3446a16385fa2a9",
"assets/assets/bg_level.png": "86594d1efbcb2b1d3e8536ecaae8f38b",
"assets/assets/box_black.png": "a345188d8274f26b0b7a39d541d57934",
"assets/assets/box_cold.gif": "e900b96188e14c8099ae41dc8a4b13d0",
"assets/assets/box_hot.gif": "4d429b73c2126f8c9c8daac3aad8af09",
"assets/assets/box_orange.png": "664100b02dc5771712ced2674a29a21f",
"assets/assets/box_pink.png": "50a95d4c67cfa147e85bc94d8ae9a078",
"assets/assets/box_purple.png": "db96996743fa73d505224c8a5181872a",
"assets/assets/box_red.png": "1a29d59103c9f97cd0cd608947df166e",
"assets/assets/box_white.png": "08c2f8446fe3b9f80349b7926ac1499f",
"assets/assets/box_yellow.png": "472b241c4d6c77b15da0739768da1556",
"assets/assets/brush_base.gif": "343ab50ff5c984f226308383d69f40e0",
"assets/assets/brush_base.png": "df5b7e9a80d1c5acc8dda7023a59a694",
"assets/assets/brush_black.gif": "ca6811e23601de33c887accb864b4ad1",
"assets/assets/brush_blue.gif": "8150b27cc9e2117769fb0dfd2b18bcee",
"assets/assets/brush_green.gif": "5f137b30c07bcde62628f79e78a0184a",
"assets/assets/brush_orange.gif": "98512222f328435e008cd40b755c2719",
"assets/assets/brush_red.gif": "51a2a77238c585b8321ed773eee1f992",
"assets/assets/brush_white.gif": "01461f2235ed4326d4e466b353433d72",
"assets/assets/brush_yellow.gif": "51b28b9f2e87d38e9fe48f71b901b8bb",
"assets/assets/button_cold.png": "b51d1fd48a6742ea475bb560a63518a3",
"assets/assets/button_hot.png": "f3f86df710a3c9ba5d979f705310b6e5",
"assets/assets/clear_purple1.jpg": "5ec0b62dbe2316803bc0d94246505296",
"assets/assets/clear_purple2.jpg": "179dc86e7e1acaed676b5ba9f5399439",
"assets/assets/clear_purple3.jpg": "74f737253cf7803053f20e2c812a2fcb",
"assets/assets/clear_purple4.jpg": "e67568e6376a666ff3cee14a94232cc7",
"assets/assets/clear_yellow1.jpg": "91055791a09ee2cf69a28a69e8ca4c13",
"assets/assets/clear_yellow2.jpg": "284238a1300ce1a1e03e9d9f48439512",
"assets/assets/clear_yellow3.jpg": "22b8817f6895f20fe1c82d4646ed7e61",
"assets/assets/clear_yellow4.jpg": "9edc0b658fd4e32443454c841c1f3524",
"assets/assets/color_circle.jpg": "6652dbb7a4ca48414f953deef4afb0a6",
"assets/assets/congrat.png": "7bca9645fab277b36da54aa001816945",
"assets/assets/correct.png": "ddde782a328ac719a09db79690fade69",
"assets/assets/drop_blue.png": "535a732d93f22206159e13209f234d50",
"assets/assets/drop_green.png": "3d3d4b7460a13ea77bd9973845603fd4",
"assets/assets/drop_purple.png": "4f97e25174dcca1650e25f772a36a11c",
"assets/assets/drop_red.png": "a67ee97294c9311e352255ea3d8fcead",
"assets/assets/drop_yellow.png": "4b50e611dac045a30e34b91d5facc777",
"assets/assets/fill.png": "6a519e87681faf156077fd78ab4c0488",
"assets/assets/floor.png": "269947657babe7a1f36ce8696a150410",
"assets/assets/floor_target.png": "142e889b7e873d0eea16f6e116d01f40",
"assets/assets/frame.png": "7046c9fd4394c6c5c2b32b851e12a256",
"assets/assets/pen_grey.png": "71d1470d1abf22be97bc90c61516408c",
"assets/assets/pen_purple.png": "41ddc12c1fce4a0e693d36699276d1ab",
"assets/assets/pen_red.png": "b9144e149252ca8b3d17a00f0e0431c5",
"assets/assets/pen_yellow.png": "629817dbe5f8918fe5f669b2f2ec5ef0",
"assets/assets/pie.gif": "0aa6f839ecf38c8d0864d8749f3f773d",
"assets/assets/pie_missing_green.gif": "1b9fb5a0ae8931887b9608852e312f06",
"assets/assets/pie_missing_purple.gif": "7d291ecf11d44d27a6357f380a7e77ba",
"assets/assets/rainbow.png": "401a780f0077ffb87b0a11d915944bb8",
"assets/assets/rainbow_missing.png": "356ce981b24cbae997b3caf82dcee526",
"assets/assets/spot.png": "5fe002b9346c045cc3964cff5d36c58f",
"assets/assets/try_again.png": "0dcf93a070d40267a71fcd286dd03bd2",
"assets/assets/wrong.png": "6208348949dbbca83e2070d2e1fd1e1f",
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
"index.html": "ef1ba4c292eece590dc87262da1e3a7f",
"/": "ef1ba4c292eece590dc87262da1e3a7f",
"main.dart.js": "8d3bdee54c1d05677bf83bbedd1c0815",
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
