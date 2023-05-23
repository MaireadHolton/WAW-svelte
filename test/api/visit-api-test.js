import { assert } from "chai";
import { assertSubset } from "../test-utils.js";
import { wawService } from "./waw-service.js";
import { maggie, testCounties, testVisits } from "../fixtures.js";

suite("Visit API tests", () => {
  setup(async () => {
    await wawService.createUser(maggie);
    await wawService.authenticate(maggie);
    await wawService.deleteAllUsers();
    await wawService.createUser(maggie);
    await wawService.authenticate(maggie);
  });
  teardown(async () => {
    await wawService.deleteAllUsers();
  });

  // test to see if a visit is created
  test("create a visit", async () => {
    const returnedCounty = await wawService.createCounty(testCounties[0]);
    await wawService.createVisit(returnedCounty._id, testVisits[0]);
    const returnedVisits = await wawService.getAllVisits(returnedCounty._id);
    console.log(returnedVisits);
    assert.equal(returnedVisits.length, 1);
    assertSubset(returnedVisits[0], testVisits[0]);
  });
});
