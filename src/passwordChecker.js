
export class Main {

    passwordlengthChecker(password) {
        if (password.length < 8) {
            return false;
        }
        return true;
    }

    hasSpecialCharacter(password) {
        return /[!@#$%^&*(),.?":{}|<>]/.test(password);
    }


}