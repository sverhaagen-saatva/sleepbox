module.exports = (app) => {
    console.log("setup hello")
    app.post("/", (req, res) => {
      console.log("got request")
      res.json({message:"Welcome to sleepbox api"})
    })
  }
