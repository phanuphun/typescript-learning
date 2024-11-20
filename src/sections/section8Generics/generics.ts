interface Person {
    id: number;
    name: string;
    date: Date;
}

interface Player {
    id: string;
    name: string;
    level: number;
}

interface FindOptions<IdValue, nameValue> {
    id?: IdValue;
    name?: nameValue;
}
type DataType = { id: any; name: any };

function findData<Data extends DataType, IdValue = number, nameValue = string>(
    persons: Data[],
    findOptions: FindOptions<IdValue, nameValue>
): Data | undefined {
    for (const person of persons) {
        if (findOptions.id && findOptions.name) {
            if (
                findOptions.id === person.id &&
                findOptions.name === person.name
            ) {
                return person;
            }
        } else {
            if (findOptions.id && findOptions.id === person.id) {
                return person;
            }
            if (findOptions.name && findOptions.name === person.name) {
                return person;
            }
        }
    }
}

const data: Person[] = [
    { id: 1, name: "john Doe", date: new Date("1999-01-01") },
    { id: 2, name: "hoe Dee", date: new Date() },
    { id: 3, name: "john Doe", date: new Date() },
    { id: 4, name: "des SSSas", date: new Date() },
    { id: 5, name: "DDes DDS", date: new Date() },
];

console.log(findData<Person>(data, { id: 2 }));
console.log(findData<Person>(data, { id: 4 }));
console.log(findData<Person>(data, { name: "des SSSas" }));
console.log(findData<Person>(data, { name: "john Doe" }));
console.log(findData<Person>(data, { name: "john Doe", id: 3 }));
console.log(findData<Person>(data, { id: 2 }));

const dataPlayer: Player[] = [
    { id: "ab-20", name: "jaja The red House", level: 989 },
    { id: "ab-30", name: "joe", level: 532 },
    { id: "ab-40", name: "JaiMomon of Liverrin", level: 1554 },
    { id: "ab-50", name: "joe", level: 904 },
];

console.log(findData<Player, string>(dataPlayer, { id: "ab-30" }));

interface User {
    id: number;
    name: string;
    email: string;
}

const dataUser: User[] = [
    { id: 1, name: "dada unigas", email: "pp@gmail.com" },
    { id: 2, name: "dada unimale", email: "starGuard@gmail.com" },
];

console.log(findData<User>(dataUser, { id: 1 }));

export default "---- Section 8 Generics ----";
