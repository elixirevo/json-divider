const fs = require('fs')

const data = fs.readFileSync('./test.json', 'utf-8')
const jsonData = JSON.parse(data)

for (let i = 0; i < jsonData.length; i++) {
  fs.writeFileSync(`./json/${i}`, JSON.stringify(jsonData[i]), (err) => {
    console.log(err)
  })
}
