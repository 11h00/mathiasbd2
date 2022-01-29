const CULER = new XMLHttpRequest();
var pgp;
var folo = 0;
var folo_count = 0;
var added_count = 0
var updatecount = 500
var useuname = 0;
var mileston = 0
var normaltheme = false;
var UPsound = new Audio("lesonn/up.mp3");

var badtheme = false;

let finaldate = new Date("Jan 29 2022 23:59:00 GMT+0100")

var santourianmathiasup = new Audio("lesonn/up.mp3");
var santourianmathiasdown = new Audio("lesonn/down.mp3?1");
var downsound = new Audio("lesonn/down.mp3?1");
let onputains = false

oldcount = 0;
let up1m = new Audio("lesonn/test/1m.mp3");
let up2m = new Audio("lesonn/test/2m.mp3");
let up3m = new Audio("lesonn/test/3m.mp3");
let up4m = new Audio("lesonn/test/4m.mp3");
let up5m = new Audio("lesonn/test/5m.mp3");
let up6m = new Audio("lesonn/test/6m.mp3");
let up7m = new Audio("lesonn/test/7m.mp3");
let up8m = new Audio("lesonn/test/8m.mp3");
let up9m = new Audio("lesonn/test/9.0m.mp3");
let up9_5m = new Audio("lesonn/test/9.5m.mp3");
let up10m = new Audio("lesonn/test/10m.mp3");
let up11m = new Audio("lesonn/test/11m.mp3");

let end = new Audio("lesonn/test/100m.mp3");

let playrate = 1;

function editsound(audio, rate) {
	let el = audio.cloneNode()
	el.preservesPitch = false
	el.playbackRate = rate
	return el;
}
function playsound(video) {
	if (video == 1) {
		editsound(new Audio("lesonn/test/99999999.mp3"), playrate).play()
	} else if (video == 2) {
		editsound(new Audio("lesonn/test/99999998.mp3"), playrate).play()
	} else if (video >= 3 && video < 1000) {
		editsound(santourianmathiasup, playrate).play()
	} else if (video >= 1000 && video < 2000) {
		editsound(up1m, playrate).play()
	} else if (video >= 2000 && video < 3000) {
		editsound(up2m, playrate).play()
	} else if (video >= 3000 && video < 4000) {
		editsound(up3m, playrate).play()
	} else if (video >= 4000 && video < 5000) {
		editsound(up4m, playrate).play()
	} else if (video >= 5000 && video < 6000) {
		editsound(up5m, playrate).play()
	} else if (video >= 6000 && video < 7000) {
		editsound(up6m, playrate).play()
	} else if (video >= 7000 && video < 8000) {
		editsound(up7m, playrate).play()
	} else if (video >= 8000 && video < 9000) {
		editsound(up8m, playrate).play()
	} else if (video >= 9000 && video < 9500) {
		editsound(up9m, playrate).play()
	} else if (video >= 9500 && video < 10000) {
		editsound(up9_5m, playrate).play()
	} else if (video >= 10000 && video < 11000) {
		editsound(up10m, playrate).play()
	} else if (video >= 11000 && video < 12000) {
		editsound(up11m, playrate).play()
	} else {
		editsound(santourianmathiasup, playrate).play()
	}
}
function normalthemechange() {
	if (normaltheme != true) {
		$('#bad1').css({ '-webkit-transform': 'rotate(0deg)' })
		$('#bad1').css('background', 'black')
		$('#odometer').css('color', 'white')
		$('div').css({ '-webkit-transform': 'rotate(0deg)' })
		$('p').css({ '-webkit-transform': 'rotate(0deg)' })
		$('h1').css({ '-webkit-transform': 'rotate(0deg)' })
		$('h1').css('color', 'white')
		normaltheme = true
	}
}
function tg() {
	setTimeout(function () {
		folo = parseInt(((finaldate.getTime() / 1000 - new Date().getTime() / 1000)));
		if (folo <= 0){
			folo = 0
			onputains = true
		}
		if (!onputains){
			if (folo > oldcount) {
				normalthemechange();
				playsound(folo)
			}
			if (folo < oldcount) {
				normalthemechange();
				playsound(folo)
			}
		}else{
			odometer.innerHTML = 0;
			normalthemechange()
			editsound(new Audio("lesonn/test/100000000.mp3"), .75).play()
			$('#odometer').css('color', 'cyan')
			$('#bad1').css('background', 'white');
			$('#bad1').css('border', 'solid 5px cyan');
			$('#bad1').css('padding', '5px');
			$("#coconu").css("color", "black");
			$("#coconu")[0].innerHTML = "mathias has 20 since:"
			folo = parseInt(-((finaldate.getTime() / 1000 - new Date("GMT+0100").getTime() / 1000)));
			odometer.innerHTML = folo;
			mathias_got_20()
		}
		oldcount = folo
		odometer.innerHTML = folo;
		if (!onputains) tg();
	}, updatecount)
}
function mathias_got_20(){
	setInterval(() => {
		folo = parseInt(-((finaldate.getTime() / 1000 - new Date("GMT+0100").getTime() / 1000)));
		editsound(end, .75).play()
		odometer.innerHTML = folo;
	}, 1000);
}
tg();