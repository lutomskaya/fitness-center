const tabsButton = document.querySelectorAll('[data-tab-button]');
const tabsContent = document.querySelectorAll('[data-tab-content]');

const toggleTabs = () => {
  tabsButton.forEach((control) => {
    control.addEventListener('click', (evt) => {
      evt.preventDefault();

      const currentButton = control.getAttribute('data-tab-button');
      const currentContent = document.querySelector(`[data-tab-content="${currentButton}"]`);

      for (let i = 0; i < tabsButton.length; i++) {
        if (tabsButton[i].classList.contains('subscriptions__navigation-button--active')) {
          tabsButton[i].classList.remove('subscriptions__navigation-button--active');
          break;
        }
      }
      control.classList.add('subscriptions__navigation-button--active');

      for (let i = 0; i < tabsContent.length; i++) {
        if (tabsContent[i].classList.contains('subscriptions__list--active')) {
          tabsContent[i].classList.remove('subscriptions__list--active');
          break;
        }
      }
      currentContent.classList.add('subscriptions__list--active');
    });
  });
};

export {toggleTabs};
