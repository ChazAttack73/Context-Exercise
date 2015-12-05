var Robot = function (name) {
  this.name = name;

};

function add ( op1, op2 ) {
  this.name = this.name || "Humans";
  return this.name + " can count to " + (op1 + op2);
}

var voltron = new Robot("Voltron");
var bender = new Robot("Bender Rodriguez");
var optimus = new Robot("Optimus Prime");
var megaman = new Robot("Mega Man");
var bmo = new Robot("B-Mo");
var wall_e = new Robot("Wall-E");




// #1
console.log(add(0, 1));
// invoke the add function to the global context, this.name is undefined in the global context so replace with "Humans" and pass arguments 0 and 1 to add function


// #2
console.log(add.call(voltron, 2, 3));
//invoke the add function, set context to voltron with call and pass arguments 2 and 3 to add function


// #3
console.log(add.apply(optimus, [20, 30]));
//invoke the add function, set context to optimus with apply and pass the array containing 20 and 30 to add function


// #4
var calculate = add.bind(bender);
console.log(calculate('drinking', ' beer'));
//bind the add function to the variable calculate and set the context to bender *calculate does not run the add function yet!*, invoke calculate and pass arguments 'drinking' and 'beer' to add function