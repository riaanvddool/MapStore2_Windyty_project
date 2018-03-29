/*! Copyright (c) Windyty SE, 2016 all rights reserved */ 
!function() {
    
    function loadScript(url, onload) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        script.async = false;
        script.defer = false;
        script.onload = onload || function() {};
        script.onerror = function() {
            console.error("Failed to load" + url)
        };
        document.head.appendChild(script);
    }

    function loadStylesheet(url) {
        var link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = url;
        document.head.appendChild(link);
    }

    function logError(msg) {
        throw alert(msg), msg
    }

    function welcome() {
        W.require(members, function(map) {
            W.setTimestamp = W.windytyUI.setTimestamp.bind(W.windytyUI);
            W.setOverlay = W.windytyUI.setOverlay.bind(W.windytyUI);
            W.setLevel = W.windytyUI.setLevel.bind(W.windytyUI);
            W.timeline = W.windytyUI.calendar;
            W.on = W.broadcast.on.bind(W.broadcast); 
            W.off = W.broadcast.off.bind(W.broadcast); 
            W.once = W.broadcast.once.bind(W.broadcast); 
            W.fire = W.broadcast.emit.bind(W.broadcast); 
            windytyMain(map);
        });
        setTimeout(function() {
            console.log("Welcome to Windyty API: Please  do not remove, or hide Windyty logo and link from a map.")
        }, 1e3);
    }

    function analytics() {
        ref = document.URL; 
        ga("create", "UA-56263486-8", {
            name: "b"
        });
        ga("b.send", "pageview", "key/" + windytyInit.key);
        ga("b.send", "pageview", "source/" + ref)
    }
  
    var members = ["maps", "prototypes", "rootScope", "broadcast", "object", "mapsCtrl", "trans", "broadcast", "calendar", "http", "jsonLoader", "overlays", "products", "colors", "legend", "windytyUI", "windytyCtrl"];
  
    API_MODE = true;
    DEBUG = true;
    DEBUG2 = true;
    L || logError("Missing Leaflet library. Add leaflet library into HEAD seaction of your code");
    /0.7.5|0.7.7/.test(L.version) || logError("Wrong version of Leaflet library. Version 0.7.5 or 0.7.7 required");
    window.windytyInit || logError("Missing windytyInit object");
    windytyInit.key || logError("Missing API key");
    window.windytyMain || logError("Missing function named windytyMain");
    
    var urlbase = "https://api.windytv.com/v2.3/";
    var node = document.getElementById("windyty");
    node || logError("Missing DIV with windyty id");
    node.innerHTML = '<div id="map_container" style="width:100%; height:100%;"></div><div id="contrib">OSM & contributors</div><div id="legend"></div><canvas id="jpg_decoder" style="display: none;"></canvas><div id="globe_container"></div><a class="logo" href="https://www.windytv.com" target="wndt"><img class="w" src="https://www.windytv.com/img/ikona.svg"><img class="text" src="https://www.windytv.com/img/logo-windytv.svg"></a>'
    loadStylesheet(urlbase + "api.css");
    loadScript("https://www.windytv.com/gfs/minifest.js", function() {
        //loadScript(urlbase + "api.js?key=" + windytyInit.key, welcome)
        loadScript("windyty/windyty_api.js?key=" + windytyInit.key, welcome)
    });
    setTimeout(function() {
        "function" == typeof ga ? analytics() : loadScript("https://www.google-analytics.com/analytics.js", analytics)
    }, 5e3)
}();
