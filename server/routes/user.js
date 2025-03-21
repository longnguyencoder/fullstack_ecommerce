const router = require('express').Router()
const ctrls = require('../controllers/user')
const { verifyAccessToken, isAdmin } = require('../middleware/verifyToken')
const uploader = require('../config/cloudinary.config')

router.post('/register', ctrls.register)
router.put('/finalregister/:token', ctrls.finalRegister)
router.post('/login', ctrls.login)
router.get('/current', verifyAccessToken, ctrls.getCurrent)
router.post('/refreshtoken', ctrls.refreshAccessToken)
router.get('/logout', ctrls.logout)
router.post('/forgotpassword', ctrls.forgotPassword)
router.get('/', [verifyAccessToken, isAdmin], ctrls.getUsers)
router.put('/resetpassword', ctrls.resetPassword)
router.put('/address', [verifyAccessToken], ctrls.updateUserAddress)
router.put('/current', [verifyAccessToken], uploader.single('avatar'), ctrls.updateUser)
router.put('/cart', [verifyAccessToken], ctrls.updateCart)
router.delete('/remove-cart/:pid/:color', [verifyAccessToken], ctrls.removeProductInCart)
router.delete('/:uid', [verifyAccessToken, isAdmin], ctrls.deleteUser)
router.put('/wishlist/:pid', [verifyAccessToken], ctrls.updateWishlist)
router.put('/:uid', [verifyAccessToken, isAdmin], ctrls.updateUserByAdmin)


module.exports = router