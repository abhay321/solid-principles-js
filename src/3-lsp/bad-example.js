class Bird {
    fly() {
      console.log("Flying...");
    }
  }
  
  class Penguin extends Bird {
    fly() {
      throw new Error("Penguins can't fly!");
    }
  }
  // 🔴 A subclass (Penguin) breaks the expected behavior of the base class.