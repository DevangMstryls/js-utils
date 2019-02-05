Date.prototype.getDelimeter = function() {
  let number = this.getDate();
  var lastChar = number.toString().split('').pop(); // gives string

  if( lastChar == 1 && number != 11 ) {
    return 'st';
  } else if( lastChar == 2 ) {
    return 'nd';
  } else if (lastChar == 3) {
    return 'rd';
  }

  return 'th';
};

Date.prototype.getMonthText = function() {
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return monthNames[this.getMonth()];
};
