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
    "revision": "a981e73e5edd910acd0278b79aa7a9dd"
  },
  {
    "url": "about/contact.html",
    "revision": "ed91988249d3f571b1ccd13ba635366c"
  },
  {
    "url": "about/ecosystem.html",
    "revision": "dbe9bfe652ec2ef81ebadd5ee086218d"
  },
  {
    "url": "about/index.html",
    "revision": "4417512537230295c41218e6e88d25aa"
  },
  {
    "url": "about/license.html",
    "revision": "bae99172101bff2684f5dad78c9dfad0"
  },
  {
    "url": "about/roadmap.html",
    "revision": "3f4928549d23159c71bda3ed968c0878"
  },
  {
    "url": "about/showcase.html",
    "revision": "f7cbbaa7c4dff59cf738ba1100d25c31"
  },
  {
    "url": "api/alert.html",
    "revision": "6571510df7a2d92855e33a941c649f40"
  },
  {
    "url": "api/application.html",
    "revision": "5cd24be685f7d33975253fd1056d6ee9"
  },
  {
    "url": "api/element.html",
    "revision": "9247488cce112e85bd03f6930ae420c8"
  },
  {
    "url": "api/forecast.html",
    "revision": "0adf85fe81728de9b0ff00ed8fd68f81"
  },
  {
    "url": "api/grid.html",
    "revision": "6b98e507358968b1203773e24b516559"
  },
  {
    "url": "api/hooks.html",
    "revision": "a8fbf4aa5c8492b52d6575df7cc1f89a"
  },
  {
    "url": "api/index.html",
    "revision": "8392b970a5d00ade6e516c270698047d"
  },
  {
    "url": "api/layers.html",
    "revision": "fa198321a8cd7f497e2b88c13ad65ab4"
  },
  {
    "url": "api/loader.html",
    "revision": "3f253cc9ca6637dac11c8c177cdf2938"
  },
  {
    "url": "api/mixins.html",
    "revision": "d837e00cabcc663ab875aec9f4590f3a"
  },
  {
    "url": "api/plugin.html",
    "revision": "122d8b14a604f769fb39df2f0e28648b"
  },
  {
    "url": "api/probe.html",
    "revision": "97e1d98a33b7b73072dabf9d1a26e917"
  },
  {
    "url": "architecture/component-view.html",
    "revision": "a73df586a2fc760fcc0b3a32b690f27c"
  },
  {
    "url": "architecture/data-model-view.html",
    "revision": "3fc00db47791872a390296588dce9b70"
  },
  {
    "url": "architecture/domain-model.html",
    "revision": "77ca64d99b5f8c2e8ab64ed18202b3db"
  },
  {
    "url": "architecture/dynamic-view.html",
    "revision": "ff578c1debed9decc74c17a9ad9e6db9"
  },
  {
    "url": "architecture/global-architecture.html",
    "revision": "9d62c6f1dd52f7593fe3909c9ca00c7e"
  },
  {
    "url": "architecture/index.html",
    "revision": "17d64df9d00eecd90c62ec138a9d80c2"
  },
  {
    "url": "architecture/main-concepts.html",
    "revision": "0d02f8dd6b2ef9be1fb42c0ff69dca22"
  },
  {
    "url": "assets/css/0.styles.78599954.css",
    "revision": "1e816a9cf081f45a7e9cd3e527a3d43f"
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
    "url": "assets/js/10.75c03626.js",
    "revision": "13be4d09d966cae1184039c5f13ff21e"
  },
  {
    "url": "assets/js/11.dc1b50a9.js",
    "revision": "8a143db4167a66027f5ea005560408b1"
  },
  {
    "url": "assets/js/12.925d781c.js",
    "revision": "c43c0328c22cc415d7e77969f48740f3"
  },
  {
    "url": "assets/js/13.3eaf61b6.js",
    "revision": "f99226495be5e86a2822136baece090a"
  },
  {
    "url": "assets/js/14.8247a312.js",
    "revision": "870006a3ac8a325bb399215a49fb0f82"
  },
  {
    "url": "assets/js/15.3a3e7226.js",
    "revision": "c1c8d12235c865e321e9a210d332f138"
  },
  {
    "url": "assets/js/16.1c7963e8.js",
    "revision": "3dd95138dfe717f0394622cb7057d30c"
  },
  {
    "url": "assets/js/17.cd81dba1.js",
    "revision": "30ee0ff9950e6857960bb8de4c162249"
  },
  {
    "url": "assets/js/18.4805f29d.js",
    "revision": "f1a2ce1c64ebbb85bbeddf2010f4a076"
  },
  {
    "url": "assets/js/19.4d599c6e.js",
    "revision": "cdec4ba64547db36933181a37afb63c2"
  },
  {
    "url": "assets/js/2.1fddb57b.js",
    "revision": "61fbea1adf456222f0bb08fe1b98bf6b"
  },
  {
    "url": "assets/js/20.df5b2bb8.js",
    "revision": "72c616337cc8d246f56a5b3a1fe2ebe3"
  },
  {
    "url": "assets/js/21.d3e64d67.js",
    "revision": "768424db1a85656e144cf124ca31ae78"
  },
  {
    "url": "assets/js/22.c95a9876.js",
    "revision": "366e0f94bce7465081a1d211f5a5a8f2"
  },
  {
    "url": "assets/js/23.f245eedb.js",
    "revision": "4519320f3cd1d60cbb88107b49693960"
  },
  {
    "url": "assets/js/24.c2e68222.js",
    "revision": "790b93775c307993cddad01578e2cf7a"
  },
  {
    "url": "assets/js/25.140894bc.js",
    "revision": "80628c5f2469a05aad0466144e452b61"
  },
  {
    "url": "assets/js/26.3c4cd5e9.js",
    "revision": "98475927b1fc4078cada05711c7ebe36"
  },
  {
    "url": "assets/js/27.95e74aec.js",
    "revision": "96ccea12d75561f81bd878880709664c"
  },
  {
    "url": "assets/js/28.30a179a7.js",
    "revision": "e1c2a98dbae4f9bc47affb235f778225"
  },
  {
    "url": "assets/js/29.a60f8ccf.js",
    "revision": "302571c50ab0fbb3c98f1abc35a54b8f"
  },
  {
    "url": "assets/js/3.e248fbb3.js",
    "revision": "13f4aaab6fed83a9bc884f6d1ae9cc1a"
  },
  {
    "url": "assets/js/30.0f0a6ad4.js",
    "revision": "5f77034a29471bb2d1df40c80f198968"
  },
  {
    "url": "assets/js/31.48eebdb8.js",
    "revision": "3e1160344c47317da504ed4846e4db48"
  },
  {
    "url": "assets/js/32.b4c97c03.js",
    "revision": "0786045626c1bb8144ac5f80c1f81b22"
  },
  {
    "url": "assets/js/33.b02a257e.js",
    "revision": "33923d30d36918b6a9f956e90e1ee603"
  },
  {
    "url": "assets/js/34.5b852b76.js",
    "revision": "4122498ad93049e6ccf72b953ae52e48"
  },
  {
    "url": "assets/js/35.c142324f.js",
    "revision": "743404a80be633c39cafe180c79252dd"
  },
  {
    "url": "assets/js/36.de0b4c0d.js",
    "revision": "db86c7a76d2cba7cc9a3c625664f041e"
  },
  {
    "url": "assets/js/37.b74f8913.js",
    "revision": "4a67b6835720fcffb085a53c2a707741"
  },
  {
    "url": "assets/js/38.e979b615.js",
    "revision": "069bcbfa65e0cd92524de9476d933b04"
  },
  {
    "url": "assets/js/4.a85cd15c.js",
    "revision": "6e6fe0baca4a670323dd6eb77dff4646"
  },
  {
    "url": "assets/js/5.65d10a74.js",
    "revision": "f40e13897687847a72af94b3626a821a"
  },
  {
    "url": "assets/js/6.d84217d1.js",
    "revision": "0bac577eb170258c281b620b0e1b3abd"
  },
  {
    "url": "assets/js/7.1ad8babd.js",
    "revision": "f0c73a1516b5ad288b7ee01761110c26"
  },
  {
    "url": "assets/js/8.83ecee39.js",
    "revision": "84b8983744f29164ca2dc4e05cb650a9"
  },
  {
    "url": "assets/js/9.bed5c68b.js",
    "revision": "f15fdcdbfb2260fb7c77724324e67ec2"
  },
  {
    "url": "assets/js/app.f5770990.js",
    "revision": "46c2badcaed682ef6ad04a5a4fc322a5"
  },
  {
    "url": "guides/basics.html",
    "revision": "f70125116e01ef2284e04fb3bcda9625"
  },
  {
    "url": "guides/development.html",
    "revision": "89cb6cb46808e70265b259a184e358b2"
  },
  {
    "url": "guides/index.html",
    "revision": "a702bb36e9457399cafe87c34fbcd76e"
  },
  {
    "url": "index.html",
    "revision": "fe4393b900503515a00470cd9b36e120"
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
