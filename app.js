const express=require("express");
// import express from "express";
const app=express();
var bodyParser=require('body-parser')
const port=8080;

const products=[
    {id:1,name:"Nguyen Van Hung",age:20},
    {id:2,name:"Le Trong Hung",age:22},
    {id:3,name:"Do Thanh Long",age:21},
]


app.use(express.json());
//get list
app.get("/products",(req,res)=>{
    res.send(products);
});
//Get detail
app.get("/product/:id",(req,res)=>{
    const id=req.params.id;
    const product=products.filter((item)=>item.id==id);
    res.send(product);
})
//create
app.post("/product",(req,res)=>{
    products.push(req.body);
    res.status(201).send({
        messenger:"Thêm sản phẩm thành công",
        data:products,
    });
});
//update
app.put("/product/:id",(req,res)=>{
    const id=req.params.id;
    const newProducts=products.filter((item)=>item.id==id?req.body:item);
    res.send({
        messenger: "Thay doi thong tin san pham thanh cong",
        data: newProducts,
    });
});
//delete
app.delete("product/:id", (req, res) => {
    const id = req.params.id;
    const newProducts = products.filter((item) => item.id != id);
    res.send({
      messenger: "Xoa san pham thanh cong",
      data: newProducts,
    });
  });

  
// app.use(bodyParser.urlencoded());
// app.get('/add-product', (req, res, next) => {
//     res.send(` <div class="container">
//     <h1>ADD</h1>
//     <form action="/product" method="POST" id="form-add" style="padding:10px">
//         <div class="form-group mb-3" style="padding-bottom:10px">
//             <label for="" class="form-label">Tên product</label><br>
//             <input type="text" class="form-control" name="productName" /><br>  
//         </div>
//         <div class="form-group" >
//             <button class="btn btn-primary" style="margin:2px;width:65px">ADD</button><br>
//            <button class="btn btn-primary" style="border-radius:4px;color:background-color:red;color:white;" style="margin:20px;width:100px"><a href="http://localhost:8080"  class="text-decoration-none ">Quay Lại</a></button>
//         </div>
//     </form>
// </div>`);
//     });
//     app.post('/product', (req, res, next) => {
//     res.send(`<p>Đã thực hiện thêm Product</p>
//     <button class="btn btn-primary" style="border-radius:4px;color:background-color:red;color:white;" style="margin:20px;width:100px"><a href="http://localhost:8080"  class="text-decoration-none ">Quay Lại</a></button>
//     `);
// });
// //home
// app.get("/",(req,res)=>{
//     res.end(`<h1>Home</h1>
//     <button class="btn btn-primary" style="background-color:red;border-radius:5px;"><a href="http://localhost:8080/add-product" class="text-decoration-none ">ADD</a></button>
//     <button class="btn btn-primary" style="background-color:red;border-radius:5px;"><a href="http://localhost:8080/about" class="text-decoration-none ">About</a></button>
//     `);
// });
// app.get("/about",(req,res)=>{
//     res.end(`<h1>About </h1>
//     <button class="btn btn-primary" style="border-radius:4px;color:background-color:red;color:white;" style="margin:20px;width:100px"><a href="http://localhost:8080"  class="text-decoration-none ">Quay Lai</a></button>
//     `);
// });
// app.get("/product/:id",(req,res)=>{
//     const id=req.params.id;
//     const product=products.filter((item)=>item.id==id);
//     res.send(product);
//     // res.end(`<h1>Day la trang product detail id:${req.params.id}</h1>`);
// });
app.listen(port,()=>{
    console.log(`OK${port}`);
});
