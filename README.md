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

## Plan:
1. Refactor router to use controllers (see router.js)
2. Add Browserify library
  * Install node and npm
  * Install npm packages browserify, watchify, gulp and any additional dependencies
  * Add single JS file, main.js, to .gitignore and include file with script tag
  * Update vagrant box to recompile main.js on change detection with watchify
  * Change Dockerfile to install required packages and compile main.js on build
3. Add React support
  * Install npm packages react, reactify and backbone-react-component
  * Update gulp build to "reactify" main.js
4. Add Backbone Paginator
  * Install npm package backbone paginator
5. Update single editor to use the new hotness
6. PROFIT!

## Advantages:
1. Multiple controllers with methods mapped to routes
2. Module loading and defining with Browserify
3. Large collection handling with backbone.paginator
4. Compilation, source map generation and minification handled with Browserify

## TODO:
* React Table should save user preferences in a cookie per table
* Style with Bootstrap
* Make sure forms work
* Extract React Table into self contained component which can be required using browserify
* Custom table row callback with custom React row (need a way to add classes to rows)
* Column picker
* Do I really need React keys?
* Automatically Headerize column names into labels by default
  
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