const express = require("express")
const server = express()
const router = express.Router()
const fs = require('fs')

server.use(express.json({extended: true}))

const readFile = () => {
    const content = fs.readFileSync('condominium.json', 'utf-8')
    return JSON.parse(content)
}

const writeFile = (content) => {
    const updateFile = JSON.stringify(content)
    fs.writeFileSync('condominium.json', updateFile, 'utf-8')
}

router.get('/', (req, res) =>{
    const content = readFile()
    res.send(content)
})

router.post('/', (req, res) =>{
    const { name, age, vehicle, street, home } = req.body
    const currentContent = readFile()
    const id = Math.random().toString(32).substring(2,9)
    currentContent.push({ id, name, age, vehicle, street, home })
    writeFile(currentContent)
    res.send({ id, name, age, vehicle, street, home })
})

router.put('/:id', (req, res) =>{
    const {id} = req.params
    const { name, age, vehicle, street, home } = req.body

    const currentContent = readFile()
    const selectedItem = currentContent.findIndex((item) => item.id === id)

    const { id: cId, name: cName, age: cAge, vehicle: cVehicle, street: cStreet, home: cHome } = currentContent[selectedItem]

    const newObject = {
        id: id ? id: cId,
        name: name ? name: cName,
        age: age ? age: cAge,
        vehicle: vehicle ? vehicle: cVehicle,
        street: street ? street: cStreet,
        home: home ? home: cHome
    }

    currentContent[selectedItem] = newObject
    writeFile(currentContent)

    res.send(newObject)
})

router.delete('/:id', (req, res) =>{
    const { id } = req.params
    const currentContent = readFile()
    const selectedItem = currentContent.findIndex((item) => item.id === id)
    currentContent.splice(selectedItem,1)
    res.send(currentContent)
})

server.use(router)

server.listen(3000, () => {
    console.log('server on!')
})