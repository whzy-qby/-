/**
 * @param {any}
 * @returns {boolean}
 * 
 */
const myIntanceof = function (obj, constructor) {//第一个参数为实例对象，第二个参数为构造函数
  if(typeof obj !== 'object' || obj === null) return false
  let proto = Object.getPrototypeOf(obj)
  while(proto !== null) {
    if(proto === constructor.prototype){
      return true
    }
    proto = Object.getPrototypeOf(proto)
  }
  return false
}

function Person(age, gender) {
  this.age = age
  this.gender = gender
}
Person.prototype.attack = () => {
  console.log('我无敌，你随意')
}
const p1 = new Person()
const p2 = new Person(18, '男')
const res1 = myIntanceof(p1, Person)
const res2 = myIntanceof(p2, Person)
const res3 = myIntanceof(p1, Object)
const res4 = myIntanceof(123, Number)
console.log(res1)
console.log(res2)
console.log(res3)
console.log(res4)