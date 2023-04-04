babel 

Babel은 자바스크립트 코드 변환을 담당하는 도구입니다. 
자바스크립트 코드를 브라우저가 이해할 수 있는 버전으로 변환하거나, 최신 문법을 사용한 코드를 구 버전의 브라우저에서도 동작할 수 있도록 변환하는 등의 역할을 합니다. 
이를 통해 개발자는 최신 기술을 활용하면서도 다양한 브라우저에서 동작하는 웹 애플리케이션을 만들 수 있습니다. 또한, Babel은 다양한 환경에서 사용되는 JavaScript 코드를 변환할 수 있도록 모듈화되어 있어서, Node.js 환경에서도 사용할 수 있습니다.

> npx babel src/sample.js --out-file dist/sample.js --presets=@babel/preset-env
Error: Requires Babel "^7.0.0-0", but was loaded with "6.26.3". If you are sure you have a compatible version of @babel/core,


> npm uninstall babel-cli -g
> npm uninstall babel-core -g
> npm install @babel/cli -g
> npm install @babel/core -g

> babel -V
7.21.0 (@babel/core 7.21.4)

> npm install --save-dev @babel/preset-env
> npx babel src/sample.js --out-file dist/sample.js --presets=@babel/preset-env

> http-server.cmd
> pwd
작업위치
....ork\forGithub\ex1\babel