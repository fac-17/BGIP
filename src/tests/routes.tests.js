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
    .expect(200)
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

//test 500 route
//test 404 route
test("Check 404 error is being served correctly", t => {
  supertest(app)
  .get("/noendpointhere")
  .expect(404)
  .end((err, res) => {
    t.error(err);
    t.end();
  })
});
