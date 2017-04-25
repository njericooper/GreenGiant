function Ferret (){};

Ferret.prototype = new Animal();

Ferret.prototype.type = 'domestic';

// overriding

Ferret.prototype.eat = function (food){
  Animal.prototype.eat.call (this, food);
  // ferret junk here I'm going to leave this blank for times sake

}

// with a conditional statement

function Animal (a){
  if (false !== a) return;
  // do constructor stuff
}

Ferret.prototype = new Animal (false)


// An emply constructor will override its prototype

function Animal (){
  //constructor stuff
}

function f (){};
f.prototype = Animal.prototype;
Ferret.prototype = new f;
