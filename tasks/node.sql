-- ================
CREATE TYPE user_role AS ENUM ('admin', 'customer');
CREATE TABLE users
(
    id            SERIAL PRIMARY KEY, -- ahmed@gmail.com
    email         VARCHAR(255) NOT NULL UNIQUE CHECK ( position('@' IN email) > 0),
    password_hash TEXT         NOT NULL,
    is_active     BOOLEAN   DEFAULT FALSE,
    created_at    TIMESTAMP DEFAULT NOW(),
    role          user_role DEFAULT 'customer'
);
-- ================
-- customer_profiles table (inheritances -> users)
CREATE TABLE customer_profiles
(
    user_id        INT          NOT NULL REFERENCES users (id) ON DELETE CASCADE,
    full_name      VARCHAR(150) NOT NULL,
    dob            DATE,
    phone          VARCHAR(20)  NOT NULL,
    loyalty_points INT DEFAULT 0 CHECK ( loyalty_points >= 0 )
);

CREATE TABLE products
(
    id         SERIAL PRIMARY KEY,
    name       VARCHAR(255)        NOT NULL,
    price      NUMERIC(10, 2)      NOT NULL CHECK ( price > 0 ), -- 12345678.91
    stock      INT       DEFAULT 0 NOT NULL CHECK ( stock >= 0),
    metadata   jsonb     DEFAULT '{}',
    created_at TIMESTAMP DEFAULT NOW()
);
CREATE TYPE order_status AS ENUM ('pending' ,'in_progress', 'delivered' , 'canceled' , 'refunded');
CREATE TABLE orders
(
    id           SERIAL PRIMARY KEY,
    user_id      INT            NOT NULL REFERENCES users (id) ON DELETE RESTRICT,
    total        NUMERIC(10, 2) NOT NULL CHECK ( total > 0 ),
    created_at   TIMESTAMP    DEFAULT NOW(),
    delivered_at TIMESTAMP,
    status       order_status DEFAULT 'pending'
);
CREATE TABLE order_items(
    id SERIAL PRIMARY KEY,
    product_id INT  NOT NULL REFERENCES products(id) ON DELETE RESTRICT,
    order_id INT NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
    quantity INT NOT NULL CHECK ( quantity > 0),
    unit_price numeric(10,2) NOT NULL CHECK (unit_price > 0)

);

INSERT INTO users (email, password_hash, role)
VALUES ('ka3bora@g.com', 'hash_pw_123','customer'),
       ('rabe3@g.com', 'hash_pw_456', 'customer'),
       ('3laamedany', 'hash_pw_789', 'admin');


INSERT INTO customer_profiles (user_id, full_name, dob, phone)
VALUES (1, 'ka3bora', '1999-09-27', '01024708090'),
       (2, 'rabe3', '1999-09-27', '01024708090'),
       (3, '3laa medany', '1999-09-27', '01024708090');


INSERT INTO products (name, price, stock, metadata)
VALUES ('Nike air force', 2500.00, 4, '{
  "color": "red"
}'),
       ('iPhone 14', 40000, 10, '{
         "ram": "6GB"
       }');
RETURNING id;

INSERT INTO orders(user_id,total)
VALUES(3,123.00);

INSERT INTO order_items (order_id, product_id, quantity, unit_price)
VALUES 
  (3, 1, 2, 2500.00),
  (3, 2, 1, 40000.00);


select *
from order_items
JOIN products ON order_items.product_id = products.id ;

SELECT * from products WHERE  id = 2;
ALTER TABLE products ADD present_product INT REFERENCES products(id); 
UPDATE products SET  present_product =3 WHERE id =2;
SELECT p1.name,p1.price,p1.stock , p2.name,p2.price,p2.stock FROM products p1 JOIN products p2
ON p1.present_product = p2.id;
INSERT  INTO products(name,price,stock,metadata)
VALUES('zabadi',25,3,'{"color":"white"}'),('apple',63,4,'{"color":"red2"}')
,('orange',48,7,'{"color":"orange"}');

app.get('/product', async (req, res) => {
    const {page, limit} = req.query;
    const offset = (page - 1) * limit;
    
    const {rows} = await pool.query(
        `SELECT * 
         FROM products 
         ORDER BY id 
         LIMIT $1 OFFSET $2`,
        [limit, offset]
    );
    
    res.json({message: "done", success: true, data: rows});
});