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
    "revision": "3874d9fda311143ac80b058390d3bb68"
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
    "url": "assets/js/12.0bf718b9.js",
    "revision": "304694a6570ded546a43d37e2111677e"
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
    "url": "assets/js/17.d03b3db2.js",
    "revision": "13a68ee4e2168c9ffccac54e4705a7c8"
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
    "url": "assets/js/app.b09109d7.js",
    "revision": "c9e5f9d4c53dea785637c1822612f171"
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
    "revision": "daf7ea6a397a5adae23c090e9be4a8f7"
  },
  {
    "url": "categories/java/index.html",
    "revision": "4a75c355ad0204504ef74c1e8e792220"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "8f49dba84b588cde14ba44c66bb20fe6"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "ca9efe0d46e33bca9f23c18f437f2064"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "309af714a17422b1a5e91492d976331a"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "f73cf102d2c1b14364e747f081031d8c"
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
    "revision": "c201cc513552fe25c70d1d6de644c233"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "5bb3b17bb5d8c7e6907895542cf884ac"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "df7ab9642bb0e3b713763819157b6779"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "ef2f0bc66fd06309d5ba3364620ddc18"
  },
  {
    "url": "tags/js/index.html",
    "revision": "50121ebcc7dd73cbe8a3fb2b0f8c8de4"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "3c8e743d101a40205a6e563c9a28a21b"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "ee53a5d55680229ed204dae85f63603a"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "d25d18ce6f3dde1619000bd7d9b4dca3"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "62b1e0cea3cd755fa1dc9d2efb50354e"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "cfc52c1d831c6a8576ecad4ab742bfa3"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "fa4438a1d8efdfcce1b4c9d8ef2300f0"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "d24acada44f608fdd07f6cbf080a5b0f"
  },
  {
    "url": "timeline/index.html",
    "revision": "00c6b169bb42878a976f1f9f9e68c2b9"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "a3a8401ff98e85f08101bdfae89cd776"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "d5368d3e6e5e9bd02cb83cf1afde34ac"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "626900c7d9a404be4aa337cf62395895"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "4130539ef88287f43e05b91635d4f5b2"
  },
  {
    "url": "生活分享/life.html",
    "revision": "a8d955e9b70304748edcf873b4f4df79"
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
