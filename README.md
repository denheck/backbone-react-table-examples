# Structure Guide

## Start
1. Install dependencies
```bash
npm install
```

2. Start VM
```bash
vagrant up
```

3. Start web server
```bash
vagrant ssh -c 'cd /vagrant/ && node server.js'
```

## Advantages:
1. Multiple controllers with methods mapped to routes. Better than one monolithic router
2. Module loading with Browserify
3. Easier strategy for passing options to newly instantiated objects with "getOption('foo')"
4. Front-end dependencies handled using bower and automatically mapped to requirejs via bower-requirejs https://github.com/yeoman/bower-requirejs
5. One way databinding using Marionette views

## TODO:
* All "define" files must return a instantiable object or plain object. Do not return instances of objects like this: 
  return new Foo() 
* Remove require.js in favor of Browserify
* Remove Marionette in favor of ReactJS
  ** Refactor existing Marionette AppRouter to use generic backbone router
  
## Advantages of Browserify - http://browserify.org/index.html
1. Doesn't require a separate browser package manager stack, example: (bower + bower-requirejs + requirejs) 
2. Use most NPM packages and NodeJS tools in the browser
3. Preferred way to require ReactJS
4. Good documentation