class UserRepository {
    save(user) {
      console.log(`Saving ${user.name} to database`);
    }
  }
  
  class EmailService {
    sendEmail(user) {
      console.log(`Sending email to ${user.email}`);
    }
  }
  
  class UserService {
    constructor(userRepository, emailService) {
      this.userRepository = userRepository;
      this.emailService = emailService;
    }
  
    registerUser(user) {
      this.userRepository.save(user);
      this.emailService.sendEmail(user);
    }
  }
  // ✅ Now, each class has a single responsibility.