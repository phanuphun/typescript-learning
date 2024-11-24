const delayTask = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('task completed !');
    },200)
})

delayTask
    .then(result => console.log(result))
    .catch(err => console.log(err))

export default '======= promise example 2 promise with delay ======='