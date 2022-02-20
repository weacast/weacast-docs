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
    "revision": "0f4bf854dfef88cb1dd87863c542f65a"
  },
  {
    "url": "about/contact.html",
    "revision": "bd8b981b5014d8073fde91c35bb07c46"
  },
  {
    "url": "about/ecosystem.html",
    "revision": "c5e9fe10e96f342e8f4c4a8307db3215"
  },
  {
    "url": "about/index.html",
    "revision": "2f9665c74ec97eb5bee1d955ffd28da9"
  },
  {
    "url": "about/license.html",
    "revision": "0fe4f5946f2c3eb1ac26446c013cec6d"
  },
  {
    "url": "about/roadmap.html",
    "revision": "5bdde27915e7d7f84f7912dd8a953b3f"
  },
  {
    "url": "about/showcase.html",
    "revision": "f328f33d1ac32e80c8414b74dee114ad"
  },
  {
    "url": "api/alert.html",
    "revision": "d376842fe9122493f0cc140adad96720"
  },
  {
    "url": "api/application.html",
    "revision": "29c8cdc15cc61065a82baddca98a0f02"
  },
  {
    "url": "api/element.html",
    "revision": "8143f7b14524d7f7ee1492ac55513cc3"
  },
  {
    "url": "api/forecast.html",
    "revision": "7930e9df3ed29ab6a7423245bb4160f9"
  },
  {
    "url": "api/grid.html",
    "revision": "2be9977e4f1da3dacfc3a6867ba73691"
  },
  {
    "url": "api/hooks.html",
    "revision": "2d89299de3e7a004cc81c13d8cb98dc1"
  },
  {
    "url": "api/index.html",
    "revision": "ca2909c201e714f92cb27b18614cb5dc"
  },
  {
    "url": "api/layers.html",
    "revision": "7acb9b933922eb7ddccda669edc21eb2"
  },
  {
    "url": "api/loader.html",
    "revision": "87805df76c3bd59e7bceb26c7e64ba8b"
  },
  {
    "url": "api/mixins.html",
    "revision": "68f0e1ae22367b23f7fb7be136d1a397"
  },
  {
    "url": "api/plugin.html",
    "revision": "df9eef27c45ac3235d4e3ca96a11a733"
  },
  {
    "url": "api/probe.html",
    "revision": "ed0079d81cdcfd07b233a28783aa9332"
  },
  {
    "url": "architecture/component-view.html",
    "revision": "a1f2c07714ebbb394a6c8943be0deed5"
  },
  {
    "url": "architecture/data-model-view.html",
    "revision": "f452bfe84e63e021a52a21066121d77f"
  },
  {
    "url": "architecture/domain-model.html",
    "revision": "e1ca7bf7ba8fa8f2e8cb439069520d21"
  },
  {
    "url": "architecture/dynamic-view.html",
    "revision": "1c62e34263240df0f641b528db9fe630"
  },
  {
    "url": "architecture/global-architecture.html",
    "revision": "8d5e380c6b938348b96da80aed0b9b25"
  },
  {
    "url": "architecture/index.html",
    "revision": "e79f4219cf0de9c050194b981153dc3e"
  },
  {
    "url": "architecture/main-concepts.html",
    "revision": "0eb862f6045e6c1123316f0dda866f8a"
  },
  {
    "url": "assets/css/0.styles.8a9eb203.css",
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
    "url": "assets/js/10.e57b0666.js",
    "revision": "012b8a5033b56998e9adbe8b7ae06140"
  },
  {
    "url": "assets/js/11.079423a0.js",
    "revision": "da3bd11b2ad54225bb61f3b54e1e7555"
  },
  {
    "url": "assets/js/12.895f4856.js",
    "revision": "adc7a90856d5d1973e87e6d026487295"
  },
  {
    "url": "assets/js/13.60d2f144.js",
    "revision": "958cbeb54ae4905f7142270436d44801"
  },
  {
    "url": "assets/js/14.1164be86.js",
    "revision": "3d4fec24cd71f7de5c7751c9f1c4911e"
  },
  {
    "url": "assets/js/15.422dd23b.js",
    "revision": "d6043ecb61fc74a5f6d0b7e70116e70d"
  },
  {
    "url": "assets/js/16.b4137542.js",
    "revision": "078044a82a4f027b29f9408b0c2fc749"
  },
  {
    "url": "assets/js/17.6d7c72df.js",
    "revision": "db4e8f0aa5b06ef29204d9b7eb1d5e6a"
  },
  {
    "url": "assets/js/18.e92da8ea.js",
    "revision": "24fb29a8bde2fb885a6ea1852e0a95c9"
  },
  {
    "url": "assets/js/19.99783da3.js",
    "revision": "597c642202c1adfd9268d681efc54ca7"
  },
  {
    "url": "assets/js/2.f24c5434.js",
    "revision": "aa5a6256197960095c8c88f4fa34d63a"
  },
  {
    "url": "assets/js/20.d5074065.js",
    "revision": "987da080ff97f6b840e8eee1a7afa023"
  },
  {
    "url": "assets/js/21.7bb3f548.js",
    "revision": "5ac7a62725109312e3f1282ca385af85"
  },
  {
    "url": "assets/js/22.f8f199c1.js",
    "revision": "55ade516e67f4ae75384d3914c813698"
  },
  {
    "url": "assets/js/23.86231273.js",
    "revision": "5de55807fd1a0768214985381b09a9fb"
  },
  {
    "url": "assets/js/24.abbbcc17.js",
    "revision": "bb97bb05210361ce722dbc137a554cf8"
  },
  {
    "url": "assets/js/25.c53090ce.js",
    "revision": "9d5f1b335d788e0ab31a485bfcc48862"
  },
  {
    "url": "assets/js/26.d2bc0fdd.js",
    "revision": "c47ec48593c9fdf6b5c34bbe83255add"
  },
  {
    "url": "assets/js/27.c5d41e0f.js",
    "revision": "b5a9f675acb83dbfb61cc82e017fdd0c"
  },
  {
    "url": "assets/js/28.27aee7c0.js",
    "revision": "924bfc0eaa78111ac8b222d794a12d3b"
  },
  {
    "url": "assets/js/29.d98b7b24.js",
    "revision": "a793b4764c48d4fd922931021aeeacd7"
  },
  {
    "url": "assets/js/3.3a98c1a2.js",
    "revision": "6be5cdc4333b115467b1f606f119d9ea"
  },
  {
    "url": "assets/js/30.930cf2ff.js",
    "revision": "2ec86ef9bb167c56d1e658f352a237df"
  },
  {
    "url": "assets/js/31.8a0dcd9f.js",
    "revision": "35f6fc17ae8f1969bc2fdcc13b23339c"
  },
  {
    "url": "assets/js/32.7e751091.js",
    "revision": "f1e61bc87eb947c40c16f39eb18d95c4"
  },
  {
    "url": "assets/js/33.d5019c8e.js",
    "revision": "f09dd1473b421b0ce98057c4c093a698"
  },
  {
    "url": "assets/js/34.a6de3e7d.js",
    "revision": "8874d1eb8178c986c99ead53cce82d67"
  },
  {
    "url": "assets/js/35.fda121c8.js",
    "revision": "6ac6287e38aa766355e3aecb826cacee"
  },
  {
    "url": "assets/js/36.b23d96c7.js",
    "revision": "3c9f3b77a572ba145ae6b76c6d268da1"
  },
  {
    "url": "assets/js/37.8345e9f9.js",
    "revision": "5c986ba2d6cf8a81e6ea42ee03b4928e"
  },
  {
    "url": "assets/js/38.180bf357.js",
    "revision": "9e4bb731937256e43ee07c229f4ac794"
  },
  {
    "url": "assets/js/39.6fe0ccd7.js",
    "revision": "be7943bbd04571dd6c07a402af18cc9a"
  },
  {
    "url": "assets/js/4.3c99ddd2.js",
    "revision": "c3e18a4382353f56f5cc54a07962fdbe"
  },
  {
    "url": "assets/js/40.3ed47f94.js",
    "revision": "cdde7d40f028d7968e799b58efadc335"
  },
  {
    "url": "assets/js/41.bcee246d.js",
    "revision": "8d4353fc67e7dc9e211ea8eacd7cd7ef"
  },
  {
    "url": "assets/js/42.77b50b8d.js",
    "revision": "c6e23ceba7f91956a51092d2ab432bff"
  },
  {
    "url": "assets/js/5.00b4a297.js",
    "revision": "76fb2f5df1e5902700df7661b2960a39"
  },
  {
    "url": "assets/js/6.71d8b516.js",
    "revision": "3a7c3fbfc9bf5c3cf58ce55ae2b8539f"
  },
  {
    "url": "assets/js/7.4bcbadd6.js",
    "revision": "9b3d3c7614068f169040f703a8481bd2"
  },
  {
    "url": "assets/js/8.103355a9.js",
    "revision": "d21e0f2799c88fb2d0aec3bfbd8a3fa9"
  },
  {
    "url": "assets/js/9.ebf32251.js",
    "revision": "ea7da87e955f2b269b59c1afeab4ffc5"
  },
  {
    "url": "assets/js/app.556f4888.js",
    "revision": "d6b86c7e7cc8dcc0ee15e851fb49e8c9"
  },
  {
    "url": "guides/basics.html",
    "revision": "1fd9c1baad5f7f1a27f5caaf41f49c77"
  },
  {
    "url": "guides/development.html",
    "revision": "7a6e26641cd3ddb56c46519ea4d34ca6"
  },
  {
    "url": "guides/index.html",
    "revision": "1ec4513b6a845d5edf271e0e85a6b81b"
  },
  {
    "url": "index.html",
    "revision": "f8e4c357f60d071b41adf35509f67ef7"
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
