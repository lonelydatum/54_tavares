import {olg} from "./proline"
import {origin} from "./helpers/helpers.js"
const banner = document.getElementById('banner')
const bannerSize = {w:banner.offsetWidth, h:banner.offsetHeight}

gsap.defaults({
  ease: "power3.out"
});

const read = {
	percentGoBack: 2.5,
	betOnNFL: 2.2, 
	njasb: 2,
	losingBy: 2.5
}

const {w, h} = bannerSize

function logoFader(){
	const tl = new TimelineMax()
	tl.to(".logo1", {duration:.2, opacity:0}, "+=.5")
	return tl
}

function bgFadeOut(read){
	const tl = new TimelineMax()
	tl.to([ ".bg", ".t1"], {duration:.2, opacity:0}, `+=${read}`)
	return tl
}

function fader(el, time){
	const tl = new TimelineMax()
	tl.from(el, {duration:.3, opacity:0}, "+=.2")
	tl.to(el, {duration:.3, opacity:0}, `+=${time}`)
	return tl
}

function ender(){
	const tl = new TimelineMax()
	tl.from([".t3", ".logo3"], {duration:.3, opacity:0}, "+=.2")
	tl.from([".footer", ".cta"], {duration:.3, opacity:0}, "+=.5")
	
	return tl	
}


function init(){	
	const tl = new TimelineMax({onComplete:()=>{
		if(document.getElementById("legalBtn")){			
			TweenLite.set("#legalBtn", {display:"block"})
		}
	}})
	tl.set(".frame1", {opacity:1})
	if(window.universalBanner.name==="hockey"){
		
		document.getElementById("legalContent").innerHTML = "NHL, the NHL Shield are registered trademarks of the National Hockey League. NHL and NHL team marks are the property of the NHL and its teams. © NHL 2022. All Rights Reserved. <br> Terms and Conditions apply.  Individuals must be 19 years of age or older to participate in online sports betting made available by OLG. Must be a resident of Ontario located in the province at the time of registration, where applicable, and play."
	}else if(window.universalBanner.name==="baseball"){
		document.getElementById("legalContent").innerHTML =  "Terms and conditions apply.  Individuals must be 19 years of age or older to participate in online sports betting made available by OLG.  Must be a resident of Ontario located in the province at the time of registration, where applicable, and play. Major League Baseball trademarks and copyrights are used with permission of Major League Baseball. Visit MLB.com"
	}else if(window.universalBanner.name==="basketball"){
		document.getElementById("legalContent").innerHTML =  "Terms and conditions apply.  Individuals must be 19 years of age or older to participate in online sports betting made available by OLG.  Must be a resident of Ontario located in the province at the time of registration, where applicable, and play. The NBA and individual NBA member team identifications are the intellectual property of NBA Properties, Inc. and the respective NBA member teams. (c) 2022 NBA Properties, Inc. All rights reserved."
	}
	return tl
}




function slider(read=2){	
	const tl = new TimelineMax()
	

	tl.add("t1", "+=.3")
	tl.from(".t1a", {duration:.2, x:"+=130", y:"-=30", opacity:0}, "t1")
	tl.from(".t1b", {duration:.2, x:"-=130", y:"+=30", opacity:0}, "t1+=.6")

	
	
	
	return tl
}

function t1(){
	const tl = new TimelineMax()
	tl.to(".t1", {duration:.26, opacity:0}, "+=1")
	tl.from(".t1c", {duration:.26, opacity:0}, "+=.1")

	tl.add("t1-out", "+=2")
	tl.to(".t1c", {duration:.26, opacity:0}, "t1-out")
	tl.to(".hero", {duration:.26, opacity:0}, "t1-out")
	tl.from(".bg-dark", {duration:.26, opacity:0}, "t1-out")
	return tl
}

function t2(){
	const tl = new TimelineMax()

	tl.from(".logo2", {duration:.3, opacity:0}, "+=.1")
	tl.from(".t2", {duration:.3, opacity:0}, "+=.3")
	tl.to(".t2", {duration:.3, opacity:0}, "+=2.5")

	tl.from(".t3", {duration:.3, opacity:0}, "+=.3")
	tl.to([".t3", ".logo2"], {duration:.3, opacity:0}, "+=2")

	tl.from(".nhl", {duration:.3, opacity:0}, "+=.3")
	tl.to(".nhl", {duration:.3, opacity:0}, "+=1.5")

	tl.from(".end", {duration:.3, opacity:0}, "+=.3")
	tl.from(".footer", {duration:.3, opacity:0}, "+=.3")
	
	
	tl.add(olg())
	return tl
}

function standard(){	
	const tl = init()	
	tl.from(".logo1", {duration:.3, x:"-=50", opacity:0}, "+=.1")	
	tl.to(".logo1", {duration:.3, opacity:0}, "+=1")	
	tl.add(slider())
	tl.add(t1())
	tl.add(t2())
	return tl
}

function b_970x250(){
	standard()
}

function b_160x600(){
	standard()
}

function b_300x250(){		
	standard()
}

function b_300x600(){		
	standard()
}

function b_1000x700(){	
	standard()
}

function b_970x70(){


}

function b_320x50(){
	
}

function b_728x90(text1){
	const tl = init()	
	tl.from(".logo1", {duration:.3, x:"-=50", opacity:0}, "+=.1")	
	tl.to(".logo1", {duration:.3, opacity:0}, "+=1")	
	
	
	tl.from(".t1a", {duration:.2, opacity:0}, "+=.2")
	tl.to(".t1a", {duration:.2, opacity:0}, "+=2")
	tl.from(".t1c", {duration:.2, opacity:0}, "+=.2")
	tl.to(".t1c", {duration:.2, opacity:0}, "+=1.5")

	tl.to(".hero", {duration:.26, opacity:0}, "t1-out")
	tl.from(".bg-dark", {duration:.26, opacity:0}, "t1-out")
	
	tl.add(t2())
	return tl
}

export { init, b_160x600, b_300x250, b_300x600, b_320x50, b_728x90, b_970x250, b_1000x700,b_970x70, origin, standard, read, slider, ender, logoFader, bgFadeOut }