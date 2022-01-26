const userRoutes = (app, fs) => {


    app.get('/user', (req, res) => {
        fs.readFile('./users.json', 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            res.send(JSON.parse(data));
        })
    })
}

module.exports = userRoutes;