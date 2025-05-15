/**
 * 根据身份证号解析出生日，年龄，还有多少天到生日
 * @param {string} idCard - 身份证号
 * @returns {Object} - 包含生日、年龄和距离下一个生日的天数
 * @example 510104201002286688
 */

function parseIdCard(idCard) {
  const obj = {};
  const birthDate = idCard.substring(6, 14);
  const year = birthDate.substring(0, 4);
  const month = birthDate.substring(4, 6);
  const day = birthDate.substring(6, 8);
  const nowDay = new Date();
  obj.age = nowDay.getFullYear() - year;
  if (nowDay.getMonth() + 1 < month || (nowDay.getMonth() + 1 === month && nowDay.getDate() < day)) {
    obj.age -= 1;
  }
  obj.birthday = `${year}-${month}-${day}`;
  obj.daysToNextBirthday = (new Date(nowDay.getFullYear() + 1, month - 1, day) - nowDay) / (1000 * 60 * 60 * 24);
  return obj;
}
// 测试
const idCard = '510104201002286688';
const result = parseIdCard(idCard);
console.log(result); // { age: 13, birthday: '2010-02-28', daysToNextBirthday: 288.15170032407406 }