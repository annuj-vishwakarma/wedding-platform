import jwt from 'jsonwebtoken';

export const authenticateUser = (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

export const authorizeAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ msg: 'Access denied: Admins only' });
  }
  next();
};

export const authorizeRole = (role) => (req, res, next) => {
  if (req.user.role !== role) {
    return res.status(403).json({ msg: `Access denied: ${role} only` });
  }
  next();
};
