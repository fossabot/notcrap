if (!window.notcrap) {
	let e = document.createElement("script");
	e.src = "https://bru02.000webhostapp.com/lib/notcrap.js",
	document.head.appendChild(e);
}

function setUpStorage() {
	return "undefined" != typeof Storage && (localStorage.polls || (localStorage.polls = "[]"),
		JSON.parse(localStorage.polls));
}

function vote(sel) {
	let t = get(sel, !0)[0],
	r = t.parentNode.parentNode.parentNode.parentNode,
	v = t.getAttribute("vote");
	if (setUpStorage()) {
		let arr = setUpStorage();
		arr.forEach(e => {
			e[0] == r.getAttribute("id") && ((a = r.querySelectorAll("input")).forEach(e => {
					e.setAttribute("disabled", "disabled");
				}), a[e[1]].setAttribute("checked", "checked"), v = -1);
		}),
		localStorage.polls = JSON.stringify(arr);
	}
	t.getAttribute("vote") && ajax({
		url: "https://bru02.000webhostapp.com/poll/polls.php",
		method: "POST",
		data: {
			vote: v,
			qId: r.getAttribute("id")
		}
	}, e => {
		let t = JSON.parse(e),
		i = [],
		o = 0,
		a = r.querySelectorAll(".vote-opt");
		t.forEach(e => {
			i.push(e[1]);
		}),
		(t = (e => {
				return percentile(percentile(i));
				function percentile(e) {
					if (!Array.isArray(e))
						return "err";
					var t = e,
					r = [],
					i = (e => {
						let t = 0;
						return e.forEach(e => {
							t += e;
						}),
						t;
					})(t);
					for (let e = 0, o = t.length; o > e; e++)
						t[e] = "Nan" == +t[e] ? 0 : t[e], r[e] = Math.round(100 / i * t[e]);
					return r;
				}
			})()).forEach(e => {
			let t = e;
			a[o].querySelector(".bar").setAttribute("value", t),
			a[o].querySelector(".bar").show(),
			(() => {
				for (let e = 0, t = document.querySelectorAll("quiz[id] div"), r = t.length; r > e; e++)
					move(t[e].children[0], t[e].getAttribute("value"));
				function move(e, t) {
					var r = 1,
					i = setInterval(() => {
							t > r ? (r++, e.style.width = r + "%") : clearInterval(i);
						}, 10);
				}
			})(),
			o++;
		}),
		(a = r.querySelectorAll("input")).forEach(e => {
			e.setAttribute("disabled", "disabled");
		});
		if (v > -1 && setUpStorage()) {
			let arr = setUpStorage();
			arr.push([r.getAttribute("id"), v]),
			localStorage.polls = JSON.stringify(arr);
		}
	});
}

window.addEventListener("load", () => {
	let e = new Css();
	e.innerHTML = "[type=radio]:checked,[type=radio]:not(:checked){position:absolute;left:-9999px}[type=radio]:checked+label,[type=radio]:not(:checked)+label{position:relative;padding-left:28px;cursor:pointer;line-height:20px;display:inline-block;color:#666}[type=radio]:checked+label:before,[type=radio]:not(:checked)+label:before{content:'';position:absolute;left:0;top:0;width:18px;height:18px;border:1px solid #ddd;border-radius:100%;background:#fff}[type=radio]:checked+label:after,[type=radio]:not(:checked)+label:after{content:'';width:12px;height:12px;background:#4a90ba;position:absolute;top:4px;left:4px;border-radius:100%;-webkit-transition:all .2s ease;transition:all .2s ease}[type=radio]:not(:checked)+label:after{opacity:0;-webkit-transform:scale(0);transform:scale(0)}[type=radio]:checked+label:after{opacity:1;-webkit-transform:scale(1);transform:scale(1)}*,:after,:before{box-sizing:content-box!important}.bar{width:100%;background-color:#ddd;max-width:200px;height:5px}.bar div{width:0%;height:5px;background-color:#4286f4;margin:unset}.vote-opt,quiz,quiz div div{border:1px gray;box-sizing:content-box!important;color:#000;display:block;font-family:Verdana,sans-serif;font-size:15px;line-height:22.5px;text-size-adjust:100%;margin:16px}quiz{background-color:#fff;height:211px;padding:.15px 16px}quiz div div{height:27px}.vote-opt{height:26.99px}",
	e.update();
	let t = document.querySelectorAll("quiz[id]"),
	r = {};
	for (let e = 0, i = t.length; i > e; e++) {
		r.id = e,
		r.data = t[e].getAttribute("id"),
		t[e].removeChildren();
		let i = t[e].addChild("P");
		ajax({
			url: "https://bru02.000webhostapp.com/poll/polls.php",
			method: "POST",
			data: {
				title: t[e].getAttribute("id")
			}
		}, e => {
			i.innerHTML = e;
		});
		let o = t[e].addChild("DIV");
		ajax({
			url: "https://bru02.000webhostapp.com/poll/polls.php",
			method: "POST",
			data: {
				q: t[e].getAttribute("id")
			}
		},
			el => {
			let da = JSON.parse(el),
			r = 0;
			if (da.forEach(ek => {
					let d = ek[0],
					i = generateId(20);
					o.addChild("div").innerHTML = ` <div class="vote-opt"><input type="radio" class="vote-btn" vote="${r}" onclick="vote(this)" id="${i}" name="radio-group"><label for="${i}">${d}</label><br><div class="bar" value="0" style="display:none;"><div></div>\n</div>`,
					r++;
				}),
				setUpStorage()) {
				let arr = setUpStorage();
				arr.forEach(n => {

					n[0] == t[e].getAttribute("id") && vote(t[e].querySelectorAll(".vote-opt")[0].firstChild);
				}),
				localStorage.polls = JSON.stringify(arr);
			}
		});
	}
	function generateId(e) {
		return Array(e + 1).join((Math.random().toString(36) + "00000000000000000").slice(2, 18)).slice(0, e);
	}
});
