import cowsay from "cowsay";
// กำหนด namespace ชื่อ A
import { A } from "./nameA";
import { B } from "./nameB";
// ไม่กำหนด namespace แต่สามารถกดหนดชื่อในการนำมาใช้งานแทนได้
import { num as C } from "./nameC";
import { num as D } from "./nameD";

console.log("a number : ", A.num); // กรณีเข้าถึงข้อมูลใน namespace
console.log("b number : ", B.num);
console.log("c number : ", C);
console.log("d number : ", D);

/*
ใช้ป้องกันกรณีที่มีการ import lib ต่างๆแล้วมีชื่อ variable หรือ method ตรงกัน
ทำให้ typescript ไม่สามารถจำแยกได้ จึงต้องใช้ namespace ในการจำแนก
*/
export default "---- Section 3 : Name Space ----";
