function Parent() {
  this.name = {};
}
Parent.prototype.getName = function () {
  return this.name;
}
function Child() {

}
Child.prototype = new Parent();

child1 = new Child();
child1.name.aa = '张曼';
child2 = new Child();

console.log(child1.getName());
console.log(child2.getName());
