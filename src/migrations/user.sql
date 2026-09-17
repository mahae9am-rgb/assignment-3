
CREATE TYPE user_role AS ENUM ('customer', 'admin');
CREATE TABLE users
(
    id            SERIAL PRIMARY KEY,
    name VARCHAR(53) NOT NULL,
    email         VARCHAR(255) NOT NULL UNIQUE
    CHECK ( email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$' ), 
    password_hash TEXT         NOT NULL,
    is_active     BOOLEAN      DEFAULT FALSE,
    created_at    TIMESTAMPTZ  DEFAULT NOW(),
    role          user_role    DEFAULT 'customer'
);
ALTER TABLE users ADD COLUMN phone VARCHAR(20);
ALTER TABLE users RENAME password_hash TO password_Hash;
 ALTER TABLE users 
 ALTER COLUMN phone SET NOT NULL;
 ALTER TABLE users ADD COLUMN updated_at TIMESTAMP DEFAULT NOW();