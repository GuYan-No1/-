+function () {
  alert(a);
  a();
  var a = function () {
    console.log(1);
  }
  function a() {
    console.log(2);
  }
  alert(a);
  a();
  var c = d = a;
}()
alert(d);
alert(c);

/**
 * 输出
 * function(){console.log(2)}
 * 2
 * function(){console.log(1)}
 * 1
 * function(){console.log(1)}
 * ReferenceError => c is not defined
 *
 * 题解：函数提升的优先级高于变量提升，未声明的变量会挂在window上
 * */


/** 
 *  题目扩展 1
 */

var a = { n: 1 }; var b = a; a.x = a = { n: 2 };
alert(a.x); // undefined
alert(b.x); // {n:2};


/** 
 *  题目扩展 1
 */

function test() {
  console.log(1);
}
function init() {
  if (false) {
    function test() {
      console.log(2);
    }
  }
  test();
};
init(); // TypeError => test is not function;
