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
    "revision": "16105329cf09fae14cf19fbb9e9c8594"
  },
  {
    "url": "about/contact.html",
    "revision": "0236d6ae6ddc446d347f52ec7411df77"
  },
  {
    "url": "about/ecosystem.html",
    "revision": "cb599efa554eb95b6925132c65927500"
  },
  {
    "url": "about/index.html",
    "revision": "aeeb0429c408deb7904d84003c96bdad"
  },
  {
    "url": "about/license.html",
    "revision": "e1d282ec1cc3ac2f560bde6101627747"
  },
  {
    "url": "about/roadmap.html",
    "revision": "648f5d8d9a7ac0756b14328c574e2880"
  },
  {
    "url": "about/showcase.html",
    "revision": "8e47bc41b756b7ecad552ea25a7bec0f"
  },
  {
    "url": "api/alert.html",
    "revision": "8c978614f662f4601b4c03c7764110f7"
  },
  {
    "url": "api/application.html",
    "revision": "228241691cd74e84301b3a8a57fe5c1e"
  },
  {
    "url": "api/element.html",
    "revision": "04bdfb7764f83de6b7a2c2c0ada2b7c4"
  },
  {
    "url": "api/forecast.html",
    "revision": "502a5f25d7b1bfdd2d23575ba9a0cce1"
  },
  {
    "url": "api/grid.html",
    "revision": "43e2c9c1556109ab104a1fb10614272a"
  },
  {
    "url": "api/hooks.html",
    "revision": "08af98748587e191b4bdef6abd155142"
  },
  {
    "url": "api/index.html",
    "revision": "8c14691734ba70c1b3343060910191a8"
  },
  {
    "url": "api/layers.html",
    "revision": "9612c811b9d6dd7df8a68a80fa096626"
  },
  {
    "url": "api/loader.html",
    "revision": "4d55be022b260b3b40f0820bade7c1f4"
  },
  {
    "url": "api/mixins.html",
    "revision": "13d5245e0406f82efc7e3e2f011fee0b"
  },
  {
    "url": "api/plugin.html",
    "revision": "2a2fa1150b00fd7027a1f04766d54f26"
  },
  {
    "url": "api/probe.html",
    "revision": "cae886dbbaa67ccd1e07fc880e647296"
  },
  {
    "url": "architecture/component-view.html",
    "revision": "d608f2d392554ab0f85f532364d34187"
  },
  {
    "url": "architecture/data-model-view.html",
    "revision": "b3671f54d6cb8511834dbae5fa8ba617"
  },
  {
    "url": "architecture/domain-model.html",
    "revision": "6d0f8d91f8ef766ff289a3fa9fbeba20"
  },
  {
    "url": "architecture/dynamic-view.html",
    "revision": "21a1322d2e0bc1c7dff721e5b75502e4"
  },
  {
    "url": "architecture/global-architecture.html",
    "revision": "82bc4b89a8e1dfe9f008d886ae7be12e"
  },
  {
    "url": "architecture/index.html",
    "revision": "5a1fdfb494971468974dc5df927c6cf3"
  },
  {
    "url": "architecture/main-concepts.html",
    "revision": "c0808206b3f3d81ef0e37b32c7ab0e27"
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
    "url": "assets/js/10.ad0accb6.js",
    "revision": "444d7f87fe7c7ccee288875f79765a8f"
  },
  {
    "url": "assets/js/11.da498cc9.js",
    "revision": "c47d53a4b5b218fa1fd00111e6b35410"
  },
  {
    "url": "assets/js/12.3e1bb2f0.js",
    "revision": "bdae510727707d963bfe77509601e311"
  },
  {
    "url": "assets/js/13.a2a71ba1.js",
    "revision": "d012c9422fd0b18c7e3d5cde501069d7"
  },
  {
    "url": "assets/js/14.3eb8d0c9.js",
    "revision": "18b46933d6ce4455d924d7bdf1913b25"
  },
  {
    "url": "assets/js/15.340bd6be.js",
    "revision": "90d5b61bb2714645246c63f1bb11c900"
  },
  {
    "url": "assets/js/16.a4626194.js",
    "revision": "38ccc5b60f1f2eb8621ac5394c9b9a50"
  },
  {
    "url": "assets/js/17.28f01782.js",
    "revision": "9b9dd295206af35ee8a1bbcfdda90d4a"
  },
  {
    "url": "assets/js/18.752bb612.js",
    "revision": "f8cbe5feacad767fd5044539ce19d500"
  },
  {
    "url": "assets/js/19.e81513ac.js",
    "revision": "8ad196aa5dac9c4adf5d243384e8228c"
  },
  {
    "url": "assets/js/2.9ac8adca.js",
    "revision": "4b94753e4f3d16d9798aa3f6575e6fd7"
  },
  {
    "url": "assets/js/20.ce09acee.js",
    "revision": "2b66675d4fb30abdaea6383a0f39dda1"
  },
  {
    "url": "assets/js/21.ae73b946.js",
    "revision": "123fb4f676f827374ab675a56ca28c67"
  },
  {
    "url": "assets/js/22.4a70039a.js",
    "revision": "6fc68aa4cce93c48c17ce7821b75ffe3"
  },
  {
    "url": "assets/js/23.fb4c00b1.js",
    "revision": "c6d9bad6cf7dc054f5c6a0169bd5caa0"
  },
  {
    "url": "assets/js/24.b4870151.js",
    "revision": "3e3f021927c515ff650918a9dfda306f"
  },
  {
    "url": "assets/js/25.141d46f0.js",
    "revision": "ce769d4a1d3c6af77e688b071ee75d81"
  },
  {
    "url": "assets/js/26.6205acf9.js",
    "revision": "2eacac836d487bd9ee28628aa7d4e947"
  },
  {
    "url": "assets/js/27.47c1bd2a.js",
    "revision": "e779ec1e18b6d5f3af02cadc7e7da467"
  },
  {
    "url": "assets/js/28.1bc373da.js",
    "revision": "97afa4643d065fd594688ae0c606619d"
  },
  {
    "url": "assets/js/29.102ea1ef.js",
    "revision": "893a53fe013146ceafcfc43d3ebc024d"
  },
  {
    "url": "assets/js/3.70caf0e9.js",
    "revision": "58467fe58e26da49c0a125a7cb5c4cb7"
  },
  {
    "url": "assets/js/30.ac4668e0.js",
    "revision": "f8188b2664f37f2336196f39fb2925f2"
  },
  {
    "url": "assets/js/31.1c75b669.js",
    "revision": "399234f0d0256c194f75fd442ee1b9d5"
  },
  {
    "url": "assets/js/32.ebf32792.js",
    "revision": "115be2950351d6b6e47faaba2ff6f4ab"
  },
  {
    "url": "assets/js/33.809c6856.js",
    "revision": "9990105b8970531b4199cc216eef5192"
  },
  {
    "url": "assets/js/34.d02b1203.js",
    "revision": "7ae32577f4c1cb93d928d48d1c6c7790"
  },
  {
    "url": "assets/js/35.f11da06c.js",
    "revision": "699544a5c748cb6108054e233b57af77"
  },
  {
    "url": "assets/js/36.33b29dab.js",
    "revision": "c0865a268eca31b7430a43aa7011c285"
  },
  {
    "url": "assets/js/37.0f0e0c6e.js",
    "revision": "be4895736d19d1da5f4e374c08afb235"
  },
  {
    "url": "assets/js/38.f29ed9eb.js",
    "revision": "e011a2f3197ed1d59e69699f49054c42"
  },
  {
    "url": "assets/js/4.1f90fdc6.js",
    "revision": "f2fa43f37697708097688f8e07067794"
  },
  {
    "url": "assets/js/5.2dd0e172.js",
    "revision": "a227c29c6e68dcf44f0de1372dbe867e"
  },
  {
    "url": "assets/js/6.7b708730.js",
    "revision": "e7d432075947061745880b6756cf6c68"
  },
  {
    "url": "assets/js/7.c6bdc225.js",
    "revision": "4c0445cf52584562c8892d0e5830b9ca"
  },
  {
    "url": "assets/js/8.16a0776c.js",
    "revision": "48b3d841b682bb320ee7473651956102"
  },
  {
    "url": "assets/js/9.6ec7a8d8.js",
    "revision": "28b58b1d87dd9c396eba05465edef186"
  },
  {
    "url": "assets/js/app.6ac59e66.js",
    "revision": "69f6944dec0d8138ff6823b1a0a1e942"
  },
  {
    "url": "guides/basics.html",
    "revision": "73642153aff60c31541a3b02a00d7fb4"
  },
  {
    "url": "guides/development.html",
    "revision": "9cf80a73310b74479c9249cc1ca278d9"
  },
  {
    "url": "guides/index.html",
    "revision": "19ff2aa807baf5ae6af055a593a31ed2"
  },
  {
    "url": "index.html",
    "revision": "70c169c2857eb7cc8cc3a8f8d30ef7fd"
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
