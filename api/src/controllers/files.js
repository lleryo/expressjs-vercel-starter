"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// node_modules/get-it/dist/_chunks/defaultOptionsValidator-2bJolbLg.cjs
var require_defaultOptionsValidator_2bJolbLg = __commonJS({
  "node_modules/get-it/dist/_chunks/defaultOptionsValidator-2bJolbLg.cjs"(exports) {
    "use strict";
    var isReactNative = typeof navigator === "undefined" ? false : navigator.product === "ReactNative";
    var defaultOptions = {
      timeout: isReactNative ? 6e4 : 12e4
    };
    var processOptions = /* @__PURE__ */ __name(function processOptions2(opts) {
      const options = __spreadValues(__spreadValues({}, defaultOptions), typeof opts === "string" ? {
        url: opts
      } : opts);
      const {
        searchParams
      } = new URL(options.url, "http://localhost");
      options.timeout = normalizeTimeout(options.timeout);
      if (options.query) {
        for (const [key, value] of Object.entries(options.query)) {
          if (value !== void 0) {
            if (Array.isArray(value)) {
              for (const v of value) {
                searchParams.append(key, v);
              }
            } else {
              searchParams.append(key, value);
            }
          }
        }
      }
      const [url] = options.url.split("?");
      const search = searchParams.toString();
      if (search) {
        options.url = "".concat(url, "?").concat(search);
      }
      options.method = options.body && !options.method ? "POST" : (options.method || "GET").toUpperCase();
      return options;
    }, "processOptions2");
    function normalizeTimeout(time) {
      if (time === false || time === 0) {
        return false;
      }
      if (time.connect || time.socket) {
        return time;
      }
      const delay = Number(time);
      if (isNaN(delay)) {
        return normalizeTimeout(defaultOptions.timeout);
      }
      return {
        connect: delay,
        socket: delay
      };
    }
    __name(normalizeTimeout, "normalizeTimeout");
    var validUrl = /^https?:\/\//i;
    var validateOptions = /* @__PURE__ */ __name(function validateOptions2(options) {
      if (!validUrl.test(options.url)) {
        throw new Error('"'.concat(options.url, '" is not a valid URL'));
      }
    }, "validateOptions2");
    exports.processOptions = processOptions;
    exports.validateOptions = validateOptions;
  }
});

// node_modules/mimic-response/index.js
var require_mimic_response = __commonJS({
  "node_modules/mimic-response/index.js"(exports, module2) {
    "use strict";
    var knownProperties = [
      "aborted",
      "complete",
      "headers",
      "httpVersion",
      "httpVersionMinor",
      "httpVersionMajor",
      "method",
      "rawHeaders",
      "rawTrailers",
      "setTimeout",
      "socket",
      "statusCode",
      "statusMessage",
      "trailers",
      "url"
    ];
    module2.exports = (fromStream, toStream) => {
      if (toStream._readableState.autoDestroy) {
        throw new Error("The second stream must have the `autoDestroy` option set to `false`");
      }
      const fromProperties = new Set(Object.keys(fromStream).concat(knownProperties));
      const properties = {};
      for (const property of fromProperties) {
        if (property in toStream) {
          continue;
        }
        properties[property] = {
          get() {
            const value = fromStream[property];
            const isFunction = typeof value === "function";
            return isFunction ? value.bind(fromStream) : value;
          },
          set(value) {
            fromStream[property] = value;
          },
          enumerable: true,
          configurable: false
        };
      }
      Object.defineProperties(toStream, properties);
      fromStream.once("aborted", () => {
        toStream.destroy();
        toStream.emit("aborted");
      });
      fromStream.once("close", () => {
        if (fromStream.complete) {
          if (toStream.readable) {
            toStream.once("end", () => {
              toStream.emit("close");
            });
          } else {
            toStream.emit("close");
          }
        } else {
          toStream.emit("close");
        }
      });
      return toStream;
    };
  }
});

// node_modules/decompress-response/index.js
var require_decompress_response = __commonJS({
  "node_modules/decompress-response/index.js"(exports, module2) {
    "use strict";
    var { Transform, PassThrough } = require("stream");
    var zlib = require("zlib");
    var mimicResponse = require_mimic_response();
    module2.exports = (response) => {
      const contentEncoding = (response.headers["content-encoding"] || "").toLowerCase();
      delete response.headers["content-encoding"];
      if (![
        "gzip",
        "deflate",
        "br"
      ].includes(contentEncoding)) {
        return response;
      }
      const isBrotli = contentEncoding === "br";
      if (isBrotli && typeof zlib.createBrotliDecompress !== "function") {
        response.destroy(new Error("Brotli is not supported on Node.js < 12"));
        return response;
      }
      let isEmpty = true;
      const checker = new Transform({
        transform(data, _encoding, callback) {
          isEmpty = false;
          callback(null, data);
        },
        flush(callback) {
          callback();
        }
      });
      const finalStream = new PassThrough({
        autoDestroy: false,
        destroy(error, callback) {
          response.destroy();
          callback(error);
        }
      });
      const decompressStream = isBrotli ? zlib.createBrotliDecompress() : zlib.createUnzip();
      decompressStream.once("error", (error) => {
        if (isEmpty && !response.readable) {
          finalStream.end();
          return;
        }
        finalStream.destroy(error);
      });
      mimicResponse(response, finalStream);
      response.pipe(checker).pipe(decompressStream).pipe(finalStream);
      return finalStream;
    };
  }
});

// node_modules/ms/index.js
var require_ms = __commonJS({
  "node_modules/ms/index.js"(exports, module2) {
    "use strict";
    var s = 1e3;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var w = d * 7;
    var y = d * 365.25;
    module2.exports = function(val, options) {
      options = options || {};
      var type = typeof val;
      if (type === "string" && val.length > 0) {
        return parse(val);
      } else if (type === "number" && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val));
    };
    function parse(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
      if (!match) {
        return;
      }
      var n = parseFloat(match[1]);
      var type = (match[2] || "ms").toLowerCase();
      switch (type) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * y;
        case "weeks":
        case "week":
        case "w":
          return n * w;
        case "days":
        case "day":
        case "d":
          return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return void 0;
      }
    }
    __name(parse, "parse");
    function fmtShort(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return Math.round(ms / d) + "d";
      }
      if (msAbs >= h) {
        return Math.round(ms / h) + "h";
      }
      if (msAbs >= m) {
        return Math.round(ms / m) + "m";
      }
      if (msAbs >= s) {
        return Math.round(ms / s) + "s";
      }
      return ms + "ms";
    }
    __name(fmtShort, "fmtShort");
    function fmtLong(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return plural(ms, msAbs, d, "day");
      }
      if (msAbs >= h) {
        return plural(ms, msAbs, h, "hour");
      }
      if (msAbs >= m) {
        return plural(ms, msAbs, m, "minute");
      }
      if (msAbs >= s) {
        return plural(ms, msAbs, s, "second");
      }
      return ms + " ms";
    }
    __name(fmtLong, "fmtLong");
    function plural(ms, msAbs, n, name) {
      var isPlural = msAbs >= n * 1.5;
      return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
    }
    __name(plural, "plural");
  }
});

// node_modules/debug/src/common.js
var require_common = __commonJS({
  "node_modules/debug/src/common.js"(exports, module2) {
    "use strict";
    function setup(env) {
      createDebug.debug = createDebug;
      createDebug.default = createDebug;
      createDebug.coerce = coerce;
      createDebug.disable = disable;
      createDebug.enable = enable;
      createDebug.enabled = enabled;
      createDebug.humanize = require_ms();
      createDebug.destroy = destroy;
      Object.keys(env).forEach((key) => {
        createDebug[key] = env[key];
      });
      createDebug.names = [];
      createDebug.skips = [];
      createDebug.formatters = {};
      function selectColor(namespace) {
        let hash = 0;
        for (let i = 0; i < namespace.length; i++) {
          hash = (hash << 5) - hash + namespace.charCodeAt(i);
          hash |= 0;
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
      }
      __name(selectColor, "selectColor");
      createDebug.selectColor = selectColor;
      function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug(...args) {
          if (!debug.enabled) {
            return;
          }
          const self2 = debug;
          const curr = Number(/* @__PURE__ */ new Date());
          const ms = curr - (prevTime || curr);
          self2.diff = ms;
          self2.prev = prevTime;
          self2.curr = curr;
          prevTime = curr;
          args[0] = createDebug.coerce(args[0]);
          if (typeof args[0] !== "string") {
            args.unshift("%O");
          }
          let index = 0;
          args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
            if (match === "%%") {
              return "%";
            }
            index++;
            const formatter = createDebug.formatters[format];
            if (typeof formatter === "function") {
              const val = args[index];
              match = formatter.call(self2, val);
              args.splice(index, 1);
              index--;
            }
            return match;
          });
          createDebug.formatArgs.call(self2, args);
          const logFn = self2.log || createDebug.log;
          logFn.apply(self2, args);
        }
        __name(debug, "debug");
        debug.namespace = namespace;
        debug.useColors = createDebug.useColors();
        debug.color = createDebug.selectColor(namespace);
        debug.extend = extend;
        debug.destroy = createDebug.destroy;
        Object.defineProperty(debug, "enabled", {
          enumerable: true,
          configurable: false,
          get: () => {
            if (enableOverride !== null) {
              return enableOverride;
            }
            if (namespacesCache !== createDebug.namespaces) {
              namespacesCache = createDebug.namespaces;
              enabledCache = createDebug.enabled(namespace);
            }
            return enabledCache;
          },
          set: (v) => {
            enableOverride = v;
          }
        });
        if (typeof createDebug.init === "function") {
          createDebug.init(debug);
        }
        return debug;
      }
      __name(createDebug, "createDebug");
      function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
      }
      __name(extend, "extend");
      function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        let i;
        const split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
        const len = split.length;
        for (i = 0; i < len; i++) {
          if (!split[i]) {
            continue;
          }
          namespaces = split[i].replace(/\*/g, ".*?");
          if (namespaces[0] === "-") {
            createDebug.skips.push(new RegExp("^" + namespaces.slice(1) + "$"));
          } else {
            createDebug.names.push(new RegExp("^" + namespaces + "$"));
          }
        }
      }
      __name(enable, "enable");
      function disable() {
        const namespaces = [
          ...createDebug.names.map(toNamespace),
          ...createDebug.skips.map(toNamespace).map((namespace) => "-" + namespace)
        ].join(",");
        createDebug.enable("");
        return namespaces;
      }
      __name(disable, "disable");
      function enabled(name) {
        if (name[name.length - 1] === "*") {
          return true;
        }
        let i;
        let len;
        for (i = 0, len = createDebug.skips.length; i < len; i++) {
          if (createDebug.skips[i].test(name)) {
            return false;
          }
        }
        for (i = 0, len = createDebug.names.length; i < len; i++) {
          if (createDebug.names[i].test(name)) {
            return true;
          }
        }
        return false;
      }
      __name(enabled, "enabled");
      function toNamespace(regexp) {
        return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, "*");
      }
      __name(toNamespace, "toNamespace");
      function coerce(val) {
        if (val instanceof Error) {
          return val.stack || val.message;
        }
        return val;
      }
      __name(coerce, "coerce");
      function destroy() {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      }
      __name(destroy, "destroy");
      createDebug.enable(createDebug.load());
      return createDebug;
    }
    __name(setup, "setup");
    module2.exports = setup;
  }
});

// node_modules/debug/src/browser.js
var require_browser = __commonJS({
  "node_modules/debug/src/browser.js"(exports, module2) {
    "use strict";
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.storage = localstorage();
    exports.destroy = /* @__PURE__ */ (() => {
      let warned = false;
      return () => {
        if (!warned) {
          warned = true;
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
      };
    })();
    exports.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33"
    ];
    function useColors() {
      if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
        return true;
      }
      if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
      }
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    __name(useColors, "useColors");
    function formatArgs(args) {
      args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module2.exports.humanize(this.diff);
      if (!this.useColors) {
        return;
      }
      const c = "color: " + this.color;
      args.splice(1, 0, c, "color: inherit");
      let index = 0;
      let lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, (match) => {
        if (match === "%%") {
          return;
        }
        index++;
        if (match === "%c") {
          lastC = index;
        }
      });
      args.splice(lastC, 0, c);
    }
    __name(formatArgs, "formatArgs");
    exports.log = console.debug || console.log || (() => {
    });
    function save(namespaces) {
      try {
        if (namespaces) {
          exports.storage.setItem("debug", namespaces);
        } else {
          exports.storage.removeItem("debug");
        }
      } catch (error) {
      }
    }
    __name(save, "save");
    function load() {
      let r;
      try {
        r = exports.storage.getItem("debug");
      } catch (error) {
      }
      if (!r && typeof process !== "undefined" && "env" in process) {
        r = process.env.DEBUG;
      }
      return r;
    }
    __name(load, "load");
    function localstorage() {
      try {
        return localStorage;
      } catch (error) {
      }
    }
    __name(localstorage, "localstorage");
    module2.exports = require_common()(exports);
    var { formatters } = module2.exports;
    formatters.j = function(v) {
      try {
        return JSON.stringify(v);
      } catch (error) {
        return "[UnexpectedJSONParseError]: " + error.message;
      }
    };
  }
});

// node_modules/has-flag/index.js
var require_has_flag = __commonJS({
  "node_modules/has-flag/index.js"(exports, module2) {
    "use strict";
    module2.exports = (flag, argv = process.argv) => {
      const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
      const position = argv.indexOf(prefix + flag);
      const terminatorPosition = argv.indexOf("--");
      return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
    };
  }
});

// node_modules/supports-color/index.js
var require_supports_color = __commonJS({
  "node_modules/supports-color/index.js"(exports, module2) {
    "use strict";
    var os = require("os");
    var tty = require("tty");
    var hasFlag = require_has_flag();
    var { env } = process;
    var forceColor;
    if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false") || hasFlag("color=never")) {
      forceColor = 0;
    } else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
      forceColor = 1;
    }
    if ("FORCE_COLOR" in env) {
      if (env.FORCE_COLOR === "true") {
        forceColor = 1;
      } else if (env.FORCE_COLOR === "false") {
        forceColor = 0;
      } else {
        forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
      }
    }
    function translateLevel(level) {
      if (level === 0) {
        return false;
      }
      return {
        level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
      };
    }
    __name(translateLevel, "translateLevel");
    function supportsColor(haveStream, streamIsTTY) {
      if (forceColor === 0) {
        return 0;
      }
      if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
        return 3;
      }
      if (hasFlag("color=256")) {
        return 2;
      }
      if (haveStream && !streamIsTTY && forceColor === void 0) {
        return 0;
      }
      const min = forceColor || 0;
      if (env.TERM === "dumb") {
        return min;
      }
      if (process.platform === "win32") {
        const osRelease = os.release().split(".");
        if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
          return Number(osRelease[2]) >= 14931 ? 3 : 2;
        }
        return 1;
      }
      if ("CI" in env) {
        if ([
          "TRAVIS",
          "CIRCLECI",
          "APPVEYOR",
          "GITLAB_CI",
          "GITHUB_ACTIONS",
          "BUILDKITE"
        ].some((sign) => sign in env) || env.CI_NAME === "codeship") {
          return 1;
        }
        return min;
      }
      if ("TEAMCITY_VERSION" in env) {
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
      }
      if (env.COLORTERM === "truecolor") {
        return 3;
      }
      if ("TERM_PROGRAM" in env) {
        const version = parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch (env.TERM_PROGRAM) {
          case "iTerm.app":
            return version >= 3 ? 3 : 2;
          case "Apple_Terminal":
            return 2;
        }
      }
      if (/-256(color)?$/i.test(env.TERM)) {
        return 2;
      }
      if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
        return 1;
      }
      if ("COLORTERM" in env) {
        return 1;
      }
      return min;
    }
    __name(supportsColor, "supportsColor");
    function getSupportLevel(stream) {
      const level = supportsColor(stream, stream && stream.isTTY);
      return translateLevel(level);
    }
    __name(getSupportLevel, "getSupportLevel");
    module2.exports = {
      supportsColor: getSupportLevel,
      stdout: translateLevel(supportsColor(true, tty.isatty(1))),
      stderr: translateLevel(supportsColor(true, tty.isatty(2)))
    };
  }
});

// node_modules/debug/src/node.js
var require_node = __commonJS({
  "node_modules/debug/src/node.js"(exports, module2) {
    "use strict";
    var tty = require("tty");
    var util = require("util");
    exports.init = init;
    exports.log = log;
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.destroy = util.deprecate(() => {
    }, "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    exports.colors = [
      6,
      2,
      3,
      4,
      5,
      1
    ];
    try {
      const supportsColor = require_supports_color();
      if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
        exports.colors = [
          20,
          21,
          26,
          27,
          32,
          33,
          38,
          39,
          40,
          41,
          42,
          43,
          44,
          45,
          56,
          57,
          62,
          63,
          68,
          69,
          74,
          75,
          76,
          77,
          78,
          79,
          80,
          81,
          92,
          93,
          98,
          99,
          112,
          113,
          128,
          129,
          134,
          135,
          148,
          149,
          160,
          161,
          162,
          163,
          164,
          165,
          166,
          167,
          168,
          169,
          170,
          171,
          172,
          173,
          178,
          179,
          184,
          185,
          196,
          197,
          198,
          199,
          200,
          201,
          202,
          203,
          204,
          205,
          206,
          207,
          208,
          209,
          214,
          215,
          220,
          221
        ];
      }
    } catch (error) {
    }
    exports.inspectOpts = Object.keys(process.env).filter((key) => {
      return /^debug_/i.test(key);
    }).reduce((obj, key) => {
      const prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, (_, k) => {
        return k.toUpperCase();
      });
      let val = process.env[key];
      if (/^(yes|on|true|enabled)$/i.test(val)) {
        val = true;
      } else if (/^(no|off|false|disabled)$/i.test(val)) {
        val = false;
      } else if (val === "null") {
        val = null;
      } else {
        val = Number(val);
      }
      obj[prop] = val;
      return obj;
    }, {});
    function useColors() {
      return "colors" in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(process.stderr.fd);
    }
    __name(useColors, "useColors");
    function formatArgs(args) {
      const { namespace: name, useColors: useColors2 } = this;
      if (useColors2) {
        const c = this.color;
        const colorCode = "\x1B[3" + (c < 8 ? c : "8;5;" + c);
        const prefix = `  ${colorCode};1m${name} \x1B[0m`;
        args[0] = prefix + args[0].split("\n").join("\n" + prefix);
        args.push(colorCode + "m+" + module2.exports.humanize(this.diff) + "\x1B[0m");
      } else {
        args[0] = getDate() + name + " " + args[0];
      }
    }
    __name(formatArgs, "formatArgs");
    function getDate() {
      if (exports.inspectOpts.hideDate) {
        return "";
      }
      return (/* @__PURE__ */ new Date()).toISOString() + " ";
    }
    __name(getDate, "getDate");
    function log(...args) {
      return process.stderr.write(util.format(...args) + "\n");
    }
    __name(log, "log");
    function save(namespaces) {
      if (namespaces) {
        process.env.DEBUG = namespaces;
      } else {
        delete process.env.DEBUG;
      }
    }
    __name(save, "save");
    function load() {
      return process.env.DEBUG;
    }
    __name(load, "load");
    function init(debug) {
      debug.inspectOpts = {};
      const keys = Object.keys(exports.inspectOpts);
      for (let i = 0; i < keys.length; i++) {
        debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
      }
    }
    __name(init, "init");
    module2.exports = require_common()(exports);
    var { formatters } = module2.exports;
    formatters.o = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts).split("\n").map((str) => str.trim()).join(" ");
    };
    formatters.O = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts);
    };
  }
});

// node_modules/debug/src/index.js
var require_src = __commonJS({
  "node_modules/debug/src/index.js"(exports, module2) {
    "use strict";
    if (typeof process === "undefined" || process.type === "renderer" || process.browser === true || process.__nwjs) {
      module2.exports = require_browser();
    } else {
      module2.exports = require_node();
    }
  }
});

// node_modules/follow-redirects/debug.js
var require_debug = __commonJS({
  "node_modules/follow-redirects/debug.js"(exports, module2) {
    "use strict";
    var debug;
    module2.exports = function() {
      if (!debug) {
        try {
          debug = require_src()("follow-redirects");
        } catch (error) {
        }
        if (typeof debug !== "function") {
          debug = /* @__PURE__ */ __name(function() {
          }, "debug");
        }
      }
      debug.apply(null, arguments);
    };
  }
});

// node_modules/follow-redirects/index.js
var require_follow_redirects = __commonJS({
  "node_modules/follow-redirects/index.js"(exports, module2) {
    "use strict";
    var url = require("url");
    var URL2 = url.URL;
    var http = require("http");
    var https = require("https");
    var Writable = require("stream").Writable;
    var assert = require("assert");
    var debug = require_debug();
    var events = [
      "abort",
      "aborted",
      "connect",
      "error",
      "socket",
      "timeout"
    ];
    var eventHandlers = /* @__PURE__ */ Object.create(null);
    events.forEach(function(event) {
      eventHandlers[event] = function(arg1, arg2, arg3) {
        this._redirectable.emit(event, arg1, arg2, arg3);
      };
    });
    var InvalidUrlError = createErrorType("ERR_INVALID_URL", "Invalid URL", TypeError);
    var RedirectionError = createErrorType("ERR_FR_REDIRECTION_FAILURE", "Redirected request failed");
    var TooManyRedirectsError = createErrorType("ERR_FR_TOO_MANY_REDIRECTS", "Maximum number of redirects exceeded");
    var MaxBodyLengthExceededError = createErrorType("ERR_FR_MAX_BODY_LENGTH_EXCEEDED", "Request body larger than maxBodyLength limit");
    var WriteAfterEndError = createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end");
    var destroy = Writable.prototype.destroy || noop;
    function RedirectableRequest(options, responseCallback) {
      Writable.call(this);
      this._sanitizeOptions(options);
      this._options = options;
      this._ended = false;
      this._ending = false;
      this._redirectCount = 0;
      this._redirects = [];
      this._requestBodyLength = 0;
      this._requestBodyBuffers = [];
      if (responseCallback) {
        this.on("response", responseCallback);
      }
      var self2 = this;
      this._onNativeResponse = function(response) {
        self2._processResponse(response);
      };
      this._performRequest();
    }
    __name(RedirectableRequest, "RedirectableRequest");
    RedirectableRequest.prototype = Object.create(Writable.prototype);
    RedirectableRequest.prototype.abort = function() {
      destroyRequest(this._currentRequest);
      this._currentRequest.abort();
      this.emit("abort");
    };
    RedirectableRequest.prototype.destroy = function(error) {
      destroyRequest(this._currentRequest, error);
      destroy.call(this, error);
      return this;
    };
    RedirectableRequest.prototype.write = function(data, encoding, callback) {
      if (this._ending) {
        throw new WriteAfterEndError();
      }
      if (!isString(data) && !isBuffer(data)) {
        throw new TypeError("data should be a string, Buffer or Uint8Array");
      }
      if (isFunction(encoding)) {
        callback = encoding;
        encoding = null;
      }
      if (data.length === 0) {
        if (callback) {
          callback();
        }
        return;
      }
      if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {
        this._requestBodyLength += data.length;
        this._requestBodyBuffers.push({
          data,
          encoding
        });
        this._currentRequest.write(data, encoding, callback);
      } else {
        this.emit("error", new MaxBodyLengthExceededError());
        this.abort();
      }
    };
    RedirectableRequest.prototype.end = function(data, encoding, callback) {
      if (isFunction(data)) {
        callback = data;
        data = encoding = null;
      } else if (isFunction(encoding)) {
        callback = encoding;
        encoding = null;
      }
      if (!data) {
        this._ended = this._ending = true;
        this._currentRequest.end(null, null, callback);
      } else {
        var self2 = this;
        var currentRequest = this._currentRequest;
        this.write(data, encoding, function() {
          self2._ended = true;
          currentRequest.end(null, null, callback);
        });
        this._ending = true;
      }
    };
    RedirectableRequest.prototype.setHeader = function(name, value) {
      this._options.headers[name] = value;
      this._currentRequest.setHeader(name, value);
    };
    RedirectableRequest.prototype.removeHeader = function(name) {
      delete this._options.headers[name];
      this._currentRequest.removeHeader(name);
    };
    RedirectableRequest.prototype.setTimeout = function(msecs, callback) {
      var self2 = this;
      function destroyOnTimeout(socket) {
        socket.setTimeout(msecs);
        socket.removeListener("timeout", socket.destroy);
        socket.addListener("timeout", socket.destroy);
      }
      __name(destroyOnTimeout, "destroyOnTimeout");
      function startTimer(socket) {
        if (self2._timeout) {
          clearTimeout(self2._timeout);
        }
        self2._timeout = setTimeout(function() {
          self2.emit("timeout");
          clearTimer();
        }, msecs);
        destroyOnTimeout(socket);
      }
      __name(startTimer, "startTimer");
      function clearTimer() {
        if (self2._timeout) {
          clearTimeout(self2._timeout);
          self2._timeout = null;
        }
        self2.removeListener("abort", clearTimer);
        self2.removeListener("error", clearTimer);
        self2.removeListener("response", clearTimer);
        self2.removeListener("close", clearTimer);
        if (callback) {
          self2.removeListener("timeout", callback);
        }
        if (!self2.socket) {
          self2._currentRequest.removeListener("socket", startTimer);
        }
      }
      __name(clearTimer, "clearTimer");
      if (callback) {
        this.on("timeout", callback);
      }
      if (this.socket) {
        startTimer(this.socket);
      } else {
        this._currentRequest.once("socket", startTimer);
      }
      this.on("socket", destroyOnTimeout);
      this.on("abort", clearTimer);
      this.on("error", clearTimer);
      this.on("response", clearTimer);
      this.on("close", clearTimer);
      return this;
    };
    [
      "flushHeaders",
      "getHeader",
      "setNoDelay",
      "setSocketKeepAlive"
    ].forEach(function(method) {
      RedirectableRequest.prototype[method] = function(a, b) {
        return this._currentRequest[method](a, b);
      };
    });
    [
      "aborted",
      "connection",
      "socket"
    ].forEach(function(property) {
      Object.defineProperty(RedirectableRequest.prototype, property, {
        get: function() {
          return this._currentRequest[property];
        }
      });
    });
    RedirectableRequest.prototype._sanitizeOptions = function(options) {
      if (!options.headers) {
        options.headers = {};
      }
      if (options.host) {
        if (!options.hostname) {
          options.hostname = options.host;
        }
        delete options.host;
      }
      if (!options.pathname && options.path) {
        var searchPos = options.path.indexOf("?");
        if (searchPos < 0) {
          options.pathname = options.path;
        } else {
          options.pathname = options.path.substring(0, searchPos);
          options.search = options.path.substring(searchPos);
        }
      }
    };
    RedirectableRequest.prototype._performRequest = function() {
      var protocol = this._options.protocol;
      var nativeProtocol = this._options.nativeProtocols[protocol];
      if (!nativeProtocol) {
        this.emit("error", new TypeError("Unsupported protocol " + protocol));
        return;
      }
      if (this._options.agents) {
        var scheme = protocol.slice(0, -1);
        this._options.agent = this._options.agents[scheme];
      }
      var request = this._currentRequest = nativeProtocol.request(this._options, this._onNativeResponse);
      request._redirectable = this;
      for (var event of events) {
        request.on(event, eventHandlers[event]);
      }
      this._currentUrl = /^\//.test(this._options.path) ? url.format(this._options) : (
        // When making a request to a proxy, […]
        // a client MUST send the target URI in absolute-form […].
        this._options.path
      );
      if (this._isRedirect) {
        var i = 0;
        var self2 = this;
        var buffers = this._requestBodyBuffers;
        (/* @__PURE__ */ __name(function writeNext(error) {
          if (request === self2._currentRequest) {
            if (error) {
              self2.emit("error", error);
            } else if (i < buffers.length) {
              var buffer = buffers[i++];
              if (!request.finished) {
                request.write(buffer.data, buffer.encoding, writeNext);
              }
            } else if (self2._ended) {
              request.end();
            }
          }
        }, "writeNext"))();
      }
    };
    RedirectableRequest.prototype._processResponse = function(response) {
      var statusCode = response.statusCode;
      if (this._options.trackRedirects) {
        this._redirects.push({
          url: this._currentUrl,
          headers: response.headers,
          statusCode
        });
      }
      var location = response.headers.location;
      if (!location || this._options.followRedirects === false || statusCode < 300 || statusCode >= 400) {
        response.responseUrl = this._currentUrl;
        response.redirects = this._redirects;
        this.emit("response", response);
        this._requestBodyBuffers = [];
        return;
      }
      destroyRequest(this._currentRequest);
      response.destroy();
      if (++this._redirectCount > this._options.maxRedirects) {
        this.emit("error", new TooManyRedirectsError());
        return;
      }
      var requestHeaders;
      var beforeRedirect = this._options.beforeRedirect;
      if (beforeRedirect) {
        requestHeaders = Object.assign({
          // The Host header was set by nativeProtocol.request
          Host: response.req.getHeader("host")
        }, this._options.headers);
      }
      var method = this._options.method;
      if ((statusCode === 301 || statusCode === 302) && this._options.method === "POST" || // RFC7231§6.4.4: The 303 (See Other) status code indicates that
      // the server is redirecting the user agent to a different resource […]
      // A user agent can perform a retrieval request targeting that URI
      // (a GET or HEAD request if using HTTP) […]
      statusCode === 303 && !/^(?:GET|HEAD)$/.test(this._options.method)) {
        this._options.method = "GET";
        this._requestBodyBuffers = [];
        removeMatchingHeaders(/^content-/i, this._options.headers);
      }
      var currentHostHeader = removeMatchingHeaders(/^host$/i, this._options.headers);
      var currentUrlParts = url.parse(this._currentUrl);
      var currentHost = currentHostHeader || currentUrlParts.host;
      var currentUrl = /^\w+:/.test(location) ? this._currentUrl : url.format(Object.assign(currentUrlParts, {
        host: currentHost
      }));
      var redirectUrl;
      try {
        redirectUrl = url.resolve(currentUrl, location);
      } catch (cause) {
        this.emit("error", new RedirectionError({
          cause
        }));
        return;
      }
      debug("redirecting to", redirectUrl);
      this._isRedirect = true;
      var redirectUrlParts = url.parse(redirectUrl);
      Object.assign(this._options, redirectUrlParts);
      if (redirectUrlParts.protocol !== currentUrlParts.protocol && redirectUrlParts.protocol !== "https:" || redirectUrlParts.host !== currentHost && !isSubdomain(redirectUrlParts.host, currentHost)) {
        removeMatchingHeaders(/^(?:authorization|cookie)$/i, this._options.headers);
      }
      if (isFunction(beforeRedirect)) {
        var responseDetails = {
          headers: response.headers,
          statusCode
        };
        var requestDetails = {
          url: currentUrl,
          method,
          headers: requestHeaders
        };
        try {
          beforeRedirect(this._options, responseDetails, requestDetails);
        } catch (err) {
          this.emit("error", err);
          return;
        }
        this._sanitizeOptions(this._options);
      }
      try {
        this._performRequest();
      } catch (cause) {
        this.emit("error", new RedirectionError({
          cause
        }));
      }
    };
    function wrap(protocols) {
      var exports2 = {
        maxRedirects: 21,
        maxBodyLength: 10 * 1024 * 1024
      };
      var nativeProtocols = {};
      Object.keys(protocols).forEach(function(scheme) {
        var protocol = scheme + ":";
        var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
        var wrappedProtocol = exports2[scheme] = Object.create(nativeProtocol);
        function request(input, options, callback) {
          if (isString(input)) {
            var parsed;
            try {
              parsed = urlToOptions(new URL2(input));
            } catch (err) {
              parsed = url.parse(input);
            }
            if (!isString(parsed.protocol)) {
              throw new InvalidUrlError({
                input
              });
            }
            input = parsed;
          } else if (URL2 && input instanceof URL2) {
            input = urlToOptions(input);
          } else {
            callback = options;
            options = input;
            input = {
              protocol
            };
          }
          if (isFunction(options)) {
            callback = options;
            options = null;
          }
          options = Object.assign({
            maxRedirects: exports2.maxRedirects,
            maxBodyLength: exports2.maxBodyLength
          }, input, options);
          options.nativeProtocols = nativeProtocols;
          if (!isString(options.host) && !isString(options.hostname)) {
            options.hostname = "::1";
          }
          assert.equal(options.protocol, protocol, "protocol mismatch");
          debug("options", options);
          return new RedirectableRequest(options, callback);
        }
        __name(request, "request");
        function get(input, options, callback) {
          var wrappedRequest = wrappedProtocol.request(input, options, callback);
          wrappedRequest.end();
          return wrappedRequest;
        }
        __name(get, "get");
        Object.defineProperties(wrappedProtocol, {
          request: {
            value: request,
            configurable: true,
            enumerable: true,
            writable: true
          },
          get: {
            value: get,
            configurable: true,
            enumerable: true,
            writable: true
          }
        });
      });
      return exports2;
    }
    __name(wrap, "wrap");
    function noop() {
    }
    __name(noop, "noop");
    function urlToOptions(urlObject) {
      var options = {
        protocol: urlObject.protocol,
        hostname: urlObject.hostname.startsWith("[") ? (
          /* istanbul ignore next */
          urlObject.hostname.slice(1, -1)
        ) : urlObject.hostname,
        hash: urlObject.hash,
        search: urlObject.search,
        pathname: urlObject.pathname,
        path: urlObject.pathname + urlObject.search,
        href: urlObject.href
      };
      if (urlObject.port !== "") {
        options.port = Number(urlObject.port);
      }
      return options;
    }
    __name(urlToOptions, "urlToOptions");
    function removeMatchingHeaders(regex, headers) {
      var lastValue;
      for (var header in headers) {
        if (regex.test(header)) {
          lastValue = headers[header];
          delete headers[header];
        }
      }
      return lastValue === null || typeof lastValue === "undefined" ? void 0 : String(lastValue).trim();
    }
    __name(removeMatchingHeaders, "removeMatchingHeaders");
    function createErrorType(code, message, baseClass) {
      function CustomError(properties) {
        Error.captureStackTrace(this, this.constructor);
        Object.assign(this, properties || {});
        this.code = code;
        this.message = this.cause ? message + ": " + this.cause.message : message;
      }
      __name(CustomError, "CustomError");
      CustomError.prototype = new (baseClass || Error)();
      CustomError.prototype.constructor = CustomError;
      CustomError.prototype.name = "Error [" + code + "]";
      return CustomError;
    }
    __name(createErrorType, "createErrorType");
    function destroyRequest(request, error) {
      for (var event of events) {
        request.removeListener(event, eventHandlers[event]);
      }
      request.on("error", noop);
      request.destroy(error);
    }
    __name(destroyRequest, "destroyRequest");
    function isSubdomain(subdomain, domain) {
      assert(isString(subdomain) && isString(domain));
      var dot = subdomain.length - domain.length - 1;
      return dot > 0 && subdomain[dot] === "." && subdomain.endsWith(domain);
    }
    __name(isSubdomain, "isSubdomain");
    function isString(value) {
      return typeof value === "string" || value instanceof String;
    }
    __name(isString, "isString");
    function isFunction(value) {
      return typeof value === "function";
    }
    __name(isFunction, "isFunction");
    function isBuffer(value) {
      return typeof value === "object" && "length" in value;
    }
    __name(isBuffer, "isBuffer");
    module2.exports = wrap({
      http,
      https
    });
    module2.exports.wrap = wrap;
  }
});

// node_modules/process-nextick-args/index.js
var require_process_nextick_args = __commonJS({
  "node_modules/process-nextick-args/index.js"(exports, module2) {
    "use strict";
    if (typeof process === "undefined" || !process.version || process.version.indexOf("v0.") === 0 || process.version.indexOf("v1.") === 0 && process.version.indexOf("v1.8.") !== 0) {
      module2.exports = {
        nextTick
      };
    } else {
      module2.exports = process;
    }
    function nextTick(fn, arg1, arg2, arg3) {
      if (typeof fn !== "function") {
        throw new TypeError('"callback" argument must be a function');
      }
      var len = arguments.length;
      var args, i;
      switch (len) {
        case 0:
        case 1:
          return process.nextTick(fn);
        case 2:
          return process.nextTick(/* @__PURE__ */ __name(function afterTickOne() {
            fn.call(null, arg1);
          }, "afterTickOne"));
        case 3:
          return process.nextTick(/* @__PURE__ */ __name(function afterTickTwo() {
            fn.call(null, arg1, arg2);
          }, "afterTickTwo"));
        case 4:
          return process.nextTick(/* @__PURE__ */ __name(function afterTickThree() {
            fn.call(null, arg1, arg2, arg3);
          }, "afterTickThree"));
        default:
          args = new Array(len - 1);
          i = 0;
          while (i < args.length) {
            args[i++] = arguments[i];
          }
          return process.nextTick(/* @__PURE__ */ __name(function afterTick() {
            fn.apply(null, args);
          }, "afterTick"));
      }
    }
    __name(nextTick, "nextTick");
  }
});

// node_modules/readable-stream/node_modules/isarray/index.js
var require_isarray = __commonJS({
  "node_modules/readable-stream/node_modules/isarray/index.js"(exports, module2) {
    "use strict";
    var toString = {}.toString;
    module2.exports = Array.isArray || function(arr) {
      return toString.call(arr) == "[object Array]";
    };
  }
});

// node_modules/readable-stream/lib/internal/streams/stream.js
var require_stream = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/stream.js"(exports, module2) {
    "use strict";
    module2.exports = require("stream");
  }
});

// node_modules/readable-stream/node_modules/safe-buffer/index.js
var require_safe_buffer = __commonJS({
  "node_modules/readable-stream/node_modules/safe-buffer/index.js"(exports, module2) {
    "use strict";
    var buffer = require("buffer");
    var Buffer2 = buffer.Buffer;
    function copyProps(src, dst) {
      for (var key in src) {
        dst[key] = src[key];
      }
    }
    __name(copyProps, "copyProps");
    if (Buffer2.from && Buffer2.alloc && Buffer2.allocUnsafe && Buffer2.allocUnsafeSlow) {
      module2.exports = buffer;
    } else {
      copyProps(buffer, exports);
      exports.Buffer = SafeBuffer;
    }
    function SafeBuffer(arg, encodingOrOffset, length) {
      return Buffer2(arg, encodingOrOffset, length);
    }
    __name(SafeBuffer, "SafeBuffer");
    copyProps(Buffer2, SafeBuffer);
    SafeBuffer.from = function(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        throw new TypeError("Argument must not be a number");
      }
      return Buffer2(arg, encodingOrOffset, length);
    };
    SafeBuffer.alloc = function(size, fill, encoding) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      var buf = Buffer2(size);
      if (fill !== void 0) {
        if (typeof encoding === "string") {
          buf.fill(fill, encoding);
        } else {
          buf.fill(fill);
        }
      } else {
        buf.fill(0);
      }
      return buf;
    };
    SafeBuffer.allocUnsafe = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return Buffer2(size);
    };
    SafeBuffer.allocUnsafeSlow = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return buffer.SlowBuffer(size);
    };
  }
});

// node_modules/core-util-is/lib/util.js
var require_util = __commonJS({
  "node_modules/core-util-is/lib/util.js"(exports) {
    "use strict";
    function isArray(arg) {
      if (Array.isArray) {
        return Array.isArray(arg);
      }
      return objectToString(arg) === "[object Array]";
    }
    __name(isArray, "isArray");
    exports.isArray = isArray;
    function isBoolean(arg) {
      return typeof arg === "boolean";
    }
    __name(isBoolean, "isBoolean");
    exports.isBoolean = isBoolean;
    function isNull(arg) {
      return arg === null;
    }
    __name(isNull, "isNull");
    exports.isNull = isNull;
    function isNullOrUndefined(arg) {
      return arg == null;
    }
    __name(isNullOrUndefined, "isNullOrUndefined");
    exports.isNullOrUndefined = isNullOrUndefined;
    function isNumber(arg) {
      return typeof arg === "number";
    }
    __name(isNumber, "isNumber");
    exports.isNumber = isNumber;
    function isString(arg) {
      return typeof arg === "string";
    }
    __name(isString, "isString");
    exports.isString = isString;
    function isSymbol(arg) {
      return typeof arg === "symbol";
    }
    __name(isSymbol, "isSymbol");
    exports.isSymbol = isSymbol;
    function isUndefined(arg) {
      return arg === void 0;
    }
    __name(isUndefined, "isUndefined");
    exports.isUndefined = isUndefined;
    function isRegExp(re) {
      return objectToString(re) === "[object RegExp]";
    }
    __name(isRegExp, "isRegExp");
    exports.isRegExp = isRegExp;
    function isObject(arg) {
      return typeof arg === "object" && arg !== null;
    }
    __name(isObject, "isObject");
    exports.isObject = isObject;
    function isDate(d) {
      return objectToString(d) === "[object Date]";
    }
    __name(isDate, "isDate");
    exports.isDate = isDate;
    function isError(e) {
      return objectToString(e) === "[object Error]" || e instanceof Error;
    }
    __name(isError, "isError");
    exports.isError = isError;
    function isFunction(arg) {
      return typeof arg === "function";
    }
    __name(isFunction, "isFunction");
    exports.isFunction = isFunction;
    function isPrimitive(arg) {
      return arg === null || typeof arg === "boolean" || typeof arg === "number" || typeof arg === "string" || typeof arg === "symbol" || // ES6 symbol
      typeof arg === "undefined";
    }
    __name(isPrimitive, "isPrimitive");
    exports.isPrimitive = isPrimitive;
    exports.isBuffer = require("buffer").Buffer.isBuffer;
    function objectToString(o) {
      return Object.prototype.toString.call(o);
    }
    __name(objectToString, "objectToString");
  }
});

// node_modules/inherits/inherits_browser.js
var require_inherits_browser = __commonJS({
  "node_modules/inherits/inherits_browser.js"(exports, module2) {
    "use strict";
    if (typeof Object.create === "function") {
      module2.exports = /* @__PURE__ */ __name(function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
              value: ctor,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
        }
      }, "inherits");
    } else {
      module2.exports = /* @__PURE__ */ __name(function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          var TempCtor = /* @__PURE__ */ __name(function() {
          }, "TempCtor");
          TempCtor.prototype = superCtor.prototype;
          ctor.prototype = new TempCtor();
          ctor.prototype.constructor = ctor;
        }
      }, "inherits");
    }
  }
});

// node_modules/inherits/inherits.js
var require_inherits = __commonJS({
  "node_modules/inherits/inherits.js"(exports, module2) {
    "use strict";
    try {
      util = require("util");
      if (typeof util.inherits !== "function")
        throw "";
      module2.exports = util.inherits;
    } catch (e) {
      module2.exports = require_inherits_browser();
    }
    var util;
  }
});

// node_modules/readable-stream/lib/internal/streams/BufferList.js
var require_BufferList = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/BufferList.js"(exports, module2) {
    "use strict";
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    __name(_classCallCheck, "_classCallCheck");
    var Buffer2 = require_safe_buffer().Buffer;
    var util = require("util");
    function copyBuffer(src, target, offset) {
      src.copy(target, offset);
    }
    __name(copyBuffer, "copyBuffer");
    module2.exports = function() {
      function BufferList() {
        _classCallCheck(this, BufferList);
        this.head = null;
        this.tail = null;
        this.length = 0;
      }
      __name(BufferList, "BufferList");
      BufferList.prototype.push = /* @__PURE__ */ __name(function push(v) {
        var entry = {
          data: v,
          next: null
        };
        if (this.length > 0)
          this.tail.next = entry;
        else
          this.head = entry;
        this.tail = entry;
        ++this.length;
      }, "push");
      BufferList.prototype.unshift = /* @__PURE__ */ __name(function unshift(v) {
        var entry = {
          data: v,
          next: this.head
        };
        if (this.length === 0)
          this.tail = entry;
        this.head = entry;
        ++this.length;
      }, "unshift");
      BufferList.prototype.shift = /* @__PURE__ */ __name(function shift() {
        if (this.length === 0)
          return;
        var ret = this.head.data;
        if (this.length === 1)
          this.head = this.tail = null;
        else
          this.head = this.head.next;
        --this.length;
        return ret;
      }, "shift");
      BufferList.prototype.clear = /* @__PURE__ */ __name(function clear() {
        this.head = this.tail = null;
        this.length = 0;
      }, "clear");
      BufferList.prototype.join = /* @__PURE__ */ __name(function join(s) {
        if (this.length === 0)
          return "";
        var p = this.head;
        var ret = "" + p.data;
        while (p = p.next) {
          ret += s + p.data;
        }
        return ret;
      }, "join");
      BufferList.prototype.concat = /* @__PURE__ */ __name(function concat(n) {
        if (this.length === 0)
          return Buffer2.alloc(0);
        var ret = Buffer2.allocUnsafe(n >>> 0);
        var p = this.head;
        var i = 0;
        while (p) {
          copyBuffer(p.data, ret, i);
          i += p.data.length;
          p = p.next;
        }
        return ret;
      }, "concat");
      return BufferList;
    }();
    if (util && util.inspect && util.inspect.custom) {
      module2.exports.prototype[util.inspect.custom] = function() {
        var obj = util.inspect({
          length: this.length
        });
        return this.constructor.name + " " + obj;
      };
    }
  }
});

// node_modules/readable-stream/lib/internal/streams/destroy.js
var require_destroy = __commonJS({
  "node_modules/readable-stream/lib/internal/streams/destroy.js"(exports, module2) {
    "use strict";
    var pna = require_process_nextick_args();
    function destroy(err, cb) {
      var _this = this;
      var readableDestroyed = this._readableState && this._readableState.destroyed;
      var writableDestroyed = this._writableState && this._writableState.destroyed;
      if (readableDestroyed || writableDestroyed) {
        if (cb) {
          cb(err);
        } else if (err) {
          if (!this._writableState) {
            pna.nextTick(emitErrorNT, this, err);
          } else if (!this._writableState.errorEmitted) {
            this._writableState.errorEmitted = true;
            pna.nextTick(emitErrorNT, this, err);
          }
        }
        return this;
      }
      if (this._readableState) {
        this._readableState.destroyed = true;
      }
      if (this._writableState) {
        this._writableState.destroyed = true;
      }
      this._destroy(err || null, function(err2) {
        if (!cb && err2) {
          if (!_this._writableState) {
            pna.nextTick(emitErrorNT, _this, err2);
          } else if (!_this._writableState.errorEmitted) {
            _this._writableState.errorEmitted = true;
            pna.nextTick(emitErrorNT, _this, err2);
          }
        } else if (cb) {
          cb(err2);
        }
      });
      return this;
    }
    __name(destroy, "destroy");
    function undestroy() {
      if (this._readableState) {
        this._readableState.destroyed = false;
        this._readableState.reading = false;
        this._readableState.ended = false;
        this._readableState.endEmitted = false;
      }
      if (this._writableState) {
        this._writableState.destroyed = false;
        this._writableState.ended = false;
        this._writableState.ending = false;
        this._writableState.finalCalled = false;
        this._writableState.prefinished = false;
        this._writableState.finished = false;
        this._writableState.errorEmitted = false;
      }
    }
    __name(undestroy, "undestroy");
    function emitErrorNT(self2, err) {
      self2.emit("error", err);
    }
    __name(emitErrorNT, "emitErrorNT");
    module2.exports = {
      destroy,
      undestroy
    };
  }
});

// node_modules/util-deprecate/node.js
var require_node2 = __commonJS({
  "node_modules/util-deprecate/node.js"(exports, module2) {
    "use strict";
    module2.exports = require("util").deprecate;
  }
});

// node_modules/readable-stream/lib/_stream_writable.js
var require_stream_writable = __commonJS({
  "node_modules/readable-stream/lib/_stream_writable.js"(exports, module2) {
    "use strict";
    var pna = require_process_nextick_args();
    module2.exports = Writable;
    function CorkedRequest(state) {
      var _this = this;
      this.next = null;
      this.entry = null;
      this.finish = function() {
        onCorkedFinish(_this, state);
      };
    }
    __name(CorkedRequest, "CorkedRequest");
    var asyncWrite = !process.browser && [
      "v0.10",
      "v0.9."
    ].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : pna.nextTick;
    var Duplex;
    Writable.WritableState = WritableState;
    var util = Object.create(require_util());
    util.inherits = require_inherits();
    var internalUtil = {
      deprecate: require_node2()
    };
    var Stream = require_stream();
    var Buffer2 = require_safe_buffer().Buffer;
    var OurUint8Array = (typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}).Uint8Array || function() {
    };
    function _uint8ArrayToBuffer(chunk) {
      return Buffer2.from(chunk);
    }
    __name(_uint8ArrayToBuffer, "_uint8ArrayToBuffer");
    function _isUint8Array(obj) {
      return Buffer2.isBuffer(obj) || obj instanceof OurUint8Array;
    }
    __name(_isUint8Array, "_isUint8Array");
    var destroyImpl = require_destroy();
    util.inherits(Writable, Stream);
    function nop() {
    }
    __name(nop, "nop");
    function WritableState(options, stream) {
      Duplex = Duplex || require_stream_duplex();
      options = options || {};
      var isDuplex = stream instanceof Duplex;
      this.objectMode = !!options.objectMode;
      if (isDuplex)
        this.objectMode = this.objectMode || !!options.writableObjectMode;
      var hwm = options.highWaterMark;
      var writableHwm = options.writableHighWaterMark;
      var defaultHwm = this.objectMode ? 16 : 16 * 1024;
      if (hwm || hwm === 0)
        this.highWaterMark = hwm;
      else if (isDuplex && (writableHwm || writableHwm === 0))
        this.highWaterMark = writableHwm;
      else
        this.highWaterMark = defaultHwm;
      this.highWaterMark = Math.floor(this.highWaterMark);
      this.finalCalled = false;
      this.needDrain = false;
      this.ending = false;
      this.ended = false;
      this.finished = false;
      this.destroyed = false;
      var noDecode = options.decodeStrings === false;
      this.decodeStrings = !noDecode;
      this.defaultEncoding = options.defaultEncoding || "utf8";
      this.length = 0;
      this.writing = false;
      this.corked = 0;
      this.sync = true;
      this.bufferProcessing = false;
      this.onwrite = function(er) {
        onwrite(stream, er);
      };
      this.writecb = null;
      this.writelen = 0;
      this.bufferedRequest = null;
      this.lastBufferedRequest = null;
      this.pendingcb = 0;
      this.prefinished = false;
      this.errorEmitted = false;
      this.bufferedRequestCount = 0;
      this.corkedRequestsFree = new CorkedRequest(this);
    }
    __name(WritableState, "WritableState");
    WritableState.prototype.getBuffer = /* @__PURE__ */ __name(function getBuffer() {
      var current = this.bufferedRequest;
      var out = [];
      while (current) {
        out.push(current);
        current = current.next;
      }
      return out;
    }, "getBuffer");
    (function() {
      try {
        Object.defineProperty(WritableState.prototype, "buffer", {
          get: internalUtil.deprecate(function() {
            return this.getBuffer();
          }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
        });
      } catch (_) {
      }
    })();
    var realHasInstance;
    if (typeof Symbol === "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === "function") {
      realHasInstance = Function.prototype[Symbol.hasInstance];
      Object.defineProperty(Writable, Symbol.hasInstance, {
        value: function(object) {
          if (realHasInstance.call(this, object))
            return true;
          if (this !== Writable)
            return false;
          return object && object._writableState instanceof WritableState;
        }
      });
    } else {
      realHasInstance = /* @__PURE__ */ __name(function(object) {
        return object instanceof this;
      }, "realHasInstance");
    }
    function Writable(options) {
      Duplex = Duplex || require_stream_duplex();
      if (!realHasInstance.call(Writable, this) && !(this instanceof Duplex)) {
        return new Writable(options);
      }
      this._writableState = new WritableState(options, this);
      this.writable = true;
      if (options) {
        if (typeof options.write === "function")
          this._write = options.write;
        if (typeof options.writev === "function")
          this._writev = options.writev;
        if (typeof options.destroy === "function")
          this._destroy = options.destroy;
        if (typeof options.final === "function")
          this._final = options.final;
      }
      Stream.call(this);
    }
    __name(Writable, "Writable");
    Writable.prototype.pipe = function() {
      this.emit("error", new Error("Cannot pipe, not readable"));
    };
    function writeAfterEnd(stream, cb) {
      var er = new Error("write after end");
      stream.emit("error", er);
      pna.nextTick(cb, er);
    }
    __name(writeAfterEnd, "writeAfterEnd");
    function validChunk(stream, state, chunk, cb) {
      var valid = true;
      var er = false;
      if (chunk === null) {
        er = new TypeError("May not write null values to stream");
      } else if (typeof chunk !== "string" && chunk !== void 0 && !state.objectMode) {
        er = new TypeError("Invalid non-string/buffer chunk");
      }
      if (er) {
        stream.emit("error", er);
        pna.nextTick(cb, er);
        valid = false;
      }
      return valid;
    }
    __name(validChunk, "validChunk");
    Writable.prototype.write = function(chunk, encoding, cb) {
      var state = this._writableState;
      var ret = false;
      var isBuf = !state.objectMode && _isUint8Array(chunk);
      if (isBuf && !Buffer2.isBuffer(chunk)) {
        chunk = _uint8ArrayToBuffer(chunk);
      }
      if (typeof encoding === "function") {
        cb = encoding;
        encoding = null;
      }
      if (isBuf)
        encoding = "buffer";
      else if (!encoding)
        encoding = state.defaultEncoding;
      if (typeof cb !== "function")
        cb = nop;
      if (state.ended)
        writeAfterEnd(this, cb);
      else if (isBuf || validChunk(this, state, chunk, cb)) {
        state.pendingcb++;
        ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
      }
      return ret;
    };
    Writable.prototype.cork = function() {
      var state = this._writableState;
      state.corked++;
    };
    Writable.prototype.uncork = function() {
      var state = this._writableState;
      if (state.corked) {
        state.corked--;
        if (!state.writing && !state.corked && !state.bufferProcessing && state.bufferedRequest)
          clearBuffer(this, state);
      }
    };
    Writable.prototype.setDefaultEncoding = /* @__PURE__ */ __name(function setDefaultEncoding(encoding) {
      if (typeof encoding === "string")
        encoding = encoding.toLowerCase();
      if (!([
        "hex",
        "utf8",
        "utf-8",
        "ascii",
        "binary",
        "base64",
        "ucs2",
        "ucs-2",
        "utf16le",
        "utf-16le",
        "raw"
      ].indexOf((encoding + "").toLowerCase()) > -1))
        throw new TypeError("Unknown encoding: " + encoding);
      this._writableState.defaultEncoding = encoding;
      return this;
    }, "setDefaultEncoding");
    function decodeChunk(state, chunk, encoding) {
      if (!state.objectMode && state.decodeStrings !== false && typeof chunk === "string") {
        chunk = Buffer2.from(chunk, encoding);
      }
      return chunk;
    }
    __name(decodeChunk, "decodeChunk");
    Object.defineProperty(Writable.prototype, "writableHighWaterMark", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function() {
        return this._writableState.highWaterMark;
      }
    });
    function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
      if (!isBuf) {
        var newChunk = decodeChunk(state, chunk, encoding);
        if (chunk !== newChunk) {
          isBuf = true;
          encoding = "buffer";
          chunk = newChunk;
        }
      }
      var len = state.objectMode ? 1 : chunk.length;
      state.length += len;
      var ret = state.length < state.highWaterMark;
      if (!ret)
        state.needDrain = true;
      if (state.writing || state.corked) {
        var last = state.lastBufferedRequest;
        state.lastBufferedRequest = {
          chunk,
          encoding,
          isBuf,
          callback: cb,
          next: null
        };
        if (last) {
          last.next = state.lastBufferedRequest;
        } else {
          state.bufferedRequest = state.lastBufferedRequest;
        }
        state.bufferedRequestCount += 1;
      } else {
        doWrite(stream, state, false, len, chunk, encoding, cb);
      }
      return ret;
    }
    __name(writeOrBuffer, "writeOrBuffer");
    function doWrite(stream, state, writev, len, chunk, encoding, cb) {
      state.writelen = len;
      state.writecb = cb;
      state.writing = true;
      state.sync = true;
      if (writev)
        stream._writev(chunk, state.onwrite);
      else
        stream._write(chunk, encoding, state.onwrite);
      state.sync = false;
    }
    __name(doWrite, "doWrite");
    function onwriteError(stream, state, sync, er, cb) {
      --state.pendingcb;
      if (sync) {
        pna.nextTick(cb, er);
        pna.nextTick(finishMaybe, stream, state);
        stream._writableState.errorEmitted = true;
        stream.emit("error", er);
      } else {
        cb(er);
        stream._writableState.errorEmitted = true;
        stream.emit("error", er);
        finishMaybe(stream, state);
      }
    }
    __name(onwriteError, "onwriteError");
    function onwriteStateUpdate(state) {
      state.writing = false;
      state.writecb = null;
      state.length -= state.writelen;
      state.writelen = 0;
    }
    __name(onwriteStateUpdate, "onwriteStateUpdate");
    function onwrite(stream, er) {
      var state = stream._writableState;
      var sync = state.sync;
      var cb = state.writecb;
      onwriteStateUpdate(state);
      if (er)
        onwriteError(stream, state, sync, er, cb);
      else {
        var finished = needFinish(state);
        if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
          clearBuffer(stream, state);
        }
        if (sync) {
          asyncWrite(afterWrite, stream, state, finished, cb);
        } else {
          afterWrite(stream, state, finished, cb);
        }
      }
    }
    __name(onwrite, "onwrite");
    function afterWrite(stream, state, finished, cb) {
      if (!finished)
        onwriteDrain(stream, state);
      state.pendingcb--;
      cb();
      finishMaybe(stream, state);
    }
    __name(afterWrite, "afterWrite");
    function onwriteDrain(stream, state) {
      if (state.length === 0 && state.needDrain) {
        state.needDrain = false;
        stream.emit("drain");
      }
    }
    __name(onwriteDrain, "onwriteDrain");
    function clearBuffer(stream, state) {
      state.bufferProcessing = true;
      var entry = state.bufferedRequest;
      if (stream._writev && entry && entry.next) {
        var l = state.bufferedRequestCount;
        var buffer = new Array(l);
        var holder = state.corkedRequestsFree;
        holder.entry = entry;
        var count = 0;
        var allBuffers = true;
        while (entry) {
          buffer[count] = entry;
          if (!entry.isBuf)
            allBuffers = false;
          entry = entry.next;
          count += 1;
        }
        buffer.allBuffers = allBuffers;
        doWrite(stream, state, true, state.length, buffer, "", holder.finish);
        state.pendingcb++;
        state.lastBufferedRequest = null;
        if (holder.next) {
          state.corkedRequestsFree = holder.next;
          holder.next = null;
        } else {
          state.corkedRequestsFree = new CorkedRequest(state);
        }
        state.bufferedRequestCount = 0;
      } else {
        while (entry) {
          var chunk = entry.chunk;
          var encoding = entry.encoding;
          var cb = entry.callback;
          var len = state.objectMode ? 1 : chunk.length;
          doWrite(stream, state, false, len, chunk, encoding, cb);
          entry = entry.next;
          state.bufferedRequestCount--;
          if (state.writing) {
            break;
          }
        }
        if (entry === null)
          state.lastBufferedRequest = null;
      }
      state.bufferedRequest = entry;
      state.bufferProcessing = false;
    }
    __name(clearBuffer, "clearBuffer");
    Writable.prototype._write = function(chunk, encoding, cb) {
      cb(new Error("_write() is not implemented"));
    };
    Writable.prototype._writev = null;
    Writable.prototype.end = function(chunk, encoding, cb) {
      var state = this._writableState;
      if (typeof chunk === "function") {
        cb = chunk;
        chunk = null;
        encoding = null;
      } else if (typeof encoding === "function") {
        cb = encoding;
        encoding = null;
      }
      if (chunk !== null && chunk !== void 0)
        this.write(chunk, encoding);
      if (state.corked) {
        state.corked = 1;
        this.uncork();
      }
      if (!state.ending)
        endWritable(this, state, cb);
    };
    function needFinish(state) {
      return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
    }
    __name(needFinish, "needFinish");
    function callFinal(stream, state) {
      stream._final(function(err) {
        state.pendingcb--;
        if (err) {
          stream.emit("error", err);
        }
        state.prefinished = true;
        stream.emit("prefinish");
        finishMaybe(stream, state);
      });
    }
    __name(callFinal, "callFinal");
    function prefinish(stream, state) {
      if (!state.prefinished && !state.finalCalled) {
        if (typeof stream._final === "function") {
          state.pendingcb++;
          state.finalCalled = true;
          pna.nextTick(callFinal, stream, state);
        } else {
          state.prefinished = true;
          stream.emit("prefinish");
        }
      }
    }
    __name(prefinish, "prefinish");
    function finishMaybe(stream, state) {
      var need = needFinish(state);
      if (need) {
        prefinish(stream, state);
        if (state.pendingcb === 0) {
          state.finished = true;
          stream.emit("finish");
        }
      }
      return need;
    }
    __name(finishMaybe, "finishMaybe");
    function endWritable(stream, state, cb) {
      state.ending = true;
      finishMaybe(stream, state);
      if (cb) {
        if (state.finished)
          pna.nextTick(cb);
        else
          stream.once("finish", cb);
      }
      state.ended = true;
      stream.writable = false;
    }
    __name(endWritable, "endWritable");
    function onCorkedFinish(corkReq, state, err) {
      var entry = corkReq.entry;
      corkReq.entry = null;
      while (entry) {
        var cb = entry.callback;
        state.pendingcb--;
        cb(err);
        entry = entry.next;
      }
      state.corkedRequestsFree.next = corkReq;
    }
    __name(onCorkedFinish, "onCorkedFinish");
    Object.defineProperty(Writable.prototype, "destroyed", {
      get: function() {
        if (this._writableState === void 0) {
          return false;
        }
        return this._writableState.destroyed;
      },
      set: function(value) {
        if (!this._writableState) {
          return;
        }
        this._writableState.destroyed = value;
      }
    });
    Writable.prototype.destroy = destroyImpl.destroy;
    Writable.prototype._undestroy = destroyImpl.undestroy;
    Writable.prototype._destroy = function(err, cb) {
      this.end();
      cb(err);
    };
  }
});

// node_modules/readable-stream/lib/_stream_duplex.js
var require_stream_duplex = __commonJS({
  "node_modules/readable-stream/lib/_stream_duplex.js"(exports, module2) {
    "use strict";
    var pna = require_process_nextick_args();
    var objectKeys = Object.keys || function(obj) {
      var keys2 = [];
      for (var key in obj) {
        keys2.push(key);
      }
      return keys2;
    };
    module2.exports = Duplex;
    var util = Object.create(require_util());
    util.inherits = require_inherits();
    var Readable = require_stream_readable();
    var Writable = require_stream_writable();
    util.inherits(Duplex, Readable);
    {
      keys = objectKeys(Writable.prototype);
      for (v = 0; v < keys.length; v++) {
        method = keys[v];
        if (!Duplex.prototype[method])
          Duplex.prototype[method] = Writable.prototype[method];
      }
    }
    var keys;
    var method;
    var v;
    function Duplex(options) {
      if (!(this instanceof Duplex))
        return new Duplex(options);
      Readable.call(this, options);
      Writable.call(this, options);
      if (options && options.readable === false)
        this.readable = false;
      if (options && options.writable === false)
        this.writable = false;
      this.allowHalfOpen = true;
      if (options && options.allowHalfOpen === false)
        this.allowHalfOpen = false;
      this.once("end", onend);
    }
    __name(Duplex, "Duplex");
    Object.defineProperty(Duplex.prototype, "writableHighWaterMark", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function() {
        return this._writableState.highWaterMark;
      }
    });
    function onend() {
      if (this.allowHalfOpen || this._writableState.ended)
        return;
      pna.nextTick(onEndNT, this);
    }
    __name(onend, "onend");
    function onEndNT(self2) {
      self2.end();
    }
    __name(onEndNT, "onEndNT");
    Object.defineProperty(Duplex.prototype, "destroyed", {
      get: function() {
        if (this._readableState === void 0 || this._writableState === void 0) {
          return false;
        }
        return this._readableState.destroyed && this._writableState.destroyed;
      },
      set: function(value) {
        if (this._readableState === void 0 || this._writableState === void 0) {
          return;
        }
        this._readableState.destroyed = value;
        this._writableState.destroyed = value;
      }
    });
    Duplex.prototype._destroy = function(err, cb) {
      this.push(null);
      this.end();
      pna.nextTick(cb, err);
    };
  }
});

// node_modules/string_decoder/node_modules/safe-buffer/index.js
var require_safe_buffer2 = __commonJS({
  "node_modules/string_decoder/node_modules/safe-buffer/index.js"(exports, module2) {
    "use strict";
    var buffer = require("buffer");
    var Buffer2 = buffer.Buffer;
    function copyProps(src, dst) {
      for (var key in src) {
        dst[key] = src[key];
      }
    }
    __name(copyProps, "copyProps");
    if (Buffer2.from && Buffer2.alloc && Buffer2.allocUnsafe && Buffer2.allocUnsafeSlow) {
      module2.exports = buffer;
    } else {
      copyProps(buffer, exports);
      exports.Buffer = SafeBuffer;
    }
    function SafeBuffer(arg, encodingOrOffset, length) {
      return Buffer2(arg, encodingOrOffset, length);
    }
    __name(SafeBuffer, "SafeBuffer");
    copyProps(Buffer2, SafeBuffer);
    SafeBuffer.from = function(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        throw new TypeError("Argument must not be a number");
      }
      return Buffer2(arg, encodingOrOffset, length);
    };
    SafeBuffer.alloc = function(size, fill, encoding) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      var buf = Buffer2(size);
      if (fill !== void 0) {
        if (typeof encoding === "string") {
          buf.fill(fill, encoding);
        } else {
          buf.fill(fill);
        }
      } else {
        buf.fill(0);
      }
      return buf;
    };
    SafeBuffer.allocUnsafe = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return Buffer2(size);
    };
    SafeBuffer.allocUnsafeSlow = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return buffer.SlowBuffer(size);
    };
  }
});

// node_modules/string_decoder/lib/string_decoder.js
var require_string_decoder = __commonJS({
  "node_modules/string_decoder/lib/string_decoder.js"(exports) {
    "use strict";
    var Buffer2 = require_safe_buffer2().Buffer;
    var isEncoding = Buffer2.isEncoding || function(encoding) {
      encoding = "" + encoding;
      switch (encoding && encoding.toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
          return true;
        default:
          return false;
      }
    };
    function _normalizeEncoding(enc) {
      if (!enc)
        return "utf8";
      var retried;
      while (true) {
        switch (enc) {
          case "utf8":
          case "utf-8":
            return "utf8";
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return "utf16le";
          case "latin1":
          case "binary":
            return "latin1";
          case "base64":
          case "ascii":
          case "hex":
            return enc;
          default:
            if (retried)
              return;
            enc = ("" + enc).toLowerCase();
            retried = true;
        }
      }
    }
    __name(_normalizeEncoding, "_normalizeEncoding");
    function normalizeEncoding(enc) {
      var nenc = _normalizeEncoding(enc);
      if (typeof nenc !== "string" && (Buffer2.isEncoding === isEncoding || !isEncoding(enc)))
        throw new Error("Unknown encoding: " + enc);
      return nenc || enc;
    }
    __name(normalizeEncoding, "normalizeEncoding");
    exports.StringDecoder = StringDecoder;
    function StringDecoder(encoding) {
      this.encoding = normalizeEncoding(encoding);
      var nb;
      switch (this.encoding) {
        case "utf16le":
          this.text = utf16Text;
          this.end = utf16End;
          nb = 4;
          break;
        case "utf8":
          this.fillLast = utf8FillLast;
          nb = 4;
          break;
        case "base64":
          this.text = base64Text;
          this.end = base64End;
          nb = 3;
          break;
        default:
          this.write = simpleWrite;
          this.end = simpleEnd;
          return;
      }
      this.lastNeed = 0;
      this.lastTotal = 0;
      this.lastChar = Buffer2.allocUnsafe(nb);
    }
    __name(StringDecoder, "StringDecoder");
    StringDecoder.prototype.write = function(buf) {
      if (buf.length === 0)
        return "";
      var r;
      var i;
      if (this.lastNeed) {
        r = this.fillLast(buf);
        if (r === void 0)
          return "";
        i = this.lastNeed;
        this.lastNeed = 0;
      } else {
        i = 0;
      }
      if (i < buf.length)
        return r ? r + this.text(buf, i) : this.text(buf, i);
      return r || "";
    };
    StringDecoder.prototype.end = utf8End;
    StringDecoder.prototype.text = utf8Text;
    StringDecoder.prototype.fillLast = function(buf) {
      if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
      }
      buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
      this.lastNeed -= buf.length;
    };
    function utf8CheckByte(byte) {
      if (byte <= 127)
        return 0;
      else if (byte >> 5 === 6)
        return 2;
      else if (byte >> 4 === 14)
        return 3;
      else if (byte >> 3 === 30)
        return 4;
      return byte >> 6 === 2 ? -1 : -2;
    }
    __name(utf8CheckByte, "utf8CheckByte");
    function utf8CheckIncomplete(self2, buf, i) {
      var j = buf.length - 1;
      if (j < i)
        return 0;
      var nb = utf8CheckByte(buf[j]);
      if (nb >= 0) {
        if (nb > 0)
          self2.lastNeed = nb - 1;
        return nb;
      }
      if (--j < i || nb === -2)
        return 0;
      nb = utf8CheckByte(buf[j]);
      if (nb >= 0) {
        if (nb > 0)
          self2.lastNeed = nb - 2;
        return nb;
      }
      if (--j < i || nb === -2)
        return 0;
      nb = utf8CheckByte(buf[j]);
      if (nb >= 0) {
        if (nb > 0) {
          if (nb === 2)
            nb = 0;
          else
            self2.lastNeed = nb - 3;
        }
        return nb;
      }
      return 0;
    }
    __name(utf8CheckIncomplete, "utf8CheckIncomplete");
    function utf8CheckExtraBytes(self2, buf, p) {
      if ((buf[0] & 192) !== 128) {
        self2.lastNeed = 0;
        return "\uFFFD";
      }
      if (self2.lastNeed > 1 && buf.length > 1) {
        if ((buf[1] & 192) !== 128) {
          self2.lastNeed = 1;
          return "\uFFFD";
        }
        if (self2.lastNeed > 2 && buf.length > 2) {
          if ((buf[2] & 192) !== 128) {
            self2.lastNeed = 2;
            return "\uFFFD";
          }
        }
      }
    }
    __name(utf8CheckExtraBytes, "utf8CheckExtraBytes");
    function utf8FillLast(buf) {
      var p = this.lastTotal - this.lastNeed;
      var r = utf8CheckExtraBytes(this, buf, p);
      if (r !== void 0)
        return r;
      if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, p, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
      }
      buf.copy(this.lastChar, p, 0, buf.length);
      this.lastNeed -= buf.length;
    }
    __name(utf8FillLast, "utf8FillLast");
    function utf8Text(buf, i) {
      var total = utf8CheckIncomplete(this, buf, i);
      if (!this.lastNeed)
        return buf.toString("utf8", i);
      this.lastTotal = total;
      var end = buf.length - (total - this.lastNeed);
      buf.copy(this.lastChar, 0, end);
      return buf.toString("utf8", i, end);
    }
    __name(utf8Text, "utf8Text");
    function utf8End(buf) {
      var r = buf && buf.length ? this.write(buf) : "";
      if (this.lastNeed)
        return r + "\uFFFD";
      return r;
    }
    __name(utf8End, "utf8End");
    function utf16Text(buf, i) {
      if ((buf.length - i) % 2 === 0) {
        var r = buf.toString("utf16le", i);
        if (r) {
          var c = r.charCodeAt(r.length - 1);
          if (c >= 55296 && c <= 56319) {
            this.lastNeed = 2;
            this.lastTotal = 4;
            this.lastChar[0] = buf[buf.length - 2];
            this.lastChar[1] = buf[buf.length - 1];
            return r.slice(0, -1);
          }
        }
        return r;
      }
      this.lastNeed = 1;
      this.lastTotal = 2;
      this.lastChar[0] = buf[buf.length - 1];
      return buf.toString("utf16le", i, buf.length - 1);
    }
    __name(utf16Text, "utf16Text");
    function utf16End(buf) {
      var r = buf && buf.length ? this.write(buf) : "";
      if (this.lastNeed) {
        var end = this.lastTotal - this.lastNeed;
        return r + this.lastChar.toString("utf16le", 0, end);
      }
      return r;
    }
    __name(utf16End, "utf16End");
    function base64Text(buf, i) {
      var n = (buf.length - i) % 3;
      if (n === 0)
        return buf.toString("base64", i);
      this.lastNeed = 3 - n;
      this.lastTotal = 3;
      if (n === 1) {
        this.lastChar[0] = buf[buf.length - 1];
      } else {
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
      }
      return buf.toString("base64", i, buf.length - n);
    }
    __name(base64Text, "base64Text");
    function base64End(buf) {
      var r = buf && buf.length ? this.write(buf) : "";
      if (this.lastNeed)
        return r + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
      return r;
    }
    __name(base64End, "base64End");
    function simpleWrite(buf) {
      return buf.toString(this.encoding);
    }
    __name(simpleWrite, "simpleWrite");
    function simpleEnd(buf) {
      return buf && buf.length ? this.write(buf) : "";
    }
    __name(simpleEnd, "simpleEnd");
  }
});

// node_modules/readable-stream/lib/_stream_readable.js
var require_stream_readable = __commonJS({
  "node_modules/readable-stream/lib/_stream_readable.js"(exports, module2) {
    "use strict";
    var pna = require_process_nextick_args();
    module2.exports = Readable;
    var isArray = require_isarray();
    var Duplex;
    Readable.ReadableState = ReadableState;
    var EE = require("events").EventEmitter;
    var EElistenerCount = /* @__PURE__ */ __name(function(emitter, type) {
      return emitter.listeners(type).length;
    }, "EElistenerCount");
    var Stream = require_stream();
    var Buffer2 = require_safe_buffer().Buffer;
    var OurUint8Array = (typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}).Uint8Array || function() {
    };
    function _uint8ArrayToBuffer(chunk) {
      return Buffer2.from(chunk);
    }
    __name(_uint8ArrayToBuffer, "_uint8ArrayToBuffer");
    function _isUint8Array(obj) {
      return Buffer2.isBuffer(obj) || obj instanceof OurUint8Array;
    }
    __name(_isUint8Array, "_isUint8Array");
    var util = Object.create(require_util());
    util.inherits = require_inherits();
    var debugUtil = require("util");
    var debug = void 0;
    if (debugUtil && debugUtil.debuglog) {
      debug = debugUtil.debuglog("stream");
    } else {
      debug = /* @__PURE__ */ __name(function() {
      }, "debug");
    }
    var BufferList = require_BufferList();
    var destroyImpl = require_destroy();
    var StringDecoder;
    util.inherits(Readable, Stream);
    var kProxyEvents = [
      "error",
      "close",
      "destroy",
      "pause",
      "resume"
    ];
    function prependListener(emitter, event, fn) {
      if (typeof emitter.prependListener === "function")
        return emitter.prependListener(event, fn);
      if (!emitter._events || !emitter._events[event])
        emitter.on(event, fn);
      else if (isArray(emitter._events[event]))
        emitter._events[event].unshift(fn);
      else
        emitter._events[event] = [
          fn,
          emitter._events[event]
        ];
    }
    __name(prependListener, "prependListener");
    function ReadableState(options, stream) {
      Duplex = Duplex || require_stream_duplex();
      options = options || {};
      var isDuplex = stream instanceof Duplex;
      this.objectMode = !!options.objectMode;
      if (isDuplex)
        this.objectMode = this.objectMode || !!options.readableObjectMode;
      var hwm = options.highWaterMark;
      var readableHwm = options.readableHighWaterMark;
      var defaultHwm = this.objectMode ? 16 : 16 * 1024;
      if (hwm || hwm === 0)
        this.highWaterMark = hwm;
      else if (isDuplex && (readableHwm || readableHwm === 0))
        this.highWaterMark = readableHwm;
      else
        this.highWaterMark = defaultHwm;
      this.highWaterMark = Math.floor(this.highWaterMark);
      this.buffer = new BufferList();
      this.length = 0;
      this.pipes = null;
      this.pipesCount = 0;
      this.flowing = null;
      this.ended = false;
      this.endEmitted = false;
      this.reading = false;
      this.sync = true;
      this.needReadable = false;
      this.emittedReadable = false;
      this.readableListening = false;
      this.resumeScheduled = false;
      this.destroyed = false;
      this.defaultEncoding = options.defaultEncoding || "utf8";
      this.awaitDrain = 0;
      this.readingMore = false;
      this.decoder = null;
      this.encoding = null;
      if (options.encoding) {
        if (!StringDecoder)
          StringDecoder = require_string_decoder().StringDecoder;
        this.decoder = new StringDecoder(options.encoding);
        this.encoding = options.encoding;
      }
    }
    __name(ReadableState, "ReadableState");
    function Readable(options) {
      Duplex = Duplex || require_stream_duplex();
      if (!(this instanceof Readable))
        return new Readable(options);
      this._readableState = new ReadableState(options, this);
      this.readable = true;
      if (options) {
        if (typeof options.read === "function")
          this._read = options.read;
        if (typeof options.destroy === "function")
          this._destroy = options.destroy;
      }
      Stream.call(this);
    }
    __name(Readable, "Readable");
    Object.defineProperty(Readable.prototype, "destroyed", {
      get: function() {
        if (this._readableState === void 0) {
          return false;
        }
        return this._readableState.destroyed;
      },
      set: function(value) {
        if (!this._readableState) {
          return;
        }
        this._readableState.destroyed = value;
      }
    });
    Readable.prototype.destroy = destroyImpl.destroy;
    Readable.prototype._undestroy = destroyImpl.undestroy;
    Readable.prototype._destroy = function(err, cb) {
      this.push(null);
      cb(err);
    };
    Readable.prototype.push = function(chunk, encoding) {
      var state = this._readableState;
      var skipChunkCheck;
      if (!state.objectMode) {
        if (typeof chunk === "string") {
          encoding = encoding || state.defaultEncoding;
          if (encoding !== state.encoding) {
            chunk = Buffer2.from(chunk, encoding);
            encoding = "";
          }
          skipChunkCheck = true;
        }
      } else {
        skipChunkCheck = true;
      }
      return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
    };
    Readable.prototype.unshift = function(chunk) {
      return readableAddChunk(this, chunk, null, true, false);
    };
    function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
      var state = stream._readableState;
      if (chunk === null) {
        state.reading = false;
        onEofChunk(stream, state);
      } else {
        var er;
        if (!skipChunkCheck)
          er = chunkInvalid(state, chunk);
        if (er) {
          stream.emit("error", er);
        } else if (state.objectMode || chunk && chunk.length > 0) {
          if (typeof chunk !== "string" && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer2.prototype) {
            chunk = _uint8ArrayToBuffer(chunk);
          }
          if (addToFront) {
            if (state.endEmitted)
              stream.emit("error", new Error("stream.unshift() after end event"));
            else
              addChunk(stream, state, chunk, true);
          } else if (state.ended) {
            stream.emit("error", new Error("stream.push() after EOF"));
          } else {
            state.reading = false;
            if (state.decoder && !encoding) {
              chunk = state.decoder.write(chunk);
              if (state.objectMode || chunk.length !== 0)
                addChunk(stream, state, chunk, false);
              else
                maybeReadMore(stream, state);
            } else {
              addChunk(stream, state, chunk, false);
            }
          }
        } else if (!addToFront) {
          state.reading = false;
        }
      }
      return needMoreData(state);
    }
    __name(readableAddChunk, "readableAddChunk");
    function addChunk(stream, state, chunk, addToFront) {
      if (state.flowing && state.length === 0 && !state.sync) {
        stream.emit("data", chunk);
        stream.read(0);
      } else {
        state.length += state.objectMode ? 1 : chunk.length;
        if (addToFront)
          state.buffer.unshift(chunk);
        else
          state.buffer.push(chunk);
        if (state.needReadable)
          emitReadable(stream);
      }
      maybeReadMore(stream, state);
    }
    __name(addChunk, "addChunk");
    function chunkInvalid(state, chunk) {
      var er;
      if (!_isUint8Array(chunk) && typeof chunk !== "string" && chunk !== void 0 && !state.objectMode) {
        er = new TypeError("Invalid non-string/buffer chunk");
      }
      return er;
    }
    __name(chunkInvalid, "chunkInvalid");
    function needMoreData(state) {
      return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
    }
    __name(needMoreData, "needMoreData");
    Readable.prototype.isPaused = function() {
      return this._readableState.flowing === false;
    };
    Readable.prototype.setEncoding = function(enc) {
      if (!StringDecoder)
        StringDecoder = require_string_decoder().StringDecoder;
      this._readableState.decoder = new StringDecoder(enc);
      this._readableState.encoding = enc;
      return this;
    };
    var MAX_HWM = 8388608;
    function computeNewHighWaterMark(n) {
      if (n >= MAX_HWM) {
        n = MAX_HWM;
      } else {
        n--;
        n |= n >>> 1;
        n |= n >>> 2;
        n |= n >>> 4;
        n |= n >>> 8;
        n |= n >>> 16;
        n++;
      }
      return n;
    }
    __name(computeNewHighWaterMark, "computeNewHighWaterMark");
    function howMuchToRead(n, state) {
      if (n <= 0 || state.length === 0 && state.ended)
        return 0;
      if (state.objectMode)
        return 1;
      if (n !== n) {
        if (state.flowing && state.length)
          return state.buffer.head.data.length;
        else
          return state.length;
      }
      if (n > state.highWaterMark)
        state.highWaterMark = computeNewHighWaterMark(n);
      if (n <= state.length)
        return n;
      if (!state.ended) {
        state.needReadable = true;
        return 0;
      }
      return state.length;
    }
    __name(howMuchToRead, "howMuchToRead");
    Readable.prototype.read = function(n) {
      debug("read", n);
      n = parseInt(n, 10);
      var state = this._readableState;
      var nOrig = n;
      if (n !== 0)
        state.emittedReadable = false;
      if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
        debug("read: emitReadable", state.length, state.ended);
        if (state.length === 0 && state.ended)
          endReadable(this);
        else
          emitReadable(this);
        return null;
      }
      n = howMuchToRead(n, state);
      if (n === 0 && state.ended) {
        if (state.length === 0)
          endReadable(this);
        return null;
      }
      var doRead = state.needReadable;
      debug("need readable", doRead);
      if (state.length === 0 || state.length - n < state.highWaterMark) {
        doRead = true;
        debug("length less than watermark", doRead);
      }
      if (state.ended || state.reading) {
        doRead = false;
        debug("reading or ended", doRead);
      } else if (doRead) {
        debug("do read");
        state.reading = true;
        state.sync = true;
        if (state.length === 0)
          state.needReadable = true;
        this._read(state.highWaterMark);
        state.sync = false;
        if (!state.reading)
          n = howMuchToRead(nOrig, state);
      }
      var ret;
      if (n > 0)
        ret = fromList(n, state);
      else
        ret = null;
      if (ret === null) {
        state.needReadable = true;
        n = 0;
      } else {
        state.length -= n;
      }
      if (state.length === 0) {
        if (!state.ended)
          state.needReadable = true;
        if (nOrig !== n && state.ended)
          endReadable(this);
      }
      if (ret !== null)
        this.emit("data", ret);
      return ret;
    };
    function onEofChunk(stream, state) {
      if (state.ended)
        return;
      if (state.decoder) {
        var chunk = state.decoder.end();
        if (chunk && chunk.length) {
          state.buffer.push(chunk);
          state.length += state.objectMode ? 1 : chunk.length;
        }
      }
      state.ended = true;
      emitReadable(stream);
    }
    __name(onEofChunk, "onEofChunk");
    function emitReadable(stream) {
      var state = stream._readableState;
      state.needReadable = false;
      if (!state.emittedReadable) {
        debug("emitReadable", state.flowing);
        state.emittedReadable = true;
        if (state.sync)
          pna.nextTick(emitReadable_, stream);
        else
          emitReadable_(stream);
      }
    }
    __name(emitReadable, "emitReadable");
    function emitReadable_(stream) {
      debug("emit readable");
      stream.emit("readable");
      flow(stream);
    }
    __name(emitReadable_, "emitReadable_");
    function maybeReadMore(stream, state) {
      if (!state.readingMore) {
        state.readingMore = true;
        pna.nextTick(maybeReadMore_, stream, state);
      }
    }
    __name(maybeReadMore, "maybeReadMore");
    function maybeReadMore_(stream, state) {
      var len = state.length;
      while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
        debug("maybeReadMore read 0");
        stream.read(0);
        if (len === state.length)
          break;
        else
          len = state.length;
      }
      state.readingMore = false;
    }
    __name(maybeReadMore_, "maybeReadMore_");
    Readable.prototype._read = function(n) {
      this.emit("error", new Error("_read() is not implemented"));
    };
    Readable.prototype.pipe = function(dest, pipeOpts) {
      var src = this;
      var state = this._readableState;
      switch (state.pipesCount) {
        case 0:
          state.pipes = dest;
          break;
        case 1:
          state.pipes = [
            state.pipes,
            dest
          ];
          break;
        default:
          state.pipes.push(dest);
          break;
      }
      state.pipesCount += 1;
      debug("pipe count=%d opts=%j", state.pipesCount, pipeOpts);
      var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
      var endFn = doEnd ? onend : unpipe;
      if (state.endEmitted)
        pna.nextTick(endFn);
      else
        src.once("end", endFn);
      dest.on("unpipe", onunpipe);
      function onunpipe(readable, unpipeInfo) {
        debug("onunpipe");
        if (readable === src) {
          if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
            unpipeInfo.hasUnpiped = true;
            cleanup();
          }
        }
      }
      __name(onunpipe, "onunpipe");
      function onend() {
        debug("onend");
        dest.end();
      }
      __name(onend, "onend");
      var ondrain = pipeOnDrain(src);
      dest.on("drain", ondrain);
      var cleanedUp = false;
      function cleanup() {
        debug("cleanup");
        dest.removeListener("close", onclose);
        dest.removeListener("finish", onfinish);
        dest.removeListener("drain", ondrain);
        dest.removeListener("error", onerror);
        dest.removeListener("unpipe", onunpipe);
        src.removeListener("end", onend);
        src.removeListener("end", unpipe);
        src.removeListener("data", ondata);
        cleanedUp = true;
        if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain))
          ondrain();
      }
      __name(cleanup, "cleanup");
      var increasedAwaitDrain = false;
      src.on("data", ondata);
      function ondata(chunk) {
        debug("ondata");
        increasedAwaitDrain = false;
        var ret = dest.write(chunk);
        if (false === ret && !increasedAwaitDrain) {
          if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
            debug("false write response, pause", state.awaitDrain);
            state.awaitDrain++;
            increasedAwaitDrain = true;
          }
          src.pause();
        }
      }
      __name(ondata, "ondata");
      function onerror(er) {
        debug("onerror", er);
        unpipe();
        dest.removeListener("error", onerror);
        if (EElistenerCount(dest, "error") === 0)
          dest.emit("error", er);
      }
      __name(onerror, "onerror");
      prependListener(dest, "error", onerror);
      function onclose() {
        dest.removeListener("finish", onfinish);
        unpipe();
      }
      __name(onclose, "onclose");
      dest.once("close", onclose);
      function onfinish() {
        debug("onfinish");
        dest.removeListener("close", onclose);
        unpipe();
      }
      __name(onfinish, "onfinish");
      dest.once("finish", onfinish);
      function unpipe() {
        debug("unpipe");
        src.unpipe(dest);
      }
      __name(unpipe, "unpipe");
      dest.emit("pipe", src);
      if (!state.flowing) {
        debug("pipe resume");
        src.resume();
      }
      return dest;
    };
    function pipeOnDrain(src) {
      return function() {
        var state = src._readableState;
        debug("pipeOnDrain", state.awaitDrain);
        if (state.awaitDrain)
          state.awaitDrain--;
        if (state.awaitDrain === 0 && EElistenerCount(src, "data")) {
          state.flowing = true;
          flow(src);
        }
      };
    }
    __name(pipeOnDrain, "pipeOnDrain");
    Readable.prototype.unpipe = function(dest) {
      var state = this._readableState;
      var unpipeInfo = {
        hasUnpiped: false
      };
      if (state.pipesCount === 0)
        return this;
      if (state.pipesCount === 1) {
        if (dest && dest !== state.pipes)
          return this;
        if (!dest)
          dest = state.pipes;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        if (dest)
          dest.emit("unpipe", this, unpipeInfo);
        return this;
      }
      if (!dest) {
        var dests = state.pipes;
        var len = state.pipesCount;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        for (var i = 0; i < len; i++) {
          dests[i].emit("unpipe", this, {
            hasUnpiped: false
          });
        }
        return this;
      }
      var index = indexOf(state.pipes, dest);
      if (index === -1)
        return this;
      state.pipes.splice(index, 1);
      state.pipesCount -= 1;
      if (state.pipesCount === 1)
        state.pipes = state.pipes[0];
      dest.emit("unpipe", this, unpipeInfo);
      return this;
    };
    Readable.prototype.on = function(ev, fn) {
      var res = Stream.prototype.on.call(this, ev, fn);
      if (ev === "data") {
        if (this._readableState.flowing !== false)
          this.resume();
      } else if (ev === "readable") {
        var state = this._readableState;
        if (!state.endEmitted && !state.readableListening) {
          state.readableListening = state.needReadable = true;
          state.emittedReadable = false;
          if (!state.reading) {
            pna.nextTick(nReadingNextTick, this);
          } else if (state.length) {
            emitReadable(this);
          }
        }
      }
      return res;
    };
    Readable.prototype.addListener = Readable.prototype.on;
    function nReadingNextTick(self1) {
      debug("readable nexttick read 0");
      self1.read(0);
    }
    __name(nReadingNextTick, "nReadingNextTick");
    Readable.prototype.resume = function() {
      var state = this._readableState;
      if (!state.flowing) {
        debug("resume");
        state.flowing = true;
        resume(this, state);
      }
      return this;
    };
    function resume(stream, state) {
      if (!state.resumeScheduled) {
        state.resumeScheduled = true;
        pna.nextTick(resume_, stream, state);
      }
    }
    __name(resume, "resume");
    function resume_(stream, state) {
      if (!state.reading) {
        debug("resume read 0");
        stream.read(0);
      }
      state.resumeScheduled = false;
      state.awaitDrain = 0;
      stream.emit("resume");
      flow(stream);
      if (state.flowing && !state.reading)
        stream.read(0);
    }
    __name(resume_, "resume_");
    Readable.prototype.pause = function() {
      debug("call pause flowing=%j", this._readableState.flowing);
      if (false !== this._readableState.flowing) {
        debug("pause");
        this._readableState.flowing = false;
        this.emit("pause");
      }
      return this;
    };
    function flow(stream) {
      var state = stream._readableState;
      debug("flow", state.flowing);
      while (state.flowing && stream.read() !== null) {
      }
    }
    __name(flow, "flow");
    Readable.prototype.wrap = function(stream) {
      var _this = this;
      var state = this._readableState;
      var paused = false;
      stream.on("end", function() {
        debug("wrapped end");
        if (state.decoder && !state.ended) {
          var chunk = state.decoder.end();
          if (chunk && chunk.length)
            _this.push(chunk);
        }
        _this.push(null);
      });
      stream.on("data", function(chunk) {
        debug("wrapped data");
        if (state.decoder)
          chunk = state.decoder.write(chunk);
        if (state.objectMode && (chunk === null || chunk === void 0))
          return;
        else if (!state.objectMode && (!chunk || !chunk.length))
          return;
        var ret = _this.push(chunk);
        if (!ret) {
          paused = true;
          stream.pause();
        }
      });
      for (var i in stream) {
        if (this[i] === void 0 && typeof stream[i] === "function") {
          this[i] = /* @__PURE__ */ function(method) {
            return function() {
              return stream[method].apply(stream, arguments);
            };
          }(i);
        }
      }
      for (var n = 0; n < kProxyEvents.length; n++) {
        stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
      }
      this._read = function(n2) {
        debug("wrapped _read", n2);
        if (paused) {
          paused = false;
          stream.resume();
        }
      };
      return this;
    };
    Object.defineProperty(Readable.prototype, "readableHighWaterMark", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function() {
        return this._readableState.highWaterMark;
      }
    });
    Readable._fromList = fromList;
    function fromList(n, state) {
      if (state.length === 0)
        return null;
      var ret;
      if (state.objectMode)
        ret = state.buffer.shift();
      else if (!n || n >= state.length) {
        if (state.decoder)
          ret = state.buffer.join("");
        else if (state.buffer.length === 1)
          ret = state.buffer.head.data;
        else
          ret = state.buffer.concat(state.length);
        state.buffer.clear();
      } else {
        ret = fromListPartial(n, state.buffer, state.decoder);
      }
      return ret;
    }
    __name(fromList, "fromList");
    function fromListPartial(n, list, hasStrings) {
      var ret;
      if (n < list.head.data.length) {
        ret = list.head.data.slice(0, n);
        list.head.data = list.head.data.slice(n);
      } else if (n === list.head.data.length) {
        ret = list.shift();
      } else {
        ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
      }
      return ret;
    }
    __name(fromListPartial, "fromListPartial");
    function copyFromBufferString(n, list) {
      var p = list.head;
      var c = 1;
      var ret = p.data;
      n -= ret.length;
      while (p = p.next) {
        var str = p.data;
        var nb = n > str.length ? str.length : n;
        if (nb === str.length)
          ret += str;
        else
          ret += str.slice(0, n);
        n -= nb;
        if (n === 0) {
          if (nb === str.length) {
            ++c;
            if (p.next)
              list.head = p.next;
            else
              list.head = list.tail = null;
          } else {
            list.head = p;
            p.data = str.slice(nb);
          }
          break;
        }
        ++c;
      }
      list.length -= c;
      return ret;
    }
    __name(copyFromBufferString, "copyFromBufferString");
    function copyFromBuffer(n, list) {
      var ret = Buffer2.allocUnsafe(n);
      var p = list.head;
      var c = 1;
      p.data.copy(ret);
      n -= p.data.length;
      while (p = p.next) {
        var buf = p.data;
        var nb = n > buf.length ? buf.length : n;
        buf.copy(ret, ret.length - n, 0, nb);
        n -= nb;
        if (n === 0) {
          if (nb === buf.length) {
            ++c;
            if (p.next)
              list.head = p.next;
            else
              list.head = list.tail = null;
          } else {
            list.head = p;
            p.data = buf.slice(nb);
          }
          break;
        }
        ++c;
      }
      list.length -= c;
      return ret;
    }
    __name(copyFromBuffer, "copyFromBuffer");
    function endReadable(stream) {
      var state = stream._readableState;
      if (state.length > 0)
        throw new Error('"endReadable()" called on non-empty stream');
      if (!state.endEmitted) {
        state.ended = true;
        pna.nextTick(endReadableNT, state, stream);
      }
    }
    __name(endReadable, "endReadable");
    function endReadableNT(state, stream) {
      if (!state.endEmitted && state.length === 0) {
        state.endEmitted = true;
        stream.readable = false;
        stream.emit("end");
      }
    }
    __name(endReadableNT, "endReadableNT");
    function indexOf(xs, x) {
      for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x)
          return i;
      }
      return -1;
    }
    __name(indexOf, "indexOf");
  }
});

// node_modules/readable-stream/lib/_stream_transform.js
var require_stream_transform = __commonJS({
  "node_modules/readable-stream/lib/_stream_transform.js"(exports, module2) {
    "use strict";
    module2.exports = Transform;
    var Duplex = require_stream_duplex();
    var util = Object.create(require_util());
    util.inherits = require_inherits();
    util.inherits(Transform, Duplex);
    function afterTransform(er, data) {
      var ts = this._transformState;
      ts.transforming = false;
      var cb = ts.writecb;
      if (!cb) {
        return this.emit("error", new Error("write callback called multiple times"));
      }
      ts.writechunk = null;
      ts.writecb = null;
      if (data != null)
        this.push(data);
      cb(er);
      var rs = this._readableState;
      rs.reading = false;
      if (rs.needReadable || rs.length < rs.highWaterMark) {
        this._read(rs.highWaterMark);
      }
    }
    __name(afterTransform, "afterTransform");
    function Transform(options) {
      if (!(this instanceof Transform))
        return new Transform(options);
      Duplex.call(this, options);
      this._transformState = {
        afterTransform: afterTransform.bind(this),
        needTransform: false,
        transforming: false,
        writecb: null,
        writechunk: null,
        writeencoding: null
      };
      this._readableState.needReadable = true;
      this._readableState.sync = false;
      if (options) {
        if (typeof options.transform === "function")
          this._transform = options.transform;
        if (typeof options.flush === "function")
          this._flush = options.flush;
      }
      this.on("prefinish", prefinish);
    }
    __name(Transform, "Transform");
    function prefinish() {
      var _this = this;
      if (typeof this._flush === "function") {
        this._flush(function(er, data) {
          done(_this, er, data);
        });
      } else {
        done(this, null, null);
      }
    }
    __name(prefinish, "prefinish");
    Transform.prototype.push = function(chunk, encoding) {
      this._transformState.needTransform = false;
      return Duplex.prototype.push.call(this, chunk, encoding);
    };
    Transform.prototype._transform = function(chunk, encoding, cb) {
      throw new Error("_transform() is not implemented");
    };
    Transform.prototype._write = function(chunk, encoding, cb) {
      var ts = this._transformState;
      ts.writecb = cb;
      ts.writechunk = chunk;
      ts.writeencoding = encoding;
      if (!ts.transforming) {
        var rs = this._readableState;
        if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark)
          this._read(rs.highWaterMark);
      }
    };
    Transform.prototype._read = function(n) {
      var ts = this._transformState;
      if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
        ts.transforming = true;
        this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
      } else {
        ts.needTransform = true;
      }
    };
    Transform.prototype._destroy = function(err, cb) {
      var _this2 = this;
      Duplex.prototype._destroy.call(this, err, function(err2) {
        cb(err2);
        _this2.emit("close");
      });
    };
    function done(stream, er, data) {
      if (er)
        return stream.emit("error", er);
      if (data != null)
        stream.push(data);
      if (stream._writableState.length)
        throw new Error("Calling transform done when ws.length != 0");
      if (stream._transformState.transforming)
        throw new Error("Calling transform done when still transforming");
      return stream.push(null);
    }
    __name(done, "done");
  }
});

// node_modules/readable-stream/lib/_stream_passthrough.js
var require_stream_passthrough = __commonJS({
  "node_modules/readable-stream/lib/_stream_passthrough.js"(exports, module2) {
    "use strict";
    module2.exports = PassThrough;
    var Transform = require_stream_transform();
    var util = Object.create(require_util());
    util.inherits = require_inherits();
    util.inherits(PassThrough, Transform);
    function PassThrough(options) {
      if (!(this instanceof PassThrough))
        return new PassThrough(options);
      Transform.call(this, options);
    }
    __name(PassThrough, "PassThrough");
    PassThrough.prototype._transform = function(chunk, encoding, cb) {
      cb(null, chunk);
    };
  }
});

// node_modules/readable-stream/readable.js
var require_readable = __commonJS({
  "node_modules/readable-stream/readable.js"(exports, module2) {
    "use strict";
    var Stream = require("stream");
    if (process.env.READABLE_STREAM === "disable" && Stream) {
      module2.exports = Stream;
      exports = module2.exports = Stream.Readable;
      exports.Readable = Stream.Readable;
      exports.Writable = Stream.Writable;
      exports.Duplex = Stream.Duplex;
      exports.Transform = Stream.Transform;
      exports.PassThrough = Stream.PassThrough;
      exports.Stream = Stream;
    } else {
      exports = module2.exports = require_stream_readable();
      exports.Stream = Stream || exports;
      exports.Readable = exports;
      exports.Writable = require_stream_writable();
      exports.Duplex = require_stream_duplex();
      exports.Transform = require_stream_transform();
      exports.PassThrough = require_stream_passthrough();
    }
  }
});

// node_modules/from2/index.js
var require_from2 = __commonJS({
  "node_modules/from2/index.js"(exports, module2) {
    "use strict";
    var Readable = require_readable().Readable;
    var inherits = require_inherits();
    module2.exports = from2;
    from2.ctor = ctor;
    from2.obj = obj;
    var Proto = ctor();
    function toFunction(list) {
      list = list.slice();
      return function(_, cb) {
        var err = null;
        var item = list.length ? list.shift() : null;
        if (item instanceof Error) {
          err = item;
          item = null;
        }
        cb(err, item);
      };
    }
    __name(toFunction, "toFunction");
    function from2(opts, read) {
      if (typeof opts !== "object" || Array.isArray(opts)) {
        read = opts;
        opts = {};
      }
      var rs = new Proto(opts);
      rs._from = Array.isArray(read) ? toFunction(read) : read || noop;
      return rs;
    }
    __name(from2, "from2");
    function ctor(opts, read) {
      if (typeof opts === "function") {
        read = opts;
        opts = {};
      }
      opts = defaults(opts);
      inherits(Class, Readable);
      function Class(override) {
        if (!(this instanceof Class))
          return new Class(override);
        this._reading = false;
        this._callback = check;
        this.destroyed = false;
        Readable.call(this, override || opts);
        var self2 = this;
        var hwm = this._readableState.highWaterMark;
        function check(err, data) {
          if (self2.destroyed)
            return;
          if (err)
            return self2.destroy(err);
          if (data === null)
            return self2.push(null);
          self2._reading = false;
          if (self2.push(data))
            self2._read(hwm);
        }
        __name(check, "check");
      }
      __name(Class, "Class");
      Class.prototype._from = read || noop;
      Class.prototype._read = function(size) {
        if (this._reading || this.destroyed)
          return;
        this._reading = true;
        this._from(size, this._callback);
      };
      Class.prototype.destroy = function(err) {
        if (this.destroyed)
          return;
        this.destroyed = true;
        var self2 = this;
        process.nextTick(function() {
          if (err)
            self2.emit("error", err);
          self2.emit("close");
        });
      };
      return Class;
    }
    __name(ctor, "ctor");
    function obj(opts, read) {
      if (typeof opts === "function" || Array.isArray(opts)) {
        read = opts;
        opts = {};
      }
      opts = defaults(opts);
      opts.objectMode = true;
      opts.highWaterMark = 16;
      return from2(opts, read);
    }
    __name(obj, "obj");
    function noop() {
    }
    __name(noop, "noop");
    function defaults(opts) {
      opts = opts || {};
      return opts;
    }
    __name(defaults, "defaults");
  }
});

// node_modules/p-is-promise/index.js
var require_p_is_promise = __commonJS({
  "node_modules/p-is-promise/index.js"(exports, module2) {
    "use strict";
    var isObject = /* @__PURE__ */ __name((value) => value !== null && (typeof value === "object" || typeof value === "function"), "isObject");
    module2.exports = (value) => value instanceof Promise || isObject(value) && typeof value.then === "function" && typeof value.catch === "function";
  }
});

// node_modules/into-stream/index.js
var require_into_stream = __commonJS({
  "node_modules/into-stream/index.js"(exports, module2) {
    "use strict";
    var from = require_from2();
    var pIsPromise = require_p_is_promise();
    var intoStream = /* @__PURE__ */ __name((input) => {
      if (Array.isArray(input)) {
        input = input.slice();
      }
      let promise;
      let iterator;
      let asyncIterator;
      prepare(input);
      function prepare(value) {
        input = value;
        if (input instanceof ArrayBuffer || ArrayBuffer.isView(input) && !Buffer.isBuffer(input)) {
          input = Buffer.from(input);
        }
        promise = pIsPromise(input) ? input : null;
        const shouldIterate = !promise && input[Symbol.iterator] && typeof input !== "string" && !Buffer.isBuffer(input);
        iterator = shouldIterate ? input[Symbol.iterator]() : null;
        const shouldAsyncIterate = !promise && input[Symbol.asyncIterator];
        asyncIterator = shouldAsyncIterate ? input[Symbol.asyncIterator]() : null;
      }
      __name(prepare, "prepare");
      return from(/* @__PURE__ */ __name(function reader(size, callback) {
        if (promise) {
          (() => __async(this, null, function* () {
            try {
              yield prepare(yield promise);
              reader.call(this, size, callback);
            } catch (error) {
              callback(error);
            }
          }))();
          return;
        }
        if (iterator) {
          const object = iterator.next();
          setImmediate(callback, null, object.done ? null : object.value);
          return;
        }
        if (asyncIterator) {
          (() => __async(this, null, function* () {
            try {
              const object = yield asyncIterator.next();
              setImmediate(callback, null, object.done ? null : object.value);
            } catch (error) {
              setImmediate(callback, error);
            }
          }))();
          return;
        }
        if (input.length === 0) {
          setImmediate(callback, null, null);
          return;
        }
        const chunk = input.slice(0, size);
        input = input.slice(size);
        setImmediate(callback, null, chunk);
      }, "reader"));
    }, "intoStream");
    module2.exports = intoStream;
    module2.exports.object = (input) => {
      if (Array.isArray(input)) {
        input = input.slice();
      }
      let promise;
      let iterator;
      let asyncIterator;
      prepare(input);
      function prepare(value) {
        input = value;
        promise = pIsPromise(input) ? input : null;
        iterator = !promise && input[Symbol.iterator] ? input[Symbol.iterator]() : null;
        asyncIterator = !promise && input[Symbol.asyncIterator] ? input[Symbol.asyncIterator]() : null;
      }
      __name(prepare, "prepare");
      return from.obj(/* @__PURE__ */ __name(function reader(size, callback) {
        if (promise) {
          (() => __async(this, null, function* () {
            try {
              yield prepare(yield promise);
              reader.call(this, size, callback);
            } catch (error) {
              callback(error);
            }
          }))();
          return;
        }
        if (iterator) {
          const object = iterator.next();
          setImmediate(callback, null, object.done ? null : object.value);
          return;
        }
        if (asyncIterator) {
          (() => __async(this, null, function* () {
            try {
              const object = yield asyncIterator.next();
              setImmediate(callback, null, object.done ? null : object.value);
            } catch (error) {
              setImmediate(callback, error);
            }
          }))();
          return;
        }
        this.push(input);
        setImmediate(callback, null, null);
      }, "reader"));
    };
  }
});

// node_modules/is-stream/index.js
var require_is_stream = __commonJS({
  "node_modules/is-stream/index.js"(exports, module2) {
    "use strict";
    var isStream = /* @__PURE__ */ __name((stream) => stream !== null && typeof stream === "object" && typeof stream.pipe === "function", "isStream");
    isStream.writable = (stream) => isStream(stream) && stream.writable !== false && typeof stream._write === "function" && typeof stream._writableState === "object";
    isStream.readable = (stream) => isStream(stream) && stream.readable !== false && typeof stream._read === "function" && typeof stream._readableState === "object";
    isStream.duplex = (stream) => isStream.writable(stream) && isStream.readable(stream);
    isStream.transform = (stream) => isStream.duplex(stream) && typeof stream._transform === "function";
    module2.exports = isStream;
  }
});

// node_modules/xtend/immutable.js
var require_immutable = __commonJS({
  "node_modules/xtend/immutable.js"(exports, module2) {
    "use strict";
    module2.exports = extend;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    function extend() {
      var target = {};
      for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    }
    __name(extend, "extend");
  }
});

// node_modules/through2/through2.js
var require_through2 = __commonJS({
  "node_modules/through2/through2.js"(exports, module2) {
    "use strict";
    var Transform = require_readable().Transform;
    var inherits = require("util").inherits;
    var xtend = require_immutable();
    function DestroyableTransform(opts) {
      Transform.call(this, opts);
      this._destroyed = false;
    }
    __name(DestroyableTransform, "DestroyableTransform");
    inherits(DestroyableTransform, Transform);
    DestroyableTransform.prototype.destroy = function(err) {
      if (this._destroyed)
        return;
      this._destroyed = true;
      var self2 = this;
      process.nextTick(function() {
        if (err)
          self2.emit("error", err);
        self2.emit("close");
      });
    };
    function noop(chunk, enc, callback) {
      callback(null, chunk);
    }
    __name(noop, "noop");
    function through2(construct) {
      return function(options, transform, flush) {
        if (typeof options == "function") {
          flush = transform;
          transform = options;
          options = {};
        }
        if (typeof transform != "function")
          transform = noop;
        if (typeof flush != "function")
          flush = null;
        return construct(options, transform, flush);
      };
    }
    __name(through2, "through2");
    module2.exports = through2(function(options, transform, flush) {
      var t2 = new DestroyableTransform(options);
      t2._transform = transform;
      if (flush)
        t2._flush = flush;
      return t2;
    });
    module2.exports.ctor = through2(function(options, transform, flush) {
      function Through2(override) {
        if (!(this instanceof Through2))
          return new Through2(override);
        this.options = xtend(options, override);
        DestroyableTransform.call(this, this.options);
      }
      __name(Through2, "Through2");
      inherits(Through2, DestroyableTransform);
      Through2.prototype._transform = transform;
      if (flush)
        Through2.prototype._flush = flush;
      return Through2;
    });
    module2.exports.obj = through2(function(options, transform, flush) {
      var t2 = new DestroyableTransform(xtend({
        objectMode: true,
        highWaterMark: 16
      }, options));
      t2._transform = transform;
      if (flush)
        t2._flush = flush;
      return t2;
    });
  }
});

// node_modules/speedometer/index.js
var require_speedometer = __commonJS({
  "node_modules/speedometer/index.js"(exports, module2) {
    "use strict";
    var tick = 1;
    var maxTick = 65535;
    var resolution = 4;
    var inc = /* @__PURE__ */ __name(function() {
      tick = tick + 1 & maxTick;
    }, "inc");
    var timer = setInterval(inc, 1e3 / resolution | 0);
    if (timer.unref)
      timer.unref();
    module2.exports = function(seconds) {
      var size = resolution * (seconds || 5);
      var buffer = [
        0
      ];
      var pointer = 1;
      var last = tick - 1 & maxTick;
      return function(delta) {
        var dist = tick - last & maxTick;
        if (dist > size)
          dist = size;
        last = tick;
        while (dist--) {
          if (pointer === size)
            pointer = 0;
          buffer[pointer] = buffer[pointer === 0 ? size - 1 : pointer - 1];
          pointer++;
        }
        if (delta)
          buffer[pointer - 1] += delta;
        var top = buffer[pointer - 1];
        var btm = buffer.length < size ? 0 : buffer[pointer === size ? 0 : pointer];
        return buffer.length < resolution ? top : (top - btm) * resolution / buffer.length;
      };
    };
  }
});

// node_modules/progress-stream/index.js
var require_progress_stream = __commonJS({
  "node_modules/progress-stream/index.js"(exports, module2) {
    "use strict";
    var through = require_through2();
    var speedometer = require_speedometer();
    module2.exports = function(options, onprogress) {
      if (typeof options === "function")
        return module2.exports(null, options);
      options = options || {};
      var length = options.length || 0;
      var time = options.time || 0;
      var drain = options.drain || false;
      var transferred = options.transferred || 0;
      var nextUpdate = Date.now() + time;
      var delta = 0;
      var speed = speedometer(options.speed || 5e3);
      var startTime = Date.now();
      var update = {
        percentage: 0,
        transferred,
        length,
        remaining: length,
        eta: 0,
        runtime: 0
      };
      var emit = /* @__PURE__ */ __name(function(ended) {
        update.delta = delta;
        update.percentage = ended ? 100 : length ? transferred / length * 100 : 0;
        update.speed = speed(delta);
        update.eta = Math.round(update.remaining / update.speed);
        update.runtime = parseInt((Date.now() - startTime) / 1e3);
        nextUpdate = Date.now() + time;
        delta = 0;
        tr.emit("progress", update);
      }, "emit");
      var write = /* @__PURE__ */ __name(function(chunk, enc, callback) {
        var len = options.objectMode ? 1 : chunk.length;
        transferred += len;
        delta += len;
        update.transferred = transferred;
        update.remaining = length >= transferred ? length - transferred : 0;
        if (Date.now() >= nextUpdate)
          emit(false);
        callback(null, chunk);
      }, "write");
      var end = /* @__PURE__ */ __name(function(callback) {
        emit(true);
        callback();
      }, "end");
      var tr = through(options.objectMode ? {
        objectMode: true,
        highWaterMark: 16
      } : {}, write, end);
      var onlength = /* @__PURE__ */ __name(function(newLength) {
        length = newLength;
        update.length = length;
        update.remaining = length - update.transferred;
        tr.emit("length", length);
      }, "onlength");
      tr.setLength = onlength;
      tr.on("pipe", function(stream) {
        if (typeof length === "number")
          return;
        if (stream.readable && !stream.writable && stream.headers) {
          return onlength(parseInt(stream.headers["content-length"] || 0));
        }
        if (typeof stream.length === "number") {
          return onlength(stream.length);
        }
        stream.on("response", function(res) {
          if (!res || !res.headers)
            return;
          if (res.headers["content-encoding"] === "gzip")
            return;
          if (res.headers["content-length"]) {
            return onlength(parseInt(res.headers["content-length"]));
          }
        });
      });
      if (drain)
        tr.resume();
      if (onprogress)
        tr.on("progress", onprogress);
      tr.progress = function() {
        update.speed = speed(0);
        update.eta = Math.round(update.remaining / update.speed);
        return update;
      };
      return tr;
    };
  }
});

// node_modules/safe-buffer/index.js
var require_safe_buffer3 = __commonJS({
  "node_modules/safe-buffer/index.js"(exports, module2) {
    "use strict";
    var buffer = require("buffer");
    var Buffer2 = buffer.Buffer;
    function copyProps(src, dst) {
      for (var key in src) {
        dst[key] = src[key];
      }
    }
    __name(copyProps, "copyProps");
    if (Buffer2.from && Buffer2.alloc && Buffer2.allocUnsafe && Buffer2.allocUnsafeSlow) {
      module2.exports = buffer;
    } else {
      copyProps(buffer, exports);
      exports.Buffer = SafeBuffer;
    }
    function SafeBuffer(arg, encodingOrOffset, length) {
      return Buffer2(arg, encodingOrOffset, length);
    }
    __name(SafeBuffer, "SafeBuffer");
    SafeBuffer.prototype = Object.create(Buffer2.prototype);
    copyProps(Buffer2, SafeBuffer);
    SafeBuffer.from = function(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        throw new TypeError("Argument must not be a number");
      }
      return Buffer2(arg, encodingOrOffset, length);
    };
    SafeBuffer.alloc = function(size, fill, encoding) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      var buf = Buffer2(size);
      if (fill !== void 0) {
        if (typeof encoding === "string") {
          buf.fill(fill, encoding);
        } else {
          buf.fill(fill);
        }
      } else {
        buf.fill(0);
      }
      return buf;
    };
    SafeBuffer.allocUnsafe = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return Buffer2(size);
    };
    SafeBuffer.allocUnsafeSlow = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return buffer.SlowBuffer(size);
    };
  }
});

// node_modules/tunnel-agent/index.js
var require_tunnel_agent = __commonJS({
  "node_modules/tunnel-agent/index.js"(exports) {
    "use strict";
    var net = require("net");
    var tls = require("tls");
    var http = require("http");
    var https = require("https");
    var events = require("events");
    var assert = require("assert");
    var util = require("util");
    var Buffer2 = require_safe_buffer3().Buffer;
    exports.httpOverHttp = httpOverHttp;
    exports.httpsOverHttp = httpsOverHttp;
    exports.httpOverHttps = httpOverHttps;
    exports.httpsOverHttps = httpsOverHttps;
    function httpOverHttp(options) {
      var agent = new TunnelingAgent(options);
      agent.request = http.request;
      return agent;
    }
    __name(httpOverHttp, "httpOverHttp");
    function httpsOverHttp(options) {
      var agent = new TunnelingAgent(options);
      agent.request = http.request;
      agent.createSocket = createSecureSocket;
      agent.defaultPort = 443;
      return agent;
    }
    __name(httpsOverHttp, "httpsOverHttp");
    function httpOverHttps(options) {
      var agent = new TunnelingAgent(options);
      agent.request = https.request;
      return agent;
    }
    __name(httpOverHttps, "httpOverHttps");
    function httpsOverHttps(options) {
      var agent = new TunnelingAgent(options);
      agent.request = https.request;
      agent.createSocket = createSecureSocket;
      agent.defaultPort = 443;
      return agent;
    }
    __name(httpsOverHttps, "httpsOverHttps");
    function TunnelingAgent(options) {
      var self2 = this;
      self2.options = options || {};
      self2.proxyOptions = self2.options.proxy || {};
      self2.maxSockets = self2.options.maxSockets || http.Agent.defaultMaxSockets;
      self2.requests = [];
      self2.sockets = [];
      self2.on("free", /* @__PURE__ */ __name(function onFree(socket, host, port) {
        for (var i = 0, len = self2.requests.length; i < len; ++i) {
          var pending = self2.requests[i];
          if (pending.host === host && pending.port === port) {
            self2.requests.splice(i, 1);
            pending.request.onSocket(socket);
            return;
          }
        }
        socket.destroy();
        self2.removeSocket(socket);
      }, "onFree"));
    }
    __name(TunnelingAgent, "TunnelingAgent");
    util.inherits(TunnelingAgent, events.EventEmitter);
    TunnelingAgent.prototype.addRequest = /* @__PURE__ */ __name(function addRequest(req, options) {
      var self2 = this;
      if (typeof options === "string") {
        options = {
          host: options,
          port: arguments[2],
          path: arguments[3]
        };
      }
      if (self2.sockets.length >= this.maxSockets) {
        self2.requests.push({
          host: options.host,
          port: options.port,
          request: req
        });
        return;
      }
      self2.createConnection({
        host: options.host,
        port: options.port,
        request: req
      });
    }, "addRequest");
    TunnelingAgent.prototype.createConnection = /* @__PURE__ */ __name(function createConnection(pending) {
      var self2 = this;
      self2.createSocket(pending, function(socket) {
        socket.on("free", onFree);
        socket.on("close", onCloseOrRemove);
        socket.on("agentRemove", onCloseOrRemove);
        pending.request.onSocket(socket);
        function onFree() {
          self2.emit("free", socket, pending.host, pending.port);
        }
        __name(onFree, "onFree");
        function onCloseOrRemove(err) {
          self2.removeSocket(socket);
          socket.removeListener("free", onFree);
          socket.removeListener("close", onCloseOrRemove);
          socket.removeListener("agentRemove", onCloseOrRemove);
        }
        __name(onCloseOrRemove, "onCloseOrRemove");
      });
    }, "createConnection");
    TunnelingAgent.prototype.createSocket = /* @__PURE__ */ __name(function createSocket(options, cb) {
      var self2 = this;
      var placeholder = {};
      self2.sockets.push(placeholder);
      var connectOptions = mergeOptions({}, self2.proxyOptions, {
        method: "CONNECT",
        path: options.host + ":" + options.port,
        agent: false
      });
      if (connectOptions.proxyAuth) {
        connectOptions.headers = connectOptions.headers || {};
        connectOptions.headers["Proxy-Authorization"] = "Basic " + Buffer2.from(connectOptions.proxyAuth).toString("base64");
      }
      debug("making CONNECT request");
      var connectReq = self2.request(connectOptions);
      connectReq.useChunkedEncodingByDefault = false;
      connectReq.once("response", onResponse);
      connectReq.once("upgrade", onUpgrade);
      connectReq.once("connect", onConnect);
      connectReq.once("error", onError);
      connectReq.end();
      function onResponse(res) {
        res.upgrade = true;
      }
      __name(onResponse, "onResponse");
      function onUpgrade(res, socket, head) {
        process.nextTick(function() {
          onConnect(res, socket, head);
        });
      }
      __name(onUpgrade, "onUpgrade");
      function onConnect(res, socket, head) {
        connectReq.removeAllListeners();
        socket.removeAllListeners();
        if (res.statusCode === 200) {
          assert.equal(head.length, 0);
          debug("tunneling connection has established");
          self2.sockets[self2.sockets.indexOf(placeholder)] = socket;
          cb(socket);
        } else {
          debug("tunneling socket could not be established, statusCode=%d", res.statusCode);
          var error = new Error("tunneling socket could not be established, statusCode=" + res.statusCode);
          error.code = "ECONNRESET";
          options.request.emit("error", error);
          self2.removeSocket(placeholder);
        }
      }
      __name(onConnect, "onConnect");
      function onError(cause) {
        connectReq.removeAllListeners();
        debug("tunneling socket could not be established, cause=%s\n", cause.message, cause.stack);
        var error = new Error("tunneling socket could not be established, cause=" + cause.message);
        error.code = "ECONNRESET";
        options.request.emit("error", error);
        self2.removeSocket(placeholder);
      }
      __name(onError, "onError");
    }, "createSocket");
    TunnelingAgent.prototype.removeSocket = /* @__PURE__ */ __name(function removeSocket(socket) {
      var pos = this.sockets.indexOf(socket);
      if (pos === -1)
        return;
      this.sockets.splice(pos, 1);
      var pending = this.requests.shift();
      if (pending) {
        this.createConnection(pending);
      }
    }, "removeSocket");
    function createSecureSocket(options, cb) {
      var self2 = this;
      TunnelingAgent.prototype.createSocket.call(self2, options, function(socket) {
        var secureSocket = tls.connect(0, mergeOptions({}, self2.options, {
          servername: options.host,
          socket
        }));
        self2.sockets[self2.sockets.indexOf(socket)] = secureSocket;
        cb(secureSocket);
      });
    }
    __name(createSecureSocket, "createSecureSocket");
    function mergeOptions(target) {
      for (var i = 1, len = arguments.length; i < len; ++i) {
        var overrides = arguments[i];
        if (typeof overrides === "object") {
          var keys = Object.keys(overrides);
          for (var j = 0, keyLen = keys.length; j < keyLen; ++j) {
            var k = keys[j];
            if (overrides[k] !== void 0) {
              target[k] = overrides[k];
            }
          }
        }
      }
      return target;
    }
    __name(mergeOptions, "mergeOptions");
    var debug;
    if (process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG)) {
      debug = /* @__PURE__ */ __name(function() {
        var args = Array.prototype.slice.call(arguments);
        if (typeof args[0] === "string") {
          args[0] = "TUNNEL: " + args[0];
        } else {
          args.unshift("TUNNEL:");
        }
        console.error.apply(console, args);
      }, "debug");
    } else {
      debug = /* @__PURE__ */ __name(function() {
      }, "debug");
    }
    exports.debug = debug;
  }
});

// node_modules/get-it/dist/index.cjs
var require_dist = __commonJS({
  "node_modules/get-it/dist/index.cjs"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var defaultOptionsValidator = require_defaultOptionsValidator_2bJolbLg();
    var decompressResponse = require_decompress_response();
    var follow = require_follow_redirects();
    var http = require("http");
    var https = require("https");
    var toStream = require_into_stream();
    var isStream = require_is_stream();
    var progressStream = require_progress_stream();
    var qs = require("querystring");
    var url = require("url");
    var tunnel = require_tunnel_agent();
    function _interopDefaultCompat(e) {
      return e && typeof e === "object" && "default" in e ? e : {
        default: e
      };
    }
    __name(_interopDefaultCompat, "_interopDefaultCompat");
    function _interopNamespaceCompat(e) {
      if (e && typeof e === "object" && "default" in e)
        return e;
      var n = /* @__PURE__ */ Object.create(null);
      if (e) {
        Object.keys(e).forEach(function(k) {
          if (k !== "default") {
            var d = Object.getOwnPropertyDescriptor(e, k);
            Object.defineProperty(n, k, d.get ? d : {
              enumerable: true,
              get: function() {
                return e[k];
              }
            });
          }
        });
      }
      n.default = e;
      return Object.freeze(n);
    }
    __name(_interopNamespaceCompat, "_interopNamespaceCompat");
    var decompressResponse__default = /* @__PURE__ */ _interopDefaultCompat(decompressResponse);
    var follow__default = /* @__PURE__ */ _interopDefaultCompat(follow);
    var http__default = /* @__PURE__ */ _interopDefaultCompat(http);
    var https__default = /* @__PURE__ */ _interopDefaultCompat(https);
    var toStream__default = /* @__PURE__ */ _interopDefaultCompat(toStream);
    var isStream__default = /* @__PURE__ */ _interopDefaultCompat(isStream);
    var progressStream__default = /* @__PURE__ */ _interopDefaultCompat(progressStream);
    var qs__default = /* @__PURE__ */ _interopDefaultCompat(qs);
    var url__default = /* @__PURE__ */ _interopDefaultCompat(url);
    var tunnel__namespace = /* @__PURE__ */ _interopNamespaceCompat(tunnel);
    var middlewareReducer = /* @__PURE__ */ __name((middleware) => /* @__PURE__ */ __name(function applyMiddleware(hook, defaultValue) {
      const bailEarly = hook === "onError";
      let value = defaultValue;
      for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }
      for (let i = 0; i < middleware[hook].length; i++) {
        const handler = middleware[hook][i];
        value = handler(value, ...args);
        if (bailEarly && !value) {
          break;
        }
      }
      return value;
    }, "applyMiddleware"), "middlewareReducer");
    function createPubSub() {
      const subscribers = /* @__PURE__ */ Object.create(null);
      let nextId = 0;
      function subscribe(subscriber) {
        const id = nextId++;
        subscribers[id] = subscriber;
        return /* @__PURE__ */ __name(function unsubscribe() {
          delete subscribers[id];
        }, "unsubscribe");
      }
      __name(subscribe, "subscribe");
      function publish(event) {
        for (const id in subscribers) {
          subscribers[id](event);
        }
      }
      __name(publish, "publish");
      return {
        publish,
        subscribe
      };
    }
    __name(createPubSub, "createPubSub");
    var channelNames = ["request", "response", "progress", "error", "abort"];
    var middlehooks = ["processOptions", "validateOptions", "interceptRequest", "finalizeOptions", "onRequest", "onResponse", "onError", "onReturn", "onHeaders"];
    function createRequester(initMiddleware, httpRequest) {
      const loadedMiddleware = [];
      const middleware = middlehooks.reduce((ware, name) => {
        ware[name] = ware[name] || [];
        return ware;
      }, {
        processOptions: [defaultOptionsValidator.processOptions],
        validateOptions: [defaultOptionsValidator.validateOptions]
      });
      function request(opts) {
        const onResponse = /* @__PURE__ */ __name((reqErr, res, ctx) => {
          let error = reqErr;
          let response = res;
          if (!error) {
            try {
              response = applyMiddleware("onResponse", res, ctx);
            } catch (err) {
              response = null;
              error = err;
            }
          }
          error = error && applyMiddleware("onError", error, ctx);
          if (error) {
            channels.error.publish(error);
          } else if (response) {
            channels.response.publish(response);
          }
        }, "onResponse");
        const channels = channelNames.reduce((target, name) => {
          target[name] = createPubSub();
          return target;
        }, {});
        const applyMiddleware = middlewareReducer(middleware);
        const options = applyMiddleware("processOptions", opts);
        applyMiddleware("validateOptions", options);
        const context = {
          options,
          channels,
          applyMiddleware
        };
        let ongoingRequest;
        const unsubscribe = channels.request.subscribe((ctx) => {
          ongoingRequest = httpRequest(ctx, (err, res) => onResponse(err, res, ctx));
        });
        channels.abort.subscribe(() => {
          unsubscribe();
          if (ongoingRequest) {
            ongoingRequest.abort();
          }
        });
        const returnValue = applyMiddleware("onReturn", channels, context);
        if (returnValue === channels) {
          channels.request.publish(context);
        }
        return returnValue;
      }
      __name(request, "request");
      request.use = /* @__PURE__ */ __name(function use(newMiddleware) {
        if (!newMiddleware) {
          throw new Error("Tried to add middleware that resolved to falsey value");
        }
        if (typeof newMiddleware === "function") {
          throw new Error("Tried to add middleware that was a function. It probably expects you to pass options to it.");
        }
        if (newMiddleware.onReturn && middleware.onReturn.length > 0) {
          throw new Error("Tried to add new middleware with `onReturn` handler, but another handler has already been registered for this event");
        }
        middlehooks.forEach((key) => {
          if (newMiddleware[key]) {
            middleware[key].push(newMiddleware[key]);
          }
        });
        loadedMiddleware.push(newMiddleware);
        return request;
      }, "use");
      request.clone = () => createRequester(loadedMiddleware, httpRequest);
      initMiddleware.forEach(request.use);
      return request;
    }
    __name(createRequester, "createRequester");
    function lowerCaseHeaders(headers) {
      return Object.keys(headers || {}).reduce((acc, header) => {
        acc[header.toLowerCase()] = headers[header];
        return acc;
      }, {});
    }
    __name(lowerCaseHeaders, "lowerCaseHeaders");
    function formatHostname(hostname) {
      return hostname.replace(/^\.*/, ".").toLowerCase();
    }
    __name(formatHostname, "formatHostname");
    function parseNoProxyZone(zoneStr) {
      const zone = zoneStr.trim().toLowerCase();
      const zoneParts = zone.split(":", 2);
      const zoneHost = formatHostname(zoneParts[0]);
      const zonePort = zoneParts[1];
      const hasPort = zone.indexOf(":") > -1;
      return {
        hostname: zoneHost,
        port: zonePort,
        hasPort
      };
    }
    __name(parseNoProxyZone, "parseNoProxyZone");
    function uriInNoProxy(uri, noProxy) {
      const port = uri.port || (uri.protocol === "https:" ? "443" : "80");
      const hostname = formatHostname(uri.hostname);
      const noProxyList = noProxy.split(",");
      return noProxyList.map(parseNoProxyZone).some((noProxyZone) => {
        const isMatchedAt = hostname.indexOf(noProxyZone.hostname);
        const hostnameMatched = isMatchedAt > -1 && isMatchedAt === hostname.length - noProxyZone.hostname.length;
        if (noProxyZone.hasPort) {
          return port === noProxyZone.port && hostnameMatched;
        }
        return hostnameMatched;
      });
    }
    __name(uriInNoProxy, "uriInNoProxy");
    function getProxyFromUri(uri) {
      const noProxy = process.env.NO_PROXY || process.env.no_proxy || "";
      if (noProxy === "*") {
        return null;
      }
      if (noProxy !== "" && uriInNoProxy(uri, noProxy)) {
        return null;
      }
      if (uri.protocol === "http:") {
        return process.env.HTTP_PROXY || process.env.http_proxy || null;
      }
      if (uri.protocol === "https:") {
        return process.env.HTTPS_PROXY || process.env.https_proxy || process.env.HTTP_PROXY || process.env.http_proxy || null;
      }
      return null;
    }
    __name(getProxyFromUri, "getProxyFromUri");
    function getHostFromUri(uri) {
      let host = uri.host;
      if (uri.port) {
        if (uri.port === "80" && uri.protocol === "http:" || uri.port === "443" && uri.protocol === "https:") {
          host = uri.hostname;
        }
      }
      return host;
    }
    __name(getHostFromUri, "getHostFromUri");
    function getHostHeaderWithPort(uri) {
      const port = uri.port || (uri.protocol === "https:" ? "443" : "80");
      return "".concat(uri.hostname, ":").concat(port);
    }
    __name(getHostHeaderWithPort, "getHostHeaderWithPort");
    function rewriteUriForProxy(reqOpts, uri, proxy) {
      const headers = reqOpts.headers || {};
      const options = Object.assign({}, reqOpts, {
        headers
      });
      headers.host = headers.host || getHostHeaderWithPort(uri);
      options.protocol = proxy.protocol || options.protocol;
      options.hostname = proxy.host.replace(/:\d+/, "");
      options.port = proxy.port;
      options.host = getHostFromUri(Object.assign({}, uri, proxy));
      options.href = "".concat(options.protocol, "//").concat(options.host).concat(options.path);
      options.path = url__default.default.format(uri);
      return options;
    }
    __name(rewriteUriForProxy, "rewriteUriForProxy");
    function getProxyOptions(options) {
      let proxy;
      if (options.hasOwnProperty("proxy")) {
        proxy = options.proxy;
      } else {
        const uri = url__default.default.parse(options.url);
        proxy = getProxyFromUri(uri);
      }
      return typeof proxy === "string" ? url__default.default.parse(proxy) : proxy;
    }
    __name(getProxyOptions, "getProxyOptions");
    function concat(stream, cb) {
      const chunks = [];
      stream.on("data", function(chunk) {
        chunks.push(chunk);
      });
      stream.once("end", function() {
        if (cb)
          cb(null, Buffer.concat(chunks));
        cb = null;
      });
      stream.once("error", function(err) {
        if (cb)
          cb(err);
        cb = null;
      });
    }
    __name(concat, "concat");
    function timedOut(req, time) {
      if (req.timeoutTimer) {
        return req;
      }
      const delays = isNaN(time) ? time : {
        socket: time,
        connect: time
      };
      const hostHeader = req.getHeader("host");
      const host = hostHeader ? " to " + hostHeader : "";
      if (delays.connect !== void 0) {
        req.timeoutTimer = setTimeout(/* @__PURE__ */ __name(function timeoutHandler() {
          req.abort();
          const e = new Error("Connection timed out on request" + host);
          e.code = "ETIMEDOUT";
          req.emit("error", e);
        }, "timeoutHandler"), delays.connect);
      }
      req.on("socket", /* @__PURE__ */ __name(function assign(socket) {
        if (!(socket.connecting || socket._connecting)) {
          connect();
          return;
        }
        socket.once("connect", connect);
      }, "assign"));
      function clear() {
        if (req.timeoutTimer) {
          clearTimeout(req.timeoutTimer);
          req.timeoutTimer = null;
        }
      }
      __name(clear, "clear");
      function connect() {
        clear();
        if (delays.socket !== void 0) {
          req.setTimeout(delays.socket, /* @__PURE__ */ __name(function socketTimeoutHandler() {
            req.abort();
            const e = new Error("Socket timed out on request" + host);
            e.code = "ESOCKETTIMEDOUT";
            req.emit("error", e);
          }, "socketTimeoutHandler"));
        }
      }
      __name(connect, "connect");
      return req.on("error", clear);
    }
    __name(timedOut, "timedOut");
    var uriParts = ["protocol", "slashes", "auth", "host", "port", "hostname", "hash", "search", "query", "pathname", "path", "href"];
    var defaultProxyHeaderWhiteList = ["accept", "accept-charset", "accept-encoding", "accept-language", "accept-ranges", "cache-control", "content-encoding", "content-language", "content-location", "content-md5", "content-range", "content-type", "connection", "date", "expect", "max-forwards", "pragma", "referer", "te", "user-agent", "via"];
    var defaultProxyHeaderExclusiveList = ["proxy-authorization"];
    function shouldEnable(options) {
      if (typeof options.tunnel !== "undefined") {
        return Boolean(options.tunnel);
      }
      const uri = url__default.default.parse(options.url);
      if (uri.protocol === "https:") {
        return true;
      }
      return false;
    }
    __name(shouldEnable, "shouldEnable");
    function applyAgent() {
      let opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      let proxy = arguments.length > 1 ? arguments[1] : void 0;
      const options = Object.assign({}, opts);
      const proxyHeaderWhiteList = defaultProxyHeaderWhiteList.concat(options.proxyHeaderWhiteList || []).map((header) => header.toLowerCase());
      const proxyHeaderExclusiveList = defaultProxyHeaderExclusiveList.concat(options.proxyHeaderExclusiveList || []).map((header) => header.toLowerCase());
      const proxyHeaders = getAllowedProxyHeaders(options.headers, proxyHeaderWhiteList);
      proxyHeaders.host = constructProxyHost(options);
      options.headers = Object.keys(options.headers || {}).reduce((headers, header) => {
        const isAllowed = proxyHeaderExclusiveList.indexOf(header.toLowerCase()) === -1;
        if (isAllowed) {
          headers[header] = options.headers[header];
        }
        return headers;
      }, {});
      const tunnelFn = getTunnelFn(options, proxy);
      const tunnelOptions = constructTunnelOptions(options, proxy, proxyHeaders);
      options.agent = tunnelFn(tunnelOptions);
      return options;
    }
    __name(applyAgent, "applyAgent");
    function getTunnelFn(options, proxy) {
      const uri = getUriParts(options);
      const tunnelFnName = constructTunnelFnName(uri, proxy);
      return tunnel__namespace[tunnelFnName];
    }
    __name(getTunnelFn, "getTunnelFn");
    function getUriParts(options) {
      return uriParts.reduce((uri, part) => {
        uri[part] = options[part];
        return uri;
      }, {});
    }
    __name(getUriParts, "getUriParts");
    function constructTunnelFnName(uri, proxy) {
      const uriProtocol = uri.protocol === "https:" ? "https" : "http";
      const proxyProtocol = proxy.protocol === "https:" ? "Https" : "Http";
      return "".concat(uriProtocol, "Over").concat(proxyProtocol);
    }
    __name(constructTunnelFnName, "constructTunnelFnName");
    function constructProxyHost(uri) {
      const port = uri.port;
      const protocol = uri.protocol;
      let proxyHost = "".concat(uri.hostname, ":");
      if (port) {
        proxyHost += port;
      } else if (protocol === "https:") {
        proxyHost += "443";
      } else {
        proxyHost += "80";
      }
      return proxyHost;
    }
    __name(constructProxyHost, "constructProxyHost");
    function getAllowedProxyHeaders(headers, whiteList) {
      return Object.keys(headers).filter((header) => whiteList.indexOf(header.toLowerCase()) !== -1).reduce((set, header) => {
        set[header] = headers[header];
        return set;
      }, {});
    }
    __name(getAllowedProxyHeaders, "getAllowedProxyHeaders");
    function constructTunnelOptions(options, proxy, proxyHeaders) {
      return {
        proxy: {
          host: proxy.hostname,
          port: +proxy.port,
          proxyAuth: proxy.auth,
          headers: proxyHeaders
        },
        headers: options.headers,
        ca: options.ca,
        cert: options.cert,
        key: options.key,
        passphrase: options.passphrase,
        pfx: options.pfx,
        ciphers: options.ciphers,
        rejectUnauthorized: options.rejectUnauthorized,
        secureOptions: options.secureOptions,
        secureProtocol: options.secureProtocol
      };
    }
    __name(constructTunnelOptions, "constructTunnelOptions");
    var adapter = "node";
    var reduceResponse = /* @__PURE__ */ __name((res, reqUrl, method, body) => ({
      body,
      url: reqUrl,
      method,
      headers: res.headers,
      statusCode: res.statusCode,
      statusMessage: res.statusMessage
    }), "reduceResponse");
    var httpRequester = /* @__PURE__ */ __name((context, cb) => {
      const {
        options
      } = context;
      const uri = Object.assign({}, url__default.default.parse(options.url));
      if (typeof fetch === "function" && options.fetch) {
        const controller = new AbortController();
        const reqOpts2 = context.applyMiddleware("finalizeOptions", __spreadProps(__spreadValues({}, uri), {
          method: options.method,
          headers: __spreadValues(__spreadValues({}, typeof options.fetch === "object" && options.fetch.headers ? lowerCaseHeaders(options.fetch.headers) : {}), lowerCaseHeaders(options.headers)),
          maxRedirects: options.maxRedirects
        }));
        const fetchOpts = __spreadProps(__spreadValues({
          credentials: options.withCredentials ? "include" : "omit"
        }, typeof options.fetch === "object" ? options.fetch : {}), {
          method: reqOpts2.method,
          headers: reqOpts2.headers,
          body: options.body,
          signal: controller.signal
        });
        const injectedResponse2 = context.applyMiddleware("interceptRequest", void 0, {
          adapter,
          context
        });
        if (injectedResponse2) {
          const cbTimer = setTimeout(cb, 0, null, injectedResponse2);
          const cancel = /* @__PURE__ */ __name(() => clearTimeout(cbTimer), "cancel");
          return {
            abort: cancel
          };
        }
        const request2 = fetch(options.url, fetchOpts);
        context.applyMiddleware("onRequest", {
          options,
          adapter,
          request: request2,
          context
        });
        request2.then((res) => __async(exports, null, function* () {
          const body = options.rawBody ? res.body : yield res.text();
          const headers = {};
          res.headers.forEach((value, key) => {
            headers[key] = value;
          });
          cb(null, {
            body,
            url: res.url,
            method: options.method,
            headers,
            statusCode: res.status,
            statusMessage: res.statusText
          });
        })).catch((err) => {
          if (err.name == "AbortError")
            return;
          cb(err);
        });
        return {
          abort: () => controller.abort()
        };
      }
      const bodyType = isStream__default.default(options.body) ? "stream" : typeof options.body;
      if (bodyType !== "undefined" && bodyType !== "stream" && bodyType !== "string" && !Buffer.isBuffer(options.body)) {
        throw new Error("Request body must be a string, buffer or stream, got ".concat(bodyType));
      }
      const lengthHeader = {};
      if (options.bodySize) {
        lengthHeader["content-length"] = options.bodySize;
      } else if (options.body && bodyType !== "stream") {
        lengthHeader["content-length"] = Buffer.byteLength(options.body);
      }
      let aborted = false;
      const callback = /* @__PURE__ */ __name((err, res) => !aborted && cb(err, res), "callback");
      context.channels.abort.subscribe(() => {
        aborted = true;
      });
      let reqOpts = Object.assign({}, uri, {
        method: options.method,
        headers: Object.assign({}, lowerCaseHeaders(options.headers), lengthHeader),
        maxRedirects: options.maxRedirects
      });
      const proxy = getProxyOptions(options);
      const tunnel2 = proxy && shouldEnable(options);
      const injectedResponse = context.applyMiddleware("interceptRequest", void 0, {
        adapter,
        context
      });
      if (injectedResponse) {
        const cbTimer = setImmediate(callback, null, injectedResponse);
        const abort = /* @__PURE__ */ __name(() => clearImmediate(cbTimer), "abort");
        return {
          abort
        };
      }
      if (options.maxRedirects !== 0) {
        reqOpts.maxRedirects = options.maxRedirects || 5;
      }
      if (proxy && tunnel2) {
        reqOpts = applyAgent(reqOpts, proxy);
      } else if (proxy && !tunnel2) {
        reqOpts = rewriteUriForProxy(reqOpts, uri, proxy);
      }
      if (!tunnel2 && proxy && proxy.auth && !reqOpts.headers["proxy-authorization"]) {
        const [username, password] = proxy.auth.username ? [proxy.auth.username, proxy.auth.password] : proxy.auth.split(":").map((item) => qs__default.default.unescape(item));
        const auth = Buffer.from("".concat(username, ":").concat(password), "utf8");
        const authBase64 = auth.toString("base64");
        reqOpts.headers["proxy-authorization"] = "Basic ".concat(authBase64);
      }
      const transport = getRequestTransport(reqOpts, proxy, tunnel2);
      if (typeof options.debug === "function" && proxy) {
        options.debug("Proxying using %s", reqOpts.agent ? "tunnel agent" : "".concat(reqOpts.host, ":").concat(reqOpts.port));
      }
      const tryCompressed = reqOpts.method !== "HEAD";
      if (tryCompressed && !reqOpts.headers["accept-encoding"] && options.compress !== false) {
        reqOpts.headers["accept-encoding"] = "br, gzip, deflate";
      }
      const finalOptions = context.applyMiddleware("finalizeOptions", reqOpts);
      const request = transport.request(finalOptions, (response) => {
        const res = tryCompressed ? decompressResponse__default.default(response) : response;
        const resStream = context.applyMiddleware("onHeaders", res, {
          headers: response.headers,
          adapter,
          context
        });
        const reqUrl = "responseUrl" in response ? response.responseUrl : options.url;
        if (options.stream) {
          callback(null, reduceResponse(res, reqUrl, reqOpts.method, resStream));
          return;
        }
        concat(resStream, (err, data) => {
          if (err) {
            return callback(err);
          }
          const body = options.rawBody ? data : data.toString();
          const reduced = reduceResponse(res, reqUrl, reqOpts.method, body);
          return callback(null, reduced);
        });
      });
      if (options.timeout) {
        timedOut(request, options.timeout);
      }
      request.once("error", callback);
      const {
        bodyStream,
        progress
      } = getProgressStream(options);
      context.applyMiddleware("onRequest", {
        options,
        adapter,
        request,
        context,
        progress
      });
      if (bodyStream) {
        bodyStream.pipe(request);
      } else {
        request.end(options.body);
      }
      return {
        abort: () => request.abort()
      };
    }, "httpRequester");
    function getProgressStream(options) {
      if (!options.body) {
        return {};
      }
      const bodyIsStream = isStream__default.default(options.body);
      const length = options.bodySize || (bodyIsStream ? null : Buffer.byteLength(options.body));
      if (!length) {
        return bodyIsStream ? {
          bodyStream: options.body
        } : {};
      }
      const progress = progressStream__default.default({
        time: 16,
        length
      });
      const bodyStream = bodyIsStream ? options.body : toStream__default.default(options.body);
      return {
        bodyStream: bodyStream.pipe(progress),
        progress
      };
    }
    __name(getProgressStream, "getProgressStream");
    function getRequestTransport(reqOpts, proxy, tunnel2) {
      const isHttpsRequest = reqOpts.protocol === "https:";
      const transports = reqOpts.maxRedirects === 0 ? {
        http: http__default.default,
        https: https__default.default
      } : {
        http: follow__default.default.http,
        https: follow__default.default.https
      };
      if (!proxy || tunnel2) {
        return isHttpsRequest ? transports.https : transports.http;
      }
      let isHttpsProxy = proxy.port === 443;
      if (proxy.protocol) {
        isHttpsProxy = /^https:?/.test(proxy.protocol);
      }
      return isHttpsProxy ? transports.https : transports.http;
    }
    __name(getRequestTransport, "getRequestTransport");
    var getIt = /* @__PURE__ */ __name(function() {
      let initMiddleware = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      let httpRequest = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : httpRequester;
      return createRequester(initMiddleware, httpRequest);
    }, "getIt");
    var environment = "node";
    exports.adapter = adapter;
    exports.environment = environment;
    exports.getIt = getIt;
  }
});

// node_modules/is-plain-object/dist/is-plain-object.js
var require_is_plain_object = __commonJS({
  "node_modules/is-plain-object/dist/is-plain-object.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function isObject(o) {
      return Object.prototype.toString.call(o) === "[object Object]";
    }
    __name(isObject, "isObject");
    function isPlainObject(o) {
      var ctor, prot;
      if (isObject(o) === false)
        return false;
      ctor = o.constructor;
      if (ctor === void 0)
        return true;
      prot = ctor.prototype;
      if (isObject(prot) === false)
        return false;
      if (prot.hasOwnProperty("isPrototypeOf") === false) {
        return false;
      }
      return true;
    }
    __name(isPlainObject, "isPlainObject");
    exports.isPlainObject = isPlainObject;
  }
});

// node_modules/is-retry-allowed/index.js
var require_is_retry_allowed = __commonJS({
  "node_modules/is-retry-allowed/index.js"(exports, module2) {
    "use strict";
    var denyList = /* @__PURE__ */ new Set([
      "ENOTFOUND",
      "ENETUNREACH",
      // SSL errors from https://github.com/nodejs/node/blob/fc8e3e2cdc521978351de257030db0076d79e0ab/src/crypto/crypto_common.cc#L301-L328
      "UNABLE_TO_GET_ISSUER_CERT",
      "UNABLE_TO_GET_CRL",
      "UNABLE_TO_DECRYPT_CERT_SIGNATURE",
      "UNABLE_TO_DECRYPT_CRL_SIGNATURE",
      "UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY",
      "CERT_SIGNATURE_FAILURE",
      "CRL_SIGNATURE_FAILURE",
      "CERT_NOT_YET_VALID",
      "CERT_HAS_EXPIRED",
      "CRL_NOT_YET_VALID",
      "CRL_HAS_EXPIRED",
      "ERROR_IN_CERT_NOT_BEFORE_FIELD",
      "ERROR_IN_CERT_NOT_AFTER_FIELD",
      "ERROR_IN_CRL_LAST_UPDATE_FIELD",
      "ERROR_IN_CRL_NEXT_UPDATE_FIELD",
      "OUT_OF_MEM",
      "DEPTH_ZERO_SELF_SIGNED_CERT",
      "SELF_SIGNED_CERT_IN_CHAIN",
      "UNABLE_TO_GET_ISSUER_CERT_LOCALLY",
      "UNABLE_TO_VERIFY_LEAF_SIGNATURE",
      "CERT_CHAIN_TOO_LONG",
      "CERT_REVOKED",
      "INVALID_CA",
      "PATH_LENGTH_EXCEEDED",
      "INVALID_PURPOSE",
      "CERT_UNTRUSTED",
      "CERT_REJECTED",
      "HOSTNAME_MISMATCH"
    ]);
    module2.exports = (error) => !denyList.has(error && error.code);
  }
});

// node_modules/get-it/dist/middleware.cjs
var require_middleware = __commonJS({
  "node_modules/get-it/dist/middleware.cjs"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var http = require("http");
    var https = require("https");
    var debugIt = require_src();
    var defaultOptionsValidator = require_defaultOptionsValidator_2bJolbLg();
    var isPlainObject = require_is_plain_object();
    var progressStream = require_progress_stream();
    var allowed = require_is_retry_allowed();
    function _interopDefaultCompat(e) {
      return e && typeof e === "object" && "default" in e ? e : {
        default: e
      };
    }
    __name(_interopDefaultCompat, "_interopDefaultCompat");
    var debugIt__default = /* @__PURE__ */ _interopDefaultCompat(debugIt);
    var progressStream__default = /* @__PURE__ */ _interopDefaultCompat(progressStream);
    var allowed__default = /* @__PURE__ */ _interopDefaultCompat(allowed);
    var isHttpsProto = /^https:/i;
    function agent(opts) {
      const httpAgent = new http.Agent(opts);
      const httpsAgent = new https.Agent(opts);
      const agents = {
        http: httpAgent,
        https: httpsAgent
      };
      return {
        finalizeOptions: (options) => {
          if (options.agent) {
            return options;
          }
          if (options.maxRedirects > 0) {
            return __spreadProps(__spreadValues({}, options), {
              agents
            });
          }
          const isHttps = isHttpsProto.test(options.href || options.protocol);
          return __spreadProps(__spreadValues({}, options), {
            agent: isHttps ? httpsAgent : httpAgent
          });
        }
      };
    }
    __name(agent, "agent");
    var leadingSlash = /^\//;
    var trailingSlash = /\/$/;
    function base(baseUrl) {
      const baseUri = baseUrl.replace(trailingSlash, "");
      return {
        processOptions: (options) => {
          if (/^https?:\/\//i.test(options.url)) {
            return options;
          }
          const url = [baseUri, options.url.replace(leadingSlash, "")].join("/");
          return Object.assign({}, options, {
            url
          });
        }
      };
    }
    __name(base, "base");
    var SENSITIVE_HEADERS = ["cookie", "authorization"];
    var hasOwn = Object.prototype.hasOwnProperty;
    var redactKeys = /* @__PURE__ */ __name((source, redacted) => {
      const target = {};
      for (const key in source) {
        if (hasOwn.call(source, key)) {
          target[key] = redacted.indexOf(key.toLowerCase()) > -1 ? "<redacted>" : source[key];
        }
      }
      return target;
    }, "redactKeys");
    function debug() {
      let opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      const verbose = opts.verbose;
      const namespace = opts.namespace || "get-it";
      const defaultLogger = debugIt__default.default(namespace);
      const log = opts.log || defaultLogger;
      const shortCircuit = log === defaultLogger && !debugIt__default.default.enabled(namespace);
      let requestId = 0;
      return {
        processOptions: (options) => {
          options.debug = log;
          options.requestId = options.requestId || ++requestId;
          return options;
        },
        onRequest: (event) => {
          if (shortCircuit || !event) {
            return event;
          }
          const options = event.options;
          log("[%s] HTTP %s %s", options.requestId, options.method, options.url);
          if (verbose && options.body && typeof options.body === "string") {
            log("[%s] Request body: %s", options.requestId, options.body);
          }
          if (verbose && options.headers) {
            const headers2 = opts.redactSensitiveHeaders === false ? options.headers : redactKeys(options.headers, SENSITIVE_HEADERS);
            log("[%s] Request headers: %s", options.requestId, JSON.stringify(headers2, null, 2));
          }
          return event;
        },
        onResponse: (res, context) => {
          if (shortCircuit || !res) {
            return res;
          }
          const reqId = context.options.requestId;
          log("[%s] Response code: %s %s", reqId, res.statusCode, res.statusMessage);
          if (verbose && res.body) {
            log("[%s] Response body: %s", reqId, stringifyBody(res));
          }
          return res;
        },
        onError: (err, context) => {
          const reqId = context.options.requestId;
          if (!err) {
            log("[%s] Error encountered, but handled by an earlier middleware", reqId);
            return err;
          }
          log("[%s] ERROR: %s", reqId, err.message);
          return err;
        }
      };
    }
    __name(debug, "debug");
    function stringifyBody(res) {
      const contentType = (res.headers["content-type"] || "").toLowerCase();
      const isJson = contentType.indexOf("application/json") !== -1;
      return isJson ? tryFormat(res.body) : res.body;
    }
    __name(stringifyBody, "stringifyBody");
    function tryFormat(body) {
      try {
        const parsed = typeof body === "string" ? JSON.parse(body) : body;
        return JSON.stringify(parsed, null, 2);
      } catch (err) {
        return body;
      }
    }
    __name(tryFormat, "tryFormat");
    function headers(_headers) {
      let opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return {
        processOptions: (options) => {
          const existing = options.headers || {};
          options.headers = opts.override ? Object.assign({}, existing, _headers) : Object.assign({}, _headers, existing);
          return options;
        }
      };
    }
    __name(headers, "headers");
    var _HttpError = class _HttpError extends Error {
      constructor(res, ctx) {
        super();
        const truncatedUrl = res.url.length > 400 ? "".concat(res.url.slice(0, 399), "\u2026") : res.url;
        let msg = "".concat(res.method, "-request to ").concat(truncatedUrl, " resulted in ");
        msg += "HTTP ".concat(res.statusCode, " ").concat(res.statusMessage);
        this.message = msg.trim();
        this.response = res;
        this.request = ctx.options;
      }
    };
    __name(_HttpError, "HttpError");
    var HttpError = _HttpError;
    function httpErrors() {
      return {
        onResponse: (res, ctx) => {
          const isHttpError = res.statusCode >= 400;
          if (!isHttpError) {
            return res;
          }
          throw new HttpError(res, ctx);
        }
      };
    }
    __name(httpErrors, "httpErrors");
    function injectResponse() {
      let opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      if (typeof opts.inject !== "function") {
        throw new Error("`injectResponse` middleware requires a `inject` function");
      }
      const inject = /* @__PURE__ */ __name(function inject2(prevValue, event) {
        const response = opts.inject(event, prevValue);
        if (!response) {
          return prevValue;
        }
        const options = event.context.options;
        return __spreadValues({
          body: "",
          url: options.url,
          method: options.method,
          headers: {},
          statusCode: 200,
          statusMessage: "OK"
        }, response);
      }, "inject2");
      return {
        interceptRequest: inject
      };
    }
    __name(injectResponse, "injectResponse");
    var isBuffer = typeof Buffer === "undefined" ? () => false : (obj) => Buffer.isBuffer(obj);
    var serializeTypes = ["boolean", "string", "number"];
    function jsonRequest() {
      return {
        processOptions: (options) => {
          const body = options.body;
          if (!body) {
            return options;
          }
          const isStream2 = typeof body.pipe === "function";
          const shouldSerialize = !isStream2 && !isBuffer(body) && (serializeTypes.indexOf(typeof body) !== -1 || Array.isArray(body) || isPlainObject.isPlainObject(body));
          if (!shouldSerialize) {
            return options;
          }
          return Object.assign({}, options, {
            body: JSON.stringify(options.body),
            headers: Object.assign({}, options.headers, {
              "Content-Type": "application/json"
            })
          });
        }
      };
    }
    __name(jsonRequest, "jsonRequest");
    function jsonResponse(opts) {
      return {
        onResponse: (response) => {
          const contentType = response.headers["content-type"] || "";
          const shouldDecode = opts && opts.force || contentType.indexOf("application/json") !== -1;
          if (!response.body || !contentType || !shouldDecode) {
            return response;
          }
          return Object.assign({}, response, {
            body: tryParse(response.body)
          });
        },
        processOptions: (options) => Object.assign({}, options, {
          headers: Object.assign({
            Accept: "application/json"
          }, options.headers)
        })
      };
      function tryParse(body) {
        try {
          return JSON.parse(body);
        } catch (err) {
          err.message = "Failed to parsed response body as JSON: ".concat(err.message);
          throw err;
        }
      }
      __name(tryParse, "tryParse");
    }
    __name(jsonResponse, "jsonResponse");
    function isBrowserOptions(options) {
      return typeof options === "object" && options !== null && !("protocol" in options);
    }
    __name(isBrowserOptions, "isBrowserOptions");
    function mtls() {
      let config2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      if (!config2.ca) {
        throw new Error('Required mtls option "ca" is missing');
      }
      if (!config2.cert) {
        throw new Error('Required mtls option "cert" is missing');
      }
      if (!config2.key) {
        throw new Error('Required mtls option "key" is missing');
      }
      return {
        finalizeOptions: (options) => {
          if (isBrowserOptions(options)) {
            return options;
          }
          const mtlsOpts = {
            cert: config2.cert,
            key: config2.key,
            ca: config2.ca
          };
          return Object.assign({}, options, mtlsOpts);
        }
      };
    }
    __name(mtls, "mtls");
    var actualGlobal = {};
    if (typeof globalThis !== "undefined") {
      actualGlobal = globalThis;
    } else if (typeof window !== "undefined") {
      actualGlobal = window;
    } else if (typeof global !== "undefined") {
      actualGlobal = global;
    } else if (typeof self !== "undefined") {
      actualGlobal = self;
    }
    var global$1 = actualGlobal;
    function observable() {
      let opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      const Observable = (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any -- @TODO consider dropping checking for a global Observable since it's not on a standards track
        opts.implementation || global$1.Observable
      );
      if (!Observable) {
        throw new Error("`Observable` is not available in global scope, and no implementation was passed");
      }
      return {
        onReturn: (channels, context) => new Observable((observer) => {
          channels.error.subscribe((err) => observer.error(err));
          channels.progress.subscribe((event) => observer.next(Object.assign({
            type: "progress"
          }, event)));
          channels.response.subscribe((response) => {
            observer.next(Object.assign({
              type: "response"
            }, response));
            observer.complete();
          });
          channels.request.publish(context);
          return () => channels.abort.publish();
        })
      };
    }
    __name(observable, "observable");
    function normalizer(stage) {
      return (prog) => ({
        stage,
        percent: prog.percentage,
        total: prog.length,
        loaded: prog.transferred,
        lengthComputable: !(prog.length === 0 && prog.percentage === 0)
      });
    }
    __name(normalizer, "normalizer");
    function progress() {
      return {
        onHeaders: (response, evt) => {
          const _progress = progressStream__default.default({
            time: 16
          });
          const normalize = normalizer("download");
          const contentLength = response.headers["content-length"];
          const length = contentLength ? Number(contentLength) : 0;
          if (!isNaN(length) && length > 0) {
            _progress.setLength(length);
          }
          _progress.on("progress", (prog) => evt.context.channels.progress.publish(normalize(prog)));
          return response.pipe(_progress);
        },
        onRequest: (evt) => {
          if (!evt.progress) {
            return;
          }
          const normalize = normalizer("upload");
          evt.progress.on("progress", (prog) => evt.context.channels.progress.publish(normalize(prog)));
        }
      };
    }
    __name(progress, "progress");
    var promise = /* @__PURE__ */ __name(function() {
      let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      const PromiseImplementation = options.implementation || Promise;
      if (!PromiseImplementation) {
        throw new Error("`Promise` is not available in global scope, and no implementation was passed");
      }
      return {
        onReturn: (channels, context) => new PromiseImplementation((resolve, reject) => {
          const cancel = context.options.cancelToken;
          if (cancel) {
            cancel.promise.then((reason) => {
              channels.abort.publish(reason);
              reject(reason);
            });
          }
          channels.error.subscribe(reject);
          channels.response.subscribe((response) => {
            resolve(options.onlyBody ? response.body : response);
          });
          setTimeout(() => {
            try {
              channels.request.publish(context);
            } catch (err) {
              reject(err);
            }
          }, 0);
        })
      };
    }, "promise");
    var _Cancel = class _Cancel {
      constructor(message) {
        this.__CANCEL__ = true;
        this.message = message;
      }
      toString() {
        return "Cancel".concat(this.message ? ": ".concat(this.message) : "");
      }
    };
    __name(_Cancel, "Cancel");
    var Cancel = _Cancel;
    var _a;
    var _CancelToken = (_a = class {
      constructor(executor) {
        if (typeof executor !== "function") {
          throw new TypeError("executor must be a function.");
        }
        let resolvePromise = null;
        this.promise = new Promise((resolve) => {
          resolvePromise = resolve;
        });
        executor((message) => {
          if (this.reason) {
            return;
          }
          this.reason = new Cancel(message);
          resolvePromise(this.reason);
        });
      }
    }, __name(_a, "_CancelToken"), _a);
    _CancelToken.source = () => {
      let cancel;
      const token = new _CancelToken((can) => {
        cancel = can;
      });
      return {
        token,
        cancel
      };
    };
    var CancelToken = _CancelToken;
    var isCancel = /* @__PURE__ */ __name((value) => !!(value && (value == null ? void 0 : value.__CANCEL__)), "isCancel");
    promise.Cancel = Cancel;
    promise.CancelToken = CancelToken;
    promise.isCancel = isCancel;
    function proxy(_proxy) {
      if (_proxy !== false && (!_proxy || !_proxy.host)) {
        throw new Error("Proxy middleware takes an object of host, port and auth properties");
      }
      return {
        processOptions: (options) => Object.assign({
          proxy: _proxy
        }, options)
      };
    }
    __name(proxy, "proxy");
    var defaultShouldRetry = /* @__PURE__ */ __name((err, num, options) => {
      if (options.method !== "GET" && options.method !== "HEAD") {
        return false;
      }
      if (err.response && err.response.statusCode) {
        return false;
      }
      return allowed__default.default(err);
    }, "defaultShouldRetry");
    var isStream = /* @__PURE__ */ __name((stream) => stream !== null && typeof stream === "object" && typeof stream.pipe === "function", "isStream");
    var sharedRetry = /* @__PURE__ */ __name((opts) => {
      const maxRetries = opts.maxRetries || 5;
      const retryDelay = opts.retryDelay || getRetryDelay;
      const allowRetry = opts.shouldRetry;
      return {
        onError: (err, context) => {
          const options = context.options;
          const max = options.maxRetries || maxRetries;
          const shouldRetry = options.shouldRetry || allowRetry;
          const attemptNumber = options.attemptNumber || 0;
          if (isStream(options.body)) {
            return err;
          }
          if (!shouldRetry(err, attemptNumber, options) || attemptNumber >= max) {
            return err;
          }
          const newContext = Object.assign({}, context, {
            options: Object.assign({}, options, {
              attemptNumber: attemptNumber + 1
            })
          });
          setTimeout(() => context.channels.request.publish(newContext), retryDelay(attemptNumber));
          return null;
        }
      };
    }, "sharedRetry");
    function getRetryDelay(attemptNum) {
      return 100 * Math.pow(2, attemptNum) + Math.random() * 100;
    }
    __name(getRetryDelay, "getRetryDelay");
    var retry = /* @__PURE__ */ __name(function() {
      let opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return sharedRetry(__spreadValues({
        shouldRetry: defaultShouldRetry
      }, opts));
    }, "retry");
    retry.shouldRetry = defaultShouldRetry;
    function encode(data) {
      const query = new URLSearchParams();
      const nest = /* @__PURE__ */ __name((name, _value) => {
        const value = _value instanceof Set ? Array.from(_value) : _value;
        if (Array.isArray(value)) {
          if (value.length) {
            for (const index in value) {
              nest("".concat(name, "[").concat(index, "]"), value[index]);
            }
          } else {
            query.append("".concat(name, "[]"), "");
          }
        } else if (typeof value === "object" && value !== null) {
          for (const [key, obj] of Object.entries(value)) {
            nest("".concat(name, "[").concat(key, "]"), obj);
          }
        } else {
          query.append(name, value);
        }
      }, "nest");
      for (const [key, value] of Object.entries(data)) {
        nest(key, value);
      }
      return query.toString();
    }
    __name(encode, "encode");
    function urlEncoded() {
      return {
        processOptions: (options) => {
          const body = options.body;
          if (!body) {
            return options;
          }
          const isStream2 = typeof body.pipe === "function";
          const shouldSerialize = !isStream2 && !isBuffer(body) && isPlainObject.isPlainObject(body);
          if (!shouldSerialize) {
            return options;
          }
          return __spreadProps(__spreadValues({}, options), {
            body: encode(options.body),
            headers: __spreadProps(__spreadValues({}, options.headers), {
              "Content-Type": "application/x-www-form-urlencoded"
            })
          });
        }
      };
    }
    __name(urlEncoded, "urlEncoded");
    function buildKeepAlive(agent2) {
      return /* @__PURE__ */ __name(function keepAlive2() {
        let config2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        const ms = config2.ms || 1e3;
        const maxFree = config2.maxFree || 256;
        const agentOptions = {
          keepAlive: true,
          keepAliveMsecs: ms,
          maxFreeSockets: maxFree
        };
        return agent2(agentOptions);
      }, "keepAlive");
    }
    __name(buildKeepAlive, "buildKeepAlive");
    var keepAlive = buildKeepAlive(agent);
    exports.processOptions = defaultOptionsValidator.processOptions;
    exports.validateOptions = defaultOptionsValidator.validateOptions;
    exports.Cancel = Cancel;
    exports.CancelToken = CancelToken;
    exports.agent = agent;
    exports.base = base;
    exports.debug = debug;
    exports.headers = headers;
    exports.httpErrors = httpErrors;
    exports.injectResponse = injectResponse;
    exports.jsonRequest = jsonRequest;
    exports.jsonResponse = jsonResponse;
    exports.keepAlive = keepAlive;
    exports.mtls = mtls;
    exports.observable = observable;
    exports.progress = progress;
    exports.promise = promise;
    exports.proxy = proxy;
    exports.retry = retry;
    exports.urlEncoded = urlEncoded;
  }
});

// node_modules/rxjs/dist/cjs/internal/util/isFunction.js
var require_isFunction = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/util/isFunction.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isFunction = void 0;
    function isFunction(value) {
      return typeof value === "function";
    }
    __name(isFunction, "isFunction");
    exports.isFunction = isFunction;
  }
});

// node_modules/rxjs/dist/cjs/internal/util/createErrorClass.js
var require_createErrorClass = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/util/createErrorClass.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.createErrorClass = void 0;
    function createErrorClass(createImpl) {
      var _super = /* @__PURE__ */ __name(function(instance) {
        Error.call(instance);
        instance.stack = new Error().stack;
      }, "_super");
      var ctorFunc = createImpl(_super);
      ctorFunc.prototype = Object.create(Error.prototype);
      ctorFunc.prototype.constructor = ctorFunc;
      return ctorFunc;
    }
    __name(createErrorClass, "createErrorClass");
    exports.createErrorClass = createErrorClass;
  }
});

// node_modules/rxjs/dist/cjs/internal/util/UnsubscriptionError.js
var require_UnsubscriptionError = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/util/UnsubscriptionError.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.UnsubscriptionError = void 0;
    var createErrorClass_1 = require_createErrorClass();
    exports.UnsubscriptionError = createErrorClass_1.createErrorClass(function(_super) {
      return /* @__PURE__ */ __name(function UnsubscriptionErrorImpl(errors) {
        _super(this);
        this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function(err, i) {
          return i + 1 + ") " + err.toString();
        }).join("\n  ") : "";
        this.name = "UnsubscriptionError";
        this.errors = errors;
      }, "UnsubscriptionErrorImpl");
    });
  }
});

// node_modules/rxjs/dist/cjs/internal/util/arrRemove.js
var require_arrRemove = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/util/arrRemove.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.arrRemove = void 0;
    function arrRemove(arr, item) {
      if (arr) {
        var index = arr.indexOf(item);
        0 <= index && arr.splice(index, 1);
      }
    }
    __name(arrRemove, "arrRemove");
    exports.arrRemove = arrRemove;
  }
});

// node_modules/rxjs/dist/cjs/internal/Subscription.js
var require_Subscription = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/Subscription.js"(exports) {
    "use strict";
    var __values = exports && exports.__values || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
        return m.call(o);
      if (o && typeof o.length === "number")
        return {
          next: function() {
            if (o && i >= o.length)
              o = void 0;
            return {
              value: o && o[i++],
              done: !o
            };
          }
        };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = {
          error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isSubscription = exports.EMPTY_SUBSCRIPTION = exports.Subscription = void 0;
    var isFunction_1 = require_isFunction();
    var UnsubscriptionError_1 = require_UnsubscriptionError();
    var arrRemove_1 = require_arrRemove();
    var Subscription = function() {
      function Subscription2(initialTeardown) {
        this.initialTeardown = initialTeardown;
        this.closed = false;
        this._parentage = null;
        this._finalizers = null;
      }
      __name(Subscription2, "Subscription");
      Subscription2.prototype.unsubscribe = function() {
        var e_1, _a, e_2, _b;
        var errors;
        if (!this.closed) {
          this.closed = true;
          var _parentage = this._parentage;
          if (_parentage) {
            this._parentage = null;
            if (Array.isArray(_parentage)) {
              try {
                for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
                  var parent_1 = _parentage_1_1.value;
                  parent_1.remove(this);
                }
              } catch (e_1_1) {
                e_1 = {
                  error: e_1_1
                };
              } finally {
                try {
                  if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return))
                    _a.call(_parentage_1);
                } finally {
                  if (e_1)
                    throw e_1.error;
                }
              }
            } else {
              _parentage.remove(this);
            }
          }
          var initialFinalizer = this.initialTeardown;
          if (isFunction_1.isFunction(initialFinalizer)) {
            try {
              initialFinalizer();
            } catch (e) {
              errors = e instanceof UnsubscriptionError_1.UnsubscriptionError ? e.errors : [
                e
              ];
            }
          }
          var _finalizers = this._finalizers;
          if (_finalizers) {
            this._finalizers = null;
            try {
              for (var _finalizers_1 = __values(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
                var finalizer = _finalizers_1_1.value;
                try {
                  execFinalizer(finalizer);
                } catch (err) {
                  errors = errors !== null && errors !== void 0 ? errors : [];
                  if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
                    errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
                  } else {
                    errors.push(err);
                  }
                }
              }
            } catch (e_2_1) {
              e_2 = {
                error: e_2_1
              };
            } finally {
              try {
                if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return))
                  _b.call(_finalizers_1);
              } finally {
                if (e_2)
                  throw e_2.error;
              }
            }
          }
          if (errors) {
            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
          }
        }
      };
      Subscription2.prototype.add = function(teardown) {
        var _a;
        if (teardown && teardown !== this) {
          if (this.closed) {
            execFinalizer(teardown);
          } else {
            if (teardown instanceof Subscription2) {
              if (teardown.closed || teardown._hasParent(this)) {
                return;
              }
              teardown._addParent(this);
            }
            (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
          }
        }
      };
      Subscription2.prototype._hasParent = function(parent) {
        var _parentage = this._parentage;
        return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
      };
      Subscription2.prototype._addParent = function(parent) {
        var _parentage = this._parentage;
        this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [
          _parentage,
          parent
        ] : parent;
      };
      Subscription2.prototype._removeParent = function(parent) {
        var _parentage = this._parentage;
        if (_parentage === parent) {
          this._parentage = null;
        } else if (Array.isArray(_parentage)) {
          arrRemove_1.arrRemove(_parentage, parent);
        }
      };
      Subscription2.prototype.remove = function(teardown) {
        var _finalizers = this._finalizers;
        _finalizers && arrRemove_1.arrRemove(_finalizers, teardown);
        if (teardown instanceof Subscription2) {
          teardown._removeParent(this);
        }
      };
      Subscription2.EMPTY = function() {
        var empty = new Subscription2();
        empty.closed = true;
        return empty;
      }();
      return Subscription2;
    }();
    exports.Subscription = Subscription;
    exports.EMPTY_SUBSCRIPTION = Subscription.EMPTY;
    function isSubscription(value) {
      return value instanceof Subscription || value && "closed" in value && isFunction_1.isFunction(value.remove) && isFunction_1.isFunction(value.add) && isFunction_1.isFunction(value.unsubscribe);
    }
    __name(isSubscription, "isSubscription");
    exports.isSubscription = isSubscription;
    function execFinalizer(finalizer) {
      if (isFunction_1.isFunction(finalizer)) {
        finalizer();
      } else {
        finalizer.unsubscribe();
      }
    }
    __name(execFinalizer, "execFinalizer");
  }
});

// node_modules/rxjs/dist/cjs/internal/config.js
var require_config = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/config.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.config = void 0;
    exports.config = {
      onUnhandledError: null,
      onStoppedNotification: null,
      Promise: void 0,
      useDeprecatedSynchronousErrorHandling: false,
      useDeprecatedNextContext: false
    };
  }
});

// node_modules/rxjs/dist/cjs/internal/scheduler/timeoutProvider.js
var require_timeoutProvider = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/scheduler/timeoutProvider.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = {
          error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.timeoutProvider = void 0;
    exports.timeoutProvider = {
      setTimeout: function(handler, timeout) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
          args[_i - 2] = arguments[_i];
        }
        var delegate = exports.timeoutProvider.delegate;
        if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) {
          return delegate.setTimeout.apply(delegate, __spreadArray([
            handler,
            timeout
          ], __read(args)));
        }
        return setTimeout.apply(void 0, __spreadArray([
          handler,
          timeout
        ], __read(args)));
      },
      clearTimeout: function(handle) {
        var delegate = exports.timeoutProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
      },
      delegate: void 0
    };
  }
});

// node_modules/rxjs/dist/cjs/internal/util/reportUnhandledError.js
var require_reportUnhandledError = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/util/reportUnhandledError.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.reportUnhandledError = void 0;
    var config_1 = require_config();
    var timeoutProvider_1 = require_timeoutProvider();
    function reportUnhandledError(err) {
      timeoutProvider_1.timeoutProvider.setTimeout(function() {
        var onUnhandledError = config_1.config.onUnhandledError;
        if (onUnhandledError) {
          onUnhandledError(err);
        } else {
          throw err;
        }
      });
    }
    __name(reportUnhandledError, "reportUnhandledError");
    exports.reportUnhandledError = reportUnhandledError;
  }
});

// node_modules/rxjs/dist/cjs/internal/util/noop.js
var require_noop = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/util/noop.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.noop = void 0;
    function noop() {
    }
    __name(noop, "noop");
    exports.noop = noop;
  }
});

// node_modules/rxjs/dist/cjs/internal/NotificationFactories.js
var require_NotificationFactories = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/NotificationFactories.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.createNotification = exports.nextNotification = exports.errorNotification = exports.COMPLETE_NOTIFICATION = void 0;
    exports.COMPLETE_NOTIFICATION = function() {
      return createNotification("C", void 0, void 0);
    }();
    function errorNotification(error) {
      return createNotification("E", void 0, error);
    }
    __name(errorNotification, "errorNotification");
    exports.errorNotification = errorNotification;
    function nextNotification(value) {
      return createNotification("N", value, void 0);
    }
    __name(nextNotification, "nextNotification");
    exports.nextNotification = nextNotification;
    function createNotification(kind, value, error) {
      return {
        kind,
        value,
        error
      };
    }
    __name(createNotification, "createNotification");
    exports.createNotification = createNotification;
  }
});

// node_modules/rxjs/dist/cjs/internal/util/errorContext.js
var require_errorContext = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/util/errorContext.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.captureError = exports.errorContext = void 0;
    var config_1 = require_config();
    var context = null;
    function errorContext(cb) {
      if (config_1.config.useDeprecatedSynchronousErrorHandling) {
        var isRoot = !context;
        if (isRoot) {
          context = {
            errorThrown: false,
            error: null
          };
        }
        cb();
        if (isRoot) {
          var _a = context, errorThrown = _a.errorThrown, error = _a.error;
          context = null;
          if (errorThrown) {
            throw error;
          }
        }
      } else {
        cb();
      }
    }
    __name(errorContext, "errorContext");
    exports.errorContext = errorContext;
    function captureError(err) {
      if (config_1.config.useDeprecatedSynchronousErrorHandling && context) {
        context.errorThrown = true;
        context.error = err;
      }
    }
    __name(captureError, "captureError");
    exports.captureError = captureError;
  }
});

// node_modules/rxjs/dist/cjs/internal/Subscriber.js
var require_Subscriber = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/Subscriber.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || /* @__PURE__ */ function() {
      var extendStatics = /* @__PURE__ */ __name(function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      }, "extendStatics");
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        __name(__, "__");
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.EMPTY_OBSERVER = exports.SafeSubscriber = exports.Subscriber = void 0;
    var isFunction_1 = require_isFunction();
    var Subscription_1 = require_Subscription();
    var config_1 = require_config();
    var reportUnhandledError_1 = require_reportUnhandledError();
    var noop_1 = require_noop();
    var NotificationFactories_1 = require_NotificationFactories();
    var timeoutProvider_1 = require_timeoutProvider();
    var errorContext_1 = require_errorContext();
    var Subscriber = function(_super) {
      __extends(Subscriber2, _super);
      function Subscriber2(destination) {
        var _this = _super.call(this) || this;
        _this.isStopped = false;
        if (destination) {
          _this.destination = destination;
          if (Subscription_1.isSubscription(destination)) {
            destination.add(_this);
          }
        } else {
          _this.destination = exports.EMPTY_OBSERVER;
        }
        return _this;
      }
      __name(Subscriber2, "Subscriber");
      Subscriber2.create = function(next, error, complete) {
        return new SafeSubscriber(next, error, complete);
      };
      Subscriber2.prototype.next = function(value) {
        if (this.isStopped) {
          handleStoppedNotification(NotificationFactories_1.nextNotification(value), this);
        } else {
          this._next(value);
        }
      };
      Subscriber2.prototype.error = function(err) {
        if (this.isStopped) {
          handleStoppedNotification(NotificationFactories_1.errorNotification(err), this);
        } else {
          this.isStopped = true;
          this._error(err);
        }
      };
      Subscriber2.prototype.complete = function() {
        if (this.isStopped) {
          handleStoppedNotification(NotificationFactories_1.COMPLETE_NOTIFICATION, this);
        } else {
          this.isStopped = true;
          this._complete();
        }
      };
      Subscriber2.prototype.unsubscribe = function() {
        if (!this.closed) {
          this.isStopped = true;
          _super.prototype.unsubscribe.call(this);
          this.destination = null;
        }
      };
      Subscriber2.prototype._next = function(value) {
        this.destination.next(value);
      };
      Subscriber2.prototype._error = function(err) {
        try {
          this.destination.error(err);
        } finally {
          this.unsubscribe();
        }
      };
      Subscriber2.prototype._complete = function() {
        try {
          this.destination.complete();
        } finally {
          this.unsubscribe();
        }
      };
      return Subscriber2;
    }(Subscription_1.Subscription);
    exports.Subscriber = Subscriber;
    var _bind = Function.prototype.bind;
    function bind(fn, thisArg) {
      return _bind.call(fn, thisArg);
    }
    __name(bind, "bind");
    var ConsumerObserver = function() {
      function ConsumerObserver2(partialObserver) {
        this.partialObserver = partialObserver;
      }
      __name(ConsumerObserver2, "ConsumerObserver");
      ConsumerObserver2.prototype.next = function(value) {
        var partialObserver = this.partialObserver;
        if (partialObserver.next) {
          try {
            partialObserver.next(value);
          } catch (error) {
            handleUnhandledError(error);
          }
        }
      };
      ConsumerObserver2.prototype.error = function(err) {
        var partialObserver = this.partialObserver;
        if (partialObserver.error) {
          try {
            partialObserver.error(err);
          } catch (error) {
            handleUnhandledError(error);
          }
        } else {
          handleUnhandledError(err);
        }
      };
      ConsumerObserver2.prototype.complete = function() {
        var partialObserver = this.partialObserver;
        if (partialObserver.complete) {
          try {
            partialObserver.complete();
          } catch (error) {
            handleUnhandledError(error);
          }
        }
      };
      return ConsumerObserver2;
    }();
    var SafeSubscriber = function(_super) {
      __extends(SafeSubscriber2, _super);
      function SafeSubscriber2(observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        var partialObserver;
        if (isFunction_1.isFunction(observerOrNext) || !observerOrNext) {
          partialObserver = {
            next: observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : void 0,
            error: error !== null && error !== void 0 ? error : void 0,
            complete: complete !== null && complete !== void 0 ? complete : void 0
          };
        } else {
          var context_1;
          if (_this && config_1.config.useDeprecatedNextContext) {
            context_1 = Object.create(observerOrNext);
            context_1.unsubscribe = function() {
              return _this.unsubscribe();
            };
            partialObserver = {
              next: observerOrNext.next && bind(observerOrNext.next, context_1),
              error: observerOrNext.error && bind(observerOrNext.error, context_1),
              complete: observerOrNext.complete && bind(observerOrNext.complete, context_1)
            };
          } else {
            partialObserver = observerOrNext;
          }
        }
        _this.destination = new ConsumerObserver(partialObserver);
        return _this;
      }
      __name(SafeSubscriber2, "SafeSubscriber");
      return SafeSubscriber2;
    }(Subscriber);
    exports.SafeSubscriber = SafeSubscriber;
    function handleUnhandledError(error) {
      if (config_1.config.useDeprecatedSynchronousErrorHandling) {
        errorContext_1.captureError(error);
      } else {
        reportUnhandledError_1.reportUnhandledError(error);
      }
    }
    __name(handleUnhandledError, "handleUnhandledError");
    function defaultErrorHandler(err) {
      throw err;
    }
    __name(defaultErrorHandler, "defaultErrorHandler");
    function handleStoppedNotification(notification, subscriber) {
      var onStoppedNotification = config_1.config.onStoppedNotification;
      onStoppedNotification && timeoutProvider_1.timeoutProvider.setTimeout(function() {
        return onStoppedNotification(notification, subscriber);
      });
    }
    __name(handleStoppedNotification, "handleStoppedNotification");
    exports.EMPTY_OBSERVER = {
      closed: true,
      next: noop_1.noop,
      error: defaultErrorHandler,
      complete: noop_1.noop
    };
  }
});

// node_modules/rxjs/dist/cjs/internal/symbol/observable.js
var require_observable = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/symbol/observable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.observable = void 0;
    exports.observable = function() {
      return typeof Symbol === "function" && Symbol.observable || "@@observable";
    }();
  }
});

// node_modules/rxjs/dist/cjs/internal/util/identity.js
var require_identity = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/util/identity.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.identity = void 0;
    function identity(x) {
      return x;
    }
    __name(identity, "identity");
    exports.identity = identity;
  }
});

// node_modules/rxjs/dist/cjs/internal/util/pipe.js
var require_pipe = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/util/pipe.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.pipeFromArray = exports.pipe = void 0;
    var identity_1 = require_identity();
    function pipe() {
      var fns = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
      }
      return pipeFromArray(fns);
    }
    __name(pipe, "pipe");
    exports.pipe = pipe;
    function pipeFromArray(fns) {
      if (fns.length === 0) {
        return identity_1.identity;
      }
      if (fns.length === 1) {
        return fns[0];
      }
      return /* @__PURE__ */ __name(function piped(input) {
        return fns.reduce(function(prev, fn) {
          return fn(prev);
        }, input);
      }, "piped");
    }
    __name(pipeFromArray, "pipeFromArray");
    exports.pipeFromArray = pipeFromArray;
  }
});

// node_modules/rxjs/dist/cjs/internal/Observable.js
var require_Observable = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/Observable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Observable = void 0;
    var Subscriber_1 = require_Subscriber();
    var Subscription_1 = require_Subscription();
    var observable_1 = require_observable();
    var pipe_1 = require_pipe();
    var config_1 = require_config();
    var isFunction_1 = require_isFunction();
    var errorContext_1 = require_errorContext();
    var Observable = function() {
      function Observable2(subscribe) {
        if (subscribe) {
          this._subscribe = subscribe;
        }
      }
      __name(Observable2, "Observable");
      Observable2.prototype.lift = function(operator) {
        var observable = new Observable2();
        observable.source = this;
        observable.operator = operator;
        return observable;
      };
      Observable2.prototype.subscribe = function(observerOrNext, error, complete) {
        var _this = this;
        var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new Subscriber_1.SafeSubscriber(observerOrNext, error, complete);
        errorContext_1.errorContext(function() {
          var _a = _this, operator = _a.operator, source = _a.source;
          subscriber.add(operator ? operator.call(subscriber, source) : source ? _this._subscribe(subscriber) : _this._trySubscribe(subscriber));
        });
        return subscriber;
      };
      Observable2.prototype._trySubscribe = function(sink) {
        try {
          return this._subscribe(sink);
        } catch (err) {
          sink.error(err);
        }
      };
      Observable2.prototype.forEach = function(next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function(resolve, reject) {
          var subscriber = new Subscriber_1.SafeSubscriber({
            next: function(value) {
              try {
                next(value);
              } catch (err) {
                reject(err);
                subscriber.unsubscribe();
              }
            },
            error: reject,
            complete: resolve
          });
          _this.subscribe(subscriber);
        });
      };
      Observable2.prototype._subscribe = function(subscriber) {
        var _a;
        return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
      };
      Observable2.prototype[observable_1.observable] = function() {
        return this;
      };
      Observable2.prototype.pipe = function() {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          operations[_i] = arguments[_i];
        }
        return pipe_1.pipeFromArray(operations)(this);
      };
      Observable2.prototype.toPromise = function(promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function(resolve, reject) {
          var value;
          _this.subscribe(function(x) {
            return value = x;
          }, function(err) {
            return reject(err);
          }, function() {
            return resolve(value);
          });
        });
      };
      Observable2.create = function(subscribe) {
        return new Observable2(subscribe);
      };
      return Observable2;
    }();
    exports.Observable = Observable;
    function getPromiseCtor(promiseCtor) {
      var _a;
      return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config_1.config.Promise) !== null && _a !== void 0 ? _a : Promise;
    }
    __name(getPromiseCtor, "getPromiseCtor");
    function isObserver(value) {
      return value && isFunction_1.isFunction(value.next) && isFunction_1.isFunction(value.error) && isFunction_1.isFunction(value.complete);
    }
    __name(isObserver, "isObserver");
    function isSubscriber(value) {
      return value && value instanceof Subscriber_1.Subscriber || isObserver(value) && Subscription_1.isSubscription(value);
    }
    __name(isSubscriber, "isSubscriber");
  }
});

// node_modules/rxjs/dist/cjs/internal/util/lift.js
var require_lift = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/util/lift.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.operate = exports.hasLift = void 0;
    var isFunction_1 = require_isFunction();
    function hasLift(source) {
      return isFunction_1.isFunction(source === null || source === void 0 ? void 0 : source.lift);
    }
    __name(hasLift, "hasLift");
    exports.hasLift = hasLift;
    function operate(init) {
      return function(source) {
        if (hasLift(source)) {
          return source.lift(function(liftedSource) {
            try {
              return init(liftedSource, this);
            } catch (err) {
              this.error(err);
            }
          });
        }
        throw new TypeError("Unable to lift unknown Observable type");
      };
    }
    __name(operate, "operate");
    exports.operate = operate;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js
var require_OperatorSubscriber = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || /* @__PURE__ */ function() {
      var extendStatics = /* @__PURE__ */ __name(function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      }, "extendStatics");
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        __name(__, "__");
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.OperatorSubscriber = exports.createOperatorSubscriber = void 0;
    var Subscriber_1 = require_Subscriber();
    function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
      return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
    }
    __name(createOperatorSubscriber, "createOperatorSubscriber");
    exports.createOperatorSubscriber = createOperatorSubscriber;
    var OperatorSubscriber = function(_super) {
      __extends(OperatorSubscriber2, _super);
      function OperatorSubscriber2(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
        var _this = _super.call(this, destination) || this;
        _this.onFinalize = onFinalize;
        _this.shouldUnsubscribe = shouldUnsubscribe;
        _this._next = onNext ? function(value) {
          try {
            onNext(value);
          } catch (err) {
            destination.error(err);
          }
        } : _super.prototype._next;
        _this._error = onError ? function(err) {
          try {
            onError(err);
          } catch (err2) {
            destination.error(err2);
          } finally {
            this.unsubscribe();
          }
        } : _super.prototype._error;
        _this._complete = onComplete ? function() {
          try {
            onComplete();
          } catch (err) {
            destination.error(err);
          } finally {
            this.unsubscribe();
          }
        } : _super.prototype._complete;
        return _this;
      }
      __name(OperatorSubscriber2, "OperatorSubscriber");
      OperatorSubscriber2.prototype.unsubscribe = function() {
        var _a;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
          var closed_1 = this.closed;
          _super.prototype.unsubscribe.call(this);
          !closed_1 && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
        }
      };
      return OperatorSubscriber2;
    }(Subscriber_1.Subscriber);
    exports.OperatorSubscriber = OperatorSubscriber;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/refCount.js
var require_refCount = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/refCount.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.refCount = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function refCount() {
      return lift_1.operate(function(source, subscriber) {
        var connection = null;
        source._refCount++;
        var refCounter = OperatorSubscriber_1.createOperatorSubscriber(subscriber, void 0, void 0, void 0, function() {
          if (!source || source._refCount <= 0 || 0 < --source._refCount) {
            connection = null;
            return;
          }
          var sharedConnection = source._connection;
          var conn = connection;
          connection = null;
          if (sharedConnection && (!conn || sharedConnection === conn)) {
            sharedConnection.unsubscribe();
          }
          subscriber.unsubscribe();
        });
        source.subscribe(refCounter);
        if (!refCounter.closed) {
          connection = source.connect();
        }
      });
    }
    __name(refCount, "refCount");
    exports.refCount = refCount;
  }
});

// node_modules/rxjs/dist/cjs/internal/observable/ConnectableObservable.js
var require_ConnectableObservable = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/observable/ConnectableObservable.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || /* @__PURE__ */ function() {
      var extendStatics = /* @__PURE__ */ __name(function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      }, "extendStatics");
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        __name(__, "__");
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ConnectableObservable = void 0;
    var Observable_1 = require_Observable();
    var Subscription_1 = require_Subscription();
    var refCount_1 = require_refCount();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var lift_1 = require_lift();
    var ConnectableObservable = function(_super) {
      __extends(ConnectableObservable2, _super);
      function ConnectableObservable2(source, subjectFactory) {
        var _this = _super.call(this) || this;
        _this.source = source;
        _this.subjectFactory = subjectFactory;
        _this._subject = null;
        _this._refCount = 0;
        _this._connection = null;
        if (lift_1.hasLift(source)) {
          _this.lift = source.lift;
        }
        return _this;
      }
      __name(ConnectableObservable2, "ConnectableObservable");
      ConnectableObservable2.prototype._subscribe = function(subscriber) {
        return this.getSubject().subscribe(subscriber);
      };
      ConnectableObservable2.prototype.getSubject = function() {
        var subject = this._subject;
        if (!subject || subject.isStopped) {
          this._subject = this.subjectFactory();
        }
        return this._subject;
      };
      ConnectableObservable2.prototype._teardown = function() {
        this._refCount = 0;
        var _connection = this._connection;
        this._subject = this._connection = null;
        _connection === null || _connection === void 0 ? void 0 : _connection.unsubscribe();
      };
      ConnectableObservable2.prototype.connect = function() {
        var _this = this;
        var connection = this._connection;
        if (!connection) {
          connection = this._connection = new Subscription_1.Subscription();
          var subject_1 = this.getSubject();
          connection.add(this.source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subject_1, void 0, function() {
            _this._teardown();
            subject_1.complete();
          }, function(err) {
            _this._teardown();
            subject_1.error(err);
          }, function() {
            return _this._teardown();
          })));
          if (connection.closed) {
            this._connection = null;
            connection = Subscription_1.Subscription.EMPTY;
          }
        }
        return connection;
      };
      ConnectableObservable2.prototype.refCount = function() {
        return refCount_1.refCount()(this);
      };
      return ConnectableObservable2;
    }(Observable_1.Observable);
    exports.ConnectableObservable = ConnectableObservable;
  }
});

// node_modules/rxjs/dist/cjs/internal/scheduler/performanceTimestampProvider.js
var require_performanceTimestampProvider = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/scheduler/performanceTimestampProvider.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.performanceTimestampProvider = void 0;
    exports.performanceTimestampProvider = {
      now: function() {
        return (exports.performanceTimestampProvider.delegate || performance).now();
      },
      delegate: void 0
    };
  }
});

// node_modules/rxjs/dist/cjs/internal/scheduler/animationFrameProvider.js
var require_animationFrameProvider = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/scheduler/animationFrameProvider.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = {
          error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.animationFrameProvider = void 0;
    var Subscription_1 = require_Subscription();
    exports.animationFrameProvider = {
      schedule: function(callback) {
        var request = requestAnimationFrame;
        var cancel = cancelAnimationFrame;
        var delegate = exports.animationFrameProvider.delegate;
        if (delegate) {
          request = delegate.requestAnimationFrame;
          cancel = delegate.cancelAnimationFrame;
        }
        var handle = request(function(timestamp) {
          cancel = void 0;
          callback(timestamp);
        });
        return new Subscription_1.Subscription(function() {
          return cancel === null || cancel === void 0 ? void 0 : cancel(handle);
        });
      },
      requestAnimationFrame: function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var delegate = exports.animationFrameProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.requestAnimationFrame) || requestAnimationFrame).apply(void 0, __spreadArray([], __read(args)));
      },
      cancelAnimationFrame: function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var delegate = exports.animationFrameProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.cancelAnimationFrame) || cancelAnimationFrame).apply(void 0, __spreadArray([], __read(args)));
      },
      delegate: void 0
    };
  }
});

// node_modules/rxjs/dist/cjs/internal/observable/dom/animationFrames.js
var require_animationFrames = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/observable/dom/animationFrames.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.animationFrames = void 0;
    var Observable_1 = require_Observable();
    var performanceTimestampProvider_1 = require_performanceTimestampProvider();
    var animationFrameProvider_1 = require_animationFrameProvider();
    function animationFrames(timestampProvider) {
      return timestampProvider ? animationFramesFactory(timestampProvider) : DEFAULT_ANIMATION_FRAMES;
    }
    __name(animationFrames, "animationFrames");
    exports.animationFrames = animationFrames;
    function animationFramesFactory(timestampProvider) {
      return new Observable_1.Observable(function(subscriber) {
        var provider = timestampProvider || performanceTimestampProvider_1.performanceTimestampProvider;
        var start = provider.now();
        var id = 0;
        var run = /* @__PURE__ */ __name(function() {
          if (!subscriber.closed) {
            id = animationFrameProvider_1.animationFrameProvider.requestAnimationFrame(function(timestamp) {
              id = 0;
              var now = provider.now();
              subscriber.next({
                timestamp: timestampProvider ? now : timestamp,
                elapsed: now - start
              });
              run();
            });
          }
        }, "run");
        run();
        return function() {
          if (id) {
            animationFrameProvider_1.animationFrameProvider.cancelAnimationFrame(id);
          }
        };
      });
    }
    __name(animationFramesFactory, "animationFramesFactory");
    var DEFAULT_ANIMATION_FRAMES = animationFramesFactory();
  }
});

// node_modules/rxjs/dist/cjs/internal/util/ObjectUnsubscribedError.js
var require_ObjectUnsubscribedError = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/util/ObjectUnsubscribedError.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ObjectUnsubscribedError = void 0;
    var createErrorClass_1 = require_createErrorClass();
    exports.ObjectUnsubscribedError = createErrorClass_1.createErrorClass(function(_super) {
      return /* @__PURE__ */ __name(function ObjectUnsubscribedErrorImpl() {
        _super(this);
        this.name = "ObjectUnsubscribedError";
        this.message = "object unsubscribed";
      }, "ObjectUnsubscribedErrorImpl");
    });
  }
});

// node_modules/rxjs/dist/cjs/internal/Subject.js
var require_Subject = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/Subject.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || /* @__PURE__ */ function() {
      var extendStatics = /* @__PURE__ */ __name(function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      }, "extendStatics");
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        __name(__, "__");
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __values = exports && exports.__values || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
        return m.call(o);
      if (o && typeof o.length === "number")
        return {
          next: function() {
            if (o && i >= o.length)
              o = void 0;
            return {
              value: o && o[i++],
              done: !o
            };
          }
        };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.AnonymousSubject = exports.Subject = void 0;
    var Observable_1 = require_Observable();
    var Subscription_1 = require_Subscription();
    var ObjectUnsubscribedError_1 = require_ObjectUnsubscribedError();
    var arrRemove_1 = require_arrRemove();
    var errorContext_1 = require_errorContext();
    var Subject = function(_super) {
      __extends(Subject2, _super);
      function Subject2() {
        var _this = _super.call(this) || this;
        _this.closed = false;
        _this.currentObservers = null;
        _this.observers = [];
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
      }
      __name(Subject2, "Subject");
      Subject2.prototype.lift = function(operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
      };
      Subject2.prototype._throwIfClosed = function() {
        if (this.closed) {
          throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
      };
      Subject2.prototype.next = function(value) {
        var _this = this;
        errorContext_1.errorContext(function() {
          var e_1, _a;
          _this._throwIfClosed();
          if (!_this.isStopped) {
            if (!_this.currentObservers) {
              _this.currentObservers = Array.from(_this.observers);
            }
            try {
              for (var _b = __values(_this.currentObservers), _c = _b.next(); !_c.done; _c = _b.next()) {
                var observer = _c.value;
                observer.next(value);
              }
            } catch (e_1_1) {
              e_1 = {
                error: e_1_1
              };
            } finally {
              try {
                if (_c && !_c.done && (_a = _b.return))
                  _a.call(_b);
              } finally {
                if (e_1)
                  throw e_1.error;
              }
            }
          }
        });
      };
      Subject2.prototype.error = function(err) {
        var _this = this;
        errorContext_1.errorContext(function() {
          _this._throwIfClosed();
          if (!_this.isStopped) {
            _this.hasError = _this.isStopped = true;
            _this.thrownError = err;
            var observers = _this.observers;
            while (observers.length) {
              observers.shift().error(err);
            }
          }
        });
      };
      Subject2.prototype.complete = function() {
        var _this = this;
        errorContext_1.errorContext(function() {
          _this._throwIfClosed();
          if (!_this.isStopped) {
            _this.isStopped = true;
            var observers = _this.observers;
            while (observers.length) {
              observers.shift().complete();
            }
          }
        });
      };
      Subject2.prototype.unsubscribe = function() {
        this.isStopped = this.closed = true;
        this.observers = this.currentObservers = null;
      };
      Object.defineProperty(Subject2.prototype, "observed", {
        get: function() {
          var _a;
          return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
        },
        enumerable: false,
        configurable: true
      });
      Subject2.prototype._trySubscribe = function(subscriber) {
        this._throwIfClosed();
        return _super.prototype._trySubscribe.call(this, subscriber);
      };
      Subject2.prototype._subscribe = function(subscriber) {
        this._throwIfClosed();
        this._checkFinalizedStatuses(subscriber);
        return this._innerSubscribe(subscriber);
      };
      Subject2.prototype._innerSubscribe = function(subscriber) {
        var _this = this;
        var _a = this, hasError = _a.hasError, isStopped = _a.isStopped, observers = _a.observers;
        if (hasError || isStopped) {
          return Subscription_1.EMPTY_SUBSCRIPTION;
        }
        this.currentObservers = null;
        observers.push(subscriber);
        return new Subscription_1.Subscription(function() {
          _this.currentObservers = null;
          arrRemove_1.arrRemove(observers, subscriber);
        });
      };
      Subject2.prototype._checkFinalizedStatuses = function(subscriber) {
        var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, isStopped = _a.isStopped;
        if (hasError) {
          subscriber.error(thrownError);
        } else if (isStopped) {
          subscriber.complete();
        }
      };
      Subject2.prototype.asObservable = function() {
        var observable = new Observable_1.Observable();
        observable.source = this;
        return observable;
      };
      Subject2.create = function(destination, source) {
        return new AnonymousSubject(destination, source);
      };
      return Subject2;
    }(Observable_1.Observable);
    exports.Subject = Subject;
    var AnonymousSubject = function(_super) {
      __extends(AnonymousSubject2, _super);
      function AnonymousSubject2(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
      }
      __name(AnonymousSubject2, "AnonymousSubject");
      AnonymousSubject2.prototype.next = function(value) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.call(_a, value);
      };
      AnonymousSubject2.prototype.error = function(err) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, err);
      };
      AnonymousSubject2.prototype.complete = function() {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 ? void 0 : _b.call(_a);
      };
      AnonymousSubject2.prototype._subscribe = function(subscriber) {
        var _a, _b;
        return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : Subscription_1.EMPTY_SUBSCRIPTION;
      };
      return AnonymousSubject2;
    }(Subject);
    exports.AnonymousSubject = AnonymousSubject;
  }
});

// node_modules/rxjs/dist/cjs/internal/BehaviorSubject.js
var require_BehaviorSubject = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/BehaviorSubject.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || /* @__PURE__ */ function() {
      var extendStatics = /* @__PURE__ */ __name(function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      }, "extendStatics");
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        __name(__, "__");
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BehaviorSubject = void 0;
    var Subject_1 = require_Subject();
    var BehaviorSubject = function(_super) {
      __extends(BehaviorSubject2, _super);
      function BehaviorSubject2(_value) {
        var _this = _super.call(this) || this;
        _this._value = _value;
        return _this;
      }
      __name(BehaviorSubject2, "BehaviorSubject");
      Object.defineProperty(BehaviorSubject2.prototype, "value", {
        get: function() {
          return this.getValue();
        },
        enumerable: false,
        configurable: true
      });
      BehaviorSubject2.prototype._subscribe = function(subscriber) {
        var subscription = _super.prototype._subscribe.call(this, subscriber);
        !subscription.closed && subscriber.next(this._value);
        return subscription;
      };
      BehaviorSubject2.prototype.getValue = function() {
        var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, _value = _a._value;
        if (hasError) {
          throw thrownError;
        }
        this._throwIfClosed();
        return _value;
      };
      BehaviorSubject2.prototype.next = function(value) {
        _super.prototype.next.call(this, this._value = value);
      };
      return BehaviorSubject2;
    }(Subject_1.Subject);
    exports.BehaviorSubject = BehaviorSubject;
  }
});

// node_modules/rxjs/dist/cjs/internal/scheduler/dateTimestampProvider.js
var require_dateTimestampProvider = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/scheduler/dateTimestampProvider.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.dateTimestampProvider = void 0;
    exports.dateTimestampProvider = {
      now: function() {
        return (exports.dateTimestampProvider.delegate || Date).now();
      },
      delegate: void 0
    };
  }
});

// node_modules/rxjs/dist/cjs/internal/ReplaySubject.js
var require_ReplaySubject = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/ReplaySubject.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || /* @__PURE__ */ function() {
      var extendStatics = /* @__PURE__ */ __name(function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      }, "extendStatics");
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        __name(__, "__");
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ReplaySubject = void 0;
    var Subject_1 = require_Subject();
    var dateTimestampProvider_1 = require_dateTimestampProvider();
    var ReplaySubject = function(_super) {
      __extends(ReplaySubject2, _super);
      function ReplaySubject2(_bufferSize, _windowTime, _timestampProvider) {
        if (_bufferSize === void 0) {
          _bufferSize = Infinity;
        }
        if (_windowTime === void 0) {
          _windowTime = Infinity;
        }
        if (_timestampProvider === void 0) {
          _timestampProvider = dateTimestampProvider_1.dateTimestampProvider;
        }
        var _this = _super.call(this) || this;
        _this._bufferSize = _bufferSize;
        _this._windowTime = _windowTime;
        _this._timestampProvider = _timestampProvider;
        _this._buffer = [];
        _this._infiniteTimeWindow = true;
        _this._infiniteTimeWindow = _windowTime === Infinity;
        _this._bufferSize = Math.max(1, _bufferSize);
        _this._windowTime = Math.max(1, _windowTime);
        return _this;
      }
      __name(ReplaySubject2, "ReplaySubject");
      ReplaySubject2.prototype.next = function(value) {
        var _a = this, isStopped = _a.isStopped, _buffer = _a._buffer, _infiniteTimeWindow = _a._infiniteTimeWindow, _timestampProvider = _a._timestampProvider, _windowTime = _a._windowTime;
        if (!isStopped) {
          _buffer.push(value);
          !_infiniteTimeWindow && _buffer.push(_timestampProvider.now() + _windowTime);
        }
        this._trimBuffer();
        _super.prototype.next.call(this, value);
      };
      ReplaySubject2.prototype._subscribe = function(subscriber) {
        this._throwIfClosed();
        this._trimBuffer();
        var subscription = this._innerSubscribe(subscriber);
        var _a = this, _infiniteTimeWindow = _a._infiniteTimeWindow, _buffer = _a._buffer;
        var copy = _buffer.slice();
        for (var i = 0; i < copy.length && !subscriber.closed; i += _infiniteTimeWindow ? 1 : 2) {
          subscriber.next(copy[i]);
        }
        this._checkFinalizedStatuses(subscriber);
        return subscription;
      };
      ReplaySubject2.prototype._trimBuffer = function() {
        var _a = this, _bufferSize = _a._bufferSize, _timestampProvider = _a._timestampProvider, _buffer = _a._buffer, _infiniteTimeWindow = _a._infiniteTimeWindow;
        var adjustedBufferSize = (_infiniteTimeWindow ? 1 : 2) * _bufferSize;
        _bufferSize < Infinity && adjustedBufferSize < _buffer.length && _buffer.splice(0, _buffer.length - adjustedBufferSize);
        if (!_infiniteTimeWindow) {
          var now = _timestampProvider.now();
          var last = 0;
          for (var i = 1; i < _buffer.length && _buffer[i] <= now; i += 2) {
            last = i;
          }
          last && _buffer.splice(0, last + 1);
        }
      };
      return ReplaySubject2;
    }(Subject_1.Subject);
    exports.ReplaySubject = ReplaySubject;
  }
});

// node_modules/rxjs/dist/cjs/internal/AsyncSubject.js
var require_AsyncSubject = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/AsyncSubject.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || /* @__PURE__ */ function() {
      var extendStatics = /* @__PURE__ */ __name(function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      }, "extendStatics");
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        __name(__, "__");
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.AsyncSubject = void 0;
    var Subject_1 = require_Subject();
    var AsyncSubject = function(_super) {
      __extends(AsyncSubject2, _super);
      function AsyncSubject2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._value = null;
        _this._hasValue = false;
        _this._isComplete = false;
        return _this;
      }
      __name(AsyncSubject2, "AsyncSubject");
      AsyncSubject2.prototype._checkFinalizedStatuses = function(subscriber) {
        var _a = this, hasError = _a.hasError, _hasValue = _a._hasValue, _value = _a._value, thrownError = _a.thrownError, isStopped = _a.isStopped, _isComplete = _a._isComplete;
        if (hasError) {
          subscriber.error(thrownError);
        } else if (isStopped || _isComplete) {
          _hasValue && subscriber.next(_value);
          subscriber.complete();
        }
      };
      AsyncSubject2.prototype.next = function(value) {
        if (!this.isStopped) {
          this._value = value;
          this._hasValue = true;
        }
      };
      AsyncSubject2.prototype.complete = function() {
        var _a = this, _hasValue = _a._hasValue, _value = _a._value, _isComplete = _a._isComplete;
        if (!_isComplete) {
          this._isComplete = true;
          _hasValue && _super.prototype.next.call(this, _value);
          _super.prototype.complete.call(this);
        }
      };
      return AsyncSubject2;
    }(Subject_1.Subject);
    exports.AsyncSubject = AsyncSubject;
  }
});

// node_modules/rxjs/dist/cjs/internal/scheduler/Action.js
var require_Action = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/scheduler/Action.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || /* @__PURE__ */ function() {
      var extendStatics = /* @__PURE__ */ __name(function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      }, "extendStatics");
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        __name(__, "__");
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Action = void 0;
    var Subscription_1 = require_Subscription();
    var Action = function(_super) {
      __extends(Action2, _super);
      function Action2(scheduler, work) {
        return _super.call(this) || this;
      }
      __name(Action2, "Action");
      Action2.prototype.schedule = function(state, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        return this;
      };
      return Action2;
    }(Subscription_1.Subscription);
    exports.Action = Action;
  }
});

// node_modules/rxjs/dist/cjs/internal/scheduler/intervalProvider.js
var require_intervalProvider = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/scheduler/intervalProvider.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = {
          error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.intervalProvider = void 0;
    exports.intervalProvider = {
      setInterval: function(handler, timeout) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
          args[_i - 2] = arguments[_i];
        }
        var delegate = exports.intervalProvider.delegate;
        if (delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) {
          return delegate.setInterval.apply(delegate, __spreadArray([
            handler,
            timeout
          ], __read(args)));
        }
        return setInterval.apply(void 0, __spreadArray([
          handler,
          timeout
        ], __read(args)));
      },
      clearInterval: function(handle) {
        var delegate = exports.intervalProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
      },
      delegate: void 0
    };
  }
});

// node_modules/rxjs/dist/cjs/internal/scheduler/AsyncAction.js
var require_AsyncAction = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/scheduler/AsyncAction.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || /* @__PURE__ */ function() {
      var extendStatics = /* @__PURE__ */ __name(function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      }, "extendStatics");
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        __name(__, "__");
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.AsyncAction = void 0;
    var Action_1 = require_Action();
    var intervalProvider_1 = require_intervalProvider();
    var arrRemove_1 = require_arrRemove();
    var AsyncAction = function(_super) {
      __extends(AsyncAction2, _super);
      function AsyncAction2(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.pending = false;
        return _this;
      }
      __name(AsyncAction2, "AsyncAction");
      AsyncAction2.prototype.schedule = function(state, delay) {
        var _a;
        if (delay === void 0) {
          delay = 0;
        }
        if (this.closed) {
          return this;
        }
        this.state = state;
        var id = this.id;
        var scheduler = this.scheduler;
        if (id != null) {
          this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = (_a = this.id) !== null && _a !== void 0 ? _a : this.requestAsyncId(scheduler, this.id, delay);
        return this;
      };
      AsyncAction2.prototype.requestAsyncId = function(scheduler, _id, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        return intervalProvider_1.intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay);
      };
      AsyncAction2.prototype.recycleAsyncId = function(_scheduler, id, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        if (delay != null && this.delay === delay && this.pending === false) {
          return id;
        }
        if (id != null) {
          intervalProvider_1.intervalProvider.clearInterval(id);
        }
        return void 0;
      };
      AsyncAction2.prototype.execute = function(state, delay) {
        if (this.closed) {
          return new Error("executing a cancelled action");
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
          return error;
        } else if (this.pending === false && this.id != null) {
          this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
      };
      AsyncAction2.prototype._execute = function(state, _delay) {
        var errored = false;
        var errorValue;
        try {
          this.work(state);
        } catch (e) {
          errored = true;
          errorValue = e ? e : new Error("Scheduled action threw falsy error");
        }
        if (errored) {
          this.unsubscribe();
          return errorValue;
        }
      };
      AsyncAction2.prototype.unsubscribe = function() {
        if (!this.closed) {
          var _a = this, id = _a.id, scheduler = _a.scheduler;
          var actions = scheduler.actions;
          this.work = this.state = this.scheduler = null;
          this.pending = false;
          arrRemove_1.arrRemove(actions, this);
          if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
          }
          this.delay = null;
          _super.prototype.unsubscribe.call(this);
        }
      };
      return AsyncAction2;
    }(Action_1.Action);
    exports.AsyncAction = AsyncAction;
  }
});

// node_modules/rxjs/dist/cjs/internal/util/Immediate.js
var require_Immediate = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/util/Immediate.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.TestTools = exports.Immediate = void 0;
    var nextHandle = 1;
    var resolved;
    var activeHandles = {};
    function findAndClearHandle(handle) {
      if (handle in activeHandles) {
        delete activeHandles[handle];
        return true;
      }
      return false;
    }
    __name(findAndClearHandle, "findAndClearHandle");
    exports.Immediate = {
      setImmediate: function(cb) {
        var handle = nextHandle++;
        activeHandles[handle] = true;
        if (!resolved) {
          resolved = Promise.resolve();
        }
        resolved.then(function() {
          return findAndClearHandle(handle) && cb();
        });
        return handle;
      },
      clearImmediate: function(handle) {
        findAndClearHandle(handle);
      }
    };
    exports.TestTools = {
      pending: function() {
        return Object.keys(activeHandles).length;
      }
    };
  }
});

// node_modules/rxjs/dist/cjs/internal/scheduler/immediateProvider.js
var require_immediateProvider = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/scheduler/immediateProvider.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = {
          error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.immediateProvider = void 0;
    var Immediate_1 = require_Immediate();
    var setImmediate2 = Immediate_1.Immediate.setImmediate;
    var clearImmediate2 = Immediate_1.Immediate.clearImmediate;
    exports.immediateProvider = {
      setImmediate: function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var delegate = exports.immediateProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.setImmediate) || setImmediate2).apply(void 0, __spreadArray([], __read(args)));
      },
      clearImmediate: function(handle) {
        var delegate = exports.immediateProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearImmediate) || clearImmediate2)(handle);
      },
      delegate: void 0
    };
  }
});

// node_modules/rxjs/dist/cjs/internal/scheduler/AsapAction.js
var require_AsapAction = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/scheduler/AsapAction.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || /* @__PURE__ */ function() {
      var extendStatics = /* @__PURE__ */ __name(function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      }, "extendStatics");
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        __name(__, "__");
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.AsapAction = void 0;
    var AsyncAction_1 = require_AsyncAction();
    var immediateProvider_1 = require_immediateProvider();
    var AsapAction = function(_super) {
      __extends(AsapAction2, _super);
      function AsapAction2(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
      }
      __name(AsapAction2, "AsapAction");
      AsapAction2.prototype.requestAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        if (delay !== null && delay > 0) {
          return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler._scheduled || (scheduler._scheduled = immediateProvider_1.immediateProvider.setImmediate(scheduler.flush.bind(scheduler, void 0)));
      };
      AsapAction2.prototype.recycleAsyncId = function(scheduler, id, delay) {
        var _a;
        if (delay === void 0) {
          delay = 0;
        }
        if (delay != null ? delay > 0 : this.delay > 0) {
          return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        var actions = scheduler.actions;
        if (id != null && ((_a = actions[actions.length - 1]) === null || _a === void 0 ? void 0 : _a.id) !== id) {
          immediateProvider_1.immediateProvider.clearImmediate(id);
          if (scheduler._scheduled === id) {
            scheduler._scheduled = void 0;
          }
        }
        return void 0;
      };
      return AsapAction2;
    }(AsyncAction_1.AsyncAction);
    exports.AsapAction = AsapAction;
  }
});

// node_modules/rxjs/dist/cjs/internal/Scheduler.js
var require_Scheduler = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/Scheduler.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Scheduler = void 0;
    var dateTimestampProvider_1 = require_dateTimestampProvider();
    var Scheduler = function() {
      function Scheduler2(schedulerActionCtor, now) {
        if (now === void 0) {
          now = Scheduler2.now;
        }
        this.schedulerActionCtor = schedulerActionCtor;
        this.now = now;
      }
      __name(Scheduler2, "Scheduler");
      Scheduler2.prototype.schedule = function(work, delay, state) {
        if (delay === void 0) {
          delay = 0;
        }
        return new this.schedulerActionCtor(this, work).schedule(state, delay);
      };
      Scheduler2.now = dateTimestampProvider_1.dateTimestampProvider.now;
      return Scheduler2;
    }();
    exports.Scheduler = Scheduler;
  }
});

// node_modules/rxjs/dist/cjs/internal/scheduler/AsyncScheduler.js
var require_AsyncScheduler = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/scheduler/AsyncScheduler.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || /* @__PURE__ */ function() {
      var extendStatics = /* @__PURE__ */ __name(function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      }, "extendStatics");
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        __name(__, "__");
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.AsyncScheduler = void 0;
    var Scheduler_1 = require_Scheduler();
    var AsyncScheduler = function(_super) {
      __extends(AsyncScheduler2, _super);
      function AsyncScheduler2(SchedulerAction, now) {
        if (now === void 0) {
          now = Scheduler_1.Scheduler.now;
        }
        var _this = _super.call(this, SchedulerAction, now) || this;
        _this.actions = [];
        _this._active = false;
        return _this;
      }
      __name(AsyncScheduler2, "AsyncScheduler");
      AsyncScheduler2.prototype.flush = function(action) {
        var actions = this.actions;
        if (this._active) {
          actions.push(action);
          return;
        }
        var error;
        this._active = true;
        do {
          if (error = action.execute(action.state, action.delay)) {
            break;
          }
        } while (action = actions.shift());
        this._active = false;
        if (error) {
          while (action = actions.shift()) {
            action.unsubscribe();
          }
          throw error;
        }
      };
      return AsyncScheduler2;
    }(Scheduler_1.Scheduler);
    exports.AsyncScheduler = AsyncScheduler;
  }
});

// node_modules/rxjs/dist/cjs/internal/scheduler/AsapScheduler.js
var require_AsapScheduler = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/scheduler/AsapScheduler.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || /* @__PURE__ */ function() {
      var extendStatics = /* @__PURE__ */ __name(function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      }, "extendStatics");
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        __name(__, "__");
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.AsapScheduler = void 0;
    var AsyncScheduler_1 = require_AsyncScheduler();
    var AsapScheduler = function(_super) {
      __extends(AsapScheduler2, _super);
      function AsapScheduler2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      __name(AsapScheduler2, "AsapScheduler");
      AsapScheduler2.prototype.flush = function(action) {
        this._active = true;
        var flushId = this._scheduled;
        this._scheduled = void 0;
        var actions = this.actions;
        var error;
        action = action || actions.shift();
        do {
          if (error = action.execute(action.state, action.delay)) {
            break;
          }
        } while ((action = actions[0]) && action.id === flushId && actions.shift());
        this._active = false;
        if (error) {
          while ((action = actions[0]) && action.id === flushId && actions.shift()) {
            action.unsubscribe();
          }
          throw error;
        }
      };
      return AsapScheduler2;
    }(AsyncScheduler_1.AsyncScheduler);
    exports.AsapScheduler = AsapScheduler;
  }
});

// node_modules/rxjs/dist/cjs/internal/scheduler/asap.js
var require_asap = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/scheduler/asap.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.asap = exports.asapScheduler = void 0;
    var AsapAction_1 = require_AsapAction();
    var AsapScheduler_1 = require_AsapScheduler();
    exports.asapScheduler = new AsapScheduler_1.AsapScheduler(AsapAction_1.AsapAction);
    exports.asap = exports.asapScheduler;
  }
});

// node_modules/rxjs/dist/cjs/internal/scheduler/async.js
var require_async = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/scheduler/async.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.async = exports.asyncScheduler = void 0;
    var AsyncAction_1 = require_AsyncAction();
    var AsyncScheduler_1 = require_AsyncScheduler();
    exports.asyncScheduler = new AsyncScheduler_1.AsyncScheduler(AsyncAction_1.AsyncAction);
    exports.async = exports.asyncScheduler;
  }
});

// node_modules/rxjs/dist/cjs/internal/scheduler/QueueAction.js
var require_QueueAction = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/scheduler/QueueAction.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || /* @__PURE__ */ function() {
      var extendStatics = /* @__PURE__ */ __name(function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      }, "extendStatics");
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        __name(__, "__");
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.QueueAction = void 0;
    var AsyncAction_1 = require_AsyncAction();
    var QueueAction = function(_super) {
      __extends(QueueAction2, _super);
      function QueueAction2(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
      }
      __name(QueueAction2, "QueueAction");
      QueueAction2.prototype.schedule = function(state, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        if (delay > 0) {
          return _super.prototype.schedule.call(this, state, delay);
        }
        this.delay = delay;
        this.state = state;
        this.scheduler.flush(this);
        return this;
      };
      QueueAction2.prototype.execute = function(state, delay) {
        return delay > 0 || this.closed ? _super.prototype.execute.call(this, state, delay) : this._execute(state, delay);
      };
      QueueAction2.prototype.requestAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        if (delay != null && delay > 0 || delay == null && this.delay > 0) {
          return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        scheduler.flush(this);
        return 0;
      };
      return QueueAction2;
    }(AsyncAction_1.AsyncAction);
    exports.QueueAction = QueueAction;
  }
});

// node_modules/rxjs/dist/cjs/internal/scheduler/QueueScheduler.js
var require_QueueScheduler = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/scheduler/QueueScheduler.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || /* @__PURE__ */ function() {
      var extendStatics = /* @__PURE__ */ __name(function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      }, "extendStatics");
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        __name(__, "__");
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.QueueScheduler = void 0;
    var AsyncScheduler_1 = require_AsyncScheduler();
    var QueueScheduler = function(_super) {
      __extends(QueueScheduler2, _super);
      function QueueScheduler2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      __name(QueueScheduler2, "QueueScheduler");
      return QueueScheduler2;
    }(AsyncScheduler_1.AsyncScheduler);
    exports.QueueScheduler = QueueScheduler;
  }
});

// node_modules/rxjs/dist/cjs/internal/scheduler/queue.js
var require_queue = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/scheduler/queue.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.queue = exports.queueScheduler = void 0;
    var QueueAction_1 = require_QueueAction();
    var QueueScheduler_1 = require_QueueScheduler();
    exports.queueScheduler = new QueueScheduler_1.QueueScheduler(QueueAction_1.QueueAction);
    exports.queue = exports.queueScheduler;
  }
});

// node_modules/rxjs/dist/cjs/internal/scheduler/AnimationFrameAction.js
var require_AnimationFrameAction = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/scheduler/AnimationFrameAction.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || /* @__PURE__ */ function() {
      var extendStatics = /* @__PURE__ */ __name(function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      }, "extendStatics");
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        __name(__, "__");
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.AnimationFrameAction = void 0;
    var AsyncAction_1 = require_AsyncAction();
    var animationFrameProvider_1 = require_animationFrameProvider();
    var AnimationFrameAction = function(_super) {
      __extends(AnimationFrameAction2, _super);
      function AnimationFrameAction2(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
      }
      __name(AnimationFrameAction2, "AnimationFrameAction");
      AnimationFrameAction2.prototype.requestAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        if (delay !== null && delay > 0) {
          return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler._scheduled || (scheduler._scheduled = animationFrameProvider_1.animationFrameProvider.requestAnimationFrame(function() {
          return scheduler.flush(void 0);
        }));
      };
      AnimationFrameAction2.prototype.recycleAsyncId = function(scheduler, id, delay) {
        var _a;
        if (delay === void 0) {
          delay = 0;
        }
        if (delay != null ? delay > 0 : this.delay > 0) {
          return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        var actions = scheduler.actions;
        if (id != null && ((_a = actions[actions.length - 1]) === null || _a === void 0 ? void 0 : _a.id) !== id) {
          animationFrameProvider_1.animationFrameProvider.cancelAnimationFrame(id);
          scheduler._scheduled = void 0;
        }
        return void 0;
      };
      return AnimationFrameAction2;
    }(AsyncAction_1.AsyncAction);
    exports.AnimationFrameAction = AnimationFrameAction;
  }
});

// node_modules/rxjs/dist/cjs/internal/scheduler/AnimationFrameScheduler.js
var require_AnimationFrameScheduler = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/scheduler/AnimationFrameScheduler.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || /* @__PURE__ */ function() {
      var extendStatics = /* @__PURE__ */ __name(function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      }, "extendStatics");
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        __name(__, "__");
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.AnimationFrameScheduler = void 0;
    var AsyncScheduler_1 = require_AsyncScheduler();
    var AnimationFrameScheduler = function(_super) {
      __extends(AnimationFrameScheduler2, _super);
      function AnimationFrameScheduler2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      __name(AnimationFrameScheduler2, "AnimationFrameScheduler");
      AnimationFrameScheduler2.prototype.flush = function(action) {
        this._active = true;
        var flushId = this._scheduled;
        this._scheduled = void 0;
        var actions = this.actions;
        var error;
        action = action || actions.shift();
        do {
          if (error = action.execute(action.state, action.delay)) {
            break;
          }
        } while ((action = actions[0]) && action.id === flushId && actions.shift());
        this._active = false;
        if (error) {
          while ((action = actions[0]) && action.id === flushId && actions.shift()) {
            action.unsubscribe();
          }
          throw error;
        }
      };
      return AnimationFrameScheduler2;
    }(AsyncScheduler_1.AsyncScheduler);
    exports.AnimationFrameScheduler = AnimationFrameScheduler;
  }
});

// node_modules/rxjs/dist/cjs/internal/scheduler/animationFrame.js
var require_animationFrame = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/scheduler/animationFrame.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.animationFrame = exports.animationFrameScheduler = void 0;
    var AnimationFrameAction_1 = require_AnimationFrameAction();
    var AnimationFrameScheduler_1 = require_AnimationFrameScheduler();
    exports.animationFrameScheduler = new AnimationFrameScheduler_1.AnimationFrameScheduler(AnimationFrameAction_1.AnimationFrameAction);
    exports.animationFrame = exports.animationFrameScheduler;
  }
});

// node_modules/rxjs/dist/cjs/internal/scheduler/VirtualTimeScheduler.js
var require_VirtualTimeScheduler = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/scheduler/VirtualTimeScheduler.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || /* @__PURE__ */ function() {
      var extendStatics = /* @__PURE__ */ __name(function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      }, "extendStatics");
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        __name(__, "__");
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.VirtualAction = exports.VirtualTimeScheduler = void 0;
    var AsyncAction_1 = require_AsyncAction();
    var Subscription_1 = require_Subscription();
    var AsyncScheduler_1 = require_AsyncScheduler();
    var VirtualTimeScheduler = function(_super) {
      __extends(VirtualTimeScheduler2, _super);
      function VirtualTimeScheduler2(schedulerActionCtor, maxFrames) {
        if (schedulerActionCtor === void 0) {
          schedulerActionCtor = VirtualAction;
        }
        if (maxFrames === void 0) {
          maxFrames = Infinity;
        }
        var _this = _super.call(this, schedulerActionCtor, function() {
          return _this.frame;
        }) || this;
        _this.maxFrames = maxFrames;
        _this.frame = 0;
        _this.index = -1;
        return _this;
      }
      __name(VirtualTimeScheduler2, "VirtualTimeScheduler");
      VirtualTimeScheduler2.prototype.flush = function() {
        var _a = this, actions = _a.actions, maxFrames = _a.maxFrames;
        var error;
        var action;
        while ((action = actions[0]) && action.delay <= maxFrames) {
          actions.shift();
          this.frame = action.delay;
          if (error = action.execute(action.state, action.delay)) {
            break;
          }
        }
        if (error) {
          while (action = actions.shift()) {
            action.unsubscribe();
          }
          throw error;
        }
      };
      VirtualTimeScheduler2.frameTimeFactor = 10;
      return VirtualTimeScheduler2;
    }(AsyncScheduler_1.AsyncScheduler);
    exports.VirtualTimeScheduler = VirtualTimeScheduler;
    var VirtualAction = function(_super) {
      __extends(VirtualAction2, _super);
      function VirtualAction2(scheduler, work, index) {
        if (index === void 0) {
          index = scheduler.index += 1;
        }
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.index = index;
        _this.active = true;
        _this.index = scheduler.index = index;
        return _this;
      }
      __name(VirtualAction2, "VirtualAction");
      VirtualAction2.prototype.schedule = function(state, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        if (Number.isFinite(delay)) {
          if (!this.id) {
            return _super.prototype.schedule.call(this, state, delay);
          }
          this.active = false;
          var action = new VirtualAction2(this.scheduler, this.work);
          this.add(action);
          return action.schedule(state, delay);
        } else {
          return Subscription_1.Subscription.EMPTY;
        }
      };
      VirtualAction2.prototype.requestAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        this.delay = scheduler.frame + delay;
        var actions = scheduler.actions;
        actions.push(this);
        actions.sort(VirtualAction2.sortActions);
        return 1;
      };
      VirtualAction2.prototype.recycleAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        return void 0;
      };
      VirtualAction2.prototype._execute = function(state, delay) {
        if (this.active === true) {
          return _super.prototype._execute.call(this, state, delay);
        }
      };
      VirtualAction2.sortActions = function(a, b) {
        if (a.delay === b.delay) {
          if (a.index === b.index) {
            return 0;
          } else if (a.index > b.index) {
            return 1;
          } else {
            return -1;
          }
        } else if (a.delay > b.delay) {
          return 1;
        } else {
          return -1;
        }
      };
      return VirtualAction2;
    }(AsyncAction_1.AsyncAction);
    exports.VirtualAction = VirtualAction;
  }
});

// node_modules/rxjs/dist/cjs/internal/observable/empty.js
var require_empty = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/observable/empty.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.empty = exports.EMPTY = void 0;
    var Observable_1 = require_Observable();
    exports.EMPTY = new Observable_1.Observable(function(subscriber) {
      return subscriber.complete();
    });
    function empty(scheduler) {
      return scheduler ? emptyScheduled(scheduler) : exports.EMPTY;
    }
    __name(empty, "empty");
    exports.empty = empty;
    function emptyScheduled(scheduler) {
      return new Observable_1.Observable(function(subscriber) {
        return scheduler.schedule(function() {
          return subscriber.complete();
        });
      });
    }
    __name(emptyScheduled, "emptyScheduled");
  }
});

// node_modules/rxjs/dist/cjs/internal/util/isScheduler.js
var require_isScheduler = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/util/isScheduler.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isScheduler = void 0;
    var isFunction_1 = require_isFunction();
    function isScheduler(value) {
      return value && isFunction_1.isFunction(value.schedule);
    }
    __name(isScheduler, "isScheduler");
    exports.isScheduler = isScheduler;
  }
});

// node_modules/rxjs/dist/cjs/internal/util/args.js
var require_args = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/util/args.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.popNumber = exports.popScheduler = exports.popResultSelector = void 0;
    var isFunction_1 = require_isFunction();
    var isScheduler_1 = require_isScheduler();
    function last(arr) {
      return arr[arr.length - 1];
    }
    __name(last, "last");
    function popResultSelector(args) {
      return isFunction_1.isFunction(last(args)) ? args.pop() : void 0;
    }
    __name(popResultSelector, "popResultSelector");
    exports.popResultSelector = popResultSelector;
    function popScheduler(args) {
      return isScheduler_1.isScheduler(last(args)) ? args.pop() : void 0;
    }
    __name(popScheduler, "popScheduler");
    exports.popScheduler = popScheduler;
    function popNumber(args, defaultValue) {
      return typeof last(args) === "number" ? args.pop() : defaultValue;
    }
    __name(popNumber, "popNumber");
    exports.popNumber = popNumber;
  }
});

// node_modules/rxjs/dist/cjs/internal/util/isArrayLike.js
var require_isArrayLike = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/util/isArrayLike.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isArrayLike = void 0;
    exports.isArrayLike = function(x) {
      return x && typeof x.length === "number" && typeof x !== "function";
    };
  }
});

// node_modules/rxjs/dist/cjs/internal/util/isPromise.js
var require_isPromise = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/util/isPromise.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isPromise = void 0;
    var isFunction_1 = require_isFunction();
    function isPromise(value) {
      return isFunction_1.isFunction(value === null || value === void 0 ? void 0 : value.then);
    }
    __name(isPromise, "isPromise");
    exports.isPromise = isPromise;
  }
});

// node_modules/rxjs/dist/cjs/internal/util/isInteropObservable.js
var require_isInteropObservable = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/util/isInteropObservable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isInteropObservable = void 0;
    var observable_1 = require_observable();
    var isFunction_1 = require_isFunction();
    function isInteropObservable(input) {
      return isFunction_1.isFunction(input[observable_1.observable]);
    }
    __name(isInteropObservable, "isInteropObservable");
    exports.isInteropObservable = isInteropObservable;
  }
});

// node_modules/rxjs/dist/cjs/internal/util/isAsyncIterable.js
var require_isAsyncIterable = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/util/isAsyncIterable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isAsyncIterable = void 0;
    var isFunction_1 = require_isFunction();
    function isAsyncIterable(obj) {
      return Symbol.asyncIterator && isFunction_1.isFunction(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
    }
    __name(isAsyncIterable, "isAsyncIterable");
    exports.isAsyncIterable = isAsyncIterable;
  }
});

// node_modules/rxjs/dist/cjs/internal/util/throwUnobservableError.js
var require_throwUnobservableError = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/util/throwUnobservableError.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.createInvalidObservableTypeError = void 0;
    function createInvalidObservableTypeError(input) {
      return new TypeError("You provided " + (input !== null && typeof input === "object" ? "an invalid object" : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
    }
    __name(createInvalidObservableTypeError, "createInvalidObservableTypeError");
    exports.createInvalidObservableTypeError = createInvalidObservableTypeError;
  }
});

// node_modules/rxjs/dist/cjs/internal/symbol/iterator.js
var require_iterator = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/symbol/iterator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.iterator = exports.getSymbolIterator = void 0;
    function getSymbolIterator() {
      if (typeof Symbol !== "function" || !Symbol.iterator) {
        return "@@iterator";
      }
      return Symbol.iterator;
    }
    __name(getSymbolIterator, "getSymbolIterator");
    exports.getSymbolIterator = getSymbolIterator;
    exports.iterator = getSymbolIterator();
  }
});

// node_modules/rxjs/dist/cjs/internal/util/isIterable.js
var require_isIterable = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/util/isIterable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isIterable = void 0;
    var iterator_1 = require_iterator();
    var isFunction_1 = require_isFunction();
    function isIterable(input) {
      return isFunction_1.isFunction(input === null || input === void 0 ? void 0 : input[iterator_1.iterator]);
    }
    __name(isIterable, "isIterable");
    exports.isIterable = isIterable;
  }
});

// node_modules/rxjs/dist/cjs/internal/util/isReadableStreamLike.js
var require_isReadableStreamLike = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/util/isReadableStreamLike.js"(exports) {
    "use strict";
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([
            n,
            v
          ]);
        };
      }
      __name(verb, "verb");
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (_)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [
                op[0] & 2,
                t.value
              ];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };
              case 5:
                _.label++;
                y = op[1];
                op = [
                  0
                ];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2])
                  _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [
              6,
              e
            ];
            y = 0;
          } finally {
            f = t = 0;
          }
        if (op[0] & 5)
          throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
      __name(step, "step");
    };
    var __await = exports && exports.__await || function(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    };
    var __asyncGenerator = exports && exports.__asyncGenerator || function(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []), i, q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
      }, i;
      function verb(n) {
        if (g[n])
          i[n] = function(v) {
            return new Promise(function(a, b) {
              q.push([
                n,
                v,
                a,
                b
              ]) > 1 || resume(n, v);
            });
          };
      }
      __name(verb, "verb");
      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }
      __name(resume, "resume");
      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }
      __name(step, "step");
      function fulfill(value) {
        resume("next", value);
      }
      __name(fulfill, "fulfill");
      function reject(value) {
        resume("throw", value);
      }
      __name(reject, "reject");
      function settle(f, v) {
        if (f(v), q.shift(), q.length)
          resume(q[0][0], q[0][1]);
      }
      __name(settle, "settle");
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isReadableStreamLike = exports.readableStreamLikeToAsyncGenerator = void 0;
    var isFunction_1 = require_isFunction();
    function readableStreamLikeToAsyncGenerator(readableStream) {
      return __asyncGenerator(this, arguments, /* @__PURE__ */ __name(function readableStreamLikeToAsyncGenerator_1() {
        var reader, _a, value, done;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              reader = readableStream.getReader();
              _b.label = 1;
            case 1:
              _b.trys.push([
                1,
                ,
                9,
                10
              ]);
              _b.label = 2;
            case 2:
              if (false)
                return [
                  3,
                  8
                ];
              return [
                4,
                __await(reader.read())
              ];
            case 3:
              _a = _b.sent(), value = _a.value, done = _a.done;
              if (!done)
                return [
                  3,
                  5
                ];
              return [
                4,
                __await(void 0)
              ];
            case 4:
              return [
                2,
                _b.sent()
              ];
            case 5:
              return [
                4,
                __await(value)
              ];
            case 6:
              return [
                4,
                _b.sent()
              ];
            case 7:
              _b.sent();
              return [
                3,
                2
              ];
            case 8:
              return [
                3,
                10
              ];
            case 9:
              reader.releaseLock();
              return [
                7
              ];
            case 10:
              return [
                2
              ];
          }
        });
      }, "readableStreamLikeToAsyncGenerator_1"));
    }
    __name(readableStreamLikeToAsyncGenerator, "readableStreamLikeToAsyncGenerator");
    exports.readableStreamLikeToAsyncGenerator = readableStreamLikeToAsyncGenerator;
    function isReadableStreamLike(obj) {
      return isFunction_1.isFunction(obj === null || obj === void 0 ? void 0 : obj.getReader);
    }
    __name(isReadableStreamLike, "isReadableStreamLike");
    exports.isReadableStreamLike = isReadableStreamLike;
  }
});

// node_modules/rxjs/dist/cjs/internal/observable/innerFrom.js
var require_innerFrom = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/observable/innerFrom.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      __name(adopt, "adopt");
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        __name(fulfilled, "fulfilled");
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        __name(rejected, "rejected");
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        __name(step, "step");
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([
            n,
            v
          ]);
        };
      }
      __name(verb, "verb");
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (_)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [
                op[0] & 2,
                t.value
              ];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };
              case 5:
                _.label++;
                y = op[1];
                op = [
                  0
                ];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2])
                  _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [
              6,
              e
            ];
            y = 0;
          } finally {
            f = t = 0;
          }
        if (op[0] & 5)
          throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
      __name(step, "step");
    };
    var __asyncValues = exports && exports.__asyncValues || function(o) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator], i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
      }, i);
      function verb(n) {
        i[n] = o[n] && function(v) {
          return new Promise(function(resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }
      __name(verb, "verb");
      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v2) {
          resolve({
            value: v2,
            done: d
          });
        }, reject);
      }
      __name(settle, "settle");
    };
    var __values = exports && exports.__values || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
        return m.call(o);
      if (o && typeof o.length === "number")
        return {
          next: function() {
            if (o && i >= o.length)
              o = void 0;
            return {
              value: o && o[i++],
              done: !o
            };
          }
        };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.fromReadableStreamLike = exports.fromAsyncIterable = exports.fromIterable = exports.fromPromise = exports.fromArrayLike = exports.fromInteropObservable = exports.innerFrom = void 0;
    var isArrayLike_1 = require_isArrayLike();
    var isPromise_1 = require_isPromise();
    var Observable_1 = require_Observable();
    var isInteropObservable_1 = require_isInteropObservable();
    var isAsyncIterable_1 = require_isAsyncIterable();
    var throwUnobservableError_1 = require_throwUnobservableError();
    var isIterable_1 = require_isIterable();
    var isReadableStreamLike_1 = require_isReadableStreamLike();
    var isFunction_1 = require_isFunction();
    var reportUnhandledError_1 = require_reportUnhandledError();
    var observable_1 = require_observable();
    function innerFrom(input) {
      if (input instanceof Observable_1.Observable) {
        return input;
      }
      if (input != null) {
        if (isInteropObservable_1.isInteropObservable(input)) {
          return fromInteropObservable(input);
        }
        if (isArrayLike_1.isArrayLike(input)) {
          return fromArrayLike(input);
        }
        if (isPromise_1.isPromise(input)) {
          return fromPromise(input);
        }
        if (isAsyncIterable_1.isAsyncIterable(input)) {
          return fromAsyncIterable(input);
        }
        if (isIterable_1.isIterable(input)) {
          return fromIterable(input);
        }
        if (isReadableStreamLike_1.isReadableStreamLike(input)) {
          return fromReadableStreamLike(input);
        }
      }
      throw throwUnobservableError_1.createInvalidObservableTypeError(input);
    }
    __name(innerFrom, "innerFrom");
    exports.innerFrom = innerFrom;
    function fromInteropObservable(obj) {
      return new Observable_1.Observable(function(subscriber) {
        var obs = obj[observable_1.observable]();
        if (isFunction_1.isFunction(obs.subscribe)) {
          return obs.subscribe(subscriber);
        }
        throw new TypeError("Provided object does not correctly implement Symbol.observable");
      });
    }
    __name(fromInteropObservable, "fromInteropObservable");
    exports.fromInteropObservable = fromInteropObservable;
    function fromArrayLike(array) {
      return new Observable_1.Observable(function(subscriber) {
        for (var i = 0; i < array.length && !subscriber.closed; i++) {
          subscriber.next(array[i]);
        }
        subscriber.complete();
      });
    }
    __name(fromArrayLike, "fromArrayLike");
    exports.fromArrayLike = fromArrayLike;
    function fromPromise(promise) {
      return new Observable_1.Observable(function(subscriber) {
        promise.then(function(value) {
          if (!subscriber.closed) {
            subscriber.next(value);
            subscriber.complete();
          }
        }, function(err) {
          return subscriber.error(err);
        }).then(null, reportUnhandledError_1.reportUnhandledError);
      });
    }
    __name(fromPromise, "fromPromise");
    exports.fromPromise = fromPromise;
    function fromIterable(iterable) {
      return new Observable_1.Observable(function(subscriber) {
        var e_1, _a;
        try {
          for (var iterable_1 = __values(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
            var value = iterable_1_1.value;
            subscriber.next(value);
            if (subscriber.closed) {
              return;
            }
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return))
              _a.call(iterable_1);
          } finally {
            if (e_1)
              throw e_1.error;
          }
        }
        subscriber.complete();
      });
    }
    __name(fromIterable, "fromIterable");
    exports.fromIterable = fromIterable;
    function fromAsyncIterable(asyncIterable) {
      return new Observable_1.Observable(function(subscriber) {
        process2(asyncIterable, subscriber).catch(function(err) {
          return subscriber.error(err);
        });
      });
    }
    __name(fromAsyncIterable, "fromAsyncIterable");
    exports.fromAsyncIterable = fromAsyncIterable;
    function fromReadableStreamLike(readableStream) {
      return fromAsyncIterable(isReadableStreamLike_1.readableStreamLikeToAsyncGenerator(readableStream));
    }
    __name(fromReadableStreamLike, "fromReadableStreamLike");
    exports.fromReadableStreamLike = fromReadableStreamLike;
    function process2(asyncIterable, subscriber) {
      var asyncIterable_1, asyncIterable_1_1;
      var e_2, _a;
      return __awaiter(this, void 0, void 0, function() {
        var value, e_2_1;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              _b.trys.push([
                0,
                5,
                6,
                11
              ]);
              asyncIterable_1 = __asyncValues(asyncIterable);
              _b.label = 1;
            case 1:
              return [
                4,
                asyncIterable_1.next()
              ];
            case 2:
              if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done))
                return [
                  3,
                  4
                ];
              value = asyncIterable_1_1.value;
              subscriber.next(value);
              if (subscriber.closed) {
                return [
                  2
                ];
              }
              _b.label = 3;
            case 3:
              return [
                3,
                1
              ];
            case 4:
              return [
                3,
                11
              ];
            case 5:
              e_2_1 = _b.sent();
              e_2 = {
                error: e_2_1
              };
              return [
                3,
                11
              ];
            case 6:
              _b.trys.push([
                6,
                ,
                9,
                10
              ]);
              if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return)))
                return [
                  3,
                  8
                ];
              return [
                4,
                _a.call(asyncIterable_1)
              ];
            case 7:
              _b.sent();
              _b.label = 8;
            case 8:
              return [
                3,
                10
              ];
            case 9:
              if (e_2)
                throw e_2.error;
              return [
                7
              ];
            case 10:
              return [
                7
              ];
            case 11:
              subscriber.complete();
              return [
                2
              ];
          }
        });
      });
    }
    __name(process2, "process");
  }
});

// node_modules/rxjs/dist/cjs/internal/util/executeSchedule.js
var require_executeSchedule = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/util/executeSchedule.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.executeSchedule = void 0;
    function executeSchedule(parentSubscription, scheduler, work, delay, repeat) {
      if (delay === void 0) {
        delay = 0;
      }
      if (repeat === void 0) {
        repeat = false;
      }
      var scheduleSubscription = scheduler.schedule(function() {
        work();
        if (repeat) {
          parentSubscription.add(this.schedule(null, delay));
        } else {
          this.unsubscribe();
        }
      }, delay);
      parentSubscription.add(scheduleSubscription);
      if (!repeat) {
        return scheduleSubscription;
      }
    }
    __name(executeSchedule, "executeSchedule");
    exports.executeSchedule = executeSchedule;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/observeOn.js
var require_observeOn = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/observeOn.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.observeOn = void 0;
    var executeSchedule_1 = require_executeSchedule();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function observeOn(scheduler, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      return lift_1.operate(function(source, subscriber) {
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          return executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
            return subscriber.next(value);
          }, delay);
        }, function() {
          return executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
            return subscriber.complete();
          }, delay);
        }, function(err) {
          return executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
            return subscriber.error(err);
          }, delay);
        }));
      });
    }
    __name(observeOn, "observeOn");
    exports.observeOn = observeOn;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/subscribeOn.js
var require_subscribeOn = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/subscribeOn.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.subscribeOn = void 0;
    var lift_1 = require_lift();
    function subscribeOn(scheduler, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      return lift_1.operate(function(source, subscriber) {
        subscriber.add(scheduler.schedule(function() {
          return source.subscribe(subscriber);
        }, delay));
      });
    }
    __name(subscribeOn, "subscribeOn");
    exports.subscribeOn = subscribeOn;
  }
});

// node_modules/rxjs/dist/cjs/internal/scheduled/scheduleObservable.js
var require_scheduleObservable = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/scheduled/scheduleObservable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.scheduleObservable = void 0;
    var innerFrom_1 = require_innerFrom();
    var observeOn_1 = require_observeOn();
    var subscribeOn_1 = require_subscribeOn();
    function scheduleObservable(input, scheduler) {
      return innerFrom_1.innerFrom(input).pipe(subscribeOn_1.subscribeOn(scheduler), observeOn_1.observeOn(scheduler));
    }
    __name(scheduleObservable, "scheduleObservable");
    exports.scheduleObservable = scheduleObservable;
  }
});

// node_modules/rxjs/dist/cjs/internal/scheduled/schedulePromise.js
var require_schedulePromise = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/scheduled/schedulePromise.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.schedulePromise = void 0;
    var innerFrom_1 = require_innerFrom();
    var observeOn_1 = require_observeOn();
    var subscribeOn_1 = require_subscribeOn();
    function schedulePromise(input, scheduler) {
      return innerFrom_1.innerFrom(input).pipe(subscribeOn_1.subscribeOn(scheduler), observeOn_1.observeOn(scheduler));
    }
    __name(schedulePromise, "schedulePromise");
    exports.schedulePromise = schedulePromise;
  }
});

// node_modules/rxjs/dist/cjs/internal/scheduled/scheduleArray.js
var require_scheduleArray = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/scheduled/scheduleArray.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.scheduleArray = void 0;
    var Observable_1 = require_Observable();
    function scheduleArray(input, scheduler) {
      return new Observable_1.Observable(function(subscriber) {
        var i = 0;
        return scheduler.schedule(function() {
          if (i === input.length) {
            subscriber.complete();
          } else {
            subscriber.next(input[i++]);
            if (!subscriber.closed) {
              this.schedule();
            }
          }
        });
      });
    }
    __name(scheduleArray, "scheduleArray");
    exports.scheduleArray = scheduleArray;
  }
});

// node_modules/rxjs/dist/cjs/internal/scheduled/scheduleIterable.js
var require_scheduleIterable = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/scheduled/scheduleIterable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.scheduleIterable = void 0;
    var Observable_1 = require_Observable();
    var iterator_1 = require_iterator();
    var isFunction_1 = require_isFunction();
    var executeSchedule_1 = require_executeSchedule();
    function scheduleIterable(input, scheduler) {
      return new Observable_1.Observable(function(subscriber) {
        var iterator;
        executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
          iterator = input[iterator_1.iterator]();
          executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
            var _a;
            var value;
            var done;
            try {
              _a = iterator.next(), value = _a.value, done = _a.done;
            } catch (err) {
              subscriber.error(err);
              return;
            }
            if (done) {
              subscriber.complete();
            } else {
              subscriber.next(value);
            }
          }, 0, true);
        });
        return function() {
          return isFunction_1.isFunction(iterator === null || iterator === void 0 ? void 0 : iterator.return) && iterator.return();
        };
      });
    }
    __name(scheduleIterable, "scheduleIterable");
    exports.scheduleIterable = scheduleIterable;
  }
});

// node_modules/rxjs/dist/cjs/internal/scheduled/scheduleAsyncIterable.js
var require_scheduleAsyncIterable = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/scheduled/scheduleAsyncIterable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.scheduleAsyncIterable = void 0;
    var Observable_1 = require_Observable();
    var executeSchedule_1 = require_executeSchedule();
    function scheduleAsyncIterable(input, scheduler) {
      if (!input) {
        throw new Error("Iterable cannot be null");
      }
      return new Observable_1.Observable(function(subscriber) {
        executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
          var iterator = input[Symbol.asyncIterator]();
          executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
            iterator.next().then(function(result) {
              if (result.done) {
                subscriber.complete();
              } else {
                subscriber.next(result.value);
              }
            });
          }, 0, true);
        });
      });
    }
    __name(scheduleAsyncIterable, "scheduleAsyncIterable");
    exports.scheduleAsyncIterable = scheduleAsyncIterable;
  }
});

// node_modules/rxjs/dist/cjs/internal/scheduled/scheduleReadableStreamLike.js
var require_scheduleReadableStreamLike = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/scheduled/scheduleReadableStreamLike.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.scheduleReadableStreamLike = void 0;
    var scheduleAsyncIterable_1 = require_scheduleAsyncIterable();
    var isReadableStreamLike_1 = require_isReadableStreamLike();
    function scheduleReadableStreamLike(input, scheduler) {
      return scheduleAsyncIterable_1.scheduleAsyncIterable(isReadableStreamLike_1.readableStreamLikeToAsyncGenerator(input), scheduler);
    }
    __name(scheduleReadableStreamLike, "scheduleReadableStreamLike");
    exports.scheduleReadableStreamLike = scheduleReadableStreamLike;
  }
});

// node_modules/rxjs/dist/cjs/internal/scheduled/scheduled.js
var require_scheduled = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/scheduled/scheduled.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.scheduled = void 0;
    var scheduleObservable_1 = require_scheduleObservable();
    var schedulePromise_1 = require_schedulePromise();
    var scheduleArray_1 = require_scheduleArray();
    var scheduleIterable_1 = require_scheduleIterable();
    var scheduleAsyncIterable_1 = require_scheduleAsyncIterable();
    var isInteropObservable_1 = require_isInteropObservable();
    var isPromise_1 = require_isPromise();
    var isArrayLike_1 = require_isArrayLike();
    var isIterable_1 = require_isIterable();
    var isAsyncIterable_1 = require_isAsyncIterable();
    var throwUnobservableError_1 = require_throwUnobservableError();
    var isReadableStreamLike_1 = require_isReadableStreamLike();
    var scheduleReadableStreamLike_1 = require_scheduleReadableStreamLike();
    function scheduled(input, scheduler) {
      if (input != null) {
        if (isInteropObservable_1.isInteropObservable(input)) {
          return scheduleObservable_1.scheduleObservable(input, scheduler);
        }
        if (isArrayLike_1.isArrayLike(input)) {
          return scheduleArray_1.scheduleArray(input, scheduler);
        }
        if (isPromise_1.isPromise(input)) {
          return schedulePromise_1.schedulePromise(input, scheduler);
        }
        if (isAsyncIterable_1.isAsyncIterable(input)) {
          return scheduleAsyncIterable_1.scheduleAsyncIterable(input, scheduler);
        }
        if (isIterable_1.isIterable(input)) {
          return scheduleIterable_1.scheduleIterable(input, scheduler);
        }
        if (isReadableStreamLike_1.isReadableStreamLike(input)) {
          return scheduleReadableStreamLike_1.scheduleReadableStreamLike(input, scheduler);
        }
      }
      throw throwUnobservableError_1.createInvalidObservableTypeError(input);
    }
    __name(scheduled, "scheduled");
    exports.scheduled = scheduled;
  }
});

// node_modules/rxjs/dist/cjs/internal/observable/from.js
var require_from = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/observable/from.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.from = void 0;
    var scheduled_1 = require_scheduled();
    var innerFrom_1 = require_innerFrom();
    function from(input, scheduler) {
      return scheduler ? scheduled_1.scheduled(input, scheduler) : innerFrom_1.innerFrom(input);
    }
    __name(from, "from");
    exports.from = from;
  }
});

// node_modules/rxjs/dist/cjs/internal/observable/of.js
var require_of = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/observable/of.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.of = void 0;
    var args_1 = require_args();
    var from_1 = require_from();
    function of() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var scheduler = args_1.popScheduler(args);
      return from_1.from(args, scheduler);
    }
    __name(of, "of");
    exports.of = of;
  }
});

// node_modules/rxjs/dist/cjs/internal/observable/throwError.js
var require_throwError = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/observable/throwError.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.throwError = void 0;
    var Observable_1 = require_Observable();
    var isFunction_1 = require_isFunction();
    function throwError(errorOrErrorFactory, scheduler) {
      var errorFactory = isFunction_1.isFunction(errorOrErrorFactory) ? errorOrErrorFactory : function() {
        return errorOrErrorFactory;
      };
      var init = /* @__PURE__ */ __name(function(subscriber) {
        return subscriber.error(errorFactory());
      }, "init");
      return new Observable_1.Observable(scheduler ? function(subscriber) {
        return scheduler.schedule(init, 0, subscriber);
      } : init);
    }
    __name(throwError, "throwError");
    exports.throwError = throwError;
  }
});

// node_modules/rxjs/dist/cjs/internal/Notification.js
var require_Notification = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/Notification.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.observeNotification = exports.Notification = exports.NotificationKind = void 0;
    var empty_1 = require_empty();
    var of_1 = require_of();
    var throwError_1 = require_throwError();
    var isFunction_1 = require_isFunction();
    var NotificationKind;
    (function(NotificationKind2) {
      NotificationKind2["NEXT"] = "N";
      NotificationKind2["ERROR"] = "E";
      NotificationKind2["COMPLETE"] = "C";
    })(NotificationKind = exports.NotificationKind || (exports.NotificationKind = {}));
    var Notification = function() {
      function Notification2(kind, value, error) {
        this.kind = kind;
        this.value = value;
        this.error = error;
        this.hasValue = kind === "N";
      }
      __name(Notification2, "Notification");
      Notification2.prototype.observe = function(observer) {
        return observeNotification(this, observer);
      };
      Notification2.prototype.do = function(nextHandler, errorHandler, completeHandler) {
        var _a = this, kind = _a.kind, value = _a.value, error = _a.error;
        return kind === "N" ? nextHandler === null || nextHandler === void 0 ? void 0 : nextHandler(value) : kind === "E" ? errorHandler === null || errorHandler === void 0 ? void 0 : errorHandler(error) : completeHandler === null || completeHandler === void 0 ? void 0 : completeHandler();
      };
      Notification2.prototype.accept = function(nextOrObserver, error, complete) {
        var _a;
        return isFunction_1.isFunction((_a = nextOrObserver) === null || _a === void 0 ? void 0 : _a.next) ? this.observe(nextOrObserver) : this.do(nextOrObserver, error, complete);
      };
      Notification2.prototype.toObservable = function() {
        var _a = this, kind = _a.kind, value = _a.value, error = _a.error;
        var result = kind === "N" ? of_1.of(value) : kind === "E" ? throwError_1.throwError(function() {
          return error;
        }) : kind === "C" ? empty_1.EMPTY : 0;
        if (!result) {
          throw new TypeError("Unexpected notification kind " + kind);
        }
        return result;
      };
      Notification2.createNext = function(value) {
        return new Notification2("N", value);
      };
      Notification2.createError = function(err) {
        return new Notification2("E", void 0, err);
      };
      Notification2.createComplete = function() {
        return Notification2.completeNotification;
      };
      Notification2.completeNotification = new Notification2("C");
      return Notification2;
    }();
    exports.Notification = Notification;
    function observeNotification(notification, observer) {
      var _a, _b, _c;
      var _d = notification, kind = _d.kind, value = _d.value, error = _d.error;
      if (typeof kind !== "string") {
        throw new TypeError('Invalid notification, missing "kind"');
      }
      kind === "N" ? (_a = observer.next) === null || _a === void 0 ? void 0 : _a.call(observer, value) : kind === "E" ? (_b = observer.error) === null || _b === void 0 ? void 0 : _b.call(observer, error) : (_c = observer.complete) === null || _c === void 0 ? void 0 : _c.call(observer);
    }
    __name(observeNotification, "observeNotification");
    exports.observeNotification = observeNotification;
  }
});

// node_modules/rxjs/dist/cjs/internal/util/isObservable.js
var require_isObservable = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/util/isObservable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isObservable = void 0;
    var Observable_1 = require_Observable();
    var isFunction_1 = require_isFunction();
    function isObservable(obj) {
      return !!obj && (obj instanceof Observable_1.Observable || isFunction_1.isFunction(obj.lift) && isFunction_1.isFunction(obj.subscribe));
    }
    __name(isObservable, "isObservable");
    exports.isObservable = isObservable;
  }
});

// node_modules/rxjs/dist/cjs/internal/util/EmptyError.js
var require_EmptyError = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/util/EmptyError.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.EmptyError = void 0;
    var createErrorClass_1 = require_createErrorClass();
    exports.EmptyError = createErrorClass_1.createErrorClass(function(_super) {
      return /* @__PURE__ */ __name(function EmptyErrorImpl() {
        _super(this);
        this.name = "EmptyError";
        this.message = "no elements in sequence";
      }, "EmptyErrorImpl");
    });
  }
});

// node_modules/rxjs/dist/cjs/internal/lastValueFrom.js
var require_lastValueFrom = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/lastValueFrom.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.lastValueFrom = void 0;
    var EmptyError_1 = require_EmptyError();
    function lastValueFrom(source, config2) {
      var hasConfig = typeof config2 === "object";
      return new Promise(function(resolve, reject) {
        var _hasValue = false;
        var _value;
        source.subscribe({
          next: function(value) {
            _value = value;
            _hasValue = true;
          },
          error: reject,
          complete: function() {
            if (_hasValue) {
              resolve(_value);
            } else if (hasConfig) {
              resolve(config2.defaultValue);
            } else {
              reject(new EmptyError_1.EmptyError());
            }
          }
        });
      });
    }
    __name(lastValueFrom, "lastValueFrom");
    exports.lastValueFrom = lastValueFrom;
  }
});

// node_modules/rxjs/dist/cjs/internal/firstValueFrom.js
var require_firstValueFrom = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/firstValueFrom.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.firstValueFrom = void 0;
    var EmptyError_1 = require_EmptyError();
    var Subscriber_1 = require_Subscriber();
    function firstValueFrom(source, config2) {
      var hasConfig = typeof config2 === "object";
      return new Promise(function(resolve, reject) {
        var subscriber = new Subscriber_1.SafeSubscriber({
          next: function(value) {
            resolve(value);
            subscriber.unsubscribe();
          },
          error: reject,
          complete: function() {
            if (hasConfig) {
              resolve(config2.defaultValue);
            } else {
              reject(new EmptyError_1.EmptyError());
            }
          }
        });
        source.subscribe(subscriber);
      });
    }
    __name(firstValueFrom, "firstValueFrom");
    exports.firstValueFrom = firstValueFrom;
  }
});

// node_modules/rxjs/dist/cjs/internal/util/ArgumentOutOfRangeError.js
var require_ArgumentOutOfRangeError = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/util/ArgumentOutOfRangeError.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ArgumentOutOfRangeError = void 0;
    var createErrorClass_1 = require_createErrorClass();
    exports.ArgumentOutOfRangeError = createErrorClass_1.createErrorClass(function(_super) {
      return /* @__PURE__ */ __name(function ArgumentOutOfRangeErrorImpl() {
        _super(this);
        this.name = "ArgumentOutOfRangeError";
        this.message = "argument out of range";
      }, "ArgumentOutOfRangeErrorImpl");
    });
  }
});

// node_modules/rxjs/dist/cjs/internal/util/NotFoundError.js
var require_NotFoundError = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/util/NotFoundError.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.NotFoundError = void 0;
    var createErrorClass_1 = require_createErrorClass();
    exports.NotFoundError = createErrorClass_1.createErrorClass(function(_super) {
      return /* @__PURE__ */ __name(function NotFoundErrorImpl(message) {
        _super(this);
        this.name = "NotFoundError";
        this.message = message;
      }, "NotFoundErrorImpl");
    });
  }
});

// node_modules/rxjs/dist/cjs/internal/util/SequenceError.js
var require_SequenceError = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/util/SequenceError.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.SequenceError = void 0;
    var createErrorClass_1 = require_createErrorClass();
    exports.SequenceError = createErrorClass_1.createErrorClass(function(_super) {
      return /* @__PURE__ */ __name(function SequenceErrorImpl(message) {
        _super(this);
        this.name = "SequenceError";
        this.message = message;
      }, "SequenceErrorImpl");
    });
  }
});

// node_modules/rxjs/dist/cjs/internal/util/isDate.js
var require_isDate = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/util/isDate.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isValidDate = void 0;
    function isValidDate(value) {
      return value instanceof Date && !isNaN(value);
    }
    __name(isValidDate, "isValidDate");
    exports.isValidDate = isValidDate;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/timeout.js
var require_timeout = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/timeout.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.timeout = exports.TimeoutError = void 0;
    var async_1 = require_async();
    var isDate_1 = require_isDate();
    var lift_1 = require_lift();
    var innerFrom_1 = require_innerFrom();
    var createErrorClass_1 = require_createErrorClass();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var executeSchedule_1 = require_executeSchedule();
    exports.TimeoutError = createErrorClass_1.createErrorClass(function(_super) {
      return /* @__PURE__ */ __name(function TimeoutErrorImpl(info) {
        if (info === void 0) {
          info = null;
        }
        _super(this);
        this.message = "Timeout has occurred";
        this.name = "TimeoutError";
        this.info = info;
      }, "TimeoutErrorImpl");
    });
    function timeout(config2, schedulerArg) {
      var _a = isDate_1.isValidDate(config2) ? {
        first: config2
      } : typeof config2 === "number" ? {
        each: config2
      } : config2, first = _a.first, each = _a.each, _b = _a.with, _with = _b === void 0 ? timeoutErrorFactory : _b, _c = _a.scheduler, scheduler = _c === void 0 ? schedulerArg !== null && schedulerArg !== void 0 ? schedulerArg : async_1.asyncScheduler : _c, _d = _a.meta, meta = _d === void 0 ? null : _d;
      if (first == null && each == null) {
        throw new TypeError("No timeout provided.");
      }
      return lift_1.operate(function(source, subscriber) {
        var originalSourceSubscription;
        var timerSubscription;
        var lastValue = null;
        var seen = 0;
        var startTimer = /* @__PURE__ */ __name(function(delay) {
          timerSubscription = executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
            try {
              originalSourceSubscription.unsubscribe();
              innerFrom_1.innerFrom(_with({
                meta,
                lastValue,
                seen
              })).subscribe(subscriber);
            } catch (err) {
              subscriber.error(err);
            }
          }, delay);
        }, "startTimer");
        originalSourceSubscription = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          timerSubscription === null || timerSubscription === void 0 ? void 0 : timerSubscription.unsubscribe();
          seen++;
          subscriber.next(lastValue = value);
          each > 0 && startTimer(each);
        }, void 0, void 0, function() {
          if (!(timerSubscription === null || timerSubscription === void 0 ? void 0 : timerSubscription.closed)) {
            timerSubscription === null || timerSubscription === void 0 ? void 0 : timerSubscription.unsubscribe();
          }
          lastValue = null;
        }));
        !seen && startTimer(first != null ? typeof first === "number" ? first : +first - scheduler.now() : each);
      });
    }
    __name(timeout, "timeout");
    exports.timeout = timeout;
    function timeoutErrorFactory(info) {
      throw new exports.TimeoutError(info);
    }
    __name(timeoutErrorFactory, "timeoutErrorFactory");
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/map.js
var require_map = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/map.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.map = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function map(project, thisArg) {
      return lift_1.operate(function(source, subscriber) {
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          subscriber.next(project.call(thisArg, value, index++));
        }));
      });
    }
    __name(map, "map");
    exports.map = map;
  }
});

// node_modules/rxjs/dist/cjs/internal/util/mapOneOrManyArgs.js
var require_mapOneOrManyArgs = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/util/mapOneOrManyArgs.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = {
          error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.mapOneOrManyArgs = void 0;
    var map_1 = require_map();
    var isArray = Array.isArray;
    function callOrApply(fn, args) {
      return isArray(args) ? fn.apply(void 0, __spreadArray([], __read(args))) : fn(args);
    }
    __name(callOrApply, "callOrApply");
    function mapOneOrManyArgs(fn) {
      return map_1.map(function(args) {
        return callOrApply(fn, args);
      });
    }
    __name(mapOneOrManyArgs, "mapOneOrManyArgs");
    exports.mapOneOrManyArgs = mapOneOrManyArgs;
  }
});

// node_modules/rxjs/dist/cjs/internal/observable/bindCallbackInternals.js
var require_bindCallbackInternals = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/observable/bindCallbackInternals.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = {
          error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.bindCallbackInternals = void 0;
    var isScheduler_1 = require_isScheduler();
    var Observable_1 = require_Observable();
    var subscribeOn_1 = require_subscribeOn();
    var mapOneOrManyArgs_1 = require_mapOneOrManyArgs();
    var observeOn_1 = require_observeOn();
    var AsyncSubject_1 = require_AsyncSubject();
    function bindCallbackInternals(isNodeStyle, callbackFunc, resultSelector, scheduler) {
      if (resultSelector) {
        if (isScheduler_1.isScheduler(resultSelector)) {
          scheduler = resultSelector;
        } else {
          return function() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            return bindCallbackInternals(isNodeStyle, callbackFunc, scheduler).apply(this, args).pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector));
          };
        }
      }
      if (scheduler) {
        return function() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          return bindCallbackInternals(isNodeStyle, callbackFunc).apply(this, args).pipe(subscribeOn_1.subscribeOn(scheduler), observeOn_1.observeOn(scheduler));
        };
      }
      return function() {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var subject = new AsyncSubject_1.AsyncSubject();
        var uninitialized = true;
        return new Observable_1.Observable(function(subscriber) {
          var subs = subject.subscribe(subscriber);
          if (uninitialized) {
            uninitialized = false;
            var isAsync_1 = false;
            var isComplete_1 = false;
            callbackFunc.apply(_this, __spreadArray(__spreadArray([], __read(args)), [
              function() {
                var results = [];
                for (var _i2 = 0; _i2 < arguments.length; _i2++) {
                  results[_i2] = arguments[_i2];
                }
                if (isNodeStyle) {
                  var err = results.shift();
                  if (err != null) {
                    subject.error(err);
                    return;
                  }
                }
                subject.next(1 < results.length ? results : results[0]);
                isComplete_1 = true;
                if (isAsync_1) {
                  subject.complete();
                }
              }
            ]));
            if (isComplete_1) {
              subject.complete();
            }
            isAsync_1 = true;
          }
          return subs;
        });
      };
    }
    __name(bindCallbackInternals, "bindCallbackInternals");
    exports.bindCallbackInternals = bindCallbackInternals;
  }
});

// node_modules/rxjs/dist/cjs/internal/observable/bindCallback.js
var require_bindCallback = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/observable/bindCallback.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.bindCallback = void 0;
    var bindCallbackInternals_1 = require_bindCallbackInternals();
    function bindCallback(callbackFunc, resultSelector, scheduler) {
      return bindCallbackInternals_1.bindCallbackInternals(false, callbackFunc, resultSelector, scheduler);
    }
    __name(bindCallback, "bindCallback");
    exports.bindCallback = bindCallback;
  }
});

// node_modules/rxjs/dist/cjs/internal/observable/bindNodeCallback.js
var require_bindNodeCallback = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/observable/bindNodeCallback.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.bindNodeCallback = void 0;
    var bindCallbackInternals_1 = require_bindCallbackInternals();
    function bindNodeCallback(callbackFunc, resultSelector, scheduler) {
      return bindCallbackInternals_1.bindCallbackInternals(true, callbackFunc, resultSelector, scheduler);
    }
    __name(bindNodeCallback, "bindNodeCallback");
    exports.bindNodeCallback = bindNodeCallback;
  }
});

// node_modules/rxjs/dist/cjs/internal/util/argsArgArrayOrObject.js
var require_argsArgArrayOrObject = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/util/argsArgArrayOrObject.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.argsArgArrayOrObject = void 0;
    var isArray = Array.isArray;
    var getPrototypeOf = Object.getPrototypeOf;
    var objectProto = Object.prototype;
    var getKeys = Object.keys;
    function argsArgArrayOrObject(args) {
      if (args.length === 1) {
        var first_1 = args[0];
        if (isArray(first_1)) {
          return {
            args: first_1,
            keys: null
          };
        }
        if (isPOJO(first_1)) {
          var keys = getKeys(first_1);
          return {
            args: keys.map(function(key) {
              return first_1[key];
            }),
            keys
          };
        }
      }
      return {
        args,
        keys: null
      };
    }
    __name(argsArgArrayOrObject, "argsArgArrayOrObject");
    exports.argsArgArrayOrObject = argsArgArrayOrObject;
    function isPOJO(obj) {
      return obj && typeof obj === "object" && getPrototypeOf(obj) === objectProto;
    }
    __name(isPOJO, "isPOJO");
  }
});

// node_modules/rxjs/dist/cjs/internal/util/createObject.js
var require_createObject = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/util/createObject.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.createObject = void 0;
    function createObject(keys, values) {
      return keys.reduce(function(result, key, i) {
        return result[key] = values[i], result;
      }, {});
    }
    __name(createObject, "createObject");
    exports.createObject = createObject;
  }
});

// node_modules/rxjs/dist/cjs/internal/observable/combineLatest.js
var require_combineLatest = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/observable/combineLatest.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.combineLatestInit = exports.combineLatest = void 0;
    var Observable_1 = require_Observable();
    var argsArgArrayOrObject_1 = require_argsArgArrayOrObject();
    var from_1 = require_from();
    var identity_1 = require_identity();
    var mapOneOrManyArgs_1 = require_mapOneOrManyArgs();
    var args_1 = require_args();
    var createObject_1 = require_createObject();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var executeSchedule_1 = require_executeSchedule();
    function combineLatest() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var scheduler = args_1.popScheduler(args);
      var resultSelector = args_1.popResultSelector(args);
      var _a = argsArgArrayOrObject_1.argsArgArrayOrObject(args), observables = _a.args, keys = _a.keys;
      if (observables.length === 0) {
        return from_1.from([], scheduler);
      }
      var result = new Observable_1.Observable(combineLatestInit(observables, scheduler, keys ? function(values) {
        return createObject_1.createObject(keys, values);
      } : identity_1.identity));
      return resultSelector ? result.pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector)) : result;
    }
    __name(combineLatest, "combineLatest");
    exports.combineLatest = combineLatest;
    function combineLatestInit(observables, scheduler, valueTransform) {
      if (valueTransform === void 0) {
        valueTransform = identity_1.identity;
      }
      return function(subscriber) {
        maybeSchedule(scheduler, function() {
          var length = observables.length;
          var values = new Array(length);
          var active = length;
          var remainingFirstValues = length;
          var _loop_1 = /* @__PURE__ */ __name(function(i2) {
            maybeSchedule(scheduler, function() {
              var source = from_1.from(observables[i2], scheduler);
              var hasFirstValue = false;
              source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
                values[i2] = value;
                if (!hasFirstValue) {
                  hasFirstValue = true;
                  remainingFirstValues--;
                }
                if (!remainingFirstValues) {
                  subscriber.next(valueTransform(values.slice()));
                }
              }, function() {
                if (!--active) {
                  subscriber.complete();
                }
              }));
            }, subscriber);
          }, "_loop_1");
          for (var i = 0; i < length; i++) {
            _loop_1(i);
          }
        }, subscriber);
      };
    }
    __name(combineLatestInit, "combineLatestInit");
    exports.combineLatestInit = combineLatestInit;
    function maybeSchedule(scheduler, execute, subscription) {
      if (scheduler) {
        executeSchedule_1.executeSchedule(subscription, scheduler, execute);
      } else {
        execute();
      }
    }
    __name(maybeSchedule, "maybeSchedule");
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/mergeInternals.js
var require_mergeInternals = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/mergeInternals.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.mergeInternals = void 0;
    var innerFrom_1 = require_innerFrom();
    var executeSchedule_1 = require_executeSchedule();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function mergeInternals(source, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalFinalizer) {
      var buffer = [];
      var active = 0;
      var index = 0;
      var isComplete = false;
      var checkComplete = /* @__PURE__ */ __name(function() {
        if (isComplete && !buffer.length && !active) {
          subscriber.complete();
        }
      }, "checkComplete");
      var outerNext = /* @__PURE__ */ __name(function(value) {
        return active < concurrent ? doInnerSub(value) : buffer.push(value);
      }, "outerNext");
      var doInnerSub = /* @__PURE__ */ __name(function(value) {
        expand && subscriber.next(value);
        active++;
        var innerComplete = false;
        innerFrom_1.innerFrom(project(value, index++)).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(innerValue) {
          onBeforeNext === null || onBeforeNext === void 0 ? void 0 : onBeforeNext(innerValue);
          if (expand) {
            outerNext(innerValue);
          } else {
            subscriber.next(innerValue);
          }
        }, function() {
          innerComplete = true;
        }, void 0, function() {
          if (innerComplete) {
            try {
              active--;
              var _loop_1 = /* @__PURE__ */ __name(function() {
                var bufferedValue = buffer.shift();
                if (innerSubScheduler) {
                  executeSchedule_1.executeSchedule(subscriber, innerSubScheduler, function() {
                    return doInnerSub(bufferedValue);
                  });
                } else {
                  doInnerSub(bufferedValue);
                }
              }, "_loop_1");
              while (buffer.length && active < concurrent) {
                _loop_1();
              }
              checkComplete();
            } catch (err) {
              subscriber.error(err);
            }
          }
        }));
      }, "doInnerSub");
      source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, outerNext, function() {
        isComplete = true;
        checkComplete();
      }));
      return function() {
        additionalFinalizer === null || additionalFinalizer === void 0 ? void 0 : additionalFinalizer();
      };
    }
    __name(mergeInternals, "mergeInternals");
    exports.mergeInternals = mergeInternals;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/mergeMap.js
var require_mergeMap = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/mergeMap.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.mergeMap = void 0;
    var map_1 = require_map();
    var innerFrom_1 = require_innerFrom();
    var lift_1 = require_lift();
    var mergeInternals_1 = require_mergeInternals();
    var isFunction_1 = require_isFunction();
    function mergeMap(project, resultSelector, concurrent) {
      if (concurrent === void 0) {
        concurrent = Infinity;
      }
      if (isFunction_1.isFunction(resultSelector)) {
        return mergeMap(function(a, i) {
          return map_1.map(function(b, ii) {
            return resultSelector(a, b, i, ii);
          })(innerFrom_1.innerFrom(project(a, i)));
        }, concurrent);
      } else if (typeof resultSelector === "number") {
        concurrent = resultSelector;
      }
      return lift_1.operate(function(source, subscriber) {
        return mergeInternals_1.mergeInternals(source, subscriber, project, concurrent);
      });
    }
    __name(mergeMap, "mergeMap");
    exports.mergeMap = mergeMap;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/mergeAll.js
var require_mergeAll = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/mergeAll.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.mergeAll = void 0;
    var mergeMap_1 = require_mergeMap();
    var identity_1 = require_identity();
    function mergeAll(concurrent) {
      if (concurrent === void 0) {
        concurrent = Infinity;
      }
      return mergeMap_1.mergeMap(identity_1.identity, concurrent);
    }
    __name(mergeAll, "mergeAll");
    exports.mergeAll = mergeAll;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/concatAll.js
var require_concatAll = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/concatAll.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.concatAll = void 0;
    var mergeAll_1 = require_mergeAll();
    function concatAll() {
      return mergeAll_1.mergeAll(1);
    }
    __name(concatAll, "concatAll");
    exports.concatAll = concatAll;
  }
});

// node_modules/rxjs/dist/cjs/internal/observable/concat.js
var require_concat = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/observable/concat.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.concat = void 0;
    var concatAll_1 = require_concatAll();
    var args_1 = require_args();
    var from_1 = require_from();
    function concat() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return concatAll_1.concatAll()(from_1.from(args, args_1.popScheduler(args)));
    }
    __name(concat, "concat");
    exports.concat = concat;
  }
});

// node_modules/rxjs/dist/cjs/internal/observable/defer.js
var require_defer = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/observable/defer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.defer = void 0;
    var Observable_1 = require_Observable();
    var innerFrom_1 = require_innerFrom();
    function defer(observableFactory) {
      return new Observable_1.Observable(function(subscriber) {
        innerFrom_1.innerFrom(observableFactory()).subscribe(subscriber);
      });
    }
    __name(defer, "defer");
    exports.defer = defer;
  }
});

// node_modules/rxjs/dist/cjs/internal/observable/connectable.js
var require_connectable = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/observable/connectable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.connectable = void 0;
    var Subject_1 = require_Subject();
    var Observable_1 = require_Observable();
    var defer_1 = require_defer();
    var DEFAULT_CONFIG = {
      connector: function() {
        return new Subject_1.Subject();
      },
      resetOnDisconnect: true
    };
    function connectable(source, config2) {
      if (config2 === void 0) {
        config2 = DEFAULT_CONFIG;
      }
      var connection = null;
      var connector = config2.connector, _a = config2.resetOnDisconnect, resetOnDisconnect = _a === void 0 ? true : _a;
      var subject = connector();
      var result = new Observable_1.Observable(function(subscriber) {
        return subject.subscribe(subscriber);
      });
      result.connect = function() {
        if (!connection || connection.closed) {
          connection = defer_1.defer(function() {
            return source;
          }).subscribe(subject);
          if (resetOnDisconnect) {
            connection.add(function() {
              return subject = connector();
            });
          }
        }
        return connection;
      };
      return result;
    }
    __name(connectable, "connectable");
    exports.connectable = connectable;
  }
});

// node_modules/rxjs/dist/cjs/internal/observable/forkJoin.js
var require_forkJoin = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/observable/forkJoin.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.forkJoin = void 0;
    var Observable_1 = require_Observable();
    var argsArgArrayOrObject_1 = require_argsArgArrayOrObject();
    var innerFrom_1 = require_innerFrom();
    var args_1 = require_args();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var mapOneOrManyArgs_1 = require_mapOneOrManyArgs();
    var createObject_1 = require_createObject();
    function forkJoin() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var resultSelector = args_1.popResultSelector(args);
      var _a = argsArgArrayOrObject_1.argsArgArrayOrObject(args), sources = _a.args, keys = _a.keys;
      var result = new Observable_1.Observable(function(subscriber) {
        var length = sources.length;
        if (!length) {
          subscriber.complete();
          return;
        }
        var values = new Array(length);
        var remainingCompletions = length;
        var remainingEmissions = length;
        var _loop_1 = /* @__PURE__ */ __name(function(sourceIndex2) {
          var hasValue = false;
          innerFrom_1.innerFrom(sources[sourceIndex2]).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            if (!hasValue) {
              hasValue = true;
              remainingEmissions--;
            }
            values[sourceIndex2] = value;
          }, function() {
            return remainingCompletions--;
          }, void 0, function() {
            if (!remainingCompletions || !hasValue) {
              if (!remainingEmissions) {
                subscriber.next(keys ? createObject_1.createObject(keys, values) : values);
              }
              subscriber.complete();
            }
          }));
        }, "_loop_1");
        for (var sourceIndex = 0; sourceIndex < length; sourceIndex++) {
          _loop_1(sourceIndex);
        }
      });
      return resultSelector ? result.pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector)) : result;
    }
    __name(forkJoin, "forkJoin");
    exports.forkJoin = forkJoin;
  }
});

// node_modules/rxjs/dist/cjs/internal/observable/fromEvent.js
var require_fromEvent = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/observable/fromEvent.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = {
          error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.fromEvent = void 0;
    var innerFrom_1 = require_innerFrom();
    var Observable_1 = require_Observable();
    var mergeMap_1 = require_mergeMap();
    var isArrayLike_1 = require_isArrayLike();
    var isFunction_1 = require_isFunction();
    var mapOneOrManyArgs_1 = require_mapOneOrManyArgs();
    var nodeEventEmitterMethods = [
      "addListener",
      "removeListener"
    ];
    var eventTargetMethods = [
      "addEventListener",
      "removeEventListener"
    ];
    var jqueryMethods = [
      "on",
      "off"
    ];
    function fromEvent(target, eventName, options, resultSelector) {
      if (isFunction_1.isFunction(options)) {
        resultSelector = options;
        options = void 0;
      }
      if (resultSelector) {
        return fromEvent(target, eventName, options).pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector));
      }
      var _a = __read(isEventTarget(target) ? eventTargetMethods.map(function(methodName) {
        return function(handler) {
          return target[methodName](eventName, handler, options);
        };
      }) : isNodeStyleEventEmitter(target) ? nodeEventEmitterMethods.map(toCommonHandlerRegistry(target, eventName)) : isJQueryStyleEventEmitter(target) ? jqueryMethods.map(toCommonHandlerRegistry(target, eventName)) : [], 2), add = _a[0], remove = _a[1];
      if (!add) {
        if (isArrayLike_1.isArrayLike(target)) {
          return mergeMap_1.mergeMap(function(subTarget) {
            return fromEvent(subTarget, eventName, options);
          })(innerFrom_1.innerFrom(target));
        }
      }
      if (!add) {
        throw new TypeError("Invalid event target");
      }
      return new Observable_1.Observable(function(subscriber) {
        var handler = /* @__PURE__ */ __name(function() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          return subscriber.next(1 < args.length ? args : args[0]);
        }, "handler");
        add(handler);
        return function() {
          return remove(handler);
        };
      });
    }
    __name(fromEvent, "fromEvent");
    exports.fromEvent = fromEvent;
    function toCommonHandlerRegistry(target, eventName) {
      return function(methodName) {
        return function(handler) {
          return target[methodName](eventName, handler);
        };
      };
    }
    __name(toCommonHandlerRegistry, "toCommonHandlerRegistry");
    function isNodeStyleEventEmitter(target) {
      return isFunction_1.isFunction(target.addListener) && isFunction_1.isFunction(target.removeListener);
    }
    __name(isNodeStyleEventEmitter, "isNodeStyleEventEmitter");
    function isJQueryStyleEventEmitter(target) {
      return isFunction_1.isFunction(target.on) && isFunction_1.isFunction(target.off);
    }
    __name(isJQueryStyleEventEmitter, "isJQueryStyleEventEmitter");
    function isEventTarget(target) {
      return isFunction_1.isFunction(target.addEventListener) && isFunction_1.isFunction(target.removeEventListener);
    }
    __name(isEventTarget, "isEventTarget");
  }
});

// node_modules/rxjs/dist/cjs/internal/observable/fromEventPattern.js
var require_fromEventPattern = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/observable/fromEventPattern.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.fromEventPattern = void 0;
    var Observable_1 = require_Observable();
    var isFunction_1 = require_isFunction();
    var mapOneOrManyArgs_1 = require_mapOneOrManyArgs();
    function fromEventPattern(addHandler, removeHandler, resultSelector) {
      if (resultSelector) {
        return fromEventPattern(addHandler, removeHandler).pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector));
      }
      return new Observable_1.Observable(function(subscriber) {
        var handler = /* @__PURE__ */ __name(function() {
          var e = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
          }
          return subscriber.next(e.length === 1 ? e[0] : e);
        }, "handler");
        var retValue = addHandler(handler);
        return isFunction_1.isFunction(removeHandler) ? function() {
          return removeHandler(handler, retValue);
        } : void 0;
      });
    }
    __name(fromEventPattern, "fromEventPattern");
    exports.fromEventPattern = fromEventPattern;
  }
});

// node_modules/rxjs/dist/cjs/internal/observable/generate.js
var require_generate = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/observable/generate.js"(exports) {
    "use strict";
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([
            n,
            v
          ]);
        };
      }
      __name(verb, "verb");
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (_)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [
                op[0] & 2,
                t.value
              ];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };
              case 5:
                _.label++;
                y = op[1];
                op = [
                  0
                ];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2])
                  _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [
              6,
              e
            ];
            y = 0;
          } finally {
            f = t = 0;
          }
        if (op[0] & 5)
          throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
      __name(step, "step");
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.generate = void 0;
    var identity_1 = require_identity();
    var isScheduler_1 = require_isScheduler();
    var defer_1 = require_defer();
    var scheduleIterable_1 = require_scheduleIterable();
    function generate(initialStateOrOptions, condition, iterate, resultSelectorOrScheduler, scheduler) {
      var _a, _b;
      var resultSelector;
      var initialState;
      if (arguments.length === 1) {
        _a = initialStateOrOptions, initialState = _a.initialState, condition = _a.condition, iterate = _a.iterate, _b = _a.resultSelector, resultSelector = _b === void 0 ? identity_1.identity : _b, scheduler = _a.scheduler;
      } else {
        initialState = initialStateOrOptions;
        if (!resultSelectorOrScheduler || isScheduler_1.isScheduler(resultSelectorOrScheduler)) {
          resultSelector = identity_1.identity;
          scheduler = resultSelectorOrScheduler;
        } else {
          resultSelector = resultSelectorOrScheduler;
        }
      }
      function gen() {
        var state;
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              state = initialState;
              _a2.label = 1;
            case 1:
              if (!(!condition || condition(state)))
                return [
                  3,
                  4
                ];
              return [
                4,
                resultSelector(state)
              ];
            case 2:
              _a2.sent();
              _a2.label = 3;
            case 3:
              state = iterate(state);
              return [
                3,
                1
              ];
            case 4:
              return [
                2
              ];
          }
        });
      }
      __name(gen, "gen");
      return defer_1.defer(scheduler ? function() {
        return scheduleIterable_1.scheduleIterable(gen(), scheduler);
      } : gen);
    }
    __name(generate, "generate");
    exports.generate = generate;
  }
});

// node_modules/rxjs/dist/cjs/internal/observable/iif.js
var require_iif = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/observable/iif.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.iif = void 0;
    var defer_1 = require_defer();
    function iif(condition, trueResult, falseResult) {
      return defer_1.defer(function() {
        return condition() ? trueResult : falseResult;
      });
    }
    __name(iif, "iif");
    exports.iif = iif;
  }
});

// node_modules/rxjs/dist/cjs/internal/observable/timer.js
var require_timer = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/observable/timer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.timer = void 0;
    var Observable_1 = require_Observable();
    var async_1 = require_async();
    var isScheduler_1 = require_isScheduler();
    var isDate_1 = require_isDate();
    function timer(dueTime, intervalOrScheduler, scheduler) {
      if (dueTime === void 0) {
        dueTime = 0;
      }
      if (scheduler === void 0) {
        scheduler = async_1.async;
      }
      var intervalDuration = -1;
      if (intervalOrScheduler != null) {
        if (isScheduler_1.isScheduler(intervalOrScheduler)) {
          scheduler = intervalOrScheduler;
        } else {
          intervalDuration = intervalOrScheduler;
        }
      }
      return new Observable_1.Observable(function(subscriber) {
        var due = isDate_1.isValidDate(dueTime) ? +dueTime - scheduler.now() : dueTime;
        if (due < 0) {
          due = 0;
        }
        var n = 0;
        return scheduler.schedule(function() {
          if (!subscriber.closed) {
            subscriber.next(n++);
            if (0 <= intervalDuration) {
              this.schedule(void 0, intervalDuration);
            } else {
              subscriber.complete();
            }
          }
        }, due);
      });
    }
    __name(timer, "timer");
    exports.timer = timer;
  }
});

// node_modules/rxjs/dist/cjs/internal/observable/interval.js
var require_interval = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/observable/interval.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.interval = void 0;
    var async_1 = require_async();
    var timer_1 = require_timer();
    function interval(period, scheduler) {
      if (period === void 0) {
        period = 0;
      }
      if (scheduler === void 0) {
        scheduler = async_1.asyncScheduler;
      }
      if (period < 0) {
        period = 0;
      }
      return timer_1.timer(period, period, scheduler);
    }
    __name(interval, "interval");
    exports.interval = interval;
  }
});

// node_modules/rxjs/dist/cjs/internal/observable/merge.js
var require_merge = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/observable/merge.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.merge = void 0;
    var mergeAll_1 = require_mergeAll();
    var innerFrom_1 = require_innerFrom();
    var empty_1 = require_empty();
    var args_1 = require_args();
    var from_1 = require_from();
    function merge() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var scheduler = args_1.popScheduler(args);
      var concurrent = args_1.popNumber(args, Infinity);
      var sources = args;
      return !sources.length ? empty_1.EMPTY : sources.length === 1 ? innerFrom_1.innerFrom(sources[0]) : mergeAll_1.mergeAll(concurrent)(from_1.from(sources, scheduler));
    }
    __name(merge, "merge");
    exports.merge = merge;
  }
});

// node_modules/rxjs/dist/cjs/internal/observable/never.js
var require_never = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/observable/never.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.never = exports.NEVER = void 0;
    var Observable_1 = require_Observable();
    var noop_1 = require_noop();
    exports.NEVER = new Observable_1.Observable(noop_1.noop);
    function never() {
      return exports.NEVER;
    }
    __name(never, "never");
    exports.never = never;
  }
});

// node_modules/rxjs/dist/cjs/internal/util/argsOrArgArray.js
var require_argsOrArgArray = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/util/argsOrArgArray.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.argsOrArgArray = void 0;
    var isArray = Array.isArray;
    function argsOrArgArray(args) {
      return args.length === 1 && isArray(args[0]) ? args[0] : args;
    }
    __name(argsOrArgArray, "argsOrArgArray");
    exports.argsOrArgArray = argsOrArgArray;
  }
});

// node_modules/rxjs/dist/cjs/internal/observable/onErrorResumeNext.js
var require_onErrorResumeNext = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/observable/onErrorResumeNext.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.onErrorResumeNext = void 0;
    var Observable_1 = require_Observable();
    var argsOrArgArray_1 = require_argsOrArgArray();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var noop_1 = require_noop();
    var innerFrom_1 = require_innerFrom();
    function onErrorResumeNext() {
      var sources = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
      }
      var nextSources = argsOrArgArray_1.argsOrArgArray(sources);
      return new Observable_1.Observable(function(subscriber) {
        var sourceIndex = 0;
        var subscribeNext = /* @__PURE__ */ __name(function() {
          if (sourceIndex < nextSources.length) {
            var nextSource = void 0;
            try {
              nextSource = innerFrom_1.innerFrom(nextSources[sourceIndex++]);
            } catch (err) {
              subscribeNext();
              return;
            }
            var innerSubscriber = new OperatorSubscriber_1.OperatorSubscriber(subscriber, void 0, noop_1.noop, noop_1.noop);
            nextSource.subscribe(innerSubscriber);
            innerSubscriber.add(subscribeNext);
          } else {
            subscriber.complete();
          }
        }, "subscribeNext");
        subscribeNext();
      });
    }
    __name(onErrorResumeNext, "onErrorResumeNext");
    exports.onErrorResumeNext = onErrorResumeNext;
  }
});

// node_modules/rxjs/dist/cjs/internal/observable/pairs.js
var require_pairs = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/observable/pairs.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.pairs = void 0;
    var from_1 = require_from();
    function pairs(obj, scheduler) {
      return from_1.from(Object.entries(obj), scheduler);
    }
    __name(pairs, "pairs");
    exports.pairs = pairs;
  }
});

// node_modules/rxjs/dist/cjs/internal/util/not.js
var require_not = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/util/not.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.not = void 0;
    function not(pred, thisArg) {
      return function(value, index) {
        return !pred.call(thisArg, value, index);
      };
    }
    __name(not, "not");
    exports.not = not;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/filter.js
var require_filter = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/filter.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.filter = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function filter(predicate, thisArg) {
      return lift_1.operate(function(source, subscriber) {
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          return predicate.call(thisArg, value, index++) && subscriber.next(value);
        }));
      });
    }
    __name(filter, "filter");
    exports.filter = filter;
  }
});

// node_modules/rxjs/dist/cjs/internal/observable/partition.js
var require_partition = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/observable/partition.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.partition = void 0;
    var not_1 = require_not();
    var filter_1 = require_filter();
    var innerFrom_1 = require_innerFrom();
    function partition(source, predicate, thisArg) {
      return [
        filter_1.filter(predicate, thisArg)(innerFrom_1.innerFrom(source)),
        filter_1.filter(not_1.not(predicate, thisArg))(innerFrom_1.innerFrom(source))
      ];
    }
    __name(partition, "partition");
    exports.partition = partition;
  }
});

// node_modules/rxjs/dist/cjs/internal/observable/race.js
var require_race = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/observable/race.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.raceInit = exports.race = void 0;
    var Observable_1 = require_Observable();
    var innerFrom_1 = require_innerFrom();
    var argsOrArgArray_1 = require_argsOrArgArray();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function race() {
      var sources = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
      }
      sources = argsOrArgArray_1.argsOrArgArray(sources);
      return sources.length === 1 ? innerFrom_1.innerFrom(sources[0]) : new Observable_1.Observable(raceInit(sources));
    }
    __name(race, "race");
    exports.race = race;
    function raceInit(sources) {
      return function(subscriber) {
        var subscriptions = [];
        var _loop_1 = /* @__PURE__ */ __name(function(i2) {
          subscriptions.push(innerFrom_1.innerFrom(sources[i2]).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            if (subscriptions) {
              for (var s = 0; s < subscriptions.length; s++) {
                s !== i2 && subscriptions[s].unsubscribe();
              }
              subscriptions = null;
            }
            subscriber.next(value);
          })));
        }, "_loop_1");
        for (var i = 0; subscriptions && !subscriber.closed && i < sources.length; i++) {
          _loop_1(i);
        }
      };
    }
    __name(raceInit, "raceInit");
    exports.raceInit = raceInit;
  }
});

// node_modules/rxjs/dist/cjs/internal/observable/range.js
var require_range = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/observable/range.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.range = void 0;
    var Observable_1 = require_Observable();
    var empty_1 = require_empty();
    function range(start, count, scheduler) {
      if (count == null) {
        count = start;
        start = 0;
      }
      if (count <= 0) {
        return empty_1.EMPTY;
      }
      var end = count + start;
      return new Observable_1.Observable(scheduler ? function(subscriber) {
        var n = start;
        return scheduler.schedule(function() {
          if (n < end) {
            subscriber.next(n++);
            this.schedule();
          } else {
            subscriber.complete();
          }
        });
      } : function(subscriber) {
        var n = start;
        while (n < end && !subscriber.closed) {
          subscriber.next(n++);
        }
        subscriber.complete();
      });
    }
    __name(range, "range");
    exports.range = range;
  }
});

// node_modules/rxjs/dist/cjs/internal/observable/using.js
var require_using = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/observable/using.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.using = void 0;
    var Observable_1 = require_Observable();
    var innerFrom_1 = require_innerFrom();
    var empty_1 = require_empty();
    function using(resourceFactory, observableFactory) {
      return new Observable_1.Observable(function(subscriber) {
        var resource = resourceFactory();
        var result = observableFactory(resource);
        var source = result ? innerFrom_1.innerFrom(result) : empty_1.EMPTY;
        source.subscribe(subscriber);
        return function() {
          if (resource) {
            resource.unsubscribe();
          }
        };
      });
    }
    __name(using, "using");
    exports.using = using;
  }
});

// node_modules/rxjs/dist/cjs/internal/observable/zip.js
var require_zip = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/observable/zip.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = {
          error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.zip = void 0;
    var Observable_1 = require_Observable();
    var innerFrom_1 = require_innerFrom();
    var argsOrArgArray_1 = require_argsOrArgArray();
    var empty_1 = require_empty();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var args_1 = require_args();
    function zip() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var resultSelector = args_1.popResultSelector(args);
      var sources = argsOrArgArray_1.argsOrArgArray(args);
      return sources.length ? new Observable_1.Observable(function(subscriber) {
        var buffers = sources.map(function() {
          return [];
        });
        var completed = sources.map(function() {
          return false;
        });
        subscriber.add(function() {
          buffers = completed = null;
        });
        var _loop_1 = /* @__PURE__ */ __name(function(sourceIndex2) {
          innerFrom_1.innerFrom(sources[sourceIndex2]).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            buffers[sourceIndex2].push(value);
            if (buffers.every(function(buffer) {
              return buffer.length;
            })) {
              var result = buffers.map(function(buffer) {
                return buffer.shift();
              });
              subscriber.next(resultSelector ? resultSelector.apply(void 0, __spreadArray([], __read(result))) : result);
              if (buffers.some(function(buffer, i) {
                return !buffer.length && completed[i];
              })) {
                subscriber.complete();
              }
            }
          }, function() {
            completed[sourceIndex2] = true;
            !buffers[sourceIndex2].length && subscriber.complete();
          }));
        }, "_loop_1");
        for (var sourceIndex = 0; !subscriber.closed && sourceIndex < sources.length; sourceIndex++) {
          _loop_1(sourceIndex);
        }
        return function() {
          buffers = completed = null;
        };
      }) : empty_1.EMPTY;
    }
    __name(zip, "zip");
    exports.zip = zip;
  }
});

// node_modules/rxjs/dist/cjs/internal/types.js
var require_types = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/audit.js
var require_audit = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/audit.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.audit = void 0;
    var lift_1 = require_lift();
    var innerFrom_1 = require_innerFrom();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function audit(durationSelector) {
      return lift_1.operate(function(source, subscriber) {
        var hasValue = false;
        var lastValue = null;
        var durationSubscriber = null;
        var isComplete = false;
        var endDuration = /* @__PURE__ */ __name(function() {
          durationSubscriber === null || durationSubscriber === void 0 ? void 0 : durationSubscriber.unsubscribe();
          durationSubscriber = null;
          if (hasValue) {
            hasValue = false;
            var value = lastValue;
            lastValue = null;
            subscriber.next(value);
          }
          isComplete && subscriber.complete();
        }, "endDuration");
        var cleanupDuration = /* @__PURE__ */ __name(function() {
          durationSubscriber = null;
          isComplete && subscriber.complete();
        }, "cleanupDuration");
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          hasValue = true;
          lastValue = value;
          if (!durationSubscriber) {
            innerFrom_1.innerFrom(durationSelector(value)).subscribe(durationSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, endDuration, cleanupDuration));
          }
        }, function() {
          isComplete = true;
          (!hasValue || !durationSubscriber || durationSubscriber.closed) && subscriber.complete();
        }));
      });
    }
    __name(audit, "audit");
    exports.audit = audit;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/auditTime.js
var require_auditTime = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/auditTime.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.auditTime = void 0;
    var async_1 = require_async();
    var audit_1 = require_audit();
    var timer_1 = require_timer();
    function auditTime(duration, scheduler) {
      if (scheduler === void 0) {
        scheduler = async_1.asyncScheduler;
      }
      return audit_1.audit(function() {
        return timer_1.timer(duration, scheduler);
      });
    }
    __name(auditTime, "auditTime");
    exports.auditTime = auditTime;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/buffer.js
var require_buffer = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/buffer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.buffer = void 0;
    var lift_1 = require_lift();
    var noop_1 = require_noop();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var innerFrom_1 = require_innerFrom();
    function buffer(closingNotifier) {
      return lift_1.operate(function(source, subscriber) {
        var currentBuffer = [];
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          return currentBuffer.push(value);
        }, function() {
          subscriber.next(currentBuffer);
          subscriber.complete();
        }));
        innerFrom_1.innerFrom(closingNotifier).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
          var b = currentBuffer;
          currentBuffer = [];
          subscriber.next(b);
        }, noop_1.noop));
        return function() {
          currentBuffer = null;
        };
      });
    }
    __name(buffer, "buffer");
    exports.buffer = buffer;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/bufferCount.js
var require_bufferCount = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/bufferCount.js"(exports) {
    "use strict";
    var __values = exports && exports.__values || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
        return m.call(o);
      if (o && typeof o.length === "number")
        return {
          next: function() {
            if (o && i >= o.length)
              o = void 0;
            return {
              value: o && o[i++],
              done: !o
            };
          }
        };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.bufferCount = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var arrRemove_1 = require_arrRemove();
    function bufferCount(bufferSize, startBufferEvery) {
      if (startBufferEvery === void 0) {
        startBufferEvery = null;
      }
      startBufferEvery = startBufferEvery !== null && startBufferEvery !== void 0 ? startBufferEvery : bufferSize;
      return lift_1.operate(function(source, subscriber) {
        var buffers = [];
        var count = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          var e_1, _a, e_2, _b;
          var toEmit = null;
          if (count++ % startBufferEvery === 0) {
            buffers.push([]);
          }
          try {
            for (var buffers_1 = __values(buffers), buffers_1_1 = buffers_1.next(); !buffers_1_1.done; buffers_1_1 = buffers_1.next()) {
              var buffer = buffers_1_1.value;
              buffer.push(value);
              if (bufferSize <= buffer.length) {
                toEmit = toEmit !== null && toEmit !== void 0 ? toEmit : [];
                toEmit.push(buffer);
              }
            }
          } catch (e_1_1) {
            e_1 = {
              error: e_1_1
            };
          } finally {
            try {
              if (buffers_1_1 && !buffers_1_1.done && (_a = buffers_1.return))
                _a.call(buffers_1);
            } finally {
              if (e_1)
                throw e_1.error;
            }
          }
          if (toEmit) {
            try {
              for (var toEmit_1 = __values(toEmit), toEmit_1_1 = toEmit_1.next(); !toEmit_1_1.done; toEmit_1_1 = toEmit_1.next()) {
                var buffer = toEmit_1_1.value;
                arrRemove_1.arrRemove(buffers, buffer);
                subscriber.next(buffer);
              }
            } catch (e_2_1) {
              e_2 = {
                error: e_2_1
              };
            } finally {
              try {
                if (toEmit_1_1 && !toEmit_1_1.done && (_b = toEmit_1.return))
                  _b.call(toEmit_1);
              } finally {
                if (e_2)
                  throw e_2.error;
              }
            }
          }
        }, function() {
          var e_3, _a;
          try {
            for (var buffers_2 = __values(buffers), buffers_2_1 = buffers_2.next(); !buffers_2_1.done; buffers_2_1 = buffers_2.next()) {
              var buffer = buffers_2_1.value;
              subscriber.next(buffer);
            }
          } catch (e_3_1) {
            e_3 = {
              error: e_3_1
            };
          } finally {
            try {
              if (buffers_2_1 && !buffers_2_1.done && (_a = buffers_2.return))
                _a.call(buffers_2);
            } finally {
              if (e_3)
                throw e_3.error;
            }
          }
          subscriber.complete();
        }, void 0, function() {
          buffers = null;
        }));
      });
    }
    __name(bufferCount, "bufferCount");
    exports.bufferCount = bufferCount;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/bufferTime.js
var require_bufferTime = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/bufferTime.js"(exports) {
    "use strict";
    var __values = exports && exports.__values || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
        return m.call(o);
      if (o && typeof o.length === "number")
        return {
          next: function() {
            if (o && i >= o.length)
              o = void 0;
            return {
              value: o && o[i++],
              done: !o
            };
          }
        };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.bufferTime = void 0;
    var Subscription_1 = require_Subscription();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var arrRemove_1 = require_arrRemove();
    var async_1 = require_async();
    var args_1 = require_args();
    var executeSchedule_1 = require_executeSchedule();
    function bufferTime(bufferTimeSpan) {
      var _a, _b;
      var otherArgs = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        otherArgs[_i - 1] = arguments[_i];
      }
      var scheduler = (_a = args_1.popScheduler(otherArgs)) !== null && _a !== void 0 ? _a : async_1.asyncScheduler;
      var bufferCreationInterval = (_b = otherArgs[0]) !== null && _b !== void 0 ? _b : null;
      var maxBufferSize = otherArgs[1] || Infinity;
      return lift_1.operate(function(source, subscriber) {
        var bufferRecords = [];
        var restartOnEmit = false;
        var emit = /* @__PURE__ */ __name(function(record) {
          var buffer = record.buffer, subs = record.subs;
          subs.unsubscribe();
          arrRemove_1.arrRemove(bufferRecords, record);
          subscriber.next(buffer);
          restartOnEmit && startBuffer();
        }, "emit");
        var startBuffer = /* @__PURE__ */ __name(function() {
          if (bufferRecords) {
            var subs = new Subscription_1.Subscription();
            subscriber.add(subs);
            var buffer = [];
            var record_1 = {
              buffer,
              subs
            };
            bufferRecords.push(record_1);
            executeSchedule_1.executeSchedule(subs, scheduler, function() {
              return emit(record_1);
            }, bufferTimeSpan);
          }
        }, "startBuffer");
        if (bufferCreationInterval !== null && bufferCreationInterval >= 0) {
          executeSchedule_1.executeSchedule(subscriber, scheduler, startBuffer, bufferCreationInterval, true);
        } else {
          restartOnEmit = true;
        }
        startBuffer();
        var bufferTimeSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          var e_1, _a2;
          var recordsCopy = bufferRecords.slice();
          try {
            for (var recordsCopy_1 = __values(recordsCopy), recordsCopy_1_1 = recordsCopy_1.next(); !recordsCopy_1_1.done; recordsCopy_1_1 = recordsCopy_1.next()) {
              var record = recordsCopy_1_1.value;
              var buffer = record.buffer;
              buffer.push(value);
              maxBufferSize <= buffer.length && emit(record);
            }
          } catch (e_1_1) {
            e_1 = {
              error: e_1_1
            };
          } finally {
            try {
              if (recordsCopy_1_1 && !recordsCopy_1_1.done && (_a2 = recordsCopy_1.return))
                _a2.call(recordsCopy_1);
            } finally {
              if (e_1)
                throw e_1.error;
            }
          }
        }, function() {
          while (bufferRecords === null || bufferRecords === void 0 ? void 0 : bufferRecords.length) {
            subscriber.next(bufferRecords.shift().buffer);
          }
          bufferTimeSubscriber === null || bufferTimeSubscriber === void 0 ? void 0 : bufferTimeSubscriber.unsubscribe();
          subscriber.complete();
          subscriber.unsubscribe();
        }, void 0, function() {
          return bufferRecords = null;
        });
        source.subscribe(bufferTimeSubscriber);
      });
    }
    __name(bufferTime, "bufferTime");
    exports.bufferTime = bufferTime;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/bufferToggle.js
var require_bufferToggle = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/bufferToggle.js"(exports) {
    "use strict";
    var __values = exports && exports.__values || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
        return m.call(o);
      if (o && typeof o.length === "number")
        return {
          next: function() {
            if (o && i >= o.length)
              o = void 0;
            return {
              value: o && o[i++],
              done: !o
            };
          }
        };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.bufferToggle = void 0;
    var Subscription_1 = require_Subscription();
    var lift_1 = require_lift();
    var innerFrom_1 = require_innerFrom();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var noop_1 = require_noop();
    var arrRemove_1 = require_arrRemove();
    function bufferToggle(openings, closingSelector) {
      return lift_1.operate(function(source, subscriber) {
        var buffers = [];
        innerFrom_1.innerFrom(openings).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(openValue) {
          var buffer = [];
          buffers.push(buffer);
          var closingSubscription = new Subscription_1.Subscription();
          var emitBuffer = /* @__PURE__ */ __name(function() {
            arrRemove_1.arrRemove(buffers, buffer);
            subscriber.next(buffer);
            closingSubscription.unsubscribe();
          }, "emitBuffer");
          closingSubscription.add(innerFrom_1.innerFrom(closingSelector(openValue)).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, emitBuffer, noop_1.noop)));
        }, noop_1.noop));
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          var e_1, _a;
          try {
            for (var buffers_1 = __values(buffers), buffers_1_1 = buffers_1.next(); !buffers_1_1.done; buffers_1_1 = buffers_1.next()) {
              var buffer = buffers_1_1.value;
              buffer.push(value);
            }
          } catch (e_1_1) {
            e_1 = {
              error: e_1_1
            };
          } finally {
            try {
              if (buffers_1_1 && !buffers_1_1.done && (_a = buffers_1.return))
                _a.call(buffers_1);
            } finally {
              if (e_1)
                throw e_1.error;
            }
          }
        }, function() {
          while (buffers.length > 0) {
            subscriber.next(buffers.shift());
          }
          subscriber.complete();
        }));
      });
    }
    __name(bufferToggle, "bufferToggle");
    exports.bufferToggle = bufferToggle;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/bufferWhen.js
var require_bufferWhen = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/bufferWhen.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.bufferWhen = void 0;
    var lift_1 = require_lift();
    var noop_1 = require_noop();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var innerFrom_1 = require_innerFrom();
    function bufferWhen(closingSelector) {
      return lift_1.operate(function(source, subscriber) {
        var buffer = null;
        var closingSubscriber = null;
        var openBuffer = /* @__PURE__ */ __name(function() {
          closingSubscriber === null || closingSubscriber === void 0 ? void 0 : closingSubscriber.unsubscribe();
          var b = buffer;
          buffer = [];
          b && subscriber.next(b);
          innerFrom_1.innerFrom(closingSelector()).subscribe(closingSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, openBuffer, noop_1.noop));
        }, "openBuffer");
        openBuffer();
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          return buffer === null || buffer === void 0 ? void 0 : buffer.push(value);
        }, function() {
          buffer && subscriber.next(buffer);
          subscriber.complete();
        }, void 0, function() {
          return buffer = closingSubscriber = null;
        }));
      });
    }
    __name(bufferWhen, "bufferWhen");
    exports.bufferWhen = bufferWhen;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/catchError.js
var require_catchError = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/catchError.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.catchError = void 0;
    var innerFrom_1 = require_innerFrom();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var lift_1 = require_lift();
    function catchError(selector) {
      return lift_1.operate(function(source, subscriber) {
        var innerSub = null;
        var syncUnsub = false;
        var handledResult;
        innerSub = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, void 0, void 0, function(err) {
          handledResult = innerFrom_1.innerFrom(selector(err, catchError(selector)(source)));
          if (innerSub) {
            innerSub.unsubscribe();
            innerSub = null;
            handledResult.subscribe(subscriber);
          } else {
            syncUnsub = true;
          }
        }));
        if (syncUnsub) {
          innerSub.unsubscribe();
          innerSub = null;
          handledResult.subscribe(subscriber);
        }
      });
    }
    __name(catchError, "catchError");
    exports.catchError = catchError;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/scanInternals.js
var require_scanInternals = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/scanInternals.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.scanInternals = void 0;
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function scanInternals(accumulator, seed, hasSeed, emitOnNext, emitBeforeComplete) {
      return function(source, subscriber) {
        var hasState = hasSeed;
        var state = seed;
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          var i = index++;
          state = hasState ? accumulator(state, value, i) : (hasState = true, value);
          emitOnNext && subscriber.next(state);
        }, emitBeforeComplete && function() {
          hasState && subscriber.next(state);
          subscriber.complete();
        }));
      };
    }
    __name(scanInternals, "scanInternals");
    exports.scanInternals = scanInternals;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/reduce.js
var require_reduce = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/reduce.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.reduce = void 0;
    var scanInternals_1 = require_scanInternals();
    var lift_1 = require_lift();
    function reduce(accumulator, seed) {
      return lift_1.operate(scanInternals_1.scanInternals(accumulator, seed, arguments.length >= 2, false, true));
    }
    __name(reduce, "reduce");
    exports.reduce = reduce;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/toArray.js
var require_toArray = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/toArray.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.toArray = void 0;
    var reduce_1 = require_reduce();
    var lift_1 = require_lift();
    var arrReducer = /* @__PURE__ */ __name(function(arr, value) {
      return arr.push(value), arr;
    }, "arrReducer");
    function toArray() {
      return lift_1.operate(function(source, subscriber) {
        reduce_1.reduce(arrReducer, [])(source).subscribe(subscriber);
      });
    }
    __name(toArray, "toArray");
    exports.toArray = toArray;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/joinAllInternals.js
var require_joinAllInternals = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/joinAllInternals.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.joinAllInternals = void 0;
    var identity_1 = require_identity();
    var mapOneOrManyArgs_1 = require_mapOneOrManyArgs();
    var pipe_1 = require_pipe();
    var mergeMap_1 = require_mergeMap();
    var toArray_1 = require_toArray();
    function joinAllInternals(joinFn, project) {
      return pipe_1.pipe(toArray_1.toArray(), mergeMap_1.mergeMap(function(sources) {
        return joinFn(sources);
      }), project ? mapOneOrManyArgs_1.mapOneOrManyArgs(project) : identity_1.identity);
    }
    __name(joinAllInternals, "joinAllInternals");
    exports.joinAllInternals = joinAllInternals;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/combineLatestAll.js
var require_combineLatestAll = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/combineLatestAll.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.combineLatestAll = void 0;
    var combineLatest_1 = require_combineLatest();
    var joinAllInternals_1 = require_joinAllInternals();
    function combineLatestAll(project) {
      return joinAllInternals_1.joinAllInternals(combineLatest_1.combineLatest, project);
    }
    __name(combineLatestAll, "combineLatestAll");
    exports.combineLatestAll = combineLatestAll;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/combineAll.js
var require_combineAll = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/combineAll.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.combineAll = void 0;
    var combineLatestAll_1 = require_combineLatestAll();
    exports.combineAll = combineLatestAll_1.combineLatestAll;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/combineLatest.js
var require_combineLatest2 = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/combineLatest.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = {
          error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.combineLatest = void 0;
    var combineLatest_1 = require_combineLatest();
    var lift_1 = require_lift();
    var argsOrArgArray_1 = require_argsOrArgArray();
    var mapOneOrManyArgs_1 = require_mapOneOrManyArgs();
    var pipe_1 = require_pipe();
    var args_1 = require_args();
    function combineLatest() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var resultSelector = args_1.popResultSelector(args);
      return resultSelector ? pipe_1.pipe(combineLatest.apply(void 0, __spreadArray([], __read(args))), mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector)) : lift_1.operate(function(source, subscriber) {
        combineLatest_1.combineLatestInit(__spreadArray([
          source
        ], __read(argsOrArgArray_1.argsOrArgArray(args))))(subscriber);
      });
    }
    __name(combineLatest, "combineLatest");
    exports.combineLatest = combineLatest;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/combineLatestWith.js
var require_combineLatestWith = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/combineLatestWith.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = {
          error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.combineLatestWith = void 0;
    var combineLatest_1 = require_combineLatest2();
    function combineLatestWith() {
      var otherSources = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        otherSources[_i] = arguments[_i];
      }
      return combineLatest_1.combineLatest.apply(void 0, __spreadArray([], __read(otherSources)));
    }
    __name(combineLatestWith, "combineLatestWith");
    exports.combineLatestWith = combineLatestWith;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/concatMap.js
var require_concatMap = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/concatMap.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.concatMap = void 0;
    var mergeMap_1 = require_mergeMap();
    var isFunction_1 = require_isFunction();
    function concatMap(project, resultSelector) {
      return isFunction_1.isFunction(resultSelector) ? mergeMap_1.mergeMap(project, resultSelector, 1) : mergeMap_1.mergeMap(project, 1);
    }
    __name(concatMap, "concatMap");
    exports.concatMap = concatMap;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/concatMapTo.js
var require_concatMapTo = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/concatMapTo.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.concatMapTo = void 0;
    var concatMap_1 = require_concatMap();
    var isFunction_1 = require_isFunction();
    function concatMapTo(innerObservable, resultSelector) {
      return isFunction_1.isFunction(resultSelector) ? concatMap_1.concatMap(function() {
        return innerObservable;
      }, resultSelector) : concatMap_1.concatMap(function() {
        return innerObservable;
      });
    }
    __name(concatMapTo, "concatMapTo");
    exports.concatMapTo = concatMapTo;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/concat.js
var require_concat2 = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/concat.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = {
          error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.concat = void 0;
    var lift_1 = require_lift();
    var concatAll_1 = require_concatAll();
    var args_1 = require_args();
    var from_1 = require_from();
    function concat() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var scheduler = args_1.popScheduler(args);
      return lift_1.operate(function(source, subscriber) {
        concatAll_1.concatAll()(from_1.from(__spreadArray([
          source
        ], __read(args)), scheduler)).subscribe(subscriber);
      });
    }
    __name(concat, "concat");
    exports.concat = concat;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/concatWith.js
var require_concatWith = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/concatWith.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = {
          error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.concatWith = void 0;
    var concat_1 = require_concat2();
    function concatWith() {
      var otherSources = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        otherSources[_i] = arguments[_i];
      }
      return concat_1.concat.apply(void 0, __spreadArray([], __read(otherSources)));
    }
    __name(concatWith, "concatWith");
    exports.concatWith = concatWith;
  }
});

// node_modules/rxjs/dist/cjs/internal/observable/fromSubscribable.js
var require_fromSubscribable = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/observable/fromSubscribable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.fromSubscribable = void 0;
    var Observable_1 = require_Observable();
    function fromSubscribable(subscribable) {
      return new Observable_1.Observable(function(subscriber) {
        return subscribable.subscribe(subscriber);
      });
    }
    __name(fromSubscribable, "fromSubscribable");
    exports.fromSubscribable = fromSubscribable;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/connect.js
var require_connect = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/connect.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.connect = void 0;
    var Subject_1 = require_Subject();
    var innerFrom_1 = require_innerFrom();
    var lift_1 = require_lift();
    var fromSubscribable_1 = require_fromSubscribable();
    var DEFAULT_CONFIG = {
      connector: function() {
        return new Subject_1.Subject();
      }
    };
    function connect(selector, config2) {
      if (config2 === void 0) {
        config2 = DEFAULT_CONFIG;
      }
      var connector = config2.connector;
      return lift_1.operate(function(source, subscriber) {
        var subject = connector();
        innerFrom_1.innerFrom(selector(fromSubscribable_1.fromSubscribable(subject))).subscribe(subscriber);
        subscriber.add(source.subscribe(subject));
      });
    }
    __name(connect, "connect");
    exports.connect = connect;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/count.js
var require_count = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/count.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.count = void 0;
    var reduce_1 = require_reduce();
    function count(predicate) {
      return reduce_1.reduce(function(total, value, i) {
        return !predicate || predicate(value, i) ? total + 1 : total;
      }, 0);
    }
    __name(count, "count");
    exports.count = count;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/debounce.js
var require_debounce = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/debounce.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.debounce = void 0;
    var lift_1 = require_lift();
    var noop_1 = require_noop();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var innerFrom_1 = require_innerFrom();
    function debounce(durationSelector) {
      return lift_1.operate(function(source, subscriber) {
        var hasValue = false;
        var lastValue = null;
        var durationSubscriber = null;
        var emit = /* @__PURE__ */ __name(function() {
          durationSubscriber === null || durationSubscriber === void 0 ? void 0 : durationSubscriber.unsubscribe();
          durationSubscriber = null;
          if (hasValue) {
            hasValue = false;
            var value = lastValue;
            lastValue = null;
            subscriber.next(value);
          }
        }, "emit");
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          durationSubscriber === null || durationSubscriber === void 0 ? void 0 : durationSubscriber.unsubscribe();
          hasValue = true;
          lastValue = value;
          durationSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, emit, noop_1.noop);
          innerFrom_1.innerFrom(durationSelector(value)).subscribe(durationSubscriber);
        }, function() {
          emit();
          subscriber.complete();
        }, void 0, function() {
          lastValue = durationSubscriber = null;
        }));
      });
    }
    __name(debounce, "debounce");
    exports.debounce = debounce;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/debounceTime.js
var require_debounceTime = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/debounceTime.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.debounceTime = void 0;
    var async_1 = require_async();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function debounceTime(dueTime, scheduler) {
      if (scheduler === void 0) {
        scheduler = async_1.asyncScheduler;
      }
      return lift_1.operate(function(source, subscriber) {
        var activeTask = null;
        var lastValue = null;
        var lastTime = null;
        var emit = /* @__PURE__ */ __name(function() {
          if (activeTask) {
            activeTask.unsubscribe();
            activeTask = null;
            var value = lastValue;
            lastValue = null;
            subscriber.next(value);
          }
        }, "emit");
        function emitWhenIdle() {
          var targetTime = lastTime + dueTime;
          var now = scheduler.now();
          if (now < targetTime) {
            activeTask = this.schedule(void 0, targetTime - now);
            subscriber.add(activeTask);
            return;
          }
          emit();
        }
        __name(emitWhenIdle, "emitWhenIdle");
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          lastValue = value;
          lastTime = scheduler.now();
          if (!activeTask) {
            activeTask = scheduler.schedule(emitWhenIdle, dueTime);
            subscriber.add(activeTask);
          }
        }, function() {
          emit();
          subscriber.complete();
        }, void 0, function() {
          lastValue = activeTask = null;
        }));
      });
    }
    __name(debounceTime, "debounceTime");
    exports.debounceTime = debounceTime;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/defaultIfEmpty.js
var require_defaultIfEmpty = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/defaultIfEmpty.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.defaultIfEmpty = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function defaultIfEmpty(defaultValue) {
      return lift_1.operate(function(source, subscriber) {
        var hasValue = false;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          hasValue = true;
          subscriber.next(value);
        }, function() {
          if (!hasValue) {
            subscriber.next(defaultValue);
          }
          subscriber.complete();
        }));
      });
    }
    __name(defaultIfEmpty, "defaultIfEmpty");
    exports.defaultIfEmpty = defaultIfEmpty;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/take.js
var require_take = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/take.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.take = void 0;
    var empty_1 = require_empty();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function take(count) {
      return count <= 0 ? function() {
        return empty_1.EMPTY;
      } : lift_1.operate(function(source, subscriber) {
        var seen = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          if (++seen <= count) {
            subscriber.next(value);
            if (count <= seen) {
              subscriber.complete();
            }
          }
        }));
      });
    }
    __name(take, "take");
    exports.take = take;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/ignoreElements.js
var require_ignoreElements = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/ignoreElements.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ignoreElements = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var noop_1 = require_noop();
    function ignoreElements() {
      return lift_1.operate(function(source, subscriber) {
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, noop_1.noop));
      });
    }
    __name(ignoreElements, "ignoreElements");
    exports.ignoreElements = ignoreElements;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/mapTo.js
var require_mapTo = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/mapTo.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.mapTo = void 0;
    var map_1 = require_map();
    function mapTo(value) {
      return map_1.map(function() {
        return value;
      });
    }
    __name(mapTo, "mapTo");
    exports.mapTo = mapTo;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/delayWhen.js
var require_delayWhen = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/delayWhen.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.delayWhen = void 0;
    var concat_1 = require_concat();
    var take_1 = require_take();
    var ignoreElements_1 = require_ignoreElements();
    var mapTo_1 = require_mapTo();
    var mergeMap_1 = require_mergeMap();
    var innerFrom_1 = require_innerFrom();
    function delayWhen(delayDurationSelector, subscriptionDelay) {
      if (subscriptionDelay) {
        return function(source) {
          return concat_1.concat(subscriptionDelay.pipe(take_1.take(1), ignoreElements_1.ignoreElements()), source.pipe(delayWhen(delayDurationSelector)));
        };
      }
      return mergeMap_1.mergeMap(function(value, index) {
        return innerFrom_1.innerFrom(delayDurationSelector(value, index)).pipe(take_1.take(1), mapTo_1.mapTo(value));
      });
    }
    __name(delayWhen, "delayWhen");
    exports.delayWhen = delayWhen;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/delay.js
var require_delay = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/delay.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.delay = void 0;
    var async_1 = require_async();
    var delayWhen_1 = require_delayWhen();
    var timer_1 = require_timer();
    function delay(due, scheduler) {
      if (scheduler === void 0) {
        scheduler = async_1.asyncScheduler;
      }
      var duration = timer_1.timer(due, scheduler);
      return delayWhen_1.delayWhen(function() {
        return duration;
      });
    }
    __name(delay, "delay");
    exports.delay = delay;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/dematerialize.js
var require_dematerialize = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/dematerialize.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.dematerialize = void 0;
    var Notification_1 = require_Notification();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function dematerialize() {
      return lift_1.operate(function(source, subscriber) {
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(notification) {
          return Notification_1.observeNotification(notification, subscriber);
        }));
      });
    }
    __name(dematerialize, "dematerialize");
    exports.dematerialize = dematerialize;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/distinct.js
var require_distinct = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/distinct.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.distinct = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var noop_1 = require_noop();
    var innerFrom_1 = require_innerFrom();
    function distinct(keySelector, flushes) {
      return lift_1.operate(function(source, subscriber) {
        var distinctKeys = /* @__PURE__ */ new Set();
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          var key = keySelector ? keySelector(value) : value;
          if (!distinctKeys.has(key)) {
            distinctKeys.add(key);
            subscriber.next(value);
          }
        }));
        flushes && innerFrom_1.innerFrom(flushes).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
          return distinctKeys.clear();
        }, noop_1.noop));
      });
    }
    __name(distinct, "distinct");
    exports.distinct = distinct;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/distinctUntilChanged.js
var require_distinctUntilChanged = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/distinctUntilChanged.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.distinctUntilChanged = void 0;
    var identity_1 = require_identity();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function distinctUntilChanged(comparator, keySelector) {
      if (keySelector === void 0) {
        keySelector = identity_1.identity;
      }
      comparator = comparator !== null && comparator !== void 0 ? comparator : defaultCompare;
      return lift_1.operate(function(source, subscriber) {
        var previousKey;
        var first = true;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          var currentKey = keySelector(value);
          if (first || !comparator(previousKey, currentKey)) {
            first = false;
            previousKey = currentKey;
            subscriber.next(value);
          }
        }));
      });
    }
    __name(distinctUntilChanged, "distinctUntilChanged");
    exports.distinctUntilChanged = distinctUntilChanged;
    function defaultCompare(a, b) {
      return a === b;
    }
    __name(defaultCompare, "defaultCompare");
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/distinctUntilKeyChanged.js
var require_distinctUntilKeyChanged = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/distinctUntilKeyChanged.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.distinctUntilKeyChanged = void 0;
    var distinctUntilChanged_1 = require_distinctUntilChanged();
    function distinctUntilKeyChanged(key, compare) {
      return distinctUntilChanged_1.distinctUntilChanged(function(x, y) {
        return compare ? compare(x[key], y[key]) : x[key] === y[key];
      });
    }
    __name(distinctUntilKeyChanged, "distinctUntilKeyChanged");
    exports.distinctUntilKeyChanged = distinctUntilKeyChanged;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/throwIfEmpty.js
var require_throwIfEmpty = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/throwIfEmpty.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.throwIfEmpty = void 0;
    var EmptyError_1 = require_EmptyError();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function throwIfEmpty(errorFactory) {
      if (errorFactory === void 0) {
        errorFactory = defaultErrorFactory;
      }
      return lift_1.operate(function(source, subscriber) {
        var hasValue = false;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          hasValue = true;
          subscriber.next(value);
        }, function() {
          return hasValue ? subscriber.complete() : subscriber.error(errorFactory());
        }));
      });
    }
    __name(throwIfEmpty, "throwIfEmpty");
    exports.throwIfEmpty = throwIfEmpty;
    function defaultErrorFactory() {
      return new EmptyError_1.EmptyError();
    }
    __name(defaultErrorFactory, "defaultErrorFactory");
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/elementAt.js
var require_elementAt = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/elementAt.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.elementAt = void 0;
    var ArgumentOutOfRangeError_1 = require_ArgumentOutOfRangeError();
    var filter_1 = require_filter();
    var throwIfEmpty_1 = require_throwIfEmpty();
    var defaultIfEmpty_1 = require_defaultIfEmpty();
    var take_1 = require_take();
    function elementAt(index, defaultValue) {
      if (index < 0) {
        throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError();
      }
      var hasDefaultValue = arguments.length >= 2;
      return function(source) {
        return source.pipe(filter_1.filter(function(v, i) {
          return i === index;
        }), take_1.take(1), hasDefaultValue ? defaultIfEmpty_1.defaultIfEmpty(defaultValue) : throwIfEmpty_1.throwIfEmpty(function() {
          return new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError();
        }));
      };
    }
    __name(elementAt, "elementAt");
    exports.elementAt = elementAt;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/endWith.js
var require_endWith = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/endWith.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = {
          error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.endWith = void 0;
    var concat_1 = require_concat();
    var of_1 = require_of();
    function endWith() {
      var values = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
      }
      return function(source) {
        return concat_1.concat(source, of_1.of.apply(void 0, __spreadArray([], __read(values))));
      };
    }
    __name(endWith, "endWith");
    exports.endWith = endWith;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/every.js
var require_every = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/every.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.every = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function every(predicate, thisArg) {
      return lift_1.operate(function(source, subscriber) {
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          if (!predicate.call(thisArg, value, index++, source)) {
            subscriber.next(false);
            subscriber.complete();
          }
        }, function() {
          subscriber.next(true);
          subscriber.complete();
        }));
      });
    }
    __name(every, "every");
    exports.every = every;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/exhaustMap.js
var require_exhaustMap = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/exhaustMap.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.exhaustMap = void 0;
    var map_1 = require_map();
    var innerFrom_1 = require_innerFrom();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function exhaustMap(project, resultSelector) {
      if (resultSelector) {
        return function(source) {
          return source.pipe(exhaustMap(function(a, i) {
            return innerFrom_1.innerFrom(project(a, i)).pipe(map_1.map(function(b, ii) {
              return resultSelector(a, b, i, ii);
            }));
          }));
        };
      }
      return lift_1.operate(function(source, subscriber) {
        var index = 0;
        var innerSub = null;
        var isComplete = false;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(outerValue) {
          if (!innerSub) {
            innerSub = OperatorSubscriber_1.createOperatorSubscriber(subscriber, void 0, function() {
              innerSub = null;
              isComplete && subscriber.complete();
            });
            innerFrom_1.innerFrom(project(outerValue, index++)).subscribe(innerSub);
          }
        }, function() {
          isComplete = true;
          !innerSub && subscriber.complete();
        }));
      });
    }
    __name(exhaustMap, "exhaustMap");
    exports.exhaustMap = exhaustMap;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/exhaustAll.js
var require_exhaustAll = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/exhaustAll.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.exhaustAll = void 0;
    var exhaustMap_1 = require_exhaustMap();
    var identity_1 = require_identity();
    function exhaustAll() {
      return exhaustMap_1.exhaustMap(identity_1.identity);
    }
    __name(exhaustAll, "exhaustAll");
    exports.exhaustAll = exhaustAll;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/exhaust.js
var require_exhaust = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/exhaust.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.exhaust = void 0;
    var exhaustAll_1 = require_exhaustAll();
    exports.exhaust = exhaustAll_1.exhaustAll;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/expand.js
var require_expand = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/expand.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.expand = void 0;
    var lift_1 = require_lift();
    var mergeInternals_1 = require_mergeInternals();
    function expand(project, concurrent, scheduler) {
      if (concurrent === void 0) {
        concurrent = Infinity;
      }
      concurrent = (concurrent || 0) < 1 ? Infinity : concurrent;
      return lift_1.operate(function(source, subscriber) {
        return mergeInternals_1.mergeInternals(source, subscriber, project, concurrent, void 0, true, scheduler);
      });
    }
    __name(expand, "expand");
    exports.expand = expand;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/finalize.js
var require_finalize = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/finalize.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.finalize = void 0;
    var lift_1 = require_lift();
    function finalize(callback) {
      return lift_1.operate(function(source, subscriber) {
        try {
          source.subscribe(subscriber);
        } finally {
          subscriber.add(callback);
        }
      });
    }
    __name(finalize, "finalize");
    exports.finalize = finalize;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/find.js
var require_find = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/find.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.createFind = exports.find = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function find(predicate, thisArg) {
      return lift_1.operate(createFind(predicate, thisArg, "value"));
    }
    __name(find, "find");
    exports.find = find;
    function createFind(predicate, thisArg, emit) {
      var findIndex = emit === "index";
      return function(source, subscriber) {
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          var i = index++;
          if (predicate.call(thisArg, value, i, source)) {
            subscriber.next(findIndex ? i : value);
            subscriber.complete();
          }
        }, function() {
          subscriber.next(findIndex ? -1 : void 0);
          subscriber.complete();
        }));
      };
    }
    __name(createFind, "createFind");
    exports.createFind = createFind;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/findIndex.js
var require_findIndex = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/findIndex.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.findIndex = void 0;
    var lift_1 = require_lift();
    var find_1 = require_find();
    function findIndex(predicate, thisArg) {
      return lift_1.operate(find_1.createFind(predicate, thisArg, "index"));
    }
    __name(findIndex, "findIndex");
    exports.findIndex = findIndex;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/first.js
var require_first = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/first.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.first = void 0;
    var EmptyError_1 = require_EmptyError();
    var filter_1 = require_filter();
    var take_1 = require_take();
    var defaultIfEmpty_1 = require_defaultIfEmpty();
    var throwIfEmpty_1 = require_throwIfEmpty();
    var identity_1 = require_identity();
    function first(predicate, defaultValue) {
      var hasDefaultValue = arguments.length >= 2;
      return function(source) {
        return source.pipe(predicate ? filter_1.filter(function(v, i) {
          return predicate(v, i, source);
        }) : identity_1.identity, take_1.take(1), hasDefaultValue ? defaultIfEmpty_1.defaultIfEmpty(defaultValue) : throwIfEmpty_1.throwIfEmpty(function() {
          return new EmptyError_1.EmptyError();
        }));
      };
    }
    __name(first, "first");
    exports.first = first;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/groupBy.js
var require_groupBy = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/groupBy.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.groupBy = void 0;
    var Observable_1 = require_Observable();
    var innerFrom_1 = require_innerFrom();
    var Subject_1 = require_Subject();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function groupBy(keySelector, elementOrOptions, duration, connector) {
      return lift_1.operate(function(source, subscriber) {
        var element;
        if (!elementOrOptions || typeof elementOrOptions === "function") {
          element = elementOrOptions;
        } else {
          duration = elementOrOptions.duration, element = elementOrOptions.element, connector = elementOrOptions.connector;
        }
        var groups = /* @__PURE__ */ new Map();
        var notify = /* @__PURE__ */ __name(function(cb) {
          groups.forEach(cb);
          cb(subscriber);
        }, "notify");
        var handleError = /* @__PURE__ */ __name(function(err) {
          return notify(function(consumer) {
            return consumer.error(err);
          });
        }, "handleError");
        var activeGroups = 0;
        var teardownAttempted = false;
        var groupBySourceSubscriber = new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
          try {
            var key_1 = keySelector(value);
            var group_1 = groups.get(key_1);
            if (!group_1) {
              groups.set(key_1, group_1 = connector ? connector() : new Subject_1.Subject());
              var grouped = createGroupedObservable(key_1, group_1);
              subscriber.next(grouped);
              if (duration) {
                var durationSubscriber_1 = OperatorSubscriber_1.createOperatorSubscriber(group_1, function() {
                  group_1.complete();
                  durationSubscriber_1 === null || durationSubscriber_1 === void 0 ? void 0 : durationSubscriber_1.unsubscribe();
                }, void 0, void 0, function() {
                  return groups.delete(key_1);
                });
                groupBySourceSubscriber.add(innerFrom_1.innerFrom(duration(grouped)).subscribe(durationSubscriber_1));
              }
            }
            group_1.next(element ? element(value) : value);
          } catch (err) {
            handleError(err);
          }
        }, function() {
          return notify(function(consumer) {
            return consumer.complete();
          });
        }, handleError, function() {
          return groups.clear();
        }, function() {
          teardownAttempted = true;
          return activeGroups === 0;
        });
        source.subscribe(groupBySourceSubscriber);
        function createGroupedObservable(key, groupSubject) {
          var result = new Observable_1.Observable(function(groupSubscriber) {
            activeGroups++;
            var innerSub = groupSubject.subscribe(groupSubscriber);
            return function() {
              innerSub.unsubscribe();
              --activeGroups === 0 && teardownAttempted && groupBySourceSubscriber.unsubscribe();
            };
          });
          result.key = key;
          return result;
        }
        __name(createGroupedObservable, "createGroupedObservable");
      });
    }
    __name(groupBy, "groupBy");
    exports.groupBy = groupBy;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/isEmpty.js
var require_isEmpty = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/isEmpty.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isEmpty = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function isEmpty() {
      return lift_1.operate(function(source, subscriber) {
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
          subscriber.next(false);
          subscriber.complete();
        }, function() {
          subscriber.next(true);
          subscriber.complete();
        }));
      });
    }
    __name(isEmpty, "isEmpty");
    exports.isEmpty = isEmpty;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/takeLast.js
var require_takeLast = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/takeLast.js"(exports) {
    "use strict";
    var __values = exports && exports.__values || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
        return m.call(o);
      if (o && typeof o.length === "number")
        return {
          next: function() {
            if (o && i >= o.length)
              o = void 0;
            return {
              value: o && o[i++],
              done: !o
            };
          }
        };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.takeLast = void 0;
    var empty_1 = require_empty();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function takeLast(count) {
      return count <= 0 ? function() {
        return empty_1.EMPTY;
      } : lift_1.operate(function(source, subscriber) {
        var buffer = [];
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          buffer.push(value);
          count < buffer.length && buffer.shift();
        }, function() {
          var e_1, _a;
          try {
            for (var buffer_1 = __values(buffer), buffer_1_1 = buffer_1.next(); !buffer_1_1.done; buffer_1_1 = buffer_1.next()) {
              var value = buffer_1_1.value;
              subscriber.next(value);
            }
          } catch (e_1_1) {
            e_1 = {
              error: e_1_1
            };
          } finally {
            try {
              if (buffer_1_1 && !buffer_1_1.done && (_a = buffer_1.return))
                _a.call(buffer_1);
            } finally {
              if (e_1)
                throw e_1.error;
            }
          }
          subscriber.complete();
        }, void 0, function() {
          buffer = null;
        }));
      });
    }
    __name(takeLast, "takeLast");
    exports.takeLast = takeLast;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/last.js
var require_last = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/last.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.last = void 0;
    var EmptyError_1 = require_EmptyError();
    var filter_1 = require_filter();
    var takeLast_1 = require_takeLast();
    var throwIfEmpty_1 = require_throwIfEmpty();
    var defaultIfEmpty_1 = require_defaultIfEmpty();
    var identity_1 = require_identity();
    function last(predicate, defaultValue) {
      var hasDefaultValue = arguments.length >= 2;
      return function(source) {
        return source.pipe(predicate ? filter_1.filter(function(v, i) {
          return predicate(v, i, source);
        }) : identity_1.identity, takeLast_1.takeLast(1), hasDefaultValue ? defaultIfEmpty_1.defaultIfEmpty(defaultValue) : throwIfEmpty_1.throwIfEmpty(function() {
          return new EmptyError_1.EmptyError();
        }));
      };
    }
    __name(last, "last");
    exports.last = last;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/materialize.js
var require_materialize = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/materialize.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.materialize = void 0;
    var Notification_1 = require_Notification();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function materialize() {
      return lift_1.operate(function(source, subscriber) {
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          subscriber.next(Notification_1.Notification.createNext(value));
        }, function() {
          subscriber.next(Notification_1.Notification.createComplete());
          subscriber.complete();
        }, function(err) {
          subscriber.next(Notification_1.Notification.createError(err));
          subscriber.complete();
        }));
      });
    }
    __name(materialize, "materialize");
    exports.materialize = materialize;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/max.js
var require_max = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/max.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.max = void 0;
    var reduce_1 = require_reduce();
    var isFunction_1 = require_isFunction();
    function max(comparer) {
      return reduce_1.reduce(isFunction_1.isFunction(comparer) ? function(x, y) {
        return comparer(x, y) > 0 ? x : y;
      } : function(x, y) {
        return x > y ? x : y;
      });
    }
    __name(max, "max");
    exports.max = max;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/flatMap.js
var require_flatMap = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/flatMap.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.flatMap = void 0;
    var mergeMap_1 = require_mergeMap();
    exports.flatMap = mergeMap_1.mergeMap;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/mergeMapTo.js
var require_mergeMapTo = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/mergeMapTo.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.mergeMapTo = void 0;
    var mergeMap_1 = require_mergeMap();
    var isFunction_1 = require_isFunction();
    function mergeMapTo(innerObservable, resultSelector, concurrent) {
      if (concurrent === void 0) {
        concurrent = Infinity;
      }
      if (isFunction_1.isFunction(resultSelector)) {
        return mergeMap_1.mergeMap(function() {
          return innerObservable;
        }, resultSelector, concurrent);
      }
      if (typeof resultSelector === "number") {
        concurrent = resultSelector;
      }
      return mergeMap_1.mergeMap(function() {
        return innerObservable;
      }, concurrent);
    }
    __name(mergeMapTo, "mergeMapTo");
    exports.mergeMapTo = mergeMapTo;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/mergeScan.js
var require_mergeScan = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/mergeScan.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.mergeScan = void 0;
    var lift_1 = require_lift();
    var mergeInternals_1 = require_mergeInternals();
    function mergeScan(accumulator, seed, concurrent) {
      if (concurrent === void 0) {
        concurrent = Infinity;
      }
      return lift_1.operate(function(source, subscriber) {
        var state = seed;
        return mergeInternals_1.mergeInternals(source, subscriber, function(value, index) {
          return accumulator(state, value, index);
        }, concurrent, function(value) {
          state = value;
        }, false, void 0, function() {
          return state = null;
        });
      });
    }
    __name(mergeScan, "mergeScan");
    exports.mergeScan = mergeScan;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/merge.js
var require_merge2 = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/merge.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = {
          error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.merge = void 0;
    var lift_1 = require_lift();
    var argsOrArgArray_1 = require_argsOrArgArray();
    var mergeAll_1 = require_mergeAll();
    var args_1 = require_args();
    var from_1 = require_from();
    function merge() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var scheduler = args_1.popScheduler(args);
      var concurrent = args_1.popNumber(args, Infinity);
      args = argsOrArgArray_1.argsOrArgArray(args);
      return lift_1.operate(function(source, subscriber) {
        mergeAll_1.mergeAll(concurrent)(from_1.from(__spreadArray([
          source
        ], __read(args)), scheduler)).subscribe(subscriber);
      });
    }
    __name(merge, "merge");
    exports.merge = merge;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/mergeWith.js
var require_mergeWith = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/mergeWith.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = {
          error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.mergeWith = void 0;
    var merge_1 = require_merge2();
    function mergeWith() {
      var otherSources = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        otherSources[_i] = arguments[_i];
      }
      return merge_1.merge.apply(void 0, __spreadArray([], __read(otherSources)));
    }
    __name(mergeWith, "mergeWith");
    exports.mergeWith = mergeWith;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/min.js
var require_min = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/min.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.min = void 0;
    var reduce_1 = require_reduce();
    var isFunction_1 = require_isFunction();
    function min(comparer) {
      return reduce_1.reduce(isFunction_1.isFunction(comparer) ? function(x, y) {
        return comparer(x, y) < 0 ? x : y;
      } : function(x, y) {
        return x < y ? x : y;
      });
    }
    __name(min, "min");
    exports.min = min;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/multicast.js
var require_multicast = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/multicast.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.multicast = void 0;
    var ConnectableObservable_1 = require_ConnectableObservable();
    var isFunction_1 = require_isFunction();
    var connect_1 = require_connect();
    function multicast(subjectOrSubjectFactory, selector) {
      var subjectFactory = isFunction_1.isFunction(subjectOrSubjectFactory) ? subjectOrSubjectFactory : function() {
        return subjectOrSubjectFactory;
      };
      if (isFunction_1.isFunction(selector)) {
        return connect_1.connect(selector, {
          connector: subjectFactory
        });
      }
      return function(source) {
        return new ConnectableObservable_1.ConnectableObservable(source, subjectFactory);
      };
    }
    __name(multicast, "multicast");
    exports.multicast = multicast;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/onErrorResumeNextWith.js
var require_onErrorResumeNextWith = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/onErrorResumeNextWith.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = {
          error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.onErrorResumeNext = exports.onErrorResumeNextWith = void 0;
    var argsOrArgArray_1 = require_argsOrArgArray();
    var onErrorResumeNext_1 = require_onErrorResumeNext();
    function onErrorResumeNextWith() {
      var sources = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
      }
      var nextSources = argsOrArgArray_1.argsOrArgArray(sources);
      return function(source) {
        return onErrorResumeNext_1.onErrorResumeNext.apply(void 0, __spreadArray([
          source
        ], __read(nextSources)));
      };
    }
    __name(onErrorResumeNextWith, "onErrorResumeNextWith");
    exports.onErrorResumeNextWith = onErrorResumeNextWith;
    exports.onErrorResumeNext = onErrorResumeNextWith;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/pairwise.js
var require_pairwise = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/pairwise.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.pairwise = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function pairwise() {
      return lift_1.operate(function(source, subscriber) {
        var prev;
        var hasPrev = false;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          var p = prev;
          prev = value;
          hasPrev && subscriber.next([
            p,
            value
          ]);
          hasPrev = true;
        }));
      });
    }
    __name(pairwise, "pairwise");
    exports.pairwise = pairwise;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/pluck.js
var require_pluck = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/pluck.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.pluck = void 0;
    var map_1 = require_map();
    function pluck() {
      var properties = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        properties[_i] = arguments[_i];
      }
      var length = properties.length;
      if (length === 0) {
        throw new Error("list of properties cannot be empty.");
      }
      return map_1.map(function(x) {
        var currentProp = x;
        for (var i = 0; i < length; i++) {
          var p = currentProp === null || currentProp === void 0 ? void 0 : currentProp[properties[i]];
          if (typeof p !== "undefined") {
            currentProp = p;
          } else {
            return void 0;
          }
        }
        return currentProp;
      });
    }
    __name(pluck, "pluck");
    exports.pluck = pluck;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/publish.js
var require_publish = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/publish.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.publish = void 0;
    var Subject_1 = require_Subject();
    var multicast_1 = require_multicast();
    var connect_1 = require_connect();
    function publish(selector) {
      return selector ? function(source) {
        return connect_1.connect(selector)(source);
      } : function(source) {
        return multicast_1.multicast(new Subject_1.Subject())(source);
      };
    }
    __name(publish, "publish");
    exports.publish = publish;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/publishBehavior.js
var require_publishBehavior = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/publishBehavior.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.publishBehavior = void 0;
    var BehaviorSubject_1 = require_BehaviorSubject();
    var ConnectableObservable_1 = require_ConnectableObservable();
    function publishBehavior(initialValue) {
      return function(source) {
        var subject = new BehaviorSubject_1.BehaviorSubject(initialValue);
        return new ConnectableObservable_1.ConnectableObservable(source, function() {
          return subject;
        });
      };
    }
    __name(publishBehavior, "publishBehavior");
    exports.publishBehavior = publishBehavior;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/publishLast.js
var require_publishLast = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/publishLast.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.publishLast = void 0;
    var AsyncSubject_1 = require_AsyncSubject();
    var ConnectableObservable_1 = require_ConnectableObservable();
    function publishLast() {
      return function(source) {
        var subject = new AsyncSubject_1.AsyncSubject();
        return new ConnectableObservable_1.ConnectableObservable(source, function() {
          return subject;
        });
      };
    }
    __name(publishLast, "publishLast");
    exports.publishLast = publishLast;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/publishReplay.js
var require_publishReplay = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/publishReplay.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.publishReplay = void 0;
    var ReplaySubject_1 = require_ReplaySubject();
    var multicast_1 = require_multicast();
    var isFunction_1 = require_isFunction();
    function publishReplay(bufferSize, windowTime, selectorOrScheduler, timestampProvider) {
      if (selectorOrScheduler && !isFunction_1.isFunction(selectorOrScheduler)) {
        timestampProvider = selectorOrScheduler;
      }
      var selector = isFunction_1.isFunction(selectorOrScheduler) ? selectorOrScheduler : void 0;
      return function(source) {
        return multicast_1.multicast(new ReplaySubject_1.ReplaySubject(bufferSize, windowTime, timestampProvider), selector)(source);
      };
    }
    __name(publishReplay, "publishReplay");
    exports.publishReplay = publishReplay;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/raceWith.js
var require_raceWith = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/raceWith.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = {
          error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.raceWith = void 0;
    var race_1 = require_race();
    var lift_1 = require_lift();
    var identity_1 = require_identity();
    function raceWith() {
      var otherSources = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        otherSources[_i] = arguments[_i];
      }
      return !otherSources.length ? identity_1.identity : lift_1.operate(function(source, subscriber) {
        race_1.raceInit(__spreadArray([
          source
        ], __read(otherSources)))(subscriber);
      });
    }
    __name(raceWith, "raceWith");
    exports.raceWith = raceWith;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/repeat.js
var require_repeat = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/repeat.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.repeat = void 0;
    var empty_1 = require_empty();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var innerFrom_1 = require_innerFrom();
    var timer_1 = require_timer();
    function repeat(countOrConfig) {
      var _a;
      var count = Infinity;
      var delay;
      if (countOrConfig != null) {
        if (typeof countOrConfig === "object") {
          _a = countOrConfig.count, count = _a === void 0 ? Infinity : _a, delay = countOrConfig.delay;
        } else {
          count = countOrConfig;
        }
      }
      return count <= 0 ? function() {
        return empty_1.EMPTY;
      } : lift_1.operate(function(source, subscriber) {
        var soFar = 0;
        var sourceSub;
        var resubscribe = /* @__PURE__ */ __name(function() {
          sourceSub === null || sourceSub === void 0 ? void 0 : sourceSub.unsubscribe();
          sourceSub = null;
          if (delay != null) {
            var notifier = typeof delay === "number" ? timer_1.timer(delay) : innerFrom_1.innerFrom(delay(soFar));
            var notifierSubscriber_1 = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
              notifierSubscriber_1.unsubscribe();
              subscribeToSource();
            });
            notifier.subscribe(notifierSubscriber_1);
          } else {
            subscribeToSource();
          }
        }, "resubscribe");
        var subscribeToSource = /* @__PURE__ */ __name(function() {
          var syncUnsub = false;
          sourceSub = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, void 0, function() {
            if (++soFar < count) {
              if (sourceSub) {
                resubscribe();
              } else {
                syncUnsub = true;
              }
            } else {
              subscriber.complete();
            }
          }));
          if (syncUnsub) {
            resubscribe();
          }
        }, "subscribeToSource");
        subscribeToSource();
      });
    }
    __name(repeat, "repeat");
    exports.repeat = repeat;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/repeatWhen.js
var require_repeatWhen = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/repeatWhen.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.repeatWhen = void 0;
    var innerFrom_1 = require_innerFrom();
    var Subject_1 = require_Subject();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function repeatWhen(notifier) {
      return lift_1.operate(function(source, subscriber) {
        var innerSub;
        var syncResub = false;
        var completions$;
        var isNotifierComplete = false;
        var isMainComplete = false;
        var checkComplete = /* @__PURE__ */ __name(function() {
          return isMainComplete && isNotifierComplete && (subscriber.complete(), true);
        }, "checkComplete");
        var getCompletionSubject = /* @__PURE__ */ __name(function() {
          if (!completions$) {
            completions$ = new Subject_1.Subject();
            innerFrom_1.innerFrom(notifier(completions$)).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
              if (innerSub) {
                subscribeForRepeatWhen();
              } else {
                syncResub = true;
              }
            }, function() {
              isNotifierComplete = true;
              checkComplete();
            }));
          }
          return completions$;
        }, "getCompletionSubject");
        var subscribeForRepeatWhen = /* @__PURE__ */ __name(function() {
          isMainComplete = false;
          innerSub = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, void 0, function() {
            isMainComplete = true;
            !checkComplete() && getCompletionSubject().next();
          }));
          if (syncResub) {
            innerSub.unsubscribe();
            innerSub = null;
            syncResub = false;
            subscribeForRepeatWhen();
          }
        }, "subscribeForRepeatWhen");
        subscribeForRepeatWhen();
      });
    }
    __name(repeatWhen, "repeatWhen");
    exports.repeatWhen = repeatWhen;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/retry.js
var require_retry = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/retry.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.retry = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var identity_1 = require_identity();
    var timer_1 = require_timer();
    var innerFrom_1 = require_innerFrom();
    function retry(configOrCount) {
      if (configOrCount === void 0) {
        configOrCount = Infinity;
      }
      var config2;
      if (configOrCount && typeof configOrCount === "object") {
        config2 = configOrCount;
      } else {
        config2 = {
          count: configOrCount
        };
      }
      var _a = config2.count, count = _a === void 0 ? Infinity : _a, delay = config2.delay, _b = config2.resetOnSuccess, resetOnSuccess = _b === void 0 ? false : _b;
      return count <= 0 ? identity_1.identity : lift_1.operate(function(source, subscriber) {
        var soFar = 0;
        var innerSub;
        var subscribeForRetry = /* @__PURE__ */ __name(function() {
          var syncUnsub = false;
          innerSub = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            if (resetOnSuccess) {
              soFar = 0;
            }
            subscriber.next(value);
          }, void 0, function(err) {
            if (soFar++ < count) {
              var resub_1 = /* @__PURE__ */ __name(function() {
                if (innerSub) {
                  innerSub.unsubscribe();
                  innerSub = null;
                  subscribeForRetry();
                } else {
                  syncUnsub = true;
                }
              }, "resub_1");
              if (delay != null) {
                var notifier = typeof delay === "number" ? timer_1.timer(delay) : innerFrom_1.innerFrom(delay(err, soFar));
                var notifierSubscriber_1 = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
                  notifierSubscriber_1.unsubscribe();
                  resub_1();
                }, function() {
                  subscriber.complete();
                });
                notifier.subscribe(notifierSubscriber_1);
              } else {
                resub_1();
              }
            } else {
              subscriber.error(err);
            }
          }));
          if (syncUnsub) {
            innerSub.unsubscribe();
            innerSub = null;
            subscribeForRetry();
          }
        }, "subscribeForRetry");
        subscribeForRetry();
      });
    }
    __name(retry, "retry");
    exports.retry = retry;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/retryWhen.js
var require_retryWhen = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/retryWhen.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.retryWhen = void 0;
    var innerFrom_1 = require_innerFrom();
    var Subject_1 = require_Subject();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function retryWhen(notifier) {
      return lift_1.operate(function(source, subscriber) {
        var innerSub;
        var syncResub = false;
        var errors$;
        var subscribeForRetryWhen = /* @__PURE__ */ __name(function() {
          innerSub = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, void 0, void 0, function(err) {
            if (!errors$) {
              errors$ = new Subject_1.Subject();
              innerFrom_1.innerFrom(notifier(errors$)).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
                return innerSub ? subscribeForRetryWhen() : syncResub = true;
              }));
            }
            if (errors$) {
              errors$.next(err);
            }
          }));
          if (syncResub) {
            innerSub.unsubscribe();
            innerSub = null;
            syncResub = false;
            subscribeForRetryWhen();
          }
        }, "subscribeForRetryWhen");
        subscribeForRetryWhen();
      });
    }
    __name(retryWhen, "retryWhen");
    exports.retryWhen = retryWhen;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/sample.js
var require_sample = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/sample.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.sample = void 0;
    var innerFrom_1 = require_innerFrom();
    var lift_1 = require_lift();
    var noop_1 = require_noop();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function sample(notifier) {
      return lift_1.operate(function(source, subscriber) {
        var hasValue = false;
        var lastValue = null;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          hasValue = true;
          lastValue = value;
        }));
        innerFrom_1.innerFrom(notifier).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
          if (hasValue) {
            hasValue = false;
            var value = lastValue;
            lastValue = null;
            subscriber.next(value);
          }
        }, noop_1.noop));
      });
    }
    __name(sample, "sample");
    exports.sample = sample;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/sampleTime.js
var require_sampleTime = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/sampleTime.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.sampleTime = void 0;
    var async_1 = require_async();
    var sample_1 = require_sample();
    var interval_1 = require_interval();
    function sampleTime(period, scheduler) {
      if (scheduler === void 0) {
        scheduler = async_1.asyncScheduler;
      }
      return sample_1.sample(interval_1.interval(period, scheduler));
    }
    __name(sampleTime, "sampleTime");
    exports.sampleTime = sampleTime;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/scan.js
var require_scan = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/scan.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.scan = void 0;
    var lift_1 = require_lift();
    var scanInternals_1 = require_scanInternals();
    function scan(accumulator, seed) {
      return lift_1.operate(scanInternals_1.scanInternals(accumulator, seed, arguments.length >= 2, true));
    }
    __name(scan, "scan");
    exports.scan = scan;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/sequenceEqual.js
var require_sequenceEqual = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/sequenceEqual.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.sequenceEqual = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var innerFrom_1 = require_innerFrom();
    function sequenceEqual(compareTo, comparator) {
      if (comparator === void 0) {
        comparator = /* @__PURE__ */ __name(function(a, b) {
          return a === b;
        }, "comparator");
      }
      return lift_1.operate(function(source, subscriber) {
        var aState = createState();
        var bState = createState();
        var emit = /* @__PURE__ */ __name(function(isEqual) {
          subscriber.next(isEqual);
          subscriber.complete();
        }, "emit");
        var createSubscriber = /* @__PURE__ */ __name(function(selfState, otherState) {
          var sequenceEqualSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(a) {
            var buffer = otherState.buffer, complete = otherState.complete;
            if (buffer.length === 0) {
              complete ? emit(false) : selfState.buffer.push(a);
            } else {
              !comparator(a, buffer.shift()) && emit(false);
            }
          }, function() {
            selfState.complete = true;
            var complete = otherState.complete, buffer = otherState.buffer;
            complete && emit(buffer.length === 0);
            sequenceEqualSubscriber === null || sequenceEqualSubscriber === void 0 ? void 0 : sequenceEqualSubscriber.unsubscribe();
          });
          return sequenceEqualSubscriber;
        }, "createSubscriber");
        source.subscribe(createSubscriber(aState, bState));
        innerFrom_1.innerFrom(compareTo).subscribe(createSubscriber(bState, aState));
      });
    }
    __name(sequenceEqual, "sequenceEqual");
    exports.sequenceEqual = sequenceEqual;
    function createState() {
      return {
        buffer: [],
        complete: false
      };
    }
    __name(createState, "createState");
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/share.js
var require_share = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/share.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = {
          error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.share = void 0;
    var innerFrom_1 = require_innerFrom();
    var Subject_1 = require_Subject();
    var Subscriber_1 = require_Subscriber();
    var lift_1 = require_lift();
    function share(options) {
      if (options === void 0) {
        options = {};
      }
      var _a = options.connector, connector = _a === void 0 ? function() {
        return new Subject_1.Subject();
      } : _a, _b = options.resetOnError, resetOnError = _b === void 0 ? true : _b, _c = options.resetOnComplete, resetOnComplete = _c === void 0 ? true : _c, _d = options.resetOnRefCountZero, resetOnRefCountZero = _d === void 0 ? true : _d;
      return function(wrapperSource) {
        var connection;
        var resetConnection;
        var subject;
        var refCount = 0;
        var hasCompleted = false;
        var hasErrored = false;
        var cancelReset = /* @__PURE__ */ __name(function() {
          resetConnection === null || resetConnection === void 0 ? void 0 : resetConnection.unsubscribe();
          resetConnection = void 0;
        }, "cancelReset");
        var reset = /* @__PURE__ */ __name(function() {
          cancelReset();
          connection = subject = void 0;
          hasCompleted = hasErrored = false;
        }, "reset");
        var resetAndUnsubscribe = /* @__PURE__ */ __name(function() {
          var conn = connection;
          reset();
          conn === null || conn === void 0 ? void 0 : conn.unsubscribe();
        }, "resetAndUnsubscribe");
        return lift_1.operate(function(source, subscriber) {
          refCount++;
          if (!hasErrored && !hasCompleted) {
            cancelReset();
          }
          var dest = subject = subject !== null && subject !== void 0 ? subject : connector();
          subscriber.add(function() {
            refCount--;
            if (refCount === 0 && !hasErrored && !hasCompleted) {
              resetConnection = handleReset(resetAndUnsubscribe, resetOnRefCountZero);
            }
          });
          dest.subscribe(subscriber);
          if (!connection && refCount > 0) {
            connection = new Subscriber_1.SafeSubscriber({
              next: function(value) {
                return dest.next(value);
              },
              error: function(err) {
                hasErrored = true;
                cancelReset();
                resetConnection = handleReset(reset, resetOnError, err);
                dest.error(err);
              },
              complete: function() {
                hasCompleted = true;
                cancelReset();
                resetConnection = handleReset(reset, resetOnComplete);
                dest.complete();
              }
            });
            innerFrom_1.innerFrom(source).subscribe(connection);
          }
        })(wrapperSource);
      };
    }
    __name(share, "share");
    exports.share = share;
    function handleReset(reset, on) {
      var args = [];
      for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
      }
      if (on === true) {
        reset();
        return;
      }
      if (on === false) {
        return;
      }
      var onSubscriber = new Subscriber_1.SafeSubscriber({
        next: function() {
          onSubscriber.unsubscribe();
          reset();
        }
      });
      return innerFrom_1.innerFrom(on.apply(void 0, __spreadArray([], __read(args)))).subscribe(onSubscriber);
    }
    __name(handleReset, "handleReset");
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/shareReplay.js
var require_shareReplay = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/shareReplay.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.shareReplay = void 0;
    var ReplaySubject_1 = require_ReplaySubject();
    var share_1 = require_share();
    function shareReplay(configOrBufferSize, windowTime, scheduler) {
      var _a, _b, _c;
      var bufferSize;
      var refCount = false;
      if (configOrBufferSize && typeof configOrBufferSize === "object") {
        _a = configOrBufferSize.bufferSize, bufferSize = _a === void 0 ? Infinity : _a, _b = configOrBufferSize.windowTime, windowTime = _b === void 0 ? Infinity : _b, _c = configOrBufferSize.refCount, refCount = _c === void 0 ? false : _c, scheduler = configOrBufferSize.scheduler;
      } else {
        bufferSize = configOrBufferSize !== null && configOrBufferSize !== void 0 ? configOrBufferSize : Infinity;
      }
      return share_1.share({
        connector: function() {
          return new ReplaySubject_1.ReplaySubject(bufferSize, windowTime, scheduler);
        },
        resetOnError: true,
        resetOnComplete: false,
        resetOnRefCountZero: refCount
      });
    }
    __name(shareReplay, "shareReplay");
    exports.shareReplay = shareReplay;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/single.js
var require_single = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/single.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.single = void 0;
    var EmptyError_1 = require_EmptyError();
    var SequenceError_1 = require_SequenceError();
    var NotFoundError_1 = require_NotFoundError();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function single(predicate) {
      return lift_1.operate(function(source, subscriber) {
        var hasValue = false;
        var singleValue;
        var seenValue = false;
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          seenValue = true;
          if (!predicate || predicate(value, index++, source)) {
            hasValue && subscriber.error(new SequenceError_1.SequenceError("Too many matching values"));
            hasValue = true;
            singleValue = value;
          }
        }, function() {
          if (hasValue) {
            subscriber.next(singleValue);
            subscriber.complete();
          } else {
            subscriber.error(seenValue ? new NotFoundError_1.NotFoundError("No matching values") : new EmptyError_1.EmptyError());
          }
        }));
      });
    }
    __name(single, "single");
    exports.single = single;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/skip.js
var require_skip = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/skip.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.skip = void 0;
    var filter_1 = require_filter();
    function skip(count) {
      return filter_1.filter(function(_, index) {
        return count <= index;
      });
    }
    __name(skip, "skip");
    exports.skip = skip;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/skipLast.js
var require_skipLast = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/skipLast.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.skipLast = void 0;
    var identity_1 = require_identity();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function skipLast(skipCount) {
      return skipCount <= 0 ? identity_1.identity : lift_1.operate(function(source, subscriber) {
        var ring = new Array(skipCount);
        var seen = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          var valueIndex = seen++;
          if (valueIndex < skipCount) {
            ring[valueIndex] = value;
          } else {
            var index = valueIndex % skipCount;
            var oldValue = ring[index];
            ring[index] = value;
            subscriber.next(oldValue);
          }
        }));
        return function() {
          ring = null;
        };
      });
    }
    __name(skipLast, "skipLast");
    exports.skipLast = skipLast;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/skipUntil.js
var require_skipUntil = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/skipUntil.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.skipUntil = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var innerFrom_1 = require_innerFrom();
    var noop_1 = require_noop();
    function skipUntil(notifier) {
      return lift_1.operate(function(source, subscriber) {
        var taking = false;
        var skipSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
          skipSubscriber === null || skipSubscriber === void 0 ? void 0 : skipSubscriber.unsubscribe();
          taking = true;
        }, noop_1.noop);
        innerFrom_1.innerFrom(notifier).subscribe(skipSubscriber);
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          return taking && subscriber.next(value);
        }));
      });
    }
    __name(skipUntil, "skipUntil");
    exports.skipUntil = skipUntil;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/skipWhile.js
var require_skipWhile = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/skipWhile.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.skipWhile = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function skipWhile(predicate) {
      return lift_1.operate(function(source, subscriber) {
        var taking = false;
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          return (taking || (taking = !predicate(value, index++))) && subscriber.next(value);
        }));
      });
    }
    __name(skipWhile, "skipWhile");
    exports.skipWhile = skipWhile;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/startWith.js
var require_startWith = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/startWith.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.startWith = void 0;
    var concat_1 = require_concat();
    var args_1 = require_args();
    var lift_1 = require_lift();
    function startWith() {
      var values = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
      }
      var scheduler = args_1.popScheduler(values);
      return lift_1.operate(function(source, subscriber) {
        (scheduler ? concat_1.concat(values, source, scheduler) : concat_1.concat(values, source)).subscribe(subscriber);
      });
    }
    __name(startWith, "startWith");
    exports.startWith = startWith;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/switchMap.js
var require_switchMap = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/switchMap.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.switchMap = void 0;
    var innerFrom_1 = require_innerFrom();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function switchMap(project, resultSelector) {
      return lift_1.operate(function(source, subscriber) {
        var innerSubscriber = null;
        var index = 0;
        var isComplete = false;
        var checkComplete = /* @__PURE__ */ __name(function() {
          return isComplete && !innerSubscriber && subscriber.complete();
        }, "checkComplete");
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          innerSubscriber === null || innerSubscriber === void 0 ? void 0 : innerSubscriber.unsubscribe();
          var innerIndex = 0;
          var outerIndex = index++;
          innerFrom_1.innerFrom(project(value, outerIndex)).subscribe(innerSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(innerValue) {
            return subscriber.next(resultSelector ? resultSelector(value, innerValue, outerIndex, innerIndex++) : innerValue);
          }, function() {
            innerSubscriber = null;
            checkComplete();
          }));
        }, function() {
          isComplete = true;
          checkComplete();
        }));
      });
    }
    __name(switchMap, "switchMap");
    exports.switchMap = switchMap;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/switchAll.js
var require_switchAll = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/switchAll.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.switchAll = void 0;
    var switchMap_1 = require_switchMap();
    var identity_1 = require_identity();
    function switchAll() {
      return switchMap_1.switchMap(identity_1.identity);
    }
    __name(switchAll, "switchAll");
    exports.switchAll = switchAll;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/switchMapTo.js
var require_switchMapTo = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/switchMapTo.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.switchMapTo = void 0;
    var switchMap_1 = require_switchMap();
    var isFunction_1 = require_isFunction();
    function switchMapTo(innerObservable, resultSelector) {
      return isFunction_1.isFunction(resultSelector) ? switchMap_1.switchMap(function() {
        return innerObservable;
      }, resultSelector) : switchMap_1.switchMap(function() {
        return innerObservable;
      });
    }
    __name(switchMapTo, "switchMapTo");
    exports.switchMapTo = switchMapTo;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/switchScan.js
var require_switchScan = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/switchScan.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.switchScan = void 0;
    var switchMap_1 = require_switchMap();
    var lift_1 = require_lift();
    function switchScan(accumulator, seed) {
      return lift_1.operate(function(source, subscriber) {
        var state = seed;
        switchMap_1.switchMap(function(value, index) {
          return accumulator(state, value, index);
        }, function(_, innerValue) {
          return state = innerValue, innerValue;
        })(source).subscribe(subscriber);
        return function() {
          state = null;
        };
      });
    }
    __name(switchScan, "switchScan");
    exports.switchScan = switchScan;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/takeUntil.js
var require_takeUntil = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/takeUntil.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.takeUntil = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var innerFrom_1 = require_innerFrom();
    var noop_1 = require_noop();
    function takeUntil(notifier) {
      return lift_1.operate(function(source, subscriber) {
        innerFrom_1.innerFrom(notifier).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
          return subscriber.complete();
        }, noop_1.noop));
        !subscriber.closed && source.subscribe(subscriber);
      });
    }
    __name(takeUntil, "takeUntil");
    exports.takeUntil = takeUntil;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/takeWhile.js
var require_takeWhile = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/takeWhile.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.takeWhile = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function takeWhile(predicate, inclusive) {
      if (inclusive === void 0) {
        inclusive = false;
      }
      return lift_1.operate(function(source, subscriber) {
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          var result = predicate(value, index++);
          (result || inclusive) && subscriber.next(value);
          !result && subscriber.complete();
        }));
      });
    }
    __name(takeWhile, "takeWhile");
    exports.takeWhile = takeWhile;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/tap.js
var require_tap = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/tap.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.tap = void 0;
    var isFunction_1 = require_isFunction();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var identity_1 = require_identity();
    function tap(observerOrNext, error, complete) {
      var tapObserver = isFunction_1.isFunction(observerOrNext) || error || complete ? {
        next: observerOrNext,
        error,
        complete
      } : observerOrNext;
      return tapObserver ? lift_1.operate(function(source, subscriber) {
        var _a;
        (_a = tapObserver.subscribe) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
        var isUnsub = true;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          var _a2;
          (_a2 = tapObserver.next) === null || _a2 === void 0 ? void 0 : _a2.call(tapObserver, value);
          subscriber.next(value);
        }, function() {
          var _a2;
          isUnsub = false;
          (_a2 = tapObserver.complete) === null || _a2 === void 0 ? void 0 : _a2.call(tapObserver);
          subscriber.complete();
        }, function(err) {
          var _a2;
          isUnsub = false;
          (_a2 = tapObserver.error) === null || _a2 === void 0 ? void 0 : _a2.call(tapObserver, err);
          subscriber.error(err);
        }, function() {
          var _a2, _b;
          if (isUnsub) {
            (_a2 = tapObserver.unsubscribe) === null || _a2 === void 0 ? void 0 : _a2.call(tapObserver);
          }
          (_b = tapObserver.finalize) === null || _b === void 0 ? void 0 : _b.call(tapObserver);
        }));
      }) : identity_1.identity;
    }
    __name(tap, "tap");
    exports.tap = tap;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/throttle.js
var require_throttle = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/throttle.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.throttle = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var innerFrom_1 = require_innerFrom();
    function throttle(durationSelector, config2) {
      return lift_1.operate(function(source, subscriber) {
        var _a = config2 !== null && config2 !== void 0 ? config2 : {}, _b = _a.leading, leading = _b === void 0 ? true : _b, _c = _a.trailing, trailing = _c === void 0 ? false : _c;
        var hasValue = false;
        var sendValue = null;
        var throttled = null;
        var isComplete = false;
        var endThrottling = /* @__PURE__ */ __name(function() {
          throttled === null || throttled === void 0 ? void 0 : throttled.unsubscribe();
          throttled = null;
          if (trailing) {
            send();
            isComplete && subscriber.complete();
          }
        }, "endThrottling");
        var cleanupThrottling = /* @__PURE__ */ __name(function() {
          throttled = null;
          isComplete && subscriber.complete();
        }, "cleanupThrottling");
        var startThrottle = /* @__PURE__ */ __name(function(value) {
          return throttled = innerFrom_1.innerFrom(durationSelector(value)).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, endThrottling, cleanupThrottling));
        }, "startThrottle");
        var send = /* @__PURE__ */ __name(function() {
          if (hasValue) {
            hasValue = false;
            var value = sendValue;
            sendValue = null;
            subscriber.next(value);
            !isComplete && startThrottle(value);
          }
        }, "send");
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          hasValue = true;
          sendValue = value;
          !(throttled && !throttled.closed) && (leading ? send() : startThrottle(value));
        }, function() {
          isComplete = true;
          !(trailing && hasValue && throttled && !throttled.closed) && subscriber.complete();
        }));
      });
    }
    __name(throttle, "throttle");
    exports.throttle = throttle;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/throttleTime.js
var require_throttleTime = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/throttleTime.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.throttleTime = void 0;
    var async_1 = require_async();
    var throttle_1 = require_throttle();
    var timer_1 = require_timer();
    function throttleTime(duration, scheduler, config2) {
      if (scheduler === void 0) {
        scheduler = async_1.asyncScheduler;
      }
      var duration$ = timer_1.timer(duration, scheduler);
      return throttle_1.throttle(function() {
        return duration$;
      }, config2);
    }
    __name(throttleTime, "throttleTime");
    exports.throttleTime = throttleTime;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/timeInterval.js
var require_timeInterval = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/timeInterval.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.TimeInterval = exports.timeInterval = void 0;
    var async_1 = require_async();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function timeInterval(scheduler) {
      if (scheduler === void 0) {
        scheduler = async_1.asyncScheduler;
      }
      return lift_1.operate(function(source, subscriber) {
        var last = scheduler.now();
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          var now = scheduler.now();
          var interval = now - last;
          last = now;
          subscriber.next(new TimeInterval(value, interval));
        }));
      });
    }
    __name(timeInterval, "timeInterval");
    exports.timeInterval = timeInterval;
    var TimeInterval = /* @__PURE__ */ function() {
      function TimeInterval2(value, interval) {
        this.value = value;
        this.interval = interval;
      }
      __name(TimeInterval2, "TimeInterval");
      return TimeInterval2;
    }();
    exports.TimeInterval = TimeInterval;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/timeoutWith.js
var require_timeoutWith = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/timeoutWith.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.timeoutWith = void 0;
    var async_1 = require_async();
    var isDate_1 = require_isDate();
    var timeout_1 = require_timeout();
    function timeoutWith(due, withObservable, scheduler) {
      var first;
      var each;
      var _with;
      scheduler = scheduler !== null && scheduler !== void 0 ? scheduler : async_1.async;
      if (isDate_1.isValidDate(due)) {
        first = due;
      } else if (typeof due === "number") {
        each = due;
      }
      if (withObservable) {
        _with = /* @__PURE__ */ __name(function() {
          return withObservable;
        }, "_with");
      } else {
        throw new TypeError("No observable provided to switch to");
      }
      if (first == null && each == null) {
        throw new TypeError("No timeout provided.");
      }
      return timeout_1.timeout({
        first,
        each,
        scheduler,
        with: _with
      });
    }
    __name(timeoutWith, "timeoutWith");
    exports.timeoutWith = timeoutWith;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/timestamp.js
var require_timestamp = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/timestamp.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.timestamp = void 0;
    var dateTimestampProvider_1 = require_dateTimestampProvider();
    var map_1 = require_map();
    function timestamp(timestampProvider) {
      if (timestampProvider === void 0) {
        timestampProvider = dateTimestampProvider_1.dateTimestampProvider;
      }
      return map_1.map(function(value) {
        return {
          value,
          timestamp: timestampProvider.now()
        };
      });
    }
    __name(timestamp, "timestamp");
    exports.timestamp = timestamp;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/window.js
var require_window = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/window.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.window = void 0;
    var Subject_1 = require_Subject();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var noop_1 = require_noop();
    var innerFrom_1 = require_innerFrom();
    function window2(windowBoundaries) {
      return lift_1.operate(function(source, subscriber) {
        var windowSubject = new Subject_1.Subject();
        subscriber.next(windowSubject.asObservable());
        var errorHandler = /* @__PURE__ */ __name(function(err) {
          windowSubject.error(err);
          subscriber.error(err);
        }, "errorHandler");
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          return windowSubject === null || windowSubject === void 0 ? void 0 : windowSubject.next(value);
        }, function() {
          windowSubject.complete();
          subscriber.complete();
        }, errorHandler));
        innerFrom_1.innerFrom(windowBoundaries).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
          windowSubject.complete();
          subscriber.next(windowSubject = new Subject_1.Subject());
        }, noop_1.noop, errorHandler));
        return function() {
          windowSubject === null || windowSubject === void 0 ? void 0 : windowSubject.unsubscribe();
          windowSubject = null;
        };
      });
    }
    __name(window2, "window");
    exports.window = window2;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/windowCount.js
var require_windowCount = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/windowCount.js"(exports) {
    "use strict";
    var __values = exports && exports.__values || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
        return m.call(o);
      if (o && typeof o.length === "number")
        return {
          next: function() {
            if (o && i >= o.length)
              o = void 0;
            return {
              value: o && o[i++],
              done: !o
            };
          }
        };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.windowCount = void 0;
    var Subject_1 = require_Subject();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function windowCount(windowSize, startWindowEvery) {
      if (startWindowEvery === void 0) {
        startWindowEvery = 0;
      }
      var startEvery = startWindowEvery > 0 ? startWindowEvery : windowSize;
      return lift_1.operate(function(source, subscriber) {
        var windows = [
          new Subject_1.Subject()
        ];
        var starts = [];
        var count = 0;
        subscriber.next(windows[0].asObservable());
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          var e_1, _a;
          try {
            for (var windows_1 = __values(windows), windows_1_1 = windows_1.next(); !windows_1_1.done; windows_1_1 = windows_1.next()) {
              var window_1 = windows_1_1.value;
              window_1.next(value);
            }
          } catch (e_1_1) {
            e_1 = {
              error: e_1_1
            };
          } finally {
            try {
              if (windows_1_1 && !windows_1_1.done && (_a = windows_1.return))
                _a.call(windows_1);
            } finally {
              if (e_1)
                throw e_1.error;
            }
          }
          var c = count - windowSize + 1;
          if (c >= 0 && c % startEvery === 0) {
            windows.shift().complete();
          }
          if (++count % startEvery === 0) {
            var window_2 = new Subject_1.Subject();
            windows.push(window_2);
            subscriber.next(window_2.asObservable());
          }
        }, function() {
          while (windows.length > 0) {
            windows.shift().complete();
          }
          subscriber.complete();
        }, function(err) {
          while (windows.length > 0) {
            windows.shift().error(err);
          }
          subscriber.error(err);
        }, function() {
          starts = null;
          windows = null;
        }));
      });
    }
    __name(windowCount, "windowCount");
    exports.windowCount = windowCount;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/windowTime.js
var require_windowTime = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/windowTime.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.windowTime = void 0;
    var Subject_1 = require_Subject();
    var async_1 = require_async();
    var Subscription_1 = require_Subscription();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var arrRemove_1 = require_arrRemove();
    var args_1 = require_args();
    var executeSchedule_1 = require_executeSchedule();
    function windowTime(windowTimeSpan) {
      var _a, _b;
      var otherArgs = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        otherArgs[_i - 1] = arguments[_i];
      }
      var scheduler = (_a = args_1.popScheduler(otherArgs)) !== null && _a !== void 0 ? _a : async_1.asyncScheduler;
      var windowCreationInterval = (_b = otherArgs[0]) !== null && _b !== void 0 ? _b : null;
      var maxWindowSize = otherArgs[1] || Infinity;
      return lift_1.operate(function(source, subscriber) {
        var windowRecords = [];
        var restartOnClose = false;
        var closeWindow = /* @__PURE__ */ __name(function(record) {
          var window2 = record.window, subs = record.subs;
          window2.complete();
          subs.unsubscribe();
          arrRemove_1.arrRemove(windowRecords, record);
          restartOnClose && startWindow();
        }, "closeWindow");
        var startWindow = /* @__PURE__ */ __name(function() {
          if (windowRecords) {
            var subs = new Subscription_1.Subscription();
            subscriber.add(subs);
            var window_1 = new Subject_1.Subject();
            var record_1 = {
              window: window_1,
              subs,
              seen: 0
            };
            windowRecords.push(record_1);
            subscriber.next(window_1.asObservable());
            executeSchedule_1.executeSchedule(subs, scheduler, function() {
              return closeWindow(record_1);
            }, windowTimeSpan);
          }
        }, "startWindow");
        if (windowCreationInterval !== null && windowCreationInterval >= 0) {
          executeSchedule_1.executeSchedule(subscriber, scheduler, startWindow, windowCreationInterval, true);
        } else {
          restartOnClose = true;
        }
        startWindow();
        var loop = /* @__PURE__ */ __name(function(cb) {
          return windowRecords.slice().forEach(cb);
        }, "loop");
        var terminate = /* @__PURE__ */ __name(function(cb) {
          loop(function(_a2) {
            var window2 = _a2.window;
            return cb(window2);
          });
          cb(subscriber);
          subscriber.unsubscribe();
        }, "terminate");
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          loop(function(record) {
            record.window.next(value);
            maxWindowSize <= ++record.seen && closeWindow(record);
          });
        }, function() {
          return terminate(function(consumer) {
            return consumer.complete();
          });
        }, function(err) {
          return terminate(function(consumer) {
            return consumer.error(err);
          });
        }));
        return function() {
          windowRecords = null;
        };
      });
    }
    __name(windowTime, "windowTime");
    exports.windowTime = windowTime;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/windowToggle.js
var require_windowToggle = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/windowToggle.js"(exports) {
    "use strict";
    var __values = exports && exports.__values || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
        return m.call(o);
      if (o && typeof o.length === "number")
        return {
          next: function() {
            if (o && i >= o.length)
              o = void 0;
            return {
              value: o && o[i++],
              done: !o
            };
          }
        };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.windowToggle = void 0;
    var Subject_1 = require_Subject();
    var Subscription_1 = require_Subscription();
    var lift_1 = require_lift();
    var innerFrom_1 = require_innerFrom();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var noop_1 = require_noop();
    var arrRemove_1 = require_arrRemove();
    function windowToggle(openings, closingSelector) {
      return lift_1.operate(function(source, subscriber) {
        var windows = [];
        var handleError = /* @__PURE__ */ __name(function(err) {
          while (0 < windows.length) {
            windows.shift().error(err);
          }
          subscriber.error(err);
        }, "handleError");
        innerFrom_1.innerFrom(openings).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(openValue) {
          var window2 = new Subject_1.Subject();
          windows.push(window2);
          var closingSubscription = new Subscription_1.Subscription();
          var closeWindow = /* @__PURE__ */ __name(function() {
            arrRemove_1.arrRemove(windows, window2);
            window2.complete();
            closingSubscription.unsubscribe();
          }, "closeWindow");
          var closingNotifier;
          try {
            closingNotifier = innerFrom_1.innerFrom(closingSelector(openValue));
          } catch (err) {
            handleError(err);
            return;
          }
          subscriber.next(window2.asObservable());
          closingSubscription.add(closingNotifier.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, closeWindow, noop_1.noop, handleError)));
        }, noop_1.noop));
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          var e_1, _a;
          var windowsCopy = windows.slice();
          try {
            for (var windowsCopy_1 = __values(windowsCopy), windowsCopy_1_1 = windowsCopy_1.next(); !windowsCopy_1_1.done; windowsCopy_1_1 = windowsCopy_1.next()) {
              var window_1 = windowsCopy_1_1.value;
              window_1.next(value);
            }
          } catch (e_1_1) {
            e_1 = {
              error: e_1_1
            };
          } finally {
            try {
              if (windowsCopy_1_1 && !windowsCopy_1_1.done && (_a = windowsCopy_1.return))
                _a.call(windowsCopy_1);
            } finally {
              if (e_1)
                throw e_1.error;
            }
          }
        }, function() {
          while (0 < windows.length) {
            windows.shift().complete();
          }
          subscriber.complete();
        }, handleError, function() {
          while (0 < windows.length) {
            windows.shift().unsubscribe();
          }
        }));
      });
    }
    __name(windowToggle, "windowToggle");
    exports.windowToggle = windowToggle;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/windowWhen.js
var require_windowWhen = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/windowWhen.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.windowWhen = void 0;
    var Subject_1 = require_Subject();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var innerFrom_1 = require_innerFrom();
    function windowWhen(closingSelector) {
      return lift_1.operate(function(source, subscriber) {
        var window2;
        var closingSubscriber;
        var handleError = /* @__PURE__ */ __name(function(err) {
          window2.error(err);
          subscriber.error(err);
        }, "handleError");
        var openWindow = /* @__PURE__ */ __name(function() {
          closingSubscriber === null || closingSubscriber === void 0 ? void 0 : closingSubscriber.unsubscribe();
          window2 === null || window2 === void 0 ? void 0 : window2.complete();
          window2 = new Subject_1.Subject();
          subscriber.next(window2.asObservable());
          var closingNotifier;
          try {
            closingNotifier = innerFrom_1.innerFrom(closingSelector());
          } catch (err) {
            handleError(err);
            return;
          }
          closingNotifier.subscribe(closingSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, openWindow, openWindow, handleError));
        }, "openWindow");
        openWindow();
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          return window2.next(value);
        }, function() {
          window2.complete();
          subscriber.complete();
        }, handleError, function() {
          closingSubscriber === null || closingSubscriber === void 0 ? void 0 : closingSubscriber.unsubscribe();
          window2 = null;
        }));
      });
    }
    __name(windowWhen, "windowWhen");
    exports.windowWhen = windowWhen;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/withLatestFrom.js
var require_withLatestFrom = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/withLatestFrom.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = {
          error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.withLatestFrom = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var innerFrom_1 = require_innerFrom();
    var identity_1 = require_identity();
    var noop_1 = require_noop();
    var args_1 = require_args();
    function withLatestFrom() {
      var inputs = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        inputs[_i] = arguments[_i];
      }
      var project = args_1.popResultSelector(inputs);
      return lift_1.operate(function(source, subscriber) {
        var len = inputs.length;
        var otherValues = new Array(len);
        var hasValue = inputs.map(function() {
          return false;
        });
        var ready = false;
        var _loop_1 = /* @__PURE__ */ __name(function(i2) {
          innerFrom_1.innerFrom(inputs[i2]).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            otherValues[i2] = value;
            if (!ready && !hasValue[i2]) {
              hasValue[i2] = true;
              (ready = hasValue.every(identity_1.identity)) && (hasValue = null);
            }
          }, noop_1.noop));
        }, "_loop_1");
        for (var i = 0; i < len; i++) {
          _loop_1(i);
        }
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          if (ready) {
            var values = __spreadArray([
              value
            ], __read(otherValues));
            subscriber.next(project ? project.apply(void 0, __spreadArray([], __read(values))) : values);
          }
        }));
      });
    }
    __name(withLatestFrom, "withLatestFrom");
    exports.withLatestFrom = withLatestFrom;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/zipAll.js
var require_zipAll = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/zipAll.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.zipAll = void 0;
    var zip_1 = require_zip();
    var joinAllInternals_1 = require_joinAllInternals();
    function zipAll(project) {
      return joinAllInternals_1.joinAllInternals(zip_1.zip, project);
    }
    __name(zipAll, "zipAll");
    exports.zipAll = zipAll;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/zip.js
var require_zip2 = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/zip.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = {
          error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.zip = void 0;
    var zip_1 = require_zip();
    var lift_1 = require_lift();
    function zip() {
      var sources = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
      }
      return lift_1.operate(function(source, subscriber) {
        zip_1.zip.apply(void 0, __spreadArray([
          source
        ], __read(sources))).subscribe(subscriber);
      });
    }
    __name(zip, "zip");
    exports.zip = zip;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/zipWith.js
var require_zipWith = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/zipWith.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = {
          error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.zipWith = void 0;
    var zip_1 = require_zip2();
    function zipWith() {
      var otherInputs = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        otherInputs[_i] = arguments[_i];
      }
      return zip_1.zip.apply(void 0, __spreadArray([], __read(otherInputs)));
    }
    __name(zipWith, "zipWith");
    exports.zipWith = zipWith;
  }
});

// node_modules/rxjs/dist/cjs/index.js
var require_cjs = __commonJS({
  "node_modules/rxjs/dist/cjs/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
          return m[k];
        }
      });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports1) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p))
          __createBinding(exports1, m, p);
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.interval = exports.iif = exports.generate = exports.fromEventPattern = exports.fromEvent = exports.from = exports.forkJoin = exports.empty = exports.defer = exports.connectable = exports.concat = exports.combineLatest = exports.bindNodeCallback = exports.bindCallback = exports.UnsubscriptionError = exports.TimeoutError = exports.SequenceError = exports.ObjectUnsubscribedError = exports.NotFoundError = exports.EmptyError = exports.ArgumentOutOfRangeError = exports.firstValueFrom = exports.lastValueFrom = exports.isObservable = exports.identity = exports.noop = exports.pipe = exports.NotificationKind = exports.Notification = exports.Subscriber = exports.Subscription = exports.Scheduler = exports.VirtualAction = exports.VirtualTimeScheduler = exports.animationFrameScheduler = exports.animationFrame = exports.queueScheduler = exports.queue = exports.asyncScheduler = exports.async = exports.asapScheduler = exports.asap = exports.AsyncSubject = exports.ReplaySubject = exports.BehaviorSubject = exports.Subject = exports.animationFrames = exports.observable = exports.ConnectableObservable = exports.Observable = void 0;
    exports.filter = exports.expand = exports.exhaustMap = exports.exhaustAll = exports.exhaust = exports.every = exports.endWith = exports.elementAt = exports.distinctUntilKeyChanged = exports.distinctUntilChanged = exports.distinct = exports.dematerialize = exports.delayWhen = exports.delay = exports.defaultIfEmpty = exports.debounceTime = exports.debounce = exports.count = exports.connect = exports.concatWith = exports.concatMapTo = exports.concatMap = exports.concatAll = exports.combineLatestWith = exports.combineLatestAll = exports.combineAll = exports.catchError = exports.bufferWhen = exports.bufferToggle = exports.bufferTime = exports.bufferCount = exports.buffer = exports.auditTime = exports.audit = exports.config = exports.NEVER = exports.EMPTY = exports.scheduled = exports.zip = exports.using = exports.timer = exports.throwError = exports.range = exports.race = exports.partition = exports.pairs = exports.onErrorResumeNext = exports.of = exports.never = exports.merge = void 0;
    exports.switchMap = exports.switchAll = exports.subscribeOn = exports.startWith = exports.skipWhile = exports.skipUntil = exports.skipLast = exports.skip = exports.single = exports.shareReplay = exports.share = exports.sequenceEqual = exports.scan = exports.sampleTime = exports.sample = exports.refCount = exports.retryWhen = exports.retry = exports.repeatWhen = exports.repeat = exports.reduce = exports.raceWith = exports.publishReplay = exports.publishLast = exports.publishBehavior = exports.publish = exports.pluck = exports.pairwise = exports.onErrorResumeNextWith = exports.observeOn = exports.multicast = exports.min = exports.mergeWith = exports.mergeScan = exports.mergeMapTo = exports.mergeMap = exports.flatMap = exports.mergeAll = exports.max = exports.materialize = exports.mapTo = exports.map = exports.last = exports.isEmpty = exports.ignoreElements = exports.groupBy = exports.first = exports.findIndex = exports.find = exports.finalize = void 0;
    exports.zipWith = exports.zipAll = exports.withLatestFrom = exports.windowWhen = exports.windowToggle = exports.windowTime = exports.windowCount = exports.window = exports.toArray = exports.timestamp = exports.timeoutWith = exports.timeout = exports.timeInterval = exports.throwIfEmpty = exports.throttleTime = exports.throttle = exports.tap = exports.takeWhile = exports.takeUntil = exports.takeLast = exports.take = exports.switchScan = exports.switchMapTo = void 0;
    var Observable_1 = require_Observable();
    Object.defineProperty(exports, "Observable", {
      enumerable: true,
      get: function() {
        return Observable_1.Observable;
      }
    });
    var ConnectableObservable_1 = require_ConnectableObservable();
    Object.defineProperty(exports, "ConnectableObservable", {
      enumerable: true,
      get: function() {
        return ConnectableObservable_1.ConnectableObservable;
      }
    });
    var observable_1 = require_observable();
    Object.defineProperty(exports, "observable", {
      enumerable: true,
      get: function() {
        return observable_1.observable;
      }
    });
    var animationFrames_1 = require_animationFrames();
    Object.defineProperty(exports, "animationFrames", {
      enumerable: true,
      get: function() {
        return animationFrames_1.animationFrames;
      }
    });
    var Subject_1 = require_Subject();
    Object.defineProperty(exports, "Subject", {
      enumerable: true,
      get: function() {
        return Subject_1.Subject;
      }
    });
    var BehaviorSubject_1 = require_BehaviorSubject();
    Object.defineProperty(exports, "BehaviorSubject", {
      enumerable: true,
      get: function() {
        return BehaviorSubject_1.BehaviorSubject;
      }
    });
    var ReplaySubject_1 = require_ReplaySubject();
    Object.defineProperty(exports, "ReplaySubject", {
      enumerable: true,
      get: function() {
        return ReplaySubject_1.ReplaySubject;
      }
    });
    var AsyncSubject_1 = require_AsyncSubject();
    Object.defineProperty(exports, "AsyncSubject", {
      enumerable: true,
      get: function() {
        return AsyncSubject_1.AsyncSubject;
      }
    });
    var asap_1 = require_asap();
    Object.defineProperty(exports, "asap", {
      enumerable: true,
      get: function() {
        return asap_1.asap;
      }
    });
    Object.defineProperty(exports, "asapScheduler", {
      enumerable: true,
      get: function() {
        return asap_1.asapScheduler;
      }
    });
    var async_1 = require_async();
    Object.defineProperty(exports, "async", {
      enumerable: true,
      get: function() {
        return async_1.async;
      }
    });
    Object.defineProperty(exports, "asyncScheduler", {
      enumerable: true,
      get: function() {
        return async_1.asyncScheduler;
      }
    });
    var queue_1 = require_queue();
    Object.defineProperty(exports, "queue", {
      enumerable: true,
      get: function() {
        return queue_1.queue;
      }
    });
    Object.defineProperty(exports, "queueScheduler", {
      enumerable: true,
      get: function() {
        return queue_1.queueScheduler;
      }
    });
    var animationFrame_1 = require_animationFrame();
    Object.defineProperty(exports, "animationFrame", {
      enumerable: true,
      get: function() {
        return animationFrame_1.animationFrame;
      }
    });
    Object.defineProperty(exports, "animationFrameScheduler", {
      enumerable: true,
      get: function() {
        return animationFrame_1.animationFrameScheduler;
      }
    });
    var VirtualTimeScheduler_1 = require_VirtualTimeScheduler();
    Object.defineProperty(exports, "VirtualTimeScheduler", {
      enumerable: true,
      get: function() {
        return VirtualTimeScheduler_1.VirtualTimeScheduler;
      }
    });
    Object.defineProperty(exports, "VirtualAction", {
      enumerable: true,
      get: function() {
        return VirtualTimeScheduler_1.VirtualAction;
      }
    });
    var Scheduler_1 = require_Scheduler();
    Object.defineProperty(exports, "Scheduler", {
      enumerable: true,
      get: function() {
        return Scheduler_1.Scheduler;
      }
    });
    var Subscription_1 = require_Subscription();
    Object.defineProperty(exports, "Subscription", {
      enumerable: true,
      get: function() {
        return Subscription_1.Subscription;
      }
    });
    var Subscriber_1 = require_Subscriber();
    Object.defineProperty(exports, "Subscriber", {
      enumerable: true,
      get: function() {
        return Subscriber_1.Subscriber;
      }
    });
    var Notification_1 = require_Notification();
    Object.defineProperty(exports, "Notification", {
      enumerable: true,
      get: function() {
        return Notification_1.Notification;
      }
    });
    Object.defineProperty(exports, "NotificationKind", {
      enumerable: true,
      get: function() {
        return Notification_1.NotificationKind;
      }
    });
    var pipe_1 = require_pipe();
    Object.defineProperty(exports, "pipe", {
      enumerable: true,
      get: function() {
        return pipe_1.pipe;
      }
    });
    var noop_1 = require_noop();
    Object.defineProperty(exports, "noop", {
      enumerable: true,
      get: function() {
        return noop_1.noop;
      }
    });
    var identity_1 = require_identity();
    Object.defineProperty(exports, "identity", {
      enumerable: true,
      get: function() {
        return identity_1.identity;
      }
    });
    var isObservable_1 = require_isObservable();
    Object.defineProperty(exports, "isObservable", {
      enumerable: true,
      get: function() {
        return isObservable_1.isObservable;
      }
    });
    var lastValueFrom_1 = require_lastValueFrom();
    Object.defineProperty(exports, "lastValueFrom", {
      enumerable: true,
      get: function() {
        return lastValueFrom_1.lastValueFrom;
      }
    });
    var firstValueFrom_1 = require_firstValueFrom();
    Object.defineProperty(exports, "firstValueFrom", {
      enumerable: true,
      get: function() {
        return firstValueFrom_1.firstValueFrom;
      }
    });
    var ArgumentOutOfRangeError_1 = require_ArgumentOutOfRangeError();
    Object.defineProperty(exports, "ArgumentOutOfRangeError", {
      enumerable: true,
      get: function() {
        return ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
      }
    });
    var EmptyError_1 = require_EmptyError();
    Object.defineProperty(exports, "EmptyError", {
      enumerable: true,
      get: function() {
        return EmptyError_1.EmptyError;
      }
    });
    var NotFoundError_1 = require_NotFoundError();
    Object.defineProperty(exports, "NotFoundError", {
      enumerable: true,
      get: function() {
        return NotFoundError_1.NotFoundError;
      }
    });
    var ObjectUnsubscribedError_1 = require_ObjectUnsubscribedError();
    Object.defineProperty(exports, "ObjectUnsubscribedError", {
      enumerable: true,
      get: function() {
        return ObjectUnsubscribedError_1.ObjectUnsubscribedError;
      }
    });
    var SequenceError_1 = require_SequenceError();
    Object.defineProperty(exports, "SequenceError", {
      enumerable: true,
      get: function() {
        return SequenceError_1.SequenceError;
      }
    });
    var timeout_1 = require_timeout();
    Object.defineProperty(exports, "TimeoutError", {
      enumerable: true,
      get: function() {
        return timeout_1.TimeoutError;
      }
    });
    var UnsubscriptionError_1 = require_UnsubscriptionError();
    Object.defineProperty(exports, "UnsubscriptionError", {
      enumerable: true,
      get: function() {
        return UnsubscriptionError_1.UnsubscriptionError;
      }
    });
    var bindCallback_1 = require_bindCallback();
    Object.defineProperty(exports, "bindCallback", {
      enumerable: true,
      get: function() {
        return bindCallback_1.bindCallback;
      }
    });
    var bindNodeCallback_1 = require_bindNodeCallback();
    Object.defineProperty(exports, "bindNodeCallback", {
      enumerable: true,
      get: function() {
        return bindNodeCallback_1.bindNodeCallback;
      }
    });
    var combineLatest_1 = require_combineLatest();
    Object.defineProperty(exports, "combineLatest", {
      enumerable: true,
      get: function() {
        return combineLatest_1.combineLatest;
      }
    });
    var concat_1 = require_concat();
    Object.defineProperty(exports, "concat", {
      enumerable: true,
      get: function() {
        return concat_1.concat;
      }
    });
    var connectable_1 = require_connectable();
    Object.defineProperty(exports, "connectable", {
      enumerable: true,
      get: function() {
        return connectable_1.connectable;
      }
    });
    var defer_1 = require_defer();
    Object.defineProperty(exports, "defer", {
      enumerable: true,
      get: function() {
        return defer_1.defer;
      }
    });
    var empty_1 = require_empty();
    Object.defineProperty(exports, "empty", {
      enumerable: true,
      get: function() {
        return empty_1.empty;
      }
    });
    var forkJoin_1 = require_forkJoin();
    Object.defineProperty(exports, "forkJoin", {
      enumerable: true,
      get: function() {
        return forkJoin_1.forkJoin;
      }
    });
    var from_1 = require_from();
    Object.defineProperty(exports, "from", {
      enumerable: true,
      get: function() {
        return from_1.from;
      }
    });
    var fromEvent_1 = require_fromEvent();
    Object.defineProperty(exports, "fromEvent", {
      enumerable: true,
      get: function() {
        return fromEvent_1.fromEvent;
      }
    });
    var fromEventPattern_1 = require_fromEventPattern();
    Object.defineProperty(exports, "fromEventPattern", {
      enumerable: true,
      get: function() {
        return fromEventPattern_1.fromEventPattern;
      }
    });
    var generate_1 = require_generate();
    Object.defineProperty(exports, "generate", {
      enumerable: true,
      get: function() {
        return generate_1.generate;
      }
    });
    var iif_1 = require_iif();
    Object.defineProperty(exports, "iif", {
      enumerable: true,
      get: function() {
        return iif_1.iif;
      }
    });
    var interval_1 = require_interval();
    Object.defineProperty(exports, "interval", {
      enumerable: true,
      get: function() {
        return interval_1.interval;
      }
    });
    var merge_1 = require_merge();
    Object.defineProperty(exports, "merge", {
      enumerable: true,
      get: function() {
        return merge_1.merge;
      }
    });
    var never_1 = require_never();
    Object.defineProperty(exports, "never", {
      enumerable: true,
      get: function() {
        return never_1.never;
      }
    });
    var of_1 = require_of();
    Object.defineProperty(exports, "of", {
      enumerable: true,
      get: function() {
        return of_1.of;
      }
    });
    var onErrorResumeNext_1 = require_onErrorResumeNext();
    Object.defineProperty(exports, "onErrorResumeNext", {
      enumerable: true,
      get: function() {
        return onErrorResumeNext_1.onErrorResumeNext;
      }
    });
    var pairs_1 = require_pairs();
    Object.defineProperty(exports, "pairs", {
      enumerable: true,
      get: function() {
        return pairs_1.pairs;
      }
    });
    var partition_1 = require_partition();
    Object.defineProperty(exports, "partition", {
      enumerable: true,
      get: function() {
        return partition_1.partition;
      }
    });
    var race_1 = require_race();
    Object.defineProperty(exports, "race", {
      enumerable: true,
      get: function() {
        return race_1.race;
      }
    });
    var range_1 = require_range();
    Object.defineProperty(exports, "range", {
      enumerable: true,
      get: function() {
        return range_1.range;
      }
    });
    var throwError_1 = require_throwError();
    Object.defineProperty(exports, "throwError", {
      enumerable: true,
      get: function() {
        return throwError_1.throwError;
      }
    });
    var timer_1 = require_timer();
    Object.defineProperty(exports, "timer", {
      enumerable: true,
      get: function() {
        return timer_1.timer;
      }
    });
    var using_1 = require_using();
    Object.defineProperty(exports, "using", {
      enumerable: true,
      get: function() {
        return using_1.using;
      }
    });
    var zip_1 = require_zip();
    Object.defineProperty(exports, "zip", {
      enumerable: true,
      get: function() {
        return zip_1.zip;
      }
    });
    var scheduled_1 = require_scheduled();
    Object.defineProperty(exports, "scheduled", {
      enumerable: true,
      get: function() {
        return scheduled_1.scheduled;
      }
    });
    var empty_2 = require_empty();
    Object.defineProperty(exports, "EMPTY", {
      enumerable: true,
      get: function() {
        return empty_2.EMPTY;
      }
    });
    var never_2 = require_never();
    Object.defineProperty(exports, "NEVER", {
      enumerable: true,
      get: function() {
        return never_2.NEVER;
      }
    });
    __exportStar(require_types(), exports);
    var config_1 = require_config();
    Object.defineProperty(exports, "config", {
      enumerable: true,
      get: function() {
        return config_1.config;
      }
    });
    var audit_1 = require_audit();
    Object.defineProperty(exports, "audit", {
      enumerable: true,
      get: function() {
        return audit_1.audit;
      }
    });
    var auditTime_1 = require_auditTime();
    Object.defineProperty(exports, "auditTime", {
      enumerable: true,
      get: function() {
        return auditTime_1.auditTime;
      }
    });
    var buffer_1 = require_buffer();
    Object.defineProperty(exports, "buffer", {
      enumerable: true,
      get: function() {
        return buffer_1.buffer;
      }
    });
    var bufferCount_1 = require_bufferCount();
    Object.defineProperty(exports, "bufferCount", {
      enumerable: true,
      get: function() {
        return bufferCount_1.bufferCount;
      }
    });
    var bufferTime_1 = require_bufferTime();
    Object.defineProperty(exports, "bufferTime", {
      enumerable: true,
      get: function() {
        return bufferTime_1.bufferTime;
      }
    });
    var bufferToggle_1 = require_bufferToggle();
    Object.defineProperty(exports, "bufferToggle", {
      enumerable: true,
      get: function() {
        return bufferToggle_1.bufferToggle;
      }
    });
    var bufferWhen_1 = require_bufferWhen();
    Object.defineProperty(exports, "bufferWhen", {
      enumerable: true,
      get: function() {
        return bufferWhen_1.bufferWhen;
      }
    });
    var catchError_1 = require_catchError();
    Object.defineProperty(exports, "catchError", {
      enumerable: true,
      get: function() {
        return catchError_1.catchError;
      }
    });
    var combineAll_1 = require_combineAll();
    Object.defineProperty(exports, "combineAll", {
      enumerable: true,
      get: function() {
        return combineAll_1.combineAll;
      }
    });
    var combineLatestAll_1 = require_combineLatestAll();
    Object.defineProperty(exports, "combineLatestAll", {
      enumerable: true,
      get: function() {
        return combineLatestAll_1.combineLatestAll;
      }
    });
    var combineLatestWith_1 = require_combineLatestWith();
    Object.defineProperty(exports, "combineLatestWith", {
      enumerable: true,
      get: function() {
        return combineLatestWith_1.combineLatestWith;
      }
    });
    var concatAll_1 = require_concatAll();
    Object.defineProperty(exports, "concatAll", {
      enumerable: true,
      get: function() {
        return concatAll_1.concatAll;
      }
    });
    var concatMap_1 = require_concatMap();
    Object.defineProperty(exports, "concatMap", {
      enumerable: true,
      get: function() {
        return concatMap_1.concatMap;
      }
    });
    var concatMapTo_1 = require_concatMapTo();
    Object.defineProperty(exports, "concatMapTo", {
      enumerable: true,
      get: function() {
        return concatMapTo_1.concatMapTo;
      }
    });
    var concatWith_1 = require_concatWith();
    Object.defineProperty(exports, "concatWith", {
      enumerable: true,
      get: function() {
        return concatWith_1.concatWith;
      }
    });
    var connect_1 = require_connect();
    Object.defineProperty(exports, "connect", {
      enumerable: true,
      get: function() {
        return connect_1.connect;
      }
    });
    var count_1 = require_count();
    Object.defineProperty(exports, "count", {
      enumerable: true,
      get: function() {
        return count_1.count;
      }
    });
    var debounce_1 = require_debounce();
    Object.defineProperty(exports, "debounce", {
      enumerable: true,
      get: function() {
        return debounce_1.debounce;
      }
    });
    var debounceTime_1 = require_debounceTime();
    Object.defineProperty(exports, "debounceTime", {
      enumerable: true,
      get: function() {
        return debounceTime_1.debounceTime;
      }
    });
    var defaultIfEmpty_1 = require_defaultIfEmpty();
    Object.defineProperty(exports, "defaultIfEmpty", {
      enumerable: true,
      get: function() {
        return defaultIfEmpty_1.defaultIfEmpty;
      }
    });
    var delay_1 = require_delay();
    Object.defineProperty(exports, "delay", {
      enumerable: true,
      get: function() {
        return delay_1.delay;
      }
    });
    var delayWhen_1 = require_delayWhen();
    Object.defineProperty(exports, "delayWhen", {
      enumerable: true,
      get: function() {
        return delayWhen_1.delayWhen;
      }
    });
    var dematerialize_1 = require_dematerialize();
    Object.defineProperty(exports, "dematerialize", {
      enumerable: true,
      get: function() {
        return dematerialize_1.dematerialize;
      }
    });
    var distinct_1 = require_distinct();
    Object.defineProperty(exports, "distinct", {
      enumerable: true,
      get: function() {
        return distinct_1.distinct;
      }
    });
    var distinctUntilChanged_1 = require_distinctUntilChanged();
    Object.defineProperty(exports, "distinctUntilChanged", {
      enumerable: true,
      get: function() {
        return distinctUntilChanged_1.distinctUntilChanged;
      }
    });
    var distinctUntilKeyChanged_1 = require_distinctUntilKeyChanged();
    Object.defineProperty(exports, "distinctUntilKeyChanged", {
      enumerable: true,
      get: function() {
        return distinctUntilKeyChanged_1.distinctUntilKeyChanged;
      }
    });
    var elementAt_1 = require_elementAt();
    Object.defineProperty(exports, "elementAt", {
      enumerable: true,
      get: function() {
        return elementAt_1.elementAt;
      }
    });
    var endWith_1 = require_endWith();
    Object.defineProperty(exports, "endWith", {
      enumerable: true,
      get: function() {
        return endWith_1.endWith;
      }
    });
    var every_1 = require_every();
    Object.defineProperty(exports, "every", {
      enumerable: true,
      get: function() {
        return every_1.every;
      }
    });
    var exhaust_1 = require_exhaust();
    Object.defineProperty(exports, "exhaust", {
      enumerable: true,
      get: function() {
        return exhaust_1.exhaust;
      }
    });
    var exhaustAll_1 = require_exhaustAll();
    Object.defineProperty(exports, "exhaustAll", {
      enumerable: true,
      get: function() {
        return exhaustAll_1.exhaustAll;
      }
    });
    var exhaustMap_1 = require_exhaustMap();
    Object.defineProperty(exports, "exhaustMap", {
      enumerable: true,
      get: function() {
        return exhaustMap_1.exhaustMap;
      }
    });
    var expand_1 = require_expand();
    Object.defineProperty(exports, "expand", {
      enumerable: true,
      get: function() {
        return expand_1.expand;
      }
    });
    var filter_1 = require_filter();
    Object.defineProperty(exports, "filter", {
      enumerable: true,
      get: function() {
        return filter_1.filter;
      }
    });
    var finalize_1 = require_finalize();
    Object.defineProperty(exports, "finalize", {
      enumerable: true,
      get: function() {
        return finalize_1.finalize;
      }
    });
    var find_1 = require_find();
    Object.defineProperty(exports, "find", {
      enumerable: true,
      get: function() {
        return find_1.find;
      }
    });
    var findIndex_1 = require_findIndex();
    Object.defineProperty(exports, "findIndex", {
      enumerable: true,
      get: function() {
        return findIndex_1.findIndex;
      }
    });
    var first_1 = require_first();
    Object.defineProperty(exports, "first", {
      enumerable: true,
      get: function() {
        return first_1.first;
      }
    });
    var groupBy_1 = require_groupBy();
    Object.defineProperty(exports, "groupBy", {
      enumerable: true,
      get: function() {
        return groupBy_1.groupBy;
      }
    });
    var ignoreElements_1 = require_ignoreElements();
    Object.defineProperty(exports, "ignoreElements", {
      enumerable: true,
      get: function() {
        return ignoreElements_1.ignoreElements;
      }
    });
    var isEmpty_1 = require_isEmpty();
    Object.defineProperty(exports, "isEmpty", {
      enumerable: true,
      get: function() {
        return isEmpty_1.isEmpty;
      }
    });
    var last_1 = require_last();
    Object.defineProperty(exports, "last", {
      enumerable: true,
      get: function() {
        return last_1.last;
      }
    });
    var map_1 = require_map();
    Object.defineProperty(exports, "map", {
      enumerable: true,
      get: function() {
        return map_1.map;
      }
    });
    var mapTo_1 = require_mapTo();
    Object.defineProperty(exports, "mapTo", {
      enumerable: true,
      get: function() {
        return mapTo_1.mapTo;
      }
    });
    var materialize_1 = require_materialize();
    Object.defineProperty(exports, "materialize", {
      enumerable: true,
      get: function() {
        return materialize_1.materialize;
      }
    });
    var max_1 = require_max();
    Object.defineProperty(exports, "max", {
      enumerable: true,
      get: function() {
        return max_1.max;
      }
    });
    var mergeAll_1 = require_mergeAll();
    Object.defineProperty(exports, "mergeAll", {
      enumerable: true,
      get: function() {
        return mergeAll_1.mergeAll;
      }
    });
    var flatMap_1 = require_flatMap();
    Object.defineProperty(exports, "flatMap", {
      enumerable: true,
      get: function() {
        return flatMap_1.flatMap;
      }
    });
    var mergeMap_1 = require_mergeMap();
    Object.defineProperty(exports, "mergeMap", {
      enumerable: true,
      get: function() {
        return mergeMap_1.mergeMap;
      }
    });
    var mergeMapTo_1 = require_mergeMapTo();
    Object.defineProperty(exports, "mergeMapTo", {
      enumerable: true,
      get: function() {
        return mergeMapTo_1.mergeMapTo;
      }
    });
    var mergeScan_1 = require_mergeScan();
    Object.defineProperty(exports, "mergeScan", {
      enumerable: true,
      get: function() {
        return mergeScan_1.mergeScan;
      }
    });
    var mergeWith_1 = require_mergeWith();
    Object.defineProperty(exports, "mergeWith", {
      enumerable: true,
      get: function() {
        return mergeWith_1.mergeWith;
      }
    });
    var min_1 = require_min();
    Object.defineProperty(exports, "min", {
      enumerable: true,
      get: function() {
        return min_1.min;
      }
    });
    var multicast_1 = require_multicast();
    Object.defineProperty(exports, "multicast", {
      enumerable: true,
      get: function() {
        return multicast_1.multicast;
      }
    });
    var observeOn_1 = require_observeOn();
    Object.defineProperty(exports, "observeOn", {
      enumerable: true,
      get: function() {
        return observeOn_1.observeOn;
      }
    });
    var onErrorResumeNextWith_1 = require_onErrorResumeNextWith();
    Object.defineProperty(exports, "onErrorResumeNextWith", {
      enumerable: true,
      get: function() {
        return onErrorResumeNextWith_1.onErrorResumeNextWith;
      }
    });
    var pairwise_1 = require_pairwise();
    Object.defineProperty(exports, "pairwise", {
      enumerable: true,
      get: function() {
        return pairwise_1.pairwise;
      }
    });
    var pluck_1 = require_pluck();
    Object.defineProperty(exports, "pluck", {
      enumerable: true,
      get: function() {
        return pluck_1.pluck;
      }
    });
    var publish_1 = require_publish();
    Object.defineProperty(exports, "publish", {
      enumerable: true,
      get: function() {
        return publish_1.publish;
      }
    });
    var publishBehavior_1 = require_publishBehavior();
    Object.defineProperty(exports, "publishBehavior", {
      enumerable: true,
      get: function() {
        return publishBehavior_1.publishBehavior;
      }
    });
    var publishLast_1 = require_publishLast();
    Object.defineProperty(exports, "publishLast", {
      enumerable: true,
      get: function() {
        return publishLast_1.publishLast;
      }
    });
    var publishReplay_1 = require_publishReplay();
    Object.defineProperty(exports, "publishReplay", {
      enumerable: true,
      get: function() {
        return publishReplay_1.publishReplay;
      }
    });
    var raceWith_1 = require_raceWith();
    Object.defineProperty(exports, "raceWith", {
      enumerable: true,
      get: function() {
        return raceWith_1.raceWith;
      }
    });
    var reduce_1 = require_reduce();
    Object.defineProperty(exports, "reduce", {
      enumerable: true,
      get: function() {
        return reduce_1.reduce;
      }
    });
    var repeat_1 = require_repeat();
    Object.defineProperty(exports, "repeat", {
      enumerable: true,
      get: function() {
        return repeat_1.repeat;
      }
    });
    var repeatWhen_1 = require_repeatWhen();
    Object.defineProperty(exports, "repeatWhen", {
      enumerable: true,
      get: function() {
        return repeatWhen_1.repeatWhen;
      }
    });
    var retry_1 = require_retry();
    Object.defineProperty(exports, "retry", {
      enumerable: true,
      get: function() {
        return retry_1.retry;
      }
    });
    var retryWhen_1 = require_retryWhen();
    Object.defineProperty(exports, "retryWhen", {
      enumerable: true,
      get: function() {
        return retryWhen_1.retryWhen;
      }
    });
    var refCount_1 = require_refCount();
    Object.defineProperty(exports, "refCount", {
      enumerable: true,
      get: function() {
        return refCount_1.refCount;
      }
    });
    var sample_1 = require_sample();
    Object.defineProperty(exports, "sample", {
      enumerable: true,
      get: function() {
        return sample_1.sample;
      }
    });
    var sampleTime_1 = require_sampleTime();
    Object.defineProperty(exports, "sampleTime", {
      enumerable: true,
      get: function() {
        return sampleTime_1.sampleTime;
      }
    });
    var scan_1 = require_scan();
    Object.defineProperty(exports, "scan", {
      enumerable: true,
      get: function() {
        return scan_1.scan;
      }
    });
    var sequenceEqual_1 = require_sequenceEqual();
    Object.defineProperty(exports, "sequenceEqual", {
      enumerable: true,
      get: function() {
        return sequenceEqual_1.sequenceEqual;
      }
    });
    var share_1 = require_share();
    Object.defineProperty(exports, "share", {
      enumerable: true,
      get: function() {
        return share_1.share;
      }
    });
    var shareReplay_1 = require_shareReplay();
    Object.defineProperty(exports, "shareReplay", {
      enumerable: true,
      get: function() {
        return shareReplay_1.shareReplay;
      }
    });
    var single_1 = require_single();
    Object.defineProperty(exports, "single", {
      enumerable: true,
      get: function() {
        return single_1.single;
      }
    });
    var skip_1 = require_skip();
    Object.defineProperty(exports, "skip", {
      enumerable: true,
      get: function() {
        return skip_1.skip;
      }
    });
    var skipLast_1 = require_skipLast();
    Object.defineProperty(exports, "skipLast", {
      enumerable: true,
      get: function() {
        return skipLast_1.skipLast;
      }
    });
    var skipUntil_1 = require_skipUntil();
    Object.defineProperty(exports, "skipUntil", {
      enumerable: true,
      get: function() {
        return skipUntil_1.skipUntil;
      }
    });
    var skipWhile_1 = require_skipWhile();
    Object.defineProperty(exports, "skipWhile", {
      enumerable: true,
      get: function() {
        return skipWhile_1.skipWhile;
      }
    });
    var startWith_1 = require_startWith();
    Object.defineProperty(exports, "startWith", {
      enumerable: true,
      get: function() {
        return startWith_1.startWith;
      }
    });
    var subscribeOn_1 = require_subscribeOn();
    Object.defineProperty(exports, "subscribeOn", {
      enumerable: true,
      get: function() {
        return subscribeOn_1.subscribeOn;
      }
    });
    var switchAll_1 = require_switchAll();
    Object.defineProperty(exports, "switchAll", {
      enumerable: true,
      get: function() {
        return switchAll_1.switchAll;
      }
    });
    var switchMap_1 = require_switchMap();
    Object.defineProperty(exports, "switchMap", {
      enumerable: true,
      get: function() {
        return switchMap_1.switchMap;
      }
    });
    var switchMapTo_1 = require_switchMapTo();
    Object.defineProperty(exports, "switchMapTo", {
      enumerable: true,
      get: function() {
        return switchMapTo_1.switchMapTo;
      }
    });
    var switchScan_1 = require_switchScan();
    Object.defineProperty(exports, "switchScan", {
      enumerable: true,
      get: function() {
        return switchScan_1.switchScan;
      }
    });
    var take_1 = require_take();
    Object.defineProperty(exports, "take", {
      enumerable: true,
      get: function() {
        return take_1.take;
      }
    });
    var takeLast_1 = require_takeLast();
    Object.defineProperty(exports, "takeLast", {
      enumerable: true,
      get: function() {
        return takeLast_1.takeLast;
      }
    });
    var takeUntil_1 = require_takeUntil();
    Object.defineProperty(exports, "takeUntil", {
      enumerable: true,
      get: function() {
        return takeUntil_1.takeUntil;
      }
    });
    var takeWhile_1 = require_takeWhile();
    Object.defineProperty(exports, "takeWhile", {
      enumerable: true,
      get: function() {
        return takeWhile_1.takeWhile;
      }
    });
    var tap_1 = require_tap();
    Object.defineProperty(exports, "tap", {
      enumerable: true,
      get: function() {
        return tap_1.tap;
      }
    });
    var throttle_1 = require_throttle();
    Object.defineProperty(exports, "throttle", {
      enumerable: true,
      get: function() {
        return throttle_1.throttle;
      }
    });
    var throttleTime_1 = require_throttleTime();
    Object.defineProperty(exports, "throttleTime", {
      enumerable: true,
      get: function() {
        return throttleTime_1.throttleTime;
      }
    });
    var throwIfEmpty_1 = require_throwIfEmpty();
    Object.defineProperty(exports, "throwIfEmpty", {
      enumerable: true,
      get: function() {
        return throwIfEmpty_1.throwIfEmpty;
      }
    });
    var timeInterval_1 = require_timeInterval();
    Object.defineProperty(exports, "timeInterval", {
      enumerable: true,
      get: function() {
        return timeInterval_1.timeInterval;
      }
    });
    var timeout_2 = require_timeout();
    Object.defineProperty(exports, "timeout", {
      enumerable: true,
      get: function() {
        return timeout_2.timeout;
      }
    });
    var timeoutWith_1 = require_timeoutWith();
    Object.defineProperty(exports, "timeoutWith", {
      enumerable: true,
      get: function() {
        return timeoutWith_1.timeoutWith;
      }
    });
    var timestamp_1 = require_timestamp();
    Object.defineProperty(exports, "timestamp", {
      enumerable: true,
      get: function() {
        return timestamp_1.timestamp;
      }
    });
    var toArray_1 = require_toArray();
    Object.defineProperty(exports, "toArray", {
      enumerable: true,
      get: function() {
        return toArray_1.toArray;
      }
    });
    var window_1 = require_window();
    Object.defineProperty(exports, "window", {
      enumerable: true,
      get: function() {
        return window_1.window;
      }
    });
    var windowCount_1 = require_windowCount();
    Object.defineProperty(exports, "windowCount", {
      enumerable: true,
      get: function() {
        return windowCount_1.windowCount;
      }
    });
    var windowTime_1 = require_windowTime();
    Object.defineProperty(exports, "windowTime", {
      enumerable: true,
      get: function() {
        return windowTime_1.windowTime;
      }
    });
    var windowToggle_1 = require_windowToggle();
    Object.defineProperty(exports, "windowToggle", {
      enumerable: true,
      get: function() {
        return windowToggle_1.windowToggle;
      }
    });
    var windowWhen_1 = require_windowWhen();
    Object.defineProperty(exports, "windowWhen", {
      enumerable: true,
      get: function() {
        return windowWhen_1.windowWhen;
      }
    });
    var withLatestFrom_1 = require_withLatestFrom();
    Object.defineProperty(exports, "withLatestFrom", {
      enumerable: true,
      get: function() {
        return withLatestFrom_1.withLatestFrom;
      }
    });
    var zipAll_1 = require_zipAll();
    Object.defineProperty(exports, "zipAll", {
      enumerable: true,
      get: function() {
        return zipAll_1.zipAll;
      }
    });
    var zipWith_1 = require_zipWith();
    Object.defineProperty(exports, "zipWith", {
      enumerable: true,
      get: function() {
        return zipWith_1.zipWith;
      }
    });
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/partition.js
var require_partition2 = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/partition.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.partition = void 0;
    var not_1 = require_not();
    var filter_1 = require_filter();
    function partition(predicate, thisArg) {
      return function(source) {
        return [
          filter_1.filter(predicate, thisArg)(source),
          filter_1.filter(not_1.not(predicate, thisArg))(source)
        ];
      };
    }
    __name(partition, "partition");
    exports.partition = partition;
  }
});

// node_modules/rxjs/dist/cjs/internal/operators/race.js
var require_race2 = __commonJS({
  "node_modules/rxjs/dist/cjs/internal/operators/race.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = {
          error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.race = void 0;
    var argsOrArgArray_1 = require_argsOrArgArray();
    var raceWith_1 = require_raceWith();
    function race() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return raceWith_1.raceWith.apply(void 0, __spreadArray([], __read(argsOrArgArray_1.argsOrArgArray(args))));
    }
    __name(race, "race");
    exports.race = race;
  }
});

// node_modules/rxjs/dist/cjs/operators/index.js
var require_operators = __commonJS({
  "node_modules/rxjs/dist/cjs/operators/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.mergeAll = exports.merge = exports.max = exports.materialize = exports.mapTo = exports.map = exports.last = exports.isEmpty = exports.ignoreElements = exports.groupBy = exports.first = exports.findIndex = exports.find = exports.finalize = exports.filter = exports.expand = exports.exhaustMap = exports.exhaustAll = exports.exhaust = exports.every = exports.endWith = exports.elementAt = exports.distinctUntilKeyChanged = exports.distinctUntilChanged = exports.distinct = exports.dematerialize = exports.delayWhen = exports.delay = exports.defaultIfEmpty = exports.debounceTime = exports.debounce = exports.count = exports.connect = exports.concatWith = exports.concatMapTo = exports.concatMap = exports.concatAll = exports.concat = exports.combineLatestWith = exports.combineLatest = exports.combineLatestAll = exports.combineAll = exports.catchError = exports.bufferWhen = exports.bufferToggle = exports.bufferTime = exports.bufferCount = exports.buffer = exports.auditTime = exports.audit = void 0;
    exports.timeInterval = exports.throwIfEmpty = exports.throttleTime = exports.throttle = exports.tap = exports.takeWhile = exports.takeUntil = exports.takeLast = exports.take = exports.switchScan = exports.switchMapTo = exports.switchMap = exports.switchAll = exports.subscribeOn = exports.startWith = exports.skipWhile = exports.skipUntil = exports.skipLast = exports.skip = exports.single = exports.shareReplay = exports.share = exports.sequenceEqual = exports.scan = exports.sampleTime = exports.sample = exports.refCount = exports.retryWhen = exports.retry = exports.repeatWhen = exports.repeat = exports.reduce = exports.raceWith = exports.race = exports.publishReplay = exports.publishLast = exports.publishBehavior = exports.publish = exports.pluck = exports.partition = exports.pairwise = exports.onErrorResumeNext = exports.observeOn = exports.multicast = exports.min = exports.mergeWith = exports.mergeScan = exports.mergeMapTo = exports.mergeMap = exports.flatMap = void 0;
    exports.zipWith = exports.zipAll = exports.zip = exports.withLatestFrom = exports.windowWhen = exports.windowToggle = exports.windowTime = exports.windowCount = exports.window = exports.toArray = exports.timestamp = exports.timeoutWith = exports.timeout = void 0;
    var audit_1 = require_audit();
    Object.defineProperty(exports, "audit", {
      enumerable: true,
      get: function() {
        return audit_1.audit;
      }
    });
    var auditTime_1 = require_auditTime();
    Object.defineProperty(exports, "auditTime", {
      enumerable: true,
      get: function() {
        return auditTime_1.auditTime;
      }
    });
    var buffer_1 = require_buffer();
    Object.defineProperty(exports, "buffer", {
      enumerable: true,
      get: function() {
        return buffer_1.buffer;
      }
    });
    var bufferCount_1 = require_bufferCount();
    Object.defineProperty(exports, "bufferCount", {
      enumerable: true,
      get: function() {
        return bufferCount_1.bufferCount;
      }
    });
    var bufferTime_1 = require_bufferTime();
    Object.defineProperty(exports, "bufferTime", {
      enumerable: true,
      get: function() {
        return bufferTime_1.bufferTime;
      }
    });
    var bufferToggle_1 = require_bufferToggle();
    Object.defineProperty(exports, "bufferToggle", {
      enumerable: true,
      get: function() {
        return bufferToggle_1.bufferToggle;
      }
    });
    var bufferWhen_1 = require_bufferWhen();
    Object.defineProperty(exports, "bufferWhen", {
      enumerable: true,
      get: function() {
        return bufferWhen_1.bufferWhen;
      }
    });
    var catchError_1 = require_catchError();
    Object.defineProperty(exports, "catchError", {
      enumerable: true,
      get: function() {
        return catchError_1.catchError;
      }
    });
    var combineAll_1 = require_combineAll();
    Object.defineProperty(exports, "combineAll", {
      enumerable: true,
      get: function() {
        return combineAll_1.combineAll;
      }
    });
    var combineLatestAll_1 = require_combineLatestAll();
    Object.defineProperty(exports, "combineLatestAll", {
      enumerable: true,
      get: function() {
        return combineLatestAll_1.combineLatestAll;
      }
    });
    var combineLatest_1 = require_combineLatest2();
    Object.defineProperty(exports, "combineLatest", {
      enumerable: true,
      get: function() {
        return combineLatest_1.combineLatest;
      }
    });
    var combineLatestWith_1 = require_combineLatestWith();
    Object.defineProperty(exports, "combineLatestWith", {
      enumerable: true,
      get: function() {
        return combineLatestWith_1.combineLatestWith;
      }
    });
    var concat_1 = require_concat2();
    Object.defineProperty(exports, "concat", {
      enumerable: true,
      get: function() {
        return concat_1.concat;
      }
    });
    var concatAll_1 = require_concatAll();
    Object.defineProperty(exports, "concatAll", {
      enumerable: true,
      get: function() {
        return concatAll_1.concatAll;
      }
    });
    var concatMap_1 = require_concatMap();
    Object.defineProperty(exports, "concatMap", {
      enumerable: true,
      get: function() {
        return concatMap_1.concatMap;
      }
    });
    var concatMapTo_1 = require_concatMapTo();
    Object.defineProperty(exports, "concatMapTo", {
      enumerable: true,
      get: function() {
        return concatMapTo_1.concatMapTo;
      }
    });
    var concatWith_1 = require_concatWith();
    Object.defineProperty(exports, "concatWith", {
      enumerable: true,
      get: function() {
        return concatWith_1.concatWith;
      }
    });
    var connect_1 = require_connect();
    Object.defineProperty(exports, "connect", {
      enumerable: true,
      get: function() {
        return connect_1.connect;
      }
    });
    var count_1 = require_count();
    Object.defineProperty(exports, "count", {
      enumerable: true,
      get: function() {
        return count_1.count;
      }
    });
    var debounce_1 = require_debounce();
    Object.defineProperty(exports, "debounce", {
      enumerable: true,
      get: function() {
        return debounce_1.debounce;
      }
    });
    var debounceTime_1 = require_debounceTime();
    Object.defineProperty(exports, "debounceTime", {
      enumerable: true,
      get: function() {
        return debounceTime_1.debounceTime;
      }
    });
    var defaultIfEmpty_1 = require_defaultIfEmpty();
    Object.defineProperty(exports, "defaultIfEmpty", {
      enumerable: true,
      get: function() {
        return defaultIfEmpty_1.defaultIfEmpty;
      }
    });
    var delay_1 = require_delay();
    Object.defineProperty(exports, "delay", {
      enumerable: true,
      get: function() {
        return delay_1.delay;
      }
    });
    var delayWhen_1 = require_delayWhen();
    Object.defineProperty(exports, "delayWhen", {
      enumerable: true,
      get: function() {
        return delayWhen_1.delayWhen;
      }
    });
    var dematerialize_1 = require_dematerialize();
    Object.defineProperty(exports, "dematerialize", {
      enumerable: true,
      get: function() {
        return dematerialize_1.dematerialize;
      }
    });
    var distinct_1 = require_distinct();
    Object.defineProperty(exports, "distinct", {
      enumerable: true,
      get: function() {
        return distinct_1.distinct;
      }
    });
    var distinctUntilChanged_1 = require_distinctUntilChanged();
    Object.defineProperty(exports, "distinctUntilChanged", {
      enumerable: true,
      get: function() {
        return distinctUntilChanged_1.distinctUntilChanged;
      }
    });
    var distinctUntilKeyChanged_1 = require_distinctUntilKeyChanged();
    Object.defineProperty(exports, "distinctUntilKeyChanged", {
      enumerable: true,
      get: function() {
        return distinctUntilKeyChanged_1.distinctUntilKeyChanged;
      }
    });
    var elementAt_1 = require_elementAt();
    Object.defineProperty(exports, "elementAt", {
      enumerable: true,
      get: function() {
        return elementAt_1.elementAt;
      }
    });
    var endWith_1 = require_endWith();
    Object.defineProperty(exports, "endWith", {
      enumerable: true,
      get: function() {
        return endWith_1.endWith;
      }
    });
    var every_1 = require_every();
    Object.defineProperty(exports, "every", {
      enumerable: true,
      get: function() {
        return every_1.every;
      }
    });
    var exhaust_1 = require_exhaust();
    Object.defineProperty(exports, "exhaust", {
      enumerable: true,
      get: function() {
        return exhaust_1.exhaust;
      }
    });
    var exhaustAll_1 = require_exhaustAll();
    Object.defineProperty(exports, "exhaustAll", {
      enumerable: true,
      get: function() {
        return exhaustAll_1.exhaustAll;
      }
    });
    var exhaustMap_1 = require_exhaustMap();
    Object.defineProperty(exports, "exhaustMap", {
      enumerable: true,
      get: function() {
        return exhaustMap_1.exhaustMap;
      }
    });
    var expand_1 = require_expand();
    Object.defineProperty(exports, "expand", {
      enumerable: true,
      get: function() {
        return expand_1.expand;
      }
    });
    var filter_1 = require_filter();
    Object.defineProperty(exports, "filter", {
      enumerable: true,
      get: function() {
        return filter_1.filter;
      }
    });
    var finalize_1 = require_finalize();
    Object.defineProperty(exports, "finalize", {
      enumerable: true,
      get: function() {
        return finalize_1.finalize;
      }
    });
    var find_1 = require_find();
    Object.defineProperty(exports, "find", {
      enumerable: true,
      get: function() {
        return find_1.find;
      }
    });
    var findIndex_1 = require_findIndex();
    Object.defineProperty(exports, "findIndex", {
      enumerable: true,
      get: function() {
        return findIndex_1.findIndex;
      }
    });
    var first_1 = require_first();
    Object.defineProperty(exports, "first", {
      enumerable: true,
      get: function() {
        return first_1.first;
      }
    });
    var groupBy_1 = require_groupBy();
    Object.defineProperty(exports, "groupBy", {
      enumerable: true,
      get: function() {
        return groupBy_1.groupBy;
      }
    });
    var ignoreElements_1 = require_ignoreElements();
    Object.defineProperty(exports, "ignoreElements", {
      enumerable: true,
      get: function() {
        return ignoreElements_1.ignoreElements;
      }
    });
    var isEmpty_1 = require_isEmpty();
    Object.defineProperty(exports, "isEmpty", {
      enumerable: true,
      get: function() {
        return isEmpty_1.isEmpty;
      }
    });
    var last_1 = require_last();
    Object.defineProperty(exports, "last", {
      enumerable: true,
      get: function() {
        return last_1.last;
      }
    });
    var map_1 = require_map();
    Object.defineProperty(exports, "map", {
      enumerable: true,
      get: function() {
        return map_1.map;
      }
    });
    var mapTo_1 = require_mapTo();
    Object.defineProperty(exports, "mapTo", {
      enumerable: true,
      get: function() {
        return mapTo_1.mapTo;
      }
    });
    var materialize_1 = require_materialize();
    Object.defineProperty(exports, "materialize", {
      enumerable: true,
      get: function() {
        return materialize_1.materialize;
      }
    });
    var max_1 = require_max();
    Object.defineProperty(exports, "max", {
      enumerable: true,
      get: function() {
        return max_1.max;
      }
    });
    var merge_1 = require_merge2();
    Object.defineProperty(exports, "merge", {
      enumerable: true,
      get: function() {
        return merge_1.merge;
      }
    });
    var mergeAll_1 = require_mergeAll();
    Object.defineProperty(exports, "mergeAll", {
      enumerable: true,
      get: function() {
        return mergeAll_1.mergeAll;
      }
    });
    var flatMap_1 = require_flatMap();
    Object.defineProperty(exports, "flatMap", {
      enumerable: true,
      get: function() {
        return flatMap_1.flatMap;
      }
    });
    var mergeMap_1 = require_mergeMap();
    Object.defineProperty(exports, "mergeMap", {
      enumerable: true,
      get: function() {
        return mergeMap_1.mergeMap;
      }
    });
    var mergeMapTo_1 = require_mergeMapTo();
    Object.defineProperty(exports, "mergeMapTo", {
      enumerable: true,
      get: function() {
        return mergeMapTo_1.mergeMapTo;
      }
    });
    var mergeScan_1 = require_mergeScan();
    Object.defineProperty(exports, "mergeScan", {
      enumerable: true,
      get: function() {
        return mergeScan_1.mergeScan;
      }
    });
    var mergeWith_1 = require_mergeWith();
    Object.defineProperty(exports, "mergeWith", {
      enumerable: true,
      get: function() {
        return mergeWith_1.mergeWith;
      }
    });
    var min_1 = require_min();
    Object.defineProperty(exports, "min", {
      enumerable: true,
      get: function() {
        return min_1.min;
      }
    });
    var multicast_1 = require_multicast();
    Object.defineProperty(exports, "multicast", {
      enumerable: true,
      get: function() {
        return multicast_1.multicast;
      }
    });
    var observeOn_1 = require_observeOn();
    Object.defineProperty(exports, "observeOn", {
      enumerable: true,
      get: function() {
        return observeOn_1.observeOn;
      }
    });
    var onErrorResumeNextWith_1 = require_onErrorResumeNextWith();
    Object.defineProperty(exports, "onErrorResumeNext", {
      enumerable: true,
      get: function() {
        return onErrorResumeNextWith_1.onErrorResumeNext;
      }
    });
    var pairwise_1 = require_pairwise();
    Object.defineProperty(exports, "pairwise", {
      enumerable: true,
      get: function() {
        return pairwise_1.pairwise;
      }
    });
    var partition_1 = require_partition2();
    Object.defineProperty(exports, "partition", {
      enumerable: true,
      get: function() {
        return partition_1.partition;
      }
    });
    var pluck_1 = require_pluck();
    Object.defineProperty(exports, "pluck", {
      enumerable: true,
      get: function() {
        return pluck_1.pluck;
      }
    });
    var publish_1 = require_publish();
    Object.defineProperty(exports, "publish", {
      enumerable: true,
      get: function() {
        return publish_1.publish;
      }
    });
    var publishBehavior_1 = require_publishBehavior();
    Object.defineProperty(exports, "publishBehavior", {
      enumerable: true,
      get: function() {
        return publishBehavior_1.publishBehavior;
      }
    });
    var publishLast_1 = require_publishLast();
    Object.defineProperty(exports, "publishLast", {
      enumerable: true,
      get: function() {
        return publishLast_1.publishLast;
      }
    });
    var publishReplay_1 = require_publishReplay();
    Object.defineProperty(exports, "publishReplay", {
      enumerable: true,
      get: function() {
        return publishReplay_1.publishReplay;
      }
    });
    var race_1 = require_race2();
    Object.defineProperty(exports, "race", {
      enumerable: true,
      get: function() {
        return race_1.race;
      }
    });
    var raceWith_1 = require_raceWith();
    Object.defineProperty(exports, "raceWith", {
      enumerable: true,
      get: function() {
        return raceWith_1.raceWith;
      }
    });
    var reduce_1 = require_reduce();
    Object.defineProperty(exports, "reduce", {
      enumerable: true,
      get: function() {
        return reduce_1.reduce;
      }
    });
    var repeat_1 = require_repeat();
    Object.defineProperty(exports, "repeat", {
      enumerable: true,
      get: function() {
        return repeat_1.repeat;
      }
    });
    var repeatWhen_1 = require_repeatWhen();
    Object.defineProperty(exports, "repeatWhen", {
      enumerable: true,
      get: function() {
        return repeatWhen_1.repeatWhen;
      }
    });
    var retry_1 = require_retry();
    Object.defineProperty(exports, "retry", {
      enumerable: true,
      get: function() {
        return retry_1.retry;
      }
    });
    var retryWhen_1 = require_retryWhen();
    Object.defineProperty(exports, "retryWhen", {
      enumerable: true,
      get: function() {
        return retryWhen_1.retryWhen;
      }
    });
    var refCount_1 = require_refCount();
    Object.defineProperty(exports, "refCount", {
      enumerable: true,
      get: function() {
        return refCount_1.refCount;
      }
    });
    var sample_1 = require_sample();
    Object.defineProperty(exports, "sample", {
      enumerable: true,
      get: function() {
        return sample_1.sample;
      }
    });
    var sampleTime_1 = require_sampleTime();
    Object.defineProperty(exports, "sampleTime", {
      enumerable: true,
      get: function() {
        return sampleTime_1.sampleTime;
      }
    });
    var scan_1 = require_scan();
    Object.defineProperty(exports, "scan", {
      enumerable: true,
      get: function() {
        return scan_1.scan;
      }
    });
    var sequenceEqual_1 = require_sequenceEqual();
    Object.defineProperty(exports, "sequenceEqual", {
      enumerable: true,
      get: function() {
        return sequenceEqual_1.sequenceEqual;
      }
    });
    var share_1 = require_share();
    Object.defineProperty(exports, "share", {
      enumerable: true,
      get: function() {
        return share_1.share;
      }
    });
    var shareReplay_1 = require_shareReplay();
    Object.defineProperty(exports, "shareReplay", {
      enumerable: true,
      get: function() {
        return shareReplay_1.shareReplay;
      }
    });
    var single_1 = require_single();
    Object.defineProperty(exports, "single", {
      enumerable: true,
      get: function() {
        return single_1.single;
      }
    });
    var skip_1 = require_skip();
    Object.defineProperty(exports, "skip", {
      enumerable: true,
      get: function() {
        return skip_1.skip;
      }
    });
    var skipLast_1 = require_skipLast();
    Object.defineProperty(exports, "skipLast", {
      enumerable: true,
      get: function() {
        return skipLast_1.skipLast;
      }
    });
    var skipUntil_1 = require_skipUntil();
    Object.defineProperty(exports, "skipUntil", {
      enumerable: true,
      get: function() {
        return skipUntil_1.skipUntil;
      }
    });
    var skipWhile_1 = require_skipWhile();
    Object.defineProperty(exports, "skipWhile", {
      enumerable: true,
      get: function() {
        return skipWhile_1.skipWhile;
      }
    });
    var startWith_1 = require_startWith();
    Object.defineProperty(exports, "startWith", {
      enumerable: true,
      get: function() {
        return startWith_1.startWith;
      }
    });
    var subscribeOn_1 = require_subscribeOn();
    Object.defineProperty(exports, "subscribeOn", {
      enumerable: true,
      get: function() {
        return subscribeOn_1.subscribeOn;
      }
    });
    var switchAll_1 = require_switchAll();
    Object.defineProperty(exports, "switchAll", {
      enumerable: true,
      get: function() {
        return switchAll_1.switchAll;
      }
    });
    var switchMap_1 = require_switchMap();
    Object.defineProperty(exports, "switchMap", {
      enumerable: true,
      get: function() {
        return switchMap_1.switchMap;
      }
    });
    var switchMapTo_1 = require_switchMapTo();
    Object.defineProperty(exports, "switchMapTo", {
      enumerable: true,
      get: function() {
        return switchMapTo_1.switchMapTo;
      }
    });
    var switchScan_1 = require_switchScan();
    Object.defineProperty(exports, "switchScan", {
      enumerable: true,
      get: function() {
        return switchScan_1.switchScan;
      }
    });
    var take_1 = require_take();
    Object.defineProperty(exports, "take", {
      enumerable: true,
      get: function() {
        return take_1.take;
      }
    });
    var takeLast_1 = require_takeLast();
    Object.defineProperty(exports, "takeLast", {
      enumerable: true,
      get: function() {
        return takeLast_1.takeLast;
      }
    });
    var takeUntil_1 = require_takeUntil();
    Object.defineProperty(exports, "takeUntil", {
      enumerable: true,
      get: function() {
        return takeUntil_1.takeUntil;
      }
    });
    var takeWhile_1 = require_takeWhile();
    Object.defineProperty(exports, "takeWhile", {
      enumerable: true,
      get: function() {
        return takeWhile_1.takeWhile;
      }
    });
    var tap_1 = require_tap();
    Object.defineProperty(exports, "tap", {
      enumerable: true,
      get: function() {
        return tap_1.tap;
      }
    });
    var throttle_1 = require_throttle();
    Object.defineProperty(exports, "throttle", {
      enumerable: true,
      get: function() {
        return throttle_1.throttle;
      }
    });
    var throttleTime_1 = require_throttleTime();
    Object.defineProperty(exports, "throttleTime", {
      enumerable: true,
      get: function() {
        return throttleTime_1.throttleTime;
      }
    });
    var throwIfEmpty_1 = require_throwIfEmpty();
    Object.defineProperty(exports, "throwIfEmpty", {
      enumerable: true,
      get: function() {
        return throwIfEmpty_1.throwIfEmpty;
      }
    });
    var timeInterval_1 = require_timeInterval();
    Object.defineProperty(exports, "timeInterval", {
      enumerable: true,
      get: function() {
        return timeInterval_1.timeInterval;
      }
    });
    var timeout_1 = require_timeout();
    Object.defineProperty(exports, "timeout", {
      enumerable: true,
      get: function() {
        return timeout_1.timeout;
      }
    });
    var timeoutWith_1 = require_timeoutWith();
    Object.defineProperty(exports, "timeoutWith", {
      enumerable: true,
      get: function() {
        return timeoutWith_1.timeoutWith;
      }
    });
    var timestamp_1 = require_timestamp();
    Object.defineProperty(exports, "timestamp", {
      enumerable: true,
      get: function() {
        return timestamp_1.timestamp;
      }
    });
    var toArray_1 = require_toArray();
    Object.defineProperty(exports, "toArray", {
      enumerable: true,
      get: function() {
        return toArray_1.toArray;
      }
    });
    var window_1 = require_window();
    Object.defineProperty(exports, "window", {
      enumerable: true,
      get: function() {
        return window_1.window;
      }
    });
    var windowCount_1 = require_windowCount();
    Object.defineProperty(exports, "windowCount", {
      enumerable: true,
      get: function() {
        return windowCount_1.windowCount;
      }
    });
    var windowTime_1 = require_windowTime();
    Object.defineProperty(exports, "windowTime", {
      enumerable: true,
      get: function() {
        return windowTime_1.windowTime;
      }
    });
    var windowToggle_1 = require_windowToggle();
    Object.defineProperty(exports, "windowToggle", {
      enumerable: true,
      get: function() {
        return windowToggle_1.windowToggle;
      }
    });
    var windowWhen_1 = require_windowWhen();
    Object.defineProperty(exports, "windowWhen", {
      enumerable: true,
      get: function() {
        return windowWhen_1.windowWhen;
      }
    });
    var withLatestFrom_1 = require_withLatestFrom();
    Object.defineProperty(exports, "withLatestFrom", {
      enumerable: true,
      get: function() {
        return withLatestFrom_1.withLatestFrom;
      }
    });
    var zip_1 = require_zip2();
    Object.defineProperty(exports, "zip", {
      enumerable: true,
      get: function() {
        return zip_1.zip;
      }
    });
    var zipAll_1 = require_zipAll();
    Object.defineProperty(exports, "zipAll", {
      enumerable: true,
      get: function() {
        return zipAll_1.zipAll;
      }
    });
    var zipWith_1 = require_zipWith();
    Object.defineProperty(exports, "zipWith", {
      enumerable: true,
      get: function() {
        return zipWith_1.zipWith;
      }
    });
  }
});

// node_modules/eventsource/lib/eventsource.js
var require_eventsource = __commonJS({
  "node_modules/eventsource/lib/eventsource.js"(exports, module2) {
    "use strict";
    var parse = require("url").parse;
    var events = require("events");
    var https = require("https");
    var http = require("http");
    var util = require("util");
    var httpsOptions = [
      "pfx",
      "key",
      "passphrase",
      "cert",
      "ca",
      "ciphers",
      "rejectUnauthorized",
      "secureProtocol",
      "servername",
      "checkServerIdentity"
    ];
    var bom = [
      239,
      187,
      191
    ];
    var colon = 58;
    var space = 32;
    var lineFeed = 10;
    var carriageReturn = 13;
    var maxBufferAheadAllocation = 1024 * 256;
    var reUnsafeHeader = /^(cookie|authorization)$/i;
    function hasBom(buf) {
      return bom.every(function(charCode, index) {
        return buf[index] === charCode;
      });
    }
    __name(hasBom, "hasBom");
    function EventSource(url, eventSourceInitDict) {
      var readyState = EventSource.CONNECTING;
      var headers = eventSourceInitDict && eventSourceInitDict.headers;
      var hasNewOrigin = false;
      Object.defineProperty(this, "readyState", {
        get: function() {
          return readyState;
        }
      });
      Object.defineProperty(this, "url", {
        get: function() {
          return url;
        }
      });
      var self2 = this;
      self2.reconnectInterval = 1e3;
      self2.connectionInProgress = false;
      function onConnectionClosed(message) {
        if (readyState === EventSource.CLOSED)
          return;
        readyState = EventSource.CONNECTING;
        _emit("error", new Event("error", {
          message
        }));
        if (reconnectUrl) {
          url = reconnectUrl;
          reconnectUrl = null;
          hasNewOrigin = false;
        }
        setTimeout(function() {
          if (readyState !== EventSource.CONNECTING || self2.connectionInProgress) {
            return;
          }
          self2.connectionInProgress = true;
          connect();
        }, self2.reconnectInterval);
      }
      __name(onConnectionClosed, "onConnectionClosed");
      var req;
      var lastEventId = "";
      if (headers && headers["Last-Event-ID"]) {
        lastEventId = headers["Last-Event-ID"];
        delete headers["Last-Event-ID"];
      }
      var discardTrailingNewline = false;
      var data = "";
      var eventName = "";
      var reconnectUrl = null;
      function connect() {
        var options = parse(url);
        var isSecure = options.protocol === "https:";
        options.headers = {
          "Cache-Control": "no-cache",
          "Accept": "text/event-stream"
        };
        if (lastEventId)
          options.headers["Last-Event-ID"] = lastEventId;
        if (headers) {
          var reqHeaders = hasNewOrigin ? removeUnsafeHeaders(headers) : headers;
          for (var i in reqHeaders) {
            var header = reqHeaders[i];
            if (header) {
              options.headers[i] = header;
            }
          }
        }
        options.rejectUnauthorized = !(eventSourceInitDict && !eventSourceInitDict.rejectUnauthorized);
        if (eventSourceInitDict && eventSourceInitDict.createConnection !== void 0) {
          options.createConnection = eventSourceInitDict.createConnection;
        }
        var useProxy = eventSourceInitDict && eventSourceInitDict.proxy;
        if (useProxy) {
          var proxy = parse(eventSourceInitDict.proxy);
          isSecure = proxy.protocol === "https:";
          options.protocol = isSecure ? "https:" : "http:";
          options.path = url;
          options.headers.Host = options.host;
          options.hostname = proxy.hostname;
          options.host = proxy.host;
          options.port = proxy.port;
        }
        if (eventSourceInitDict && eventSourceInitDict.https) {
          for (var optName in eventSourceInitDict.https) {
            if (httpsOptions.indexOf(optName) === -1) {
              continue;
            }
            var option = eventSourceInitDict.https[optName];
            if (option !== void 0) {
              options[optName] = option;
            }
          }
        }
        if (eventSourceInitDict && eventSourceInitDict.withCredentials !== void 0) {
          options.withCredentials = eventSourceInitDict.withCredentials;
        }
        req = (isSecure ? https : http).request(options, function(res) {
          self2.connectionInProgress = false;
          if (res.statusCode === 500 || res.statusCode === 502 || res.statusCode === 503 || res.statusCode === 504) {
            _emit("error", new Event("error", {
              status: res.statusCode,
              message: res.statusMessage
            }));
            onConnectionClosed();
            return;
          }
          if (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 307) {
            var location = res.headers.location;
            if (!location) {
              _emit("error", new Event("error", {
                status: res.statusCode,
                message: res.statusMessage
              }));
              return;
            }
            var prevOrigin = new URL(url).origin;
            var nextOrigin = new URL(location).origin;
            hasNewOrigin = prevOrigin !== nextOrigin;
            if (res.statusCode === 307)
              reconnectUrl = url;
            url = location;
            process.nextTick(connect);
            return;
          }
          if (res.statusCode !== 200) {
            _emit("error", new Event("error", {
              status: res.statusCode,
              message: res.statusMessage
            }));
            return self2.close();
          }
          readyState = EventSource.OPEN;
          res.on("close", function() {
            res.removeAllListeners("close");
            res.removeAllListeners("end");
            onConnectionClosed();
          });
          res.on("end", function() {
            res.removeAllListeners("close");
            res.removeAllListeners("end");
            onConnectionClosed();
          });
          _emit("open", new Event("open"));
          var buf;
          var newBuffer;
          var startingPos = 0;
          var startingFieldLength = -1;
          var newBufferSize = 0;
          var bytesUsed = 0;
          res.on("data", function(chunk) {
            if (!buf) {
              buf = chunk;
              if (hasBom(buf)) {
                buf = buf.slice(bom.length);
              }
              bytesUsed = buf.length;
            } else {
              if (chunk.length > buf.length - bytesUsed) {
                newBufferSize = buf.length * 2 + chunk.length;
                if (newBufferSize > maxBufferAheadAllocation) {
                  newBufferSize = buf.length + chunk.length + maxBufferAheadAllocation;
                }
                newBuffer = Buffer.alloc(newBufferSize);
                buf.copy(newBuffer, 0, 0, bytesUsed);
                buf = newBuffer;
              }
              chunk.copy(buf, bytesUsed);
              bytesUsed += chunk.length;
            }
            var pos = 0;
            var length = bytesUsed;
            while (pos < length) {
              if (discardTrailingNewline) {
                if (buf[pos] === lineFeed) {
                  ++pos;
                }
                discardTrailingNewline = false;
              }
              var lineLength = -1;
              var fieldLength = startingFieldLength;
              var c;
              for (var i2 = startingPos; lineLength < 0 && i2 < length; ++i2) {
                c = buf[i2];
                if (c === colon) {
                  if (fieldLength < 0) {
                    fieldLength = i2 - pos;
                  }
                } else if (c === carriageReturn) {
                  discardTrailingNewline = true;
                  lineLength = i2 - pos;
                } else if (c === lineFeed) {
                  lineLength = i2 - pos;
                }
              }
              if (lineLength < 0) {
                startingPos = length - pos;
                startingFieldLength = fieldLength;
                break;
              } else {
                startingPos = 0;
                startingFieldLength = -1;
              }
              parseEventStreamLine(buf, pos, fieldLength, lineLength);
              pos += lineLength + 1;
            }
            if (pos === length) {
              buf = void 0;
              bytesUsed = 0;
            } else if (pos > 0) {
              buf = buf.slice(pos, bytesUsed);
              bytesUsed = buf.length;
            }
          });
        });
        req.on("error", function(err) {
          self2.connectionInProgress = false;
          onConnectionClosed(err.message);
        });
        if (req.setNoDelay)
          req.setNoDelay(true);
        req.end();
      }
      __name(connect, "connect");
      connect();
      function _emit() {
        if (self2.listeners(arguments[0]).length > 0) {
          self2.emit.apply(self2, arguments);
        }
      }
      __name(_emit, "_emit");
      this._close = function() {
        if (readyState === EventSource.CLOSED)
          return;
        readyState = EventSource.CLOSED;
        if (req.abort)
          req.abort();
        if (req.xhr && req.xhr.abort)
          req.xhr.abort();
      };
      function parseEventStreamLine(buf, pos, fieldLength, lineLength) {
        if (lineLength === 0) {
          if (data.length > 0) {
            var type = eventName || "message";
            _emit(type, new MessageEvent(type, {
              data: data.slice(0, -1),
              lastEventId,
              origin: new URL(url).origin
            }));
            data = "";
          }
          eventName = void 0;
        } else if (fieldLength > 0) {
          var noValue = fieldLength < 0;
          var step = 0;
          var field = buf.slice(pos, pos + (noValue ? lineLength : fieldLength)).toString();
          if (noValue) {
            step = lineLength;
          } else if (buf[pos + fieldLength + 1] !== space) {
            step = fieldLength + 1;
          } else {
            step = fieldLength + 2;
          }
          pos += step;
          var valueLength = lineLength - step;
          var value = buf.slice(pos, pos + valueLength).toString();
          if (field === "data") {
            data += value + "\n";
          } else if (field === "event") {
            eventName = value;
          } else if (field === "id") {
            lastEventId = value;
          } else if (field === "retry") {
            var retry = parseInt(value, 10);
            if (!Number.isNaN(retry)) {
              self2.reconnectInterval = retry;
            }
          }
        }
      }
      __name(parseEventStreamLine, "parseEventStreamLine");
    }
    __name(EventSource, "EventSource");
    module2.exports = EventSource;
    util.inherits(EventSource, events.EventEmitter);
    EventSource.prototype.constructor = EventSource;
    [
      "open",
      "error",
      "message"
    ].forEach(function(method) {
      Object.defineProperty(EventSource.prototype, "on" + method, {
        /**
        * Returns the current listener
        *
        * @return {Mixed} the set function or undefined
        * @api private
        */
        get: /* @__PURE__ */ __name(function get() {
          var listener = this.listeners(method)[0];
          return listener ? listener._listener ? listener._listener : listener : void 0;
        }, "get"),
        /**
        * Start listening for events
        *
        * @param {Function} listener the listener
        * @return {Mixed} the set function or undefined
        * @api private
        */
        set: /* @__PURE__ */ __name(function set(listener) {
          this.removeAllListeners(method);
          this.addEventListener(method, listener);
        }, "set")
      });
    });
    Object.defineProperty(EventSource, "CONNECTING", {
      enumerable: true,
      value: 0
    });
    Object.defineProperty(EventSource, "OPEN", {
      enumerable: true,
      value: 1
    });
    Object.defineProperty(EventSource, "CLOSED", {
      enumerable: true,
      value: 2
    });
    EventSource.prototype.CONNECTING = 0;
    EventSource.prototype.OPEN = 1;
    EventSource.prototype.CLOSED = 2;
    EventSource.prototype.close = function() {
      this._close();
    };
    EventSource.prototype.addEventListener = /* @__PURE__ */ __name(function addEventListener(type, listener) {
      if (typeof listener === "function") {
        listener._listener = listener;
        this.on(type, listener);
      }
    }, "addEventListener");
    EventSource.prototype.dispatchEvent = /* @__PURE__ */ __name(function dispatchEvent(event) {
      if (!event.type) {
        throw new Error("UNSPECIFIED_EVENT_TYPE_ERR");
      }
      this.emit(event.type, event.detail);
    }, "dispatchEvent");
    EventSource.prototype.removeEventListener = /* @__PURE__ */ __name(function removeEventListener(type, listener) {
      if (typeof listener === "function") {
        listener._listener = void 0;
        this.removeListener(type, listener);
      }
    }, "removeEventListener");
    function Event(type, optionalProperties) {
      Object.defineProperty(this, "type", {
        writable: false,
        value: type,
        enumerable: true
      });
      if (optionalProperties) {
        for (var f in optionalProperties) {
          if (optionalProperties.hasOwnProperty(f)) {
            Object.defineProperty(this, f, {
              writable: false,
              value: optionalProperties[f],
              enumerable: true
            });
          }
        }
      }
    }
    __name(Event, "Event");
    function MessageEvent(type, eventInitDict) {
      Object.defineProperty(this, "type", {
        writable: false,
        value: type,
        enumerable: true
      });
      for (var f in eventInitDict) {
        if (eventInitDict.hasOwnProperty(f)) {
          Object.defineProperty(this, f, {
            writable: false,
            value: eventInitDict[f],
            enumerable: true
          });
        }
      }
    }
    __name(MessageEvent, "MessageEvent");
    function removeUnsafeHeaders(headers) {
      var safe = {};
      for (var key in headers) {
        if (reUnsafeHeader.test(key)) {
          continue;
        }
        safe[key] = headers[key];
      }
      return safe;
    }
    __name(removeUnsafeHeaders, "removeUnsafeHeaders");
  }
});

// node_modules/@sanity/eventsource/node.js
var require_node3 = __commonJS({
  "node_modules/@sanity/eventsource/node.js"(exports, module2) {
    "use strict";
    module2.exports = require_eventsource();
  }
});

// node_modules/@sanity/client/dist/_chunks/nodeMiddleware-BRRyFv21.cjs
var require_nodeMiddleware_BRRyFv21 = __commonJS({
  "node_modules/@sanity/client/dist/_chunks/nodeMiddleware-BRRyFv21.cjs"(exports) {
    "use strict";
    var getIt = require_dist();
    var middleware$1 = require_middleware();
    var rxjs = require_cjs();
    var operators = require_operators();
    var MAX_ITEMS_IN_ERROR_MESSAGE = 5;
    var _ClientError = class _ClientError extends Error {
      constructor(res) {
        const props = extractErrorProps(res);
        super(props.message);
        this.statusCode = 400;
        Object.assign(this, props);
      }
    };
    __name(_ClientError, "ClientError");
    var ClientError2 = _ClientError;
    var _ServerError = class _ServerError extends Error {
      constructor(res) {
        const props = extractErrorProps(res);
        super(props.message);
        this.statusCode = 500;
        Object.assign(this, props);
      }
    };
    __name(_ServerError, "ServerError");
    var ServerError2 = _ServerError;
    function extractErrorProps(res) {
      const body = res.body;
      const props = {
        response: res,
        statusCode: res.statusCode,
        responseBody: stringifyBody(body, res),
        message: "",
        details: void 0
      };
      if (body.error && body.message) {
        props.message = "".concat(body.error, " - ").concat(body.message);
        return props;
      }
      if (isMutationError(body)) {
        const allItems = body.error.items || [];
        const items = allItems.slice(0, MAX_ITEMS_IN_ERROR_MESSAGE).map((item) => {
          var _a7;
          return (_a7 = item.error) == null ? void 0 : _a7.description;
        }).filter(Boolean);
        let itemsStr = items.length ? ":\n- ".concat(items.join("\n- ")) : "";
        if (allItems.length > MAX_ITEMS_IN_ERROR_MESSAGE) {
          itemsStr += "\n...and ".concat(allItems.length - MAX_ITEMS_IN_ERROR_MESSAGE, " more");
        }
        props.message = "".concat(body.error.description).concat(itemsStr);
        props.details = body.error;
        return props;
      }
      if (body.error && body.error.description) {
        props.message = body.error.description;
        props.details = body.error;
        return props;
      }
      props.message = body.error || body.message || httpErrorMessage(res);
      return props;
    }
    __name(extractErrorProps, "extractErrorProps");
    function isMutationError(body) {
      return isPlainObject(body) && isPlainObject(body.error) && body.error.type === "mutationError" && typeof body.error.description === "string";
    }
    __name(isMutationError, "isMutationError");
    function isPlainObject(obj) {
      return typeof obj === "object" && obj !== null && !Array.isArray(obj);
    }
    __name(isPlainObject, "isPlainObject");
    function httpErrorMessage(res) {
      const statusMessage = res.statusMessage ? " ".concat(res.statusMessage) : "";
      return "".concat(res.method, "-request to ").concat(res.url, " resulted in HTTP ").concat(res.statusCode).concat(statusMessage);
    }
    __name(httpErrorMessage, "httpErrorMessage");
    function stringifyBody(body, res) {
      const contentType = (res.headers["content-type"] || "").toLowerCase();
      const isJson = contentType.indexOf("application/json") !== -1;
      return isJson ? JSON.stringify(body, null, 2) : body;
    }
    __name(stringifyBody, "stringifyBody");
    var httpError = {
      onResponse: (res) => {
        if (res.statusCode >= 500) {
          throw new ServerError2(res);
        } else if (res.statusCode >= 400) {
          throw new ClientError2(res);
        }
        return res;
      }
    };
    var printWarnings = {
      onResponse: (res) => {
        const warn = res.headers["x-sanity-warning"];
        const warnings = Array.isArray(warn) ? warn : [warn];
        warnings.filter(Boolean).forEach((msg) => console.warn(msg));
        return res;
      }
    };
    function defineHttpRequest(envMiddleware, _ref) {
      let {
        maxRetries = 5,
        retryDelay
      } = _ref;
      const request = getIt.getIt([maxRetries > 0 ? middleware$1.retry({
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        retryDelay,
        // This option is typed incorrectly in get-it.
        maxRetries,
        shouldRetry
      }) : {}, ...envMiddleware, printWarnings, middleware$1.jsonRequest(), middleware$1.jsonResponse(), middleware$1.progress(), httpError, middleware$1.observable({
        implementation: rxjs.Observable
      })]);
      function httpRequest(options) {
        let requester2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : request;
        return requester2(__spreadValues({
          maxRedirects: 0
        }, options));
      }
      __name(httpRequest, "httpRequest");
      httpRequest.defaultRequester = request;
      return httpRequest;
    }
    __name(defineHttpRequest, "defineHttpRequest");
    function shouldRetry(err, attempt, options) {
      const isSafe = options.method === "GET" || options.method === "HEAD";
      const uri = options.uri || options.url;
      const isQuery = uri.startsWith("/data/query");
      const isRetriableResponse = err.response && (err.response.statusCode === 429 || err.response.statusCode === 502 || err.response.statusCode === 503);
      if ((isSafe || isQuery) && isRetriableResponse)
        return true;
      return middleware$1.retry.shouldRetry(err, attempt, options);
    }
    __name(shouldRetry, "shouldRetry");
    function getSelection(sel) {
      if (typeof sel === "string" || Array.isArray(sel)) {
        return {
          id: sel
        };
      }
      if (typeof sel === "object" && sel !== null && "query" in sel && typeof sel.query === "string") {
        return "params" in sel && typeof sel.params === "object" && sel.params !== null ? {
          query: sel.query,
          params: sel.params
        } : {
          query: sel.query
        };
      }
      const selectionOpts = ["* Document ID (<docId>)", "* Array of document IDs", "* Object containing `query`"].join("\n");
      throw new Error("Unknown selection - must be one of:\n\n".concat(selectionOpts));
    }
    __name(getSelection, "getSelection");
    var VALID_ASSET_TYPES = ["image", "file"];
    var VALID_INSERT_LOCATIONS = ["before", "after", "replace"];
    var dataset = /* @__PURE__ */ __name((name2) => {
      if (!/^(~[a-z0-9]{1}[-\w]{0,63}|[a-z0-9]{1}[-\w]{0,63})$/.test(name2)) {
        throw new Error("Datasets can only contain lowercase characters, numbers, underscores and dashes, and start with tilde, and be maximum 64 characters");
      }
    }, "dataset");
    var projectId = /* @__PURE__ */ __name((id) => {
      if (!/^[-a-z0-9]+$/i.test(id)) {
        throw new Error("`projectId` can only contain only a-z, 0-9 and dashes");
      }
    }, "projectId");
    var validateAssetType = /* @__PURE__ */ __name((type) => {
      if (VALID_ASSET_TYPES.indexOf(type) === -1) {
        throw new Error("Invalid asset type: ".concat(type, ". Must be one of ").concat(VALID_ASSET_TYPES.join(", ")));
      }
    }, "validateAssetType");
    var validateObject = /* @__PURE__ */ __name((op, val) => {
      if (val === null || typeof val !== "object" || Array.isArray(val)) {
        throw new Error("".concat(op, "() takes an object of properties"));
      }
    }, "validateObject");
    var validateDocumentId = /* @__PURE__ */ __name((op, id) => {
      if (typeof id !== "string" || !/^[a-z0-9_][a-z0-9_.-]{0,127}$/i.test(id) || id.includes("..")) {
        throw new Error("".concat(op, '(): "').concat(id, '" is not a valid document ID'));
      }
    }, "validateDocumentId");
    var requireDocumentId = /* @__PURE__ */ __name((op, doc) => {
      if (!doc._id) {
        throw new Error("".concat(op, '() requires that the document contains an ID ("_id" property)'));
      }
      validateDocumentId(op, doc._id);
    }, "requireDocumentId");
    var validateInsert = /* @__PURE__ */ __name((at, selector, items) => {
      const signature = "insert(at, selector, items)";
      if (VALID_INSERT_LOCATIONS.indexOf(at) === -1) {
        const valid = VALID_INSERT_LOCATIONS.map((loc) => '"'.concat(loc, '"')).join(", ");
        throw new Error("".concat(signature, ' takes an "at"-argument which is one of: ').concat(valid));
      }
      if (typeof selector !== "string") {
        throw new Error("".concat(signature, ' takes a "selector"-argument which must be a string'));
      }
      if (!Array.isArray(items)) {
        throw new Error("".concat(signature, ' takes an "items"-argument which must be an array'));
      }
    }, "validateInsert");
    var hasDataset = /* @__PURE__ */ __name((config2) => {
      if (!config2.dataset) {
        throw new Error("`dataset` must be provided to perform queries");
      }
      return config2.dataset || "";
    }, "hasDataset");
    var requestTag = /* @__PURE__ */ __name((tag) => {
      if (typeof tag !== "string" || !/^[a-z0-9._-]{1,75}$/i.test(tag)) {
        throw new Error("Tag can only contain alphanumeric characters, underscores, dashes and dots, and be between one and 75 characters long.");
      }
      return tag;
    }, "requestTag");
    var __accessCheck$6 = /* @__PURE__ */ __name((obj, member, msg) => {
      if (!member.has(obj))
        throw TypeError("Cannot " + msg);
    }, "__accessCheck$6");
    var __privateGet$6 = /* @__PURE__ */ __name((obj, member, getter) => {
      __accessCheck$6(obj, member, "read from private field");
      return getter ? getter.call(obj) : member.get(obj);
    }, "__privateGet$6");
    var __privateAdd$6 = /* @__PURE__ */ __name((obj, member, value) => {
      if (member.has(obj))
        throw TypeError("Cannot add the same private member more than once");
      member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
    }, "__privateAdd$6");
    var __privateSet$6 = /* @__PURE__ */ __name((obj, member, value, setter) => {
      __accessCheck$6(obj, member, "write to private field");
      setter ? setter.call(obj, value) : member.set(obj, value);
      return value;
    }, "__privateSet$6");
    var _client$5;
    var _client2$5;
    var _BasePatch = class _BasePatch {
      constructor(selection) {
        let operations = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        this.selection = selection;
        this.operations = operations;
      }
      /**
       * Sets the given attributes to the document. Does NOT merge objects.
       * The operation is added to the current patch, ready to be commited by `commit()`
       *
       * @param attrs - Attributes to set. To set a deep attribute, use JSONMatch, eg: \{"nested.prop": "value"\}
       */
      set(attrs) {
        return this._assign("set", attrs);
      }
      /**
       * Sets the given attributes to the document if they are not currently set. Does NOT merge objects.
       * The operation is added to the current patch, ready to be commited by `commit()`
       *
       * @param attrs - Attributes to set. To set a deep attribute, use JSONMatch, eg: \{"nested.prop": "value"\}
       */
      setIfMissing(attrs) {
        return this._assign("setIfMissing", attrs);
      }
      /**
       * Performs a "diff-match-patch" operation on the string attributes provided.
       * The operation is added to the current patch, ready to be commited by `commit()`
       *
       * @param attrs - Attributes to perform operation on. To set a deep attribute, use JSONMatch, eg: \{"nested.prop": "dmp"\}
       */
      diffMatchPatch(attrs) {
        validateObject("diffMatchPatch", attrs);
        return this._assign("diffMatchPatch", attrs);
      }
      /**
       * Unsets the attribute paths provided.
       * The operation is added to the current patch, ready to be commited by `commit()`
       *
       * @param attrs - Attribute paths to unset.
       */
      unset(attrs) {
        if (!Array.isArray(attrs)) {
          throw new Error("unset(attrs) takes an array of attributes to unset, non-array given");
        }
        this.operations = Object.assign({}, this.operations, {
          unset: attrs
        });
        return this;
      }
      /**
       * Increment a numeric value. Each entry in the argument is either an attribute or a JSON path. The value may be a positive or negative integer or floating-point value. The operation will fail if target value is not a numeric value, or doesn't exist.
       *
       * @param attrs - Object of attribute paths to increment, values representing the number to increment by.
       */
      inc(attrs) {
        return this._assign("inc", attrs);
      }
      /**
       * Decrement a numeric value. Each entry in the argument is either an attribute or a JSON path. The value may be a positive or negative integer or floating-point value. The operation will fail if target value is not a numeric value, or doesn't exist.
       *
       * @param attrs - Object of attribute paths to decrement, values representing the number to decrement by.
       */
      dec(attrs) {
        return this._assign("dec", attrs);
      }
      /**
       * Provides methods for modifying arrays, by inserting, appending and replacing elements via a JSONPath expression.
       *
       * @param at - Location to insert at, relative to the given selector, or 'replace' the matched path
       * @param selector - JSONPath expression, eg `comments[-1]` or `blocks[_key=="abc123"]`
       * @param items - Array of items to insert/replace
       */
      insert(at, selector, items) {
        validateInsert(at, selector, items);
        return this._assign("insert", {
          [at]: selector,
          items
        });
      }
      /**
       * Append the given items to the array at the given JSONPath
       *
       * @param selector - Attribute/path to append to, eg `comments` or `person.hobbies`
       * @param items - Array of items to append to the array
       */
      append(selector, items) {
        return this.insert("after", "".concat(selector, "[-1]"), items);
      }
      /**
       * Prepend the given items to the array at the given JSONPath
       *
       * @param selector - Attribute/path to prepend to, eg `comments` or `person.hobbies`
       * @param items - Array of items to prepend to the array
       */
      prepend(selector, items) {
        return this.insert("before", "".concat(selector, "[0]"), items);
      }
      /**
       * Change the contents of an array by removing existing elements and/or adding new elements.
       *
       * @param selector - Attribute or JSONPath expression for array
       * @param start - Index at which to start changing the array (with origin 0). If greater than the length of the array, actual starting index will be set to the length of the array. If negative, will begin that many elements from the end of the array (with origin -1) and will be set to 0 if absolute value is greater than the length of the array.x
       * @param deleteCount - An integer indicating the number of old array elements to remove.
       * @param items - The elements to add to the array, beginning at the start index. If you don't specify any elements, splice() will only remove elements from the array.
       */
      splice(selector, start, deleteCount, items) {
        const delAll = typeof deleteCount === "undefined" || deleteCount === -1;
        const startIndex = start < 0 ? start - 1 : start;
        const delCount = delAll ? -1 : Math.max(0, start + deleteCount);
        const delRange = startIndex < 0 && delCount >= 0 ? "" : delCount;
        const rangeSelector = "".concat(selector, "[").concat(startIndex, ":").concat(delRange, "]");
        return this.insert("replace", rangeSelector, items || []);
      }
      /**
       * Adds a revision clause, preventing the document from being patched if the `_rev` property does not match the given value
       *
       * @param rev - Revision to lock the patch to
       */
      ifRevisionId(rev) {
        this.operations.ifRevisionID = rev;
        return this;
      }
      /**
       * Return a plain JSON representation of the patch
       */
      serialize() {
        return __spreadValues(__spreadValues({}, getSelection(this.selection)), this.operations);
      }
      /**
       * Return a plain JSON representation of the patch
       */
      toJSON() {
        return this.serialize();
      }
      /**
       * Clears the patch of all operations
       */
      reset() {
        this.operations = {};
        return this;
      }
      _assign(op, props) {
        let merge = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
        validateObject(op, props);
        this.operations = Object.assign({}, this.operations, {
          [op]: Object.assign({}, merge && this.operations[op] || {}, props)
        });
        return this;
      }
      _set(op, props) {
        return this._assign(op, props, false);
      }
    };
    __name(_BasePatch, "BasePatch");
    var BasePatch2 = _BasePatch;
    var _a;
    var _ObservablePatch = (_a = class extends BasePatch2 {
      constructor(selection, operations, client) {
        super(selection, operations);
        __privateAdd$6(this, _client$5, void 0);
        __privateSet$6(this, _client$5, client);
      }
      /**
       * Clones the patch
       */
      clone() {
        return new _a(this.selection, __spreadValues({}, this.operations), __privateGet$6(this, _client$5));
      }
      commit(options) {
        if (!__privateGet$6(this, _client$5)) {
          throw new Error("No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method");
        }
        const returnFirst = typeof this.selection === "string";
        const opts = Object.assign({
          returnFirst,
          returnDocuments: true
        }, options);
        return __privateGet$6(this, _client$5).mutate({
          patch: this.serialize()
        }, opts);
      }
    }, __name(_a, "_ObservablePatch"), _a);
    _client$5 = /* @__PURE__ */ new WeakMap();
    var ObservablePatch2 = _ObservablePatch;
    var _a2;
    var _Patch = (_a2 = class extends BasePatch2 {
      constructor(selection, operations, client) {
        super(selection, operations);
        __privateAdd$6(this, _client2$5, void 0);
        __privateSet$6(this, _client2$5, client);
      }
      /**
       * Clones the patch
       */
      clone() {
        return new _a2(this.selection, __spreadValues({}, this.operations), __privateGet$6(this, _client2$5));
      }
      commit(options) {
        if (!__privateGet$6(this, _client2$5)) {
          throw new Error("No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method");
        }
        const returnFirst = typeof this.selection === "string";
        const opts = Object.assign({
          returnFirst,
          returnDocuments: true
        }, options);
        return __privateGet$6(this, _client2$5).mutate({
          patch: this.serialize()
        }, opts);
      }
    }, __name(_a2, "_Patch"), _a2);
    _client2$5 = /* @__PURE__ */ new WeakMap();
    var Patch2 = _Patch;
    var __accessCheck$5 = /* @__PURE__ */ __name((obj, member, msg) => {
      if (!member.has(obj))
        throw TypeError("Cannot " + msg);
    }, "__accessCheck$5");
    var __privateGet$5 = /* @__PURE__ */ __name((obj, member, getter) => {
      __accessCheck$5(obj, member, "read from private field");
      return getter ? getter.call(obj) : member.get(obj);
    }, "__privateGet$5");
    var __privateAdd$5 = /* @__PURE__ */ __name((obj, member, value) => {
      if (member.has(obj))
        throw TypeError("Cannot add the same private member more than once");
      member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
    }, "__privateAdd$5");
    var __privateSet$5 = /* @__PURE__ */ __name((obj, member, value, setter) => {
      __accessCheck$5(obj, member, "write to private field");
      setter ? setter.call(obj, value) : member.set(obj, value);
      return value;
    }, "__privateSet$5");
    var _client$4;
    var _client2$4;
    var defaultMutateOptions = {
      returnDocuments: false
    };
    var _BaseTransaction = class _BaseTransaction {
      constructor() {
        let operations = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        let transactionId = arguments.length > 1 ? arguments[1] : void 0;
        this.operations = operations;
        this.trxId = transactionId;
      }
      /**
       * Creates a new Sanity document. If `_id` is provided and already exists, the mutation will fail. If no `_id` is given, one will automatically be generated by the database.
       * The operation is added to the current transaction, ready to be commited by `commit()`
       *
       * @param doc - Document to create. Requires a `_type` property.
       */
      create(doc) {
        validateObject("create", doc);
        return this._add({
          create: doc
        });
      }
      /**
       * Creates a new Sanity document. If a document with the same `_id` already exists, the create operation will be ignored.
       * The operation is added to the current transaction, ready to be commited by `commit()`
       *
       * @param doc - Document to create if it does not already exist. Requires `_id` and `_type` properties.
       */
      createIfNotExists(doc) {
        const op = "createIfNotExists";
        validateObject(op, doc);
        requireDocumentId(op, doc);
        return this._add({
          [op]: doc
        });
      }
      /**
       * Creates a new Sanity document, or replaces an existing one if the same `_id` is already used.
       * The operation is added to the current transaction, ready to be commited by `commit()`
       *
       * @param doc - Document to create or replace. Requires `_id` and `_type` properties.
       */
      createOrReplace(doc) {
        const op = "createOrReplace";
        validateObject(op, doc);
        requireDocumentId(op, doc);
        return this._add({
          [op]: doc
        });
      }
      /**
       * Deletes the document with the given document ID
       * The operation is added to the current transaction, ready to be commited by `commit()`
       *
       * @param documentId - Document ID to delete
       */
      delete(documentId) {
        validateDocumentId("delete", documentId);
        return this._add({
          delete: {
            id: documentId
          }
        });
      }
      transactionId(id) {
        if (!id) {
          return this.trxId;
        }
        this.trxId = id;
        return this;
      }
      /**
       * Return a plain JSON representation of the transaction
       */
      serialize() {
        return [...this.operations];
      }
      /**
       * Return a plain JSON representation of the transaction
       */
      toJSON() {
        return this.serialize();
      }
      /**
       * Clears the transaction of all operations
       */
      reset() {
        this.operations = [];
        return this;
      }
      _add(mut) {
        this.operations.push(mut);
        return this;
      }
    };
    __name(_BaseTransaction, "BaseTransaction");
    var BaseTransaction2 = _BaseTransaction;
    var _a3;
    var _Transaction = (_a3 = class extends BaseTransaction2 {
      constructor(operations, client, transactionId) {
        super(operations, transactionId);
        __privateAdd$5(this, _client$4, void 0);
        __privateSet$5(this, _client$4, client);
      }
      /**
       * Clones the transaction
       */
      clone() {
        return new _a3([...this.operations], __privateGet$5(this, _client$4), this.trxId);
      }
      commit(options) {
        if (!__privateGet$5(this, _client$4)) {
          throw new Error("No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method");
        }
        return __privateGet$5(this, _client$4).mutate(this.serialize(), Object.assign({
          transactionId: this.trxId
        }, defaultMutateOptions, options || {}));
      }
      patch(patchOrDocumentId, patchOps) {
        const isBuilder = typeof patchOps === "function";
        const isPatch = typeof patchOrDocumentId !== "string" && patchOrDocumentId instanceof Patch2;
        if (isPatch) {
          return this._add({
            patch: patchOrDocumentId.serialize()
          });
        }
        if (isBuilder) {
          const patch = patchOps(new Patch2(patchOrDocumentId, {}, __privateGet$5(this, _client$4)));
          if (!(patch instanceof Patch2)) {
            throw new Error("function passed to `patch()` must return the patch");
          }
          return this._add({
            patch: patch.serialize()
          });
        }
        return this._add({
          patch: __spreadValues({
            id: patchOrDocumentId
          }, patchOps)
        });
      }
    }, __name(_a3, "_Transaction"), _a3);
    _client$4 = /* @__PURE__ */ new WeakMap();
    var Transaction2 = _Transaction;
    var _a4;
    var _ObservableTransaction = (_a4 = class extends BaseTransaction2 {
      constructor(operations, client, transactionId) {
        super(operations, transactionId);
        __privateAdd$5(this, _client2$4, void 0);
        __privateSet$5(this, _client2$4, client);
      }
      /**
       * Clones the transaction
       */
      clone() {
        return new _a4([...this.operations], __privateGet$5(this, _client2$4), this.trxId);
      }
      commit(options) {
        if (!__privateGet$5(this, _client2$4)) {
          throw new Error("No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method");
        }
        return __privateGet$5(this, _client2$4).mutate(this.serialize(), Object.assign({
          transactionId: this.trxId
        }, defaultMutateOptions, options || {}));
      }
      patch(patchOrDocumentId, patchOps) {
        const isBuilder = typeof patchOps === "function";
        const isPatch = typeof patchOrDocumentId !== "string" && patchOrDocumentId instanceof ObservablePatch2;
        if (isPatch) {
          return this._add({
            patch: patchOrDocumentId.serialize()
          });
        }
        if (isBuilder) {
          const patch = patchOps(new ObservablePatch2(patchOrDocumentId, {}, __privateGet$5(this, _client2$4)));
          if (!(patch instanceof ObservablePatch2)) {
            throw new Error("function passed to `patch()` must return the patch");
          }
          return this._add({
            patch: patch.serialize()
          });
        }
        return this._add({
          patch: __spreadValues({
            id: patchOrDocumentId
          }, patchOps)
        });
      }
    }, __name(_a4, "_ObservableTransaction"), _a4);
    _client2$4 = /* @__PURE__ */ new WeakMap();
    var ObservableTransaction2 = _ObservableTransaction;
    var BASE_URL = "https://www.sanity.io/help/";
    function generateHelpUrl(slug) {
      return BASE_URL + slug;
    }
    __name(generateHelpUrl, "generateHelpUrl");
    function once(fn) {
      let didCall = false;
      let returnValue;
      return function() {
        if (didCall) {
          return returnValue;
        }
        returnValue = fn(...arguments);
        didCall = true;
        return returnValue;
      };
    }
    __name(once, "once");
    var createWarningPrinter = /* @__PURE__ */ __name((message) => (
      // eslint-disable-next-line no-console
      once(function() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return console.warn(message.join(" "), ...args);
      })
    ), "createWarningPrinter");
    var printCdnWarning = createWarningPrinter(["Since you haven't set a value for `useCdn`, we will deliver content using our", "global, edge-cached API-CDN. If you wish to have content delivered faster, set", "`useCdn: false` to use the Live API. Note: You may incur higher costs using the live API."]);
    var printCdnPreviewDraftsWarning = createWarningPrinter(["The Sanity client is configured with the `perspective` set to `previewDrafts`, which doesn't support the API-CDN.", "The Live API will be used instead. Set `useCdn: false` in your configuration to hide this warning."]);
    var printBrowserTokenWarning = createWarningPrinter(["You have configured Sanity client to use a token in the browser. This may cause unintentional security issues.", "See ".concat(generateHelpUrl("js-client-browser-token"), " for more information and how to hide this warning.")]);
    var printNoApiVersionSpecifiedWarning = createWarningPrinter(["Using the Sanity client without specifying an API version is deprecated.", "See ".concat(generateHelpUrl("js-client-api-version"))]);
    var printNoDefaultExport = createWarningPrinter(["The default export of @sanity/client has been deprecated. Use the named export `createClient` instead."]);
    var defaultCdnHost = "apicdn.sanity.io";
    var defaultConfig = {
      apiHost: "https://api.sanity.io",
      apiVersion: "1",
      useProjectHostname: true
    };
    var LOCALHOSTS = ["localhost", "127.0.0.1", "0.0.0.0"];
    var isLocal = /* @__PURE__ */ __name((host) => LOCALHOSTS.indexOf(host) !== -1, "isLocal");
    var validateApiVersion = /* @__PURE__ */ __name(function validateApiVersion2(apiVersion) {
      if (apiVersion === "1" || apiVersion === "X") {
        return;
      }
      const apiDate = new Date(apiVersion);
      const apiVersionValid = /^\d{4}-\d{2}-\d{2}$/.test(apiVersion) && apiDate instanceof Date && apiDate.getTime() > 0;
      if (!apiVersionValid) {
        throw new Error("Invalid API version string, expected `1` or date in format `YYYY-MM-DD`");
      }
    }, "validateApiVersion2");
    var validateApiPerspective = /* @__PURE__ */ __name(function validateApiPerspective2(perspective) {
      switch (perspective) {
        case "previewDrafts":
        case "published":
        case "raw":
          return;
        default:
          throw new TypeError("Invalid API perspective string, expected `published`, `previewDrafts` or `raw`");
      }
    }, "validateApiPerspective2");
    var initConfig = /* @__PURE__ */ __name((config2, prevConfig) => {
      const specifiedConfig = Object.assign({}, prevConfig, config2);
      if (!specifiedConfig.apiVersion) {
        printNoApiVersionSpecifiedWarning();
      }
      const newConfig = Object.assign({}, defaultConfig, specifiedConfig);
      const projectBased = newConfig.useProjectHostname;
      if (typeof Promise === "undefined") {
        const helpUrl = generateHelpUrl("js-client-promise-polyfill");
        throw new Error("No native Promise-implementation found, polyfill needed - see ".concat(helpUrl));
      }
      if (projectBased && !newConfig.projectId) {
        throw new Error("Configuration must contain `projectId`");
      }
      if (typeof newConfig.perspective === "string") {
        validateApiPerspective(newConfig.perspective);
      }
      if ("encodeSourceMapAtPath" in newConfig || "encodeSourceMap" in newConfig || "studioUrl" in newConfig || "logger" in newConfig) {
        throw new Error("It looks like you're using options meant for '@sanity/preview-kit/client', such as 'encodeSourceMapAtPath', 'encodeSourceMap', 'studioUrl' and 'logger'. Make sure you're using the right import.");
      }
      if ("stega" in newConfig && newConfig["stega"] !== void 0 && newConfig["stega"] !== false) {
        throw new Error("It looks like you're using options meant for '@sanity/client/stega'. Make sure you're using the right import. Or set 'stega' in 'createClient' to 'false'.");
      }
      const isBrowser = typeof window !== "undefined" && window.location && window.location.hostname;
      const isLocalhost = isBrowser && isLocal(window.location.hostname);
      if (isBrowser && isLocalhost && newConfig.token && newConfig.ignoreBrowserTokenWarning !== true) {
        printBrowserTokenWarning();
      } else if (typeof newConfig.useCdn === "undefined") {
        printCdnWarning();
      }
      if (projectBased) {
        projectId(newConfig.projectId);
      }
      if (newConfig.dataset) {
        dataset(newConfig.dataset);
      }
      if ("requestTagPrefix" in newConfig) {
        newConfig.requestTagPrefix = newConfig.requestTagPrefix ? requestTag(newConfig.requestTagPrefix).replace(/\.+$/, "") : void 0;
      }
      newConfig.apiVersion = "".concat(newConfig.apiVersion).replace(/^v/, "");
      newConfig.isDefaultApi = newConfig.apiHost === defaultConfig.apiHost;
      newConfig.useCdn = newConfig.useCdn !== false && !newConfig.withCredentials;
      validateApiVersion(newConfig.apiVersion);
      const hostParts = newConfig.apiHost.split("://", 2);
      const protocol = hostParts[0];
      const host = hostParts[1];
      const cdnHost = newConfig.isDefaultApi ? defaultCdnHost : host;
      if (newConfig.useProjectHostname) {
        newConfig.url = "".concat(protocol, "://").concat(newConfig.projectId, ".").concat(host, "/v").concat(newConfig.apiVersion);
        newConfig.cdnUrl = "".concat(protocol, "://").concat(newConfig.projectId, ".").concat(cdnHost, "/v").concat(newConfig.apiVersion);
      } else {
        newConfig.url = "".concat(newConfig.apiHost, "/v").concat(newConfig.apiVersion);
        newConfig.cdnUrl = newConfig.url;
      }
      return newConfig;
    }, "initConfig");
    var projectHeader = "X-Sanity-Project-ID";
    function requestOptions(config2) {
      let overrides = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      const headers = {};
      const token = overrides.token || config2.token;
      if (token) {
        headers.Authorization = "Bearer ".concat(token);
      }
      if (!overrides.useGlobalApi && !config2.useProjectHostname && config2.projectId) {
        headers[projectHeader] = config2.projectId;
      }
      const withCredentials = Boolean(typeof overrides.withCredentials === "undefined" ? config2.token || config2.withCredentials : overrides.withCredentials);
      const timeout = typeof overrides.timeout === "undefined" ? config2.timeout : overrides.timeout;
      return Object.assign({}, overrides, {
        headers: Object.assign({}, headers, overrides.headers || {}),
        timeout: typeof timeout === "undefined" ? 5 * 60 * 1e3 : timeout,
        proxy: overrides.proxy || config2.proxy,
        json: true,
        withCredentials,
        fetch: typeof overrides.fetch === "object" && typeof config2.fetch === "object" ? __spreadValues(__spreadValues({}, config2.fetch), overrides.fetch) : overrides.fetch || config2.fetch
      });
    }
    __name(requestOptions, "requestOptions");
    var encodeQueryString = /* @__PURE__ */ __name((_ref2) => {
      let {
        query,
        params = {},
        options = {}
      } = _ref2;
      const searchParams = new URLSearchParams();
      const _a7 = options, {
        tag
      } = _a7, opts = __objRest(_a7, [
        "tag"
      ]);
      if (tag)
        searchParams.append("tag", tag);
      searchParams.append("query", query);
      for (const [key, value] of Object.entries(params)) {
        searchParams.append("$".concat(key), JSON.stringify(value));
      }
      for (const [key, value] of Object.entries(opts)) {
        if (value)
          searchParams.append(key, "".concat(value));
      }
      return "?".concat(searchParams);
    }, "encodeQueryString");
    var excludeFalsey = /* @__PURE__ */ __name((param, defValue) => {
      const value = typeof param === "undefined" ? defValue : param;
      return param === false ? void 0 : value;
    }, "excludeFalsey");
    var getMutationQuery = /* @__PURE__ */ __name(function() {
      let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return {
        dryRun: options.dryRun,
        returnIds: true,
        returnDocuments: excludeFalsey(options.returnDocuments, true),
        visibility: options.visibility || "sync",
        autoGenerateArrayKeys: options.autoGenerateArrayKeys,
        skipCrossDatasetReferenceValidation: options.skipCrossDatasetReferenceValidation
      };
    }, "getMutationQuery");
    var isResponse = /* @__PURE__ */ __name((event) => event.type === "response", "isResponse");
    var getBody = /* @__PURE__ */ __name((event) => event.body, "getBody");
    var indexBy = /* @__PURE__ */ __name((docs, attr) => docs.reduce((indexed, doc) => {
      indexed[attr(doc)] = doc;
      return indexed;
    }, /* @__PURE__ */ Object.create(null)), "indexBy");
    var getQuerySizeLimit = 11264;
    function _fetch(client, httpRequest, query, params) {
      let options = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {};
      const mapResponse = options.filterResponse === false ? (res) => res : (res) => res.result;
      const _a7 = __spreadValues({
        // Opt out of setting a `signal` on an internal `fetch` if one isn't provided.
        // This is necessary in React Server Components to avoid opting out of Request Memoization.
        useAbortSignal: typeof options.signal !== "undefined"
      }, options), {
        cache,
        next
      } = _a7, opts = __objRest(_a7, [
        "cache",
        "next"
      ]);
      const reqOpts = typeof cache !== "undefined" || typeof next !== "undefined" ? __spreadProps(__spreadValues({}, opts), {
        fetch: {
          cache,
          next
        }
      }) : opts;
      return _dataRequest(client, httpRequest, "query", {
        query,
        params
      }, reqOpts).pipe(operators.map(mapResponse));
    }
    __name(_fetch, "_fetch");
    function _getDocument(client, httpRequest, id) {
      let opts = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
      const options = {
        uri: _getDataUrl(client, "doc", id),
        json: true,
        tag: opts.tag
      };
      return _requestObservable(client, httpRequest, options).pipe(operators.filter(isResponse), operators.map((event) => event.body.documents && event.body.documents[0]));
    }
    __name(_getDocument, "_getDocument");
    function _getDocuments(client, httpRequest, ids) {
      let opts = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
      const options = {
        uri: _getDataUrl(client, "doc", ids.join(",")),
        json: true,
        tag: opts.tag
      };
      return _requestObservable(client, httpRequest, options).pipe(operators.filter(isResponse), operators.map((event) => {
        const indexed = indexBy(event.body.documents || [], (doc) => doc._id);
        return ids.map((id) => indexed[id] || null);
      }));
    }
    __name(_getDocuments, "_getDocuments");
    function _createIfNotExists(client, httpRequest, doc, options) {
      requireDocumentId("createIfNotExists", doc);
      return _create(client, httpRequest, doc, "createIfNotExists", options);
    }
    __name(_createIfNotExists, "_createIfNotExists");
    function _createOrReplace(client, httpRequest, doc, options) {
      requireDocumentId("createOrReplace", doc);
      return _create(client, httpRequest, doc, "createOrReplace", options);
    }
    __name(_createOrReplace, "_createOrReplace");
    function _delete(client, httpRequest, selection, options) {
      return _dataRequest(client, httpRequest, "mutate", {
        mutations: [{
          delete: getSelection(selection)
        }]
      }, options);
    }
    __name(_delete, "_delete");
    function _mutate(client, httpRequest, mutations, options) {
      let mut;
      if (mutations instanceof Patch2 || mutations instanceof ObservablePatch2) {
        mut = {
          patch: mutations.serialize()
        };
      } else if (mutations instanceof Transaction2 || mutations instanceof ObservableTransaction2) {
        mut = mutations.serialize();
      } else {
        mut = mutations;
      }
      const muts = Array.isArray(mut) ? mut : [mut];
      const transactionId = options && options.transactionId || void 0;
      return _dataRequest(client, httpRequest, "mutate", {
        mutations: muts,
        transactionId
      }, options);
    }
    __name(_mutate, "_mutate");
    function _dataRequest(client, httpRequest, endpoint, body) {
      let options = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {};
      const isMutation = endpoint === "mutate";
      const isQuery = endpoint === "query";
      const strQuery = isMutation ? "" : encodeQueryString(body);
      const useGet = !isMutation && strQuery.length < getQuerySizeLimit;
      const stringQuery = useGet ? strQuery : "";
      const returnFirst = options.returnFirst;
      const {
        timeout,
        token,
        tag,
        headers
      } = options;
      const uri = _getDataUrl(client, endpoint, stringQuery);
      const reqOptions = {
        method: useGet ? "GET" : "POST",
        uri,
        json: true,
        body: useGet ? void 0 : body,
        query: isMutation && getMutationQuery(options),
        timeout,
        headers,
        token,
        tag,
        perspective: options.perspective,
        resultSourceMap: options.resultSourceMap,
        canUseCdn: isQuery,
        signal: options.signal,
        fetch: options.fetch,
        useAbortSignal: options.useAbortSignal
      };
      return _requestObservable(client, httpRequest, reqOptions).pipe(operators.filter(isResponse), operators.map(getBody), operators.map((res) => {
        if (!isMutation) {
          return res;
        }
        const results = res.results || [];
        if (options.returnDocuments) {
          return returnFirst ? results[0] && results[0].document : results.map((mut) => mut.document);
        }
        const key = returnFirst ? "documentId" : "documentIds";
        const ids = returnFirst ? results[0] && results[0].id : results.map((mut) => mut.id);
        return {
          transactionId: res.transactionId,
          results,
          [key]: ids
        };
      }));
    }
    __name(_dataRequest, "_dataRequest");
    function _create(client, httpRequest, doc, op) {
      let options = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {};
      const mutation = {
        [op]: doc
      };
      const opts = Object.assign({
        returnFirst: true,
        returnDocuments: true
      }, options);
      return _dataRequest(client, httpRequest, "mutate", {
        mutations: [mutation]
      }, opts);
    }
    __name(_create, "_create");
    function _requestObservable(client, httpRequest, options) {
      var _a7;
      const uri = options.url || options.uri;
      const config2 = client.config();
      const canUseCdn = typeof options.canUseCdn === "undefined" ? ["GET", "HEAD"].indexOf(options.method || "GET") >= 0 && uri.indexOf("/data/") === 0 : options.canUseCdn;
      let useCdn = config2.useCdn && canUseCdn;
      const tag = options.tag && config2.requestTagPrefix ? [config2.requestTagPrefix, options.tag].join(".") : options.tag || config2.requestTagPrefix;
      if (tag && options.tag !== null) {
        options.query = __spreadValues({
          tag: requestTag(tag)
        }, options.query);
      }
      if (["GET", "HEAD", "POST"].indexOf(options.method || "GET") >= 0 && uri.indexOf("/data/query/") === 0) {
        const resultSourceMap = (_a7 = options.resultSourceMap) != null ? _a7 : config2.resultSourceMap;
        if (resultSourceMap !== void 0 && resultSourceMap !== false) {
          options.query = __spreadValues({
            resultSourceMap
          }, options.query);
        }
        const perspective = options.perspective || config2.perspective;
        if (typeof perspective === "string" && perspective !== "raw") {
          validateApiPerspective(perspective);
          options.query = __spreadValues({
            perspective
          }, options.query);
          if (perspective === "previewDrafts" && useCdn) {
            useCdn = false;
            printCdnPreviewDraftsWarning();
          }
        }
      }
      const reqOptions = requestOptions(config2, Object.assign({}, options, {
        url: _getUrl(client, uri, useCdn)
      }));
      const request = new rxjs.Observable((subscriber) => httpRequest(reqOptions, config2.requester).subscribe(subscriber));
      return options.signal ? request.pipe(_withAbortSignal(options.signal)) : request;
    }
    __name(_requestObservable, "_requestObservable");
    function _request(client, httpRequest, options) {
      const observable = _requestObservable(client, httpRequest, options).pipe(operators.filter((event) => event.type === "response"), operators.map((event) => event.body));
      return observable;
    }
    __name(_request, "_request");
    function _getDataUrl(client, operation, path) {
      const config2 = client.config();
      const catalog = hasDataset(config2);
      const baseUri = "/".concat(operation, "/").concat(catalog);
      const uri = path ? "".concat(baseUri, "/").concat(path) : baseUri;
      return "/data".concat(uri).replace(/\/($|\?)/, "$1");
    }
    __name(_getDataUrl, "_getDataUrl");
    function _getUrl(client, uri) {
      let canUseCdn = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
      const {
        url,
        cdnUrl
      } = client.config();
      const base = canUseCdn ? cdnUrl : url;
      return "".concat(base, "/").concat(uri.replace(/^\//, ""));
    }
    __name(_getUrl, "_getUrl");
    function _withAbortSignal(signal) {
      return (input) => {
        return new rxjs.Observable((observer) => {
          const abort = /* @__PURE__ */ __name(() => observer.error(_createAbortError(signal)), "abort");
          if (signal && signal.aborted) {
            abort();
            return;
          }
          const subscription = input.subscribe(observer);
          signal.addEventListener("abort", abort);
          return () => {
            signal.removeEventListener("abort", abort);
            subscription.unsubscribe();
          };
        });
      };
    }
    __name(_withAbortSignal, "_withAbortSignal");
    var isDomExceptionSupported = Boolean(globalThis.DOMException);
    function _createAbortError(signal) {
      var _a7, _b;
      if (isDomExceptionSupported) {
        return new DOMException((_a7 = signal == null ? void 0 : signal.reason) != null ? _a7 : "The operation was aborted.", "AbortError");
      }
      const error = new Error((_b = signal == null ? void 0 : signal.reason) != null ? _b : "The operation was aborted.");
      error.name = "AbortError";
      return error;
    }
    __name(_createAbortError, "_createAbortError");
    var __accessCheck$4 = /* @__PURE__ */ __name((obj, member, msg) => {
      if (!member.has(obj))
        throw TypeError("Cannot " + msg);
    }, "__accessCheck$4");
    var __privateGet$4 = /* @__PURE__ */ __name((obj, member, getter) => {
      __accessCheck$4(obj, member, "read from private field");
      return getter ? getter.call(obj) : member.get(obj);
    }, "__privateGet$4");
    var __privateAdd$4 = /* @__PURE__ */ __name((obj, member, value) => {
      if (member.has(obj))
        throw TypeError("Cannot add the same private member more than once");
      member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
    }, "__privateAdd$4");
    var __privateSet$4 = /* @__PURE__ */ __name((obj, member, value, setter) => {
      __accessCheck$4(obj, member, "write to private field");
      setter ? setter.call(obj, value) : member.set(obj, value);
      return value;
    }, "__privateSet$4");
    var _client$3;
    var _httpRequest$4;
    var _client2$3;
    var _httpRequest2$4;
    var _ObservableAssetsClient = class _ObservableAssetsClient {
      constructor(client, httpRequest) {
        __privateAdd$4(this, _client$3, void 0);
        __privateAdd$4(this, _httpRequest$4, void 0);
        __privateSet$4(this, _client$3, client);
        __privateSet$4(this, _httpRequest$4, httpRequest);
      }
      upload(assetType, body, options) {
        return _upload(__privateGet$4(this, _client$3), __privateGet$4(this, _httpRequest$4), assetType, body, options);
      }
    };
    __name(_ObservableAssetsClient, "ObservableAssetsClient");
    var ObservableAssetsClient = _ObservableAssetsClient;
    _client$3 = /* @__PURE__ */ new WeakMap();
    _httpRequest$4 = /* @__PURE__ */ new WeakMap();
    var _AssetsClient = class _AssetsClient {
      constructor(client, httpRequest) {
        __privateAdd$4(this, _client2$3, void 0);
        __privateAdd$4(this, _httpRequest2$4, void 0);
        __privateSet$4(this, _client2$3, client);
        __privateSet$4(this, _httpRequest2$4, httpRequest);
      }
      upload(assetType, body, options) {
        const observable = _upload(__privateGet$4(this, _client2$3), __privateGet$4(this, _httpRequest2$4), assetType, body, options);
        return rxjs.lastValueFrom(observable.pipe(operators.filter((event) => event.type === "response"), operators.map((event) => event.body.document)));
      }
    };
    __name(_AssetsClient, "AssetsClient");
    var AssetsClient = _AssetsClient;
    _client2$3 = /* @__PURE__ */ new WeakMap();
    _httpRequest2$4 = /* @__PURE__ */ new WeakMap();
    function _upload(client, httpRequest, assetType, body) {
      let opts = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {};
      validateAssetType(assetType);
      let meta = opts.extract || void 0;
      if (meta && !meta.length) {
        meta = ["none"];
      }
      const dataset2 = hasDataset(client.config());
      const assetEndpoint = assetType === "image" ? "images" : "files";
      const options = optionsFromFile(opts, body);
      const {
        tag,
        label,
        title,
        description,
        creditLine,
        filename,
        source
      } = options;
      const query = {
        label,
        title,
        description,
        filename,
        meta,
        creditLine
      };
      if (source) {
        query.sourceId = source.id;
        query.sourceName = source.name;
        query.sourceUrl = source.url;
      }
      return _requestObservable(client, httpRequest, {
        tag,
        method: "POST",
        timeout: options.timeout || 0,
        uri: "/assets/".concat(assetEndpoint, "/").concat(dataset2),
        headers: options.contentType ? {
          "Content-Type": options.contentType
        } : {},
        query,
        body
      });
    }
    __name(_upload, "_upload");
    function optionsFromFile(opts, file) {
      if (typeof File === "undefined" || !(file instanceof File)) {
        return opts;
      }
      return Object.assign({
        filename: opts.preserveFilename === false ? void 0 : file.name,
        contentType: file.type
      }, opts);
    }
    __name(optionsFromFile, "optionsFromFile");
    var defaults = /* @__PURE__ */ __name((obj, defaults2) => Object.keys(defaults2).concat(Object.keys(obj)).reduce((target, prop) => {
      target[prop] = typeof obj[prop] === "undefined" ? defaults2[prop] : obj[prop];
      return target;
    }, {}), "defaults");
    var pick = /* @__PURE__ */ __name((obj, props) => props.reduce((selection, prop) => {
      if (typeof obj[prop] === "undefined") {
        return selection;
      }
      selection[prop] = obj[prop];
      return selection;
    }, {}), "pick");
    var MAX_URL_LENGTH = 16e3 - 1200;
    var possibleOptions = ["includePreviousRevision", "includeResult", "visibility", "effectFormat", "tag"];
    var defaultOptions = {
      includeResult: true
    };
    function _listen(query, params) {
      let opts = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      const {
        url,
        token,
        withCredentials,
        requestTagPrefix
      } = this.config();
      const tag = opts.tag && requestTagPrefix ? [requestTagPrefix, opts.tag].join(".") : opts.tag;
      const options = __spreadProps(__spreadValues({}, defaults(opts, defaultOptions)), {
        tag
      });
      const listenOpts = pick(options, possibleOptions);
      const qs = encodeQueryString({
        query,
        params,
        options: __spreadValues({
          tag
        }, listenOpts)
      });
      const uri = "".concat(url).concat(_getDataUrl(this, "listen", qs));
      if (uri.length > MAX_URL_LENGTH) {
        return new rxjs.Observable((observer) => observer.error(new Error("Query too large for listener")));
      }
      const listenFor = options.events ? options.events : ["mutation"];
      const shouldEmitReconnect = listenFor.indexOf("reconnect") !== -1;
      const esOptions = {};
      if (token || withCredentials) {
        esOptions.withCredentials = true;
      }
      if (token) {
        esOptions.headers = {
          Authorization: "Bearer ".concat(token)
        };
      }
      return new rxjs.Observable((observer) => {
        let es;
        getEventSource().then((eventSource) => {
          es = eventSource;
        }).catch((reason) => {
          observer.error(reason);
          stop();
        });
        let reconnectTimer;
        let stopped = false;
        function onError() {
          if (stopped) {
            return;
          }
          emitReconnect();
          if (stopped) {
            return;
          }
          if (es.readyState === es.CLOSED) {
            unsubscribe();
            clearTimeout(reconnectTimer);
            reconnectTimer = setTimeout(open, 100);
          }
        }
        __name(onError, "onError");
        function onChannelError(err) {
          observer.error(cooerceError(err));
        }
        __name(onChannelError, "onChannelError");
        function onMessage(evt) {
          const event = parseEvent(evt);
          return event instanceof Error ? observer.error(event) : observer.next(event);
        }
        __name(onMessage, "onMessage");
        function onDisconnect() {
          stopped = true;
          unsubscribe();
          observer.complete();
        }
        __name(onDisconnect, "onDisconnect");
        function unsubscribe() {
          if (!es)
            return;
          es.removeEventListener("error", onError);
          es.removeEventListener("channelError", onChannelError);
          es.removeEventListener("disconnect", onDisconnect);
          listenFor.forEach((type) => es.removeEventListener(type, onMessage));
          es.close();
        }
        __name(unsubscribe, "unsubscribe");
        function emitReconnect() {
          if (shouldEmitReconnect) {
            observer.next({
              type: "reconnect"
            });
          }
        }
        __name(emitReconnect, "emitReconnect");
        function getEventSource() {
          return __async(this, null, function* () {
            const {
              default: EventSource
            } = yield Promise.resolve().then(() => __toESM(require_node3()));
            const evs = new EventSource(uri, esOptions);
            evs.addEventListener("error", onError);
            evs.addEventListener("channelError", onChannelError);
            evs.addEventListener("disconnect", onDisconnect);
            listenFor.forEach((type) => evs.addEventListener(type, onMessage));
            return evs;
          });
        }
        __name(getEventSource, "getEventSource");
        function open() {
          getEventSource().then((eventSource) => {
            es = eventSource;
          }).catch((reason) => {
            observer.error(reason);
            stop();
          });
        }
        __name(open, "open");
        function stop() {
          stopped = true;
          unsubscribe();
        }
        __name(stop, "stop");
        return stop;
      });
    }
    __name(_listen, "_listen");
    function parseEvent(event) {
      try {
        const data = event.data && JSON.parse(event.data) || {};
        return Object.assign({
          type: event.type
        }, data);
      } catch (err) {
        return err;
      }
    }
    __name(parseEvent, "parseEvent");
    function cooerceError(err) {
      if (err instanceof Error) {
        return err;
      }
      const evt = parseEvent(err);
      return evt instanceof Error ? evt : new Error(extractErrorMessage(evt));
    }
    __name(cooerceError, "cooerceError");
    function extractErrorMessage(err) {
      if (!err.error) {
        return err.message || "Unknown listener error";
      }
      if (err.error.description) {
        return err.error.description;
      }
      return typeof err.error === "string" ? err.error : JSON.stringify(err.error, null, 2);
    }
    __name(extractErrorMessage, "extractErrorMessage");
    var __accessCheck$3 = /* @__PURE__ */ __name((obj, member, msg) => {
      if (!member.has(obj))
        throw TypeError("Cannot " + msg);
    }, "__accessCheck$3");
    var __privateGet$3 = /* @__PURE__ */ __name((obj, member, getter) => {
      __accessCheck$3(obj, member, "read from private field");
      return getter ? getter.call(obj) : member.get(obj);
    }, "__privateGet$3");
    var __privateAdd$3 = /* @__PURE__ */ __name((obj, member, value) => {
      if (member.has(obj))
        throw TypeError("Cannot add the same private member more than once");
      member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
    }, "__privateAdd$3");
    var __privateSet$3 = /* @__PURE__ */ __name((obj, member, value, setter) => {
      __accessCheck$3(obj, member, "write to private field");
      setter ? setter.call(obj, value) : member.set(obj, value);
      return value;
    }, "__privateSet$3");
    var _client$2;
    var _httpRequest$3;
    var _client2$2;
    var _httpRequest2$3;
    var _ObservableDatasetsClient = class _ObservableDatasetsClient {
      constructor(client, httpRequest) {
        __privateAdd$3(this, _client$2, void 0);
        __privateAdd$3(this, _httpRequest$3, void 0);
        __privateSet$3(this, _client$2, client);
        __privateSet$3(this, _httpRequest$3, httpRequest);
      }
      /**
       * Create a new dataset with the given name
       *
       * @param name - Name of the dataset to create
       * @param options - Options for the dataset
       */
      create(name2, options) {
        return _modify(__privateGet$3(this, _client$2), __privateGet$3(this, _httpRequest$3), "PUT", name2, options);
      }
      /**
       * Edit a dataset with the given name
       *
       * @param name - Name of the dataset to edit
       * @param options - New options for the dataset
       */
      edit(name2, options) {
        return _modify(__privateGet$3(this, _client$2), __privateGet$3(this, _httpRequest$3), "PATCH", name2, options);
      }
      /**
       * Delete a dataset with the given name
       *
       * @param name - Name of the dataset to delete
       */
      delete(name2) {
        return _modify(__privateGet$3(this, _client$2), __privateGet$3(this, _httpRequest$3), "DELETE", name2);
      }
      /**
       * Fetch a list of datasets for the configured project
       */
      list() {
        return _request(__privateGet$3(this, _client$2), __privateGet$3(this, _httpRequest$3), {
          uri: "/datasets",
          tag: null
        });
      }
    };
    __name(_ObservableDatasetsClient, "ObservableDatasetsClient");
    var ObservableDatasetsClient = _ObservableDatasetsClient;
    _client$2 = /* @__PURE__ */ new WeakMap();
    _httpRequest$3 = /* @__PURE__ */ new WeakMap();
    var _DatasetsClient = class _DatasetsClient {
      constructor(client, httpRequest) {
        __privateAdd$3(this, _client2$2, void 0);
        __privateAdd$3(this, _httpRequest2$3, void 0);
        __privateSet$3(this, _client2$2, client);
        __privateSet$3(this, _httpRequest2$3, httpRequest);
      }
      /**
       * Create a new dataset with the given name
       *
       * @param name - Name of the dataset to create
       * @param options - Options for the dataset
       */
      create(name2, options) {
        return rxjs.lastValueFrom(_modify(__privateGet$3(this, _client2$2), __privateGet$3(this, _httpRequest2$3), "PUT", name2, options));
      }
      /**
       * Edit a dataset with the given name
       *
       * @param name - Name of the dataset to edit
       * @param options - New options for the dataset
       */
      edit(name2, options) {
        return rxjs.lastValueFrom(_modify(__privateGet$3(this, _client2$2), __privateGet$3(this, _httpRequest2$3), "PATCH", name2, options));
      }
      /**
       * Delete a dataset with the given name
       *
       * @param name - Name of the dataset to delete
       */
      delete(name2) {
        return rxjs.lastValueFrom(_modify(__privateGet$3(this, _client2$2), __privateGet$3(this, _httpRequest2$3), "DELETE", name2));
      }
      /**
       * Fetch a list of datasets for the configured project
       */
      list() {
        return rxjs.lastValueFrom(_request(__privateGet$3(this, _client2$2), __privateGet$3(this, _httpRequest2$3), {
          uri: "/datasets",
          tag: null
        }));
      }
    };
    __name(_DatasetsClient, "DatasetsClient");
    var DatasetsClient = _DatasetsClient;
    _client2$2 = /* @__PURE__ */ new WeakMap();
    _httpRequest2$3 = /* @__PURE__ */ new WeakMap();
    function _modify(client, httpRequest, method, name2, options) {
      dataset(name2);
      return _request(client, httpRequest, {
        method,
        uri: "/datasets/".concat(name2),
        body: options,
        tag: null
      });
    }
    __name(_modify, "_modify");
    var __accessCheck$2 = /* @__PURE__ */ __name((obj, member, msg) => {
      if (!member.has(obj))
        throw TypeError("Cannot " + msg);
    }, "__accessCheck$2");
    var __privateGet$2 = /* @__PURE__ */ __name((obj, member, getter) => {
      __accessCheck$2(obj, member, "read from private field");
      return getter ? getter.call(obj) : member.get(obj);
    }, "__privateGet$2");
    var __privateAdd$2 = /* @__PURE__ */ __name((obj, member, value) => {
      if (member.has(obj))
        throw TypeError("Cannot add the same private member more than once");
      member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
    }, "__privateAdd$2");
    var __privateSet$2 = /* @__PURE__ */ __name((obj, member, value, setter) => {
      __accessCheck$2(obj, member, "write to private field");
      setter ? setter.call(obj, value) : member.set(obj, value);
      return value;
    }, "__privateSet$2");
    var _client$1;
    var _httpRequest$2;
    var _client2$1;
    var _httpRequest2$2;
    var _ObservableProjectsClient = class _ObservableProjectsClient {
      constructor(client, httpRequest) {
        __privateAdd$2(this, _client$1, void 0);
        __privateAdd$2(this, _httpRequest$2, void 0);
        __privateSet$2(this, _client$1, client);
        __privateSet$2(this, _httpRequest$2, httpRequest);
      }
      list(options) {
        const uri = (options == null ? void 0 : options.includeMembers) === false ? "/projects?includeMembers=false" : "/projects";
        return _request(__privateGet$2(this, _client$1), __privateGet$2(this, _httpRequest$2), {
          uri
        });
      }
      /**
       * Fetch a project by project ID
       *
       * @param projectId - ID of the project to fetch
       */
      getById(projectId2) {
        return _request(__privateGet$2(this, _client$1), __privateGet$2(this, _httpRequest$2), {
          uri: "/projects/".concat(projectId2)
        });
      }
    };
    __name(_ObservableProjectsClient, "ObservableProjectsClient");
    var ObservableProjectsClient = _ObservableProjectsClient;
    _client$1 = /* @__PURE__ */ new WeakMap();
    _httpRequest$2 = /* @__PURE__ */ new WeakMap();
    var _ProjectsClient = class _ProjectsClient {
      constructor(client, httpRequest) {
        __privateAdd$2(this, _client2$1, void 0);
        __privateAdd$2(this, _httpRequest2$2, void 0);
        __privateSet$2(this, _client2$1, client);
        __privateSet$2(this, _httpRequest2$2, httpRequest);
      }
      list(options) {
        const uri = (options == null ? void 0 : options.includeMembers) === false ? "/projects?includeMembers=false" : "/projects";
        return rxjs.lastValueFrom(_request(__privateGet$2(this, _client2$1), __privateGet$2(this, _httpRequest2$2), {
          uri
        }));
      }
      /**
       * Fetch a project by project ID
       *
       * @param projectId - ID of the project to fetch
       */
      getById(projectId2) {
        return rxjs.lastValueFrom(_request(__privateGet$2(this, _client2$1), __privateGet$2(this, _httpRequest2$2), {
          uri: "/projects/".concat(projectId2)
        }));
      }
    };
    __name(_ProjectsClient, "ProjectsClient");
    var ProjectsClient = _ProjectsClient;
    _client2$1 = /* @__PURE__ */ new WeakMap();
    _httpRequest2$2 = /* @__PURE__ */ new WeakMap();
    var __accessCheck$1 = /* @__PURE__ */ __name((obj, member, msg) => {
      if (!member.has(obj))
        throw TypeError("Cannot " + msg);
    }, "__accessCheck$1");
    var __privateGet$1 = /* @__PURE__ */ __name((obj, member, getter) => {
      __accessCheck$1(obj, member, "read from private field");
      return getter ? getter.call(obj) : member.get(obj);
    }, "__privateGet$1");
    var __privateAdd$1 = /* @__PURE__ */ __name((obj, member, value) => {
      if (member.has(obj))
        throw TypeError("Cannot add the same private member more than once");
      member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
    }, "__privateAdd$1");
    var __privateSet$1 = /* @__PURE__ */ __name((obj, member, value, setter) => {
      __accessCheck$1(obj, member, "write to private field");
      setter ? setter.call(obj, value) : member.set(obj, value);
      return value;
    }, "__privateSet$1");
    var _client;
    var _httpRequest$1;
    var _client2;
    var _httpRequest2$1;
    var _ObservableUsersClient = class _ObservableUsersClient {
      constructor(client, httpRequest) {
        __privateAdd$1(this, _client, void 0);
        __privateAdd$1(this, _httpRequest$1, void 0);
        __privateSet$1(this, _client, client);
        __privateSet$1(this, _httpRequest$1, httpRequest);
      }
      /**
       * Fetch a user by user ID
       *
       * @param id - User ID of the user to fetch. If `me` is provided, a minimal response including the users role is returned.
       */
      getById(id) {
        return _request(__privateGet$1(this, _client), __privateGet$1(this, _httpRequest$1), {
          uri: "/users/".concat(id)
        });
      }
    };
    __name(_ObservableUsersClient, "ObservableUsersClient");
    var ObservableUsersClient = _ObservableUsersClient;
    _client = /* @__PURE__ */ new WeakMap();
    _httpRequest$1 = /* @__PURE__ */ new WeakMap();
    var _UsersClient = class _UsersClient {
      constructor(client, httpRequest) {
        __privateAdd$1(this, _client2, void 0);
        __privateAdd$1(this, _httpRequest2$1, void 0);
        __privateSet$1(this, _client2, client);
        __privateSet$1(this, _httpRequest2$1, httpRequest);
      }
      /**
       * Fetch a user by user ID
       *
       * @param id - User ID of the user to fetch. If `me` is provided, a minimal response including the users role is returned.
       */
      getById(id) {
        return rxjs.lastValueFrom(_request(__privateGet$1(this, _client2), __privateGet$1(this, _httpRequest2$1), {
          uri: "/users/".concat(id)
        }));
      }
    };
    __name(_UsersClient, "UsersClient");
    var UsersClient = _UsersClient;
    _client2 = /* @__PURE__ */ new WeakMap();
    _httpRequest2$1 = /* @__PURE__ */ new WeakMap();
    var __accessCheck = /* @__PURE__ */ __name((obj, member, msg) => {
      if (!member.has(obj))
        throw TypeError("Cannot " + msg);
    }, "__accessCheck");
    var __privateGet = /* @__PURE__ */ __name((obj, member, getter) => {
      __accessCheck(obj, member, "read from private field");
      return getter ? getter.call(obj) : member.get(obj);
    }, "__privateGet");
    var __privateAdd = /* @__PURE__ */ __name((obj, member, value) => {
      if (member.has(obj))
        throw TypeError("Cannot add the same private member more than once");
      member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
    }, "__privateAdd");
    var __privateSet = /* @__PURE__ */ __name((obj, member, value, setter) => {
      __accessCheck(obj, member, "write to private field");
      setter ? setter.call(obj, value) : member.set(obj, value);
      return value;
    }, "__privateSet");
    var _clientConfig;
    var _httpRequest;
    var _clientConfig2;
    var _httpRequest2;
    var _a5;
    var _ObservableSanityClient = (_a5 = class {
      constructor(httpRequest) {
        let config2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : defaultConfig;
        __privateAdd(this, _clientConfig, void 0);
        __privateAdd(this, _httpRequest, void 0);
        this.listen = _listen;
        this.config(config2);
        __privateSet(this, _httpRequest, httpRequest);
        this.assets = new ObservableAssetsClient(this, __privateGet(this, _httpRequest));
        this.datasets = new ObservableDatasetsClient(this, __privateGet(this, _httpRequest));
        this.projects = new ObservableProjectsClient(this, __privateGet(this, _httpRequest));
        this.users = new ObservableUsersClient(this, __privateGet(this, _httpRequest));
      }
      /**
       * Clone the client - returns a new instance
       */
      clone() {
        return new _a5(__privateGet(this, _httpRequest), this.config());
      }
      config(newConfig) {
        if (newConfig === void 0) {
          return __spreadValues({}, __privateGet(this, _clientConfig));
        }
        if (__privateGet(this, _clientConfig) && __privateGet(this, _clientConfig).allowReconfigure === false) {
          throw new Error("Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client");
        }
        __privateSet(this, _clientConfig, initConfig(newConfig, __privateGet(this, _clientConfig) || {}));
        return this;
      }
      /**
       * Clone the client with a new (partial) configuration.
       *
       * @param newConfig - New client configuration properties, shallowly merged with existing configuration
       */
      withConfig(newConfig) {
        return new _a5(__privateGet(this, _httpRequest), __spreadValues(__spreadValues({}, this.config()), newConfig));
      }
      fetch(query, params) {
        let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        return _fetch(this, __privateGet(this, _httpRequest), query, params, options);
      }
      /**
       * Fetch a single document with the given ID.
       *
       * @param id - Document ID to fetch
       * @param options - Request options
       */
      getDocument(id, options) {
        return _getDocument(this, __privateGet(this, _httpRequest), id, options);
      }
      /**
       * Fetch multiple documents in one request.
       * Should be used sparingly - performing a query is usually a better option.
       * The order/position of documents is preserved based on the original array of IDs.
       * If any of the documents are missing, they will be replaced by a `null` entry in the returned array
       *
       * @param ids - Document IDs to fetch
       * @param options - Request options
       */
      getDocuments(ids, options) {
        return _getDocuments(this, __privateGet(this, _httpRequest), ids, options);
      }
      create(document2, options) {
        return _create(this, __privateGet(this, _httpRequest), document2, "create", options);
      }
      createIfNotExists(document2, options) {
        return _createIfNotExists(this, __privateGet(this, _httpRequest), document2, options);
      }
      createOrReplace(document2, options) {
        return _createOrReplace(this, __privateGet(this, _httpRequest), document2, options);
      }
      delete(selection, options) {
        return _delete(this, __privateGet(this, _httpRequest), selection, options);
      }
      mutate(operations, options) {
        return _mutate(this, __privateGet(this, _httpRequest), operations, options);
      }
      /**
       * Create a new buildable patch of operations to perform
       *
       * @param selection - Document ID, an array of document IDs, or an object with `query` and optional `params`, defining which document(s) to patch
       * @param operations - Optional object of patch operations to initialize the patch instance with
       * @returns Patch instance - call `.commit()` to perform the operations defined
       */
      patch(selection, operations) {
        return new ObservablePatch2(selection, operations, this);
      }
      /**
       * Create a new transaction of mutations
       *
       * @param operations - Optional array of mutation operations to initialize the transaction instance with
       */
      transaction(operations) {
        return new ObservableTransaction2(operations, this);
      }
      /**
       * Perform an HTTP request against the Sanity API
       *
       * @param options - Request options
       */
      request(options) {
        return _request(this, __privateGet(this, _httpRequest), options);
      }
      /**
       * Get a Sanity API URL for the URI provided
       *
       * @param uri - URI/path to build URL for
       * @param canUseCdn - Whether or not to allow using the API CDN for this route
       */
      getUrl(uri, canUseCdn) {
        return _getUrl(this, uri, canUseCdn);
      }
      /**
       * Get a Sanity API URL for the data operation and path provided
       *
       * @param operation - Data operation (eg `query`, `mutate`, `listen` or similar)
       * @param path - Path to append after the operation
       */
      getDataUrl(operation, path) {
        return _getDataUrl(this, operation, path);
      }
    }, __name(_a5, "_ObservableSanityClient"), _a5);
    _clientConfig = /* @__PURE__ */ new WeakMap();
    _httpRequest = /* @__PURE__ */ new WeakMap();
    var ObservableSanityClient2 = _ObservableSanityClient;
    var _a6;
    var _SanityClient = (_a6 = class {
      constructor(httpRequest) {
        let config2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : defaultConfig;
        __privateAdd(this, _clientConfig2, void 0);
        __privateAdd(this, _httpRequest2, void 0);
        this.listen = _listen;
        this.config(config2);
        __privateSet(this, _httpRequest2, httpRequest);
        this.assets = new AssetsClient(this, __privateGet(this, _httpRequest2));
        this.datasets = new DatasetsClient(this, __privateGet(this, _httpRequest2));
        this.projects = new ProjectsClient(this, __privateGet(this, _httpRequest2));
        this.users = new UsersClient(this, __privateGet(this, _httpRequest2));
        this.observable = new ObservableSanityClient2(httpRequest, config2);
      }
      /**
       * Clone the client - returns a new instance
       */
      clone() {
        return new _a6(__privateGet(this, _httpRequest2), this.config());
      }
      config(newConfig) {
        if (newConfig === void 0) {
          return __spreadValues({}, __privateGet(this, _clientConfig2));
        }
        if (__privateGet(this, _clientConfig2) && __privateGet(this, _clientConfig2).allowReconfigure === false) {
          throw new Error("Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client");
        }
        if (this.observable) {
          this.observable.config(newConfig);
        }
        __privateSet(this, _clientConfig2, initConfig(newConfig, __privateGet(this, _clientConfig2) || {}));
        return this;
      }
      /**
       * Clone the client with a new (partial) configuration.
       *
       * @param newConfig - New client configuration properties, shallowly merged with existing configuration
       */
      withConfig(newConfig) {
        return new _a6(__privateGet(this, _httpRequest2), __spreadValues(__spreadValues({}, this.config()), newConfig));
      }
      fetch(query, params) {
        let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        return rxjs.lastValueFrom(_fetch(this, __privateGet(this, _httpRequest2), query, params, options));
      }
      /**
       * Fetch a single document with the given ID.
       *
       * @param id - Document ID to fetch
       * @param options - Request options
       */
      getDocument(id, options) {
        return rxjs.lastValueFrom(_getDocument(this, __privateGet(this, _httpRequest2), id, options));
      }
      /**
       * Fetch multiple documents in one request.
       * Should be used sparingly - performing a query is usually a better option.
       * The order/position of documents is preserved based on the original array of IDs.
       * If any of the documents are missing, they will be replaced by a `null` entry in the returned array
       *
       * @param ids - Document IDs to fetch
       * @param options - Request options
       */
      getDocuments(ids, options) {
        return rxjs.lastValueFrom(_getDocuments(this, __privateGet(this, _httpRequest2), ids, options));
      }
      create(document2, options) {
        return rxjs.lastValueFrom(_create(this, __privateGet(this, _httpRequest2), document2, "create", options));
      }
      createIfNotExists(document2, options) {
        return rxjs.lastValueFrom(_createIfNotExists(this, __privateGet(this, _httpRequest2), document2, options));
      }
      createOrReplace(document2, options) {
        return rxjs.lastValueFrom(_createOrReplace(this, __privateGet(this, _httpRequest2), document2, options));
      }
      delete(selection, options) {
        return rxjs.lastValueFrom(_delete(this, __privateGet(this, _httpRequest2), selection, options));
      }
      mutate(operations, options) {
        return rxjs.lastValueFrom(_mutate(this, __privateGet(this, _httpRequest2), operations, options));
      }
      /**
       * Create a new buildable patch of operations to perform
       *
       * @param selection - Document ID, an array of document IDs, or an object with `query` and optional `params`, defining which document(s) to patch
       * @param operations - Optional object of patch operations to initialize the patch instance with
       * @returns Patch instance - call `.commit()` to perform the operations defined
       */
      patch(documentId, operations) {
        return new Patch2(documentId, operations, this);
      }
      /**
       * Create a new transaction of mutations
       *
       * @param operations - Optional array of mutation operations to initialize the transaction instance with
       */
      transaction(operations) {
        return new Transaction2(operations, this);
      }
      /**
       * Perform a request against the Sanity API
       * NOTE: Only use this for Sanity API endpoints, not for your own APIs!
       *
       * @param options - Request options
       * @returns Promise resolving to the response body
       */
      request(options) {
        return rxjs.lastValueFrom(_request(this, __privateGet(this, _httpRequest2), options));
      }
      /**
       * Perform an HTTP request a `/data` sub-endpoint
       * NOTE: Considered internal, thus marked as deprecated. Use `request` instead.
       *
       * @deprecated - Use `request()` or your own HTTP library instead
       * @param endpoint - Endpoint to hit (mutate, query etc)
       * @param body - Request body
       * @param options - Request options
       * @internal
       */
      dataRequest(endpoint, body, options) {
        return rxjs.lastValueFrom(_dataRequest(this, __privateGet(this, _httpRequest2), endpoint, body, options));
      }
      /**
       * Get a Sanity API URL for the URI provided
       *
       * @param uri - URI/path to build URL for
       * @param canUseCdn - Whether or not to allow using the API CDN for this route
       */
      getUrl(uri, canUseCdn) {
        return _getUrl(this, uri, canUseCdn);
      }
      /**
       * Get a Sanity API URL for the data operation and path provided
       *
       * @param operation - Data operation (eg `query`, `mutate`, `listen` or similar)
       * @param path - Path to append after the operation
       */
      getDataUrl(operation, path) {
        return _getDataUrl(this, operation, path);
      }
    }, __name(_a6, "_SanityClient"), _a6);
    _clientConfig2 = /* @__PURE__ */ new WeakMap();
    _httpRequest2 = /* @__PURE__ */ new WeakMap();
    var SanityClient2 = _SanityClient;
    function defineCreateClientExports(envMiddleware, ClassConstructor) {
      const httpRequest = defineHttpRequest(envMiddleware, {});
      const requester2 = httpRequest.defaultRequester;
      const createClient2 = /* @__PURE__ */ __name((config2) => new ClassConstructor(defineHttpRequest(envMiddleware, {
        maxRetries: config2.maxRetries,
        retryDelay: config2.retryDelay
      }), config2), "createClient");
      return {
        requester: requester2,
        createClient: createClient2
      };
    }
    __name(defineCreateClientExports, "defineCreateClientExports");
    var name = "@sanity/client";
    var version = "6.9.3";
    var middleware = [
      middleware$1.debug({
        verbose: true,
        namespace: "sanity:client"
      }),
      middleware$1.headers({
        "User-Agent": "".concat(name, " ").concat(version)
      }),
      // Enable keep-alive, and in addition limit the number of sockets that can be opened.
      // This avoids opening too many connections to the server if someone tries to execute
      // a bunch of requests in parallel. It's recommended to have a concurrency limit
      // at a "higher limit" (i.e. you shouldn't actually execute hundreds of requests in parallel),
      // and this is mainly to minimize the impact for the network and server.
      //
      // We're currently matching the same defaults as browsers:
      // https://stackoverflow.com/questions/26003756/is-there-a-limit-practical-or-otherwise-to-the-number-of-web-sockets-a-page-op
      middleware$1.agent({
        keepAlive: true,
        maxSockets: 30,
        maxTotalSockets: 256
      })
    ];
    exports.BasePatch = BasePatch2;
    exports.BaseTransaction = BaseTransaction2;
    exports.ClientError = ClientError2;
    exports.ObservablePatch = ObservablePatch2;
    exports.ObservableSanityClient = ObservableSanityClient2;
    exports.ObservableTransaction = ObservableTransaction2;
    exports.Patch = Patch2;
    exports.SanityClient = SanityClient2;
    exports.ServerError = ServerError2;
    exports.Transaction = Transaction2;
    exports.defaultConfig = defaultConfig;
    exports.defineCreateClientExports = defineCreateClientExports;
    exports.middleware = middleware;
    exports.printNoDefaultExport = printNoDefaultExport;
  }
});

// node_modules/@sanity/client/dist/index.cjs
var require_dist2 = __commonJS({
  "node_modules/@sanity/client/dist/index.cjs"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var nodeMiddleware = require_nodeMiddleware_BRRyFv21();
    var getIt = require_dist();
    function defineDeprecatedCreateClient(createClient3) {
      return /* @__PURE__ */ __name(function deprecatedCreateClient2(config2) {
        nodeMiddleware.printNoDefaultExport();
        return createClient3(config2);
      }, "deprecatedCreateClient");
    }
    __name(defineDeprecatedCreateClient, "defineDeprecatedCreateClient");
    var exp = nodeMiddleware.defineCreateClientExports(nodeMiddleware.middleware, nodeMiddleware.SanityClient);
    var requester2 = exp.requester;
    var createClient2 = exp.createClient;
    var deprecatedCreateClient = defineDeprecatedCreateClient(createClient2);
    exports.BasePatch = nodeMiddleware.BasePatch;
    exports.BaseTransaction = nodeMiddleware.BaseTransaction;
    exports.ClientError = nodeMiddleware.ClientError;
    exports.ObservablePatch = nodeMiddleware.ObservablePatch;
    exports.ObservableSanityClient = nodeMiddleware.ObservableSanityClient;
    exports.ObservableTransaction = nodeMiddleware.ObservableTransaction;
    exports.Patch = nodeMiddleware.Patch;
    exports.SanityClient = nodeMiddleware.SanityClient;
    exports.ServerError = nodeMiddleware.ServerError;
    exports.Transaction = nodeMiddleware.Transaction;
    Object.defineProperty(exports, "unstable__adapter", {
      enumerable: true,
      get: function() {
        return getIt.adapter;
      }
    });
    Object.defineProperty(exports, "unstable__environment", {
      enumerable: true,
      get: function() {
        return getIt.environment;
      }
    });
    exports.createClient = createClient2;
    exports.default = deprecatedCreateClient;
    exports.requester = requester2;
  }
});

// app/src/controllers/files.ts
var files_exports = {};
__export(files_exports, {
  PostFiles: () => PostFiles
});
module.exports = __toCommonJS(files_exports);

// node_modules/@sanity/client/dist/index.cjs.js
var import_index = __toESM(require_dist2(), 1);
var BasePatch = import_index.default.BasePatch;
var BaseTransaction = import_index.default.BaseTransaction;
var ClientError = import_index.default.ClientError;
var ObservablePatch = import_index.default.ObservablePatch;
var ObservableSanityClient = import_index.default.ObservableSanityClient;
var ObservableTransaction = import_index.default.ObservableTransaction;
var Patch = import_index.default.Patch;
var SanityClient = import_index.default.SanityClient;
var ServerError = import_index.default.ServerError;
var Transaction = import_index.default.Transaction;
var unstable__adapter = import_index.default.unstable__adapter;
var unstable__environment = import_index.default.unstable__environment;
var createClient = import_index.default.createClient;
var requester = import_index.default.requester;
var index_cjs_default = import_index.default.default;

// app/src/lib/config/env.ts
var import_dotenv = __toESM(require("dotenv"));
import_dotenv.default.config({
  path: ".env"
});
var AWS_ACCESS_KEY_ID = String(process.env.AWS_ACCESS_KEY_ID);
if (!AWS_ACCESS_KEY_ID) {
  throw new Error("AWS_ACCESS_KEY_ID is required in the environment variables.");
}
var AWS_SECRET_ACCESS_KEY = String(process.env.AWS_SECRET_ACCESS_KEY);
if (!AWS_SECRET_ACCESS_KEY) {
  throw new Error("AWS_SECRET_ACCESS_KEY is required in the environment variables.");
}
var AWS_REGION = String(process.env.AWS_REGION);
if (!AWS_REGION) {
  throw new Error("AWS_REGION is required in the environment variables.");
}
var SANITY_SECRET_TOKEN = String(process.env.SANITY_SECRET_TOKEN);
if (!SANITY_SECRET_TOKEN) {
  throw new Error("SANITY_SECRET_TOKEN is required in the environment variables.");
}
var SANITY_API_VERSION = String(process.env.SANITY_API_VERSION);
if (!SANITY_API_VERSION) {
  throw new Error("SANITY_API_VERSION is required in the environment variables.");
}
var SANITY_PROJECT_ID = String(process.env.SANITY_PROJECT_ID);
if (!SANITY_PROJECT_ID) {
  throw new Error("SANITY_PROJECT_ID is required in the environment variables.");
}
var SANITY_DATASET = String(process.env.SANITY_DATASET);
if (!SANITY_DATASET) {
  throw new Error("SANITY_DATASET is required in the environment variables.");
}

// app/src/lib/config/sanity.ts
var config = {
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  useCdn: true,
  apiVersion: SANITY_API_VERSION,
  token: SANITY_SECRET_TOKEN
};
var Client = createClient(config);

// app/src/controllers/files.ts
var PostFiles = /* @__PURE__ */ __name((request, response) => __async(void 0, null, function* () {
  try {
    const files = request == null ? void 0 : request.files;
    if (Array.isArray(files)) {
      const createFiles = files.map((file) => __async(void 0, null, function* () {
        try {
          console.log("file: ", file);
          const postToSanity = yield Client.assets.upload("file", file.buffer, {
            filename: file.originalname
          });
          return postToSanity.url;
        } catch (error) {
          console.error("Error uploading file:", error);
          response.status(400).json({
            error: "Error uploading file.",
            success: false
          });
          throw error;
        }
      }));
      const url = yield Promise.all(createFiles);
      response.status(201).json({
        url
      });
    }
  } catch (error) {
    const msg = "Internal server error:";
    console.error(msg, error);
    response.status(500).json({
      error: msg,
      success: false
    });
  }
}), "PostFiles");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PostFiles
});
/*! Bundled license information:

safe-buffer/index.js:
  (*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *)

get-it/dist/index.cjs:
  (*! simple-concat. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *)

is-plain-object/dist/is-plain-object.js:
  (*!
   * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
   *
   * Copyright (c) 2014-2017, Jon Schlinkert.
   * Released under the MIT License.
   *)
*/
