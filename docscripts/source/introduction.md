# Introduction to Drone Management System
Drone Monitoring and Management System is a cloud based web application for managing and monitoring the drone network. This application is based on React and Redux. This application is a control panel for admins in central distribution center to manage the drones, their issues, the users, the inventory of medicines in the central distribution center, event logs, weather etc and monitor their location and sensor status in real time. We can also observer real time data of deliveries with their graphical representation.

Major Features Can be outlined as:

* Real Time Unlimited Beyond Visual Line of Sight Communication system (BVLOS) as long as both systems are connected to internet
* Multiple level of control based on hierarchy of authorities
* Authentication system for genuine users
* Current Status of drone including position, altitude, mode, satellites, heading, time of flight.
* Feature to view, send and initiate missions
* Monitoring available for single as well as a mesh network of drones
* Emergency commands like Return to Launch(RTL) and Land
* Features of tracking inventory, weather, drone condition 


## Demo
<a> https://hive.prokurainnovations.com</a> <br>
Login id: 9840016544<br>
Password: sushil<br>

## Getting Started
Follow the instructions to setup and run a copy of the machine in your local machine:

### Prerequisites
* Node.js
* React 

### Installing
Clone the repository
```
	git clone https://github.com/prokuranepal/DMS_React.git
```

Enter the project directory:
```
	cd DMS_React
```
Install NPM dependencies:
```
	npm install
```
Make sure the url is set as below in axios-orders.js file
```
const url ="http://dms.prokurainnovations.com:3001/"
```

### Development
To start the development server, run:
```
	npm start
```

### Production 
To generate a production biuild, run:
```
	npm run build
```
