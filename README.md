# DevTinder - web

- Create a vite + React app
- Remove unecessary code
- Install tailwind css
- Install daisyUi
- Create folder named components in that all the components are there
- Add NavBar component to components folder with name of NavBar.jsx


## Routing
- ``npm i react-router-dom``
- Create BrowserRouter > Routes > Route=/Body > RouteChildren
- Create an outlet in your Body.jsx after <NavBar/>
- Create footer if you want
Body
    NavBar
    Route=/ => feed
    Route=/login => login
    Route=/connections => connections
    Route=/profile => Profile

- Create Login Page
- Install axios
- CORS= install cors in backend and add middleware to with configrations: origin, credentials: true
- Whenever you're making API call so pass axios =>{withCrediantials: true}


## Redux toolkit

- ``npm install @reduxjs/toolkit react-redux``
- configure(create) a store => Provider => createSlice => add reducer to store
- Add redux devtools in chrome
- Login and see if your data is coming properly in the store
- NavBar should update as soon as user logs in 
- Refactor our code to add constants file + create a component folder

- without login you do not access any other functionality
- If token is not present, redirect user to login page
- Logout Feature
- Get the feed and add the feed in the store
- build the user card on feed
- Edit Profile feature
- Show Toast Message on save of profile
- New Page - See all my connections
- New Page - See all my Requests
- Send/Ignore the user card from the feed
- Sign up

# Deployment

- Signup on AWS
- Launch instance
- Run on git bash below commands
- chmod 400 "devTinder-secret.pem"
- Machine connection key

- ssh -i "devTinder-secret.pem" ubuntu@ec2-15-207-114-119.ap-south-1.compute.amazonaws.com


- install nodejs on your aws project which is same as your project version
- git clone https://yadavlalu5252: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@github.com/yadavlalu5252/devTinder-web.git

- clone frondend and backend both project

## Deploy FrontEnd

- npm run build on (local project)

- cd devTinder-web
- npm i
- npm run build on ec2 server
- sudo apt update
- sudo apt install nginx // http server
- sudo systemctl start nginx (This will start nginx server)
- sudo systemctl enable nginx
- copy code from dist to /var/www/html for that
- sudo scp -r dist/* /var/www/html/ (sudo- root level permission scp-copy -r=recersively dist/*- dist ki sari files to /var/www/html)

- Go to aws copy Public ipv4 address which is a ip address which has port no 80
- Enable port :80
- go to aws-instances-security-security groups-edit inbound rules-in that add port 80 to new rules and then source is 0.0.0.0/0 save rules and after that your ip will work

## Deploy backend

- npm i
- allow aws ipv4 public address in mongodb
- npm install pm2 -g (Process manager it will runs the backend 24x7)
- pm2 start npm -- start
- pm2 logs (For checking the process is running online or not)
- pm2 flush, pm2 stop <name of process>, pm2 delete <name of process>

- pm2 start npm --name "devTinder-backend" --start ( This is rename project name)


 frontend = http://15.207.114.119/
 backend = http://15.207.114.119:7777/ 
- From here backend and frontend running but not synchronosyly
 
- nginx act as a load balancer also

## Edit nginx file
- sudo nano /etc/nginx/sites-available/default
- server_name 15.207.114.119
- location /api/ {
        proxy_pass http://localhost:7777/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

- restart nginx after This
- modify BASE_URL to /api
- after that git pull devTinder-web
- after pull repeat all the procedure of frontend deployment
    - like npm run build
    - sudo scp -r dist/* /var/www/html






## dotenv
- It will not work on production for because dotenv is hidden for that 
- sudo nano .env
- again do the deployement process


# Razorpay Payment Gateway Integration
- Creating an API for create order in backend
- Initialize razorpay in utils
- Added my key and scret in env file
- Creating order on Razorpay
- Create Schema
- save the order in payments collection
- make the api dynamic
- for making a Razorpay dialog we need a script in html head
- Setup Razorpay webhook on your live Api

- frontend deployment procedure 
git pull
npm run build
sudo scp -r dist/* /var/www/html

- backend deployment procedure
git pull
pm2 restart 0



# Real Time Chat using Websocket (socket.io)

- Socket.IO is a library that enables low-latency, bidirectional and event-based communication between a client and a server.

- Build the ui for the chat window on /chat/:targetUserId
- npm i socket.io for backend server api
- npm i socket.io-client for frontend client api
- Initialise the chat
- createSocketConnection
- Listen to events
