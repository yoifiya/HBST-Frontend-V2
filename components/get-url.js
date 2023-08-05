function getUrl(input) {
  if (!input) {
    return;
  }
  const diacriticsMap = {
    "à|á|ả|ã|ạ": "a",
    "ă|ằ|ắ|ẳ|ẵ|ặ": "a",
    "â|ầ|ấ|ẩ|ẫ|ậ": "a",
    "è|é|ẻ|ẽ|ẹ": "e",
    "ê|ề|ế|ể|ễ|ệ": "e",
    "ì|í|ỉ|ĩ|ị": "i",
    "ò|ó|ỏ|õ|ọ": "o",
    "ô|ồ|ố|ổ|ỗ|ộ": "o",
    "ơ|ờ|ớ|ở|ỡ|ợ": "o",
    "ù|ú|ủ|ũ|ụ": "u",
    "ư|ừ|ứ|ử|ữ|ự": "u",
    "ỳ|ý|ỷ|ỹ|ỵ": "y",
    đ: "d",
    "[^a-z0-9]+": " ",
    " ": "-",
  };

  return input
    .toLowerCase()
    .replace(/./g, (char) => {
      for (const key in diacriticsMap) {
        if (new RegExp(key).test(char)) {
          return diacriticsMap[key];
        }
      }
      return char;
    })
    .trim()
    .replace(/\s+/g, "-");
}

export { getUrl };
