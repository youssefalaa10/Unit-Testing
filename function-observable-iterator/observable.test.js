const { Observable } = require("./observable");

describe("Observable", () => {
  let observable;
  let observer1;
  let observer2;

  beforeEach(() => {
    observable = new Observable();
    observer1 = jest.fn();
    observer2 = jest.fn();
  });

  test("should not notify any observers if none are subscribed", () => {
    observable.notify(10);

    expect(observer1).not.toHaveBeenCalled();
    expect(observer2).not.toHaveBeenCalled();
  });

  test("should notify observers with different values", () => {
    observable.subscribe(observer1);

    observable.notify(10);
    expect(observer1).toHaveBeenCalledWith(10);

    observable.notify(20);
    expect(observer1).toHaveBeenCalledWith(20);

    observable.notify(30);
    expect(observer1).toHaveBeenCalledWith(30);
  });



  test("should handle observers that unsubscribe themselves during notification", () => {
    const selfUnsubscribingObserver = jest.fn((value) => {
      if (value === 50) {
        observable.unsubscribe(selfUnsubscribingObserver);
      }
    });

    observable.subscribe(selfUnsubscribingObserver);
    observable.notify(50);

    // Observer should receive the notification for 50 and then unsubscribe itself
    expect(selfUnsubscribingObserver).toHaveBeenCalledWith(50);

    observable.notify(60);

    // Observer should not be notified again since it unsubscribed itself
    expect(selfUnsubscribingObserver).toHaveBeenCalledTimes(1);
  });

  test("should handle multiple observers unsubscribing themselves during notification", () => {
    const selfUnsubscribingObserver1 = jest.fn((value) => {
      if (value === 70) {
        observable.unsubscribe(selfUnsubscribingObserver1);
      }
    });
    
    const selfUnsubscribingObserver2 = jest.fn((value) => {
      if (value === 70) {
        observable.unsubscribe(selfUnsubscribingObserver2);
      }
    });

    observable.subscribe(selfUnsubscribingObserver1);
    observable.subscribe(selfUnsubscribingObserver2);

    observable.notify(70);

    expect(selfUnsubscribingObserver1).toHaveBeenCalledWith(70);
    expect(selfUnsubscribingObserver2).toHaveBeenCalledWith(70);

    observable.notify(80);

    expect(selfUnsubscribingObserver1).toHaveBeenCalledTimes(1);
    expect(selfUnsubscribingObserver2).toHaveBeenCalledTimes(1);
  });

  test("should handle rapid subscriptions and notifications", () => {
    for (let i = 0; i < 100; i++) {
      const observer = jest.fn();
      observable.subscribe(observer);
      observable.notify(i);
      expect(observer).toHaveBeenCalledWith(i);
      observable.unsubscribe(observer);
    }
  });
});
