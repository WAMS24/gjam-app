import { Router } from 'express'
import * as controllers from '../controllers/users.js'

const router = Router()

router.post("/signup", controllers.signUp)
router.post("/signin", controllers.signIn)
router.get("/verify", controllers.verify)

router.get("/users/:id/cart", controllers.getUserCart)

export default router