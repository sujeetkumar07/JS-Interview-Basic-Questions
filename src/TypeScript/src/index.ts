import "./style.css";

//typeScript is the superset of javaScript
//to prevent error
//typeScript is all about TypeSafety

/* *****************************             ************************* */
// console.log("sujeet kumar")
// let user = {
//   name: "sujeet",
//   age: 10
// };
// let email=user.email

// let greetings: string = "Sujeet Kumar";

// console.log(greetings);

// number
// let userId: number = 334466.3;
// userId.toFixed();
// console.log(userId);

//boolean
// let isLoggIn: boolean = false;

//any :no type checking

// let hero: string;

// function getHero() {
//   return "sujeet";
// }
// hero = getHero();

// function addTwo(num: number) {
//   return num + 2;
// }
// addTwo(5);

// function getUpper(val: string) {
//   return val.toUpperCase();
// }

// getUpper("4");
// function signUp(name: string, email: string, isPaid: boolean = false) {
//   console.log(name + " " + email + " " + isPaid);
// }

// signUp("sujeet", "sujeet@18129");

// function getValue(myVal: number): any {
//   if (myVal > 5) {
//     return true;
//   }
//   return "200 OK";
// }
// const getHello = (s: string): string => {
//   return " ";
// };

// const heros = ["thor", "spiderman", "ironman"];
// heros.map((hero: string): void => {
//   console.log(`hero is ${hero}`);
// });
// function consoleError(errmsg: string): void {
//   console.log(errmsg);
// }
// const User = {
//   name: "Sujeet",
//   email: "kumar@gmail.com",
//   isActive: true
// };
// function createUser({ name: string, isPaid: boolean }) {
//   console.log(name + "" + isPaid);
// }
// createUser({ name: "sujeet", isPaid: true });
// function createCource(): { name: string; isPaid: boolean } {
//   return { name: "sujeet", isPaid: true };
// }

// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };
// const user1 = {
// name: "sujeet",
// email: "ac@gmail.com",
// isActive: true
// };
// function createUser(user: User): User {
//   console.log(user);
//   return user;
// }
// createUser(user1);

// type User = {
//   readonly _id: string;
//   name: string;
//   email: string;
//   isActive: boolean;
//   creditCardNumber?: number;
// };
// const user1: User = {
//   _id: "12345",
//   name: "sujeet",
//   email: "ac@gmail.com",
//   isActive: true
// };
// function createUser(user: User): User {
//   user._id = "89111";
//   console.log(user);
//   return user;
// }
// createUser(user1);

// type cardNumber = {
//   cardNumber: String;
// };
// type cardDate = {
//   cardDate: string;
// };
// type cardDetails = cardNumber &
//   cardDate & {
//     cvv: number;
//   };

// const superHeros: string[] = [];
// const superPower: Array<string> = [];

// superHeros.push("abc");
// console.log(superHeros);
// superPower.push("abc1");
// console.log(superPower);
// type User = {
//   name: string;
//   isActive: boolean;
// };
// const allUser: User[] = [];
// const MLModels: number[][] = [[255, 255, 255], []];
// console.log("allUser", allUser);

// allUser.push({ name: "sujeet", isActive: true });
// console.log(allUser);

// let score: number | string | boolean = 33;
// score = 44;
// score = "55";

// type User = {
//   name: string;
//   id: number;
// };
// type Admin = {
//   username: string;
//   id: number;
// };

// let details: User | Admin = {
//   name: "sujeet",
//   id: 334
// };
// details = { username: "abc", id: 123 };

// function getDbId(id: number | string) {
//   // console.log(`Db id is :${id}`);
//   // id.toLocaleCase()
// }

// const data:number[]=[1,2,3,4,5]
// const data1:string[]=["1","2","3","4","5"]
// const data3: (number | string | boolean)[] = [1, 2, 3, "4", "5"];

// let seatAllotment:"asle"|"middle"|"window"
// seatAllotment="aisle"
// seatAllotment="crew"

// const user:(string | number)[]=["sk",1]
// let tuser: [string, number, boolean];

// tuser = ["hc", 1, true];

// let rgb: [number, number, number] = [123, 122, 222];

// type User =[number,string,boolean]

// const newUser:User=[112,"abx@mail.com",true]

// // newUser[1] ="dd"
// newUser.push(true)

// enum SeatChoice {
//   aisle="Aisle",
//   middle="MIDDLE",
//   window="WINDOW",
//   // fourth
// }
// const hcSeat =SeatChoice.aisle

/* interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  // startTrail: () => string;
  startTrail(): string;
  getCoupon(couponname: string, off: number): number;
}
interface User {
  githubToken: string;
}
interface Admin extends User {
  role: "admin" | "ta" | "learner";
}
const details: Admin = {
  dbId: 33,
  email: "idd@gmail.com",
  userId: 2222,
  githubToken: "6r76r7",
  role: "admin",
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (name: "discount10", off: 10) => {
    return 10;
  }
};
details.email = "ddyudu@gmail.com"; */

/* class User {
  public email: string;
  private name: string;
  readonly city: string = "Patna";
  constructor(email1: string, name1: string) {
    this.email = email1;
    this.name = name1;
  }
}

const clone1 = new User("abc@gmail.com", "sujeet");
// clone1.city = "patna";
clone1.city; */

// class User {
//   private _courseCount = 1;
//   protected _courseCount1 = 2;
//   readonly city: string = "Patna";
//   constructor(
//     public email1: string,
//     public name1: string,
//     private userId?: string
//   ) {}

// get getAppleEmail(): string {
//   return `apple ${this.email1}`;
// }
// get courseCount(): number {
//   return this._courseCount;
// }
// set courseCount(courseNum) {
//   if (courseNum <= 1) {
//     throw new Error("course count should be more then 1");
//   }
// }
// }
// class subUser extends User {
//   isFamily: boolean = true;
//   changeCourseCount() {
//     this._courseCount1 = 4;
//   }
// }
// const clone1 = new User("abc@gmail.com", "sujeet");
// // clone1.city = "patna";
// clone1.city;

// interface takePhoto {
//   cameraMode: string;
//   filter: string;
//   burst: number;
// }
// interface story {
//   createStory(): void;
// }
// class Instagram implements TakePhoto {
//   constructor(
//     public cameraMode: string,
//     public filter: string,
//     public burst: string
//   ) {}
// }
// class YouTube implements TakePhoto, story {
//   constructor(
//     public cameraMode: string,
//     public filter: string,
//     public burst: string,
//     public short: string
//   ) {}
//   createStory(): void {
//     console.log("story is created");
//   }
// }

// abstract class TakePhoto {
//   constructor(public cameraMode: string, public filter: string) {}
//   abstract getSepia(): void;
//   getReelTime(): number {
//     //some complex calculation
//     return 8;
//   }
// }
// class Instagram extends TakePhoto {
//   constructor(
//     public cameraMode: string,
//     public filter: string,
//     public burst: number
//   ) {
//     super(cameraMode, filter);
//   }
//   getSepia(): void {
//     console.log("sepia");
//   }
// }
// const SK = new Instagram("test", "Test");

// const score: Array<number> = [];
// const names: Array<string> = [];

// function identityOne(val: boolean | number): boolean | number {
//   return val;
// }
// function identityTwo(val: any): any {
//   return val;
// }
// function identityThree<Type>(val: Type): Type {
//   return val;
// }
// // identityThree("sujeet")

// function identityFour<T>(val: T): T {
//   return val;
// }
// interface Bottle {
//   brand: string;
//   type: number;
// }
// identityFour<Bottle>({ brand: "abc", type: 123 });

// function getSearchProducts<T>(products: T[]): T {
//   //do som database operations
//   const myIndex = 3;
//   return products[myIndex];
// }
// const getMoreSearchProduct = <T,>(products: T[]): T => {
//   //do som database operations
//   const myIndex = 4;
//   return products[myIndex];
// };
// interface database {
//   connection: string;
//   username: string;
//   password: string;
// }
// function anotherFuction<T, U extends database>(
//   valueOne: T,
//   valueTwo: U
// ): object {
//   return {
//     valueOne,
//     valueTwo
//   };
// }
// anotherFuction(3, { connection: "xyz", username: "dygdy", password: "dudu" });

// interface Quiz{
//   name:string,
//   type:string
// }
// interface Course {
//   name:string,
//   author:string,
//   subject:string
// }
// class Sellable<T>{
//   public cart: T[]=[]
//   addToCart(products:T){
//     this.cart.push(products)
//   }
// }

// function detectType(val: number | string) {
//   if (typeof val === "string") {
//     return val.toLowerCase();
//   }
//   return val + 3;
// }
// function provideId(id: string | null) {
//   if (!id) {
//     console.log("please provide ID");
//     return;
//   }
//   id.toLowerCase();
// }

// function PrintAll(strs: string | string[] | null) {
//   if (strs) {
//     if (typeof strs === "object") {
//       for (const s of strs) {
//         console.log(s);
//       }
//     } else if (typeof strs === "string") {
//       console.log(strs);
//     }
//   }
// }

// interface User {
//   name: string;
//   email: string;
// }
// interface Admin {
//   name: string;
//   email: string;
//   isAdmin: boolean;
// }
// function isAdminAccount(account: User | Admin) {
//   if ("isAdmin" in account) {
//     return account.isAdmin;
//   }
// }

// function logValue(x: Date |string) {
//   if(x instanceof Date){
//     console.log(x.toUTCString())
//   }
//   else {
//     console.log(x.toUpperCase())
//   }
// }

// type Fish = {
//   swim: () => void;
// };
// type Bird = {
//   fly: () => void;
// };
// function isFish(pet: Fish | Bird):pet is Fish {
//   return (pet as Fish).swim !== undefined;
// }

// function getFood(pet: Fish | Bird) {
//   if (isFish(pet)) {
//     pet;
//     return "fish food";
//   } else {
//     pet;
//     return "bird Food";
//   }
// }

// interface Circle {
//   kind: "circle";
//   radius: number;
// }

// interface Square {
//   kind: "square";
//   side: number;
// }

// interface Rectangle {
//   kind: "rectangle";
//   length: number;
//   width: number;
// }

// type Shape = Circle | Square | Rectangle;

// function getTrueShape(shape: Shape) {
//   if (shape.kind === "circle") {
//     return Math.PI * shape.radius ** 2;
//   }
//   //return shape.side * shape.side
// }

// function getArea(shape: Shape) {
//   switch (shape.kind) {
//     case "circle":
//       return Math.PI * shape.radius ** 2;

//     case "square":
//       return shape.side * shape.side;
//     case "rectangle":
//       return shape.length * shape.width;

//     default:
//       const _defaultforshape: never = shape;
//       return _defaultforshape;
//   }
// }
