var video;

// page load 
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autoplay = false;
	video.loop = false;
	console.log("autoplay is set to " + video.autoplay)
	console.log("loop is set to " + video.loop)

});

// play button
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
});

// pause button
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

// slow down 
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	video.playbackRate *= 0.9;
	console.log("speed is now " + video.playbackRate);
});

// speed up
document.querySelector("#faster").addEventListener("click", function() {
	console.log("speed up video");
	video.playbackRate /= 0.9;
	console.log("speed is now " + video.playbackRate);
});

// skip ahead
document.querySelector("#skip").addEventListener("click", function() {
	console.log("skip ahead");
	video.currentTime += 10;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0
	}
	console.log("video current time is  " + video.currentTime);
});

// mute and unmute
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false) {
		console.log("mute the vid");
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute"
	}
	else {
		console.log("UNmute the vid");
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute"
	}
});

// volume slider 
document.querySelector("#slider").addEventListener("click", function() {
	console.log("the current volume is " + video.volume)
	video.volume = this.value / 100;

	console.log("the current volume is " + video.volume)
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"

});

// styled, making video class old school
document.querySelector("#vintage").addEventListener("click", function() {
	console.log("old school!");
	//document.getElementsByClassName("video").className = "video oldSchool"
	video.setAttribute("class", "video oldSchool")
});


// original, making class video again
document.querySelector("#orig").addEventListener("click", function() {
	console.log("back to og");
	//document.getElementsByClassName("video oldSchool").className = "video";
	video.setAttribute("class", "video")
});
