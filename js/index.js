const $video = document.querySelector('#video');
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $sound = document.querySelector('#sound');
const $soundOn = document.querySelector('#soundOn');
const $backward = document.querySelector('#backward');
const $forward = document.querySelector('#forward');
const $progress = document.querySelector('#progress')

$play.addEventListener('click', handlePlay);
$pause.addEventListener('click', handlePause);
$backward.addEventListener('click', handleBackward);
$forward.addEventListener('click', handleForward);
$sound.addEventListener('click', handleSound);
$soundOn.addEventListener('click', handleSoundOn);
$video.addEventListener('loadedmetadata', handleLoaded);
$video.addEventListener('timeupdate', handleTimeUpdate);
$progress.addEventListener('input',handleInput);

function handlePlay() {
  $video.play();
  $play.hidden = true;
  $pause.hidden = false;
}

function handlePause() {
  $video.pause();
  $pause.hidden = true;
  $play.hidden = false;
}

function handleBackward() {
  $video.currentTime = $video.currentTime - 10;
}

function handleForward() {
  $video.currentTime = $video.currentTime + 10;
}

function handleSound () {
  $video.volume = 0;
  $sound.hidden = true;
  $soundOn.hidden = false;
}

function handleSoundOn () {
  $video.volume = 1;
  $sound.hidden = false;
  $soundOn.hidden = true;
}

function handleLoaded (){
  $progress.max = $video.duration;
}

function handleTimeUpdate (){
  $progress.value = $video.currentTime;

}

function handleInput () {
  console.log('Valor del input' + $progress.value );
  $video.currentTime = $progress.value
}