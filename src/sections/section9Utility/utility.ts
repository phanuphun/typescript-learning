type TodoTag = "important" | "common" | "event";

interface TodoItem {
    title: string;
    description?: string;
    dueDate?: Date;
    completed: boolean;
    createdBy: string;
    tag: TodoTag;
}

const todo: TodoItem = {
    title: "work",
    completed: false,
    createdBy: "gloria freeman",
    tag: "common",
};

const todoTask: Required<TodoItem> = {
    title: "work",
    completed: false,
    createdBy: "gloria freeman",
    tag: "common",
    description: "asdasdasd",
    dueDate: new Date("2027-02-09"),
};

const todoSlowLife: Partial<TodoItem> = {
    title: "sleep",
};

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

const todoMySelf: Omit<TodoItem, "tag" | "createdBy"> = {
    title: "sleep",
    completed: false,
    dueDate: new Date(),
    description: "eansd",
};
