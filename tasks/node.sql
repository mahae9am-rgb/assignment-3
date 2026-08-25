
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

INSERT INTO users (email, password_hash, role)
VALUES ('ka3bora@g.com', 'hash_pw_123','customer'),
       ('rabe3@g.com', 'hash_pw_456', 'customer'),
       ('3laamedany', 'hash_pw_789', 'admin');
INSERT INTO customer_profiles (user_id,full_name)
VALUES(5,'ali')
select user_id from customer_profiles;       
