# Pearls of Wisdom by Reuben, Emaggy, Gigi and Leonie - Week 8

## Team
Reuben 🎻 
Emaggy 🤴🏿
Gigi :raising_hand:
Leonie :baby:

![](https://i.imgur.com/FvFW0U9.jpg) _Photographer: Gigi_



## The app 
**Pearls of Wisdom** is a quote taking app that allows users to log quotes and add them to an account/ group. Users can create a new account or use an existing account to add quotes to.  

![](https://i.imgur.com/xZ3mHRs.png)
![](https://i.imgur.com/08OKmSw.png)

![](https://i.imgur.com/WAbru9r.png)


## Code of conduct 
- Changing pairs frequently
- Commit regularly
- 20/20/20
- Plan and document (file structure, layout, schema)

## Milestones 
Wednesday morning: Wireframe, file structure
Wednesday afternoon: Repo, server, database
Thursday morning: client side requests and handlebar
Thursday afternoon: CSS

## Wireframes

![](https://i.imgur.com/5d8oqUD.jpg)
![](https://i.imgur.com/P0xKuZd.jpg)

## Install
```
npm install
```
```
npm test
```
```
npm run nodemon
```
OR
```
npm start
```


## To-Dos 
- [x] Come up with idea
- [x] Set up workflow/milestones
- [x] Set up code of conduct 
- [x] Decide on file structure & wireframe
- [x] Create user flow & take pic for readme
- [x] Set up repo 
    - [x] packages Dev: tape, supertest, nodemon, dotenv, 
    - [x] packages DEP, express, express-handlebars, body-parser(for parsing post requests), pg, query-string, serve-favicon
- [x] Set up express server structure
    - [x] Set up server.js 
    - [x] set up app.js

- [x] Set up hbs files 
    - [x] error
    - [x] home 
    - [x] main 
    - [x] header
    - [x] head 
    - [x] footer
- [x] Make Schema for database
- [x] Set up database tables
    - [x] db_build.sql 
    - [x] db_build.js 
    - [x] db_connect

- [x] Set up database queries
- [x] set up {{#each}} in queriesByCategory to populate the table with quotes
- [x] Connect to Heroku 
- [ ] Create routes
    - [x] redirect when post request is made to /submitquote
    - [x] Home & TDD 
    - [x] error client side & TDD 
    - [x] post route & TDD 
    - [x] back home route & TDD 
    - [x] server side error 
    - [x] Search by category (without posting) & TDD 
- [x] CSS 

## Stretch Goal
- [ ] Like quotes and display top on home page Like quotes and display top on home page 
- [x] Search quotes by keyword
- [ ] Delete quotes

## File structure 
- public 
    - css folder 
    - images folder 
    - js folder
- src
    - app.js (middleware & calls index.js in controllers)
    - server.js (starts the server)
    - **models**
        (database stuff)
    - **controllers folder** 
    (request handling functions are exported from their files and used in index.js.)
        - index.js (imports all handling functions and defines endpoints)
        - error.js (exports each function)
        - home.js (exports each function)
        - quotes.js (exports each function)
    - **views folder**
        - home.hbs (fills into body of homepage, no header )
        - error.hbs (view for errors 500 and 404)
        - quotes.hbs (fills into body of quotes page)
        - **layout folder**
            - main.hbs (common skeleton of page, no header)
            - error.hbs (common skeleton for 404 and 500)
        - **partials folder**
            - head.hbs (metatags, fills into main.hbs)
            - header.hbs (fills into quotes.hbs)
            - form.hbs
            - footer.hbs (fills into main.hbs)
            - quotesByCategory.hbs (fills into quotes.hbs)




FORM ENDPOINT AND RENDERING
```javascript=
router.post('/submitquote', (req, res) => {
  res.render("quote", {quotesArrayFromDatabase}
  })
})
```

quotes.hbs

```
<ul>
  {{#each quotesArrayFromDatabase}}
  <li>{{author}}{{quote}}<li>
  {{/each}}
</ul>
```

[Slides](https://hackmd.io/@tSOHsGuAScuCuTw78vu_AQ/r1w82STNS#/)


### What we struggled with?
- server side validation
- inserting PNG files in handlesbars
- Using FETCH- Not working well with redirecting 
- Making tests for server errors
- Naming with the categories (lowercase in backend, capitalized in front end
- Lack of time for database testing
