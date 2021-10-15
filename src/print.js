export function printMe() {
    console.log('I!! get called from print.js!!');
}
  
// 未被引用的测试
export function test() {
    console.log('测试====>')
}

var lengthOfLongestSubstring = function(s) {
    var max = 0;
    var arr = s.split();
    for (let i = 0,len=arr.length; i < len; i++) {
        var temp = [];
        for (let k = i; k < len; k++) {
            if(temp.includes(arr[k])){
                // end
                k = len;
            } else{
                temp.push(arr[k]);
                max = temp.lenth>max ? temp.lenth : max
            }
        }
    }
    return max
};

/**
 * 字符串算出最大不重复的 个数
 * @param {string} s 
 * @returns number
 */
const lengthOfLongestSubstring = s => {
    // 滑动窗口
    const window = [];
    let max = 0;
    const len = s.length;
    for (let i = 0; i < len; i++) {
        // 当前字符在窗口中的索引
        const index = window.indexOf(s[i]);
        if (index !== -1) {
            // 当前字符在窗口中出现过，那么就将窗口中[0,index]区间的全部去除
            // 从index+1开始新一轮的窗口
            window.splice(0, index + 1);
        }
        // 当前字符加入窗口
        window.push(s[i]);
        // 更新最大值
        if (max < window.length) max = window.length;
    }
    return max;
};
