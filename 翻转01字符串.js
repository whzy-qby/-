/**
 * @description: 翻转01字符串,使字符串尽可能小,至多翻转一次
 * @param {string} str
 * @return {string}
 * @example: "1110001" => "0001111"：翻转[1-6]
 */

function reverse01(str) {
  let minStr = str; // 初始化为原字符串
    const arr = str.split('');

    // 找到第一个 '1' 的位置
    let firstOne = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '1') {
            firstOne = i;
            break;
        }
    }

    // 如果没有 '1' 或已经是字典序最小（全 '0'），直接返回
    if (firstOne === -1) return str;

    // 找到所有可能的 '0' 的位置（在第一个 '1' 之后）
    for (let j = firstOne; j < arr.length; j++) {
        if (arr[j] === '0') {
            // 复制当前数组，避免修改原数组
            const tempArr = [...arr];
            // 翻转 [firstOne, j] 的子串
            let left = firstOne, right = j;
            while (left < right) {
                [tempArr[left], tempArr[right]] = [tempArr[right], tempArr[left]];
                left++;
                right--;
            }
            // 比较翻转后的字符串
            const flippedStr = tempArr.join('');
            if (flippedStr < minStr) {
                minStr = flippedStr;
            }
        }
    }

    return minStr;
}

const str = '11100101';
const str1 = '101010';
const result1 = reverse01(str1);
const result = reverse01(str);
console.log(result); // 输出: "00111101"
console.log(result1); // 输出: "010101"