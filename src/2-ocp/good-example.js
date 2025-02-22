class PaymentProcessor {
    processPayment(amount) {
      throw new Error("Method not implemented");
    }
  }
  
  class CreditCardPayment extends PaymentProcessor {
    processPayment(amount) {
      console.log(`Processing credit card payment of $${amount}`);
    }
  }
  
  class PayPalPayment extends PaymentProcessor {
    processPayment(amount) {
      console.log(`Processing PayPal payment of $${amount}`);
    }
  }
  
  function processPayment(paymentProcessor, amount) {
    paymentProcessor.processPayment(amount);
  }
  // ✅ The class is open for extension (new payment methods) but closed for modification.