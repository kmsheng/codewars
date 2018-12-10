class Dinglemouse {

  setAge(age) {
    this.age = age;
    return this;
  }

  setSex(sex) {
    this.sex = sex;
    return this;
  }

  setName(name) {
    this.name = name;
    return this;
  }

  hello() {
    return Object.keys(this)
      .reduce((arr, prop) => {
        if (prop === 'name') {
          arr.push(`My name is ${this.name}.`);
        }
        else if (prop === 'sex') {
          arr.push(`I am ${this.sex === 'M' ? 'male' : 'female'}.`);
        }
        else if (prop === 'age') {
          arr.push(`I am ${this.age}.`);
        }
        return arr;
      }, ['Hello.']).join(' ');
  }
}
