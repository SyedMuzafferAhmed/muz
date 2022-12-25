let readlineSync=require('readline-sync')
function encoder(){

    // Step : 1 Accept string Input
    let inputString=readlineSync.question("enter a number")
    console.log(inputString);

    // Split Characters
    let splitString=inputString.split("")
    console.log("The String is : ",splitString)

    // Get ASCII Decimals
    let ASCIICodes=splitString.map((char)=>char.charCodeAt());
    // let ASCIICodes=splitstring.map(function(char){
        // return char.charCodeAt();
    // })
    console.log("The ASCII Array is : ",ASCIICodes);

    // Converting decimal ASCII to binary
    let binaryCodes=ASCIICodes.map((num)=>num.toString(2));
    console.log("Binary Codes : ",binaryCodes)
    
    let binaryCode8Bit=binaryCodes.map((bin)=>{
        while(bin.length<8){
            bin="0"+bin
        }
        return bin;
    })
    console.log("Binaries of 8 bits are : ",binaryCode8Bit)

    let oneBinary=binaryCode8Bit.join("").split("")
    console.log(oneBinary)

    // Spliting in 6 bits
    let binaryCode6Bit=[]
    while(oneBinary.length!=0){
        binaryCode6Bit.push(oneBinary.splice(0,6).join(""))
    }
    console.log("Binaries of 6 Bits are : ",binaryCode6Bit)

    // Padding and add =
    let lastElement=binaryCode6Bit[binaryCode6Bit.length - 1]
    if(lastElement.length!=6){
        var counter = 0
        while(lastElement.length<6){
            lastElement = lastElement+"0"
            counter++
        }
        binaryCode6Bit[binaryCode6Bit.length-1]=lastElement
    }
    console.log("Binaries of 6 bits are : ",binaryCode6Bit)

    let bintodecimal=binaryCode6Bit.map((str)=>parseInt(str,2))
    console.log("Base 64 Decimal : ",bintodecimal)

    let base64="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

    // Decimal to Base 64:-
    let base64final=bintodecimal.map((dec)=>base64[dec])
    console.log("Base 64 String : ",base64final)
    if(counter==2){
        base64final.push("=")
    }else if(counter==4){
        base64final.push("==")
    }

    let finalBase64String=base64final.join("")
    let abc = readlineSync.questionInt("enter")
    
    abc.innerText = finalBase64String;
    console.log("Your Base 64 output is : ",finalBase64String)
}
encoder()