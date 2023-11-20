/*

use ProductList

db.createCollection("Product");


1.Find all the information about each products

Ans :- db.Product.find()

2.Find the product price which are between 400 to 800

Ans :- db.Product.find({product_price:{$gte :400, $lte :800}}).sort({product_price:1})

3.Find the product price which are not between 400 to 600

Ans :- db.Product.find({product_price:{$gte :400, $lte :800}}).sort({product_price:1})

4.List the four product which are grater than 500 in price 

Ans :- db.Product.find({product_price:{$gte:500}}).limit(4)

5.Find the product name and product material of each products

Ans :- db.Product.find({},{product_name:1,product_material:1})

6.Find the product with a row id of 10

Ans :- db.Product.find({id:{$eq:"10"}})

7.Find only the product name and product material

Ans :- db.Product.find({$and:[{product_name: {"$eq": "Practical Soft Shoes"}}, {product_material: {"$eq": "Rubber"}}]})

8.Find all products which contain the value of soft in product material 

Ans :- db.Product.find({product_material:"Soft"})

9.Find products which contain product color indigo  and product price 492.00

Ans :- db.Product.find({$and:[{product_color: {"$eq": "indigo"}}, {product_price: {"$eq": 492.00}}]})

10.Delete the products which product price value are same

Ans :- 
//To get the matching prices
var criteria = db.Product.aggregate([{ $group: { _id: "$product_price", count: { $sum: 1 } } },{ $match: { count: { $gt: 1 } } },]).toArray().map((d)=> d._id)

// To delete the founded documents based on price
db.Product.deleteMany({product_price: {"$in": criteria}})

*/