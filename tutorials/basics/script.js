const person = {
    firstName: "Tom",
    lastName : "Hanks",
    id       : 5566,
    fullName : function() {
        return this.firstName + " " + this.lastName;
    }
};

function functionInFunction(sum, x, y) {
    return sum(x,y);
}
function multiply(a,b) {
    return a * b; }