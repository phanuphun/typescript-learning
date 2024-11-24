/*
    - promise เป็น asynchronouse operation แต่จะต่างกับ web api อย่าง settimeout ตรงที่ลำดับการทำงาน
    - web api จะส่ง callback ไปที่ callback Queue แต่ promise จะส่ง callback ไปที่ Microtask Queue 
    ลำดับการทำงานของ  Microtask Queue จะทำงานก่อน Callback Queue 
    ซึ่งหมายความว่าจะมี callback จาก promise ได้ทำงานใน call stack ก่อนเสมอ

    1. ส่ง 'start' ไปที่ call stack แสดงผลบรรทัดที่ 1
    2. settimeout แม้จะ 0 วินาที แต่ก็ต้องส่งไปทำงานที่ web api เหมือนเดิม
    3. promise จะเริ่มทำงานแต่เป็น asynce 
    4. ส่ง 'end' ไปที่ call stack แสดงผลบรรทัดที่ 2
    5. settimeout อาจจะไปอยู่ที่ callback Queue แล้ว
    6. ขณะเดียวกัน promise อาจจะส่ง call back ไปที่ microtask Queue แล้ว
    7. เมื่อ 'end' ทำงานเสร็จสิ้น call stack จะเรียก microtask Queue ก่อน callback Queue
    8. ทำให้แสดงผลใน promise ในบรรทัดที่ 3 และแสดงผล settimeout ในบรรทัดที่ 4 
    * เฉพาะในกรณีที่ promise และ settimeout รออยู่ใน Queue ก่อนแล้ว

    - กรณีที่ microtasj Queue มี 2 การทำงานรอยู่ กับ Callback Queue ก็มี 2 การทำงานรออยู่ call stack 
    จะเคลีย micro task ให้หมดก่อน ค่อยไปเรียกการทำงานจาก Callback Queue

 */

console.log("Start");

setTimeout(() => {
    console.log("Inside setTimeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Inside Promise");
});

console.log("End");

export default 'Event Loop Example 2'