class MultiFunctionPrinter {
  print() {
    console.log("Printing...");
  }

  scan() {
    console.log("Scanning...");
  }

  fax() {
    console.log("Faxing...");
  }
}

class BasicPrinter extends MultiFunctionPrinter {
  fax() {
    throw new Error("Fax not supported");
  }
}
// 🔴 BasicPrinter is forced to implement fax even though it doesn’t support it.