import express from 'express'
import cors from 'cors'

const app = express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => res.send('OI'))


app.listen(3003, () => {
  console.log(`estou ouvindo em http://localhost:3003`);
})