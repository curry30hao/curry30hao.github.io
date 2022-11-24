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
    "revision": "6c694bbadd7e124b08fedb45373ff077"
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
    "url": "assets/js/12.58b79e5d.js",
    "revision": "03ecf82cefce3ebbbb2644c493aaa943"
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
    "url": "assets/js/15.7da432ba.js",
    "revision": "4af495968cb4e72dfefdb55963743c7f"
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
    "url": "assets/js/app.b903e8b1.js",
    "revision": "4d704d1a2838ce9ce037e643f08d7c67"
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
    "revision": "6c66b6a772e568f63a51382f2b08e906"
  },
  {
    "url": "categories/java/index.html",
    "revision": "ca791f612d8053bee88c605e70bb0ad2"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "625161354e8df36cc56d9a060e15d571"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "70bde4ac4f9cb8e4784efece50943c74"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "bcc450d7ed46e27d7a0834ce12e4a8c2"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "17265244205d8ae5f816897532078a71"
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
    "revision": "259002e8f1cab5936f3fb1b9def64b49"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "4b5692e3120c69e298579a2aab2925f5"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "0de6c0bf5b081d7f56bde50938bd29bc"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "d3c31e81095305ec7a25906e5264a457"
  },
  {
    "url": "tags/js/index.html",
    "revision": "6390019f20b17a5cccff274e55bf35c2"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "e360c93f2b44d0a0269b5b1510ae7941"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "437633ad32cbf91a9d80da09e16cdde7"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "50a9b6a439d5d905bdeb543a6ad2ffce"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "00b61d9096204c34067167720707cb61"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "02bbc5f0f1a8834aaae5da969dee904b"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "d223d4de15d4e6924521dfaa9ac74b36"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "d2b1211aada931b5e27c87ffd4584eb7"
  },
  {
    "url": "timeline/index.html",
    "revision": "5f3d09157708420026a9a70fa202c4e0"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "7b0651dababedd62abb677a579b51e3b"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "bfd6dd63a0ac537a4d2e9142adce5446"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "22adb39d405a7f18d9839a88a628c43f"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "f34d1f9cbfccaeb33780190981baec2e"
  },
  {
    "url": "生活分享/life.html",
    "revision": "809302f167dea5a38493176bbd6b7080"
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
