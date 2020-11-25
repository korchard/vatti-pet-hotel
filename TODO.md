- PUBLIC
- [x] index.html
    [x] h1 Pet Hotel
    [x] h2 Add Pets
    [x] Three inputs: name, color, breed, owner
    [x] Submit Button
    [x] h2 Guest List
    [x] Table with TR: Pet Name, Breed, Color, Checked In, actions(Delete & Check In Button), Owner name
    [x] Require in CSS, js, jquery
- [] client.js
    [x] on Ready - calls GET function
        [x] click handlers for
            [x] submit button
            [x] delete button
            [] check in/out toggle
    [x] GET route - calls render function
    [x] POST route - calls GET function
    [x] DELETE route - calls GET function
    [x] PUT route - calls GET function
    [x] Render info to the DOM
- [x] style.css
- [x] jquery.min.css
- [] bootstrap (probably)

- SERVER
- [] app.py
    - [x] import Flask, redirect, g, request, psycopg2, psycopg2.pool
    - [x] app = Flask(__name__, static_folder="public", static_url_path="")
    - [x] app Route to index.html
    - [x] set up db connection
    - [x] connect to db function to use in each route function
    - [x] get pets function
    - [x] Add pet function
    - [] Delete pet funciton
    - [] Update checked in status (PUT??)
    - [x] close db function


- MAIN
- [x] database.sql
- [x] .gitignore

- SQL table:
- [x] Name database
    - [x] CREATE TABLE
    -use dogs in wireframe for some data
    
Install
    - [x] venv 
    - [x] Python -m venv venv
    - [x] . venv/bin/activate 
    - [x] pip freeze > requirements.txt
    - [x] pip install -r requirements.txt
    - [x] commit