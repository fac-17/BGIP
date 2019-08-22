const test = require("tape");
const supertest = require("supertest");
const app = require("../app");

test("tape is working", t => {
  t.equal(1, 1, "one should be one");
  t.end();
});

//test home route
test("Check / route is being serverd", t => {
  supertest(app)
    .get("/")
    .end((err, res) => {
      t.equals(null, err, "Home route error should be null");
      t.equals(200, res.statusCode, "Home status code should be 200");
      t.end();
    });
});

//test 404 route
test("Check 404 error is being served correctly", t => {
  supertest(app)
  .get("/noendpointhere")
  .end((err, res) => {
    t.equals(null, err, "404 route error should be null");
    t.equals(404, res.statusCode, "404 status code should be 404");
    t.end();
  })
});
