const user = {
  name: "Alan",
  lastName: "Garcia",
  age: 30,
  showFullName() {
    return this.name + " " + this.lastName;
  }
}

console.log(user.name)
console.log(user.showFullName())

// Constructor

function Person() {
  this.name2 = ""
  this.lastName2 = ""
  this.age2 = 0
  this.showFullName2 = function () {
    return `${this.name2} ${this.lastName2}`
  }
}

const user2 = new Person()
user2.name2 = "Alan"
user2.lastName2 = "Garcia"
user2.age2 = 30
console.log(user2.showFullName2())

const user3 = new Person()
user3.name2 = "Jorge"
user3.lastName2 = "Ruiz"
user3.age2 = 34
console.log(user3.showFullName2())