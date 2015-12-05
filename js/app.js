initialCats = [
  {
    name: "Kitty",
    imgSrc: "img/cat1.jpg",
    nicknames: ['Bert', 'Charles','Denise'],
    imgAttribution: 'http://flickr.com',
    clickCount: 0
  },
  {
    name: "Johnny",
    imgSrc: "img/cat2.jpg",
    nicknames: ['Andy', 'Pep'],
    imgAttribution: 'http://flickr.com',
    clickCount: 0
  },
  {
    name: "Lucia",
    imgSrc: "img/cat3.jpg",
    nicknames: ['Oko','Reti'],
    imgAttribution: 'http://flickr.com',
    clickCount: 0
  },
  {
    name: "Eddie",
    imgSrc: "img/cat4.jpg",
    nicknames: ['Pumo', 'Tigo','Dino'],
    imgAttribution: 'http://flickr.com',
    clickCount: 0
  }
];

var Cat = function(data) {
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.imgAttribution = ko.observable(data.imgAttribution);
  this.nicknames = ko.observableArray(data.nicknames);

  this.level = ko.computed(function() {
    if(this.clickCount() < 10)
      return 'Teen';
    else
      return 'Older';
  }, this);
};

var ViewModel = function() {
  var self = this;

  this.catList = ko.observableArray([]);

  initialCats.forEach(function(catItem){
    self.catList.push( new Cat(catItem));
  });

  this.currentCat = ko.observable( this.catList()[0]);

  this.incrementCounter = function() {
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  };

  this.setCat = function(clickedCat) {
    self.currentCat(clickedCat);
  };
};
ko.applyBindings(new ViewModel());
