# wfms-dashboard


<!-- ABOUT THE PROJECT -->
## 📃 About The Project
This is a transportation management system that manages drivers orders and customers. Using this platform, the admin will be able to keep track of a customer's deliveries using an optimized algorithm to generate the shortest path (Vehicle Routing Problem) , calculate a truck's speed and predict the remaining road time. Also, another optimized algorithm will be deployed in order to manage a truck's load (freight) based on bin-packing problem.  <br>


 ### 📜 Project Main features
1. **Customer's management**
2. **Real time truck tracking** 
3. **Truck management** 
4. **Customer management** 
5. **Freight management** 
6. **Order management** 
7. **Drivers management** 




## 🚩 Roadmap

See the [open issues](https://github.com/ahlem-phantom/AI-HealthCare-Assistant/issues) for a list of proposed features (and known issues).

 - [ ] Phase 1 : Project Study, Requirement Analysis and Prototyping 
	 - Problematic definition 
	 - State of the art
	 - Preliminary Feasibility Study
	 - Solution & functional/technical requirements (done)
	 - Wireframes of the solution (done)

- [ ] Phase 2 : Advanced Features Specification, Application Design & Realization
	- Data Model
	- Physical architecture and technical environments (done)
	- Specification of the advanced features
	- Advanced Feasibility Study (Cases studied problems and Results - development Back-end) 
	- Development of static user interfaces (Front-end)-> depending on the project
	- First FLASK components (scenarios and case studies tests) 
	- Static User Interfaces (Front-end)

- [ ] Phase 3.1 : Realization Of Advanced Features, Deployment And Tests
  - Implementation of the solution (V1)
  - Continuation Back-End development
  - Collecting and using flow from external application(Phase 2 + Phase 3) 
  - Consuming REST services by the front-end
  - Development of final user interfaces (Front-end) 
  - Exposing REST services by the back-end FLASK
  - Integration
  - Implemented Application V1

- [x] Phase 3.2 : Realization Of Advanced Features, Deployment And Tests
  - Finalization of final delivrable (V2)
  - Final Integration/Deployment of the solution 
  - Tests
  - Implemented Application V2 
  - Tests results
  
<p align="right">(<a href="#top">back to top</a>)</p>


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

**Main Features**
<br />
  The core processes to be supported are:
<br />
-Registration of customers, and tracking their orders
<br />
-Managing locations of the depots to plan the best-possible deliveries
<br />
-Keeping track of the trucks, delivering goods according to the planned tours

