export class Gaia {
  constructor(private foo: string) { }

  public getFoo() {
    return this.foo;
  }

  public setFoo(foo: string) {
    this.foo = foo;
  }
}
