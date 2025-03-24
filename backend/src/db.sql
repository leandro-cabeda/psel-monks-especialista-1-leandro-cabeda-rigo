CREATE DATABASE monksdb;
USE monksdb;

CREATE TABLE categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

INSERT INTO categories (name) VALUES ('Categoria 1'), ('Categoria 2'), ('Categoria 3');

CREATE TABLE cards (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  description TEXT,
  image_url VARCHAR(255)
);

INSERT INTO cards (title, description, image_url) VALUES
('Título Card 1', 'Descrição do card 1', 'https://via.placeholder.com/300'),
('Título Card 2', 'Descrição do card 2', 'https://via.placeholder.com/300'),
('Título Card 3', 'Descrição do card 3', 'https://via.placeholder.com/300');

CREATE TABLE contact (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  message TEXT
);
