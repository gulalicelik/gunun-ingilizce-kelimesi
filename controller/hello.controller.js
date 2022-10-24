const hello =  (req, res) => {
    console.log("test deneme controller ")
    res.send('Hello World from routes controller')
}

const temp = (req, res) => {
    console.log(req.query)
    res.send('Hello World from temp controller')
}
module.exports ={
    hello,
    temp
}