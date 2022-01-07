// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"jUDyG":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 37643;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "222e65dabdea7d65";
"use strict";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"7PGg5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Get current timestamp in milliseconds
 *
 * @category Utilities
 * @returns {number}
 */ parcelHelpers.export(exports, "now", ()=>now
);
var _random = require("./random");
parcelHelpers.exportAll(_random, exports);
var _buffer = require("./buffer");
parcelHelpers.exportAll(_buffer, exports);
var _number = require("./number");
parcelHelpers.exportAll(_number, exports);
var _noise = require("./noise");
parcelHelpers.exportAll(_noise, exports);
var _canvas = require("./canvas");
parcelHelpers.exportAll(_canvas, exports);
var _pixel = require("./pixel");
parcelHelpers.exportAll(_pixel, exports);
var _image = require("./image");
parcelHelpers.exportAll(_image, exports);
var _fit = require("./fit");
parcelHelpers.exportAll(_fit, exports);
var _color = require("./color");
parcelHelpers.exportAll(_color, exports);
const measurement = typeof performance !== 'undefined' ? performance : Date;
function now() {
    return measurement.now();
}

},{"./random":"hKepj","./buffer":"20DHM","./number":"aHt1D","./noise":"63lOq","./canvas":"fmWip","./image":"1JsDC","./fit":"3kBml","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","./pixel":"7MKRy","./color":"auluR"}],"hKepj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Random number generator
 * @example
 * ```javascript
 * 	Urpflanze.random('seed') // 0.9367527104914188
 * ```
 *
 * @category Utilities
 * @param {string} seed
 * @param {number} min
 * @param {number} max
 * @param {number} decimals
 * @returns {number}
 */ parcelHelpers.export(exports, "random", ()=>random
);
/**
 * @internal
 * @ignore
 */ const randoms = {
};
function random(seed, min = 0, max = 1, decimals) {
    const key = seed + '';
    if (typeof randoms[key] === 'undefined') {
        const seed = xmur3(key);
        randoms[key] = sfc32(seed(), seed(), seed(), seed());
    }
    const value = min + randoms[key]() * (max - min);
    return typeof decimals !== 'undefined' ? Math.round(value * 10 ** decimals) / 10 ** decimals : value;
}
/**
 *
 * @internal
 * @param str
 * @returns
 */ function xmur3(str) {
    let i = 0, h = 1779033703 ^ str.length;
    for(; i < str.length; i++)h = Math.imul(h ^ str.charCodeAt(i), 3432918353), h = h << 13 | h >>> 19;
    return function() {
        h = Math.imul(h ^ h >>> 16, 2246822507);
        h = Math.imul(h ^ h >>> 13, 3266489909);
        return (h ^= h >>> 16) >>> 0;
    };
}
/**
 * @internal
 * @param a
 * @param b
 * @param c
 * @param d
 * @returns
 */ function sfc32(a, b, c, d) {
    return function() {
        a >>>= 0;
        b >>>= 0;
        c >>>= 0;
        d >>>= 0;
        let t = a + b | 0;
        a = b ^ b >>> 9;
        b = c + (c << 3) | 0;
        c = c << 21 | c >>> 11;
        d = d + 1 | 0;
        t = t + d | 0;
        c = c + t | 0;
        return (t >>> 0) / 4294967296;
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"20DHM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Evenly distributes a number of points in a buffer
 *
 * @param {Float32Array} buffer current buffer
 * @param {number} pointsToAdd points to add
 * @return {*}  {Float32Array}
 */ parcelHelpers.export(exports, "distributePointsInBuffer", ()=>distributePointsInBuffer
);
/**
 * Leads two buffers to have the same number of points
 *
 * @param from
 * @param to
 * @returns
 */ parcelHelpers.export(exports, "prepareBuffersForInterpolation", ()=>prepareBuffersForInterpolation
);
/**
 * Interpolate two buffer
 *
 * @param from
 * @param to
 * @param offset
 * @returns
 */ parcelHelpers.export(exports, "interpolate", ()=>interpolate
);
function distributePointsInBuffer(buffer, pointsToAdd) {
    const bufferLen = buffer.length;
    const pointsLen = bufferLen / 2;
    const finalBufferLength = (pointsLen + pointsToAdd) * 2;
    const edges = pointsLen - 1;
    if (edges > 1) {
        const lastPoint = bufferLen - 2;
        const newPointsOnEdge = Math.floor(pointsToAdd / edges);
        const bufferWithPointsEveryEdge = bufferLen + newPointsOnEdge * lastPoint;
        let remainingPoints = (finalBufferLength - bufferWithPointsEveryEdge) / 2;
        const edgeRemainingIndex = Math.round(edges / remainingPoints);
        const result = new Float32Array(finalBufferLength);
        for(let i = 0, edgeIndex = 0, r = 0; i < lastPoint; i += 2, edgeIndex++, r += 2){
            const ax = buffer[i];
            const ay = buffer[i + 1];
            const bx = buffer[i + 2];
            const by = buffer[i + 3];
            result[r] = ax;
            result[r + 1] = ay;
            const addReminingPoints = remainingPoints > 0 && (edgeIndex % edgeRemainingIndex === 0 || i === lastPoint - 2);
            const currentPointsOnEdge = newPointsOnEdge + (addReminingPoints ? 1 : 0);
            const newPointOffset = 1 / (currentPointsOnEdge + 1);
            for(let h = 0; h < currentPointsOnEdge; h++, r += 2){
                const o = newPointOffset * (h + 1);
                result[r + 2] = (1 - o) * ax + o * bx;
                result[r + 3] = (1 - o) * ay + o * by;
            }
            if (addReminingPoints) remainingPoints--;
        }
        result[finalBufferLength - 2] = buffer[bufferLen - 2];
        result[finalBufferLength - 1] = buffer[bufferLen - 1];
        return result;
    }
    const result = new Float32Array(finalBufferLength);
    for(let i = 0; i < finalBufferLength; i += 2){
        result[i] = buffer[i % bufferLen];
        result[i + 1] = buffer[(i + 1) % bufferLen];
    }
    return result;
}
function prepareBuffersForInterpolation(from, to) {
    const fromBufferLength = from.length;
    const toBufferLength = to.length;
    if (fromBufferLength === toBufferLength) return [
        from,
        to
    ];
    // const maxBufferLength = fromBufferLength > toBufferLength ? fromBufferLength : toBufferLength
    const difference = Math.abs(fromBufferLength - toBufferLength);
    // const minBufferLength = maxBufferLength - difference
    /////
    const b = fromBufferLength < toBufferLength ? to : from;
    const t = fromBufferLength < toBufferLength ? from : to;
    const a = distributePointsInBuffer(t, Math.floor(difference / 2));
    // a[maxBufferLength - 2] = t[minBufferLength - 2]
    // a[maxBufferLength - 1] = t[minBufferLength - 1]
    return fromBufferLength > toBufferLength ? [
        b,
        a
    ] : [
        a,
        b
    ];
}
function interpolate(from, to, initialOffset = 0.5) {
    const [a, b] = prepareBuffersForInterpolation(from, to);
    const maxBufferLength = Math.max(a.length, b.length);
    const offset = typeof initialOffset === 'number' ? [
        initialOffset
    ] : initialOffset;
    const maxPoints = maxBufferLength / 2;
    if (offset.length !== maxPoints) {
        const tl = offset.length;
        for(let i = 0; i < maxPoints; i++)offset[i] = offset[i % tl];
    }
    ////
    const result = new Float32Array(maxBufferLength);
    for(let i = 0, off = 0; i < maxBufferLength; i += 2, off++){
        result[i] = (1 - offset[off]) * a[i] + offset[off] * b[i];
        result[i + 1] = (1 - offset[off]) * a[i + 1] + offset[off] * b[i + 1];
    }
    return result;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"aHt1D":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Convert number from radians to degrees
 *
 *
 * @example
 * ```javascript
 * toDegrees(Math.PI) // 180
 * ```
 *
 * @param {number} radians
 * @returns {number}
 */ parcelHelpers.export(exports, "toDegrees", ()=>toDegrees
);
/**
 * Convert angle from degrees to radians
 * @example
 * ```javascript
 * toRadians(180) // 3.141592653589793
 * ```
 *
 * @param {number} degrees
 * @returns {number}
 */ parcelHelpers.export(exports, "toRadians", ()=>toRadians
);
/**
 * Linear interpolation from `a` when `i` as 0 an `b` when `i' as 1
 *
 * @param {number} a
 * @param {number} b
 * @param {number} i
 * @returns {number}
 */ parcelHelpers.export(exports, "lerp", ()=>lerp
);
/**
 * Return number between 0 and 1
 *
 * @export
 * @param {number} value
 * @return {*}  {number}
 */ parcelHelpers.export(exports, "clamp01", ()=>clamp01
);
/**
 * Return number between min and max
 *
 * @example
 * ```javascript
 * clamp(0, 1, 1.2) // 1
 * clamp(0, 1, -2) // 0
 * ```
 * @param {number} min
 * @param {number} max
 * @param {number} value
 * @returns {number}
 */ parcelHelpers.export(exports, "clamp", ()=>clamp
);
/**
 * Map number between refMin e refMax from min and max
 *
 *
 * @example
 * ```javascript
 * relativeClamp(0, 1, 0.5, 100, 200) // 150
 * ```
 *
 * @param {number} refMin
 * @param {number} refMax
 * @param {number} value
 * @param {number} toMin
 * @param {number} toMax
 * @returns {number}
 */ parcelHelpers.export(exports, "relativeClamp", ()=>relativeClamp
);
function toDegrees(radians) {
    return radians * 180 / Math.PI;
}
function toRadians(degrees) {
    return degrees * Math.PI / 180;
}
function lerp(a, b, i) {
    return (1 - i) * a + i * b;
}
function clamp01(value) {
    return clamp(0, 1, value);
}
function clamp(min, max, value) {
    return value <= min ? min : value >= max ? max : value;
}
function relativeClamp(refMin, refMax, value, toMin, toMax) {
    return clamp(toMin, toMax, (value - refMin) / (refMax - refMin) * (toMax - toMin) + toMin);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"63lOq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * <a href="https://github.com/jwagner/simplex-noise.js" target="_blank">SimplexNoise</a>
 * Use 'random' as seed property for random seed.
 * Return value between -1 and 1
 *
 * @category Utilities
 *
 * @param {string} [seed='random']
 * @param {number} [x=0]
 * @param {number} [y=0]
 * @param {number} [z=0]
 * @param {number} [min=-1]
 * @param {number} [max=-1]
 * @returns {number} between -1 and 1
 */ parcelHelpers.export(exports, "noise", ()=>noise
);
var _simplexNoise = require("simplex-noise");
var _simplexNoiseDefault = parcelHelpers.interopDefault(_simplexNoise);
/**
 * @internal
 * @ignore
 */ const noises = {
    random: new _simplexNoiseDefault.default(Math.random)
};
function noise(seed = 'random', x = 0, y = 0, z = 0, min = -1, max = 1) {
    if (typeof noises[seed] === 'undefined') noises[seed] = new _simplexNoiseDefault.default(seed);
    const value = noises[seed].noise3D(x, y, z);
    return min !== -1 || max !== 1 ? (0.5 + value * 0.5) * (max - min) + min : value;
}

},{"simplex-noise":"jB0ac","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jB0ac":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Deterministic simplex noise generator suitable for 2D, 3D and 4D spaces. */ parcelHelpers.export(exports, "SimplexNoise", ()=>SimplexNoise
);
/**
 * Builds a random permutation table.
 * This is exported only for (internal) testing purposes.
 * Do not rely on this export.
 * @private
 */ parcelHelpers.export(exports, "buildPermutationTable", ()=>buildPermutationTable
);
/*
 * A fast javascript implementation of simplex noise by Jonas Wagner

Based on a speed-improved simplex noise algorithm for 2D, 3D and 4D in Java.
Which is based on example code by Stefan Gustavson (stegu@itn.liu.se).
With Optimisations by Peter Eastman (peastman@drizzle.stanford.edu).
Better rank ordering method by Stefan Gustavson in 2012.

 Copyright (c) 2021 Jonas Wagner

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */ const F2 = 0.5 * (Math.sqrt(3) - 1);
const G2 = (3 - Math.sqrt(3)) / 6;
const F3 = 1 / 3;
const G3 = 1 / 6;
const F4 = (Math.sqrt(5) - 1) / 4;
const G4 = (5 - Math.sqrt(5)) / 20;
const grad3 = new Float32Array([
    1,
    1,
    0,
    -1,
    1,
    0,
    1,
    -1,
    0,
    -1,
    -1,
    0,
    1,
    0,
    1,
    -1,
    0,
    1,
    1,
    0,
    -1,
    -1,
    0,
    -1,
    0,
    1,
    1,
    0,
    -1,
    1,
    0,
    1,
    -1,
    0,
    -1,
    -1
]);
const grad4 = new Float32Array([
    0,
    1,
    1,
    1,
    0,
    1,
    1,
    -1,
    0,
    1,
    -1,
    1,
    0,
    1,
    -1,
    -1,
    0,
    -1,
    1,
    1,
    0,
    -1,
    1,
    -1,
    0,
    -1,
    -1,
    1,
    0,
    -1,
    -1,
    -1,
    1,
    0,
    1,
    1,
    1,
    0,
    1,
    -1,
    1,
    0,
    -1,
    1,
    1,
    0,
    -1,
    -1,
    -1,
    0,
    1,
    1,
    -1,
    0,
    1,
    -1,
    -1,
    0,
    -1,
    1,
    -1,
    0,
    -1,
    -1,
    1,
    1,
    0,
    1,
    1,
    1,
    0,
    -1,
    1,
    -1,
    0,
    1,
    1,
    -1,
    0,
    -1,
    -1,
    1,
    0,
    1,
    -1,
    1,
    0,
    -1,
    -1,
    -1,
    0,
    1,
    -1,
    -1,
    0,
    -1,
    1,
    1,
    1,
    0,
    1,
    1,
    -1,
    0,
    1,
    -1,
    1,
    0,
    1,
    -1,
    -1,
    0,
    -1,
    1,
    1,
    0,
    -1,
    1,
    -1,
    0,
    -1,
    -1,
    1,
    0,
    -1,
    -1,
    -1,
    0
]);
class SimplexNoise {
    /**
     * Creates a new `SimplexNoise` instance.
     * This involves some setup. You can save a few cpu cycles by reusing the same instance.
     * @param randomOrSeed A random number generator or a seed (string|number).
     * Defaults to Math.random (random irreproducible initialization).
     */ constructor(randomOrSeed = Math.random){
        const random = typeof randomOrSeed == 'function' ? randomOrSeed : alea(randomOrSeed);
        this.p = buildPermutationTable(random);
        this.perm = new Uint8Array(512);
        this.permMod12 = new Uint8Array(512);
        for(let i = 0; i < 512; i++){
            this.perm[i] = this.p[i & 255];
            this.permMod12[i] = this.perm[i] % 12;
        }
    }
    /**
     * Samples the noise field in 2 dimensions
     * @param x
     * @param y
     * @returns a number in the interval [-1, 1]
     */ noise2D(x, y) {
        const permMod12 = this.permMod12;
        const perm = this.perm;
        let n0 = 0; // Noise contributions from the three corners
        let n1 = 0;
        let n2 = 0;
        // Skew the input space to determine which simplex cell we're in
        const s = (x + y) * F2; // Hairy factor for 2D
        const i = Math.floor(x + s);
        const j = Math.floor(y + s);
        const t = (i + j) * G2;
        const X0 = i - t; // Unskew the cell origin back to (x,y) space
        const Y0 = j - t;
        const x0 = x - X0; // The x,y distances from the cell origin
        const y0 = y - Y0;
        // For the 2D case, the simplex shape is an equilateral triangle.
        // Determine which simplex we are in.
        let i1, j1; // Offsets for second (middle) corner of simplex in (i,j) coords
        if (x0 > y0) {
            i1 = 1;
            j1 = 0;
        } else {
            i1 = 0;
            j1 = 1;
        } // upper triangle, YX order: (0,0)->(0,1)->(1,1)
        // A step of (1,0) in (i,j) means a step of (1-c,-c) in (x,y), and
        // a step of (0,1) in (i,j) means a step of (-c,1-c) in (x,y), where
        // c = (3-sqrt(3))/6
        const x1 = x0 - i1 + G2; // Offsets for middle corner in (x,y) unskewed coords
        const y1 = y0 - j1 + G2;
        const x2 = x0 - 1 + 2 * G2; // Offsets for last corner in (x,y) unskewed coords
        const y2 = y0 - 1 + 2 * G2;
        // Work out the hashed gradient indices of the three simplex corners
        const ii = i & 255;
        const jj = j & 255;
        // Calculate the contribution from the three corners
        let t0 = 0.5 - x0 * x0 - y0 * y0;
        if (t0 >= 0) {
            const gi0 = permMod12[ii + perm[jj]] * 3;
            t0 *= t0;
            n0 = t0 * t0 * (grad3[gi0] * x0 + grad3[gi0 + 1] * y0); // (x,y) of grad3 used for 2D gradient
        }
        let t1 = 0.5 - x1 * x1 - y1 * y1;
        if (t1 >= 0) {
            const gi1 = permMod12[ii + i1 + perm[jj + j1]] * 3;
            t1 *= t1;
            n1 = t1 * t1 * (grad3[gi1] * x1 + grad3[gi1 + 1] * y1);
        }
        let t2 = 0.5 - x2 * x2 - y2 * y2;
        if (t2 >= 0) {
            const gi2 = permMod12[ii + 1 + perm[jj + 1]] * 3;
            t2 *= t2;
            n2 = t2 * t2 * (grad3[gi2] * x2 + grad3[gi2 + 1] * y2);
        }
        // Add contributions from each corner to get the final noise value.
        // The result is scaled to return values in the interval [-1,1].
        return 70 * (n0 + n1 + n2);
    }
    /**
     * Samples the noise field in 3 dimensions
     * @param x
     * @param y
     * @param z
     * @returns a number in the interval [-1, 1]
     */ noise3D(x, y, z) {
        const permMod12 = this.permMod12;
        const perm = this.perm;
        let n0, n1, n2, n3; // Noise contributions from the four corners
        // Skew the input space to determine which simplex cell we're in
        const s = (x + y + z) * F3; // Very nice and simple skew factor for 3D
        const i = Math.floor(x + s);
        const j = Math.floor(y + s);
        const k = Math.floor(z + s);
        const t = (i + j + k) * G3;
        const X0 = i - t; // Unskew the cell origin back to (x,y,z) space
        const Y0 = j - t;
        const Z0 = k - t;
        const x0 = x - X0; // The x,y,z distances from the cell origin
        const y0 = y - Y0;
        const z0 = z - Z0;
        // For the 3D case, the simplex shape is a slightly irregular tetrahedron.
        // Determine which simplex we are in.
        let i1, j1, k1; // Offsets for second corner of simplex in (i,j,k) coords
        let i2, j2, k2; // Offsets for third corner of simplex in (i,j,k) coords
        if (x0 >= y0) {
            if (y0 >= z0) {
                i1 = 1;
                j1 = 0;
                k1 = 0;
                i2 = 1;
                j2 = 1;
                k2 = 0;
            } else if (x0 >= z0) {
                i1 = 1;
                j1 = 0;
                k1 = 0;
                i2 = 1;
                j2 = 0;
                k2 = 1;
            } else {
                i1 = 0;
                j1 = 0;
                k1 = 1;
                i2 = 1;
                j2 = 0;
                k2 = 1;
            } // Z X Y order
        } else {
            if (y0 < z0) {
                i1 = 0;
                j1 = 0;
                k1 = 1;
                i2 = 0;
                j2 = 1;
                k2 = 1;
            } else if (x0 < z0) {
                i1 = 0;
                j1 = 1;
                k1 = 0;
                i2 = 0;
                j2 = 1;
                k2 = 1;
            } else {
                i1 = 0;
                j1 = 1;
                k1 = 0;
                i2 = 1;
                j2 = 1;
                k2 = 0;
            } // Y X Z order
        }
        // A step of (1,0,0) in (i,j,k) means a step of (1-c,-c,-c) in (x,y,z),
        // a step of (0,1,0) in (i,j,k) means a step of (-c,1-c,-c) in (x,y,z), and
        // a step of (0,0,1) in (i,j,k) means a step of (-c,-c,1-c) in (x,y,z), where
        // c = 1/6.
        const x1 = x0 - i1 + G3; // Offsets for second corner in (x,y,z) coords
        const y1 = y0 - j1 + G3;
        const z1 = z0 - k1 + G3;
        const x2 = x0 - i2 + 2 * G3; // Offsets for third corner in (x,y,z) coords
        const y2 = y0 - j2 + 2 * G3;
        const z2 = z0 - k2 + 2 * G3;
        const x3 = x0 - 1 + 3 * G3; // Offsets for last corner in (x,y,z) coords
        const y3 = y0 - 1 + 3 * G3;
        const z3 = z0 - 1 + 3 * G3;
        // Work out the hashed gradient indices of the four simplex corners
        const ii = i & 255;
        const jj = j & 255;
        const kk = k & 255;
        // Calculate the contribution from the four corners
        let t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0;
        if (t0 < 0) n0 = 0;
        else {
            const gi0 = permMod12[ii + perm[jj + perm[kk]]] * 3;
            t0 *= t0;
            n0 = t0 * t0 * (grad3[gi0] * x0 + grad3[gi0 + 1] * y0 + grad3[gi0 + 2] * z0);
        }
        let t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1;
        if (t1 < 0) n1 = 0;
        else {
            const gi1 = permMod12[ii + i1 + perm[jj + j1 + perm[kk + k1]]] * 3;
            t1 *= t1;
            n1 = t1 * t1 * (grad3[gi1] * x1 + grad3[gi1 + 1] * y1 + grad3[gi1 + 2] * z1);
        }
        let t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2;
        if (t2 < 0) n2 = 0;
        else {
            const gi2 = permMod12[ii + i2 + perm[jj + j2 + perm[kk + k2]]] * 3;
            t2 *= t2;
            n2 = t2 * t2 * (grad3[gi2] * x2 + grad3[gi2 + 1] * y2 + grad3[gi2 + 2] * z2);
        }
        let t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3;
        if (t3 < 0) n3 = 0;
        else {
            const gi3 = permMod12[ii + 1 + perm[jj + 1 + perm[kk + 1]]] * 3;
            t3 *= t3;
            n3 = t3 * t3 * (grad3[gi3] * x3 + grad3[gi3 + 1] * y3 + grad3[gi3 + 2] * z3);
        }
        // Add contributions from each corner to get the final noise value.
        // The result is scaled to stay just inside [-1,1]
        return 32 * (n0 + n1 + n2 + n3);
    }
    /**
     * Samples the noise field in 4 dimensions
     * @param x
     * @param y
     * @param z
     * @returns a number in the interval [-1, 1]
     */ noise4D(x, y, z, w) {
        const perm = this.perm;
        let n0, n1, n2, n3, n4; // Noise contributions from the five corners
        // Skew the (x,y,z,w) space to determine which cell of 24 simplices we're in
        const s = (x + y + z + w) * F4; // Factor for 4D skewing
        const i = Math.floor(x + s);
        const j = Math.floor(y + s);
        const k = Math.floor(z + s);
        const l = Math.floor(w + s);
        const t = (i + j + k + l) * G4; // Factor for 4D unskewing
        const X0 = i - t; // Unskew the cell origin back to (x,y,z,w) space
        const Y0 = j - t;
        const Z0 = k - t;
        const W0 = l - t;
        const x0 = x - X0; // The x,y,z,w distances from the cell origin
        const y0 = y - Y0;
        const z0 = z - Z0;
        const w0 = w - W0;
        // For the 4D case, the simplex is a 4D shape I won't even try to describe.
        // To find out which of the 24 possible simplices we're in, we need to
        // determine the magnitude ordering of x0, y0, z0 and w0.
        // Six pair-wise comparisons are performed between each possible pair
        // of the four coordinates, and the results are used to rank the numbers.
        let rankx = 0;
        let ranky = 0;
        let rankz = 0;
        let rankw = 0;
        if (x0 > y0) rankx++;
        else ranky++;
        if (x0 > z0) rankx++;
        else rankz++;
        if (x0 > w0) rankx++;
        else rankw++;
        if (y0 > z0) ranky++;
        else rankz++;
        if (y0 > w0) ranky++;
        else rankw++;
        if (z0 > w0) rankz++;
        else rankw++;
        // simplex[c] is a 4-vector with the numbers 0, 1, 2 and 3 in some order.
        // Many values of c will never occur, since e.g. x>y>z>w makes x<z, y<w and x<w
        // impossible. Only the 24 indices which have non-zero entries make any sense.
        // We use a thresholding to set the coordinates in turn from the largest magnitude.
        // Rank 3 denotes the largest coordinate.
        // Rank 2 denotes the second largest coordinate.
        // Rank 1 denotes the second smallest coordinate.
        // The integer offsets for the second simplex corner
        const i1 = rankx >= 3 ? 1 : 0;
        const j1 = ranky >= 3 ? 1 : 0;
        const k1 = rankz >= 3 ? 1 : 0;
        const l1 = rankw >= 3 ? 1 : 0;
        // The integer offsets for the third simplex corner
        const i2 = rankx >= 2 ? 1 : 0;
        const j2 = ranky >= 2 ? 1 : 0;
        const k2 = rankz >= 2 ? 1 : 0;
        const l2 = rankw >= 2 ? 1 : 0;
        // The integer offsets for the fourth simplex corner
        const i3 = rankx >= 1 ? 1 : 0;
        const j3 = ranky >= 1 ? 1 : 0;
        const k3 = rankz >= 1 ? 1 : 0;
        const l3 = rankw >= 1 ? 1 : 0;
        // The fifth corner has all coordinate offsets = 1, so no need to compute that.
        const x1 = x0 - i1 + G4; // Offsets for second corner in (x,y,z,w) coords
        const y1 = y0 - j1 + G4;
        const z1 = z0 - k1 + G4;
        const w1 = w0 - l1 + G4;
        const x2 = x0 - i2 + 2 * G4; // Offsets for third corner in (x,y,z,w) coords
        const y2 = y0 - j2 + 2 * G4;
        const z2 = z0 - k2 + 2 * G4;
        const w2 = w0 - l2 + 2 * G4;
        const x3 = x0 - i3 + 3 * G4; // Offsets for fourth corner in (x,y,z,w) coords
        const y3 = y0 - j3 + 3 * G4;
        const z3 = z0 - k3 + 3 * G4;
        const w3 = w0 - l3 + 3 * G4;
        const x4 = x0 - 1 + 4 * G4; // Offsets for last corner in (x,y,z,w) coords
        const y4 = y0 - 1 + 4 * G4;
        const z4 = z0 - 1 + 4 * G4;
        const w4 = w0 - 1 + 4 * G4;
        // Work out the hashed gradient indices of the five simplex corners
        const ii = i & 255;
        const jj = j & 255;
        const kk = k & 255;
        const ll = l & 255;
        // Calculate the contribution from the five corners
        let t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0 - w0 * w0;
        if (t0 < 0) n0 = 0;
        else {
            const gi0 = perm[ii + perm[jj + perm[kk + perm[ll]]]] % 32 * 4;
            t0 *= t0;
            n0 = t0 * t0 * (grad4[gi0] * x0 + grad4[gi0 + 1] * y0 + grad4[gi0 + 2] * z0 + grad4[gi0 + 3] * w0);
        }
        let t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1 - w1 * w1;
        if (t1 < 0) n1 = 0;
        else {
            const gi1 = perm[ii + i1 + perm[jj + j1 + perm[kk + k1 + perm[ll + l1]]]] % 32 * 4;
            t1 *= t1;
            n1 = t1 * t1 * (grad4[gi1] * x1 + grad4[gi1 + 1] * y1 + grad4[gi1 + 2] * z1 + grad4[gi1 + 3] * w1);
        }
        let t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2 - w2 * w2;
        if (t2 < 0) n2 = 0;
        else {
            const gi2 = perm[ii + i2 + perm[jj + j2 + perm[kk + k2 + perm[ll + l2]]]] % 32 * 4;
            t2 *= t2;
            n2 = t2 * t2 * (grad4[gi2] * x2 + grad4[gi2 + 1] * y2 + grad4[gi2 + 2] * z2 + grad4[gi2 + 3] * w2);
        }
        let t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3 - w3 * w3;
        if (t3 < 0) n3 = 0;
        else {
            const gi3 = perm[ii + i3 + perm[jj + j3 + perm[kk + k3 + perm[ll + l3]]]] % 32 * 4;
            t3 *= t3;
            n3 = t3 * t3 * (grad4[gi3] * x3 + grad4[gi3 + 1] * y3 + grad4[gi3 + 2] * z3 + grad4[gi3 + 3] * w3);
        }
        let t4 = 0.6 - x4 * x4 - y4 * y4 - z4 * z4 - w4 * w4;
        if (t4 < 0) n4 = 0;
        else {
            const gi4 = perm[ii + 1 + perm[jj + 1 + perm[kk + 1 + perm[ll + 1]]]] % 32 * 4;
            t4 *= t4;
            n4 = t4 * t4 * (grad4[gi4] * x4 + grad4[gi4 + 1] * y4 + grad4[gi4 + 2] * z4 + grad4[gi4 + 3] * w4);
        }
        // Sum up and scale the result to cover the range [-1,1]
        return 27 * (n0 + n1 + n2 + n3 + n4);
    }
}
exports.default = SimplexNoise;
function buildPermutationTable(random) {
    const p = new Uint8Array(256);
    for(let i = 0; i < 256; i++)p[i] = i;
    for(let i1 = 0; i1 < 255; i1++){
        const r = i1 + ~~(random() * (256 - i1));
        const aux = p[i1];
        p[i1] = p[r];
        p[r] = aux;
    }
    return p;
}
/*
The ALEA PRNG and masher code used by simplex-noise.js
is based on code by Johannes Baagøe, modified by Jonas Wagner.
See alea.md for the full license.
*/ function alea(seed) {
    let s0 = 0;
    let s1 = 0;
    let s2 = 0;
    let c = 1;
    const mash = masher();
    s0 = mash(' ');
    s1 = mash(' ');
    s2 = mash(' ');
    s0 -= mash(seed);
    if (s0 < 0) s0 += 1;
    s1 -= mash(seed);
    if (s1 < 0) s1 += 1;
    s2 -= mash(seed);
    if (s2 < 0) s2 += 1;
    return function() {
        const t = 2091639 * s0 + c * 0.00000000023283064365386963; // 2^-32
        s0 = s1;
        s1 = s2;
        return s2 = t - (c = t | 0);
    };
}
function masher() {
    let n = 4022871197;
    return function(data) {
        data = data.toString();
        for(let i = 0; i < data.length; i++){
            n += data.charCodeAt(i);
            let h = 0.02519603282416938 * n;
            n = h >>> 0;
            h -= n;
            h *= n;
            n = h >>> 0;
            h -= n;
            n += h * 4294967296; // 2^32
        }
        return (n >>> 0) * 0.00000000023283064365386963; // 2^-32
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fmWip":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createCanvas", ()=>createCanvas
);
function createCanvas(width, height) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    return canvas;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1JsDC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadImage", ()=>loadImage
);
parcelHelpers.export(exports, "fitImage", ()=>fitImage
);
var _fit = require("./fit");
function loadImage(src) {
    return new Promise((resolve)=>{
        const image = new Image();
        image.addEventListener('load', ()=>resolve(image)
        );
        image.src = src;
    });
}
function fitImage(image, width, height, mode = 'contain') {
    return _fit.fit(image.naturalWidth, image.naturalHeight, width, height, mode);
}

},{"./fit":"3kBml","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3kBml":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fit", ()=>fit
);
function fit(sourceWidth, sourceHeight, destWidth, destHeight, fit1) {
    let x = 0, y = 0, scale = 1, finalWidth = sourceWidth, finalHeight = sourceHeight;
    const ratio = destWidth / destHeight;
    const sourceRatio = sourceWidth / sourceHeight;
    if (fit1 === 'contain') {
        finalWidth = ratio > sourceRatio ? sourceWidth * destHeight / sourceHeight : destWidth;
        finalHeight = ratio > sourceRatio ? destHeight : sourceHeight * destWidth / sourceWidth;
        scale = Math.max(finalWidth, finalHeight) / Math.max(sourceWidth, sourceHeight);
    } else if (fit1 === 'cover') {
        finalWidth = ratio < sourceRatio ? sourceWidth * destHeight / sourceHeight : destWidth;
        finalHeight = ratio < sourceRatio ? destHeight : sourceHeight * destWidth / sourceWidth;
        // scale = Math.min(sourceWidth, sourceHeight) / Math.min(finalWidth, finalHeight)
        scale = Math.max(finalWidth, finalHeight) / Math.max(sourceWidth, sourceHeight);
    }
    x = (destWidth - finalWidth) / 2;
    y = (destHeight - finalHeight) / 2;
    return {
        x,
        y,
        width: finalWidth,
        height: finalHeight,
        scale
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"7MKRy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "eachPixel", ()=>eachPixel
);
parcelHelpers.export(exports, "pixelAt", ()=>pixelAt
);
parcelHelpers.export(exports, "pixelAtTop", ()=>pixelAtTop
);
parcelHelpers.export(exports, "pixelAtBottom", ()=>pixelAtBottom
);
parcelHelpers.export(exports, "pixelAtLeft", ()=>pixelAtLeft
);
parcelHelpers.export(exports, "pixelAtRight", ()=>pixelAtRight
);
parcelHelpers.export(exports, "pixelAtTopLeft", ()=>pixelAtTopLeft
);
parcelHelpers.export(exports, "pixelAtTopRight", ()=>pixelAtTopRight
);
parcelHelpers.export(exports, "pixelAtBottomLeft", ()=>pixelAtBottomLeft
);
parcelHelpers.export(exports, "pixelAtBottomRight", ()=>pixelAtBottomRight
);
var _number = require("./number");
function eachPixel(canvas, callback) {
    const context = canvas.getContext('2d');
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    const result = new Uint8ClampedArray(data.length);
    const length = data.length;
    const width = canvas.width;
    const height = canvas.height;
    for(let y = 0; y < height; y++)for(let x = 0; x < width; x++){
        const index = y * width * 4 + x * 4;
        const pixel = [
            data[index],
            data[index + 1],
            data[index + 2],
            data[index + 3]
        ];
        let newPixel = callback(pixel, x, y, length);
        result.set(typeof newPixel === 'undefined' ? pixel : newPixel, index);
    }
    return new ImageData(result, width, height);
}
function pixelAt(canvasOrImageData, x, y, at) {
    const imageData = canvasOrImageData instanceof ImageData ? canvasOrImageData : canvasOrImageData.getContext('2d').getImageData(0, 0, canvasOrImageData.width, canvasOrImageData.height);
    const data = imageData.data;
    x = _number.clamp(0, imageData.width - 1, x + at[0]);
    y = _number.clamp(0, imageData.height - 1, y + at[1]);
    const index = y * (imageData.width * 4) + x * 4;
    return [
        data[index],
        data[index + 1],
        data[index + 2],
        data[index + 3]
    ];
}
function pixelAtTop(canvasOrImageData, x, y, distance = 1) {
    return pixelAt(canvasOrImageData, x, y, [
        0,
        -distance
    ]);
}
function pixelAtBottom(canvasOrImageData, x, y, distance = 1) {
    return pixelAt(canvasOrImageData, x, y, [
        0,
        distance
    ]);
}
function pixelAtLeft(canvasOrImageData, x, y, distance = 1) {
    return pixelAt(canvasOrImageData, x, y, [
        -distance,
        0
    ]);
}
function pixelAtRight(canvasOrImageData, x, y, distance = 1) {
    return pixelAt(canvasOrImageData, x, y, [
        distance,
        0
    ]);
}
function pixelAtTopLeft(canvasOrImageData, x, y, distance = 1) {
    return pixelAt(canvasOrImageData, x, y, [
        -distance,
        -distance
    ]);
}
function pixelAtTopRight(canvasOrImageData, x, y, distance = 1) {
    return pixelAt(canvasOrImageData, x, y, [
        distance,
        -distance
    ]);
}
function pixelAtBottomLeft(canvasOrImageData, x, y, distance = 1) {
    return pixelAt(canvasOrImageData, x, y, [
        -distance,
        distance
    ]);
}
function pixelAtBottomRight(canvasOrImageData, x, y, distance = 1) {
    return pixelAt(canvasOrImageData, x, y, [
        distance,
        distance
    ]);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","./number":"aHt1D"}],"auluR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Convert RGB to HSL
 *
 * @export
 * @param {rgb} [r, g, b]
 * @return {*}  {hsl}
 */ parcelHelpers.export(exports, "rgbToHsl", ()=>rgbToHsl
);
/**
 *  * Convert HSL to RGB
 *
 * @export
 * @param {hsl} [h, s, l]
 * @return {*}  {rgb}
 */ parcelHelpers.export(exports, "hslToRgb", ()=>hslToRgb
);
parcelHelpers.export(exports, "rgbToHex", ()=>rgbToHex
);
/**
 * Brightness [0-255]
 *
 * @export
 * @param {rgb} [r, g, b]
 * @return {*}  {number from 0 to 255}
 */ parcelHelpers.export(exports, "brightness", ()=>brightness
);
/**
 * Luminance [0-1]
 *
 * @export
 * @param {rgb} [r, g, b]
 * @return {*}  {number from 0 to 1}
 */ parcelHelpers.export(exports, "luminance", ()=>luminance
);
parcelHelpers.export(exports, "isDark", ()=>isDark
);
parcelHelpers.export(exports, "isLight", ()=>isLight
);
function rgbToHsl([r, g, b]) {
    r = r / 255, g = g / 255, b = b / 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;
    if (max !== min) {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max){
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }
    return [
        h * 360,
        s * 100,
        l * 100
    ];
}
function hslToRgb([h, s, l]) {
    h /= 360;
    s /= 100;
    l /= 100;
    let r = l, g = l, b = l;
    if (s !== 0) {
        const hue2rgb = (p, q, t)=>{
            t += t < 0 ? 1 : t > 1 ? -1 : 0;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 0.5) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };
        const q1 = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p1 = 2 * l - q1;
        r = hue2rgb(p1, q1, h + 1 / 3);
        g = hue2rgb(p1, q1, h);
        b = hue2rgb(p1, q1, h - 1 / 3);
    }
    return [
        Math.round(r * 255),
        Math.round(g * 255),
        Math.round(b * 255)
    ];
}
function rgbToHex([r, g, b]) {
    const rgb = r << 16 | g << 8 | b << 0;
    return '#' + (16777216 + rgb).toString(16).slice(1);
}
function brightness([r, g, b]) {
    return (r * 299 + g * 587 + b * 114) / 1000;
}
function luminance([r, g, b]) {
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
function isDark([r, g, b]) {
    return brightness([
        r,
        g,
        b
    ]) < 128;
}
function isLight([r, g, b]) {
    return brightness([
        r,
        g,
        b
    ]) >= 128;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["jUDyG","7PGg5"], "7PGg5", "parcelRequireacb0")

//# sourceMappingURL=index.js.map
