acid.isEnter = (event) => {
  const keyCode = event.keyCode;
  if (keyCode === 13) {
    return true;
  }
  return false;
};
