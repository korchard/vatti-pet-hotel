[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![REPO SIZE](https://img.shields.io/github/repo-size/korchard/vatti-pet-hotel.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/korchard/vatti-pet-hotel.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/korchard/vatti-pet-hotel.svg?style=social)

# Project Name

Vatti-Pet-Hotel

## Description

Duration: 7 hours

This application simulates a basic intake for a Pet Resort customer. Users can input their name, pet's name, breed, and color. Once the pet is added, their information will be displayed and stored on the DOM and in a databse. You can toggle the check-in or out status of the pet by clicking the 'Check In' button and the date of check-in will be displayed. If the 'Check Out' button is pressed, it will display the check-out date. After the pet has left the hotel one can delete the pet's information from the table, as well as the database using the delete button. 

## Screen shot

The application in action
![Application in Action](pet_hotel.png)

## Installation

1. Create a database named `pet_hotel`,
2. The queries in the `database.sql` file are set up to create the table. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Navigate to the parent directory.
4. Input into the terminal 'python -m venv venv' to create the virtual space.
5. Activate the space by inputting '. venv/bin/activate' into the terminal.
6. The required dependencies are already tied to the repository in the requirements.txt
7. Type 'pip install - r requirements.txt' into the terminal, this will install all necessary requirements.
8. We will need to run Flask by inputting 'export FLASK_APP=app.py' in the terminal
9. 'flask run' in the terminal will run the application

Open your web browser:
1. enter the address, "localhost:5000"
2. Use the application

## Built With

- HTML
- CSS/Bootstrap
- javaScript
- jQuery
- Python
- Flask
- psycopg2
- SQL

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped helped me make this application a reality. Special thanks to my primary instructor, [Mary Mossman](https://github.com/mbMosman)

Special thanks to my learning group for this week from my Vatti Cohort:
- [Kim Orchard](https://github.com/korchard)
- [Josie Fredericksen](https://github.com//freder48)
- [Steven Maloney](https://github.com/sdeda1us)

## Support

If you have suggestions or issues, please reach out to me on linkedIn [https://www.linkedin.com/in/kimberly-orchard-she-her/]


