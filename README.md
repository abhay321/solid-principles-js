# SOLID Principles in JavaScript & Node.js 🚀  

This repository contains practical examples of the SOLID principles in JavaScript and Node.js, demonstrating how to build scalable, maintainable, and testable applications.

## 📌 What are SOLID Principles?  
SOLID is a set of five principles that improve software design:  

- **S** - Single Responsibility Principle (SRP)  
- **O** - Open/Closed Principle (OCP)  
- **L** - Liskov Substitution Principle (LSP)  
- **I** - Interface Segregation Principle (ISP)  
- **D** - Dependency Inversion Principle (DIP)  

These principles help in reducing code complexity, improving modularity, and making applications easier to extend.

---

## 📁 Folder Structure  

```
solid-principles-js/
│── src/
│   ├── 1-srp/  # Single Responsibility Principle
│   │   ├── bad-example.js
│   │   ├── good-example.js
│   ├── 2-ocp/  # Open/Closed Principle
│   ├── 3-lsp/  # Liskov Substitution Principle
│   ├── 4-isp/  # Interface Segregation Principle
│   ├── 5-dip/  # Dependency Inversion Principle
│── README.md
│── package.json (optional)
│── .gitignore
```

---

## 🛠 How to Run the Examples  

1. Clone the repository:
   ```sh
   git clone https://github.com/abhay321/solid-principles-js.git
   cd solid-principles-js
   ```

2. Navigate to a specific principle folder and run the example:
   ```sh
   node src/1-srp/good-example.js
   ```

---

## 📚 SOLID Principles with Examples  

### ✅ **1. Single Responsibility Principle (SRP)**  
_A class/module should have only one responsibility._  

🔴 **Bad Example:** A `UserService` class handling user management, database logic, and email sending.  
✅ **Good Example:** Separate classes for `UserRepository`, `EmailService`, and `UserService`.  

📂 **Code:** [`src/1-srp`](src/1-srp/)  

---

### ✅ **2. Open/Closed Principle (OCP)**  
_Code should be open for extension but closed for modification._  

🔴 **Bad Example:** A payment class modified every time a new payment method is added.  
✅ **Good Example:** Using an abstract class/interface to allow easy extension.  

📂 **Code:** [`src/2-ocp`](src/2-ocp/)  

---

### ✅ **3. Liskov Substitution Principle (LSP)**  
_Subtypes should be replaceable without breaking the program._  

🔴 **Bad Example:** A `Penguin` class inheriting from `Bird` but throwing an error when calling `fly()`.  
✅ **Good Example:** Creating separate `FlyingBird` and `NonFlyingBird` classes.  

📂 **Code:** [`src/3-lsp`](src/3-lsp/)  

---

### ✅ **4. Interface Segregation Principle (ISP)**  
_Clients should not be forced to depend on interfaces they do not use._  

🔴 **Bad Example:** A `MultiFunctionPrinter` class that forces `BasicPrinter` to implement `fax()`.  
✅ **Good Example:** Separate interfaces for `Printer`, `Scanner`, and `Fax`.  

📂 **Code:** [`src/4-isp`](src/4-isp/)  

---

### ✅ **5. Dependency Inversion Principle (DIP)**  
_High-level modules should not depend on low-level modules, but on abstractions._  

🔴 **Bad Example:** A `UserService` class directly instantiating `MySQLDatabase`.  
✅ **Good Example:** Depending on an abstract `Database` interface, allowing easy swapping of databases.  

📂 **Code:** [`src/5-dip`](src/5-dip/)  

---

## 🔥 Contributions & Feedback  
🚀 Feel free to improve the examples or suggest better approaches!  

💬 **Questions?** Open an issue or reach out on GitHub.  

📢 **Follow me on GitHub:** [@abhay321](https://github.com/abhay321)  

