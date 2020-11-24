const supertest = require("supertest");
const chai = require("chai");
const mocha = require("mocha");

const db = require("../src/db");
const { expect } = require("chai");

describe("DB", () => {
  it("DB Connection: Open", (done) => {
    db.instance;
    setTimeout(() => {
      expect(db.instance.connectionState.status).to.equal("OPEN");
      done();
    }, 1000);
  });
});
