export class Recipe {
  public done: boolean = false;
  constructor(public title: string, public ingredients: string[], public instructions: string[]) { }
}
