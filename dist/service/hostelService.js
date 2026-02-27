//logic ke liye we need our data, structure of rooms/residents
export class hostelService {
    constructor() {
        this.rooms = [];
        this.resident = []; //all private cuz these are private info and need to do encapsulation properly
        //not initializing cuz user will, just giving structure (HTML forms se aayega and logic lagega)
    }
    //loading vs storing (loading is in temp memory) yahan pe browser mein store hoga as json (upto 5MB) locatstorage
    loadData() {
        const storedRooms = localStorage.getItem("rooms");
        //if "rooms" key (local storage is key:value) is not present, it'll give us null
        const storedResidents = localStorage.getItem("residents");
        console.log(storedRooms);
        console.log(storedResidents);
    }
}
