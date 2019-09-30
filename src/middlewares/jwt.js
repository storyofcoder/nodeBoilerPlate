const jwt = require('jsonwebtoken');
const {
  AuthorizationError,
  OperationalError
} = require('../utils/errors');

const sendToken = (req, res) => {
  jwt.sign({ username: req.parsed.username }, process.env.SECRET, { expiresIn: '1200s' }, (err, token) => {
    if(err) {
      return next(new OperationalError('Could not generate Token'));
    }
    res.status(200).json({token});
  });
};

const verifyToken = (req, res, next) => {
  let token = null;
  const bearerHeader = req.headers.authorization;
  // check if bearer is undefined
  if (typeof bearerHeader !== 'undefined') {
    // Split at space
    const bearer = bearerHeader.split(' ');
    // get token from array
    const bearerToken = bearer[1];
    // set the token
    token = bearerToken;
  } else {
    return next(new AuthorizationError('Did not receive token'));
  }
  
  jwt.verify(token, process.env.SECRET, (err) => {
    if(err) {
      return next(new AuthorizationError('Token Invalid. Forbidden!'));
    }
    next();
  });
};

exports = module.exports = {
  sendToken,
  verifyToken
}