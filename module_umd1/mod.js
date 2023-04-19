(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
      // AMD 환경에서 모듈을 로드하는 경우
      define([], factory);
    } else if (typeof module === 'object' && module.exports) {
      // CommonJS 환경에서 모듈을 로드하는 경우
      module.exports = factory();
    } else {
      // 브라우저에서 모듈을 로드하는 경우
      root.myModule = factory();
    }
  }(typeof self !== 'undefined' ? self : global, function () {
    // 모듈 내용
    function hello() {
      console.log('Hello, world!');
    }
  
    return {
      hello: hello
    };
  }));