console.log(screen.width);
var phone=false;
function phoneCheck(){
	if(screen.width<1000){
		document.body.style.backgroundImage="url(Phone.jpg)";
		phone=true;
	}
	else{
		document.body.style.backgroundImage="url(Odyssey.jpg)";
	}
}
phoneCheck();
var body=document.getElementsByTagName("body");
var mode="time";
var music=document.getElementById("music");
var pickFrom=[
	{
		start:{
			min:0,
			hour:0,
		},
		source:'lakeund.mp3',
		back:'LakeKingdom.jpg',
	},
	{
		start:{
			min:24,
			hour:0,
		},
		source:'anowor.mp3',
		back:'Odyssey.jpg',
	},
	{
		start:{
			min:48,
			hour:0,
		},
		source:'hon.mp3',
		back:'MoonKingdom.jpg',
	},
	{
		start:{
			min:12,
			hour:1,
		},
		source:'lake1.mp3',
		back:'LakeKingdom.jpg',
	},
	{
		start:{
			min:36,
			hour:1,
		},
		source:'tostnight.mp3',
		back:'SandKingdom.jpg',
	},
	{
		start:{
			min:0,
			hour:2,
		},
		source:'tostnightchip.mp3',
		back:'SandKingdom.jpg',
	},
	{
		start:{
			min:24,
			hour:2,
		},
		source:'honchip.mp3',
		back:'MoonKingdom.jpg',
	},
	{
		start:{
			min:48,
			hour:2,
		},
		source:'bubund.mp3',
		back:'SeasideKingdom.jpg',
	},
	{
		start:{
			min:12,
			hour:3,
		},
		source:'bubchip.mp3',
		back:'SeasideKingdom.jpg',
	},
	{
		start:{
			min:36,
			hour:3,
		},
		source:'ruins.mp3',
		back:'SandKingdom.jpg',
	},
	{
		start:{
			min:0,
			hour:4,
		},
		source:'ruinschip.mp3',
		back:'SandKingdom.jpg',
	},
	{
		start:{
			min:24,
			hour:4,
		},
		source:'bowchip.mp3',
		back:'BowsersKingdom.jpg',
	},
	{
		start:{
			min:48,
			hour:4,
		},
		source:'forchip2.mp3',
		back:'LostKingdom.jpg',
	},
	{
		start:{
			min:12,
			hour:5,
		},
		source:'sub2.mp3',
		back:'SandKingdom.jpg',
	},
	{
		start:{
			min:36,
			hour:5,
		},
		source:'lakechip.mp3',
		back:'LakeKingdom.jpg',
	},
	{
		start:{
			min:0,
			hour:6,
		},
		source:'lullaby.mp3',
		back:'DarkSide.jpg',
	},
	{
		start:{
			min:24,
			hour:6,
		},
		source:'bonneton.mp3',
		back:'CapKingdom.jpg',
	},
	{
		start:{
			min:48,
			hour:6,
		},
		source:'dino.mp3',
		back:'CascadeKingdom.jpg',
	},
	{
		start:{
			min:12,
			hour:7,
		},
		source:'duel.mp3',
		back:'Odyssey.jpg',
	},
	{
		start:{
			min:36,
			hour:7,
		},
		source:'honchip.mp3',
		back:'MoonKingdom.jpg',
	},
	{
		start:{
			min:0,
			hour:8,
		},
		source:'caves.mp3',
		back:'CapKingdom.jpg',
	},
	{
		start:{
			min:24,
			hour:8,
		},
		source:'peach.mp3',
		back:'MushroomKingdom.jpg',
	},
	{
		start:{
			min:48,
			hour:8,
		},
		source:'proj.mp3',
		back:'MetroKingdom.jpg',
	},
	{
		start:{
			min:12,
			hour:9,
		},
		source:'steamchip.mp3',
		back:'WoodedKingdom.jpg',
	},
	{
		start:{
			min:36,
			hour:9,
		},
		source:'steamgar.mp3',
		back:'WoodedKingdom.jpg',
	},
	{
		start:{
			min:0,
			hour:10,
		},
		source:'donkday.mp3',
		back:'MetroKingdom.jpg',
	},
	{
		start:{
			min:24,
			hour:10,
		},
		source:'fossil.mp3',
		back:'CascadeKingdom.jpg',
	},
	{
		start:{
			min:48,
			hour:10,
		},
		source:'fosschip.mp3',
		back:'CascadeKingdom.jpg',
	},
	{
		start:{
			min:12,
			hour:11,
		},
		source:'nextking.mp3',
		back:'Odyssey.jpg',
	},
	{
		start:{
			min:36,
			hour:11,
		},
		source:'shivtown.mp3',
		back:'SnowKingdom.jpg',
	},
	{
		start:{
			min:0,
			hour:12,
		},
		source:'shivrace.mp3',
		back:'SnowKingdom.jpg',
	},
	{
		start:{
			min:24,
			hour:12,
		},
		source:'sherm.mp3',
		back:'WoodedKingdom.jpg',
	},
	{
		start:{
			min:48,
			hour:12,
		},
		source:'tostruins.mp3',
		back:'SandKingdom.jpg',
	},
	{
		start:{
			min:12,
			hour:13,
		},
		source:'tosttown.mp3',
		back:'SandKingdom.jpg',
	},
	{
		start:{
			min:36,
			hour:13,
		},
		source:'volchip.mp3',
		back:'LuncheonKingdom.jpg',
	},
	{
		start:{
			min:0,
			hour:14,
		},
		source:'voltown.mp3',
		back:'LuncheonKingdom.jpg',
	},
	{
		start:{
			min:24,
			hour:14,
		},
		source:'volbono.mp3',
		back:'LuncheonKingdom.jpg',
	},
	{
		start:{
			min:48,
			hour:14,
		},
		source:'tostchip.mp3',
		back:'SandKingdom.jpg',
	},
	{
		start:{
			min:12,
			hour:15,
		},
		source:'jaxi.mp3',
		back:'SandKingdom.jpg',
	},
	{
		start:{
			min:36,
			hour:15,
		},
		source:'rjt2.mp3',
		back:'Odyssey.jpg',
	},
	{
		start:{
			min:0,
			hour:16,
		},
		source:'rjtchip.mp3',
		back:'Odyssey.jpg',
	},
	{
		start:{
			min:24,
			hour:16,
		},
		source:'rjt1.mp3',
		back:'Odyssey.jpg',
	},
	{
		start:{
			min:48,
			hour:16,
		},
		source:'race.mp3',
		back:'Odyssey.jpg',
	},
	{
		start:{
			min:12,
			hour:17,
		},
		source:'credits.mp3',
		back:'Heroic.jpg',
	},
	{
		start:{
			min:36,
			hour:17,
		},
		source:'toad.mp3',
		back:'Odyssey.jpg',
	},
	{
		start:{
			min:0,
			hour:18,
		},
		source:'superchip.mp3',
		back:'MetroKingdom.jpg',
	},
	{
		start:{
			min:24,
			hour:18,
		},
		source:'donkband.mp3',
		back:'MetroKingdom.jpg',
	},
	{
		start:{
			min:48,
			hour:18,
		},
		source:'rc.mp3',
		back:'MetroKingdom.jpg',
	},
	{
		start:{
			min:12,
			hour:19,
		},
		source:'shop.mp3',
		back:'Odyssey.jpg',
	},
	{
		start:{
			min:36,
			hour:19,
		},
		source:'cafe.mp3',
		back:'MetroKingdom.jpg',
	},
	{
		start:{
			min:0,
			hour:20,
		},
		source:'wed.mp3',
		back:'MoonKingdom.jpg',
	},
	{
		start:{
			min:24,
			hour:20,
		},
		source:'projund.mp3',
		back:'MetroKingdom.jpg',
	},
	{
		start:{
			min:48,
			hour:20,
		},
		source:'sub1.mp3',
		back:'Odyssey.jpg',
	},
	{
		start:{
			min:12,
			hour:21,
		},
		source:'ice.mp3',
		back:'SnowKingdom.jpg',
	},
	{
		start:{
			min:36,
			hour:21,
		},
		source:'sub2.mp3',
		back:'SandKingdom.jpg',
	},
	{
		start:{
			min:0,
			hour:22,
		},
		source:'lake2.mp3',
		back:'LakeKingdom.jpg',
	},
	{
		start:{
			min:24,
			hour:22,
		},
		source:'lakechip.mp3',
		back:'LakeKingdom.jpg',
	},
	{
		start:{
			min:48,
			hour:22,
		},
		source:'for2.mp3',
		back:'LostKingdom.jpg',
	},
	{
		start:{
			min:12,
			hour:23,
		},
		source:'bowcast1.mp3',
		back:'BowsersKingdom.jpg',
	},
	{
		start:{
			min:36,
			hour:23,
		},
		source:'bub.mp3',
		back:'SeasideKingdom.jpg',
	},
];
var creepers=[
	'for1.mp3',
	'donknight1.mp3',
	'donknight2.mp3',
	'honcave.mp3',
	'honcoll.mp3',
	'honcollchip.mp3',
	'broodals.mp3',
	'broode.mp3',
	'knuckle.mp3',
	'tork.mp3',
	'wiggler.mp3',
	'lanceur.mp3',
	'lanceurchip.mp3',
	'cookatiel.mp3',
	'dragon.mp3',
	'bow1.mp3',
	'bow2.mp3',
	'mech.mp3',
	'bowcast2.mp3',
];
var mans=[
	{
		title:'Credits Theme',
		source:'credits.mp3',
	},
	{
		title:'Bonneton',
		source:'bonneton.mp3',
	},
	{
		title:'Fossil Falls',
		source:'fossil.mp3',
	},
	{
		title:'Fossil Falls 8-Bit',
		source:'fosschip.mp3',
	},
	{
		title:'Dinosaur',
		source:'dino.mp3',
	},
	{
		title:'Tostarena Ruins',
		source:'tostruins.mp3',
	},
	{
		title:'Tostarena Ruins 8-Bit',
		source:'tostchip.mp3',
	},
	{
		title:'Tostarena Night',
		source:'tostnight.mp3',
	},
	{
		title:'Tostarena Night 8-Bit',
		source:'tostnightchip.mp3',
	},
	{
		title:'Tostarena Town',
		source:'tosttown.mp3',
	},
	{
		title:'Jaxi',
		source:'jaxi.mp3',
	},
	{
		title:'Steam Gardens',
		source:'steamgar.mp3',
	},
	{
		title:'Steam Gardens 8-Bit',
		source:'steamchip.mp3',
	},
	{
		title:'Sherm',
		source:'sherm.mp3',
	},
	{
		title:'Lake Lamode 1',
		source:'lake1.mp3',
	},
	{
		title:'Lake Lamode 1 8-Bit',
		source:'lakechip.mp3',
	},
	{
		title:'Lake Lamode 2',
		source:'lake2.mp3',
	},
	{
		title:'Lake Lamode Underwater',
		source:'lakeund.mp3',
	},
	{
		title:'Forgotten Isle 1',
		source:'for1.mp3',
	},
	{
		title:'Forgotten Isle 2',
		source:'for2.mp3',
	},
	{
		title:'Forgotten Isle 2 8-Bit',
		source:'forchip2.mp3',
	},
	{
		title:'New Donk City Night 1',
		source:'donknight1.mp3',
	},
	{
		title:'New Donk City Night 2',
		source:'donknight2.mp3',
	},
	{
		title:'New Donk City Day',
		source:'donkday.mp3',
	},
	{
		title:'New Donk City Cafe',
		source:'cafe.mp3',
	},
	{
		title:'Band Performance',
		source:'donkband.mp3',
	},
	{
		title:'New Donk City Festival (Jump up, Superstar)',
		source:'superstar.mp3',
	},
	{
		title:'New Donk City Festival (Jump up, Superstar) 8-Bit',
		source:'superchip.mp3',
	},
	{
		title:'Bubblaine',
		source:'bub.mp3',
	},
	{
		title:'Bubblaine 8-Bit',
		source:'bubchip.mp3',
	},
	{
		title:'Bubblaine Underwater',
		source:'bubund.mp3',
	},
	{
		title:'Shiveria Town',
		source:'shivtown.mp3',
	},
	{
		title:'Shiveria Race Course',
		source:'shivrace.mp3',
	},
	{
		title:'Mount Volbono',
		source:'volbono.mp3',
	},
	{
		title:'Mount Volbono 8-Bit',
		source:'volchip.mp3',
	},
	{
		title:'Mount Volbono Town',
		source:'voltown.mp3',
	},
	{
		title:"Bowser's Castle 1",
		source:'bowcast1.mp3',
	},
	{
		title:"Bowser's Castle 1 8-Bit",
		source:'bowchip.mp3',
	},
	{
		title:"Bowser's Castle 2",
		source:'bowcast2.mp3',
	},
	{
		title:'Honeylune Ridge',
		source:'hon.mp3',
	},
	{
		title:'Honeylune Ridge 8-Bit',
		source:'honchip.mp3',
	},
	{
		title:'Honeylune Ridge Caves',
		source:'honcave.mp3',
	},
	{
		title:'Wedding Hall',
		source:'wed.mp3',
	},
	{
		title:'Honeylune Ridge Collapse',
		source:'honcoll.mp3',
	},
	{
		title:'Honeylune Ridge Collapse 8-Bit',
		source:'honcollchip.mp3',
	},
	{
		title:'Honeylune Ridge Escape (Break Free)',
		source:'honeyesc.mp3',
	},
	{
		title:"Peach's Castle",
		source:'peach.mp3',
	},
	{
		title:'Broodals',
		source:'broodals.mp3',
	},
	{
		title:'Madame Broode',
		source:'broode.mp3',
	},
	{
		title:'Knuckletoc',
		source:'knuckle.mp3',
	},
	{
		title:'Torkdrift',
		source:'tork.mp3',
	},
	{
		title:'Mechawiggler',
		source:'wiggler.mp3',
	},
	{
		title:'Mollosuque Lanceur',
		source:'lanceur.mp3',
	},
	{
		title:'Mollosuque Lanceur 8-Bit',
		source:'lanceurchip.mp3',
	},
	{
		title:'Cookatiel',
		source:'cookatiel.mp3',
	},
	{
		title:'Dragon',
		source:'dragon.mp3',
	},
	{
		title:'Robobrood',
		source:'mech.mp3',
	},
	{
		title:'Bowser 1',
		source:'bow1.mp3',
	},
	{
		title:'Bowser 2',
		source:'bow2.mp3',
	},
	{
		title:'Run, Jump, Throw! 1',
		source:'rjt1.mp3',
	},
	{
		title:'Run, Jump, Throw! 2',
		source:'rjt2.mp3',
	},
	{
		title:'Run, Jump, Throw! 2 8-Bit',
		source:'rjtchip.mp3',
	},
	{
		title:'Subterranean 1',
		source:'sub1.mp3',
	},
	{
		title:'Subterranean 2',
		source:'sub2.mp3',
	},
	{
		title:'Caves',
		source:'caves.mp3',
	},
	{
		title:'Ice',
		source:'ice.mp3',
	},
	{
		title:'Another World',
		source:'anowor.mp3',
	},
	{
		title:'Ruins',
		source:'ruins.mp3',
	},
	{
		title:'Ruins 8-Bit',
		source:'ruinschip.mp3',
	},
	{
		title:'Projection Room',
		source:'proj.mp3',
	},
	{
		title:'Projection Room Underground',
		source:'projund.mp3',
	},
	{
		title:'Above the Clouds',
		source:'cloud.mp3',
	},
	{
		title:'Captain Toad',
		source:'toad.mp3',
	},
	{
		title:'To the Next Kingdom',
		source:'nextking.mp3',
	},
	{
		title:'Shop',
		source:'shop.mp3',
	},
	{
		title:'Race',
		source:'race.mp3',
	},
	{
		title:'RC Car',
		source:'rc.mp3',
	},
	{
		title:'Slots',
		source:'error.mp3',
	},
	{
		title:'Climactic Duel',
		source:'duel.mp3',
	},
	{
		title:'Lullaby until the End',
		source:'lullaby.mp3',
	},
];

var possibleSources=[];
var foundOne=false;
var PP = document.getElementById("playpause");
var star=true;
var delay=0;
var creep=0;
var dur=document.getElementById("duration");
var theThing=0;
function pickMusic(){
	var now=new Date();
	//getHours() getMinutes() getSeconds()
	for(var i=0;i<pickFrom.length;i++){
		if(pickFrom[i].start.hour===now.getHours()&&pickFrom[i].start.min===now.getMinutes()&&now.getSeconds()===0){
			music.src=pickFrom[i].source;
			music.play();
			foundOne=true;
			theThing=i;
		}
		else if(pickFrom[i].start.hour<=now.getHours()&&!foundOne){
			if(pickFrom[i].start.hour===now.getHours()&&pickFrom[i].start.min<=now.getMinutes()){
				possibleSources.push(pickFrom[i].source);
				theThing=i;
			}
			else if(pickFrom[i].start.hour<now.getHours()){
				possibleSources.push(pickFrom[i].source);
				theThing=i;
			}
		}
	}
	if(!foundOne){
		music.src=possibleSources[possibleSources.length-1];
		music.play();
		foundOne=true;
	}
	dur=document.getElementById("duration");
	var thingy=pickFrom[theThing].back;
	if(!phone){
		document.body.style.backgroundImage = "url(" + thingy + ")";
	}
	var timing=music.currentTime;
	var timingMins=0;
	while(Math.round(timing)>=60){
		timingMins++;
		timing-=60;
	}
	var dispTime=""+Math.round(timing);
	if(Math.round(timing)<10){
		dispTime="0"+Math.round(dispTime);
	}
	dur.innerHTML=timingMins+":"+dispTime+" / 24:00";
}
function playVoice(){
	delay++;
	if(delay>60*5){
		star=!star;
		if(star){
			music.src="superstar.mp3";
		}
		else{
			music.src="honeyesc.mp3";
		}
		delay=0;
	}
	music.play();
	var timing=music.currentTime;
	var timingMins=0;
	while(Math.round(timing)>=60){
		timingMins++;
		timing-=60;
	}
	var dispTime=""+Math.round(timing);
	if(Math.round(timing)<10){
		dispTime="0"+Math.round(dispTime);
	}
	dur.innerHTML=timingMins+":"+dispTime+" / 5:00";
}
function creepy(){
	delay++;
	if(delay>60*5){
		creep++;
		delay=0;
		if(creep>creepers.length-1){
			creep=0;
		}
		music.src=creepers[creep];
		music.play();
	}
	
	var timing=music.currentTime;
	var timingMins=0;
	while(Math.round(timing)>=60){
		timingMins++;
		timing-=60;
	}
	var dispTime=""+Math.round(timing);
	if(Math.round(timing)<10){
		dispTime="0"+Math.round(dispTime);
	}
	dur.innerHTML=timingMins+":"+dispTime+" / 5:00";
}
var t;
function playBtn(){
	if(mode==="time"){
		t=window.setInterval(pickMusic,1000);
		foundOne=false;
		document.body.style.backgroundImage = "url(Odyssey.jpg)";
	}
	else if(mode==="voice"){
		t=window.setInterval(playVoice,1000);
		document.body.style.backgroundImage = "url(Festival.jpg)";
	}
	else if(mode==="ominous"){
		t=window.setInterval(creepy,1000);
		document.body.style.backgroundImage = "url(Creepy.jpg)";
	}
	if(mode!=="manual"){
		music.play();
		PP.innerHTML="<input type = 'button' id = 'playpause' value='Stop' onclick='pauseBtn()'>";
	}
	phoneCheck();
}
function pauseBtn(){
	clearInterval(t);
	PP.innerHTML="<input type='button' id='playpause' value='Begin!' onclick='playBtn()'>";
	music.pause();
	dur.innerHTML="0:00 / 0:00";
}
document.getElementById("f1").style.filter = "brightness(50%)";
function vol1(){
	music.volume=1;
	document.getElementById("f1").style.filter = "brightness(50%)";
	document.getElementById("f2").style.filter = "brightness(100%)";
	document.getElementById("f3").style.filter = "brightness(100%)";
	document.getElementById("f4").style.filter = "brightness(100%)";
	document.getElementById("f5").style.filter = "brightness(100%)";
	document.getElementById("f6").style.filter = "brightness(100%)";
	document.getElementById("f7").style.filter = "brightness(100%)";
	document.getElementById("f8").style.filter = "brightness(100%)";
	document.getElementById("f9").style.filter = "brightness(100%)";
	document.getElementById("f10").style.filter = "brightness(100%)";
}
function vol2(){
	music.volume=0.9;
	document.getElementById("f1").style.filter = "brightness(100%)";
	document.getElementById("f2").style.filter = "brightness(50%)";
	document.getElementById("f3").style.filter = "brightness(100%)";
	document.getElementById("f4").style.filter = "brightness(100%)";
	document.getElementById("f5").style.filter = "brightness(100%)";
	document.getElementById("f6").style.filter = "brightness(100%)";
	document.getElementById("f7").style.filter = "brightness(100%)";
	document.getElementById("f8").style.filter = "brightness(100%)";
	document.getElementById("f9").style.filter = "brightness(100%)";
	document.getElementById("f10").style.filter = "brightness(100%)";
}
function vol3(){
	music.volume=0.8;
	document.getElementById("f1").style.filter = "brightness(100%)";
	document.getElementById("f2").style.filter = "brightness(100%)";
	document.getElementById("f3").style.filter = "brightness(50%)";
	document.getElementById("f4").style.filter = "brightness(100%)";
	document.getElementById("f5").style.filter = "brightness(100%)";
	document.getElementById("f6").style.filter = "brightness(100%)";
	document.getElementById("f7").style.filter = "brightness(100%)";
	document.getElementById("f8").style.filter = "brightness(100%)";
	document.getElementById("f9").style.filter = "brightness(100%)";
	document.getElementById("f10").style.filter = "brightness(100%)";
}
function vol4(){
	music.volume=0.7;
	document.getElementById("f1").style.filter = "brightness(100%)";
	document.getElementById("f2").style.filter = "brightness(100%)";
	document.getElementById("f3").style.filter = "brightness(100%)";
	document.getElementById("f4").style.filter = "brightness(50%)";
	document.getElementById("f5").style.filter = "brightness(100%)";
	document.getElementById("f6").style.filter = "brightness(100%)";
	document.getElementById("f7").style.filter = "brightness(100%)";
	document.getElementById("f8").style.filter = "brightness(100%)";
	document.getElementById("f9").style.filter = "brightness(100%)";
	document.getElementById("f10").style.filter = "brightness(100%)";
}
function vol5(){
	music.volume=0.6;
	document.getElementById("f1").style.filter = "brightness(100%)";
	document.getElementById("f2").style.filter = "brightness(100%)";
	document.getElementById("f3").style.filter = "brightness(100%)";
	document.getElementById("f4").style.filter = "brightness(100%)";
	document.getElementById("f5").style.filter = "brightness(50%)";
	document.getElementById("f6").style.filter = "brightness(100%)";
	document.getElementById("f7").style.filter = "brightness(100%)";
	document.getElementById("f8").style.filter = "brightness(100%)";
	document.getElementById("f9").style.filter = "brightness(100%)";
	document.getElementById("f10").style.filter = "brightness(100%)";
}
function vol6(){
	music.volume=0.5;
	document.getElementById("f1").style.filter = "brightness(100%)";
	document.getElementById("f2").style.filter = "brightness(100%)";
	document.getElementById("f3").style.filter = "brightness(100%)";
	document.getElementById("f4").style.filter = "brightness(100%)";
	document.getElementById("f5").style.filter = "brightness(100%)";
	document.getElementById("f6").style.filter = "brightness(50%)";
	document.getElementById("f7").style.filter = "brightness(100%)";
	document.getElementById("f8").style.filter = "brightness(100%)";
	document.getElementById("f9").style.filter = "brightness(100%)";
	document.getElementById("f10").style.filter = "brightness(100%)";
}
function vol7(){
	music.volume=0.4;
	document.getElementById("f1").style.filter = "brightness(100%)";
	document.getElementById("f2").style.filter = "brightness(100%)";
	document.getElementById("f3").style.filter = "brightness(100%)";
	document.getElementById("f4").style.filter = "brightness(100%)";
	document.getElementById("f5").style.filter = "brightness(100%)";
	document.getElementById("f6").style.filter = "brightness(100%)";
	document.getElementById("f7").style.filter = "brightness(50%)";
	document.getElementById("f8").style.filter = "brightness(100%)";
	document.getElementById("f9").style.filter = "brightness(100%)";
	document.getElementById("f10").style.filter = "brightness(100%)";
}
function vol8(){
	music.volume=0.3;
	document.getElementById("f1").style.filter = "brightness(100%)";
	document.getElementById("f2").style.filter = "brightness(100%)";
	document.getElementById("f3").style.filter = "brightness(100%)";
	document.getElementById("f4").style.filter = "brightness(100%)";
	document.getElementById("f5").style.filter = "brightness(100%)";
	document.getElementById("f6").style.filter = "brightness(100%)";
	document.getElementById("f7").style.filter = "brightness(100%)";
	document.getElementById("f8").style.filter = "brightness(50%)";
	document.getElementById("f9").style.filter = "brightness(100%)";
	document.getElementById("f10").style.filter = "brightness(100%)";
}
function vol9(){
	music.volume=0.2;
	document.getElementById("f1").style.filter = "brightness(100%)";
	document.getElementById("f2").style.filter = "brightness(100%)";
	document.getElementById("f3").style.filter = "brightness(100%)";
	document.getElementById("f4").style.filter = "brightness(100%)";
	document.getElementById("f5").style.filter = "brightness(100%)";
	document.getElementById("f6").style.filter = "brightness(100%)";
	document.getElementById("f7").style.filter = "brightness(100%)";
	document.getElementById("f8").style.filter = "brightness(100%)";
	document.getElementById("f9").style.filter = "brightness(50%)";
	document.getElementById("f10").style.filter = "brightness(100%)";
}
function vol10(){//shifted: voL!0
	music.volume=0.1;
	document.getElementById("f1").style.filter = "brightness(100%)";
	document.getElementById("f2").style.filter = "brightness(100%)";
	document.getElementById("f3").style.filter = "brightness(100%)";
	document.getElementById("f4").style.filter = "brightness(100%)";
	document.getElementById("f5").style.filter = "brightness(100%)";
	document.getElementById("f6").style.filter = "brightness(100%)";
	document.getElementById("f7").style.filter = "brightness(100%)";
	document.getElementById("f8").style.filter = "brightness(100%)";
	document.getElementById("f9").style.filter = "brightness(100%)";
	document.getElementById("f10").style.filter = "brightness(50%)";
}
var clearable=document.getElementById("clear");
function time(){
	if(!phone){
		document.body.style.backgroundImage = "url(Odyssey.jpg)";
	}
	document.getElementById("pic").src="clock.png";
	mode="time";
	pauseBtn();
	music.src="error.mp3";
	foundOne=false;
	clear.innerHTML="";
}
function voice(){
	if(!phone){
		document.body.style.backgroundImage = "url(Festival.jpg)";
	}
	document.getElementById("pic").src="crown.png";
	mode="voice";
	pauseBtn();
	music.src="superstar.mp3";
	clear.innerHTML="";
}
function ominous(){
	if(!phone){
		document.body.style.backgroundImage = "url(Creepy.jpg)";
	}
	document.getElementById("pic").src="bow.png";
	mode="ominous";
	pauseBtn();
	music.src=creepers[Math.round(Math.random(0,creepers.length-1))];
	clear.innerHTML="";
}
function manual(){
	if(!phone){
		document.body.style.backgroundImage = "url(black.jpg)";
	}
	document.getElementById("pic").src="manual.png";
	mode="manual";
	pauseBtn();
	var creating=document.createElement("div");
	var addingTo=document.getElementById("clear");
	creating.setAttribute('id',"manner");
	addingTo.appendChild(creating);
	var addTo=document.getElementById("manner");
	for(var i=0;i<mans.length;i++){
		var titler=document.createElement("h1");
		titler.appendChild(document.createTextNode(mans[i].title));
		var adding=document.createElement("audio");
		adding.setAttribute('src',mans[i].source);
		adding.setAttribute('controls',true);
		addTo.appendChild(titler);
		addTo.appendChild(adding);
	}
}
console.log("Hey! Found a glitch or other problem you're troubleshooting? Message me why on Github @SMOMusic and I will try and resolve it!");