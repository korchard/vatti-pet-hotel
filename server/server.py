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

# Get all pets
@app.route('/pets', methods=['GET', 'POST'])
def petStuff():
    if request.method == 'GET':
        return getAllPets()
    elif request.method == 'POST': 
        return addPet( request.form )

def addPet(animal):
    print('Adding pet', animal)

    cursor = None
    response = None

    try:
        # Get a connection to database, use that to get a cursor
        conn = get_db_conn()
        cursor = conn.cursor()

        # TODO Database INSERT
        sql = 'INSERT INTO pets ("pet", "breed", "color", "owner") VALUES (%s, %s, %s, %s);'
        cursor.execute(sql, (animal['pet'], animal['breed'], animal['color'], animal['owner'])) # pass in values as a tupple, which uses ()

        # IMPORTANT - FOR Add, Update, Delete - Make sure to commit!!! Or you will not see your changes
        conn.commit()
        response = {'msg': 'Added pet'}, 201

        # Python equivalent of catch
    except psycopg2.Error as e:
        print('Error from DB', e.pgerror)
        response = {'msg': 'Error adding pet'}, 500

    # python equivalent of finally
    else: # this else statment will run regardless!
        if cursor:
            # Close the cursor
            cursor.close()
    
    return response