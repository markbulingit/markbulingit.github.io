'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f2b4d2121b9827ed1e5013d5edf7075e",
"assets/AssetManifest.json": "0a6bfe767563d3b261b53be2eb8f37f9",
"assets/assets/icons/cards.png": "765188e051061b61d9c73aa254dd5c8a",
"assets/assets/icons/contacts.png": "a8ec5129e41cdacb5aef0ea28f7ceb9f",
"assets/assets/icons/create.png": "21767d526dfea2dd9bf7de094bfd22ff",
"assets/assets/icons/diagonal.png": "a7eed0bd5bb24d6e9cc4016e524a1ad8",
"assets/assets/icons/empty.png": "518bd66d37f24f0431d613cfaf975fb1",
"assets/assets/icons/icons8_image_48px.png": "1ff055b2d94599e997266050cde30f7e",
"assets/assets/icons/icons8_wallpaper_48px.png": "c1195eddf0d9bf841b98623fea23eb96",
"assets/assets/icons/profile.png": "77b60925cccabc88f49d2fde7236c0e1",
"assets/assets/icons/qr.png": "f69042eb66bd34095e699807b6cc6cfd",
"assets/assets/icons/qr1.png": "bd9a5529328a34fd48d3cefb4fec2be8",
"assets/assets/icons/scan.png": "d1383c62066d53cc153b36b2ce5e43eb",
"assets/assets/icons/settings.png": "17bbe987a9cac15ec60c68350433a06a",
"assets/assets/images/bg1.jpg": "dc93e4f4f0fcbea8a3399b75394d1741",
"assets/assets/images/bg2.jpg": "0a55e729c3843de6c0fa3ef6f6e1b2af",
"assets/assets/images/bg3.jpg": "d169c55256001f0d9436259e4c7ca5d5",
"assets/assets/images/splash.png": "b130cc7a364a584c7d31f0464cdfda36",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/fonts/MaterialIcons-Regular.otf": "721719799857e92dd153dade669d4c8c",
"assets/google_fonts/VarelaRound-Regular.ttf": "3c3c18c24b0bd85a303bc3f2581d53fc",
"assets/NOTICES": "489d67eed78ccecf1ae1d7aae95d8bdf",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "c705a907d081594ab331bcfda5cf2a8b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2d268060457ed8ab4e57b4e854e01983",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "3369db9007887ab51a7291d033a5b3ec",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "93fd81e3c64272e4cc96536f56b367e0",
"/": "93fd81e3c64272e4cc96536f56b367e0",
"main.dart.js": "65a5f7d35790e5cfaacf6f3789cf98a7",
"manifest.json": "13a6a3f6b4d096069f4f2ef640af6eb3",
"splash/img/dark-1x.png": "dea97a06b689d2b7584d58d7c62372aa",
"splash/img/dark-2x.png": "3e8fca0cad807653eba2e9464f9a2eb2",
"splash/img/dark-3x.png": "d415af365f12c62f81b3e7f5fb3e91f1",
"splash/img/dark-4x.png": "6e2955a6b57989d5811ce5a8bec68114",
"splash/img/light-1x.png": "dea97a06b689d2b7584d58d7c62372aa",
"splash/img/light-2x.png": "3e8fca0cad807653eba2e9464f9a2eb2",
"splash/img/light-3x.png": "d415af365f12c62f81b3e7f5fb3e91f1",
"splash/img/light-4x.png": "6e2955a6b57989d5811ce5a8bec68114",
"version.json": "1606961d9c96c2dda75edff4aaa3c7ec"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
  for (var resourceKey of Object.keys(RESOURCES)) {
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
