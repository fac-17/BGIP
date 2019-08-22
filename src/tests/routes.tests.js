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

//test 4040 route
