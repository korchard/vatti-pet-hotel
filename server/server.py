from flask import Flask, redirect, g, request
import psycopg2.pool

app = Flask(__name__, static_folder="public", static_url_path="")

@app.route('/')
def index():
    return redirect('/index.html')

# Setup our database SimpleConnectionPool
app.config['postgreSQL_pool'] = psycopg2.pool.SimpleConnectionPool(
    1, #min number of connections
    10, #max number of connections
    host = '127.0.0.1',
    port = '5432',
    database = 'pet_hotel' #Database name-this will need to change
)

# Function to get a connection to the DB, use in each route that needs to access DB
def get_db_conn():
    if 'db' not in g:
        g.db = app.config['postgreSQL_pool'].getconn()
        print('Got connection to DB')
    return g.db    

# close db connections when done
@app.teardown_appcontext
def close_db_conn(taco):
    db = g.pop('db', None)
    if db is not None:
        app.config['postgreSQL_pool'].putconn(db)
        print('Closing connection!')

# # Get all songs 
# @app.route('/song', methods=['GET', 'POST'])
# def songStuff():
#     if request.method == 'GET':
#         return getAllSongs()
#     elif request.method == 'POST': 
#         return addSong( request.form )