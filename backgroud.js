var currentTheme = '';

const themes = {
  'day': {
    images: {
      headerURL: 'images/day.jpg',
      additional_backgrounds: ['images/day.jpg']
    },
    properties: {
      additional_backgrounds_alignment: ['top' ],
      additional_backgrounds_tiling: [ 'repeat']
    },

    colors: {
      accentcolor: 'white',
      textcolor: 'white',
      toolbar: 'rgba(0,0,0,0.25)',
      toolbar_text: 'rgba(255,255,255,1)',
      toolbar_field: 'rgba(255,255,255,1)',
      toolbar_field_text: '#0c0c0d',
      toolbar_top_separator: 'rgba(0,0,0,0)',
      toolbar_bottom_separator: 'rgba(0,0,0,0.25)',
      toolbar_vertical_separator: 'rgba(255,255,255,0.25)'
    }
  },
  'night': {
    images: {
      headerURL: 'images/night.jpg',
      additional_backgrounds: ['images/night.jpg']
    },
     properties: {
      additional_backgrounds_alignment: ['center top' ],
      additional_backgrounds_tiling: [ 'repeat']
    },
    colors: {
      accentcolor: 'white',
      textcolor: 'white',
    }
  }
};

function setTheme(theme) {
  currentTheme = theme;
  browser.theme.update(themes[theme]);
}

function checkTime() {
  let date = new Date();
  let hours = date.getHours();
  
  if ((hours > 8) && (hours < 20)) {
    // Will set the sun theme between 8am and 8pm.
    setTheme('day');
  } else {
    setTheme('night');
  }
}


// On start up, check the time to see what theme to show.
checkTime();
// Set up an alarm to check this regularly.
browser.alarms.onAlarm.addListener(checkTime);
browser.alarms.create('checkTime', {periodInMinutes: 1});