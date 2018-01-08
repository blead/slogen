/*
  Main Slogan Generating Engine
*/

import tokens from './tokens';

const randomInt = (bound, bound2) => {
  // bound2 is optional, when passing bound2, random between [bound, bound2)
  // else random between [0, bound)
  if (bound2 !== undefined) {
    return Math.floor((Math.random() * (bound2 - bound)) + bound);
  } else {
    return Math.floor(Math.random() * bound);
  }
};

/* eslint-disable no-unused-vars */
const generateSlogan = (config) => { /* eslint-enable */
  const minTokens = config.minTokens || 1;
  const maxTokens = config.maxTokens || tokens.length;
  const expectedLength = randomInt(minTokens, maxTokens);

  const result = [];
  const temp = tokens.slice();
  while (result.length < expectedLength) {
    const t = randomInt(temp.length);
    result.push(temp[t]);
    temp.splice(t, 1);
  }

  return result.join(' ');
};

export default {
  generateSlogan,
};
