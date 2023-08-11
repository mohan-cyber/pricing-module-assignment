# Tech Stack

## Tech Stack
1. Python 
2. Django 
3. Django REST Framework 
4. ReactJS 
5. TailwindCSS 

## Django Packages
#### (for installation - pip install virtualenv)
`/django $ virtualenv venv`

#### activate venv
`/django $ source venv/bin/activate`


#### Install Django & required packages
`sh
(venv) $ pip install -r requirements.txt
`
#### Freeze requirement
`(venv) /django $ pip freeze > requirements.txt`

#### Migrate models & create superuser 
`sh
(venv) $ python manage.py makemigrations
(venv) $ python manage.py migrate
(venv) $ python manage.py createsuperuser
`

#### Run dev server in port 8002
`sh
(venv) $ python manage.py runserver 8002
`
#### For admin access use below url in browser
`sh
http://127.0.0.1:8002/admin/  (or)  http://yourip:8002/admin  
`

#### load command

`sh python3 manage.py loaddata pricing/templates/fixtures/compressed_data.json.gz --app PricingConfig
`
#### dump command 
`sh python manage.py dumpdata pricing.PricingConfig --output=pricing/templates/fixtures/compressed_data.json.gz
`
#### to check the size 
`sh du -sh pricing/templates/fixtures/compressed_data.json
`

#### to compress
`sh gzip pricing/templates/fixtures/data.json
`

## React

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


