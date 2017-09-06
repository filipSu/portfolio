
export class Screen {

  constructor(
    private _src: string) {

  }

  get src(): string {
    return this._src;
  }

  set src(value: string) {
    this._src = value;
  }
}
