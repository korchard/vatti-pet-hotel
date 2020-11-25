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
('Charlie', 'Shih-tzu', 'Black', 'No', 'Lou'),
('Thorin', 'Rabbit', 'White', 'No', 'Sue'),
('Gatsby', 'Cat', 'White', '5/5/18', 'Mo'),
('Juniper', 'Cat', 'Tabby', 'No', 'Jo');  

SELECT * FROM pets ORDER BY checked_in, pet;

DELETE FROM pets WHERE id=3;

UPDATE pets SET "checked_in"='5/10/18' WHERE id=7;

SELECT * FROM pets;