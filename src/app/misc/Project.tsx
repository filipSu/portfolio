import PlatformType from './PlatformType';

export class Project {

  constructor(
    private _id: number,
    private _url: string,
    private _title: string,
    private _subtitle: string,
    private _imageType: PlatformType,
    private _imageSrc: string,
    private _shortDescription: string,
    private _platforms: string[],
    private _technologies: string[],
    private _goal: string,
    private _role: string,
    private _description: string,
    private _screens: string[],
    private _previousProjectUrl: string,
    private _nextProjectUrl: string) {

  }

  getDescriptionObject() {
    return {
      platform: this.platforms,
      techs: this.technologies,
      goal: this.goal,
      role: this.role,
      text: this.description
    };
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get subtitle(): string {
    return this._subtitle;
  }

  set subtitle(value: string) {
    this._subtitle = value;
  }

  get imageType(): PlatformType {
    return this._imageType;
  }

  set imageType(value: PlatformType) {
    this._imageType = value;
  }

  get imageSrc(): string {
    return this._imageSrc;
  }

  set imageSrc(value: string) {
    this._imageSrc = value;
  }

  get shortDescription(): string {
    return this._shortDescription;
  }

  set shortDescription(value: string) {
    this._shortDescription = value;
  }

  get platforms(): string[] {
    return this._platforms;
  }

  set platforms(value: string[]) {
    this._platforms = value;
  }

  get technologies(): string[] {
    return this._technologies;
  }

  set technologies(value: string[]) {
    this._technologies = value;
  }

  get goal(): string {
    return this._goal;
  }

  set goal(value: string) {
    this._goal = value;
  }

  get role(): string {
    return this._role;
  }

  set role(value: string) {
    this._role = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get screens(): string[] {
    return this._screens;
  }

  set screens(value: string[]) {
    this._screens = value;
  }

  get previousProjectUrl() {
    return this._previousProjectUrl;
  }

  set previousProjectUrl(value: string) {
    this._previousProjectUrl = value;
  }

  get nextProjectUrl() {
    return this._nextProjectUrl;
  }

  set nextProjectUrl(value: string) {
    this._nextProjectUrl = value;
  }
}
