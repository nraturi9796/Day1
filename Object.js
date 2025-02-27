
const mysym=Symbol["key1"]
const obj={
[mysym]:"Key2",
name:"Nitesh",
id:234,
email:"nraturi245@gmail.com",
password:"122@gmail"
}
console.log( obj);
console.log(obj["email"]);
console.log(typeof obj[mysym]);

