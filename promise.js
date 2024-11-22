// const promise =(a)=>{
    
//     console.log(a)
    
// }

let myPromise = new Promise((success,reject)=>{
    let a=12;

    if(a== 10){
        success('success')
    }else{
        reject('reject')
    }
});
// console.log(myPromise)
myPromise.then((data)=>console.log(data)) //complete
.catch((err)=>console.log(err)) //rejected

