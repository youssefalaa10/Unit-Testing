class Observable {
    constructor() {
      this.observers = [];
    }
  
    subscribe(observer) {
      this.observers.push(observer);
    }
  
    unsubscribe(observer) {
      this.observers = this.observers.filter((obs) => obs !== observer);
    }
  
    notify(value) {
      this.observers.forEach((observer) => observer(value));
    }
  }
  
  module.exports = {
    Observable
  };