function Person() {
    // The Person() constructor defines `this` as an instance of itself.
    this.age = 0;
  
    setInterval(function growUp() {
      // In non-strict mode, the growUp() function defines `this` 
      // as the global object, which is different from the `this`
      // defined by the Person() constructor.
      this.age++;
      console.log(this.age);
    }, 1000);
  }

  function Person2() {
    var that = this;
    that.age = 0;
  
    setInterval(function growUp() {
      // The callback refers to the `that` variable of which
      // the value is the expected object.
      that.age++;
      console.log(that.age);
    }, 1000);
  }

  function PersonArrow(){
    this.age = 0;
  
    setInterval(() => {
      this.age++; // |this| properly refers to the person object
      console.log("Arrow:" + this.age);
    }, 1000);
  }
  
  var p = new Person();
  var p2 = new Person2();
  var pArrow = new PersonArrow();