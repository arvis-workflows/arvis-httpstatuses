'use strict';

const arvish = require('arvish');
const codes = require('./codes');

const results = arvish.matches(arvish.input, codes, 'code');
arvish.output(results.map(function (item) {
  return {
    title: item.code + ' - ' + item.message,
    subtitle: item.description,
    arg: item.link
  };
}));