var firstname = "himanshu";
var lastname = "rawat";
console.log(firstname + ' ' + lastname);
console.log(window.firstname + ' ' + window.lastname);
var Realhero = {
    firstname : "Indian",
    lastname : "Army",
    fullname: function(firstname, lastname){
        console.log(Realhero.firstname + ' ' + Realhero.lastname);
        console.log(this.firstname + ' ' + this.lastname);
    }
};
Realhero.fullname();
