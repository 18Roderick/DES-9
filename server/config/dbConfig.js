const config = {
  db_name: process.env.MONGO_DB_NAME || 'seeds',
  db_password: process.env.MONGO_PASSWORD || '',
  db_port: process.env.MONGO_PORT || 27017,
  db_user: process.env.MONGO_DB_USER || 'root',
  db_host: process.env.MONGO_HOST || 'localhost',
  mongo_url: function() {
    return `mongodb://${this.db_user}:${this.db_password}@${this.db_host}:${this.db_port}/${this.db_name}`;
  }
};

module.exports = config;
