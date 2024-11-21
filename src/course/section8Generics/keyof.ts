function pickObj<Obj>(obj: Obj[], fields: Array<keyof Obj>): Obj[] {
    return obj.map((it) => {
        const newObj = {} as Obj;
        for (const f of fields) {
            newObj[f] = it[f];
        }
        return newObj;
    });
}

interface User {
    id: number;
    name: string;
    active: boolean;
}

const user: User[] = [
    { id: 1, name: "jane", active: true },
    { id: 2, name: "Odoo", active: false },
    { id: 3, name: "Sawad", active: true },
];

console.log(pickObj<User>(user, ["name", "id"]));

interface Movie {
    title: string;
    star: string[];
    creator: string;
    updateAt: Date;
}

const movies: Movie[] = [
    {
        title: "The Shadow's Legacy",
        star: ["Evelyn Grace", "Mark Hudson", "Sophia Reed"],
        creator: "Liam Carter",
        updateAt: new Date("2024-01-15"),
    },
    {
        title: "Rise of the Phoenix",
        star: ["Olivia Hart", "Ethan Blake", "Chloe Winters"],
        creator: "Isabella Harper",
        updateAt: new Date("2023-12-01"),
    },
];

console.log(pickObj<Movie>(movies, ["title", "updateAt"]));

export default "---- Section 8 Keyof ----";
