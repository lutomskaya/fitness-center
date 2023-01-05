const videoElement = document.querySelector('[data-video]');
const link = videoElement.querySelector('[data-video-link]');
const button = videoElement.querySelector('[data-video-button]');

const generateURL = () => {
  if (!videoElement) {
    return '';
  }

  let url = videoElement.getAttribute('data-url');
  let query = '?rel=0&showinfo=0&autoplay=1&mute=1';
  return 'https://www.youtube.com/embed/' + url + query;
};

const setupVideo = () => {
  if (!button) {
    return;
  }
  button.style.display = 'block';

  button.addEventListener('click', () => {
    let iframe = createIframe();

    link.remove();
    button.remove();
    videoElement.appendChild(iframe);
  });

  link.removeAttribute('href');
};

const createIframe = () => {
  const iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('src', generateURL());
  iframe.setAttribute('frameborder', '0');
  iframe.classList.add('intro__iframe');

  return iframe;
};

export {setupVideo};
