class Bird {
    move() {
      console.log("Moving...");
    }
  }
  
  class FlyingBird extends Bird {
    fly() {
      console.log("Flying...");
    }
  }
  
  class Penguin extends Bird {
    swim() {
      console.log("Swimming...");
    }
  }
  // ✅ Now, Penguin doesn’t inherit an irrelevant fly method.