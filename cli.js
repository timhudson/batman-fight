#!/usr/bin/env node

var from = require('from2')
var bf = require('./')

from(function(size, next) {
  setTimeout(function() {
    next(null, bf[Math.round(Math.random() * bf.length)] + '!\n')
  }, Math.random() * 1500)
}).pipe(process.stdout)
