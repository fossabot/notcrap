/* Notcrap.js CopyRight Notcrap 2018 v1.2.1 Under MIT License */
	window.notcrap = {version:'1.2.1'};
function get(sel) {
    const l = !!sel && ("object" == typeof sel ? sel : document.querySelectorAll(sel));
    return 1 === l.length ? l[0] : l;
}

Object.defineProperties(HTMLElement.prototype, {
    setStyle: {
        get: () => (function(attr, val) {
            this.style[attr] = val;
        })
    },
    hide: {
        get: () => (function() {
            this.setStyle("display", "none"),
			this.setStyle("visibility", "hidden");
        })
    },
    show: {
        get: () => (function() {
            this.setStyle("display", "block"),
			this.setStyle("visibility", "initial");
        })
    },
    addClass: {
        get: () => (function(cls) {
            this.classList.add(cls);
        })
    },
    removeClass: {
        get: () => (function(cls) {
            this.classList.remove(cls);
        })
    },
    toggleClass: {
        get: () => (function(cls) {
            this.classList.toggle(cls);
        })
    },
    hasClass: {
        get: () => (function(cls) {
            return this.classList.contains(cls);
        })
    },
    removeChildren: {
        get: () => (function() {
            for (;this.hasChildNodes(); ) this.removeChild(this.firstChild);
        })
    },
    remove: {
        get: () => (function() {
            this.parentNode.removeChild(this);
        })
    },
    addChild: {
        get: () => (function(type) {
            const obj = document.createElement(type);
            return this.appendChild(obj), obj;
        })
    },
    place: {
        get: () => (function() {
            for (let cld = this.parentNode.children, l = cld.length, i = 0; i < l; i++) if (cld[i] === this) return i;
            return -1;
        })
    },
    includeHTML: {
        get: () => (function(ulr) {
            ajax({
                url: ulr
            }, function(res) {
                this.innerHTML = res;
            });
        })
    },
    getElementsByAttribute: {
        get: () => (function(attr, val) {
            return this.querySelectorAll(val ? `*[${attr}~=${val}]` : `*[${attr}]`);
        })
    },
    getThis: {
        get: () => (function() {
            return this;
        })
    },
    getCssProp: {
        get: () => (function(prop) {
            return this.style[prop];
        })
    }
}),
 document.getElementsByAttribute = function(attr, val) {
    return document.querySelectorAll(val ? `*[${attr}~=${val}]` : `*[${attr}]`);
    // Made possible by Css Selectors
};

var ajax = function(data, readyfunc) {
    const f = readyfunc || function(res) {
        console.log(res);
    };
    if (!data.url) throw "You need to give an URL";
    // Error handling
        const type = (data.method || "GET").toUpperCase();
    let xhttp, str = data.data;
    "POST" == type && (dataString = "string" == typeof str ?
	str :
	Object.keys(str).map(r => `${encodeURIComponent(r)}=${encodeURIComponent(str[r])}`).join("&")), 
    (xhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP")).open(type, data.url), 
    xhttp.onreadystatechange = function() {
        xhttp.readyState > 3 && 200 == xhttp.status && f(xhttp.responseText);
    },
	"POST" == type && xhttp.setRequestHeader("X-Requested-With", "XMLHttpRequest"), 
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
	"POST" == type ? xhttp.send(dataString) : xhttp.send();
};

function fileExt(k) {
    return k.split(".").pop();
}

function fileName(k) {
    let l = k.split(".");
    return l.pop(), (l = l.join(".").split("/")).pop();
}

function addToggleData(name, data) {
    toggleData[name] = data, setUpToggle();
}

function setUpToggle() {
    const elmnts = document.querySelectorAll("*[toggle]");
    for (let i = 0, l = elmnts.length; i < l; i++) {
        const el = elmnts[i];
        console.log(el);
        let t_type = "show";
        t_type = toggleData[t_type] ? t_type : "show";
        let t_target = document.querySelectorAll(el.getAttribute("toggle-target")),
		
		trigger = el.getAttribute("toggle-trigger") || "click";
		t_target = typeof(t_target)==="object" ? t_target : el.children,
		t_target = typeof(t_target)==="object" ? t_target : el;
        el.getAttribute("toggle-status") && 0 == el.getAttribute("toggle-status") ? el.setAttribute("toggle-status", 1) : el.setAttribute("toggle-status", 0), 
        el.addEventListener(trigger, () => {
            for (let i = 0, l = t_target.length; i < l; i++) {
               
                const d = t_target[i];
                if (toggleData[t_type][d.getAttribute("toggle-status")].JS) {
                    const e = new Script();
                    e.innerHTML = `${toggleData[t_type][d.getAttribute("toggle-status")].JS}`,
					e.update(), 
                    e.remove();
                }
                if (toggleData[t_type][d.getAttribute("toggle-status")].CSS) {
                    const e = `${toggleData[t_type][d.getAttribute("toggle-status")].CSS}`;
                    console.log(e), d.setAttribute("style", e);
                }
                d.setAttribute("toggle-status", Math.abs(Number(d.getAttribute("toggle-status")) - 1));
            }
        });
    }
}

 Math.map = function(x, in_min, in_max, out_min, out_max) {
    return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
},
 Math.constrain = function(x, min, max) {
    return x < min ? min : x > max ? max : x;
},
 Math.randomBetween = function(min, max, round) {
    const n = Math.map(Math.random(), 0, 1, min, max);
    return round ? Math.floor(n) : n;
},
 Script = function(min) {
    this.scr = document.head.addChild("SCRIPT"), this.scr.innerHTML = k, this.innerHTML = k, 
    this.src = null, this.update = function() {
        this.scr.innerHTML = this.innerHTML;
        const l = this.scr.innerHTML;
        document.head.removeChild(this.scr), this.scr = document.createElement("script"), 
        this.src ? this.scr.src = this.src : this.scr.innerHTML = l, document.head.appendChild(this.scr);
    }, this.update();
},
 Css = function(k) {
    this.css = document.head.addChild("style"), this.css.innerHTML = k, this.innerHTML = k, 
    this.href = null, this.update = function() {
        if (this.href) document.head.removeChild(this.css), this.css = document.createElement("link"), 
        this.css.rel = "stylesheet", this.css.type = "text/css", this.css.href = this.href, 
        this.css.media = "all", document.head.appendChild(this.css); else {
            this.css.innerHTML = this.innerHTML;
            const l = this.css.innerHTML;
            document.head.removeChild(this.css), this.css = document.createElement("style"), 
            this.css.innerHTML = l, document.head.appendChild(this.css);
        }
    }, this.update();
},
 hide000ad = function() {
    get("div[style] a[title] img[alt]").parentNode.parentNode.remove();
},
 require = function k(l) {
    switch (l) {
      case "Jquery":
        if (!window.jQuery) {
            const o = new Script();
            o.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js", o.update();
        }
        break;

      case "Bootstrap":
        window.jQuery || k("Jquery");
        var m = document.createElement("link");
        m.rel = "stylesheet", m.type = "text/css", m.href = "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css", 
        m.media = "all", document.head.appendChild(m);
        var n = new Script();
        n.src = "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js", n.update();
        break;

      default:
        switch (fileExt(l).toUpperCase()) {
          case "JS":
            const o = new Script();
            o.src = l, o.update();
            break;

          case "CSS":
            const p = new Css();
            p.href = l, p.update();
        }
    }
},
 Object.defineProperty(HTMLElement.prototype, "getStyleProperty", {
    value(k) {
        return this.style[k];
    }
}),
 Object.defineProperties(String.prototype, {
    filter: {
        get: () => (function(l) {
            switch (l.toUpperCase()) {
              case "EMAIL":
                const n = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
                return n.test(this);
				break;
              case "WEBSITE":
			  const nn = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
                return nn.test(this);
				break;
              case "IP":
			  const nnn = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
                return nnn.test(this);
				break;
				default:break;
            }
        })
    }
}),
 toggleData = {
    show: {
        0: {
            CSS: "display: none;"
        },
        1: {
            CSS: "display: block;"
        }
    }
};

/* Ready: get called when window is loaded */
var ready = function() {
    const cbs = [];
    return document.addEventListener("DOMContentLoaded", () => {
        cbs.forEach(f => {
            f();
        });
    }),
	function(cb) {
        cbs.push(cb);
    };
}();
