- PUBLIC
- [] index.html
    [x] h1 Pet Hotel
    [x] h2 Add Pets
    [x] Three inputs: name, color, breed, owner
    [x] Submit Button
    [] h2 Guest List
    [] Table with TR: Pet Name, Breed, Color, Checked In, actions(Delete & Check In Button), Owner name
    [] Require in CSS, js, jquery
- [] client.js
    [] on Ready - calls GET function
        [] click handlers for
            [] submit button
            [] delete button
            [] check in/out toggle
    [] GET route - calls render function
    [] POST route - calls GET function
    [] DELETE route - calls GET function
    [] PUT route - calls GET function
    [] Render info to the DOM
- [] style.css
- [] jquery.min.css
- [] bootstrap (probably)

- SERVER
- [] app.py
    - [] import Flask, redirect, g, request, psycopg2, psycopg2.pool
    - [] app = Flask(__name__, static_folder="public", static_url_path="")
    - [] app Route to index.html
    - [] set up db connection
    - [] connect to db function to use in each route function
    - [] get pets function
    - [] Add pet function
    - [] Delete pet funciton
    - [] Update checked in status (PUT??)
    - [] close db function


- MAIN
- [x] database.sql
- [x] .gitignore

- SQL table:
- [x] Name database
    - [x] CREATE TABLE
    -use dogs in wireframe for some data
    
Install - 
    - [x] venv 
    - [x] Python -m venv venv
    - [x] . venv/bin/activate 
    - [x] pip freeze > requirements.txt
    - [x] pip install -r requirements.txt