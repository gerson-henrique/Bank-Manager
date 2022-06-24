export default class Pix {
  private _value:number;
  senderId:number;
  key:string;
  date: Date;

  constructor( senderId:number, key:string, date:Date) {
    this._value = 0,
    this.senderId = senderId,
    this.key = key,
    this.date = date
  }

  set value(value:number){
    this._value = value
  }

  get value(){
    return this._value
  }

}