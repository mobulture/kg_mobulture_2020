
function divideTen(num){
    let digits = [];
    while(num >= 10){
        digits.push(num%10);
        num = Math.floor(num/10);
    }
    digits.push(num);
    return digits;
}


function translate(nums){
    const digitWord = ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"]
    let results =[];
    for(let i = 0; i < nums.length;i++){
        num = nums[i];
        digits =divideTen(num);
        let curWord = [];
        for(let j =digits.length-1; j >=0; j--){
            curWord.push(digitWord[digits[j]]);
        }
        results.push(curWord.join(""));
    }
    console.log(results.join());
}


var args = process.argv.slice(2);
translate(args)