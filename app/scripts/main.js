

//Constructors for players
var Good = function(options) {
  var options = options || {};
    this.name = options.name;
    this.breed = options.breed;
    this.motto = options.motto;
    this.health = options.health || 100;
};

var Bad = function(options) {
  var options = options || {};
    this.name = options.name;
    this.breed = options.breed;
    this.motto = options.motto;
    this.health = options.health || 100;
};

//instances for GOOD guys

var sam = new Good ({
  name: "Sam",
  breed: "Golden Retriever"
  motto: "Run Wild",
});

var lucy = new Good ({
  name: "Lucy",
  breed: "Labrador",
  motto: "I am all that matters."
});

var riley = new Good ({
  name: "Riley",
  breed: "Shi-Tzu",
  motto: "I look small, but fight big."
});

//instances for BAD guys

var sheba = new Bad ({
  name: "Sheba",
  breed: "Persian"
  motto: "Finicky is fine",
});

var mr_fluffy = new Bad ({
  name: "Mr. Fluffy",
  breed: "Alley Cat"
  motto: "Pure bloods suck."
});

var queenie = new Bad ({
  name: "Queenie",
  breed: "Maine Coon"
  motto: "Kill them all and let God decide."
});
