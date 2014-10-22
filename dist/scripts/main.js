//Constructors for players
var Good = function(options) {
  var options = options || {};
    this.name = options.name;
    this.breed = options.breed;
    this.motto = options.motto;
    this.health = options.health || 100;

    //Prototype for attack
    Good.prototype.attack = function(dog) {
      dog.health = dog.health - _.random(0, 25);
      if (dog.health<0) {
        return "dead";
      }
    };
};

var Bad = function(options) {
  var options = options || {};
    this.name = options.name;
    this.breed = options.breed;
    this.motto = options.motto;
    this.health = options.health || 100;

    //Prototype for attack
    Bad.prototype.attack = function(cat) {
      cat.health = cat.health - _.random(0, 25);
      if (cat.health<0) {
        return "dead";
      }
    };
};

//Instances for GOOD guys
var sam = new Good ({
  name: "Sam",
  breed: "Golden Retriever",
  motto: "Run Wild",
});

var lucy = new Good ({
  name: "Lucy",
  breed: "Labrador",
  motto: "I am all that matters.",
  health: 150,
});

var riley = new Good ({
  name: "Riley",
  breed: "Shi-Tzu",
  motto: "I look small, but fight big.",
});

//Instances for BAD guys
var sheba = new Bad ({
  name: "Sheba",
  breed: "Persian",
  motto: "Finicky is fine",
});

var mr_snuggles = new Bad ({
  name: "Mr. Snuggles",
  breed: "Alley Cat",
  motto: "Pure bloods suck.",
});

var princess = new Bad ({
  name: "Princess Fluffy-Pants",
  breed: "Maine Coon",
  motto: "Kill them all and let God decide.",
  health: 110,
});

//Click photos
$('.pic a').click(function(opt) {
    opt.preventDefault();
    $('.dog').empty().append(
        $('<img>', {src: this.href})
    );
});

$('.tic a').click(function(opt) {
    opt.preventDefault();
    $('.cat').empty().append(
        $('<img>', {src: this.href})
    );
});
