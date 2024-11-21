/* จาก course/section11DeclarationFiles
- ทดสอบสร้าง Declaration Files ของตัวเอง
- ** กรณีไม่ property ไม่ปรากฏใน auto complete ให้ตรวจสอบ tsconfig ที่ include ว่า
   กำหนด path ในการตรวจสอบและคอมไพล์ไฟล์ .ts ถูกค้องหรือไม่
*/
declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV?: string;
        PORT?: string;
        DATABASE_URL?: string;
    }
}
