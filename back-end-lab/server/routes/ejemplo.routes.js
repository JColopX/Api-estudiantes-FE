const { Router } = require('express');
const router = Router();
const verifyToken = require('../middlewares/verifyToken');
router.get('/', verifyToken, (req, res) => {
  res.status(200).json({
    message: 'Acceso autorizado',
    usuario: req.usuario,
  });
});

module.exports = router;
