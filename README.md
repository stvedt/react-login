# React Practice

### Key Features
- Login Form with Validation
- Session based on Authentication
- List of Users
- Sorting of Users
- Filtering of Users based on category (dynamically)

### Dev Notes
- Use bootstrap Alerts
- React Router for Pages
- LocalStorage for Session
- Nice to Have: Sass

#### Fake Cookie for Session
I have used localStorage in place of cookies to create a session. I have yet to create a logout button but to reset the session run the following from the console:

```
localStorage.removeItem('loggedIn');
```


### Local Environment Setup

```
> npm install
> npm start
```

Application will run on [http://localhost:8080/](http://localhost:8080/).
