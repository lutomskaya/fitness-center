function checkInputPhone() {
  const phoneInput = document.querySelectorAll('input[data-phone-input]');

  phoneInput.forEach(function (item) {
    item.addEventListener('input', () => {
      const value = item.value.replace(/[^0-9\s)(+)-]/g, '');
      const numberLength = 11;

      let result = '';

      for (let i = 0; i < value.length && i < numberLength; i++) {
        result += value[i];
      }
      item.value = result;
    });
  });
}

function checkInputName() {
  const nameInput = document.querySelectorAll('input[data-name-input]');

  nameInput.forEach(function (item) {
    item.removeAttribute('pattern');
    item.addEventListener('input', () => {
      const value = item.value.replace(/[^a-zA-ZА-Яа-яЁё'-\s]/gi, '');
      const nameLength = 50;

      let result = '';

      for (let i = 0; i < value.length && i < nameLength; i++) {
        result += value[i];
      }
      item.value = result;
    });
  });
}

export {checkInputPhone, checkInputName};
