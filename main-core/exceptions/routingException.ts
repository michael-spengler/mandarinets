export class RoutingException extends Error {

    public static EXISTENT_ACTION: string = "The action cannot be created because one already exists. Routing Methods must not have the same name.";
    public static NONVALID_COMPONENT: string = "The action cannot be created because the component is not a valid controller.";
  
    constructor(public message: string) {
      super(message);
      this.name = "RoutingException";
      this.stack = (this).stack;
    }
  
}