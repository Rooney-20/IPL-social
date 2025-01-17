
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

    hasDigit(password) {
        return /\d/.test(password);
    }

    doesNotContainIPL(password) {
        return !/ipl/i.test(password);
    }

    passwordValidChecker(password) {
        return this.passwordlengthChecker(password) &&
               this.hasSpecialCharacter(password) &&
               this.hasDigit(password) &&
               this.doesNotContainIPL(password);
    }


}