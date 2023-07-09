export class Event {
    id: string = "";
    name: string = "";
    place: string = "";
    time: string = "";
    maxPeople?: number = 0;
    people: number = 0;
    creator: string = "";
    private: boolean = false;
    requirements?: string[] = [];
}
