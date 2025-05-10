/**
 * @param {string} time - 时间戳
 * @returns {string} - 格式化后的时间字符串 yyyy-MM-dd HH:mm:ss
 */

function formatTime(time) {
  const date = new Date(time);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
console.log(formatTime(1680000000000)) // 2023-03-28 18:40:00
console.log(formatTime(Date.now())) // 2025-05-10 13:30:30