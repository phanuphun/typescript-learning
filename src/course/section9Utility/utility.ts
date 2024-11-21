type TodoTag = "important" | "common" | "event";
interface TodoItem {
    title: string;
    description?: string;
    dueDate?: Date;
    completed: boolean;
    createdBy: string;
    tag: TodoTag;
}

// Required กำหนดให้ข้อมูลทั้งหมดใน interface จำเป็นต้องมีการ assign ข้อมูล
const todoTask: Required<TodoItem> = {
    title: "work",
    completed: false,
    createdBy: "gloria freeman",
    tag: "common",
    description: "asdasdasd",
    dueDate: new Date("2027-02-09"),
};

// Partial กำหนดให้ข้อมูลทั้งหมดใน interface จะ assign ข้อมูลหรือไม่ก็ได้ไม่มีการบังคับ
const todoSlowLife: Partial<TodoItem> = {
    title: "sleep",
};

/*
 * - Record เป็นการแบ่งส่วนของข้อมูลโดยมี Key กับ Value ,  Record<Key,Value>
 * - กำหนด EmployeeList กำหนดเป็น Type ที่มี 3 รายการ เมื่อนำไปใส่ไว้ใน key นั่นหมายความว่า Record นี้จะต้องมี key ทั้งหมด
 * 3 รายการด้วยกันนั่นก็คือ john , joe และ jane
 * - ส่วน Value กำหดนดให้ใช้ Utility Pick เป็นการระบุว่าจะใช้แค่ข้อมูลบางส่วนของ interface TodoItem นั่นเอง ในที่นี้ก็มี
 * title และ completed
 */
type EmployeeList = "john" | "joe" | "jane";
const todoOrganization: Record<
    EmployeeList,
    Pick<TodoItem, "title" | "completed">
> = {
    jane: {
        title: "frontend",
        completed: false,
    },
    joe: {
        title: "backend",
        completed: false,
    },
    john: {
        title: "contact",
        completed: true,
    },
};

// Omit เป็นการระบุว่าไม่ต้องการใช้ข้อมูลส่วนไหนในที่นี้ก็คือ จะไม่เอา tag และ createdBy ของ interface TodoItem
const todoMySelf: Omit<TodoItem, "tag" | "createdBy"> = {
    title: "sleep",
    completed: false,
    dueDate: new Date(),
    description: "eansd",
};
