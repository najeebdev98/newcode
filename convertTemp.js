function convertTemp(temperatureValue, conversionUnit){        
            //Write your code here 
        return (conversionUnit === 'C') ? 
        temperatureValue - 273 : 
        temperatureValue + 273;    
            
            //return the converted temperatureValue
            
        
}

async function readInput() {
        let inputString = '';
        var output=[];
        process.stdin.on('data', inputStdin => {
            inputString += inputStdin;
            const inputArr = inputString.split(/(?:\r\n|\r|\n)/g)
            const argumentsArr = inputArr[0].split(',');
            output = convertTemp(Number(argumentsArr[0]), argumentsArr[1]);
            console.log(output)
            process.exit();
            
        })
        

}
readInput();
