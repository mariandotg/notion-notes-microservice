import bodyParser from 'body-parser';
import express from 'express'

const app = express()

app.use(bodyParser.text());

app.get('/', (req, res) => {
    res.send('hola mundo!')
})

app.post('/', (req, res) => {
    console.log(req.body)
    const content = req.body
    console.log("content: ", content)
    const splitContent = content.split('\n');
    console.log("splitContent: ", splitContent)

    // Agregar el contenido spliteado al body de respuesta
    const responseBody = {
      original_content: content,
      split_content: splitContent
    }
    res.send(responseBody)
})

app.listen(3000, () => {
    console.log(`Example app listening on port 3000`)
})