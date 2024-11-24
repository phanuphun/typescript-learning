/*
    โครงสร้างเบื้องต้น
    new Promise((resolve , reject)=>{
        resolv(value); // กรณีทำงานสำเร็จ
        reject(error); // กรณีทำงานผิดพลาด
    })
*/

const myPromise = new Promise((resolve, reject) => {
    let success = false;
    if (success) {
        resolve('task completed')
    } else {
        reject('task failed')
    }
})

myPromise
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    })


export default '======= promise example 1 basic use ======='