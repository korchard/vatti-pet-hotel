CREATE TABLE pets(
    "id" SERIAL PRIMARY KEY,
    "pet" VARCHAR(250),
    "breed" VARCHAR(250)
    "color" VARCHAR(100),
    "checked_in" VARCHAR(100),
    "owner" VARCHAR(250) 
    );

INSERT INTO pets ("pet", "breed", "color", "checked_in", "owner")
VALUES 
('Charlie', 'Shih-tzu', 'Black', 'no', 'Lou'),
('Thorin', 'Rabbit', 'White', 'no', 'Sue'),
('Gatsby', 'Cat', 'White', '5/5/18', 'Mo'),
('Juniper', 'Cat', 'Tabby', 'no', 'Jo');   