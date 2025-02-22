/**
 * @method isEmpty
 * @param {String | Number | Object} value
 * @returns {Boolean} true & false
 * @description this value is Empty Check
 */
export const isEmpty = (value: string | number | object): boolean => {
  if (value === null) {
    return true;
  } else if (typeof value !== 'number' && value === '') {
    return true;
  } else if (typeof value === 'undefined' || value === undefined) {
    return true;
  } else if (value !== null && typeof value === 'object' && !Object.keys(value).length) {
    return true;
  } else {
    return false;
  }
};

export const convertToFahrenheit = (value: number): number => {
  let temp: number = value;

  temp = ((value * 9) / 5 + 32);

  temp = roundDecimalDigits(temp);

  return temp;
};

export const convertToCelsius = (value: number): number => {
  let temp: number = value;

  temp = ((value - 32) * 5 / 9);

  return temp;
};

export const roundDecimalDigits = (value: number): number => {
  return Math.round((value + Number.EPSILON) * 100) / 100;
};

export const secondsToMinutes = (value: number): number => {
  return value / 60;
};

// eslint-disable-next-line padded-blocks
export const formatMacAddress = (value: string): string => {

  const sanitizedInput = value.replace(/[^a-fA-F0-9]/g, '');

  // Check if the sanitized input has exactly 12 hexadecimal digits
  if (sanitizedInput.length !== 12) {
    return value;
  }

  // Split the sanitized input into pairs of two characters
  const macAddressPairs = sanitizedInput.match(/.{1,2}/g);

  // Join the pairs with colons to create the MAC address format
  const macAddress = macAddressPairs?.join(':').toUpperCase() || value;

  return macAddress;
};

