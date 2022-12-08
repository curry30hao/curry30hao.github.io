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
    "revision": "c42e31d6fb57ef18b77acb4526e5b88b"
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
    "url": "assets/js/12.b445cba1.js",
    "revision": "54fb6d95764e1a0121a73196f188bbbd"
  },
  {
    "url": "assets/js/13.1e31eb7d.js",
    "revision": "88907df55ddf0e92e7d824fee3f0a94f"
  },
  {
    "url": "assets/js/14.54678147.js",
    "revision": "cc6353588aaf3730546012d0bec820b8"
  },
  {
    "url": "assets/js/15.0675c2c4.js",
    "revision": "7b8054856375ad20b24dac641d4f4749"
  },
  {
    "url": "assets/js/16.afdd4ace.js",
    "revision": "befece637990c090cf157dbdbf7d2f81"
  },
  {
    "url": "assets/js/17.1a2c1ecd.js",
    "revision": "9e03087b3f532f65b42b9202be0e7af8"
  },
  {
    "url": "assets/js/18.403ab48a.js",
    "revision": "d694268519b57a4802a37a1900aa9515"
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
    "url": "assets/js/app.bf9ceadd.js",
    "revision": "2ef33d943f21ed703fed48df6f733844"
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
    "revision": "a01b3ff78370c212d9a43104c23b66ed"
  },
  {
    "url": "categories/java/index.html",
    "revision": "646f0c9377abc71dfe86d895a8b6a099"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "e035182a2cde5050d89c95f4cb9243f7"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "d6c21f7d44e3f2fa6189efee2bee0d45"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "09d573dbeafd9d844a7b430f47fe02f0"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "c135ab7bb52b562fb890f24e12ad3f68"
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
    "revision": "10a9b16fbcade90f7b97f817ab41cdf3"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "a760252e4f13936ec901e69a8e8436d0"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "458b8244fec0a17309d6e98cac08e1f7"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "322e74f1de58f412b96679624d1649a7"
  },
  {
    "url": "tags/js/index.html",
    "revision": "c33b753fee954faae1589c02d71e160e"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "1e7222b1e3e6b1f3792f708b1c740b34"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "771ee8b298d7f7eaab61bdff739e64d1"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "7f55498092c660df14e0b874c9517c87"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "1f38715a0ba5e5d103e789940d09b5f8"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "06c020bfdf3c6c7279cb14ad40cb4e6b"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "73304e96c5e7a7edbc8c995d3c4aa2b0"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "085cb6e9cea722a7106e47b268c639ce"
  },
  {
    "url": "timeline/index.html",
    "revision": "c4b416169f6df08e6b840477328602a5"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "cc1781f45513a11243e419bd81f18d69"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "8f075e374576c886ed93036ece317856"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "bb15b4dfe9c1de1da0828a9d8ec28b2e"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "3944c377294b96f5d78c2031ffc30fe2"
  },
  {
    "url": "生活分享/life.html",
    "revision": "758c43dcaebcf7fcba23da39a95d2db1"
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
