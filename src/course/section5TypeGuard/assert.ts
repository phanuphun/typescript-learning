import axios from "axios";
interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: object;
    phone: string;
    website: string;
    company: object;
}

interface Post {
    userid: number;
    id: number;
    title: string;
    body: string;
}

async function start() {
    // type asserting
    // วิธีแรก 1
    const posts = (await axios.get("https://jsonplaceholder.typicode.com/users/1/posts")).data as Post[];
    // วิธีที่สอง 2 Generics
    const users = <User[]>(await axios.get("https://jsonplaceholder.typicode.com/users"))

    //   console.log(users[0].phone);
    //   console.log(posts[0]);
    users.forEach((user) => {
        console.log(user.name + " || " + user.phone);
    });
}

start();

export default "---- Section 5 Assert ----";
