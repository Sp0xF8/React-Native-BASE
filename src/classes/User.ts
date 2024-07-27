

//create a user class 


class User {
    
    private uid: number;
    private name: string;
    private age: number;
    private location: [number, number];
    // private location: string;
    private pictues: Array<string>;
    private interests: Array<number>;
    private bio: string;
    private widgets: Array<Record<number, string>>;

    // location:string

    constructor(uid:number = 0, name:string = '', age:number = 0, location:[number, number] = [0,0], pictures:Array<string> = [], interests:Array<number> = [], bio:string = '', widgets:Array<Record<number, string>> = []) {
        this.uid = uid;
        this.name = name;
        this.age = age;
        this.location = location;
        this.pictues = pictures;
        this.interests = interests;
        this.bio = bio;
        this.widgets = widgets;
    }

    //destructor
    public destroy():void {
        this.uid = 0;
        this.name = '';
        this.age = 0;
        this.location = [0,0];
        this.pictues = [];
        this.interests = [];
        this.bio = '';
        this.widgets = [];
    }

    public getUid():number {
        return this.uid;
    }

    public getName():string {
        return this.name;
    }

    public getProfile():[string, number, [number, number], Array<string>, Array<number>, string, Array<Record<number, string>>] {
        return [this.name, this.age, this.location, this.pictues, this.interests, this.bio, this.widgets];
    }




    public setName(name:string):void {
        this.name = name;
    }

    public setAge(age:number):void {
        this.age = age;
    }


    public addInterest(interestID:number):void {
        this.interests.push(interestID);
    }

    public removeInterest(interestID:number):void {
        this.interests = this.interests.filter((interest) => interest !== interestID);
    }

}

export default User;