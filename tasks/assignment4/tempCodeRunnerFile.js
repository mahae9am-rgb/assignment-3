
{
const express =require('express')
const pool = require('./common/db/db')
const app= express()
app.use(express.json())
app.get('/sales/:id',async(req,res)=>{
  const {id}=req.params
const {rows} = await pool.query(`SELECT * FROM sales  WHERE product_id=$1`,[id])

res.status(200).json({
  message:"retrived  successfully",
  data:rows,
  success:true
})
})


app.listen(7600,()=>{
  console.log('port running 7600');
  
})

}