CREATE TABLE pets (
    "id" SERIAL PRIMARY KEY,
    "pet" VARCHAR(250) NOT NULL,
    "breed" VARCHAR(250) NOT NULL,
    "color" VARCHAR(100) NOT NULL,
    "checked_in" VARCHAR(100) DEFAULT 'No',
    "owner" VARCHAR(250) NOT NULL 
);

INSERT INTO pets ("pet", "breed", "color", "checked_in", "owner")
VALUES 
('Charlie', 'Shih-tzu', 'Black', 'no', 'Lou'),
('Thorin', 'Rabbit', 'White', 'no', 'Sue'),
('Gatsby', 'Cat', 'White', '5/5/18', 'Mo'),
('Juniper', 'Cat', 'Tabby', 'no', 'Jo');  

SELECT * FROM pets;