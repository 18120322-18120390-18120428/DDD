import slugify from "slugify";

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const generateNickName = (name) => {
  try {
    const nickName = slugify(name, {
      replacement: "", // replace spaces with replacement character, defaults to `-`
      remove: undefined, // remove characters that match regex, defaults to `undefined`
      lower: true, // convert to lower case, defaults to `false`
      strict: false, // strip special characters except replacement, defaults to `false`
      locale: "vi", // language code of the locale to use
      trim: true, // trim leading and trailing replacement chars, defaults to `true`
    });
    const number = randomIntFromInterval(100, 999);

    return `${nickName}${number}`;
  } catch (error) {
    throw new Error(`function generateNickName - ${error}`);
  }
};

export default generateNickName;
