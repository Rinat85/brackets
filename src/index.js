module.exports = function check(str, bracketsConfig) {
  for (i = 0; i < bracketsConfig.length; i++) {
      var reg = bracketsConfig[i].join('');
      if (str.includes(reg)) {
          while (str.includes(reg)) {
              str = str.replace(reg, '');
          }
      }

  }

  if (str == '') {
      return true
  } else {
      return false;
  }

}