class MySQLDatabase {
    connect() {
      console.log("Connected to MySQL");
    }
  }
  
  class UserService {
    constructor() {
      this.database = new MySQLDatabase(); // Direct dependency
    }
  }
  // 🔴 UserService is tightly coupled to MySQL, making changes harder.