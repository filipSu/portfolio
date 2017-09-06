import PlatformType from './PlatformType';

export class ProjectCardInfo {

  constructor(
    private _id: number,
    private _title: string,
    private _url: string,
    private _description: string,
    private _platform: PlatformType,
    private _thumbnail: string) {
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get platform(): PlatformType {
    return this._platform;
  }

  set platform(value: PlatformType) {
    this._platform = value;
  }


  get thumbnail(): string {
    return this._thumbnail;
  }

  set thumbnail(value: string) {
    this._thumbnail = value;
  }
}
