export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;

export default function logMessage(msg) {
  console.log(msg);
}

import logMessage, { add, multiply } from './13.js';