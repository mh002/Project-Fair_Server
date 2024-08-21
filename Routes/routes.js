const express=require('express')
const userController=require('../Controllers/userController')
const projectController=require('../Controllers/projectController')
const router=express.Router()
const jwtMiddle=require('../Middlewares/jwtMiddleware')
const multerConfig=require('../Middlewares/multerMiddleware')


router.post('/register',userController.userRegister)
router.post('/login',userController.userLogin)
router.post('/addProject',jwtMiddle,multerConfig.single('image'),projectController.addProjects)
router.get('/home-projects',projectController.homeProjects)
router.get('/all-projects',jwtMiddle,projectController.allProjects)
router.get('/user-projects',jwtMiddle,projectController.userProjects)



module.exports=router