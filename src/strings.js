const getUpperCaseString = (string) => string.toUpperCase();
const getLowerCaseString = (string) => string.toLowerCase();
const getStringLength = (string) => string.length;
const getIndexOf = (string, substring) => string.indexOf(substring);
const getLastIndexOf = (string, substring) => string.lastIndexOf(substring);

module.exports = {
  getUpperCaseString: getUpperCaseString,
  getLowerCaseString: getLowerCaseString,
  getStringLength: getStringLength,
  getIndexOf: getIndexOf,
  getLastIndexOf: getLastIndexOf
};
