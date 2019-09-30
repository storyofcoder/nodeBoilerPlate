const User = require('../models/users');
const {
  ValidationError,
  PermissionError,
  AuthorizationError,
  DatabaseError,
  NotFoundError,
  OperationalError
} = require('../utils/errors');

const login = async(req, res, next) => {
  const username = req.parsed.username;
  let foundUser = null;
  try {
    foundUser = await User.findOne({username});    
  } catch (error) {
    return next(new AuthorizationError('Username or password do not match'));
  }

  if(foundUser === null || foundUser.password !== req.parsed.password) {
    return next(new NotFoundError('Username or password do not match'));
  }
  next();
};

const getUser = async(req, res) => {
  const username = req.params.username;
  try{
    const user = await User.findOne({username});
    if(user === null) {
      return next(new NotFoundError('No user in the database'));
    }

    res.status(200).json({
      msg: 'User found successfully',
      result: {
        username,
        location: user.location
      }
    });
  } catch(err) {
    next(new DatabaseError('Error in fetching user Info'));
  }
};

const register = async (req, res) => {
  const user = new User();
  user.username = req.parsed.username;
  user.password = req.parsed.password;
  user.location = req.parsed.location;
  try {
    await user.save();
    res.status(201).json({
      msg: 'User successfuly registered'
    });
  } catch (error) {
    next(new DatabaseError('Error in fetching user Info'));
  }
};

const update = async(req, res) => {
  const username = req.parsed.username;
  let user = null;
  try {
    user = await User.findOne({username});
  } catch (error) {
    res.status(400).json({
      msg: 'Some error occurred'
    });
  }
  if(user === null) {
    return next(new NotFoundError('No user in the database'));
  }

  user.location = req.body.location;
  try {
    await user.save();
    res.status(200).json({
      msg: 'User successfuly updated',
      user: {
        location: user.location
      }
    });
  } catch (error) {
    next(new DatabaseError('Could not update User'));
  }
};

module.exports = {
  login,
  getUser,
  update,
  register
};
