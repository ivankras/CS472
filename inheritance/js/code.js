window.onload = () => {
    // Homepage
    const homepage = document.getElementById('homepage');
    homepage.onclick = function() { location.href = '/'; };
};

// Exercise 1
String.prototype.filter = function(takeOut) {
    if (!takeOut) {
        return this.toString();
    }

    return this.split(' ').filter(elem => elem !== takeOut).join(' ');
};

// Exercise 2
Array.prototype.bubbleSort = function() {
    let done = false;
    while (!done) {
        done = true;
        for (let i = 1; i < this.length; i++) {
            if (this[i-1] > this[i]) {
                done = false;
                [this[i], this[i-1]] = [this[i-1], this[i]];
            }
        }
    }
    return this;
};

// Exercise 3
var Person = function() {};
Person.prototype.initialize = function(name, age) {
    this.name = name;
    this.age = age;
};
Person.prototype.describe = function() {
    return this.name + ", " + this.age + " years old.";
}
var Student = function() {};
Student.prototype = new Person();
Student.prototype.learn = function(subject) {
    console.log(this.name + " just learned " + subject);
};

var Teacher = function() {};
Teacher.prototype = new Person();
Teacher.prototype.teach = function(subject) {
    if (subject === undefined) {return undefined;}
    console.log(this.name + ' is teaching ' + subject);
    return this.name + ' is teaching ' + subject;
};
