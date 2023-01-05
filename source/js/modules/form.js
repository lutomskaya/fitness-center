const phoneInput = document.querySelectorAll('input[data-phone-input]');
const NUMBER_LENGTH = 11;

const checkInputPhone = () => {
  phoneInput.forEach(function (item) {
    item.addEventListener('input', () => {
      const value = item.value.replace(/\D+/g, '');

      const prefixNumber = (str) => {
        if (str === '7') {
          return '7(';
        }
        if (str === '8') {
          return '7(';
        }
        if (str === '9') {
          return '7(9';
        }
        return '7(';
      };

      let result = '';

      for (let i = 0; i < value.length && i < NUMBER_LENGTH; i++) {
        switch (i) {
          case 0:
            result += prefixNumber(value[i]);
            continue;
          case 4:
            result += ') ';
            break;
          case 7:
            result += '-';
            break;
          case 9:
            result += '-';
            break;
          default:
            break;
        }
        result += value[i];
      }

      item.value = result;
    });
  });
};

export {checkInputPhone};
