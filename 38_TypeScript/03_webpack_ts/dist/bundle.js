(() => {
  "use strict";
  var o = {
      490: (o, e) => {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.sum = void 0),
          (e.sum = function (o, e) {
            return o + e;
          });
      },
    },
    e = {};
  function r(t) {
    var s = e[t];
    if (void 0 !== s) return s.exports;
    var n = (e[t] = { exports: {} });
    return o[t](n, n.exports, r), n.exports;
  }
  (() => {
    const o = r(490);
    console.log((0, o.sum)(20, 30)), console.log("Hello World");
  })();
})();
