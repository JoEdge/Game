
//Click thumbnail photos to appear in larger div
$('.pic a').click(function(event) {
    event.preventDefault();
    $('.dog').empty().append(
        $('<img>', {src: this.href})
    );
});

$('.tic a').click(function(event) {
    event.preventDefault();
    $('.cat').empty().append(
        $('<img>', {src: this.href})
    );
});

//Constructor for dogs
var Good = function(options) {
  var options = options || {};
    this.name = options.name;
    this.breed = options.breed;
    this.motto = options.motto;
    this.health = options.health || 100;
    this.attack = function(cat) {
     return cat.health = cat.health - _.random (0,25);
    };

    this.stats = function(dog){
  return 'Name: ' + this.name + 'Breed: ' + this.breed + 'Motto: ' + this.motto;
    };

$('#golden').hover(function(event) {
    event.preventDefault();
    $('.goldie').empty().append(sam.stats());
    });

};

//constructor for cats
var Bad = function(options) {
  var options = options || {};
    this.name = options.name;
    this.breed = options.breed;
    this.motto = options.motto;
    this.health = options.health || 100;
    this.attack = function(dog) {
      return dog.health = dog.health - _.random(1,25);
    };

    this.stats = function(cat){
      return this.name + ', ' + this.breed + ', ' +     this.motto;
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
  motto: "You are tough. I am tougher.",
  health: 150,
});

var riley = new Good ({
  name: "Riley",
  breed: "Shi-Tzu",
  motto: "Kill or be killed.",
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
  motto: "Kill them all and let God sort 'em out.",
  health: 110,
});

//Prepare your players
var doggie, kittie;

$('.pic').on('click', function(event){
  event.preventDefault();

  var li_breed = $(this).attr('id');//test
  console.log(li_breed);

  doggie = new Good ({
    breed: li_breed
  });
});

$('.tic').on('click', function(event){
    event.preventDefault();

    var li_breed = $(this).attr('id');//test
    console.log(li_breed);

  kittie = new Bad ({
    breed: li_breed
  });

});

//Start the fight
$('#fight').on('click', function(event){
  event.preventDefault();

  doggie.attack(kittie);
  if (kittie.health > 0) {
    kittie.attack(doggie);
  }else if (kittie.health <= 0){
    return "Dead"    
  }
});
