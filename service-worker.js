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
    "revision": "4ac8349130b4c74212c3439f4f8333f5"
  },
  {
    "url": "about/contact.html",
    "revision": "bcfbe4c7fabf93889aead4fdb3cc4396"
  },
  {
    "url": "about/ecosystem.html",
    "revision": "177c65da73c38f7b769423c528cc7952"
  },
  {
    "url": "about/index.html",
    "revision": "f36eeed728d30e43baac1ffa74fb8b85"
  },
  {
    "url": "about/license.html",
    "revision": "d25420d8bd44a84c1d83318f35187773"
  },
  {
    "url": "about/roadmap.html",
    "revision": "79ad6cc21a1a641c3d8ca9c3e464f862"
  },
  {
    "url": "about/showcase.html",
    "revision": "51c78f0dd5e784991170eaa80a2694a2"
  },
  {
    "url": "api/alert.html",
    "revision": "f4803d7940c8e743bcada57faabd40f9"
  },
  {
    "url": "api/application.html",
    "revision": "871a22a4bce5d78c4e791174679fa423"
  },
  {
    "url": "api/element.html",
    "revision": "5797e12c93c1bf670a6ba3f518916218"
  },
  {
    "url": "api/forecast.html",
    "revision": "69d2c5a56225c1409f3dc5b727044854"
  },
  {
    "url": "api/grid.html",
    "revision": "c8a12bb96ec8c45b21ed2760e748c5e5"
  },
  {
    "url": "api/hooks.html",
    "revision": "cda01e0e07bfa67b7978d5e084d17b55"
  },
  {
    "url": "api/index.html",
    "revision": "a225e682339aee23fecaf971bacb1dc4"
  },
  {
    "url": "api/layers.html",
    "revision": "c1c1ece42489c0fa56252a39a0f29ab3"
  },
  {
    "url": "api/loader.html",
    "revision": "759552e39383e4103cd293ef71649207"
  },
  {
    "url": "api/mixins.html",
    "revision": "57917dd452d2f2829777c62cf95771a2"
  },
  {
    "url": "api/plugin.html",
    "revision": "cb966f3fc85805f03632d1ab459ec0ae"
  },
  {
    "url": "api/probe.html",
    "revision": "5e1261ed91e09b7e8878199e84aa6316"
  },
  {
    "url": "architecture/component-view.html",
    "revision": "9cf83d34ceea54127629978490d28cea"
  },
  {
    "url": "architecture/data-model-view.html",
    "revision": "bdc06e748a46e29f80e748a9a2c9d77d"
  },
  {
    "url": "architecture/domain-model.html",
    "revision": "83d09c8df71c8416ee0060125f55f601"
  },
  {
    "url": "architecture/dynamic-view.html",
    "revision": "c577b6431dc31359cf10f7a6c1a23965"
  },
  {
    "url": "architecture/global-architecture.html",
    "revision": "90f1711a4296833c119eba39a95bacb0"
  },
  {
    "url": "architecture/index.html",
    "revision": "60aaf9a076b33abf609bf5b6bc71a0a6"
  },
  {
    "url": "architecture/main-concepts.html",
    "revision": "8e8b022cc66885bc7bac2a49c181fe80"
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
    "url": "assets/js/19.f123b2c8.js",
    "revision": "7ba6fd4a6da83fec1113e9b6d3cad03d"
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
    "url": "assets/js/27.00e38f48.js",
    "revision": "acec76de0113c6d8cfa5629d8ee740a7"
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
    "url": "assets/js/32.1ab21384.js",
    "revision": "c7f5412f55ad6d67b4619b1c487f50f4"
  },
  {
    "url": "assets/js/33.af756ba9.js",
    "revision": "c624c3b24d0c8589c2db191d392f5a01"
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
    "url": "assets/js/8.560a52a3.js",
    "revision": "186593b4a1145648142ca7ca99d3d2e2"
  },
  {
    "url": "assets/js/9.cfbab25f.js",
    "revision": "53b3ce4321a4237ea30890c3f3b0c5c3"
  },
  {
    "url": "assets/js/app.df00f142.js",
    "revision": "6d9a4c66cc72e67021bbf827fcd32baf"
  },
  {
    "url": "guides/basics.html",
    "revision": "5382cd4bb40f681c2094eec2f6a49c24"
  },
  {
    "url": "guides/development.html",
    "revision": "cdcf9f36a47631655b0bb7f4bdc782c0"
  },
  {
    "url": "guides/index.html",
    "revision": "02587d4fc714d398f88b3465a61e38e0"
  },
  {
    "url": "index.html",
    "revision": "e6fc9f58ae01cb36bc9215f32d86d67e"
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
