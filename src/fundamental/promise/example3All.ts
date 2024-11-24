/*
    ถ้ามี Promise ตัวใดตัวหนึ่งถูก Reject() จะเกิด err เข้าสู่ catch ทันที แต่ promise อื่นๆก็ยังทำงานต่อไป
*/

const task1 = new Promise((rs => setTimeout(() => console.log('task 1 complete'), 1000)))
const task2 = new Promise((rs => setTimeout(() => console.log('task 2 complete'), 2000)))
const task3 = new Promise(((rs, rj) => {
    setTimeout(()=>{
        rj(`task 3 error`)
    },1500)
}))

Promise.all([task1, task2, task3])
    .then((result) => console.log(`complete all tasks: `, result))
    .catch((err) => console.log(err))

export default '======= promise example 3 promise all ======='