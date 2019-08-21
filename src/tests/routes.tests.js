const test = require("tape");
const request = require("supertest");
const app = require("../server");

test("tape is working", t => {
  t.equal(1, 1, "one should be one");
  t.end();
});
