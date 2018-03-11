/* Notcrap.js ©Notcrap 2018 v1.2.2 */
function get(sel) {
  const l = !!sel && (typeof sel === 'object' ? sel : document.querySelectorAll(sel));
  return l.length === 1 ? l[0] : l;
}

window.notcrap = {
  version: '1.2.2',
},
Object.defineProperties(HTMLElement.prototype, {
  setStyle: {
    get: () => (function (attr, val) {
      this.style[attr] = val;
    }),
  },
  hide: {
    get: () => (function () {
      this.setStyle('display', 'none'),
      this.setStyle('visibility', 'hidden');
    }),
  },
  show: {
    get: () => (function () {
      this.setStyle('display', 'block'),
      this.setStyle('visibility', 'initial');
    }),
  },
  addClass: {
    get: () => (function (cls) {
      this.classList ? this.classList.add(cls) : hasClass(this, cls) || (this.className += ` ${className}`);
    }),
  },
  removeClass: {
    get: () => (function (cls) {
      this.classList ? this.classList.remove(cls) : this.className = this.className.replace(RegExp(`\\b${cls}\\b`, 'g'), '');
    }),
  },
  toggleClass: {
    get: () => (function (cls) {
      this.classList ? this.classList.toggle(cls) : this.hasClass(cls) ? this.removeClass(cls) : this.addClass(cls);
    }),
  },
  hasClass: {
    get: () => (function (cls) {
      return this.classList ? this.classList.contains(cls) : RegExp(`\\b${cls}\\b`).test(this.className);
    }),
  },
  removeChildren: {
    get: () => (function () {
      for (;this.hasChildNodes();) this.removeChild(this.firstChild);
    }),
  },
  remove: {
    get: () => (function () {
      this.parentNode.removeChild(this);
    }),
  },
  addChild: {
    get: () => (function (type) {
      const obj = document.createElement(type);
      this.appendChild(obj);
      return obj;
    }),
  },
  place: {
    get: () => (function () {
      for (let cld = this.parentNode.children, l = cld.length, i = 0; l > i; i++) if (cld[i] === this) return i;
      return -1;
    }),
  },
  includeHTML: {
    get: () => (function (ulr) {
      const el = this;
      ajax({
        url: ulr,
      },
      (res) => {
        el.innerHTML = res;
      });
    }),
  },
  getElementsByAttribute: {
    get: () => (function (attr, val) {
      return this.querySelectorAll(val ? `*[${attr}~=${val}]` : `*[${attr}]`);
    }),
  },
  getThis: {
    get: () => (function () {
      return this;
    }),
  },
  getStyleProperty: {
    get: () => (function (prop) {
      return this.style[prop];
    }),
  },
}),
document.getElementsByAttribute = ((attr, val) => document.querySelectorAll(val ? `*[${attr}~=${val}]` : `*[${attr}]`));

var ajax = (data, readyfunc) => {
  const f = readyfunc || ((res) => {
    console.log(res);
  });
  if (!data.url) throw 'You need to give an URL';
  const type = (data.method || 'GET').toUpperCase();
  let xhttp,
    str = data.data;
  type == 'POST' && (dataString = typeof str === 'string' ? str : Object.keys(str).map(r => `${encodeURIComponent(r)}=${encodeURIComponent(str[r])}`).join('&')),
  (xhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP')).open(type, data.url),
  xhttp.onreadystatechange = (() => {
    xhttp.readyState > 3 && xhttp.status == 200 && f(xhttp.responseText);
  }),
  type == 'POST' && xhttp.setRequestHeader('X-Requested-With', 'XMLHttpRequest'),
  xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'),
  type == 'POST' ? xhttp.send(dataString) : xhttp.send();
};

function fileExt(k) {
  return k.split('.').pop();
}

function fileName(k) {
  let l = k.split('.');
  l.pop();
  return (l = l.join('.').split('/')).pop();
}

Math.map = ((x, in_min, in_max, out_min, out_max) => (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min),
Math.constrain = ((x, min, max) => (min > x ? min : x > max ? max : x)),
Math.randomBetween = ((min, max, round) => {
  const n = Math.map(Math.random(), 0, 1, min, max);
  return round ? Math.floor(n) : n;
}),
Script = function (k) {
  this.scr = document.head.addChild('SCRIPT'),
  this.scr.innerHTML = k,
  this.innerHTML = k,
  this.src = null,
  this.update = function () {
    this.scr.innerHTML = this.innerHTML;
    const l = this.scr.innerHTML;
    document.head.removeChild(this.scr),
    this.scr = document.createElement('script'),
    this.src ? this.scr.src = this.src : this.scr.innerHTML = l, document.head.appendChild(this.scr);
  }, this.update();
},
Css = function (k) {
  this.css = document.head.addChild('style'),
  this.css.innerHTML = k,
  this.innerHTML = k,
  this.href = null,
  this.update = function () {
    if (this.href) {
      document.head.removeChild(this.css),
      this.css = document.createElement('link'),
      this.css.rel = 'stylesheet',
      this.css.type = 'text/css',
      this.css.href = this.href,
      this.css.media = 'all',
      document.head.appendChild(this.css);
    } else {
      this.css.innerHTML = this.innerHTML;
      const l = this.css.innerHTML;
      document.head.removeChild(this.css), this.css = document.createElement('style'),
      this.css.innerHTML = l, document.head.appendChild(this.css);
    }
  },
  this.update();
},
hide000ad = (() => {
  get('div[style] a[title] img[alt]').parentNode.parentNode.remove();
}),
require = function k(l) {
  switch (l) {
    case 'Jquery':
      if (!window.jQuery) {
        const o = new Script();
        o.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js', o.update();
      }
      break;

    case 'Bootstrap':
      window.jQuery || k('Jquery');
      var m = new Css();
      m.href = 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
      m.update();
      var n = new Script();
      n.src = 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js',
      n.update();
      break;

    default:
      switch (fileExt(l).toUpperCase()) {
        case 'JS':
          const o = new Script();
          o.src = l,
          o.update();
          break;

        case 'CSS':
          const p = new Css();
          p.href = l,
          p.update();
      }
  }
},

Object.defineProperties(String.prototype, {
  filter: {
    get: () => (function (l) {
      switch (l.toUpperCase()) {
        case 'EMAIL':
          return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(this);

        case 'WEBSITE':
          return /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(this);

        case 'IP':
          return /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(this);
      }
    }),
  },
});

/* Ready: get called when window is loaded */
const ready = (() => {
  const cbs = [];
  return document.addEventListener('DOMContentLoaded', () => {
    cbs.forEach((f) => {
      f();
    });
  }), (cb) => {
    cbs.push(cb);
  };
})();
