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
  const posts = (await axios.get("https://jsonplaceholder.typicode.com/users/1/posts")).data as Post[];
  const users = (await axios.get("https://jsonplaceholder.typicode.com/users")).data as User[]; 

//   console.log(users[0].phone);
//   console.log(posts[0]);
    users.forEach(user => {
        console.log(user.name + ' || '+ user.phone);
    });

}

start();

export default "---- Section 5 Assert ----";
