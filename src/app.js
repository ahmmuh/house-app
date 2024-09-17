import express from "express"
import cors from "cors"
import { getConnection } from "./database/db-connection.js"

import houseRoutes from "./routes/house-routes.js"
import crudRoutes from "./routes/crud-house-route.js"
import landRoutes from "./routes/land-route.js"
import categoryRoutes from "./routes/category-route.js"
import hotelCrudRoute from "./routes/hotelCrudRoute.js"
const PORT = process.env.PORT || 5000
const app = express()
app.use(cors())

app.use(express.json({ limit: "50mb" }))
app.use(express.urlencoded({ limit: "50mb", extended: true }))

app.use("/api", categoryRoutes)
app.use("/api", houseRoutes)
app.use("/api", crudRoutes)
app.use("/api", hotelCrudRoute)
app.use("/api", landRoutes)

app.use((req, res, next) => {
  res.status(500).send("Something went wrong!")
})

app.listen(PORT, () => {
  getConnection()
})
