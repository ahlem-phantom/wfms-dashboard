# wfms-dashboard

**Utils** : 
<br /><br />
pip install gunicorn
<br />
pip freeze > requirements.txt
<br />
echo web: gunicorn app:app > Procfile
<br />
heroku addons:create heroku-postgresql:hobby-dev --app app-name
<br />
heroku config --app app-name
<br />
<br />
heroku run python
<br />
 -from app import db
<br />
 -db.create_all()
