#!/bin/bash

start() {
	service memcached start
	service php7.2-fpm start
	chmod 0666 /var/run/php/php7.2-fpm.sock
	nginx
	rabbitmq-server start
#	mongod --fork --dbpath /var/lib/mongodb/ --smallfiles --logpath /var/log/mongodb.log --logappend
	start-stop-daemon --start --pidfile /var/run/sshd.pid --exec /usr/sbin/sshd -- -p 22
	echo "READY"


	service postgresql start

	sudo -u postgres psql -c "CREATE USER todotion WITH SUPERUSER PASSWORD 'iddqd225';"
	sudo -u postgres psql -c "CREATE DATABASE todotion;"

	export PGPASSWORD=iddqd225




# psql -U gibdd -h localhost -d gibdd -w -a -f /var/www/PgMigration/s*.sql
	# find . -type f -name "script_*.sql" -execdir psql -U gibdd -h localhost -d gibdd -w -a -f {} +
	# find . -type f -name 'script_*.sql'  -printf "%T+\t%p\n" | sort | awk '{print $2}'

	# arr=($(ls -v /var/www/PgMigration/*.sql))

	# for i in "${arr[@]}"; do
	# 	echo "Import from $i ..."
	# 	psql -U gibdd -h localhost -d gibdd -w -a -f $i > /dev/null
	# 	echo "Done."
	# done

	fsmonitor -q -d /var/www "+//default.conf" bash -c "nginx -s reload &&  echo 'nginx reload with default.conf'"
}

case "${1}" in
	bash) 
		bash
		;;
	*)             
		start
		;;
esac