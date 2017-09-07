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
- LocalStorage for Session management

### Nice to Haves
- Sass
- React Router for Pages
- Consider lodash for sorting/Filtering
- Validation I initially made happen before submit for different user experience. Changed to submit to meet reqs and removed built in required to allow for custom messaging. Left red outline for some live feedback about correctness.
- VIP is sorting by priority. If only wishing to display priority 1 & 2 it would filter as well and is unintuitive.
