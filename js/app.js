var Cat = function() {
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.imgSrc = ko.observable('img/cat1.jpg');
  this.imgAttribution = ko.observable('http://flicker.com/1');
  this.nicknames = ko.observableArray([
        { nickname:'Bert' },
        { nickname: 'Charles' },
        { nickname: 'Denise' }
    ]);
  this.level = ko.computed(function() {
    if(this.clickCount() < 10)
      return 'Teen';
    else
      return 'Older';
  }, this);
};

var ViewModel = function() {

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() +1);
  };
};

ko.applyBindings(new Cat());
ko.applyBindings(new ViewModel());
