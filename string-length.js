const stringLength = (string) => { 
  if (string.length < 1) {
    throw new Error('INVALID - String must be at least 1 character long');
  } else if (string.length > 10) {
    throw new Error('INVALID - String must be at maximum than 10 characters long');
  } else {
    return string.length;
  }
};

module.exports = stringLength;
