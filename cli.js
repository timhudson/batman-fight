#!/usr/bin/env node

var from = require('from2')
var bf = require('./')

from(function(size, next) {
  setTimeout(function() {
    var word = bf[Math.round(Math.random() * (bf.length - 1))]
    next(null, word + '!\n')
  }, Math.random() * 1500)
}).pipe(process.stdout)
