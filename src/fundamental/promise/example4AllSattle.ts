/*
    คล้ายกับ promise all แต่ต่างกันตรงที่ all sattle จะรอผลลัพธ์ให้เสร็จหมดก่อนแล้วค่อยส่งคืนผลลัพธ์
    ผลลัพธ์จะส่งคืนมาเป็น array ที่เป็ร obj โดยมี props status และ value ที่คืนมาจาก promise นั้นๆ
    props status มีอยู่ 2 ค่าก็คือ fulfilled กับ rejected
    
    OUTPUT : 
    [
        { status: 'fulfilled', value: 'task 1 complete!' },
        { status: 'fulfilled', value: 'task 2 complete!' },
        { status: 'rejected', value: 'task 3 complete!' }
    ]
*/

const t1 = new Promise((res,rej)=>{
    setTimeout(() => {
        res('task 1 complete!')
    }, 1000);
})
const t2 = new Promise((res,rej)=>{
    setTimeout(() => {
        res('task 2 complete!')
    }, 3000);
})
const t3 = new Promise((res,rej)=>{
    setTimeout(() => {
        rej('task 3 complete!')
    }, 1500);
})

Promise.allSettled([t1,t2,t3]).then((result)=>{
    console.log(result);
})

export default '======= promise example 4 promise all Sattle ======='