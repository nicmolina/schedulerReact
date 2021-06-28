# Getting Started with WorkSpace Hours+

This project(backend and frontend) is using automated(CI-driven) deployment, so you can test the aplication 
on this URL: https://controlworkinghours.netlify.app/ (frontend deployed using Netilify and node API using heroku). 
But you can also test the aplication with docker setup since it has an dockerfile, 
you will need just the two following commands to run: 
1. docker build -t reactscheduler
2. docker run -it --rm -p 3001:3000 reactscheduler
after the commands, type localhost:3000 to see the aplication on local browser.

By the way, you can also test the node API if need using insomnia with the following URL : https://schedulerbackend.herokuapp.com/ ,
this tests will need an Bearer Token on Auth header because the node API is using an interceptor. 
