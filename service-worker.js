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
    "revision": "3f86d76894c38d50df60e844201bd3fd"
  },
  {
    "url": "about/contact.html",
    "revision": "a38eb8f5451a5b5201a781802d572bde"
  },
  {
    "url": "about/ecosystem.html",
    "revision": "7fc2defc32e190a217ef85fb1f3b4753"
  },
  {
    "url": "about/index.html",
    "revision": "0998fec2a1e2eea2b528696d28160b8c"
  },
  {
    "url": "about/license.html",
    "revision": "6f3865ca50ae91de1b4f80f6f43d98f9"
  },
  {
    "url": "about/roadmap.html",
    "revision": "962d0129e630a5f8a8f8a635a602bdc3"
  },
  {
    "url": "about/showcase.html",
    "revision": "01032fe0b8653449f55144f3138089ce"
  },
  {
    "url": "api/alert.html",
    "revision": "0489790ec5e594a62888c792fbc91781"
  },
  {
    "url": "api/application.html",
    "revision": "5c00b95b5f000899f0ae1b73b5f158a2"
  },
  {
    "url": "api/element.html",
    "revision": "a167b4c011c691dd421639759553ad17"
  },
  {
    "url": "api/forecast.html",
    "revision": "51a3b51a13d4837e3ef2485100948017"
  },
  {
    "url": "api/grid.html",
    "revision": "a6e33a0e04f37c6050b4e0746c36528b"
  },
  {
    "url": "api/hooks.html",
    "revision": "441e97828dd91116a7b87dfc934a015b"
  },
  {
    "url": "api/index.html",
    "revision": "fde02084b6da19fa7f209963edc2ad23"
  },
  {
    "url": "api/layers.html",
    "revision": "d2defb8802fd9f1b6c8677dd8aa7467b"
  },
  {
    "url": "api/loader.html",
    "revision": "70ce4689c4cf59accefeb1d841dc63ca"
  },
  {
    "url": "api/mixins.html",
    "revision": "580531468b2fec65181efc8fff0f830d"
  },
  {
    "url": "api/plugin.html",
    "revision": "66c224e1e5d93d4e1818e8d474d6c07c"
  },
  {
    "url": "api/probe.html",
    "revision": "f657e4f6fa79a25948728591010e3016"
  },
  {
    "url": "architecture/component-view.html",
    "revision": "78567e6a1e0b82fe8e0a4464be085547"
  },
  {
    "url": "architecture/data-model-view.html",
    "revision": "9b8af633d55aeda3415e0bb3d2ceab41"
  },
  {
    "url": "architecture/domain-model.html",
    "revision": "54c44027aefdb7b390cae8ad4e617a0e"
  },
  {
    "url": "architecture/dynamic-view.html",
    "revision": "040d7f1c5ebd72af71a687baa5a361d3"
  },
  {
    "url": "architecture/global-architecture.html",
    "revision": "f2efb16835ceb8f1108d5dc3a168f556"
  },
  {
    "url": "architecture/index.html",
    "revision": "b3a59dcde56ec0d8397d62d4c89fcc44"
  },
  {
    "url": "architecture/main-concepts.html",
    "revision": "b6c92df42678ff24a3d770638f7f71e0"
  },
  {
    "url": "assets/css/0.styles.de386463.css",
    "revision": "27a7088819375631f4ca57e8f353c89f"
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
    "url": "assets/js/10.d33a06a4.js",
    "revision": "3010b050d5f07e07ec07aa8c5466719b"
  },
  {
    "url": "assets/js/11.3d473595.js",
    "revision": "e15a05dae899e32ad7bbd035da5be9a2"
  },
  {
    "url": "assets/js/12.f361d59b.js",
    "revision": "7c0c9568837b2ab1b8f424a866fda3e6"
  },
  {
    "url": "assets/js/13.3d69271d.js",
    "revision": "20165e2b28a9b785ba83c8c788f7d5e5"
  },
  {
    "url": "assets/js/14.4f99068b.js",
    "revision": "967a6cb02b9e748829dbcdb8111a20cb"
  },
  {
    "url": "assets/js/15.d98d04d1.js",
    "revision": "57e8cabca91eca040424b03c2e64a492"
  },
  {
    "url": "assets/js/16.aa4ba479.js",
    "revision": "63f6a454f08f7b4c7787c57f0eb956da"
  },
  {
    "url": "assets/js/17.26494506.js",
    "revision": "50736ee47981352e465b5383a7bc223c"
  },
  {
    "url": "assets/js/18.98fff9a9.js",
    "revision": "f93650cb3b56d08e15ed045a2b12647a"
  },
  {
    "url": "assets/js/19.9747dd4d.js",
    "revision": "7261202dc1b78e75ab330fe74437aff3"
  },
  {
    "url": "assets/js/2.5e4e9229.js",
    "revision": "f239c7dd689f688e9e7d3123b630a2eb"
  },
  {
    "url": "assets/js/20.d8e8be42.js",
    "revision": "140df51b15c4b0c1aeae0e0422cf1cb9"
  },
  {
    "url": "assets/js/21.c9def80f.js",
    "revision": "59a289ad9ea1965ea9c1a2cc0e264745"
  },
  {
    "url": "assets/js/22.3727e6b5.js",
    "revision": "717509d29e44f27ca9235b78e287be6a"
  },
  {
    "url": "assets/js/23.69ad7832.js",
    "revision": "24627ecfd73e6943d92a43ff6e1f89ec"
  },
  {
    "url": "assets/js/24.cb47b168.js",
    "revision": "0d005b0f324f2c1a65b7c89fd77c5632"
  },
  {
    "url": "assets/js/25.d94ac44c.js",
    "revision": "c8f6de9d4adb160042e9576bf335d701"
  },
  {
    "url": "assets/js/26.9ffc551e.js",
    "revision": "6eec2a586ee4998e8b873b5ca09a699c"
  },
  {
    "url": "assets/js/27.6c23dbb1.js",
    "revision": "a18fe198ad54485a177736729a38399f"
  },
  {
    "url": "assets/js/28.91d1dad0.js",
    "revision": "df197e8c4c84c75baaea5a12eae82880"
  },
  {
    "url": "assets/js/29.51d34931.js",
    "revision": "6a4d3ff53bceeff98aa7195bbc3f3a18"
  },
  {
    "url": "assets/js/3.6801b2e2.js",
    "revision": "44519fcfeaf87a5dfb26d518acdd9f4d"
  },
  {
    "url": "assets/js/30.213e3024.js",
    "revision": "8fdc333b3e2bbd6d5b1b10f1c8ad1640"
  },
  {
    "url": "assets/js/31.65cac4d5.js",
    "revision": "d954d49ffd39ff3f70515564932d8bf7"
  },
  {
    "url": "assets/js/32.3eda3ba3.js",
    "revision": "7558cc04b337cb66bc65620814ec413a"
  },
  {
    "url": "assets/js/33.472c2998.js",
    "revision": "6ec60e927c3125eee0beeaed8b7b4b57"
  },
  {
    "url": "assets/js/34.c07ecd43.js",
    "revision": "20ddf1f780b9aeab663f6c0e5b4b9f81"
  },
  {
    "url": "assets/js/35.bb4be527.js",
    "revision": "0441f8e99d3951a9c2524ebdc20187cd"
  },
  {
    "url": "assets/js/4.b94acbf8.js",
    "revision": "05dd76800f82304c52af06b7d95af9be"
  },
  {
    "url": "assets/js/5.d474aaba.js",
    "revision": "9177dda8d261f7e21a49a0d546b9779f"
  },
  {
    "url": "assets/js/6.96822818.js",
    "revision": "47194fa9535c5cf5f990bf74296eb761"
  },
  {
    "url": "assets/js/7.52b61eca.js",
    "revision": "ed507ca2782fa7710775cee7ffc5567c"
  },
  {
    "url": "assets/js/8.e96a4014.js",
    "revision": "42f04ac4be206d11e4d2535c4288bb33"
  },
  {
    "url": "assets/js/9.cfbab25f.js",
    "revision": "53b3ce4321a4237ea30890c3f3b0c5c3"
  },
  {
    "url": "assets/js/app.e2e517d0.js",
    "revision": "5b12d8af38ab4c6536d841795dbdaebc"
  },
  {
    "url": "guides/basics.html",
    "revision": "dcf41b0e6aa944f321bd307f342aa722"
  },
  {
    "url": "guides/development.html",
    "revision": "9e5adfe498577ff66ef753ad16487cb9"
  },
  {
    "url": "guides/index.html",
    "revision": "eed9812a323ff4e419d33610ca7f6172"
  },
  {
    "url": "index.html",
    "revision": "b58e59b8f143b91da4be2787f01e8188"
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
