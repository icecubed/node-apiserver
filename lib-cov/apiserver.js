/* automatically generated by JSCoverage - do not edit */
if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
if (! _$jscoverage['apiserver.js']) {
  _$jscoverage['apiserver.js'] = [];
  _$jscoverage['apiserver.js'][1] = 0;
  _$jscoverage['apiserver.js'][11] = 0;
  _$jscoverage['apiserver.js'][12] = 0;
  _$jscoverage['apiserver.js'][13] = 0;
  _$jscoverage['apiserver.js'][15] = 0;
  _$jscoverage['apiserver.js'][16] = 0;
  _$jscoverage['apiserver.js'][17] = 0;
  _$jscoverage['apiserver.js'][23] = 0;
  _$jscoverage['apiserver.js'][24] = 0;
  _$jscoverage['apiserver.js'][25] = 0;
  _$jscoverage['apiserver.js'][27] = 0;
  _$jscoverage['apiserver.js'][28] = 0;
  _$jscoverage['apiserver.js'][29] = 0;
  _$jscoverage['apiserver.js'][33] = 0;
  _$jscoverage['apiserver.js'][34] = 0;
  _$jscoverage['apiserver.js'][35] = 0;
  _$jscoverage['apiserver.js'][36] = 0;
  _$jscoverage['apiserver.js'][39] = 0;
  _$jscoverage['apiserver.js'][41] = 0;
  _$jscoverage['apiserver.js'][43] = 0;
  _$jscoverage['apiserver.js'][44] = 0;
  _$jscoverage['apiserver.js'][45] = 0;
  _$jscoverage['apiserver.js'][47] = 0;
  _$jscoverage['apiserver.js'][48] = 0;
  _$jscoverage['apiserver.js'][49] = 0;
  _$jscoverage['apiserver.js'][52] = 0;
  _$jscoverage['apiserver.js'][53] = 0;
  _$jscoverage['apiserver.js'][57] = 0;
  _$jscoverage['apiserver.js'][58] = 0;
  _$jscoverage['apiserver.js'][61] = 0;
  _$jscoverage['apiserver.js'][62] = 0;
  _$jscoverage['apiserver.js'][63] = 0;
  _$jscoverage['apiserver.js'][64] = 0;
  _$jscoverage['apiserver.js'][65] = 0;
  _$jscoverage['apiserver.js'][66] = 0;
  _$jscoverage['apiserver.js'][67] = 0;
  _$jscoverage['apiserver.js'][69] = 0;
  _$jscoverage['apiserver.js'][70] = 0;
  _$jscoverage['apiserver.js'][71] = 0;
  _$jscoverage['apiserver.js'][73] = 0;
  _$jscoverage['apiserver.js'][74] = 0;
  _$jscoverage['apiserver.js'][75] = 0;
  _$jscoverage['apiserver.js'][78] = 0;
  _$jscoverage['apiserver.js'][81] = 0;
  _$jscoverage['apiserver.js'][82] = 0;
  _$jscoverage['apiserver.js'][83] = 0;
  _$jscoverage['apiserver.js'][87] = 0;
  _$jscoverage['apiserver.js'][88] = 0;
  _$jscoverage['apiserver.js'][92] = 0;
  _$jscoverage['apiserver.js'][93] = 0;
  _$jscoverage['apiserver.js'][94] = 0;
  _$jscoverage['apiserver.js'][95] = 0;
  _$jscoverage['apiserver.js'][96] = 0;
  _$jscoverage['apiserver.js'][97] = 0;
  _$jscoverage['apiserver.js'][98] = 0;
  _$jscoverage['apiserver.js'][99] = 0;
  _$jscoverage['apiserver.js'][101] = 0;
  _$jscoverage['apiserver.js'][102] = 0;
  _$jscoverage['apiserver.js'][104] = 0;
  _$jscoverage['apiserver.js'][105] = 0;
  _$jscoverage['apiserver.js'][106] = 0;
  _$jscoverage['apiserver.js'][107] = 0;
  _$jscoverage['apiserver.js'][110] = 0;
  _$jscoverage['apiserver.js'][112] = 0;
  _$jscoverage['apiserver.js'][114] = 0;
  _$jscoverage['apiserver.js'][115] = 0;
  _$jscoverage['apiserver.js'][121] = 0;
  _$jscoverage['apiserver.js'][122] = 0;
  _$jscoverage['apiserver.js'][123] = 0;
  _$jscoverage['apiserver.js'][130] = 0;
}
_$jscoverage['apiserver.js'][1]++;
var http = require("http"), url = require("url"), qs = require("qs"), util = require("util"), events = require("events"), bufferedRequest = require("buffered-request"), middleware = require("./middleware"), Router = require("apiserver-router"), Chain = require("fnchain");
_$jscoverage['apiserver.js'][11]++;
var ApiServer = module.exports = (function (options) {
  _$jscoverage['apiserver.js'][12]++;
  var self = this;
  _$jscoverage['apiserver.js'][13]++;
  ApiServer.super_.call(this);
  _$jscoverage['apiserver.js'][15]++;
  options = (options !== null && options !== undefined && options.constructor === Object)? options: {};
  _$jscoverage['apiserver.js'][16]++;
  options.timeout = ! options.timeout || options.timeout < 0? 15000: options.timeout;
  _$jscoverage['apiserver.js'][17]++;
  options.standardHeaders = options.standardHeaders || {"cache-control": "max-age=0, no-cache, no-store, must-revalidate", "expires": 0, "pragma": "no-cache", "x-server": "ApiServer v" + ApiServer.version + " raging on nodejs " + process.version};
  _$jscoverage['apiserver.js'][23]++;
  options.port = options.port || 8080;
  _$jscoverage['apiserver.js'][24]++;
  options.server = options.server || http.createServer();
  _$jscoverage['apiserver.js'][25]++;
  options.router = options.router || new Router();
  _$jscoverage['apiserver.js'][27]++;
  Object.keys(options).forEach((function (key) {
  _$jscoverage['apiserver.js'][28]++;
  if (! self.__proto__.hasOwnProperty(key)) {
    _$jscoverage['apiserver.js'][29]++;
    self[key] = options[key];
  }
}));
  _$jscoverage['apiserver.js'][33]++;
  this.JSONTransport = middleware.JSONTransport(this, options);
  _$jscoverage['apiserver.js'][34]++;
  this.middlewareList = [];
  _$jscoverage['apiserver.js'][35]++;
  this.activeApiModules = {};
  _$jscoverage['apiserver.js'][36]++;
  this.server.on("request", onRequest.bind(this));
});
_$jscoverage['apiserver.js'][39]++;
module.exports.version = require("../package").version;
_$jscoverage['apiserver.js'][41]++;
util.inherits(module.exports, events.EventEmitter);
_$jscoverage['apiserver.js'][43]++;
ApiServer.prototype.addModule = (function (version, moduleName, apiModule) {
  _$jscoverage['apiserver.js'][44]++;
  if (this.activeApiModules[version] === undefined) {
    _$jscoverage['apiserver.js'][45]++;
    this.activeApiModules[version] = Object.create(null);
  }
  _$jscoverage['apiserver.js'][47]++;
  this.activeApiModules[version][moduleName] = apiModule;
  _$jscoverage['apiserver.js'][48]++;
  this.router.update(this.activeApiModules, this.middlewareList);
  _$jscoverage['apiserver.js'][49]++;
  return this;
});
_$jscoverage['apiserver.js'][52]++;
ApiServer.prototype.use = (function (route, middleware) {
  _$jscoverage['apiserver.js'][53]++;
  this.middlewareList.push({route: route, handle: middleware});
  _$jscoverage['apiserver.js'][57]++;
  this.router.update(this.activeApiModules, this.middlewareList);
  _$jscoverage['apiserver.js'][58]++;
  return this;
});
_$jscoverage['apiserver.js'][61]++;
ApiServer.prototype.listen = (function () {
  _$jscoverage['apiserver.js'][62]++;
  var arguments = Array.prototype.slice.call(arguments);
  _$jscoverage['apiserver.js'][63]++;
  var port = this.port, hostname, callback;
  _$jscoverage['apiserver.js'][64]++;
  arguments.forEach((function (arg) {
  _$jscoverage['apiserver.js'][65]++;
  if (typeof arg === "function") {
    _$jscoverage['apiserver.js'][66]++;
    callback = arg;
    _$jscoverage['apiserver.js'][67]++;
    return;
  }
  _$jscoverage['apiserver.js'][69]++;
  if (typeof arg === "string" && isNaN(Number(arg))) {
    _$jscoverage['apiserver.js'][70]++;
    hostname = arg;
    _$jscoverage['apiserver.js'][71]++;
    return;
  }
  _$jscoverage['apiserver.js'][73]++;
  if (! isNaN(Number(arg))) {
    _$jscoverage['apiserver.js'][74]++;
    port = arg;
    _$jscoverage['apiserver.js'][75]++;
    return;
  }
}));
  _$jscoverage['apiserver.js'][78]++;
  this.server.listen(port, hostname, callback);
});
_$jscoverage['apiserver.js'][81]++;
ApiServer.prototype.close = (function (callback) {
  _$jscoverage['apiserver.js'][82]++;
  callback && this.server.once("close", callback);
  _$jscoverage['apiserver.js'][83]++;
  this.server.close();
});
_$jscoverage['apiserver.js'][87]++;
Object.keys(middleware).forEach((function (middlewareName) {
  _$jscoverage['apiserver.js'][88]++;
  module.exports[middlewareName] = middleware[middlewareName];
}));
_$jscoverage['apiserver.js'][92]++;
function onRequest(request, response) {
  _$jscoverage['apiserver.js'][93]++;
  var self = this;
  _$jscoverage['apiserver.js'][94]++;
  request.requestedAt = new Date().getTime();
  _$jscoverage['apiserver.js'][95]++;
  request.parsedUrl = url.parse(request.url, true);
  _$jscoverage['apiserver.js'][96]++;
  request.pathname = request.parsedUrl.pathname;
  _$jscoverage['apiserver.js'][97]++;
  request.querystring = qs.parse(request.parsedUrl.search.replace(/^\?/, ""));
  _$jscoverage['apiserver.js'][98]++;
  request.connection.setTimeout(this.timeout, (function () {
  _$jscoverage['apiserver.js'][99]++;
  self.emit("timeout", request.url);
}));
  _$jscoverage['apiserver.js'][101]++;
  request.makeBuffered();
  _$jscoverage['apiserver.js'][102]++;
  request.pause();
  _$jscoverage['apiserver.js'][104]++;
  var end = response.end;
  _$jscoverage['apiserver.js'][105]++;
  response.end = (function () {
  _$jscoverage['apiserver.js'][106]++;
  end.apply(this, arguments);
  _$jscoverage['apiserver.js'][107]++;
  self.emit("requestEnd", request.url, new Date().getTime() - request.requestedAt);
});
  _$jscoverage['apiserver.js'][110]++;
  this.JSONTransport(request, response);
  _$jscoverage['apiserver.js'][112]++;
  var executionChain = this.router.get(request.pathname);
  _$jscoverage['apiserver.js'][114]++;
  if (! executionChain) {
    _$jscoverage['apiserver.js'][115]++;
    return response.serveJSON({httpStatusCode: 404, json: {success: false, reason: request.pathname + " api not found"}});
  }
  _$jscoverage['apiserver.js'][121]++;
  new Chain(executionChain, (function (err) {
  _$jscoverage['apiserver.js'][122]++;
  if (err) {
    _$jscoverage['apiserver.js'][123]++;
    response.serveJSON({success: false, reason: "something went wrong: " + err, stack: err.stack}, {httpStatusCode: 500});
    _$jscoverage['apiserver.js'][130]++;
    self.emit("error", err, request.url);
  }
})).call(request, response);
}
_$jscoverage['apiserver.js'].source = ["var http = require('http'),","    url = require('url'),","    qs = require('qs'),","    util = require('util'),","    events = require('events'),","    bufferedRequest = require('buffered-request'),","    middleware = require('./middleware'),","    Router = require('apiserver-router'),","    Chain = require('fnchain')","","var ApiServer = module.exports = function (options) {","  var self = this","  ApiServer.super_.call(this)","","  options = (options !== null &amp;&amp; options !== undefined &amp;&amp; options.constructor === Object) ? options : {}","  options.timeout = !options.timeout || options.timeout &lt; 0 ? 15000 : options.timeout","  options.standardHeaders = options.standardHeaders || {","    'cache-control': 'max-age=0, no-cache, no-store, must-revalidate',","    'expires': 0,","    'pragma': 'no-cache',","    'x-server': 'ApiServer v' + ApiServer.version + ' raging on nodejs ' + process.version","  }","  options.port = options.port || 8080","  options.server = options.server || http.createServer()","  options.router = options.router || new Router()","","  Object.keys(options).forEach(function (key) {","    if (!self.__proto__.hasOwnProperty(key)) {","      self[key] = options[key]","    }","  })","","  this.JSONTransport = middleware.JSONTransport(this, options)","  this.middlewareList = []","  this.activeApiModules = {}","  this.server.on('request', onRequest.bind(this))","}","","module.exports.version = require('../package').version","","util.inherits(module.exports, events.EventEmitter)","","ApiServer.prototype.addModule = function (version, moduleName, apiModule) {","  if (this.activeApiModules[version] === undefined) {","    this.activeApiModules[version] = Object.create(null)","  }","  this.activeApiModules[version][moduleName] = apiModule","  this.router.update(this.activeApiModules, this.middlewareList)","  return this","}","","ApiServer.prototype.use = function (route, middleware) {","  this.middlewareList.push({","    route: route,","    handle: middleware","  })","  this.router.update(this.activeApiModules, this.middlewareList)","  return this","}","","ApiServer.prototype.listen = function () {","  var arguments = Array.prototype.slice.call(arguments)","  var port = this.port, hostname, callback","  arguments.forEach(function (arg) {","    if (typeof arg === 'function') {","      callback = arg","      return","    }","    if (typeof arg === 'string' &amp;&amp; isNaN(Number(arg))) {","      hostname = arg","      return","    }","    if (!isNaN(Number(arg))) {","      port = arg","      return","    }","  })","  this.server.listen(port, hostname, callback)","}","","ApiServer.prototype.close = function (callback) {","  callback &amp;&amp; this.server.once('close', callback)","  this.server.close()","}","","// export middleware","Object.keys(middleware).forEach(function (middlewareName) {","  module.exports[middlewareName] = middleware[middlewareName]","})","","// private","function onRequest(request, response) {","  var self = this","  request.requestedAt = new Date().getTime()","  request.parsedUrl = url.parse(request.url, true)","  request.pathname = request.parsedUrl.pathname","  request.querystring = qs.parse(request.parsedUrl.search.replace(/^\\?/, ''))","  request.connection.setTimeout(this.timeout, function () {","    self.emit('timeout', request.url)","  })","  request.makeBuffered()","  request.pause()","","  var end = response.end","  response.end = function () {","    end.apply(this, arguments)","    self.emit('requestEnd', request.url, new Date().getTime() - request.requestedAt)","  }","","  this.JSONTransport(request, response)","","  var executionChain = this.router.get(request.pathname)","","  if (!executionChain) {","    return response.serveJSON({","      httpStatusCode: 404,","      json: { success: false, reason: request.pathname + ' api not found' }","    })","  }","","  new Chain(executionChain, function (err) {","    if (err) {","      response.serveJSON({","        success: false,","        reason: 'something went wrong: ' + err,","        stack: err.stack","      }, {","        httpStatusCode: 500","      })","      self.emit('error', err, request.url)","    }","  }).call(request, response)","}"];