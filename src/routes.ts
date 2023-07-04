import express, { Request, Response } from 'express'

const router = express.Router()

router.get('/', (req: Request, res: Response) => {
  // Handle the endpoint logic here
  res.send('Hello, World!')
})

export default router
