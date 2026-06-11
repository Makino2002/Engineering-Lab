// Factory Pattern - Tạo objects không cần chỉ định class cụ thể
class MySQLDatabase {
  constructor() {
    this.type = "MySQL";
  }
  connect() {
    return `Connecting to ${this.type}...`;
  }
}

class MongoDBDatabase {
  constructor() {
    this.type = "MongoDB";
  }
  connect() {
    return `Connecting to ${this.type}...`;
  }
}

class PostgreSQLDatabase {
  constructor() {
    this.type = "PostgreSQL";
  }
  connect() {
    return `Connecting to ${this.type}...`;
  }
}

class DatabaseFactory {
  static createDatabase(type) {
    switch (type.toLowerCase()) {
      case "mysql":
        return new MySQLDatabase();
      case "mongodb":
        return new MongoDBDatabase();
      case "postgresql":
        return new PostgreSQLDatabase();
      default:
        throw new Error(`Unknown database type: ${type}`);
    }
  }
}

module.exports = DatabaseFactory;
