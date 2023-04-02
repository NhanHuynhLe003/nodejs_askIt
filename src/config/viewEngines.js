import express from 'express'

const configViewEngine = (app) => {
    app.set("view engine", "ejs"); //duoi ejs la view engine
    app.set("views", "./src/views") //cho biet folder views nam o dau
}

export default configViewEngine