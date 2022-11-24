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
    "revision": "9d2f3f39caf730aa41cb8e93724e1b2b"
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
    "url": "assets/js/12.2ddbc40a.js",
    "revision": "34daa3004d2519dbf33b84631dcb4446"
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
    "url": "assets/js/15.ee31de56.js",
    "revision": "556a08b194bac7e4590106cf77c70c50"
  },
  {
    "url": "assets/js/16.c8f31470.js",
    "revision": "22924c3aa81d9c82f861200aec5d4679"
  },
  {
    "url": "assets/js/17.f6dd119f.js",
    "revision": "f8bf5c88f9cd04152dd34f36961f89d7"
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
    "url": "assets/js/app.7313f66a.js",
    "revision": "bb4dd62ebd3ef0eb53f3aba654fce8b5"
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
    "revision": "7153e802ace3443cd4fa7b82cc47e906"
  },
  {
    "url": "categories/java/index.html",
    "revision": "2665553005a0cf35af526b5f6e9b6ec4"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "3011b0cb8d1117162c14c95b0a150563"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "ed40cae6e775475f9023c0feb6b307ee"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "e43edabd27b41d5e6493504df3a418cc"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "435dbba3d459baa986c822305f5b28a9"
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
    "revision": "bfde2195feecfe98c52fb07a168c15e2"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "bc8b9d882d0985ae19693a3763bcb76b"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "e23ccbc7f429650e1678af1e985aead4"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "59c4ab101081400f561a65e163ab9eca"
  },
  {
    "url": "tags/js/index.html",
    "revision": "2c9b6cad98d9c14f8dc176f340c3dda2"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "92a782187997d48dbe8192d59b9b5866"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "5d2014cd95787d23bb8ae18095e0715b"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "12d91689f208b69e63562633fdcc3dd9"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "294258b7537bbf9ff5a3128222e581e0"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "bcb90ffca761adec46f504a8622478f0"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "bf3fbde713a1b73cae8323d4c1537deb"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "e15e95dd284175e9dfe571cf1343df84"
  },
  {
    "url": "timeline/index.html",
    "revision": "caf9aa2f52bd242b57ed8db6abb17fba"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "aeb122fdfd20fc390f9409d399835b3b"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "4c3d53859cbb56053ceaf404185afc09"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "09478128fb03f4fb0a664c3f97a8ef74"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "ba639011a07279dcfe02ee055ecbc328"
  },
  {
    "url": "生活分享/life.html",
    "revision": "bcd77602da409a7f6bb84134c65b5fe3"
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
