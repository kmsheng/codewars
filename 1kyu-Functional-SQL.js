function query() {

  this.result = [];
  this.funcs = [];

  this.select = function(func) {
    const defaultFunc = result => result;
    this.funcs.push({type: 'select', func: func || defaultFunc});
    return this;
  };

  this.from = function(...result) {
    this.funcs.push({type: 'from', result});
    return this;
  };

  this.where = function(...funcs) {
    if (funcs.length === 1) {
      this.funcs.push({type: 'where', func: funcs[0], funcs: []});
    }
    else {
      this.funcs.push({type: 'where', func: null, funcs});
    }
    return this;
  };

  this.groupBy = function(...funcs) {
    this.funcs.push({type: 'groupBy', funcs});
    return this;
  };

  this.having = function(func) {
    this.funcs.push({type: 'having', func});
    return this;
  }

  this.checkDuplicates = function() {
    this.funcs.map(func => func.type)
      .reduce((obj, name) => {
        if (['where', 'having'].includes(name)) {
          return obj;
        }
        if (typeof obj[name] === 'undefined') {
          obj[name] = 0;
        }
        obj[name] += 1;
        if (obj[name] > 1) {
          throw new Error(`Duplicate ${name.toUpperCase()}`);
        }
        return obj;
      }, {});
  }

  this.orderBy = function(func) {
    this.funcs.push({type: 'orderBy', func});
    return this;
  };

  this.performGroupBy = function(result, funcs) {
    const func = funcs.shift();
    if (! func) {
      return result;
    }
    return result.reduce((arrs, row) => {

      const key = func(row);
      let arr = arrs.find(([k]) => k === key);
      let valueArr = [];

      if (arr) {
        valueArr = arr[1];
      }
      else {
        arr = [key, valueArr]
        arrs.push(arr);
      }
      valueArr.push(row);
      return arrs;
    }, [])
    .map(([k, v]) => [k, this.performGroupBy(v, funcs.slice())]);
  };

  this.join = function(resultSet, where) {
    const {func} = where || {};
    const result = [];
    for (let i = 0; i < resultSet[0].length; i++) {
      const rowA = resultSet[0][i];
      for (let j = 0; j < resultSet[1].length; j++) {
        const rowB = resultSet[1][j];

        if (func && func([rowA, rowB])) {
          result.push([rowA, rowB]);
        }
        if (typeof func !== 'function') {
          result.push([rowA, rowB]);
        }
      }
    }
    return result;
  };

  this.execute = function() {
    this.checkDuplicates();
    const byType = type => func => func.type === type;
    const select = this.funcs.find(byType('select'));
    const from = this.funcs.find(byType('from'));
    const wheres = this.funcs.filter(byType('where'));
    const groupBy = this.funcs.find(byType('groupBy'));
    const havings = this.funcs.filter(byType('having'));
    const orderBy = this.funcs.find(byType('orderBy'));
    const isJoin = from && from.result.length > 1;

    if (isJoin) {
      this.result = this.join(from.result, wheres.shift());
    }
    if (from && (from.result.length === 1)) {
      this.result = from.result[0];
    }
    if (wheres.length > 0) {
      wheres.forEach(where => {
        if (where.funcs.length > 1) {
          this.result = this.result.filter(row => {
            return where.funcs.reduce((func1, func2) => {
              return func1(row) || func2(row);
            });
          });
        }
        else {
          this.result = this.result.filter(where.func);
        }
      });
    }
    if (groupBy) {
      this.result = this.performGroupBy(this.result, groupBy.funcs.slice());
    }
    if (orderBy) {
      this.result = this.result.slice();
      this.result.sort(orderBy.func);
    }
    if (havings.length > 0) {
      havings.forEach(having => {
        this.result = this.result.filter(having.func);
      });
    }
    if (select) {
      this.result = this.result.map(select.func);
    }
    return this.result;
  };

  return this;
}
