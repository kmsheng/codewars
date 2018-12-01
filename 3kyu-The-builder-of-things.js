Object.defineProperty(global, 'being_the', {
  get: function() {
    being_the_part.getters.push('being_the');
    return being_the_part;
  }
});

class Thing {
  constructor(name) {
    this.name = name;
    this.getters = [];

    this.defineSetterFuncs(['person', 'woman', 'man']);
    this.defineGetterFuncs(['is_a', 'is_not_a', 'is_the', 'being_the', 'and_the', 'can']);
    this.defineBodyFuncs(['legs', 'head', 'arms', 'hands', 'fingers', 'eyes', 'torso']);
    this.defineHavingFuncs(['has', 'having']);
    this.defineColorFuncs(['blue', 'green']);
    this.defineShapeFuncs(['round']);
    this.defineAttrFuncs(['color', 'shape']);
    this.spokenSentences = [];
  }

  defineSetterFuncs(names) {
    names.forEach(name => {
      Object.defineProperty(this, name, {
        get: function() {
          const getter = this.getters.pop();
          this._setValue(name, getter);
        }
      });
    });
  }

  defineGetterFuncs(names) {
    names.forEach(name => {
      Object.defineProperty(this, name, {
        get: function() {
          this.getters.push(name);
          return this;
        }
      });
    });
  }

  defineColorFuncs(names) {
    names.forEach(name => {
      Object.defineProperty(this, name, {
        get: function() {
          const getter = this.getters.pop();
          if (getter === 'color') {
            this._color = name;
          }
          return this;
        }
      });
    });
  }

  defineShapeFuncs(names) {
    names.forEach(name => {
      Object.defineProperty(this, name, {
        get: function() {
          const getter = this.getters.pop();
          if (getter === 'shape') {
            this._shape = name;
          }
        }
      });
    });
  }

  defineAttrFuncs(names) {
    names.forEach(name => {
      Object.defineProperty(this, name, {
        get: function() {
          const getter = this.getters.pop();
          if (getter === 'being_the' || getter === 'and_the') {
            this.getters.push(name);
            return this;
          }
          return this[`_${name}`];
        }
      });
    });
  }

  getSingularName(name) {
    if (name[name.length - 1] === 's') {
      return name.substring(0, name.length - 1);
    }
    return name;
  }

  defineBodyFuncs(names) {
    names.forEach(name => {
      Object.defineProperty(this, name, {
        get: function() {
          const getter = this.getters.pop();
          if (getter === 'has') {
            if (this._has_num === 1) {
              this[`_${name}`] = new Thing(name);
            }
            else {
              const self = this;
              this[`_${name}`] = Array.from(Array(this._has_num))
                .map(() => new Thing(self.getSingularName(name)));

              this[`_${name}`].each = function(func) {
                return this.forEach(part => {
                  global.having = function having(num) {
                    part.getters.push('has');
                    part._has_num = num;
                    return part;
                  }

                  global.being_the_part = part;
                  func(part);
                });
              };
            }
          }
          return this[`_${name}`];
        }
      });
    });
  }

  defineHavingFuncs(names) {
    names.forEach(name => {
      this[name] = function(num) {
        this.getters.push('has');
        this._has_num = num;
        return this;
      }
    });
  }

  _setValue(prop, getter) {
    if (getter === 'is_a') {
      this[`is_a_${prop}`] = true;
      this[`is_not_a_${prop}`] = false;
    }
    if (getter === 'is_not_a') {
      this[`is_a_${prop}`] = false;
      this[`is_not_a_${prop}`] = true;
    }
  }

  get parent_of() {
    const getter = this.getters.pop();
    if (getter === 'is_the') {
      this.getters.push('parent_of');
      return this;
    }
    return this._parent_of;
  }

  get joe() {
    const getter = this.getters.pop();
    if (getter === 'parent_of') {
      this._parent_of = 'joe';
    }
  }

  speak(...args) {
    global.name = this.name;
    if (args.length === 2) {
      this._speakFunc = (...a) => {
        const sentence = args[1](a);
        this.spokenSentences.push(sentence);
        return sentence;
      };

      this[args[0]] = this.spokenSentences;
    }
    if (args.length === 1) {
      if (typeof args[0] === 'function') {
        this._speakFunc = args[0];
        return;
      }
      return this._speakFunc(args[0]);
    }
  }
}
