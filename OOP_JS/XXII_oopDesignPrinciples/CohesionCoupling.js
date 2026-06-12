// Cohesion và Coupling
// High Cohesion: Các phần tử trong class liên quan chặt chẽ
// Low Coupling: Các class phụ thuộc lẫn nhau ít nhất

// High Cohesion - Tốt: Tất cả methods liên quan đến user management
class UserAccount {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  changeName(newName) {
    this.name = newName;
  }

  changeEmail(newEmail) {
    this.email = newEmail;
  }

  getProfile() {
    return { name: this.name, email: this.email };
  }
}

// Low Coupling - Tốt: Phụ thuộc vào interface, không phụ thuộc vào implementation
class EmailService {
  send(email, subject, body) {
    console.log(`Email sent to ${email}: ${subject}`);
  }
}

class NotificationService {
  constructor(emailService) {
    this.emailService = emailService;
  }

  notify(user, subject, body) {
    this.emailService.send(user.email, subject, body);
  }
}

// High Coupling - Không tốt: Class phụ thuộc trực tiếp vào EmailService
class BadNotificationService {
  notify(user) {
    const emailService = new EmailService();
    emailService.send(user.email, "Hello", "Welcome!");
  }
}

module.exports = { UserAccount, EmailService, NotificationService };
