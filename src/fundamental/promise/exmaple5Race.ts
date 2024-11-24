// ใช้รอแค่ตัวแรกที่เสร็จแล้วหยุดการทำงาน promise ตัวอื่นๆเลย

const task1 = new Promise((resolve) => setTimeout(() => resolve("task1 completed!"), 500));
const task2 = new Promise((resolve) => setTimeout(() => resolve("task2 completed!"), 2000));

Promise.race([task1, task2])
    .then((winner) => console.log("Winner:", winner))
    .catch((error) => console.error("Error:", error));

export default '======= promise example 5 promise race ======='
