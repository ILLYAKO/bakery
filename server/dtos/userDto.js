// Data Transfer Onject
module.exports = class UserDto {
  email;
  id;
  isActivated;
  role = "client";

  constructor(model) {
    this.email = model.email;
    this.id = model.id;
    this.isActivated = model.isActivated;
    this.role = model.role;
  }
};
