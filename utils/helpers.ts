/**
 * Timeout
 * @param time
 */
const huwaits = async (time = 300) => {
  await new Promise((resolve) => setTimeout(resolve, time));
};

const isEmailAddress = (email: string) => {
  // eslint-disable-next-line no-var, no-useless-escape
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (mailformat.test(email + "")) return true;
  else return false;
};

export default {
  huwaits,
  isEmailAddress,
};
