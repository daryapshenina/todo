#!/bin/bash
docker run -d \
-p 8081:80 \
-p 222:22 \
-p 54321:5432 \
-p 8082:8082 \
-p 27017:27017 \
--name todotion \
-v $(pwd):/var/www \
todotion

