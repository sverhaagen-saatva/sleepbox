const app = require('./functions/setup')

app.listen(app.get("port"), () => {
    console.log(`Find the server at http://localhost:${app.get("port")}/`)
})
