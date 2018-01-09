/*
  Main Slogan Generating Engine
*/

import tokens from './tokens';

const randomInt = (bound, bound2) => {
  // bound2 is optional, when passing bound2, random between [bound, bound2)
  // else random between [0, bound)
  if (bound2 !== undefined) {
    return Math.floor((Math.random() * (bound2 - bound)) + bound);
  }
  return Math.floor(Math.random() * bound);
};

/* eslint-disable no-unused-vars */
const generateSlogan = (config = {}) => { /* eslint-enable */
  const minTokens = config.minTokens || 3;
  const maxTokens = config.maxTokens || 6;
  const expectedLength = randomInt(minTokens, maxTokens + 1);

  const result = [];
  const queryToken = tokens.slice();
  if (config.exclude !== undefined) {
    config.exclude.forEach((item) => {
      if (queryToken.indexOf(item) >= 0) {
        queryToken.splice(queryToken.indexOf(item), 1);
      }
    })
  }

  if (config.include !== undefined) {
    config.include.forEach((item) => {
      if (queryToken.indexOf(item) >= 0) {
        queryToken.splice(queryToken.indexOf(item), 1);
        result.push(item);
      }
    });
  }

  const temp = queryToken.slice();
  while (result.length < expectedLength) {
    const t = randomInt(temp.length);
    result.push(temp[t]);
    temp.splice(t, 1);
  }

  Array(15).fill().forEach(() => {
    const a = randomInt(result.length + 1);
    const b = randomInt(result.length + 1);
    const t = result[a];
    result[a] = result[b];
    result[b] = t;
  });

  return result.join(' ');
};

export default {
  generateSlogan,
};
