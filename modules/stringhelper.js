//module code/ 3 functions goes here
/**
 *
 * @param {*} value
 * @returns
 */
export const upperCaseFullString = (value) => {
  let result = value.toUpperCase();
  return result;
};
/**
 *
 * @param {*} value
 * @returns
 */
export const lowerCaseFullString = (value) => {
  let result = value.toLowerCase();
  return result;
};
/**
 *
 * @param {*} value
 * @returns
 */
export const capitalizeFirstLetters = (value) => {
  let arr = value.split(" ");
  let result;
  if (arr.length > 1) {
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
      result = arr.join(" ");
    }
    return result;
  } else {
    result = value.charAt(0).toUpperCase() + value.slice(1);
    return result;
  }
};

/**
 *
 */
export default {
  upperCaseFullString,
  lowerCaseFullString,
  capitalizeFirstLetters,
};
