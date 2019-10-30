  speechSynthesis.speak(new SpeechSynthesisUtterance());
  var postTitleSpeech = new SpeechSynthesisUtterance();
var voices = window.speechSynthesis.getVoices();
postTitleSpeech.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == "Whisper"; })[0];

/* var voices = speechSynthesis.getVoices().forEach(function(voice) {
  console.log(voice.name, voice.default ? voice.default :'');
}); */

postTitleSpeech.text = 'Everyday with Isa';
postTitleSpeech.lang = 'en-US';
postTitleSpeech.rate = 1; // 0.1 to 1
postTitleSpeech.volume = 0.2; // 0 to 1
postTitleSpeech.pitch = 0.8; //0 to 2
postTitleSpeech.voiceURI = "native";

speechSynthesis.speak(postTitleSpeech);
/* menu button */
function btnFunction() {
document.getElementById("menu-content").classList.toggle("show__menu");
}
window.onclick = function(event) {
    if (!event.target.matches('.navigation__menupic')) {
      var menu = document.getElementsByClassName("navigation__menu__content");
      var i;
      for (i = 0; i < menu.length; i++) {
        var openMenu = menu[i];
        if (openMenu.classList.contains('show__menu')) {
          openMenu.classList.remove('show__menu');
        }
      }
    }
  };
/* change cursor */
function changeCursorFunction(){
  document.getElementById("page-title__author").style = "cursor:pointer";
}
/* time stamp countup function */
window.onload = function() {
  countUpFromTime("Oct 20, 2019 09:00:00", "countup");
};
function countUpFromTime(countFrom, countup) {
  countFrom = new Date(countFrom).getTime();
  var now = new Date(),
      timeDifference = (now - countFrom);
    
  var secondsInADay = 60 * 60 * 1000 * 24,
      secondsInAnHour = 60 * 60 * 1000;
    
  days = Math.floor(timeDifference / (secondsInADay) * 1);
  hours = Math.floor((timeDifference % (secondsInADay)) / (secondsInAnHour) * 1);
  /* mins = Math.floor(((timeDifference % (secondsInADay)) % (secondsInAnHour)) / (60 * 1000) * 1);
  secs = Math.floor((((timeDifference % (secondsInADay)) % (secondsInAnHour)) % (60 * 1000)) / 1000 * 1); */

  var idEl = document.getElementById(countup);
  idEl.getElementsByClassName("page-title-timeel__days")[0].innerHTML = days;
  idEl.getElementsByClassName("page-title-timeel__hours")[0].innerHTML = hours;
  clearTimeout(countUpFromTime.interval);
  countUpFromTime.interval = setTimeout(function(){
    countUpFromTime(countFrom, countup);
  }, 1000);
}

/* view posts */
function viewPostGuide() {
  var postView = document.getElementsByClassName("page-post__guide");
  var textView = document.getElementsByClassName("page-post__text__guide");
  postView[0].classList.toggle("show__post");
  textView[0].classList.toggle("show__post__text");
}

function viewPostTickets() {
  var postView = document.getElementsByClassName("page-post__tickets");
  var textView = document.getElementsByClassName("page-post__text__tickets");
  postView[0].classList.toggle("show__post");
  textView[0].classList.toggle("show__post__text");
}
function viewPostDressing() {
  var postView = document.getElementsByClassName("page-post__dressing");
  var textView = document.getElementsByClassName("page-post__text__dressing");
  postView[0].classList.toggle("show__post");
  textView[0].classList.toggle("show__post__text");
}