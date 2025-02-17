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



