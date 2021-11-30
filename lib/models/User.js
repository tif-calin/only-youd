class User {
  id; // string
  login; // string
  passwordHash; // string
  permissions; // ('admin' | 'mod' | 'guest')[]
  createdAt; // Date
  updatedAt; // Date
  email; // string

  constructor({ _id, login, passwordHash, permissions, updatedAt }) {
    this.id = _id.toString();
    this.login = login;
    this.passwordHash = passwordHash;
    this.permissions = permissions;
    this.createdAt = _id.getTimestamp();
    this.updatedAt = new Date(updatedAt);
  }
}

export default User;
