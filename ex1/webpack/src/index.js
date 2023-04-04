import { app } from './app.js';

function createIndex() {
  const div = document.createElement('div');
  div.innerHTML = 'index';
  document.body.appendChild(div);
  
  app(); // app 모듈의 app() 함수 실행
}

createIndex();