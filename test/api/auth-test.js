import { assert } from "chai";
import { wawService } from "./waw-service.js";
import { decodeToken } from "../../src/api/jwt-utils.js";
import { maggie } from "../fixtures.js";

suite("Authentication API tests", async () => {
  setup(async () => {
    wawService.clearAuth();
    await wawService.createUser(maggie);
    await wawService.authenticate(maggie);
    await wawService.deleteAllUsers();
  });

  test("authenticate", async () => {
    const returnedUser = await wawService.createUser(maggie);
    const response = await wawService.authenticate(maggie);
    assert(response.success);
    assert.isDefined(response.token);
  });

  test("verify Token", async () => {
    const returnedUser = await wawService.createUser(maggie);
    const response = await wawService.authenticate(maggie);

    const userInfo = decodeToken(response.token);
    assert.equal(userInfo.email, returnedUser.email);
    assert.equal(userInfo.userId, returnedUser._id);
  });

  test("check Unauthorized", async () => {
    wawService.clearAuth();
    try {
      await wawService.deleteAllUsers();
      assert.fail("Route not protected");
    } catch (error) {
      assert.equal(error.response.data.statusCode, 401);
    }
  });
});
