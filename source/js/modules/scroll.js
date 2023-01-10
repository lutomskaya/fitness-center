const links = document.querySelectorAll('a[data-link]');

const initScroll = () => {
  for (let link of links) {
    link.addEventListener('click', (evt) => {
      evt.preventDefault();
      const ID = link.getAttribute('href').substring(1);
      document.getElementById(ID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }
};

export {initScroll};
