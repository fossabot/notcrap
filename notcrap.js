function get(a)
{
	const b = !!a && (typeof a === 'object' ? a : document.querySelectorAll(a));
	return b.length == 1 ? b[0] : b;
}
Object.defineProperties(HTMLElement.prototype,
{
	setStyle:
	{
		get()
		{
			return function (c, d)
			{
				this.style[c] = d;
			};
		}
	},
	hide:
	{
		get()
		{
			return function ()
			{
				this.setStyle('display', 'none');
			};
		}
	},
	show:
	{
		get()
		{
			return function ()
			{
				this.setStyle('display', 'block');
			};
		}
	},
	addClass:
	{
		get()
		{
			return function (b)
			{
				this.classList.add(b);
			};
		}
	},
	removeClass:
	{
		get()
		{
			return function (b)
			{
				this.classList.remove(b);
			};
		}
	},
	toggleClass:
	{
		get()
		{
			return function (b)
			{
				this.classList.toggle(b);
			};
		}
	},
	hasClass:
	{
		get()
		{
			return function (b)
			{
				return this.classList.contains(b);
			};
		}
	},
	removeChildren:
	{
		get()
		{
			return function ()
			{
				for (; this.hasChildNodes();) this.removeChild(this.firstChild);
			};
		}
	},
	remove:
	{
		get()
		{
			return function ()
			{
				this.parentNode.removeChild(this);
			};
		}
	},
	addChild:
	{
		get()
		{
			return function ()
			{
				const a = document.createElement(i);
				return this.appendChild(a), a;
			};
		}
	},
	place:
	{
		get()
		{
			return function ()
			{
				for (let a = this.parentNode.children, b = a.length, c = 0; c < b; c++)
					if (a[c] == this) return c;
				return -1;
			};
		}
	},
	includeHTML:
	{
		get()
		{
			return function ()
			{
				ajax(
				{
					url: i
				}, function (a)
				{
					this.innerHTML = a;
				});
			};
		}
	},
	getElementsByAttribute:
	{
		get()
		{
			return function (c, d)
			{
				for (var e = this.getElementsByTagName('*'), f = [], g = 0, j = e.length; g < j; g++)
					d ? e[g].getAttribute(c) == d && f.push(e[g]) : e[g].getAttribute(c) && f.push(e[g]);
				return f;
			};
		}
	}
}), document.getElementsByAttribute = function (a, b)
{
	for (var c = document.getElementsByTagName('*'), d = [], e = 0, f = c.length; e < f; e++) b ? c[e].getAttribute(a) == b && d.push(c[e]) : c[e].getAttribute(a) && d.push(c[e]);
	return d;
};
const ajax = function (a, b)
{
	const c = b || function (j)
	{
		console.log(j);
	};
	if (!a.url) throw 'You gotta give an URL';
	const d = a.url,
		e = (a.method || 'GET').toUpperCase();
	let f,
		g = a.data;
	e == 'POST' && (h = typeof g === 'string' ? g : Object.keys(g).map(j => `${encodeURIComponent(j)}=${encodeURIComponent(g[j])}`).join('&')), (f = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP')).open(e, d), f.onreadystatechange = function ()
	{
		f.readyState > 3 && f.status == 200 && c(f.responseText);
	}, e == 'POST' && f.setRequestHeader('X-Requested-With', 'XMLHttpRequest'), f.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'), e == 'POST' ? f.send(h) : f.send();
};
Math.map = function (a, b, c, d, e)
{
	return (a - b) * (e - d) / (c - b) + d;
}, Math.constrain = function (a, b, c)
{
	return a < b ? b : a > c ? c : a;
}, Math.randomBetween = function (a, b, c)
{
	const d = Math.map(Math.random(), 0, 1, a, b);
	return c ? Math.floor(d) : d;
}, Script = function (a)
{
	this.scr = document.head.addChild('SCRIPT'), this.scr.innerHTML = a, this.innerHTML = a, this.src = null, this.update = function ()
	{
		this.scr.innerHTML = this.innerHTML;
		const b = this.scr.innerHTML;
		document.head.removeChild(this.scr), this.scr = document.createElement('script'), this.src ? this.scr.src = this.src : this.scr.innerHTML = b, document.head.appendChild(this.scr);
	}, this.update();
}, Css = function (a)
{
	this.css = document.head.addChild('style'), this.css.innerHTML = a, this.innerHTML = a, this.href = null, this.update = function ()
	{
		if (this.href) document.head.removeChild(this.css), this.css = document.createElement('link'), this.css.rel = 'stylesheet', this.css.type = 'text/css', this.css.href = this.href, this.css.media = 'all', document.head.appendChild(this.css);
		else
		{
			this.css.innerHTML = this.innerHTML;
			const b = this.css.innerHTML;
			document.head.removeChild(this.css), this.css = document.createElement('style'), this.css.innerHTML = b, document.head.appendChild(this.css);
		}
	}, this.update();
}, hide000ad = function ()
{
	new Css('div a img {visibility: hidden!important;}');
}, require = function a(b)
{
	switch (b)
	{
	case 'Jquery':
		if (!window.jQuery)
		{
			const e = new Script();
			e.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js', e.update();
		}
		break;
	case 'Bootstrap':
		window.jQuery || a('Jquery');
		var c = document.createElement('link');
		c.rel = 'stylesheet', c.type = 'text/css', c.href = 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css', c.media = 'all', document.head.appendChild(c);
		var d = new Script();
		d.src = 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js', d.update();
		break;
	default:
		ajax(
		{
			url: b
		}, e => e);
	}
};

function refresh()
{
	for (let a = get('*'), b = 0, c = a.length; b < c; b++) a[b].style.getProperty = function (d)
	{
		return this[d];
	};
}

function fileExt(a)
{
	return a.split('.').pop();
}
window.onload = function ()
{
	refresh(), document.body.addEventListener('change', refresh());
};
