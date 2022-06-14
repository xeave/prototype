/* 
下面的 Student Teacher 两个里面的name是相同 可以用继承的写法实现
继承的写法
在Student 后面写 extends Person 这个意思 Student类继承Person父类
const student 
我们使用在Student上用Person方法能
student.Person上的方法
我们在使用名字
Student里面用super()里面传递name这个名字
*/

/* 
创建一个共同属性的类名字叫Person在Person中写name 
*/
class Person {
  /* 
  通过 constructor 传进name
  */
  constructor(name) {
    this.name = name
  }
  /* 
  方法也是可以继承
  */
  drink() {
    console.log('喝水不')
  }
}



/* 
创建一个名字是Student的class类 传进name和score两个参数
创建的Person怎么继承用extends Person继承
*/
class Student extends Person {
  constructor(name, score) {
    /* 
    现在我们定义了Person类 我们不用this.name = name 这样写
    我们通过 super() 传name
    */
    super(name)
    this.score = score
  }
  /* 
  可以写一个方法 introduce() 
  */
  introduce() {
    /* 
    这里打印下 我是谁 考了多少分
    */
    console.log(`我是${this.name}，考了${this.score}分`)
  }
}
/* 
const 一个名字 让它等于 new 加上创建的Student类 Student(name的名字,score分数)
*/
const student = new Student('张三', 80)

/* 
console.log 打印 const student这个名字
*/
console.log('student', student)
/* 
const student 这个对象调用下 introduce方法 查看
*/
student.introduce()
student.drink()


/* 
还可以创建一个新的class 如 Teacher类
*/
class Teacher extends Person {
  constructor(name, subject) {
    /* 
    现在我们定义了Person类 我们不用this.name = name 这样写
    我们通过 super() 传name
    */
    super(name)
    this.subject = subject
  }
  /* 
  同样这里可以定义方法
  */
  teach() {
    /* 
    console.log打印下我是谁 我教啥
    */
    console.log(`我是${this.name}，我教${this.subject}`)
  }
}
/* 
const teacher 等于 new Teacher类 Teacher类定义name,object
*/
const teacher = new Teacher('青柠', '自己学习')
/* 
console.log 打印 const teacher 
*/
console.log('teacher', teacher)
/* 
在这里用 const teacher拿到teach方法
*/
teacher.teach()
teacher.drink()