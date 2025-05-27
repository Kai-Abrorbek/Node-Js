const moment = require('moment');

class Account {
    #amount;
    #accountId;
    constructor(name, amount, accountId){
      this.name = name;
      this.#amount = amount;
      this.#accountId = accountId;
    };

    tellMeBlance(){
      console.log(`Sizning hisobingizda ${this.#amount}$ pul bor.`);
      return this.#amount;
    }

    withdrawMoney(amount){
      if (this.#amount > amount){
        this.#amount -= amount;
        console.log(`Sizning hisobingizda ${amount}$ pul yechildi va qoldiq: ${this.#amount}$`);
      } else {
        console.log("Hisobizda yetarli mablag mavjud emas: " , this.#amount + "$");
      }
    }

    makeDeposit(amount){  
      this.#amount += amount;
      console.log(`Hisobingiz toldirildi, Hisobingiz: ${this.#amount}$`);
    }

    givMeDetails(){
      console.log(`Salom hurmatli ${this.name} sizning hisobingiz ${this.#amount}$ ga teng`);
      console.log(`Hisob raqamingiz: ${this.#accountId}`);
    }

    static tellMeAboutClass(){
      console.log("Bu class accountlarni yasash uchun hizmat qiladi.");
    }

    static tellMeTime(){
      console.log(`Hozirgi vaqt: ${moment().format('YYYY MM DD HH:mm:ss')}`);
    }
}

module.exports = Account;