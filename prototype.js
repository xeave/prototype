/* 
创建了一个Yuan类 __proto__ 里面有getyuan方法 这叫做隐式原型
我们找当前yuan的方法找不到 会去隐式原型找 通过 ages.__proto__ 找
*/
class Ages {
  constructor(name, num) {
    this.name = name
    this.num = num
  }

  getyuan() {
    console.log(`我是${this.name}，我今年${this.num}岁`)
  }
}
/* 
const 后面的名字叫实例
new 后面的名字叫类
类上的 prototype 与实例上的__proto__ 是相等的 
Ages.prototype === ages.__proto__ 结果是true
*/
const ages = new Ages('李四', 40)
console.log('ages', ages)
ages.getyuan()

/* 
Ages.prototype === ages.__proto__
Ages.prototype 这个是类 显式原型
ages.__proto__是隐式原型
在创建的对象上找一个方法找不到可以用对象名字.__ptoto__这个上面找
*/