const app = require("./../server")
const chai = require("chai")
const chaiHttp = require('chai-http')
const should = chai.should()

chai.use(chaiHttp)

describe("site", function() {
  // Describe what you are testing
  it("should have home page", (done) => {
    // Describe what should happen
    // in this case we test that the home page loads
    chai
      .reques(app)
      .get("/")
      .end(function(err, res) {
        if (err) {
          return done(err)
        }
        res.status.should.be.equal(200)
        return done(); // Call done if the test completed successfully
      })
  })
})