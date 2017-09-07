# React Login

### Key Features
- Login Form with Validation
- Session based on Authentication
- List of Users
- Sorting of Users
- Filtering of Users based on category (dynamically)

### Local Environment Setup

```
> npm install
> npm start
```

Application will run on [http://localhost:8080/](http://localhost:8080/).

### Dev Notes
- Using bootstrap v4
- LocalStorage for Session

#### Fake Cookie for Session
I have used localStorage in place of cookies to create a session. I have yet to create a logout button but to reset the session run the following from the console:

```
localStorage.removeItem('loggedIn');
```

### Nice to Haves
- Sass
- React Router for Pages
- Consider lodash for sorting/Filtering
- Add clear to filtering
