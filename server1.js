const http = require('http')
const PORT = 50

const fs = require('fs')

const informationHandler = (req, res) => {
  if(req.url === '/Contact') {
      console.log('Welcome to contact us')
  }else{
    fs.writeFile(`index.html`, `index.html`,(err, result) => {
      if(err){
        console.log('Failed')
      }
      fs.readFile(`index.html`, (err, response) => {
        if(err){
          console.log('Failed')
        }
        console.log(response.toString())
      })
    })
  }
}

http.createServer(informationHandler)

.listen(PORT, () => console.log(`You are listening to ...... Port ${PORT}`))
