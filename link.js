class Peryuan {
  constructor(name) {
    this.name = name
  }
  getnum() {
    console.log('你好getnum')
  }
}

class Times extends Peryuan {
  constructor(name, num) {
    super(name)
    this.num = num
  }
  getname() {
    console.log(`我是${this.name}`)
  }
}

const times = new Times('青柠', 25)
console.log('times', times)
times.getname()
times.getnum()

/* 
当我们访问一个属性或者方法时
首选它会从自身去找 
如果找不到就会往自身的原型上去找
如果原型上找不到 就会去原型的原型上去找
这样就形成了一个链式结构
我们把这样的链式结构称作原型链
*/