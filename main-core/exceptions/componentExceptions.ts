export class ComponentExceptions extends Error {

    public static EXISTENT_COMPONENT: string = "A component with the same name (%component%) has been registered already. Components cannot be duplicated.";
    public static NON_VALID_INJECTABLE: string = "Component cannot be injected because it is not a known component";
  
    constructor(public message: string) {
      super(message);
      this.name = "ComponentExceptions";
      this.stack = (this).stack;
    }
  
}