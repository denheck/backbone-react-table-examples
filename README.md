# Structure Guide

## Advantages:
1. Multiple controllers with methods mapped to routes. Better than one monolithic router.
2. Simplified module loading with requirejs
3. Easier strategy for passing options to newly instantiated objects with "getOption('foo')"

## TODO:

* Make sure each file includes 'use strict'
* All "define" files must return a instantiable object or plain object. Do not return instances of objects like this: 
  return new Foo() 