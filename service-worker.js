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
    "revision": "69294182e156180e7d8d6ddf21fe570c"
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
    "url": "assets/js/15.5b359dcc.js",
    "revision": "a9267e8b45fc33171454fc7a2266bae5"
  },
  {
    "url": "assets/js/16.2dfcc019.js",
    "revision": "f1a5ceffe3cb9147f59f01c5658b2d5e"
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
    "url": "assets/js/app.ffbe7bca.js",
    "revision": "9ae7b64f880674fb11b9306e0b503b4a"
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
    "revision": "a7050af9429ec766e6e4ab2140b274c0"
  },
  {
    "url": "categories/java/index.html",
    "revision": "9b70c8a36e9acbfb2f94902068d687d3"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "94aefaab31085aaab738595c555c0149"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "6d2c9e4bd5adaedce2257b0ce553592b"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "5e26c587fa105d68646d3443517ce98f"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "4bc658572fb8c9f1e87bf0872a4e818b"
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
    "revision": "0f2046d5597a21dbbfc1169d46d32aac"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "af58ae20f0fd5b9c2ddd9905ae04c081"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "bda781fc07cb7e3da7eb264353b3acb4"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "03aa9faeddd126d2bc0459c151d01966"
  },
  {
    "url": "tags/js/index.html",
    "revision": "52712fa84a3e86f12d4f0a0dcb085641"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "1633f541bb9c74d2f71f0cc2a952c31a"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "9abb6a672c4589751fca47c1c2308f6b"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "81823dd76ae3a2fbd0aeb179184e9901"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "ee470ec92cd47213b35fbb1373a7c423"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "c69bd6412d055c2567874b55c611ce01"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "edd5771b0caa3033f7251e475a54ef97"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "506c255191d9bae1a1bc0a588184f291"
  },
  {
    "url": "timeline/index.html",
    "revision": "e3763cc5a019edf834966e62e7371d21"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "c94791a7e3d799d704216e17c23a795a"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "eeb76fc1ec7941caa3db2d0373e07280"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "42695d59f2bed0688f49e7a1ab0671b9"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "f5f939ac962db795f04c8ed2c56820cf"
  },
  {
    "url": "生活分享/life.html",
    "revision": "7470615194724e403e8ae3ccc04269db"
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
