

export class ThingDTO{
    id: number;
    description: String;
    name: String;
    actions: Array<String>;
    events: Array<String>;

    constructor(id:number, description: String, name: String, actions: Array<String>, events: Array<String> ){
      
        this.description=description;
        this.actions=actions;
        this.name=name;
        this.events=events;
      
        
    }
}