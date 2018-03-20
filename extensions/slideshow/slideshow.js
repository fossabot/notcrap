if (!window.notcrap) {
	const e = document.createElement('script');
	e.src = 'https://bru02.000webhostapp.com/lib/notcrap.js',
	document.head.appendChild(e);
}

let k,
h;

window.Slides = {
	version: '0.1.5',
};

var slidesrc,
a,
slidecss,
SlideShow = function () {
	this.started = false,
	this.options = {
		slides_place: '',
		delay: null,
		canControlarrows: true,
		hideOnMouseOut: true,
		arrows: {
			areThey: true,
			hover_backgroundColor: '#f0e68c',
			hover_color: '#000',
			backgroundColor: '#fff',
			color: '#000',
		},
		dots: {
			areThey: true,
			color: 'transparent',
			hover_color: '#fff',
			slctd_color: '#fff',
			border_color: '#ccc',
		},
		slides: {
			className: 'mySlides',
			inDIV: false,
			slides_src: [],
		},
	},
	this.slide = [],
	this.start = function (t, place) {
		if (this.started) {
			if (this.options.delay) {
				new Script(`${this.options.slides.className}_plusDivs(1);`).remove();
			}
		} else {
			ready(this.init(t, place));
		}
	},
	this.init = function (t, place) {
		if (document.body) {
			if (place && (this.options.slides_place = place), this.started) {
				this.options.delay ? window.onblured = false : console.log('What the hell');
			} else {
				get(t, true) && typeof(get(t, true)) === 'object' && !Array.isArray(t) && (this.options.slides.className = t),
				Array.isArray(t) && this.options.slides.slides_src.push(...t);
				let s,
				e = this.options.slides_place,
				i = get(e, true)[0] || document.body;
				const o = i.addChild('div');
				o.addClass(`${this.options.slides.className}-container`),
				o.setAttribute('style', 'max-width:800px'),
				this.options.hideOnMouseOut &&
				(o.setAttribute('onmouseover', `get('.${this.options.slides.className}-nav-container',true)[0].style.opacity="1";`),
					o.setAttribute('onmouseout', `get('.${this.options.slides.className}-nav-container',true)[0].style.opacity="0";`));
				// aChild(i, o);
				for (var n = this.options.slides.slides_src.length, j = 0; n > j; j++) {
					(s = o.addChild('img')).src = this.options.slides.slides_src[j],
					s.addClass(this.options.slides.inDIV ? 'temp' : `${this.options.slides.className}`);
					o.appendChild(s);
				}

				for (this.slide = get(`.temp,.${this.options.slides.className}`, true),
					n = this.slide.length, t = 0; n > t; t++) {
					this.options.slides.inDIV ? ((a = o.addChild('div')).addClass(this.options.slides.className),
						i = a) : i = o,
					i.appendChild(this.slide[t]);
				}
				if (this.options.dots.areThey || this.options.arrows.areThey) {
					const l = o.addChild('div');
					l.addClass(`${this.options.slides.className}-nav-container`);
					if (this.options.dots.areThey) {
						var a;
						for (t = 0, n = this.slide.length; n > t; t++) {
							k = this.options.slides.className,
							(a = l.addChild('span')).className = `${k}-dotz`,
							a.setAttribute('onclick', `${k}_currentDiv(${t + 1});`);
						}
						// aChild(l, a);
					}
					if (this.options.arrows.areThey) {
						k = this.options.slides.className,
						l.className = `${k}-nav-container`,
						l.setAttribute('style', 'width:100%'),
						// aChild(o, l),
						this.options.arrows.areThey && ((a = l.addChild('div')).className = `${k}-left-arrow`,
							a.innerHTML = '&#10094;', a.setAttribute('onclick', `${k}_plusDivs(-1);`),
							// aChild(l, a),
							(a = l.addChild('div')).className = `${k}-right-arrow`),
						a.innerHTML = '&#10095;',
						a.setAttribute('onclick', `${k}_plusDivs(1);`);
						// aChild(l, a),
					}
					this.options.hideOnMouseOut && (l.style.opacity = '0');
				}
				a = this.options.slides.className,
				slidecss = new Css(),
				slidesrc = new Script(),
				a = this.options.slides.className,
				e = '@-webkit-keyframes opac{from{opacity:0}to{opacity:1}}@keyframes opac{from{opacity:0}to{opacity:1}}',
				this.options.dots.areThey && (e += `.${a}-dotz{cursor:pointer;height:13px;padding:0 8px;border:1px solid ${this.options.dots.border_color};background-color:${this.options.dots.color};border-radius:50%;display:inline-block;text-align:center;-webkit-transition:background-color .25s,color .15s,box-shadow .25s,opacity .25s,filter .25s,border .15s;transition:background-color .25s,color .15s,box-shadow .15s,opacity .25s,filter .25s,border .15s}  .${a}-dotz-selected{background-color:${this.options.dots.slctd_color}}    .${a}-dotz:hover{background-color:${this.options.dots.hover_color}}`),
				this.options.arrows.areThey && (e += `.${a}-left-arrow,.${a}-right-arrow{background-color: ${this.options.arrows.backgroundColor};border:0;display:inline-block;outline:0;vertical-align:middle;overflow:hidden;text-decoration:none!important;cursor:pointer;white-space:nowrap;top:50%;-webkit-touch-callout:none;-khtml-user-select:none;padding:8px 16px;-webkit-transition:background-color .25s,color .15s,box-shadow .25s,opacity .25s,filter .25s,border .15s;transition:background-color .25s,color .15s,box-shadow .15s,opacity .25s,filter .25s,border .15s;position:relative;text-align:center}  .${a}-left-arrow:hover,.${a}-right-arrow:hover{color:${this.options.arrows.hover_color};background-color:${this.options.arrows.hover_backgroundColor}}  .${a}-left-arrow{border-radius: 0px 15px 15px 0px;float: left;transform:translate(0,-50%);-ms-transform:translate(0,-50%);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:${this.options.arrows.color}}  .${a}-right-arrow{border-radius: 15px 0px 0px 15px;color:${this.options.arrows.color};float: right;transform:translate(0,-50%);-ms-transform:translate(0,-50%);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}`),
				(this.options.dots.areThey || this.options.arrows.areThey) && (e += `.${a}-nav-container{width:100%;max-width:800px;color:#fff!important;padding:.01em 16px;margin-top:16px!important;margin-bottom:16px!important;position:absolute;left:50%;bottom:0;transform:translate(-50%,0);-ms-transform:translate(-50%,0);text-align:center;font-size:18px-webkit-transition: all 0.25s; transition: all 0.25s;}`),
				e += `.${a},.temp{width:100%;-webkit-animation:opac .8s;animation:opac .8s;margin-bottom:-5px;border-style:none;vertical-align: middle;}.${a}-container{max-width: 800px;position:relative;margin: auto;padding:.01em 16px;}`,
				slidecss.innerHTML = e,
				slidecss.update(),
				e = `"use strict";var ${a}_slideIndex=${k = this.options.delay ? this.slide.length : 1},${a}_plusDivs=function(e){${a}_showDivs(${a}_slideIndex+=e);},${a}_currentDiv=function(e){${a}_showDivs(${a}_slideIndex=e)},${a}_showDivs=function(e){var s=void 0,l=document.getElementsByClassName("${a}");`,
				this.options.dots.areThey && (e += ` var d=document.getElementsByClassName("${a}-dotz");`),
				e += `for(e>l.length&&(${a}_slideIndex=1),1>e&&(${a}_slideIndex=l.length),s=0;s<l.length;s++)    l[s].style.display="none";`,
				this.options.dots.areThey && (e += `for(s=0;s<d.length;s++)   d[s].classList.remove("${a}-dotz-selected");  d[${a}_slideIndex-1].classList.add("${a}-dotz-selected");`),
				e += `l[${a}_slideIndex-1].style.display="block";}; ${a}_plusDivs(0);`,
				this.options.delay && (e += `${a}_carousel();  function ${a}_carousel() { ${a}_plusDivs(1); if(!window.onblured)setTimeout(${a}_carousel, ${this.options.delay});  }  window.onblur = function () {window.onblured = true;};  window.onfocus = function () {window.onblured = false;  ${a}_carousel();};  document.onblur = window.onblur;  document.focus = window.focus;`),
				this.options.canControlarrows && (e += `document.onkeydown = (function(e) {    e = e || window.event;     if (e.keyCode == '37') {       ${a}_plusDivs(-1);    }    else if (e.keyCode == '39') {      ${a}_plusDivs(1);    }});`),
				slidesrc.innerHTML = e,
				slidesrc.update(),
				this.started = true;
			}
		}
	},
	this.stop = function () {
		this.options.delay && (window.onblured = true);
	};
};
