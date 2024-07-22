'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "2c6590274e7ee525a2d4af20fc48971b",
"version.json": "238b5e64694bbc9adfdcf8afc9aee748",
"index.html": "288baecbc9c08685b3b40ec5026cd994",
"/": "288baecbc9c08685b3b40ec5026cd994",
"main.dart.js": "1b0ff67c0f126fa7be2ff14da4a397e1",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "909b6b78ac6ade9750e142b3c9239c5c",
"assets/AssetManifest.json": "44b69fedba29de3a21d8a900fb3d0f94",
"assets/NOTICES": "5ebeafd1a5e06b8ce8af7fcce291d073",
"assets/FontManifest.json": "6c8aa5f5d5de8e59ae9da96db3c9d34f",
"assets/AssetManifest.bin.json": "c86d030b61573322684e6486660080d3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "9c6bbfb9843db66002681d2c8efd0a89",
"assets/fonts/Inter-VariableFont_slnt,wght.ttf": "32204736a4290ec41200abe91e5190d1",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/pngs/doctor_profile_pic.png": "8f6736bd7d818013d882c3df18f5ba0f",
"assets/assets/svgs/search.svg": "276f989b584698626a84665415e13ea4",
"assets/assets/svgs/fill-cirlce-down.svg": "b2885d1e1ec2139e5b8bb25c2d498289",
"assets/assets/svgs/arrow-down.svg": "e9045b32e330f7dd60fd37511f38aff1",
"assets/assets/svgs/youtube_ic.svg": "68fdcdcb1d402840d1ed0bffe71713df",
"assets/assets/svgs/location_map.svg": "4985b4c7abe6718829ec0fd3f887edea",
"assets/assets/svgs/platform_terms.svg": "c7fee83f10768948dd64d81f76aa5d43",
"assets/assets/svgs/ring_menu.svg": "226e4a9658c275248bb250141a3bf9d3",
"assets/assets/svgs/circle_info.svg": "ba3ad8250f79e32055c238df954bd176",
"assets/assets/svgs/reports.svg": "5feeb268652be63ffeecf6a82fc66b07",
"assets/assets/svgs/location_map%2520copy.svg": "4985b4c7abe6718829ec0fd3f887edea",
"assets/assets/svgs/facebook_ic.svg": "5a46f533c22868424b8dfb6fd7750c67",
"assets/assets/svgs/x_ic.svg": "f248174eaebe3dfd7fe4803b8e920b54",
"assets/assets/svgs/detail_discount.svg": "749fd8ccf2dc01fc31433fd0c08ef446",
"assets/assets/svgs/telegram_ic.svg": "cc9a605fb34d35a9a174bff89fa4539e",
"assets/assets/svgs/gallery.svg": "4ab3b9632885f6afb94cdd75ca566772",
"assets/assets/svgs/campaign.svg": "5f47e699c0098976dbe09bc06ad424e4",
"assets/assets/svgs/dot_menu.svg": "483ee65b54cec3770179f90644606dfd",
"assets/assets/svgs/tick.svg": "17967514ec09beffefd8d02115f3e547",
"assets/assets/svgs/notif_ic.svg": "7dbc204e2eeff70be93965cbe1d60ccf",
"assets/assets/svgs/table_detail.svg": "58db6495b8bf82a408a5966c3aa9e334",
"assets/assets/svgs/instagram_ic.svg": "cae5508be61275945e6d09ab418fd5d0",
"assets/assets/svgs/close.svg": "d96c585721ad0d41d7a01af9c22f2474",
"assets/assets/svgs/time_interval.svg": "6be9c7c4e847cde743f5e60e5111d047",
"assets/assets/svgs/filled_plus.svg": "e9bb6969a8c801eadfde5f66ff98e535",
"assets/assets/svgs/profile_management.svg": "bb9b7a0447f5a923c304994795271000",
"assets/assets/svgs/thick-arrow-down.svg": "b6b26d7241350e9bb3fe84b5b1d5f889",
"assets/assets/svgs/workinghours.svg": "f2dd5aa2c3777dab7b5cabd243cf5b88",
"assets/assets/svgs/trash.svg": "e88a3d387290e514bd0652e63f0c1bd4",
"assets/assets/svgs/fill-calendar.svg": "e302b24c2d83153c597b6ac9b6539e87",
"assets/assets/svgs/edit.svg": "763a6607778f632ae5408a0f511a2301",
"assets/assets/svgs/doc_loc.svg": "b4a839a4db89ca148135e57c6de9c330",
"assets/assets/svgs/snapchat_ic.svg": "e59341b9f913d276c9b845335f8060a5",
"assets/assets/svgs/tiktok_ic.svg": "576e16f96a7c753d82214ef1e8fa58cd",
"assets/assets/svgs/circle_add.svg": "d2e7eccaa4fd4031147ee52ab404893e",
"assets/assets/svgs/service-agreement.svg": "7f1c6647d8550e93b5cd62b2e9376fd2",
"assets/assets/svgs/appointment_note.svg": "945af1f402e251e2baaf53c846bf53cc",
"assets/assets/svgs/reports_symbol.svg": "00ad19fdd07da65cb860ff1bdeb63bd1",
"assets/assets/svgs/user_tick.svg": "7e0d6fe63ac461c015780edfdf79f1ee",
"assets/assets/svgs/logo.svg": "21614ac4d684ab57ad994058ea73a3e9",
"assets/assets/svgs/whatsapp_ic.svg": "f69e39f7f499d2e21bcd118e7215bc43",
"assets/assets/svgs/active_notif.svg": "2d86c8e218bcae61a54a9cbfa5b26df7",
"assets/assets/svgs/hospital_building.svg": "9e1159e661085acda517a12a298b8be0",
"assets/assets/svgs/filled_verify.svg": "dc359a9c320c49af9550d92ca0b86aaa",
"assets/assets/svgs/nodot_calendar.svg": "48ebc1bf3762562b31e32bae5e09409d",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
