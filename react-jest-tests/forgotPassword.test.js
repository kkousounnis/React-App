const forgotPassword = require('./forgotPassword.js');
const sum = require('./forgotPassword.js');

describe("forgotPassword()", () => {

    it("should return true", () => {

        expect(forgotPassword().toBeTruthy());
        expect(forgotPassword()).toEqual(true);
    });
});