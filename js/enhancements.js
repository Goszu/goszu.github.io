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

window.addEventListener('scroll', throttle(handleScroll(), 75));
