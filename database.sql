-- users table
create table users(
    user_id serial primary key,
    email varchar(255) unique not null,
    password varchar(255) not null,
    created_at date default current_date
);

-- doubts table
CREATE TABLE doubts (
    doubt_id serial PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id),
    doubt_text TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
