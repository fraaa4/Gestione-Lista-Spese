import bodyParser from "body-parser"
import express from "express"
import sqlite3 from "sqlite3"

const port = 3000
const app = express()

const db = new sqlite3.Database("./db/expense.db")

app.use(express.static("public"))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set("view engine", "ejs")
app.set("views", "views")

app.get("/", (req, res) => {
    const expense_list = []

    db.all("SELECT * FROM expense_table", (err, rows) => {
        //if(err){console.error("Error in DB:",err.message)}

        rows.forEach(row => {
            const item = { ...row, paid: row.paid === 0 ? false : true }
            expense_list.push(item)
        })
        res.render("index", { list: expense_list })
    })
})

app.post("/add-expense",(req,res)=>{
    //inseriamo nuova riga nella tabella expense_table
    const stmt = db.prepare("INSERT INTO expense_table (product,descr,amount) VALUES (?,?,?)")

    stmt.run(req.body.product, req.body.descr, parseFloat(req.body.amount))
    
    stmt.finalize()

    res.redirect("/")
})

app.post("/toggle-paid",(req,res)=>{

    db.get("SELECT paid FROM expense_table WHERE id=?",parseInt(req.body.id),(err,row)=>{
        const paid = 1 - row.paid

        const stmt=db.prepare("UPDATE expense_table SET paid=? WHERE id=?")

        stmt.run(paid,parseInt(req.body.id))

        stmt.finalize()

        res.redirect("/")
    })
})

app.post("/remove-paid",(req,res)=>{
    db.run("DELETE FROM expense_table WHERE paid=?",1)

    res.redirect("/")
})

app.listen(port, () => console.log(`server started: http://localhost:${port}`))