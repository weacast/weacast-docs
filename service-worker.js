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
    "revision": "b578cb1c223d74ed49eff81c170ccd36"
  },
  {
    "url": "about/contact.html",
    "revision": "cbc5c6960d4ecec1417fd6a27858313f"
  },
  {
    "url": "about/ecosystem.html",
    "revision": "2db03c3561cff5d551cecee1236f021e"
  },
  {
    "url": "about/index.html",
    "revision": "8ef75c00a09fdb19ea2d7940c6b33bed"
  },
  {
    "url": "about/license.html",
    "revision": "c5db22e304b2e7200dd8f59cdf3f2eb0"
  },
  {
    "url": "about/roadmap.html",
    "revision": "43645fbc5eba7fe986aa85697b161d3f"
  },
  {
    "url": "about/showcase.html",
    "revision": "fd5d5f89e63e623f085ee5c1ff65574a"
  },
  {
    "url": "api/alert.html",
    "revision": "52191052a6be8de21672df17a2eef943"
  },
  {
    "url": "api/application.html",
    "revision": "f27ef40c5b0c964dbd803beb7456fefe"
  },
  {
    "url": "api/element.html",
    "revision": "6a704bbf9ba3f292f151bf7de1ec06dc"
  },
  {
    "url": "api/forecast.html",
    "revision": "25b890121e302d19dc78f3d41f06cd4b"
  },
  {
    "url": "api/grid.html",
    "revision": "c8340959386e99529b862c680314ecf3"
  },
  {
    "url": "api/hooks.html",
    "revision": "9c9d7f94105e2c82572ef2a6fb832b63"
  },
  {
    "url": "api/index.html",
    "revision": "d9be0deee5df087e7e44cd6d13fb04e6"
  },
  {
    "url": "api/layers.html",
    "revision": "c50825d208ca220d774b95243bc50687"
  },
  {
    "url": "api/loader.html",
    "revision": "ead1032fea1824b2f288de016cecb3cc"
  },
  {
    "url": "api/mixins.html",
    "revision": "110b5df41506de71ed07f1a0563ec3aa"
  },
  {
    "url": "api/plugin.html",
    "revision": "49b8adc82f40e3e819089d9bec289747"
  },
  {
    "url": "api/probe.html",
    "revision": "d4f3897da5aa97658b0f116d2562f370"
  },
  {
    "url": "architecture/component-view.html",
    "revision": "76fa0bc22f07177264334c484beb9531"
  },
  {
    "url": "architecture/data-model-view.html",
    "revision": "2ce289be8bc8aec25c544c5e429d5562"
  },
  {
    "url": "architecture/domain-model.html",
    "revision": "f3e0f648dd1d1a676f3f6c74066fe595"
  },
  {
    "url": "architecture/dynamic-view.html",
    "revision": "f4ce27d8119b3c1eb10366d71a3ba98a"
  },
  {
    "url": "architecture/global-architecture.html",
    "revision": "32006c3aed737a83d650c4de45b4a8d7"
  },
  {
    "url": "architecture/index.html",
    "revision": "663144fbf03c4fb44cc3ba53c9e3d9c8"
  },
  {
    "url": "architecture/main-concepts.html",
    "revision": "19b773e3b49814532ce906dcb8194c53"
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
    "url": "assets/js/2.2caa6bf7.js",
    "revision": "7e040d4696a63d0004be15e5b1e087a1"
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
    "url": "assets/js/app.0b67e347.js",
    "revision": "685419e044f4e0c9fe1ce90dcb49df12"
  },
  {
    "url": "guides/basics.html",
    "revision": "6bbda60aec6d26832a7ac6994387da63"
  },
  {
    "url": "guides/development.html",
    "revision": "cceca0e5accf8c97d5abd4bbee50748d"
  },
  {
    "url": "guides/index.html",
    "revision": "caa8f77e5038e07993d6a83e590070a5"
  },
  {
    "url": "index.html",
    "revision": "67b5f7dec97d318eb6d9b4a9ec21343a"
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
