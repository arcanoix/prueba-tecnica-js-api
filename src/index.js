import mongoose from "mongoose"
import express from "express"


const port = 3000
const app = express()
const urlDatabase = process.env.URL_DATABASE
const API_VERSION = process.env.API_VERSION || "v1"
const urlBase = `api/${API_VERSION}`

async function main()
{

                await mongoose.connect(urlDatabase, { useNewUrlParser: true }).then(() => {

                                app.listen(port, () => {
                                        console.log(`Server backend starter 🚀 with http://localhost:${port}/${urlBase}`);
                                });
                        });
}

main().catch(err => { console.log(err); });