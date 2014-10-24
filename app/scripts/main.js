
//Click thumbnail photos to appear in larger div
$('.pic a').click(function(event) {
    event.preventDefault();
    $('.dog').empty().append (
        $('<img>', {src: this.href})
    );
      $('.d_stats').toggleClass('animated flipOutX');
});

$('.tic a').click(function(event) {
    event.preventDefault();
    $('.cat').empty().append(
        $('<img>', {src: this.href})
    );
      $('.c_stats').toggleClass('animated flipOutX');
});

//Constructor for dogs and cat instances
var Animal = function(options) {
  var options = options || {};
    this.name = options.name;
    this.breed = options.breed;
    this.motto = options.motto;
    this.health = 100;
    this.attack = function(animal) {
     return animal.health = animal.health - _.random (0,25);
    };

    this.stats = function(animal){
      return 'NAME: ' + this.name + '</br>'+ 'BREED: ' + this.breed + '</br>' + 'MOTTO: ' + this.motto;
    };
//each animals stats will appear on page
$('#golden').hover(function(event) {
   event.preventDefault();
    $('.d_stats').empty().append(sam.stats());
  });

$('#lab').hover(function(event) {
   event.preventDefault();
    $('.d_stats').empty().append(lucy.stats());
  });

$('#shitzu').hover(function(event) {
   event.preventDefault();
    $('.d_stats').empty().append(riley.stats());
  });

$('#persian').hover(function(event) {
   event.preventDefault();
    $('.c_stats').empty().append(sheba.stats());
  });

$('#alley').hover(function(event) {
   event.preventDefault();
    $('.c_stats').empty().append(mr_snuggles.stats());
  });

$('#coon').hover(function(event) {
   event.preventDefault();
    $('.c_stats').empty().append(princess.stats());
  });

};

//Instances for GOOD guys
var sam = new Animal ({
  name: "Sam",
  breed: "Golden Retriever",
  motto: "You are tough. I am tougher.",
});

var lucy = new Animal ({
  name: "Lucy",
  breed: "Labrador",
  motto: "I am the Alpha and the Omega.",
});

var riley = new Animal ({
  name: "Riley",
  breed: "Shi-Tzu",
  motto: "Kill or be killed.",
});

//Instances for BAD guys
var sheba = new Animal ({
  name: "Sheba",
  breed: "Persian",
  motto: "Finicky is fine",
});

var mr_snuggles = new Animal ({
  name: "Mr. Snuggles",
  breed: "Alley Cat",
  motto: "Pure bloods suck.",
});

var princess = new Animal ({
  name: "Princess Fluffy-Pants",
  breed: "Maine Coon",
  motto: "Kill them all and let God sort 'em out.",
});

//choose your players
var doggie, kittie;

$('.pic').on('click', function(event){
  event.preventDefault();

  var li_name = $(this).attr('name');
  var li_breed = $(this).attr('id');

  doggie = new Animal ({
    name: li_name,
    breed: li_breed
  });

});

$('.tic').on('click', function(event){
    event.preventDefault();

    var li_name = $(this).attr('name');
    var li_breed = $(this).attr('id');

  kittie = new Animal ({
    name: li_name,
    breed: li_breed
  });

});

//Start the fight
$('#fight').on('click', function(event){
  event.preventDefault();

$('#dogster').empty().append(doggie.name," ", doggie.health);
$('#catster').empty().append(kittie.name," ", kittie.health);

  doggie.attack(kittie);
  if (kittie.health > 0) {
    kittie.attack(doggie);

    }else if (doggie.health <= 0) {
      $('#dogster').empty().append(doggie.name," Needs a Vet!");
      $('#fight').toggleClass('animated flipOutX');
      $('#catster').empty().append(kittie.name," Wins!");
      $('.cat').toggleClass('animated flip');
      $('.dog').toggleClass('animated hinge');

    }else if (kittie.health <= 0) {
      $('#catster').empty().append(kittie.name," Needs a Vet!");
      $('#fight').toggleClass('animated flipOutX');
      $('#dogster').empty().append(doggie.name," Wins!");
      $('.dog').toggleClass('animated flip');
      $('.cat').toggleClass('animated hinge');
    };
});
