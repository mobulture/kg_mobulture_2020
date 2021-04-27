
function translate(args){
    const digitWord = ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"]
    for(let i = 0; i < args.length;i++){
        number = args[i];
        let digits = []

        while(number >10){
            console.log(number)
            digits.push(number%10)
            number = Math.floor(number / 10);
        }

        digits.push(number)
        let result = ""
        for(let j =digits.length-1; j >=0; j--){
            result+= digitWord[digits[j]]
        }
        console.log(result)
    }

}

translate([3,25,209])