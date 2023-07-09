

export class Termin{
    id: string | undefined;
    name: string | undefined;
    description: | undefined;
    date: Date | undefined;
    time: string | undefined;
    place: string  | undefined;
    people: number | undefined;
    maxPeople?: number | undefined;
    requirements?: string[] | undefined;
    creator: string | undefined;
}