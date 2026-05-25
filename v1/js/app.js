window.onload = function () {
  const hamburger = document.querySelector('.hamburger');
  const list = document.querySelector('.nav-list');
  const html = document.querySelector('html');
  const body = document.querySelector('body');

  hamburger.addEventListener('click', function () {
    this.classList.toggle('open');
    list.classList.toggle('active');
    html.classList.toggle('blur');
  });

  window.addEventListener('click', function (e) {
    if (!list.contains(e.target) && !hamburger.contains(e.target)) {
      reset();
    }
  });

  window.onresize = function () {
    if (window.innerWidth > 768) {
      reset();
    }
  };

  function reset() {
    list.classList.remove('active');
    hamburger.classList.remove('open');
    html.removeAttribute('class');
  }

  const links = document.querySelectorAll('.nav-item');
  links.forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const href = this.getAttribute('href');
      const elem = document.querySelector(href);
      elem.scrollIntoView({ behavior: 'smooth' });
      reset();
    });
  });

  window.addEventListener('scroll', reveal);
  function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let revealTop = reveals[i].getBoundingClientRect().top;

      if (revealTop - 500 < windowHeight - revealTop) {
        reveals[i].classList.add('active');
      } else {
        reveals[i].classList.remove('active');
      }
    }
  }

  // form validation

  const form = document.querySelector('form');
  const name = document.querySelector('#name');
  const email = document.querySelector('#email');
  const message = document.querySelector('#message');

  const nameError = document.querySelector('.name-error');
  const emailError = document.querySelector('.email-error');
  const messageError = document.querySelector('.message-error');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let hasError = false;

    if (name.value.trim() === '') {
      nameError.innerHTML = 'Name is a required field.';
      hasError = true;
    }

    if (email.value.trim() === '') {
      emailError.innerHTML = 'Email is a required field.';
      hasError = true;
    }

    if (email.value.split('@')[1] == null) {
      emailError.innerHTML = 'Email is invalid';
      hasError = true;
    } else if (email.value.split('@')[1].split('.')[1] == null) {
      emailError.innerHTML = 'Email is invalid';
      hasError = true;
    }

    if (message.value.trim() === '') {
      messageError.innerHTML = 'Message is a required field.';
      hasError = true;
    }

    if (!hasError) {
      e.target.submit();
    }
  });

  document.querySelector('.date').innerHTML = new Date().getFullYear();
};
