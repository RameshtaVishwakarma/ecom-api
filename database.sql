CREATE DATABASE Ecom

CREATE TABLE product (
	prod_id INT,
	prod_status VARCHAR ( 50 ) Default 'draft' check (prod_status IN ('active', 'Inactive', 'draft', 'readyForListing') ) ,
	title VARCHAR ( 50 ) NOT NULL,
	pictureUrl VARCHAR ( 255 ) NOT NULL,
	createdBy VARCHAR (50) NOT NULL
);

CREATE TABLE order (
    order_id INT,
    order_status VARCHAR(50) Default 'active' check (order_status IN ('active', 'inactive', 'processed', 'return', 'exchange', 'refund') ) ,
    items INT[],
    totalPrice INT,
    createdBy INT
);

CREATE TABLE user_table (
    user_id INT,
    name VARCHAR(50),
    email VARCHAR(50),
    password VARCHAR(50),
    roles VARCHAR(50)  
);


creating users
{
    "user_id":"1",
    "name":"abh",
    "email":"abh123@xyz.com",
    "password":"12345",
    "role":"admin"
}
{
    "user_id":"2",
    "name":"anu",
    "email":"anu123@xyz.com",
    "password":"12345",
    "role":"vendor"
}
{
    "user_id":"3",
    "name":"sun",
    "email":"sun123@xyz.com",
    "password":"12345",
    "role":"shopkeeper"
}

creating product
{
    "prod_id":"1",
    "prod_status":"Inactive",
    "title":"someproduct",
    "pictureUrl":"someUrl",
    "createdBy":"shopkeeper1",
}
{
    "prod_id":"2",
    "prod_status":"active",
    "title":"someproduct",
    "pictureUrl":"someUrl",
    "createdBy":"shopkeeper2",
}{
    "prod_id":"3",
    "prod_status":"draft",
    "title":"someproduct",
    "pictureUrl":"someUrl",
    "createdBy":"shopkeeper3",
}