/**
 * 编写一个diff函数，用于区分两个对象的属性以及值的不同之处。
  * @param {Object} obj1 - 第一个对象
  * @param {Object} obj2 - 第二个对象
  * @returns {Object} - 返回一个对象，包含两个对象的不同之处
  * tips: for... in 循环遍历的是对象的可枚举属性；而for... of 循环遍历的是可迭代对象的值。
  * 注意：如果对象的属性值是一个对象，则需要递归调用diff函数来比较嵌套对象的属性。
  * 注意：如果对象的属性值是一个数组，则需要使用Array.isArray()方法来判断。
  * 注意：如果对象的属性值是一个函数，则需要使用typeof来判断。 
 */
const obj1 = {
  name: '张三',
  age: 18,
  address: {
    city: '北京',
    district: '朝阳区',
    code: '30',
    home: '家里有猫'
  }
}
const obj2 = {
  name: '李四',
  age: 18,
  address: {
    city: '上海',
    district: '浦东新区',
    code: '30',
    house: '家里有狗'
  }
}
function diff(obj1, obj2) {
  const result = {}
  for (const key in obj1) {// 遍历obj1的属性
    if (obj1.hasOwnProperty(key)) {// 判断key是否是obj1的可枚举属性
      if (typeof obj1[key] === 'object' && obj1[key] !== null) {// 判断obj1的属性值是否是对象
        const nestedDiff = diff(obj1[key], obj2[key])// 递归调用diff函数
        if (Object.keys(nestedDiff).length > 0) {// 判断嵌套对象的属性是否有不同之处
          result[key] = nestedDiff// 将不同之处添加到结果对象中,这是关键
        }
      } else if (obj1[key] !== obj2[key]) {// 判断obj1的属性值是否和obj2的属性值不同
        result[key] = { obj1: obj1[key], obj2: obj2[key] || undefined }// 将不同之处添加到结果对象中
      }
    }
  }
  for (const key in obj2) {// 遍历obj2的属性
    if (obj2.hasOwnProperty(key) && !obj1.hasOwnProperty(key)) {// 判断key是否是obj2的可枚举属性
      result[key] = { obj1: undefined, obj2: obj2[key] }// 将obj2中有而obj1中没有的属性添加到结果对象中
    }
  }
  return result
}

const res = diff(obj1, obj2)
console.log(res)
/*{
    name: {
      obj1: '张三',
      obj2: '李四'
    },
    address: {
      city: {
        obj1: '北京',
        obj2: '上海'
      },
      district: {
        obj1: '朝阳区',
        obj2: '浦东新区'
      },
      home: {
        obj1: '家里有猫',
        obj2: undefined
      },
      house: {
        obj1: undefined,
        obj2: '家里有狗'
      }
    }
  }*/