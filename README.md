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
1. Multiple controllers with methods mapped to routes
2. Module loading and defining with Browserify
3. Front-end dependencies handled using bower and automatically mapped to requirejs via bower-requirejs https://github.com/yeoman/bower-requirejs
4. One way databinding using Marionette views
5. Handle pagination with backbone.paginator
6. Compilation, source map generation and minification handled with Browserify 

## TODO:
* All "define" files must return a instantiable object or plain object. Do not return instances of objects like this: 
  return new Foo() 
* Remove require.js in favor of Browserify
* Remove Marionette in favor of ReactJS
  ** Refactor existing Marionette AppRouter to use generic backbone router
  
## Advantages of Browserify - http://browserify.org/index.html
1. Doesn't require a separate browser package manager stack, example: (bower + bower-requirejs + requirejs) 
2. Use NPM packages and NodeJS tools in the browser
3. Preferred way to require ReactJS
4. Good documentation
5. Less verbose than AMD (requirejs)

## Advantages of React - http://facebook.github.io/react/
1. JSX is REALLY easy to use, has syntax highlighting in PHPStorm + React browser addon for javascript debugging
2. Works seamlessly with Backbone as a drop-in view replacement. (https://github.com/magalhas/backbone-react-component)
3. Virtual DOM does all the heavy lifting in javascript and modifies the DOM in a performant way
4. Easy Optimistic Updates, update the DOM before the AJAX requests finish when you are certain it will work.