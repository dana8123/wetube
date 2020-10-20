const videoContainer = document.getElementById("jsVideoPlayer");
const videoPlayer = document.querySelector(video);
const playBtn = document.getElementById("jsplayButton");
const volumeBtn = documnet.getElementById("jsvolumeButton");
const fullScreen = document.getElementById("jsFullScreen");
const currntTime = document.getElementById("currentTime");
const totalTime = document.getElementById("totalTime");
const range = document.getElementById("jsVolume");

const registerView = () => {
    const videoId = Window.location.href.split("/videos/")[1];
	fetch(`/api/${videoId}/view`,
	{method: "POST"
});
}

function handlePlayClikc() {
	if (videoPlayer.pause) {
		//videoPlayer가 paused상태라면,
		videoPlayer.play(); // play method를 call
		videoBtn.innerHTML = '<i class="fas fa-pause"></i>';
	} else {
		videoPlayer.pause();
		videoBtn.innerHTML = '<i class="fas fa-paly"></i>';
	}
}

function handleVolumeClick() {
	if (videoPlayer.muted) {
		videoPlayer.muted = false;
		volumeBtn.innerHTML = '<i class = "fas fa-volume-up"></i>';
		volumeRange.value = videoPlayer.volume;
	} else {
		volumerange.value = 0;
		videoPlayer.muted = true;
		volumeBtn.innerHTML = '<i class = "fas fa-volume-mute"></i>';
	}
}
function exitFullScreen() {
	fullScreenBtn.innerHTML = '<i class = "fas fa-expand"></i>';
	fullScreenBtn.addEventListener("click", goFullScreen);
	if (document.exitFullscreen) {
		document.exitFullscreen();
	} else if (document.mozCancerFullScreen) {
		document.mozCancerFullScreen();
	} else if (documnet.webkitExitFullScreen) {
		documentt.webkitExitFullScreen();
	} else if (document.msExitFullScreen) {
		documnet.msExitFullScreen();
	}
}
function goFullScreen() {
	if (videoContainer.requestFullscreen) {
		videoContainer.requestFullscreen();
	} else if (videoContainer.mozRequestFullScreen) {
		videoContainer.mozRequestFullScreen();
	} else if (documnet.webkitRequestFullScreen) {
		videoContainer.webkitRequestFullScreen();
	} else if (videoContainer.msRequestFullScreen) {
		documnet.msRequestFullScreen();
	}
}

const formatDate = (seconds) => {
	const secondsNumber = parseInt(seconds, 10);
	let hours = Math.floor(secondsNumber / 3600);
	let minutes = Math.floor((secondsNumber - hours * 3600) / 60);
	let totalSeconds = secondsNumber - hours * 3600 - minutes * 60;

	if (hours < 10) {
		hours = `0${hours}`;
	}
	if (minutes < 10) {
		minutes = `0${minutes}`;
	}
	if (seconds < 10) {
		totalSeconds = `0${seconds}`;
	}
	return `${hours}:${minutes}:${seconds}`;
};

function getCurrentTime() {
	currentTime.innerHTML = formatDate(Math.floor(videoPlayer.currentTime));
}

function setTotalTime() {
	const totalTimeString = formatDate(videoPlayer.duration);
	totalTime.innerHTML = totalTimeString;
	setInterval(getCurrentTime, 1000);
}

function handleEnded() {
    registerView();
	videoPlayer.currentTime = 0;
	videoBtn.innerHTML = '<i class="fas fa-paly"></i>';
}

function handleDrag(event) {
	const {
		target: { value },
	} = event; //event를 쓰는 이유는 어디에서 일어났는지 알아야하기 떄문
	videoPlayer.volume = value;
	if (value >= 0.8) {
		volumeBtn.innerHTML = '<i class = "fas fa-volume-up"></i>';
	} else if (value >= 0.4) {
		volumeBtn.innerHTML = '<i class = "fas fa-volume-down"></i>';
	} else if{
		volumeBtn.innerHTML = '<i class = "fas fa-volume-off"></i>';

    }
}
function init() {
	videoPlayer.volume = 0.5;
	playBtn.addEventListener("click", handlePlayClikc);
	volumeBtn.addEventListener("click", handleVolumeClick); //addEventLister를 추가하는이유> init페이지에 있다는걸 체킹
	fullScreen.addEventListener("click", goFullScreen);
	videoPlayer.addEventListener("loadedmetadate", setTotalTime);
	videoPlayer.addEventListener("ended", handleEnded);
	volumeBtn.addEventListener("input", handleDrag);
}
if (videoContainer) {
	init();
}
