const {
  ValidateLogin,
  ValidateRegister,
  ValidateGetUser,
  ValidateUpdateUser
} = require('../../config/validatorSchema');

const {
  ValidationError
} = require('../utils/errors');

const login = (req, res, next) => {
  const {error, value} = ValidateLogin.validate(req.body);
  if(error) {
    return next(new ValidationError('Inputs do not meet criteria'));
  }
  req.parsed = value;
  next();
};

const register = (req, res, next) => {
  const {error, value} = ValidateRegister.validate(req.body);
  if(error) {
    return next(new ValidationError('Inputs do not meet criteria'));
  }
  req.parsed = value;
  next();
};

const getUser = (req, res, next) => {
  const {error, value} = ValidateGetUser.validate(req.params);
  if(error) {
    return next(new ValidationError('Inputs do not meet criteria'));
  }
  req.params = value;
  next();
};

const updateUser = (req, res, next) => {
  const {error, value} = ValidateUpdateUser.validate(req.body);
  if(error) {
    return next(new ValidationError('Inputs do not meet criteria'));
  }
  req.parsed = value;
  next();
};

exports = module.exports = {
  login,
  register,
  getUser,
  updateUser
};