window.onload = function () {
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.nav-menu');
  const list = document.querySelector('.nav-list');
  const html = document.querySelector('html');

  hamburger.addEventListener('click', function () {
    this.classList.toggle('open');
    menu.classList.toggle('active');
    list.classList.toggle('active');
  });

  window.onresize = function () {
    if (window.innerWidth > 768) {
      reset();
    }
  };

  function reset() {
    menu.classList.remove('active');
    list.classList.remove('active');
    hamburger.classList.remove('open');
    html.removeAttribute('style');
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

  // Typing effect!

  // const carouselList = [
  //   { text: 'Dionson, Jerald', color: '#00897b' },
  //   { text: 'a front-end developer', color: 'goldenrod' },
  //   { text: 'a back-end developer', color: 'crimson' },
  // ];

  // async function typeSentence(sentence, ref) {
  //   const letters = sentence.split('');
  //   const element = document.querySelector(ref);
  //   for (let i = 0; i < letters.length; i++) {
  //     await wait(100);
  //     element.innerHTML += letters[i];
  //   }
  //   return;
  // }

  // async function deleteSentence(ref) {
  //   const element = document.querySelector(ref);
  //   const sentence = element.innerHTML;
  //   const letters = sentence.split('');
  //   while (letters.length > 0) {
  //     await wait(100);
  //     letters.pop();
  //     element.innerHTML = letters.join('');
  //   }
  // }

  // async function carousel(list, ref) {
  //   const element = document.querySelector(ref);

  //   let i = 0;
  //   while (true) {
  //     element.style.color = list[i].color;
  //     await typeSentence(list[i].text, ref);
  //     await wait(1500);
  //     await deleteSentence(ref);
  //     await wait(500);
  //     i++;
  //     if (i >= list.length) i = 0;
  //   }
  // }

  // function wait(ms) {
  //   return new Promise((res) => setTimeout(res, ms));
  // }

  // carousel(carouselList, '.feature-text');
};
