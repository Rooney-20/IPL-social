import { Main } from "../src/passwordChecker.js";


describe("Password Checker", () => {
    let main;

    beforeEach(() => {
        main = new Main();
    });

    
    it("should return false if password is less than 8 characters", () => {
        const password = main.passwordlengthChecker("1234567");
        expect(password).toBe(false);
    });
    
    it("should return true if password at least 8 characters", () => {
        const password = main.passwordlengthChecker("1234567b");
        expect(password).toBe(true);
    });
    

    it("should return false if password does not contain a special character", () => {
        const password = main.hasSpecialCharacter("12345678");
        expect(password).toBe(false);
    });

    it("should return false if password does not contain a digit", () => {
        const password = main.hasDigit("abcdefgh");
        expect(password).toBe(false);
    });

    it("should return false if password contains 'IPL' in any case", () => {
        const password = main.doesNotContainIPL("1234IPL!");
        expect(password).toBe(false);
        const password2 = main.doesNotContainIPL("1234ipl!");
        expect(password2).toBe(false);
    });

    it("should return true for a valid password", () => {
        const password = main.passwordValidChecker("Valide1!");
        expect(password).toBe(true);
    });

    
});