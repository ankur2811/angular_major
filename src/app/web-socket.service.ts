// import { Injectable } from '@angular/core';
// import { Observable, Subscriber } from 'rxjs';
// import  {io} from 'socket.io-client';


// @Injectable({
//   providedIn: 'root'
// })
// export class WebSocketService {

//   socket:any;
//   readonly url:string="ws://192.168.1.5:5555";
//   constructor() {
//     this.socket=io(this.url)
//   }
 

//   listen(eventName:string){
//     return new Observable((subscriber)=>{
//     this.socket.on(eventName,(data:any)=>{
//       console.log(data)
//       subscriber.next(data);
//     })
//     })
//   }


//   emit(eventName:string,data:any){
//     this.socket.emit(eventName,data);

//   }
// }
