class UserService {
    constructor() {
      this.users = [];
    }
  
    addUser(user) {
      this.users.push(user);
    }
  
    saveToDatabase(user) {
      console.log(`Saving ${user.name} to database`);
    }
  
    sendEmail(user) {
      console.log(`Sending email to ${user.email}`);
    }
  }
  // 🔴 The class handles user management, database operations, and email notifications—too many responsibilities.