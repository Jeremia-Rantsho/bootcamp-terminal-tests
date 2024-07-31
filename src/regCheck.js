//creating a function using "Function Expression Style"

export default function regCheck(regNumber, regLoc){
    if (regLoc === "GP" || regLoc === "EC" || regLoc === "L" || regLoc === "MP") {
        if (regNumber.endsWith(regLoc) === true) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
};
