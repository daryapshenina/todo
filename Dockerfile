#Установка контейнера:
#cd %dockerfile_dir%
#sudo docker build -t gibdd .

#CID_GIBDD=$(docker run -d -p 8080:80 -p 221:22 -v /var/www/gibdd/test:/var/www gibdd) && docker inspect -format '{{ .NetworkSettings.IPAddress }}' ${CID_GIBDD}

#Получить IP адрес контейнера
#docker inspect -format '{{ .NetworkSettings.IPAddress }}' ${CID_GIBDD}

#Запуск контейнера после остановки:
#docker start ${CID_GIBDD}

FROM ubuntu:16.04

#Выставляем для пользователя root пароль 1
RUN echo 'root:1' |chpasswd

#От какокого пользователя работает PHP-FPM
ENV WWW_USER dara

ENV DEBIAN_FRONTEND noninteractive
#RUN sed -i -e 's/archive.ubuntu.com\|security.ubuntu.com/old-releases.ubuntu.com/g' /etc/apt/sources.list

# Устанавливаем всё необходимое, после чего чистим кеш репозиториев для уменьшения размера образа
RUN apt-get update

RUN apt-get install -qqy python-software-properties software-properties-common
#RUN add-apt-repository -y ppa:chris-lea/node.js
RUN add-apt-repository -y ppa:nginx/stable

# Для установки mongo

RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
RUN echo "deb [ arch=amd64 ] http://repo.mongodb.org/apt/ubuntu precise/mongodb-org/3.4 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-3.4.list


RUN apt-get upgrade -qqy
RUN apt-get install -qqy build-essential libaio1
RUN apt-get install -qqy nodejs
RUN apt-get install -qqy npm
RUN apt-get install -qqy nginx
RUN apt-get install -qqy sphinxsearch
RUN apt-get install -qqy mc nano curl wget
RUN apt-get install -qqy subversion git mercurial
RUN apt-get install -qqy rabbitmq-server
RUN apt-get install -y composer

RUN apt-get install -qqy apt-transport-https ca-certificates
RUN wget -O /etc/apt/trusted.gpg.d/php.gpg https://packages.sury.org/php/apt.gpg
RUN echo "deb https://packages.sury.org/php/ jessie main" > /etc/apt/sources.list.d/php.list

#START PHP

RUN apt-get install -y php php-curl php-cgi php-cli php-fpm php-dev php-mysql php-odbc php-pgsql php-xml php-soap php-mbstring php-zip php-mcrypt php-pear
RUN apt-get install -y zip unzip
RUN apt-get update
RUN apt-get upgrade -qqy
RUN apt-get upgrade -qqy php7.2
RUN apt-get upgrade -qqy php7.2-fpm
RUN apt-get upgrade -qqy php7.2-curl php7.2-cgi php7.2-cli
RUN apt-get upgrade -qqy php7.2-dev php7.2-mysql
RUN apt-get upgrade -qqy php7.2-odbc php7.2-pgsql php7.2-xml php7.2-soap
RUN apt-get upgrade -qqy php7.2-mbstring php7.2-zip php-pear

#Включаем отладку в xdebug
	RUN echo \
		'xdebug.default_enable=1 \n\
xdebug.var_display_max_children=-1 \n\
xdebug.var_display_max_data=-1 \n\
xdebug.var_display_max_depth=-1 \n\
xdebug.var_display_max_depth=-1 \n\
xdebug.remote_connect_back=0 \n\
xdebug.remote_log=/tmp/xdebug_remote.log \n\
xdebug.remote_host=172.17.42.1 \n\
xdebug.remote_port=9000 \n\
xdebug.idekey=DEBUG \n\
xdebug.remote_autostart=1 \n\
xdebug.remote_enable=1' >> /etc/php/7.2/mods-available/20-xdebug.ini





	# Всё что касается memcache
	RUN apt-get install -qqy memcached php-memcache php-memcached

	#Включаем отладку в xdebug


	#Ставим и настраиваем Oracle client и php oci8-2.0.11
	ADD bundle /tmp


#	RUN pecl install mongo
#	RUN echo \
#		'extension=mongo.so' >> /etc/php/7.0/conf.d/mongo.ini
#END PHP


RUN mkdir -p /var/commands/mongo
RUN mkdir -p /data/db

COPY bundle/mongo/*.js /var/commands/mongo/

RUN cp /tmp/mongod.conf /etc/mongod.conf
RUN echo "user ${WWW_USER};" > /etc/nginx/nginx.conf && cat /tmp/nginx.conf >> /etc/nginx/nginx.conf

#SSH
RUN apt-get -qqy install openssh-server
RUN mkdir -p /var/run/sshd
RUN sed -ri 's/UsePAM yes/#UsePAM yes/g' /etc/ssh/sshd_config
RUN sed -ri 's/#UsePAM no/UsePAM no/g' /etc/ssh/sshd_config
#RUN sed -ri 's/PermitRootLogin without-password/PermitRootLogin yes/g' /etc/ssh/sshd_config

#Создаём ключ хоста, чтобы не было проблем с обновлением ключа при подключении
RUN service ssh start; service ssh stop

RUN useradd ${WWW_USER} -s /bin/bash -m

RUN sed -ri "s/www-data/${WWW_USER}/" /etc/php/7.2/fpm/pool.d/www.conf

RUN sed -i 's/memory_limit = 128M/memory_limit = 512M/g' /etc/php/7.2/fpm/php.ini


RUN rm /etc/nginx/sites-available/default
RUN ln -s /var/www/default.conf /etc/nginx/sites-available/default
RUN cat /tmp/profile >> /etc/profile

#START CLEAN
	RUN apt-get clean -y && rm -rf \
		/var/lib/apt/lists/* \
		/tmp/* \
		/var/tmp/*
#END CLEAN

RUN  npm install -g fsmonitor



RUN add-apt-repository "deb http://apt.postgresql.org/pub/repos/apt/ xenial-pgdg main"
RUN wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | apt-key add -
RUN apt-get update
RUN apt-get install -y postgresql
RUN apt-get install -y sudo \
				less \
				nano

# Adjust PostgreSQL configuration so that remote connections to the
# database are possible.
RUN echo "host all  all    0.0.0.0/0  md5" >> /etc/postgresql/10/main/pg_hba.conf

# And add ``listen_addresses`` to ``/etc/postgresql/9.3/main/postgresql.conf``
RUN echo "listen_addresses='*'" >> /etc/postgresql/10/main/postgresql.conf


ADD wwwdev.sh /usr/bin/wwwdev
RUN chmod +x /usr/bin/wwwdev

EXPOSE 54321

EXPOSE 27017
VOLUME /var/www
EXPOSE 80 22 9001

ENTRYPOINT ["wwwdev"]
