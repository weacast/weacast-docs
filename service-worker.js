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
    "revision": "2c2f90a8defe83e20aa0655899acc2b9"
  },
  {
    "url": "about/contact.html",
    "revision": "a60080c2f8b6317db299c2f44cdb3366"
  },
  {
    "url": "about/ecosystem.html",
    "revision": "5a86b300397f864b4ef3c23a3391af18"
  },
  {
    "url": "about/index.html",
    "revision": "24a9867b33095c13f650d096fe5c63b0"
  },
  {
    "url": "about/license.html",
    "revision": "b2685f711ffbc8836579611ab351ff49"
  },
  {
    "url": "about/roadmap.html",
    "revision": "e0d667c9141e93821c7d23eb5fa14889"
  },
  {
    "url": "about/showcase.html",
    "revision": "4bda538de53167fae52a4039076e5c54"
  },
  {
    "url": "api/alert.html",
    "revision": "62c928efe41743c515eb83b8b7345f9b"
  },
  {
    "url": "api/application.html",
    "revision": "b7c302b0919dc60573b4a1041e2a4f01"
  },
  {
    "url": "api/element.html",
    "revision": "f5f5aa95adba57ed55c2ff7a8ce5e049"
  },
  {
    "url": "api/forecast.html",
    "revision": "a3f3b1eefd0e933fc7e028658ab0ebe8"
  },
  {
    "url": "api/grid.html",
    "revision": "9c109194693a54ffb447ce4a2415d7f2"
  },
  {
    "url": "api/hooks.html",
    "revision": "475a9dbfed130c482d7457d9fa4c6864"
  },
  {
    "url": "api/index.html",
    "revision": "a3bf251b200bb91d0fd1f902ebb754d0"
  },
  {
    "url": "api/layers.html",
    "revision": "b26a77f658b45f2d87f578944989f1d6"
  },
  {
    "url": "api/loader.html",
    "revision": "57660d6f37222787180aaf57684f1f6b"
  },
  {
    "url": "api/mixins.html",
    "revision": "1fe53e515d136fa7c3a7e5318a67c4b6"
  },
  {
    "url": "api/plugin.html",
    "revision": "a80c943ee14627895007bf5f0b669c15"
  },
  {
    "url": "api/probe.html",
    "revision": "80dcc42021f11df8f4cd40724008ec7c"
  },
  {
    "url": "architecture/component-view.html",
    "revision": "3d8642b01739afeca36ce6b4480052e8"
  },
  {
    "url": "architecture/data-model-view.html",
    "revision": "660f730f24f09d3ef653b4cf9ba5f029"
  },
  {
    "url": "architecture/domain-model.html",
    "revision": "d813a91675e5fcc7791b34f62aebefc3"
  },
  {
    "url": "architecture/dynamic-view.html",
    "revision": "9cebcb0c4a47b3b30d48808756519234"
  },
  {
    "url": "architecture/global-architecture.html",
    "revision": "dabed677737b9b1bf0d980df9d8ef477"
  },
  {
    "url": "architecture/index.html",
    "revision": "15fa6fb8b84ad0f1e41f9808b044a5c0"
  },
  {
    "url": "architecture/main-concepts.html",
    "revision": "68986455911db9b4d8a0c06d3a1d5df3"
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
    "url": "assets/js/10.e7c91e81.js",
    "revision": "3010b050d5f07e07ec07aa8c5466719b"
  },
  {
    "url": "assets/js/11.e99c7b8a.js",
    "revision": "e15a05dae899e32ad7bbd035da5be9a2"
  },
  {
    "url": "assets/js/12.a93213d2.js",
    "revision": "7c0c9568837b2ab1b8f424a866fda3e6"
  },
  {
    "url": "assets/js/13.02fbb89a.js",
    "revision": "20165e2b28a9b785ba83c8c788f7d5e5"
  },
  {
    "url": "assets/js/14.4f99068b.js",
    "revision": "967a6cb02b9e748829dbcdb8111a20cb"
  },
  {
    "url": "assets/js/15.964ab863.js",
    "revision": "57e8cabca91eca040424b03c2e64a492"
  },
  {
    "url": "assets/js/16.cd446dcc.js",
    "revision": "63f6a454f08f7b4c7787c57f0eb956da"
  },
  {
    "url": "assets/js/17.a3fa2c9c.js",
    "revision": "50736ee47981352e465b5383a7bc223c"
  },
  {
    "url": "assets/js/18.9e19a351.js",
    "revision": "f93650cb3b56d08e15ed045a2b12647a"
  },
  {
    "url": "assets/js/19.c11878f8.js",
    "revision": "7261202dc1b78e75ab330fe74437aff3"
  },
  {
    "url": "assets/js/2.aaeb4896.js",
    "revision": "f239c7dd689f688e9e7d3123b630a2eb"
  },
  {
    "url": "assets/js/20.bb371853.js",
    "revision": "140df51b15c4b0c1aeae0e0422cf1cb9"
  },
  {
    "url": "assets/js/21.0418ef18.js",
    "revision": "59a289ad9ea1965ea9c1a2cc0e264745"
  },
  {
    "url": "assets/js/22.82bb54fd.js",
    "revision": "717509d29e44f27ca9235b78e287be6a"
  },
  {
    "url": "assets/js/23.1904a03a.js",
    "revision": "24627ecfd73e6943d92a43ff6e1f89ec"
  },
  {
    "url": "assets/js/24.fdff1631.js",
    "revision": "0d005b0f324f2c1a65b7c89fd77c5632"
  },
  {
    "url": "assets/js/25.ee058705.js",
    "revision": "c8f6de9d4adb160042e9576bf335d701"
  },
  {
    "url": "assets/js/26.ea9d81c1.js",
    "revision": "6eec2a586ee4998e8b873b5ca09a699c"
  },
  {
    "url": "assets/js/27.a9a40076.js",
    "revision": "acec76de0113c6d8cfa5629d8ee740a7"
  },
  {
    "url": "assets/js/28.8d3940fd.js",
    "revision": "df197e8c4c84c75baaea5a12eae82880"
  },
  {
    "url": "assets/js/29.3da648b9.js",
    "revision": "6a4d3ff53bceeff98aa7195bbc3f3a18"
  },
  {
    "url": "assets/js/3.db1fdbe7.js",
    "revision": "44519fcfeaf87a5dfb26d518acdd9f4d"
  },
  {
    "url": "assets/js/30.6bf342f8.js",
    "revision": "8fdc333b3e2bbd6d5b1b10f1c8ad1640"
  },
  {
    "url": "assets/js/31.3b9745a0.js",
    "revision": "d954d49ffd39ff3f70515564932d8bf7"
  },
  {
    "url": "assets/js/32.f3337848.js",
    "revision": "7558cc04b337cb66bc65620814ec413a"
  },
  {
    "url": "assets/js/33.d1ff0425.js",
    "revision": "6ec60e927c3125eee0beeaed8b7b4b57"
  },
  {
    "url": "assets/js/34.9a22f2ae.js",
    "revision": "20ddf1f780b9aeab663f6c0e5b4b9f81"
  },
  {
    "url": "assets/js/35.bb4be527.js",
    "revision": "0441f8e99d3951a9c2524ebdc20187cd"
  },
  {
    "url": "assets/js/4.976efe72.js",
    "revision": "05dd76800f82304c52af06b7d95af9be"
  },
  {
    "url": "assets/js/5.229db375.js",
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
    "url": "assets/js/8.9ea9d0dc.js",
    "revision": "186593b4a1145648142ca7ca99d3d2e2"
  },
  {
    "url": "assets/js/9.6665d925.js",
    "revision": "53b3ce4321a4237ea30890c3f3b0c5c3"
  },
  {
    "url": "assets/js/app.7873dbaf.js",
    "revision": "375f8ae0db8e9b94cd17d73c72164d57"
  },
  {
    "url": "guides/basics.html",
    "revision": "5d44292eb5015bea40854dabb196e27c"
  },
  {
    "url": "guides/development.html",
    "revision": "b7787fc68ec14f62554b0635ae151984"
  },
  {
    "url": "guides/index.html",
    "revision": "883cda972f5a65c25f88c56968442a20"
  },
  {
    "url": "index.html",
    "revision": "cdb88be09f9a4789031939840a9bcbaf"
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
