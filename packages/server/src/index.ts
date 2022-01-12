import express, { Application, Request, Response, NextFunction } from 'express';

const app: Application = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    return res.status(200).json({ status: 'success', message: 'Hello' })
  } catch (err: any) {
    next(err)
  }
})

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))