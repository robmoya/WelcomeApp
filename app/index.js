(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
module.exports = function(){
  console.log("The App Running!!!")
}

// Here you can require other files
//require('./app');

// Third party libraries/frameworks.
//require('angular/angular');
//require('jquery');

// And even resources on the internet
// lazyload( url, function(){} );

},{}],3:[function(require,module,exports){
module.exports={
	"name": "WelcomeApp",
	"description": "",
	"version": "0.0.1",
	"threevot": {
	  "displayName" : "WelcomeApp",
    "size" : "small",
  	"private": false,
  	"privateCode": "",
		"external": {
		},
		"entries": {
			"index": [
				"desktop",
				"laptop",
				"phone",
				"tablet"
			]
		},
		"extensions": [
			".coffee",
			".eco",
			".html"
		],
		"transforms": [
			"coffeeify",
			"brfs"
		],
		"gitDependencies": {}
	},
	"dependencies": {
	  "3vot" : "0.0.3"
	}
}
},{}],4:[function(require,module,exports){
var _3vot = require("3vot");
var fs = require("fs");
var app = require("../code/index.js")

document.body.innerHTML = "<div style=\"background-image: url(//hangouts-91941.use1-2.nitrousbox.com/3vot/WelcomeApp/assets/3vot-hangouts-bg.jpg);\">\n  <div class=\"container\" >\n     <div class=\"row\">\n      <nav class=\"navbar col-md-12 col-sm-12 col-xs-12\" role=\"navigation\">\n        <div class=\"navbar-header\">\n          <a class=\"navbar-brand logo\" href=\"http://www.3vot.com\"></a>\n        </div>\n      </nav><!-- Navbar -->\n    </div><!--Row-->\n    \n    <h3 class=\" text-inverse text-center\">Welcome to 3vot's</h3>\n    <h1 class=\"text-center text-inverse page-header\">Resource Guide</h1>\n    <br><br>\n    \n    <div class=\"col-md-10 col-md-offset-1\">\n      \n       <div class=\"row\">\n        <a href=\"http://www.3vot.com\" class=\"panel-3vot bg-primary\">\n          <div class=\"panel\">  \n            <div class=\"panel-body text-center\">\n              Our website\n              <span class=\" pull-right glyphicon glyphicon-chevron-right btn-icon\"></span>\n            </div>\n          </div>\n        </a>\n       </div><!--Website Panel-->\n      \n       <div class=\"row\">\n         <a href=\"http://www.facebook.com/3votCorp\" class=\"panel-3vot bg-info\">\n          <div class=\"panel\">  \n            <div class=\"panel-body text-center\">\n              Our Facebook<span class=\" pull-right glyphicon glyphicon-chevron-right btn-icon\"></span>\n            </div>\n          </div>\n        </a>\n       </div><!--Facebook Panel-->\n      \n      <div class=\"row\">\n        <a href=\"http://www.twitter.com/3vot\" class=\"panel-3vot bg-success\">\n          <div class=\"panel\">  \n            <div class=\"panel-body text-center\">\n              Our Twitter<span class=\" pull-right glyphicon glyphicon-chevron-right btn-icon\"></span>\n            </div>\n          </div>\n        </a>\n       </div><!--Facebook Panel-->\n\n      <div class=\"row\">\n        <a href=\"http://www.youtube.com/channel/UC0HB0wgGwjd7b_hcTeWS_Rw\" class=\"panel-3vot bg-danger\">\n          <div class=\"panel\">  \n            <div class=\"panel-body text-center\">\n              Youtube Channel<span class=\" pull-right glyphicon glyphicon-chevron-right btn-icon\"></span>\n            </div>\n          </div>\n        </a>\n       </div><!--Youtube Panel-->\n      \n       <div class=\"row\">\n         <label class=\"text-center text-inverse\" style=\"display:block\">Front End as a Service Introduction Video</label>\n        <div class=\"videoWrapper\">\n           <iframe width=\"640\" height=\"360\" src=\"//www.youtube.com/embed/7LAiGX6_4-s\" frameborder=\"0\" allowfullscreen></iframe>\n        </div>  \n       </div><!-- Front End as a Service Video-->\n      \n      <div class=\"row\">\n        <label class=\"text-center text-inverse\" style=\"display:block\">3vot Profiles & Marketplace Introduction Video</label>\n        <div class=\"videoWrapper\">\n           <iframe width=\"640\" height=\"360\" src=\"//www.youtube.com/embed/ewhugA219m0\" frameborder=\"0\" allowfullscreen></iframe>\n        </div>\n      </div><!-- Profiles & Marketplace Video-->\n      \n      <div class=\"row\">\n        <a href=\"http://www.3vot.com/features.html\" class=\"panel-3vot bg-warning\">\n          <div class=\"panel\">  \n            <div class=\"panel-body text-center\">\n              Our Features<span class=\" pull-right glyphicon glyphicon-chevron-right btn-icon\"></span>\n            </div>\n          </div>\n        </a>\n       </div><!--Youtube Panel-->\n      <br><br>\n    </div>\n    \n  \n  </div>\n</div>";

var package = require("../package")

_3vot.init( {
  package: package,
  loginProviders: [ ] ,
  app: app
});





},{"../code/index.js":2,"../package":3,"3vot":6,"fs":1}],5:[function(require,module,exports){
var _3vot = require("3vot")

module.exports = {}
module.exports.getDependencyName = getDependencyName;
module.exports.loadDependency = loadDependency;

function getDependencyName(package){

  var deps = package.threevot.external;
  var composedDeps = [];
  var git = package.threevot.gitDependencies;
  var npm = package.dependencies;

  var keys = Object.keys(deps)
  var index = keys.length - 1
  while(index >= 0){
    dep = keys[index]
    composedDeps.push(dep + "-" + (npm[dep] || git[dep]) );
    index--;
  }

  return composedDeps.join("--");
}

function loadDependency(callback){
  LazyLoad = require("./lib/lazyload");
  var depName = getDependencyName(_3vot.package)

  if(depName.length == 0) return callback()

  return LazyLoad.js("/" + _3vot.package.profile + "/dependencies/" + depName + ".js", function() {
    callback(null)
  });
}

},{"./lib/lazyload":7,"3vot":6}],6:[function(require,module,exports){
var _3vot = {};
_3vot.endpoint = "http://backend.3vot.com/v1";
_3vot.loginProviders = {};
_3vot.logins = {};
_3vot.package = {};
_3vot.initOptions = {};
_3vot.utils = require("./utils");

module.exports = _3vot;

var _3votLogin = require("./login");
var _3votDependency = require("./dependency");

_3vot.login = _3votLogin;
_3vot.dependency = _3votDependency;

_3vot.init = function(options){

  _3vot.initOptions = options;
  _3vot.package = options.package
  _3vot.endpoint = options.endpoint || _3vot.endpoint
  
  window._3vot.endpoint = _3vot.endpoint;
  
  _3votLogin.registerProviders(options.loginProviders);

  _3votLogin.loginWithAllProviders( function(err){
    if(err) return alert("An Error occured trying to login " + err);
    
    _3votDependency.loadDependency( function(err) {
      if(err) return alert("An Error occured trying to load dependencies");
      options.app()
    });

  });
}


},{"./dependency":5,"./login":8,"./utils":9}],7:[function(require,module,exports){
/*jslint browser: true, eqeqeq: true, bitwise: true, newcap: true, immed: true, regexp: false */

/**
LazyLoad makes it easy and painless to lazily load one or more external
JavaScript or CSS files on demand either during or after the rendering of a web
page.

Supported browsers include Firefox 2+, IE6+, Safari 3+ (including Mobile
Safari), Google Chrome, and Opera 9+. Other browsers may or may not work and
are not officially supported.

Visit https://github.com/rgrove/lazyload/ for more info.

Copyright (c) 2011 Ryan Grove <ryan@wonko.com>
All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the 'Software'), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

@module lazyload
@class LazyLoad
@static
*/

module.exports = (function (doc) {
  // -- Private Variables ------------------------------------------------------

  // User agent and feature test information.
  var env,

  // Reference to the <head> element (populated lazily).
  head,

  // Requests currently in progress, if any.
  pending = {},

  // Number of times we've polled to check whether a pending stylesheet has
  // finished loading. If this gets too high, we're probably stalled.
  pollCount = 0,

  // Queued requests.
  queue = {css: [], js: []},

  // Reference to the browser's list of stylesheets.
  styleSheets = doc.styleSheets;

  // -- Private Methods --------------------------------------------------------

  /**
  Creates and returns an HTML element with the specified name and attributes.

  @method createNode
  @param {String} name element name
  @param {Object} attrs name/value mapping of element attributes
  @return {HTMLElement}
  @private
  */
  function createNode(name, attrs) {
    var node = doc.createElement(name), attr;

    for (attr in attrs) {
      if (attrs.hasOwnProperty(attr)) {
        node.setAttribute(attr, attrs[attr]);
      }
    }

    return node;
  }

  /**
  Called when the current pending resource of the specified type has finished
  loading. Executes the associated callback (if any) and loads the next
  resource in the queue.

  @method finish
  @param {String} type resource type ('css' or 'js')
  @private
  */
  function finish(type) {
    var p = pending[type],
        callback,
        urls;

    if (p) {
      callback = p.callback;
      urls     = p.urls;

      urls.shift();
      pollCount = 0;

      // If this is the last of the pending URLs, execute the callback and
      // start the next request in the queue (if any).
      if (!urls.length) {
        callback && callback.call(p.context, p.obj);
        pending[type] = null;
        queue[type].length && load(type);
      }
    }
  }

  /**
  Populates the <code>env</code> variable with user agent and feature test
  information.

  @method getEnv
  @private
  */
  function getEnv() {
    var ua = navigator.userAgent;

    env = {
      // True if this browser supports disabling async mode on dynamically
      // created script nodes. See
      // http://wiki.whatwg.org/wiki/Dynamic_Script_Execution_Order
      async: doc.createElement('script').async === true
    };

    (env.webkit = /AppleWebKit\//.test(ua))
      || (env.ie = /MSIE|Trident/.test(ua))
      || (env.opera = /Opera/.test(ua))
      || (env.gecko = /Gecko\//.test(ua))
      || (env.unknown = true);
  }

  /**
  Loads the specified resources, or the next resource of the specified type
  in the queue if no resources are specified. If a resource of the specified
  type is already being loaded, the new request will be queued until the
  first request has been finished.

  When an array of resource URLs is specified, those URLs will be loaded in
  parallel if it is possible to do so while preserving execution order. All
  browsers support parallel loading of CSS, but only Firefox and Opera
  support parallel loading of scripts. In other browsers, scripts will be
  queued and loaded one at a time to ensure correct execution order.

  @method load
  @param {String} type resource type ('css' or 'js')
  @param {String|Array} urls (optional) URL or array of URLs to load
  @param {Function} callback (optional) callback function to execute when the
    resource is loaded
  @param {Object} obj (optional) object to pass to the callback function
  @param {Object} context (optional) if provided, the callback function will
    be executed in this object's context
  @private
  */
  function load(type, urls, callback, obj, context) {
    var _finish = function () { finish(type); },
        isCSS   = type === 'css',
        nodes   = [],
        i, len, node, p, pendingUrls, url;

    env || getEnv();

    if (urls) {
      // If urls is a string, wrap it in an array. Otherwise assume it's an
      // array and create a copy of it so modifications won't be made to the
      // original.
      urls = typeof urls === 'string' ? [urls] : urls.concat();

      // Create a request object for each URL. If multiple URLs are specified,
      // the callback will only be executed after all URLs have been loaded.
      //
      // Sadly, Firefox and Opera are the only browsers capable of loading
      // scripts in parallel while preserving execution order. In all other
      // browsers, scripts must be loaded sequentially.
      //
      // All browsers respect CSS specificity based on the order of the link
      // elements in the DOM, regardless of the order in which the stylesheets
      // are actually downloaded.
      if (isCSS || env.async || env.gecko || env.opera) {
        // Load in parallel.
        queue[type].push({
          urls    : urls,
          callback: callback,
          obj     : obj,
          context : context
        });
      } else {
        // Load sequentially.
        for (i = 0, len = urls.length; i < len; ++i) {
          queue[type].push({
            urls    : [urls[i]],
            callback: i === len - 1 ? callback : null, // callback is only added to the last URL
            obj     : obj,
            context : context
          });
        }
      }
    }

    // If a previous load request of this type is currently in progress, we'll
    // wait our turn. Otherwise, grab the next item in the queue.
    if (pending[type] || !(p = pending[type] = queue[type].shift())) {
      return;
    }

    head || (head = doc.head || doc.getElementsByTagName('head')[0]);
    pendingUrls = p.urls;

    for (i = 0, len = pendingUrls.length; i < len; ++i) {
      url = pendingUrls[i];

      if (isCSS) {
          node = env.gecko ? createNode('style') : createNode('link', {
            href: url,
            rel : 'stylesheet'
          });
      } else {
        node = createNode('script', {src: url});
        node.async = false;
      }

      node.className = 'lazyload';
      node.setAttribute('charset', 'utf-8');

      if (env.ie && !isCSS && 'onreadystatechange' in node && !('draggable' in node)) {
        node.onreadystatechange = function () {
          if (/loaded|complete/.test(node.readyState)) {
            node.onreadystatechange = null;
            _finish();
          }
        };
      } else if (isCSS && (env.gecko || env.webkit)) {
        // Gecko and WebKit don't support the onload event on link nodes.
        if (env.webkit) {
          // In WebKit, we can poll for changes to document.styleSheets to
          // figure out when stylesheets have loaded.
          p.urls[i] = node.href; // resolve relative URLs (or polling won't work)
          pollWebKit();
        } else {
          // In Gecko, we can import the requested URL into a <style> node and
          // poll for the existence of node.sheet.cssRules. Props to Zach
          // Leatherman for calling my attention to this technique.
          node.innerHTML = '@import "' + url + '";';
          pollGecko(node);
        }
      } else {
        node.onload = node.onerror = _finish;
      }

      nodes.push(node);
    }

    for (i = 0, len = nodes.length; i < len; ++i) {
      head.appendChild(nodes[i]);
    }
  }

  /**
  Begins polling to determine when the specified stylesheet has finished loading
  in Gecko. Polling stops when all pending stylesheets have loaded or after 10
  seconds (to prevent stalls).

  Thanks to Zach Leatherman for calling my attention to the @import-based
  cross-domain technique used here, and to Oleg Slobodskoi for an earlier
  same-domain implementation. See Zach's blog for more details:
  http://www.zachleat.com/web/2010/07/29/load-css-dynamically/

  @method pollGecko
  @param {HTMLElement} node Style node to poll.
  @private
  */
  function pollGecko(node) {
    var hasRules;

    try {
      // We don't really need to store this value or ever refer to it again, but
      // if we don't store it, Closure Compiler assumes the code is useless and
      // removes it.
      hasRules = !!node.sheet.cssRules;
    } catch (ex) {
      // An exception means the stylesheet is still loading.
      pollCount += 1;

      if (pollCount < 200) {
        setTimeout(function () { pollGecko(node); }, 50);
      } else {
        // We've been polling for 10 seconds and nothing's happened. Stop
        // polling and finish the pending requests to avoid blocking further
        // requests.
        hasRules && finish('css');
      }

      return;
    }

    // If we get here, the stylesheet has loaded.
    finish('css');
  }

  /**
  Begins polling to determine when pending stylesheets have finished loading
  in WebKit. Polling stops when all pending stylesheets have loaded or after 10
  seconds (to prevent stalls).

  @method pollWebKit
  @private
  */
  function pollWebKit() {
    var css = pending.css, i;

    if (css) {
      i = styleSheets.length;

      // Look for a stylesheet matching the pending URL.
      while (--i >= 0) {
        if (styleSheets[i].href === css.urls[0]) {
          finish('css');
          break;
        }
      }

      pollCount += 1;

      if (css) {
        if (pollCount < 200) {
          setTimeout(pollWebKit, 50);
        } else {
          // We've been polling for 10 seconds and nothing's happened, which may
          // indicate that the stylesheet has been removed from the document
          // before it had a chance to load. Stop polling and finish the pending
          // request to prevent blocking further requests.
          finish('css');
        }
      }
    }
  }

  return {

    /**
    Requests the specified CSS URL or URLs and executes the specified
    callback (if any) when they have finished loading. If an array of URLs is
    specified, the stylesheets will be loaded in parallel and the callback
    will be executed after all stylesheets have finished loading.

    @method css
    @param {String|Array} urls CSS URL or array of CSS URLs to load
    @param {Function} callback (optional) callback function to execute when
      the specified stylesheets are loaded
    @param {Object} obj (optional) object to pass to the callback function
    @param {Object} context (optional) if provided, the callback function
      will be executed in this object's context
    @static
    */
    css: function (urls, callback, obj, context) {
      load('css', urls, callback, obj, context);
    },

    /**
    Requests the specified JavaScript URL or URLs and executes the specified
    callback (if any) when they have finished loading. If an array of URLs is
    specified and the browser supports it, the scripts will be loaded in
    parallel and the callback will be executed after all scripts have
    finished loading.

    Currently, only Firefox and Opera support parallel loading of scripts while
    preserving execution order. In other browsers, scripts will be
    queued and loaded one at a time to ensure correct execution order.

    @method js
    @param {String|Array} urls JS URL or array of JS URLs to load
    @param {Function} callback (optional) callback function to execute when
      the specified scripts are loaded
    @param {Object} obj (optional) object to pass to the callback function
    @param {Object} context (optional) if provided, the callback function
      will be executed in this object's context
    @static
    */
    js: function (urls, callback, obj, context) {
      load('js', urls, callback, obj, context);
    }

  };
})(document);
},{}],8:[function(require,module,exports){
var _3vot = require("./index")

function registerProviders(passedLoginProviders){
  for(loginProviderIndex in passedLoginProviders){
    var loginProvider = passedLoginProviders[loginProviderIndex];
    _3vot.loginProviders[loginProvider.name] = loginProvider.getProviderObject();
  }
}

function loginWithAllProviders(callback){
  request = new XMLHttpRequest
  request.withCredentials = true;
  request.open('GET', _3vot.endpoint + '/logins', true)
  request.send()

  request.onload = function() {
    _3vot.logins = JSON.parse(this.response)
    
    for( loginProviderKey in _3vot.loginProviders ){
      var loginProvider = _3vot.loginProviders[loginProviderKey]
      var shouldLogin = !loginProvider.validateProviderFromLogins();
      if( shouldLogin  ) return loginProvider.action();
    }
    
    callback(null, true);
  }

  request.onerror = function(err) {
    callback(err);
  }

}

module.exports = {
  registerProviders: registerProviders,
  loginWithAllProviders: loginWithAllProviders
}

},{"./index":6}],9:[function(require,module,exports){
module.exports = {

  getCurrentUrl: function (){
    var currentUrl = window.location.href
    lastIndex = currentUrl[currentUrl.length -1];
    if(lastIndex != "/") currentUrl += "/"
    return currentUrl;
  },
  
  replaceAll: function (str, find, replace) {
    return str.replace(new RegExp(find.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g'), replace);
  }
  
}
},{}]},{},[4])