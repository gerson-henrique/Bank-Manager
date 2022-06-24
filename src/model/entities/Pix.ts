export default class Pix {
  value:number;
  senderId:number;
  key:string;
  date: Date;

  constructor(value: number, senderId:number, key:string, date:Date) {
    this.value = value,
    this.senderId = senderId,
    this.key = key,
    this.date = date
  }
}