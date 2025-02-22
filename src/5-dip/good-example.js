class Database {
    connect() {
      throw new Error("Method not implemented");
    }
  }
  
  class MySQLDatabase extends Database {
    connect() {
      console.log("Connected to MySQL");
    }
  }
  
  class PostgreSQLDatabase extends Database {
    connect() {
      console.log("Connected to PostgreSQL");
    }
  }
  
  class UserService {
    constructor(database) {
      this.database = database;
    }
  }
  
  const db = new MySQLDatabase(); // Easily switch databases
  const userService = new UserService(db);
  // ✅ Now UserService depends on an abstraction (Database), allowing easy changes.