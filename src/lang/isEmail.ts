const isEmail = (str: string) =>
  // /\A\s*([^@\s]{1,64})@((?:[-a-z0-9]+\.)+[a-z]{2,})\s*\z/i regex from Rails email_validator gem
  /^\s*([^@\s]{1,64})@((?:[-a-z0-9]+\.)+[a-z]{2,})\s*$/gi.test(str); // converted using https://github.com/janosch-x/js_regex.

export default isEmail;
