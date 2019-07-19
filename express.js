const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
        <html>
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=0">
            <title>Nodejs Code lab</title>
            <style></style>
        </head>
        <body>
            <div id="wrapper">
                <header>
                    <p class="logo"><span class="logo-icon">#</span> Welcome to Nodejs Code lab</p>
                </header>
                <main>
                    <section id="content">
                    </section>
                </main>
                <footer>
                </footer>
            </div>
        </body>
        </html>
    `);
});

// plugged in a static server
app.use(express.static("public"));

app.listen(port, err => {
    if (err) console.log(err);
    console.log(`Node app listening on port ${port}!`);
});