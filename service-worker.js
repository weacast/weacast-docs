/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f4a0d84195d3c4d6acfcfba0ca317b55"
  },
  {
    "url": "about/contact.html",
    "revision": "f90d29975bf21e3422b8164e19ce51bf"
  },
  {
    "url": "about/ecosystem.html",
    "revision": "26296ba0570d509f95620ee25f6dcb7e"
  },
  {
    "url": "about/index.html",
    "revision": "0ee8a3d6c0548aed1adc692364f7f562"
  },
  {
    "url": "about/license.html",
    "revision": "9afbdb305a6e54571f8c8c5ff74ab4d0"
  },
  {
    "url": "about/roadmap.html",
    "revision": "10e41f4bb8a08fe222fa82cdd1efe0f5"
  },
  {
    "url": "about/showcase.html",
    "revision": "cbb5947aa41216011f101bbc65fe8c83"
  },
  {
    "url": "api/alert.html",
    "revision": "d694588c129cb37f032e90115b7c2505"
  },
  {
    "url": "api/application.html",
    "revision": "adaf19cd6fe2bdcad5989e3f576bb5d2"
  },
  {
    "url": "api/element.html",
    "revision": "8a725c73a63dab91b4b655ba4569873f"
  },
  {
    "url": "api/forecast.html",
    "revision": "5d0fea6faae171316cccf51f68e21479"
  },
  {
    "url": "api/grid.html",
    "revision": "96a46e33b9b58a763e93b090015fc162"
  },
  {
    "url": "api/hooks.html",
    "revision": "21a9b09995fd6ea3216108eefd4da30d"
  },
  {
    "url": "api/index.html",
    "revision": "e63f58b0358e3387ce7a3346241a284e"
  },
  {
    "url": "api/layers.html",
    "revision": "c580eae1b10af3eda7f1168d5c6871e6"
  },
  {
    "url": "api/loader.html",
    "revision": "389fa8ef481b10d69d066f8e60a802e6"
  },
  {
    "url": "api/mixins.html",
    "revision": "d25a987f41dd00708aafdc4f64a7c554"
  },
  {
    "url": "api/plugin.html",
    "revision": "39b0d90b64ed0dbc8d5b60470aee59be"
  },
  {
    "url": "api/probe.html",
    "revision": "fa1b50c294a7c347025ab6556b568e47"
  },
  {
    "url": "architecture/component-view.html",
    "revision": "00dac1faae78bf0fdb79a5a7bf394ee0"
  },
  {
    "url": "architecture/data-model-view.html",
    "revision": "db27a28ed5abb3fecf98368abb294949"
  },
  {
    "url": "architecture/domain-model.html",
    "revision": "34d3c6d0f8a9e741bed5838042cafc52"
  },
  {
    "url": "architecture/dynamic-view.html",
    "revision": "c5ea368c636a1f756da4defaa1ef6b8e"
  },
  {
    "url": "architecture/global-architecture.html",
    "revision": "d39e4a03d23c4ad299b65dcfdd661491"
  },
  {
    "url": "architecture/index.html",
    "revision": "cae7439bec0feaea1c4b88601894776b"
  },
  {
    "url": "architecture/main-concepts.html",
    "revision": "72855b384779525bb247eea114c42198"
  },
  {
    "url": "assets/css/0.styles.d6b7d086.css",
    "revision": "d00258dd54b87e79ac2f729d21b72110"
  },
  {
    "url": "assets/img/alert-data-model.9873ece7.svg",
    "revision": "9873ece7a7f0358e82e39df3fa11f06b"
  },
  {
    "url": "assets/img/application-hooks.17778c0b.svg",
    "revision": "17778c0b723cad0e7ea624d4a36149bc"
  },
  {
    "url": "assets/img/demo-gui.089e7f80.png",
    "revision": "089e7f80e8fecb3c23eee5a51e181644"
  },
  {
    "url": "assets/img/domain-model.c1c7b17f.svg",
    "revision": "c1c7b17f78d96a15a28541e7d421b397"
  },
  {
    "url": "assets/img/element-data-model.15e304c2.svg",
    "revision": "15e304c2912fc7684401139641a47c8a"
  },
  {
    "url": "assets/img/element-hooks.84065c3e.svg",
    "revision": "84065c3e897a19b08ea10a293468923d"
  },
  {
    "url": "assets/img/flow-layer.f4bb86a7.png",
    "revision": "f4bb86a73c4f2b42ae72fc2d90f0f41d"
  },
  {
    "url": "assets/img/forecast-data-model.c1141568.svg",
    "revision": "c11415682aa4611f323dd8e64c8eca08"
  },
  {
    "url": "assets/img/forecast-hooks.4e52c1ee.svg",
    "revision": "4e52c1ee88ea7cfc63e7022f01247cbf"
  },
  {
    "url": "assets/img/global-architecture-v2.515c9d8b.png",
    "revision": "515c9d8be47c7fe5b0f4bba6fe89ccf5"
  },
  {
    "url": "assets/img/global-architecture.c9eb93bc.png",
    "revision": "c9eb93bcb17d1b3499368d7e9b114ffa"
  },
  {
    "url": "assets/img/probe-data-model.837741f0.svg",
    "revision": "837741f078bb342a0ae53af0ea7a4f2f"
  },
  {
    "url": "assets/img/probe-hooks.b36dde04.svg",
    "revision": "b36dde0427b4642df978d51bf60c5265"
  },
  {
    "url": "assets/img/probe-result-data-model.f209e861.svg",
    "revision": "f209e861a0d250914485ed7eb17a85fc"
  },
  {
    "url": "assets/img/probe-result-hooks.630d12f2.svg",
    "revision": "630d12f21ffb1e73648f6bc7af19eea9"
  },
  {
    "url": "assets/img/scalar-layer-interpolated.77d2160e.png",
    "revision": "77d2160e2a97d56f525fcba65e9b564d"
  },
  {
    "url": "assets/img/scalar-layer-raw.34fa3550.png",
    "revision": "34fa3550cfd0fd47efc1755b5e8b39af"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/weacast-alert.72238de6.png",
    "revision": "72238de65a80cc714c042c2bac32feb2"
  },
  {
    "url": "assets/img/weacast-probe-location.250d7aed.png",
    "revision": "250d7aed75cc2f6c04ab62fcd6a86c22"
  },
  {
    "url": "assets/img/weacast-probe.a76e8a52.png",
    "revision": "a76e8a523999ef69115551300020eb58"
  },
  {
    "url": "assets/img/weacast-timeline.fbea36b5.png",
    "revision": "fbea36b5d3bf5e95bee0741ed6c500ae"
  },
  {
    "url": "assets/img/weacast-wind.58090169.png",
    "revision": "580901692b6d9f8fd2709ab8d4c6925c"
  },
  {
    "url": "assets/img/windbarb-layer.9029ed85.png",
    "revision": "9029ed8552ecb7092433dd6561984888"
  },
  {
    "url": "assets/js/10.c1d312c7.js",
    "revision": "012b8a5033b56998e9adbe8b7ae06140"
  },
  {
    "url": "assets/js/11.c092fbf0.js",
    "revision": "ede815f0e36200170dd8bc70aca0b191"
  },
  {
    "url": "assets/js/12.f1c85c7a.js",
    "revision": "c6d452596b9144e3e0055472df9f47c0"
  },
  {
    "url": "assets/js/13.93c6beca.js",
    "revision": "98ae967677438a480621f39feb13ed52"
  },
  {
    "url": "assets/js/14.aff77068.js",
    "revision": "085858214a0b56ffd32eb14d7abf9a86"
  },
  {
    "url": "assets/js/15.0b4f5427.js",
    "revision": "d6043ecb61fc74a5f6d0b7e70116e70d"
  },
  {
    "url": "assets/js/16.f7d2d2ea.js",
    "revision": "078044a82a4f027b29f9408b0c2fc749"
  },
  {
    "url": "assets/js/17.202a109b.js",
    "revision": "db4e8f0aa5b06ef29204d9b7eb1d5e6a"
  },
  {
    "url": "assets/js/18.8654fe28.js",
    "revision": "24fb29a8bde2fb885a6ea1852e0a95c9"
  },
  {
    "url": "assets/js/19.bb3ac0f2.js",
    "revision": "597c642202c1adfd9268d681efc54ca7"
  },
  {
    "url": "assets/js/2.36be5af7.js",
    "revision": "1c382c4b418e3b92d1f589b219582efe"
  },
  {
    "url": "assets/js/20.d5eaecb1.js",
    "revision": "987da080ff97f6b840e8eee1a7afa023"
  },
  {
    "url": "assets/js/21.dcc7656b.js",
    "revision": "5ac7a62725109312e3f1282ca385af85"
  },
  {
    "url": "assets/js/22.a122474a.js",
    "revision": "55ade516e67f4ae75384d3914c813698"
  },
  {
    "url": "assets/js/23.90623716.js",
    "revision": "5de55807fd1a0768214985381b09a9fb"
  },
  {
    "url": "assets/js/24.98bf78f8.js",
    "revision": "bb97bb05210361ce722dbc137a554cf8"
  },
  {
    "url": "assets/js/25.0fc34955.js",
    "revision": "9d5f1b335d788e0ab31a485bfcc48862"
  },
  {
    "url": "assets/js/26.97b7c0d7.js",
    "revision": "c47ec48593c9fdf6b5c34bbe83255add"
  },
  {
    "url": "assets/js/27.0a67f163.js",
    "revision": "0f2760b0d2dfdd0216eede36a43113ae"
  },
  {
    "url": "assets/js/28.37f3dcb8.js",
    "revision": "924bfc0eaa78111ac8b222d794a12d3b"
  },
  {
    "url": "assets/js/29.9287ba7e.js",
    "revision": "3be5a8e09b7664e748cad108f95c4128"
  },
  {
    "url": "assets/js/3.06a00475.js",
    "revision": "6be5cdc4333b115467b1f606f119d9ea"
  },
  {
    "url": "assets/js/30.ca6c695d.js",
    "revision": "b9f1fce46bf17430afb0a7fc2c24fb60"
  },
  {
    "url": "assets/js/31.1138dc40.js",
    "revision": "35f6fc17ae8f1969bc2fdcc13b23339c"
  },
  {
    "url": "assets/js/32.6236f212.js",
    "revision": "f1e61bc87eb947c40c16f39eb18d95c4"
  },
  {
    "url": "assets/js/33.d5c64000.js",
    "revision": "f09dd1473b421b0ce98057c4c093a698"
  },
  {
    "url": "assets/js/34.508a6b89.js",
    "revision": "8874d1eb8178c986c99ead53cce82d67"
  },
  {
    "url": "assets/js/35.ad79d2dd.js",
    "revision": "6ac6287e38aa766355e3aecb826cacee"
  },
  {
    "url": "assets/js/36.2b6faba7.js",
    "revision": "3c9f3b77a572ba145ae6b76c6d268da1"
  },
  {
    "url": "assets/js/37.75442fe0.js",
    "revision": "1acf050b98c2157a9f91f9ecf9d46b78"
  },
  {
    "url": "assets/js/38.7d2fa917.js",
    "revision": "c56c1346ff78067b2d5cdc38358a6995"
  },
  {
    "url": "assets/js/39.ef08dc12.js",
    "revision": "be7943bbd04571dd6c07a402af18cc9a"
  },
  {
    "url": "assets/js/4.d0a76c0e.js",
    "revision": "b8f73e1705158b7b0719bd5f37ce8f01"
  },
  {
    "url": "assets/js/40.cacff57a.js",
    "revision": "cdde7d40f028d7968e799b58efadc335"
  },
  {
    "url": "assets/js/41.2f7603d3.js",
    "revision": "8d4353fc67e7dc9e211ea8eacd7cd7ef"
  },
  {
    "url": "assets/js/42.7b8e381c.js",
    "revision": "c6e23ceba7f91956a51092d2ab432bff"
  },
  {
    "url": "assets/js/5.e4987ea9.js",
    "revision": "76fb2f5df1e5902700df7661b2960a39"
  },
  {
    "url": "assets/js/6.8f2a496e.js",
    "revision": "3a7c3fbfc9bf5c3cf58ce55ae2b8539f"
  },
  {
    "url": "assets/js/7.74763adf.js",
    "revision": "9b3d3c7614068f169040f703a8481bd2"
  },
  {
    "url": "assets/js/8.8d4f2c7a.js",
    "revision": "d21e0f2799c88fb2d0aec3bfbd8a3fa9"
  },
  {
    "url": "assets/js/9.03a5ee47.js",
    "revision": "ea7da87e955f2b269b59c1afeab4ffc5"
  },
  {
    "url": "assets/js/app.33f51d4d.js",
    "revision": "4546aae92af15b06158cfde5bee78aa0"
  },
  {
    "url": "guides/basics.html",
    "revision": "865098b0f981737b0c532e67cb265971"
  },
  {
    "url": "guides/development.html",
    "revision": "d4286d94fa68f1b927dd633cf79bbc02"
  },
  {
    "url": "guides/index.html",
    "revision": "c7e4204ec8094b46e21ff679e1b15dc8"
  },
  {
    "url": "index.html",
    "revision": "388cf8796a98c2f3f2315e1ab5ffd710"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
