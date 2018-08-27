if (window.matchMedia && window.matchMedia("(min-width: 768px)").matches) {
  (function() {
    var po1 = document.createElement('script');
    po1.type = 'text/javascript';
    po1.async = false;
    po1.className='jquery';
    po1.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js';
    var s1 = document.getElementsByTagName('script')[0];
    s1.parentNode.insertBefore(po1, s1);
  })();
  (function() {
    var po2 = document.createElement('script');
    po2.type = 'text/javascript'; po2.async = false;
    po2.className='flip';
    po2.src = 'clock_assets/flipclock.js';
    var s1 = document.getElementsByTagName('script')[0];
    s1.parentNode.insertBefore(po2, s1);
  })();
}

document.querySelectorAll('nav a').forEach((elem) => {
  elem.addEventListener('click', (e) => {
    if (elem.scrollIntoView) {
      e.preventDefault();
      const target = document.querySelector(elem.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

const throttle = (callback, interval) => {
  let timestamp = Date.now();

  return () => {
    if ((timestamp + interval - Date.now()) < 0) {
      callback();
      timestamp = Date.now();
    }
  }
};

const handleScroll = () => {
  const navigation = document.querySelector('nav');
  const weekendH3 = document.querySelector('#weekend h3');
  const navigationOffsetTop = navigation.offsetTop;

  return () => {
    if (window.pageYOffset > navigationOffsetTop) {
      navigation.classList.add('sticky');
      weekendH3.classList.add('padding-top');
    } else {
      navigation.classList.remove('sticky');
      weekendH3.classList.remove('padding-top');
    }
  };
};

window.onload = function() {
  window.addEventListener('scroll', throttle(handleScroll(), 75));

  if (window.matchMedia && window.matchMedia("(min-width: 768px)").matches) {
    $(function(){
      FlipClock.Lang.Custom = { days:'Dni', hours:'Godzin', minutes:'Minut', seconds:'Sekund' };
      var opts = {
        clockFace: 'DailyCounter',
        countdown: true,
        language: 'Custom'
      };
      var countdown = 1539444600 - ((new Date().getTime())/1000); // from: 10/13/2018 04:30 pm +0100
      countdown = Math.max(1, countdown);
      $('.clock-builder-output').FlipClock(countdown, opts);
    });
  }
};
