// Singleton Pattern - Chỉ có một instance duy nhất
class DatabaseConnection {
  constructor() {
    if (DatabaseConnection.instance) {
      return DatabaseConnection.instance;
    }
    this.connection = "Connected to Database";
    DatabaseConnection.instance = this;
  }

  getConnection() {
    return this.connection;
  }

  query(sql) {
    return `Executing: ${sql}`;
  }
}

module.exports = DatabaseConnection;
