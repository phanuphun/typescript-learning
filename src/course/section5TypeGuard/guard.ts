type PasswordT = string | number 

const userPin = 123456789
const userPassword = 'myPass123'

function checkPassword(password : PasswordT) : boolean{
    if(typeof password === 'string'){
        return password === userPassword
    }
    if(typeof password === 'number') {
        return password === userPin
    }
    return false
}

console.log(checkPassword('myPass123'));
console.log(checkPassword(123456789));

function formatDate(date: Date | string) : string{    
    if( typeof date === 'string'){
        date = new Date(date)
    }
    return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
}

console.log(formatDate('2000-10-16'));
console.log(formatDate(new Date()));


export default '---- Section 5 Guard ----'
