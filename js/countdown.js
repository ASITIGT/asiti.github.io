function getTimeRemaining(endtime) {
  var distance = endtime - new Date().getTime();
  // var seconds = Math.floor((t / 1000) % 60);
  // var minutes = Math.floor((t / 1000 / 60) % 60);
  // var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  // var days = Math.floor(t / (94 * 60 * 60 * 24));
  var days = Math.floor((distance) / (1000 * 3600 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  // var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  return {
    'total': distance,
    'days': days,
    'hours': hours,
    'minutes': minutes
    // 'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  // var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    if (t.total <= 0) {
      // El evento ya comenzó o finalizó
      clearInterval(timeinterval);
      daysSpan.innerHTML = '0';
      hoursSpan.innerHTML = '00';
      minutesSpan.innerHTML = '00';
      
      // Ocultar el countdown y mostrar mensaje
      var clockdivContent = document.querySelector('.clockdiv-content');
      if (clockdivContent) {
        clockdivContent.innerHTML = '<p class="h4 primary-text2 mb-2">¡El evento está en curso!</p><p class="h5 primary-text mb-2">🎉 Gracias por participar</p>';
      }
    } else {
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    }
    // secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}


var deadline = new Date("Nov 16, 2025 09:00:00").getTime();
initializeClock('clockdiv', deadline);