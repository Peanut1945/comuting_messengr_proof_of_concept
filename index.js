const inp = document.querySelector(".test")
const awnser = document.querySelector(".result")
let asciival = ""
let binaryval = ""
let currentletter = ""
let info = prompt("please enter a small message")
console.log(info)

info = info.toString()

origianlAmount = info.length


//console.log(origianlAmount)
// converting into ascii and binary
const convertion = () =>{
    for (let i = 0; i<origianlAmount ; i++ ){
        //makes the current letter into ascii
        currentletter = info.charCodeAt(i)
        //stores ascii value
        asciival += currentletter
        //turns current letter into binary
        currentletter = currentletter.toString(2)
        //stanardises the size of each letter to 8 bits
        while (currentletter.length != 8){
            currentletter = "0"+currentletter
        }
        //console.log(currentletter)
        binaryval += currentletter
        //console.log(binaryval)
        asciival += " "
    }
    return binaryval
}

// this splits the data into two parts
const split = (binaryval) =>{
    //this finds the middle ( the part we are going to split at)
    location = Math.floor(binaryval.length/2)
    array = binaryval.split()
    console.log(array)
    for (let i = 0; i < location;i++){
        start = array[i]
    }
    for ( let j = location; j<binaryval.length;j++){
        end = array[i]
    }
    console.log(start)
    console.log(end)
}

//convertion()

split(convertion())
