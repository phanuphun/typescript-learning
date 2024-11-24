/* 
    javascript เป็น single-threaded ซึ่งจะทำงานทีละคำสั่ง 
    ** แต่ js ก็สามารถจัดการงานหลายคำสั่งได้ผ่าน Asynchronous Operations เช่น setTimeout, fetch, หรือการอ่านไฟล์

    1. call stack : เป็นที่ๆ javascript สั่งทำงาน
    2. Web APIs : เป็นฟีเจอร์ที่เวบเบราเซอร์จัดการ เช่น setTimeout, DOM, หรือ fetch
    3. Callback Queue : เมื่อเว็บ API ทำงานเสร็จมันจะส่ง 'callback' มาที่ Queue รอให้ call stack ว่าง
    4. Event Loop : จะตรวจสอบว่า call stack ว่างหรือยัง ถ้าว่างก็จะดึง callback ที่รออยู่ที่ Queue ไปที่ call stack


    Blocking: ฟังก์ชันที่ใช้เวลารันนานจะทำให้ Call Stack ไม่ว่าง
    Non-blocking: งาน Asynchronous (เช่น setTimeout) จะไม่ขวาง Call Stack
*/

/*
    การทำงานของ code
    1. ส่ง 'start' ไปทำงานเป็นอันดับแรกที่ call stack
    2. settimeout เป็ฯ Asynchronous Operations ทำงานบน web brownser ซึ่งเป็น Non-blocking 
    แม้จะใช้ระยะเวลานาน 1 วินาที แต่ก็ไม่ได้ block การทำงานของคำสั่งต่อไป
    3. ส่ง 'End' ออกมาแสดงผลที่ call stack
    4. ในขณะที่ลำดับที่ 3 ทำงานที่ call stack อยู่ settimeout อาจจะเสร็จแล้วก็ได้ จึงส่งไปที่ Callback Queue
    5. เมื่อคำสั่งจากขั้นตอนที่ 3 เสร็จสิ้นแล้ว call stack ก็จะเรียก ca llback ที่รออยู่ที่ Queue มาทำงานต่อ

*/

console.log("Start");  

setTimeout(() => {
    console.log("This is inside setTimeout"); 
}, 1000);

console.log("End");  

export default "Event Loop Example 1"
