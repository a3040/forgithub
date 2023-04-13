babel을 이용해서 자바스크립트 코드를 브라우저가 이해할 수 있는 버전으로 변환
webpack을 이용 여러 개의 모듈을 하나의 파일로 묶어서 하나의 파일로 만들어 사용합니다.

> cd ..\babelwebpack\
> npm install --save-dev webpack webpack-cli babel-loader @babel/core @babel/preset-env
> npx webpack --mode production
> http-server.cmd 

// webpack.config.js
module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: __dirname + '/dist'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    }
  };
  
  
webpack의 설정 파일인 webpack.config.js 입니다. 
여기서 entry는 번들링 할 소스 코드 파일 경로를 지정하고, 
output은 번들링한 결과물의 경로와 파일 이름을 지정합니다.

위 설정에서는 entry가 ./src/index.js이고, 
output은 filename이 bundle.js이고 path는 현재 디렉터리 경로에서 dist 디렉터리를 지정합니다.

module.rules는 소스 코드를 번들링할 때 적용할 로더를 설정하는 부분입니다. 
이 설정에서는 .js 확장자 파일을 babel-loader로 번들링하도록 지정하고, 
babel-loader에는 @babel/preset-env를 프리셋으로 사용하여 ES6 이상의 코드를 ES5로 변환하도록 설정되어 있습니다.

이렇게 webpack.config.js를 설정하면 
webpack 명령어를 실행하면 지정한 entry 파일을 기준으로 소스 코드를 번들링하여 
output에서 지정한 경로와 파일 이름으로 저장하게 됩니다.