## Contributor Start
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

4. Start watchify
```bash
./node_modules/.bin/watchify static/scripts/index.js -o static/scripts/main.js -t reactify -v -d --extension=.jsx
```
