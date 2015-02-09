apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | sudo tee /etc/apt/sources.list.d/mongodb.list
apt-get update
apt-get install -y mongodb-org nodejs npm git

# ubuntu saves "node" command as "nodejs"
ln -s /usr/bin/nodejs /usr/bin/node
(cd /vagrant/ && npm install -g bower && npm install && bower install)
