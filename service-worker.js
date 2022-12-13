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
    "revision": "ab75ccee4397a51a7fbcd1d4b9be8f23"
  },
  {
    "url": "assets/css/0.styles.57064493.css",
    "revision": "bdfc107ffa09860922a6644b10cc5fcd"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.7cc586ae.js",
    "revision": "e1122f8868c4e6315e8a7bf11d315b22"
  },
  {
    "url": "assets/js/10.51e1d46f.js",
    "revision": "8f92585f2c257ab4fdc9c04b9a4e6b04"
  },
  {
    "url": "assets/js/11.64843a3d.js",
    "revision": "06ffa0bb3165b1d8ec2e19e1297c6565"
  },
  {
    "url": "assets/js/12.4fb260f4.js",
    "revision": "975fb7d05964bb074f6c4f8eaa6d4d9a"
  },
  {
    "url": "assets/js/13.1e31eb7d.js",
    "revision": "88907df55ddf0e92e7d824fee3f0a94f"
  },
  {
    "url": "assets/js/14.a516bb2a.js",
    "revision": "000372ad9fb7f5d9a5477845aed8a2f1"
  },
  {
    "url": "assets/js/15.7da432ba.js",
    "revision": "4af495968cb4e72dfefdb55963743c7f"
  },
  {
    "url": "assets/js/16.afdd4ace.js",
    "revision": "befece637990c090cf157dbdbf7d2f81"
  },
  {
    "url": "assets/js/17.f6dd119f.js",
    "revision": "f8bf5c88f9cd04152dd34f36961f89d7"
  },
  {
    "url": "assets/js/18.e40715a5.js",
    "revision": "32a5f8ea1bf0cef421b33b6bffbb0016"
  },
  {
    "url": "assets/js/4.108a7e30.js",
    "revision": "2971ff8699ce6f0f8b7e5017c3ef1a5e"
  },
  {
    "url": "assets/js/5.dd47fe1a.js",
    "revision": "7cca75e8e4ba93d3c9450f7abb9a64a5"
  },
  {
    "url": "assets/js/6.298f61e3.js",
    "revision": "1ec20a6e7e67382f2246b0f1365beaf5"
  },
  {
    "url": "assets/js/7.2bffdee6.js",
    "revision": "7d30b98bfd57db7181109a2a075025be"
  },
  {
    "url": "assets/js/8.dded6dc4.js",
    "revision": "cbe2e70db850a968b3fe5ccba1bccd99"
  },
  {
    "url": "assets/js/9.970031bf.js",
    "revision": "bca34c4ae9ae3c148ea244fbbf490c70"
  },
  {
    "url": "assets/js/app.c9899929.js",
    "revision": "9b8de594b14a9acd14a13de2f729d7af"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "d87b8800faffea165e2a687cbc58c31f"
  },
  {
    "url": "assets/js/vendors~flowchart.8e492b97.js",
    "revision": "5f74bb947a906e821af871857bb92c32"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "13b3bbd9c6bedd3b5a3e172ca7873c56"
  },
  {
    "url": "categories/java/index.html",
    "revision": "97be6e99db2c493e7fc5f172f9a5dad1"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "9f652ace16f754bc0c9114478ff7190c"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "9fc5f9f2291d0159a98ca00834d1e3cc"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "e5c86a515cb16ec999ef43306e1ffbc8"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "bec556f257ea8c822b35f94982c29a6e"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/5.png",
    "revision": "48d66ba9e41461723605b34692f3e8d3"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "c18f569d1358d5fc966b3fe80d31e3ac"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "22785c81a3c89e81adf09c837fd4d295"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "fdd5c65935cd237a7c6be88a45504245"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "c15f9f0cd78d948178bbccdf39191cff"
  },
  {
    "url": "tags/js/index.html",
    "revision": "4e511e01dc615bd1e24d9a080e6f57c1"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "7e86678a3b7e6b859bd19e6599f0fbc9"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "7c99112d78e00487102887ae84bbd425"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "59a63602d7e074650f330c90f3348ab2"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "6f4d25ed5edc9e339fb95568762427af"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "6c2d79b127a0415c195ba7d75078d6a6"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "ccb0cf07674adf2b6e1f358188098087"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "5477bc1fd1de2575f70b19c964286fc4"
  },
  {
    "url": "timeline/index.html",
    "revision": "be2f80b188ee42ea0e7148a44624d11b"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "7152bab0ed0a9cec8f070545cc424d87"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "6a77c0ceeba014f35758e0ec9d2b0bde"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "2a6c8b27c5e28688fcfe89d26f942e08"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "6693b4873f4324617bf16da31bae8eba"
  },
  {
    "url": "生活分享/life.html",
    "revision": "6b23c7a0d1739d89e19ce490872fa1c2"
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
