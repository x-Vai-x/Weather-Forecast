const express=require('express')
const app=express()
const path = require('path')
const bodyParser=require('body-parser')
const fetch = require('node-fetch')


app.use(express.static(path.resolve(__dirname+ '/public/')))
app.use( bodyParser.json() )       
app.use(bodyParser.urlencoded({    
  extended: true
}))


app.post('/weather/current',async function(req, res){
	const city=req.body.city
	const country=req.body.country
	console.log(city)
	console.log(country)

	let json= await fetch('https://openweathermap.org/data/2.5/weather?q='+city+','+country+'&appid=b6907d289e10d714a6e88b30761fae22', {
      method: 'get',
      dataType: 'json',
      headers: {"Content-Type": "application/json"}
    })
     json=await json.json()
     console.log(json)
    res.json(json)
})

app.post('/weather/forecast',async function(req, res){
  const city=req.body.city
  const country=req.body.country
  console.log(city)
  console.log(country)

  let json= await fetch('https://openweathermap.org/data/2.5/forecast/daily?q='+city+','+country+'&appid=b6907d289e10d714a6e88b30761fae22', {
      method: 'get',
      dataType: 'json',
      headers: {"Content-Type": "application/json"}
    })
     json=await json.json()
     
     let list=json.list.map(item => {
        item.dt=new Date(item.dt*1000).toUTCString()
        return item
      })
     json.list=list
     console.log(json.list[0].weather)
     res.json(json)
})


const server= require('http').createServer(app)
server.listen(process.env.PORT ||3000)
