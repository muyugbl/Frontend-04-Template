class human{
  constructor(name="人类"){
    this.name=name;
  } 
  hurt(damage){
    if(damage){
      let msg = this.name+"被"+damage+"，伤到了";
      alert(msg)
    }
  }
}
class dog{
  constructor(name="狗"){
    this.name=name;
  }
  bite(){
    let msg=this.name+"狠狠的咬了一口"
    return msg;
  }
}
let god = new human("吕洞宾");
let wolf = new dog("大黑狗");
god.hurt(wolf.bite()); 