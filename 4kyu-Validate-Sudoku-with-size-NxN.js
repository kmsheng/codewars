class Sudoku {

  constructor(data) {
    this.length = data.length;
    this.data = data;
  }

  genMap() {
    return this.data.reduce((map, row, index) => {
      map[index + 1] = false;
      return map;
    }, {});
  }

  isValidSize() {
    return this.data.every(row => row.length === this.length);
  }

  isEveryRowValid() {
    return this.data.every(row => {
      const map = this.genMap();
      row.forEach(num => {
        const key = String(num);
        if (key in map) {
          map[key] = true;
        }
      });
      return Object.keys(map)
        .every(key => map[key]);
    });
  }

  isEveryColumnValid() {
    for (let i = 0; i < this.length; i++) {
      const map = this.genMap();
      for (let j = 0; j < this.length; j++) {
        const key = String(this.data[j][i]);
        if (key in map) {
          map[key] = true;
        }
      }
      const isColumnValid = Object.keys(map)
        .every(key => map[key]);
      if (! isColumnValid) {
        return false;
      }
    }
    return true;
  }

  isEveryLittleSquareValid() {
    const length = Math.sqrt(this.length);

    for (let k = 0; k < length; k++) {
      for (let l = 0; l < length; l++) {
        const map = this.genMap();
        for (let i = k * length; i < (k * length) + length; i++) {
          for (let j = l * length; j < (l * length) + length; j++) {
            const key = String(this.data[i][j]);
            if (key in map) {
              map[key] = true;
            }
          }
        }
        const isValidSquare = Object.keys(map)
            .every(key => map[key]);
        if (! isValidSquare) {
          return false;
        }
      }
    }
    return true;
  }

  isValid() {
    return this.isValidSize() && this.isEveryRowValid() && this.isEveryColumnValid() && this.isEveryLittleSquareValid();
  }
}
