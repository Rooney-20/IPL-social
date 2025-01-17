import { Main } from "../src/passwordChecker.js";


describe("Password Checker", () => {
    let main;

    beforeEach(() => {
        main = new Main();
    });

    // Testing the pipeline CI with Jasmine
    it("should return false if password is less than 8 characters", () => {
        const password = main.passwordlengthChecker("1234567")
        expect(password).toBe(false);
    });

    
});