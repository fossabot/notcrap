if (!window.notcrap) {
	let e = document.createElement("script");
	e.src = "https://bru02.000webhostapp.com/lib/notcrap.js",
	document.head.appendChild(e);
}
function scrollIt(destination, duration = 200, easing = "linear", callback) {
	const easings = {
		linear: t => t,
		easeInQuad: t => t * t,
		easeOutQuad: t => t * (2 - t),
		easeInOutQuad: t => .5 > t ? 2 * t * t : (4 - 2 * t) * t - 1,
		easeInCubic: t => t * t * t,
		easeOutCubic: t => --t * t * t + 1,
		easeInOutCubic: t => .5 > t ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
		easeInQuart: t => t * t * t * t,
		easeOutQuart: t => 1 - --t * t * t * t,
		easeInOutQuart: t => .5 > t ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t,
		easeInQuint: t => t * t * t * t * t,
		easeOutQuint: t => 1 + --t * t * t * t * t,
		easeInOutQuint: t => .5 > t ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t
	},
	start = window.pageYOffset,
	startTime = "now" in window.performance ? performance.now() : new Date().getTime(),
	documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight),
	windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName("body")[0].clientHeight,
	destinationOffset = "number" == typeof destination ? destination : destination.offsetTop,
	destinationOffsetToScroll = Math.round(windowHeight > documentHeight - destinationOffset ? documentHeight - windowHeight : destinationOffset);
	if ("requestAnimationFrame" in window == !1)
		return window.scroll(0, destinationOffsetToScroll),
		void(callback && callback());
	!function scroll() {
		const now = "now" in window.performance ? performance.now() : new Date().getTime(),
		time = Math.min(1, (now - startTime) / duration),
		timeFunction = easings[easing](time);
		window.scroll(0, Math.ceil(timeFunction * (destinationOffsetToScroll - start) + start)),
		window.pageYOffset !== destinationOffsetToScroll ? requestAnimationFrame(scroll) : callback && callback();
	}
	();
}
window.addEventListener("load", function () {
	for (let i = 0, a = document.querySelectorAll("a[href^='#']"), l = a.length; l > i; i++)
		a[i].addEventListener("click", function (event) {
			if ("" !== this.hash) {
				event.preventDefault();
				var hash = this.hash;
				scrollIt(document.querySelector(hash), 800, "easeOutQuad", () => {
					window.location.hash = hash;
				});
			}
		});
	let err;
	let a = new Css("input.invalid,input:invalid:not(:required) {background-color: #fdd}");
	for (let i = 0, arr = get("form", true), l = arr.length; i < l; i++) {
		if (arr[i].querySelectorAll("input[required]").length > 0) {
			arr[i].addEventListener("submit", function (event) {
				err = false;
				event.preventDefault();
				this.querySelectorAll("input[required]").forEach(function (e) {
					e.removeClass("invalid");
					if (e.value == "") {
						err = true;
						e.addClass("invalid");
					}
				});
				if (!err)
					this.submit();
			});

		}
		arr[i].querySelectorAll("input[required]").forEach(function (e) {
			e.removeClass("invalid");
		});
	}
});

get("select", true).forEach(e => {
	let el = e.parentNode.addChild("div");
	el.addClass("custom-select");
	el.appendChild(e)
});
(new Css(`.custom-select select,.select-hide{display:none}.custom-select{position:relative;font-family:Arial}.select-selected{background-color:#c4c8cc}.select-selected:after{position:absolute;content:"";top:14px;right:10px;width:0;height:0;border:6px solid transparent;border-color:#000 transparent transparent}.select-selected.select-arrow-active:after{border-color:transparent transparent #000;top:7px}.select-items div,.select-selected{//color:#fff;padding:8px 16px;border:1px solid transparent;border-color:transparent transparent rgba(0,0,0,.1);cursor:pointer;user-select:none}.select-items{position:absolute;background-color:#d4d8dd;top:100%;left:0;right:0;z-index:99}.select-items div:hover{background-color:rgba(0,0,0,.1)}`))

var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = get(".custom-select", true);
for (i = 0; i < x.length; i++) {
	selElmnt = x[i].getElementsByTagName("select")[0];
	/*for each element, create a new DIV that will act as the selected item:*/
	// a = document.createElement("DIV");
	a = x[i].addChild("DIV");
	a.addClass("select-selected");
	a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
	// x[i].appendChild(a);
	/*for each element, create a new DIV that will contain the option list:*/
	// b = document.createElement("DIV");
	b = x[i].addChild("DIV");
	b.setAttribute("class", "select-items select-hide");
	for (j = 0; j < selElmnt.length; j++) {
		/*for each option in the original select element,
		create a new DIV that will act as an option item:*/
		//c = document.createElement("DIV");
		c = b.addChild("DIV");
		c.innerHTML = selElmnt.options[j].innerHTML;
		c.addEventListener("click", function (e) {
			/*when an item is clicked, update the original select box,
			and the selected item:*/
			var i,
			s,
			h;
			s = this.parentNode.parentNode.getElementsByTagName("select")[0];
			h = this.parentNode.previousSibling;
			for (i = 0; i < s.length; i++) {
				if (s.options[i].innerHTML == this.innerHTML) {
					s.selectedIndex = i;
					h.innerHTML = this.innerHTML;
					break;
				}
			}
			h.click();
		});
		// b.appendChild(c);
	}
	// x[i].appendChild(b);
	a.addEventListener("click", function (e) {
		/*when the select box is clicked, close any other select boxes,
		and open/close the current select box:*/
		e.stopPropagation();
		closeAllSelect(this);
		this.nextSibling.toggleClass("select-hide");
		this.toggleClass("select-arrow-active");
	});
}
function closeAllSelect(elmnt) {
	/*a function that will close all select boxes in the document,
	except the current select box:*/
	var x,
	y,
	i,
	arrNo = [];
	x = get(".select-items", true);
	y = get(".select-selected", true);
	for (i = 0; i < y.length; i++) {
		if (elmnt == y[i]) {
			arrNo.push(i)
		} else {
			y[i].removeClass("select-arrow-active");
		}
	}
	for (i = 0; i < x.length; i++) {
		if (arrNo.indexOf(i)) {
			x[i].addClass("select-hide");
		}
	}
}
get("css", true).forEach((e) => {
	e.innerHTML.trim().split("}").forEach((r) => {
		let rules = r.trim().split("{");
		if(get(rules[0])) {
		get(rules[0]).setStyle(rules[1]);
		}
	});
});
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);
