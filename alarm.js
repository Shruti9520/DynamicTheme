var currentTheme = '';
const themes = {
  'clock': {
    images: {
      headerURL: 'images/clock.jpg',
      additional_backgrounds: ['images/clocks1.jpg']
    },
    properties: {
      additional_backgrounds_alignment: ['center top' ],
      additional_backgrounds_tiling: [ 'repeat']
    },
    colors: {
      accentcolor: '#000',
      textcolor: '#fff',
    }
  }
};

function setTheme(theme) {
  currentTheme = theme;
  browser.theme.update(themes[theme]);
}

document.getElementById("set").addEventListener("click", setAlarm);
function setAlarm() {
  let date = new Date();
  let hours = date.getHours();
  let alarm = document.getElementById("datepicker");
  let message = document.getElementById("message");
  if (alarm.value == hours) {
  	let flush = new Audio('sound/Digital-phone-ringing.wav');
    let duration = flush.duration; // the duration variable now holds the duration (in seconds) of the audio clip
    flush.play(message.value);
    setTheme('clock');
    //alert(message.value);
  }
 
}