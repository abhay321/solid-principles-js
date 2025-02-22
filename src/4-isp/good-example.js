class Printer {
    print() {
      console.log("Printing...");
    }
  }
  
  class Scanner {
    scan() {
      console.log("Scanning...");
    }
  }
  
  class Fax {
    fax() {
      console.log("Faxing...");
    }
  }
  
  class BasicPrinter extends Printer {}
  class AdvancedPrinter extends Printer {
    constructor(scanner, fax) {
      super();
      this.scanner = scanner;
      this.fax = fax;
    }
  }
  // ✅ Each interface is separate, ensuring flexibility.