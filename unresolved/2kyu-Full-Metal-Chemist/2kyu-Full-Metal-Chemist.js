class InvalidBond extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

class UnlockedMolecule extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

class LockedMolecule extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

class EmptyMolecule extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

const ATOM_CHART = {
  H: {valenceNum: 1, weight: 1.0},
  B: {valenceNum: 3, weight: 10.8},
  C: {valenceNum: 4, weight: 12.0},
  N: {valenceNum: 3, weight: 14.0},
  O: {valenceNum: 2, weight: 16.0},
  F: {valenceNum: 1, weight: 19.0},
  Mg: {valenceNum: 2, weight: 24.3},
  P: {valenceNum: 3, weight: 31.0},
  S: {valenceNum: 2, weight: 32.1},
  Cl: {valenceNum: 1, weight: 35.5},
  Br: {valenceNum: 1, weight: 80.0}
};
const CHO = ['C', 'H', 'O'];

class Atom {

  constructor(element, id) {
    this.element = element;
    this.id = id;
    this.atoms = [];
  }

  get valenceNum() {
    return ATOM_CHART[this.element].valenceNum;
  }

  get weight() {
    return ATOM_CHART[this.element].weight;
  }

  mutate(element) {
    const newValenceNum = ATOM_CHART[element].valenceNum;
    if (newValenceNum < this.atoms.length) {
      throw new InvalidBond();
    }
    this.element = element;
    return this;
  }

  push(atom) {
    this.atoms.push(atom);
  }

  bond(atom) {
    if (this.id === atom.id) {
      throw new InvalidBond();
    }
    if (this.atoms.length === this.valenceNum) {
      throw new InvalidBond();
    }
    if (atom.atoms.length === atom.valenceNum) {
      throw new InvalidBond();
    }
    this.push(atom);
    atom.push(this);
  }

  toString() {
    const byId = (a, b) => a.id - b.id;
    const byLetter = (a, b) => a.element.localeCompare(b.element);
    const toStr = atom => `${atom.element}${atom.id}`;
    const CO = ['C', 'O'];
    const choAtoms = this.atoms.filter(atom => CO.includes(atom.element))
      .sort(byId)
      .sort(byLetter)
      .map(toStr);

    const otherAtoms = this.atoms.filter(({element}) => (! CO.includes(element)) && (element !== 'H'))
      .sort(byId)
      .sort(byLetter)
      .map(toStr);

    const hydrogens = this.atoms.filter(({element}) => element === 'H')
      .map(atom => atom.element);

    const rest = choAtoms.concat(otherAtoms)
      .concat(hydrogens);

    if (rest.length === 0) {
      return `Atom(${this.element}.${this.id})`;
    }
    return `Atom(${this.element}.${this.id}: ${rest.join(',')})`;
  }
}

class Molecule {

  constructor(name) {
    console.log('new Molecule()', name)
    this.name = name || '';
    this.branches = [];
    this.index = 0;
    this.isLocked = false;
    this.atoms = [];
  }

  genAtom(element) {
    const atom = new Atom(element, ++this.index);
    this.atoms.push(atom);
    return atom;
  }

  get formula() {
    console.log('formula()');

    if (! this.isLocked) {
      throw new UnlockedMolecule();
    }

    const elementMap = this.atoms.map(atom => atom.element)
      .reduce((obj, element) => {
        if (typeof obj[element] === 'undefined') {
          obj[element] = 0;
        }
        obj[element]++;
        return obj;
      }, {});

    const format = key => (elementMap[key] === 1) ? key : `${key}${elementMap[key]}`;
    const keys = Object.keys(elementMap);
    const choStrs = CHO.filter(key => key in elementMap)
      .sort()
      .map(format);
    const others = keys.filter(key => ! CHO.includes(key))
      .sort()
      .map(format);

    return choStrs.concat(others)
      .join('');
  }

  get molecularWeight() {
    if (! this.isLocked) {
      throw new UnlockedMolecule();
    }
    console.log('molecularWeight()');
    return this.atoms.reduce((sum, curr) => sum + curr.weight, 0);
  }

  brancher(...args) {
    console.log('brancher()', arguments);
    if (this.isLocked) {
      throw new LockedMolecule();
    }
    args.forEach(num => {

      const carbons = Array.from({length: num})
        .map(() => this.genAtom('C'));
      carbons.reduce((prev, curr) => {
        prev.bond(curr);
        return curr;
      });
      this.branches.push(carbons);
    });
    return this;
  }

  bounder(...args) {
    console.log('bounder()', arguments);
    if (this.isLocked) {
      throw new LockedMolecule();
    }
    args.forEach(([c1, b1, c2, b2]) => {
      const carbon1 = this.branches[b1 - 1][c1 - 1];
      const carbon2 = this.branches[b2 - 1][c2 - 1];
      carbon1.bond(carbon2);
    });
    return this;
  }

  mutate(...args) {
    console.log('mutate()', arguments);
    if (this.isLocked) {
      throw new LockedMolecule();
    }
    args.forEach(([nc, nb, element]) => {
      const carbon = this.branches[nb - 1][nc - 1];
      carbon.mutate(element);
    });
    return this;
  }

  add(...args) {
    console.log('add()', arguments);
    if (this.isLocked) {
      throw new LockedMolecule();
    }
    args.forEach(([nc, nb, element]) => {
      const carbon = this.branches[nb - 1][nc - 1];
      carbon.bond(this.genAtom(element));
    });
    return this;
  }

  addChaining(nc, nb, ...elements) {
    console.log('addChaining()', arguments);
    if (this.isLocked) {
      throw new LockedMolecule();
    }
    const carbon = this.branches[nb - 1][nc - 1];
    const atoms = elements.map(element => this.genAtom(element));
    atoms.reduce((prev, curr) => {
      prev.bond(curr);
      return curr;
    });
    carbon.bond(atoms[0]);

    return this;
  }

  closer() {
    console.log('closer()');

    this.atoms.forEach(atom => {
      Array.from({length: atom.valenceNum - atom.atoms.length})
        .forEach(() => {
          const h = this.genAtom('H');
          atom.bond(h);
        });
    });
    this.isLocked = true;
    return this;
  }

  unlock() {
    console.log('unlock()');
    const noHydrogens = atom => atom.element !== 'H';
    this.atoms = this.atoms.filter(noHydrogens);
    this.atoms.forEach(atom => atom.atoms = atom.atoms.filter(noHydrogens));
    this.atoms = this.atoms.map((atom, i) => {
      atom.id = i + 1;
      return atom;
    });
    this.branches = this.branches.map(atoms => atoms.filter(noHydrogens))
      .filter(atoms => atoms.length > 0);
    if (this.atoms.length === 0) {
      throw new EmptyMolecule();
    }
    this.isLocked = false;
    return this;
  }
}
