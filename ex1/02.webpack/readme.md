webpack 용도

Webpack은 JavaScript 애플리케이션을 위한 모듈 번들러로, 여러 개의 모듈을 하나의 파일로 묶어주는 기능을 제공합니다. 
이를 통해 애플리케이션의 파일 간 의존성 관리와, 번들링된 파일의 크기 최적화 등을 할 수 있습니다. 
또한, 로더(loader)를 통해 JavaScript가 아닌 파일(예: CSS, 이미지 등)을 모듈처럼 사용할 수 있게 하며, 
플러그인(plugin)을 통해 자동으로 파일을 생성하거나, 코드를 난독화하는 등의 작업도 수행할 수 있습니다. 
이러한 기능들을 통해 개발자들은 효율적이고 편리한 방식으로 프론트엔드 애플리케이션을 구축할 수 있습니다.

-------------------------------------------
index.js 파일에서 import { app } from './app.js'; 를 사용하기 때문에
webpack 알아서 app.js까지 함께 번들에 포함시켜주게됩니다. 

> cd ..\webpack\
> npm install --save-dev webpack webpack-cli
> npx webpack --config webpack.config.js
> http-server.cmd


//webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};



entry는 Webpack이 시작점으로 삼을 파일 경로입니다. 
output은 Webpack이 번들링한 결과물을 내보낼 경로와 파일 이름입니다. 

이 예시에서는 entry를 ./src/index.js로 설정하고, 
output을 ./dist/bundle.js로 설정하였습니다.

path.resolve() 함수는 절대 경로를 생성해주는 Node.js 내장 함수로, __dirname과 'dist'를 인수로 받아 절대 경로를 생성합니다. 
filename은 번들링한 결과물의 파일 이름을 설정합니다.

따라서 이 설정 파일은 ./src/index.js 파일을 시작점으로 삼아 ./dist/bundle.js 파일에 번들링 결과물을 내보내도록 설정되어 있습니다.
