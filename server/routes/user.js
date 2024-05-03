const router = require('express').Router()
const ctrls = require('../controllers/user')
const { verifyAccessToken, isAdmin } = require('../middleware/verifyToken')

router.post('/register', ctrls.register)
router.post('/login', ctrls.login)
router.get('/current', verifyAccessToken, ctrls.getCurrent)
router.post('/refreshtoken', ctrls.refreshAccessToken)
router.get('/logout', ctrls.logout)
router.get('/forgotpassword', ctrls.forgotPassword)
router.get('/', [verifyAccessToken, isAdmin], ctrls.getUsers)
router.delete('/', [verifyAccessToken, isAdmin], ctrls.deleteUser)
router.put('/resetpassword', ctrls.resetPassword)
router.put('/address',[verifyAccessToken], ctrls.updateUserAddress)
router.put('/current', [verifyAccessToken], ctrls.updateUser)
router.put('/cart', [verifyAccessToken], ctrls.updateCart)
router.put('/:uid', [verifyAccessToken, isAdmin], ctrls.updateUserByAdmin)


module.exports = router