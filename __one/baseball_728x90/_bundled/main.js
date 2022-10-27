(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _proline = require("./proline");

var _helpersHelpersJs = require("./helpers/helpers.js");

var banner = document.getElementById('banner');
var bannerSize = { w: banner.offsetWidth, h: banner.offsetHeight };

gsap.defaults({
	ease: "power3.out"
});

var read = {
	percentGoBack: 2.5,
	betOnNFL: 2.2,
	njasb: 2,
	losingBy: 2.5
};

var w = bannerSize.w;
var h = bannerSize.h;

function logoFader() {
	var tl = new TimelineMax();
	tl.to(".logo1", { duration: .2, opacity: 0 }, "+=.5");
	return tl;
}

function bgFadeOut(read) {
	var tl = new TimelineMax();
	tl.to([".bg", ".t1"], { duration: .2, opacity: 0 }, "+=" + read);
	return tl;
}

function fader(el, time) {
	var tl = new TimelineMax();
	tl.from(el, { duration: .3, opacity: 0 }, "+=.2");
	tl.to(el, { duration: .3, opacity: 0 }, "+=" + time);
	return tl;
}

function ender() {
	var tl = new TimelineMax();
	tl.from([".t3", ".logo3"], { duration: .3, opacity: 0 }, "+=.2");
	tl.from([".footer", ".cta"], { duration: .3, opacity: 0 }, "+=.5");
	tl.add((0, _proline.olg)());
	return tl;
}

function init() {
	var tl = new TimelineMax({ onComplete: function onComplete() {
			if (document.getElementById("legalBtn")) {
				TweenLite.set("#legalBtn", { display: "block" });
			}
		} });
	tl.set(".frame1", { opacity: 1 });
	if (window.universalBanner.name === "hockey") {

		document.getElementById("legalContent").innerHTML = "Terms and conditions apply.  Individuals must be 19 years of age or older to participate in online sports betting made available by OLG.  Must be a resident of Ontario located in the province at the time of registration, where applicable, and play. © NHL 2022.  All Rights Reserved.";
	} else if (window.universalBanner.name === "baseball") {
		document.getElementById("legalContent").innerHTML = "Terms and conditions apply.  Individuals must be 19 years of age or older to participate in online sports betting made available by OLG.  Must be a resident of Ontario located in the province at the time of registration, where applicable, and play. Major League Baseball trademarks and copyrights are used with permission of Major League Baseball. Visit MLB.com";
	}
	return tl;
}

function slider() {
	var read = arguments.length <= 0 || arguments[0] === undefined ? 2 : arguments[0];

	var tl = new TimelineMax();
	tl.add(logoFader());

	tl.add("t1");
	tl.from(".t1a", { duration: .26, x: "-=130", y: "+=30", opacity: 0 }, "t1");
	tl.from(".t1b", { duration: .26, x: "+=130", y: "-=30", opacity: 0 }, "t1+=.6");

	tl.add(bgFadeOut(read));
	return tl;
}

function standard() {
	var tl = init();
	tl.add(slider(), "+=.5");
	tl.from(".logo2", { duration: .3, opacity: 0 }, "+=.1");
	tl.from(".t2", { duration: .3, opacity: 0 }, "+=.3");
	tl.to(".text2", { duration: .2, opacity: 0 }, "+=" + read.njasb);
	if (document.querySelector(".t2b")) {
		tl.add(fader(".t2b", read.betOnNFL));
	}
	tl.add(ender());
	return tl;
}

function b_970x250() {
	b_728x90();
}

function b_160x600() {
	standard();
}

function b_300x250() {
	standard();
}

function b_300x600() {
	standard();
}

function b_1000x700() {
	standard();
}

function b_970x70() {

	var tl = new TimelineMax();
	tl.add("t1");
	tl.from(".t1a", { duration: .11, y: "-=50" }, "t1");
	b_728x90(tl);
}

function b_320x50() {

	var tl = new TimelineMax();
	tl.add("t1");
	tl.from(".t1a", { duration: .2, x: "-=180" }, "t1");
	tl.from(".t1b", { duration: .2, x: "+=180" }, "t1");
	b_728x90(tl);
}

function b_728x90(text1) {

	var tl = init();
	if (text1) {
		tl.add(logoFader());
		tl.add(text1, "+=.5");
		tl.add(bgFadeOut(2));
	} else {
		tl.add(slider(), "+=.5");
	}

	tl.add(fader(".t2", read.percentGoBack));
	if (document.querySelector(".t2b")) {
		tl.add(fader(".t2b", read.betOnNFL));
	}

	tl.add(ender());
}

exports.init = init;
exports.b_160x600 = b_160x600;
exports.b_300x250 = b_300x250;
exports.b_300x600 = b_300x600;
exports.b_320x50 = b_320x50;
exports.b_728x90 = b_728x90;
exports.b_970x250 = b_970x250;
exports.b_1000x700 = b_1000x700;
exports.b_970x70 = b_970x70;
exports.origin = _helpersHelpersJs.origin;
exports.standard = standard;
exports.read = read;
exports.slider = slider;
exports.ender = ender;
exports.logoFader = logoFader;
exports.bgFadeOut = bgFadeOut;

},{"./helpers/helpers.js":2,"./proline":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
function origin(el, x, y) {
	TweenLite.set(el, { transformOrigin: x + "px " + y + "px", x: -x / 2 + "px", y: -y / 2 + "px", scale: .5 });
}

exports.origin = origin;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

CustomEase.create("custom", "M0,0 C0.14,0 0.234,0.438 0.264,0.561 0.305,0.728 0.4,1.172 0.55,1.172 0.652,1.172 0.722,1.102 0.77,1.024 0.834,0.93 0.89,0.946 0.916,0.946 0.952,0.946 1,1 1,1 ");

function olg() {
    TweenLite.set("#olg", { opacity: 1 });
    var tl = new TimelineMax();

    tl.to("#bluewedge1", { duration: .5, ease: 'power1.inOut', scaleY: 1, scale: 1, x: 0, y: 0 }, 0);
    tl.to("#redwedge1", { duration: .8, ease: 'power1.inOut', scaleY: 1, scale: 1, x: 0, y: 0 }, 0).from('#group-o', { duration: 1, y: 200, ease: "custom" }, 0).from('#group-l', { duration: 1, y: 200, ease: "custom" }, .1).from('#group-g', { duration: 1, y: 200, ease: "custom" }, .2).from('#group-o', { duration: .8, scale: .4, ease: "power1.out" }, .3).from('#group-l', { duration: .8, scale: .4, ease: "power1.out" }, .4).from('#group-g', { duration: .8, scale: .4, ease: "power1.out" }, .5).from('#letter-o', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '28pt 75pt' }, .9).from('#letter-l', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '55pt 75pt' }, 1).from('#letter-g', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '80pt 75pt' }, 1.1);

    // tl.timeScale(2)

    return tl;
}

exports.olg = olg;

},{}],4:[function(require,module,exports){
"use strict";

var _commonJsCommonJs = require('../../_common/js/common.js');

var tl = new TimelineMax();
tl.add("t1");
tl.from(".t1a", { duration: .17, y: "-=50" }, "t1");
tl.from(".t1b", { duration: .17, y: "+=50" }, "t1+=.4");

(0, _commonJsCommonJs.b_728x90)(tl);

},{"../../_common/js/common.js":1}]},{},[4])


//# sourceMappingURL=main.js.map
