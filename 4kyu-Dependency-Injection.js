class DI {

  constructor(dependency) {
    this.dependency = dependency;
  }

  inject(func) {
    const str = (func.toString().match(/\((.+)\)/) || [])[1] || '';
    const args = str.split(/[\s,]+/)
      .filter(s => this.dependency[s])
      .map(s => this.dependency[s]);

    return () => Reflect.apply(func, this, args);
  }
}
