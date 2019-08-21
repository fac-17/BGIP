const test = require("tape");
const request = require("supertest");
const app = require("../server");

test("tape is working", t => {
  t.equal(1, 1, "one should be one");
  t.end();
});

test("Check / route is being serverd", t => {
  request(app)
    .get("/")
    .expect(200)
    .expect("content-type", /html/)
    .end((err, res) => {
      t.error(err);
      t.equal(res.body, "hello world", "Should return hello world string");
      t.end();
    });
});
