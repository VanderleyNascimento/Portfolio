const numberOnly = (evt) => {
    const theEvent = evt || window.event;
    const key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    const regex = /^[0-9.]+$/;
    if (!regex.test(key)) {
       theEvent.returnValue = false;
       if(theEvent.preventDefault) theEvent.preventDefault();
    }
 };

 const lettersOnly = (evt) => {
    const event = evt || window.event;
    const charCode = event.keyCode || event.which;
    const isSpace = charCode == 32;
    const isBackspace = charCode == 8;
    const isUppercaseChars = charCode > 64 && charCode < 91;
    const isLowercaseChars = charCode > 96 && charCode < 123;
    return (isUppercaseChars || isLowercaseChars || isBackspace || isSpace);
};

function isValidEmail(input) {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return input.match(validRegex) !== null;
  
  }
  
  function validateEmail(el) {
      (isValidEmail(el.value))
      ? console.log('E-mail valido')
      : console.log('E-mail invalido');
  }