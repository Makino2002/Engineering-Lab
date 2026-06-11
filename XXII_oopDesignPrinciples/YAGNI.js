// YAGNI - You Aren't Gonna Need It
// Không thêm tính năng cho đến khi thực sự cần

// Tốt: Chỉ có những gì cần
class UserManager {
  constructor() {
    this.users = [];
  }

  addUser(name, email) {
    this.users.push({ name, email });
  }

  getUserByEmail(email) {
    return this.users.find((user) => user.email === email);
  }

  getAllUsers() {
    return this.users;
  }
}

// Không tốt: Thêm nhiều features mà chưa cần dùng
class AdvancedUserManager {
  constructor() {
    this.users = [];
    this.deletedUsers = [];
    this.archivedUsers = [];
    this.userRoles = [];
    this.userPermissions = [];
    this.userAuditLog = [];
    this.userNotifications = [];
  }

  addUser(name, email) {
    this.users.push({ name, email, createdAt: new Date() });
  }

  getUserByEmail(email) {
    return this.users.find((user) => user.email === email);
  }

  deleteUser(email) {
    const user = this.getUserByEmail(email);
    if (user) {
      this.deletedUsers.push(user);
      this.users = this.users.filter((u) => u.email !== email);
    }
  }

  archiveUser(email) {
    const user = this.getUserByEmail(email);
    if (user) {
      this.archivedUsers.push(user);
    }
  }

  // ... và nhiều methods khác chưa cần dùng
}

module.exports = { UserManager, AdvancedUserManager };
