//for
for(let i=0;i<=10;i++){
    const element=i;
    if(element==5){
        console.log("5 is best number")
    }
    console.log((element));
}
//
for(let i=0;i<=10;i++){
    console.log(`outer loop value: ${i}`)
    for (let j = 0; j <= 10; j++) {
        console.log(`innerloop val: ${j} and inner loop${i}`);
        console.log(i + '*' +j+ '=' + i*j);
        
    }
}

// loops on arrays
let arr=['flash', 'batman', 'superman']
for (let index = 0; index < arr.length; index++ ) {
    const element = arr[index];
    console.log(element);
}


//break 
     for (let index = 1; index <=20; index++) {
        if(index==5){
            console.log(`detected 5`);
            break;
        }
        console.log(`value of i is ${index}`);
     }


     //continue
     for (let index = 0; index <=20; index++) {
        if(index==5){
            console.log(`detected 5`)
            continue
        }
        console.log(`val of i is ${index}`);
        
        
     }
    

