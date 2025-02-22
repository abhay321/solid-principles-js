class PaymentProcessor {
    pay(amount, method) {
      if (method === "credit_card") {
        console.log(`Processing credit card payment of $${amount}`);
      } else if (method === "paypal") {
        console.log(`Processing PayPal payment of $${amount}`);
      }
    }
  }
  // 🔴 Adding a new payment method requires modifying the class.