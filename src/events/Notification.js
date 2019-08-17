import {Subject} from "rxjs";

class Notification {
    event = new Subject();

    receive() {
        return this.event.asObservable();
    }

    dispatch(event) {
        return this.event.next(event);
    }

}

// Singleton
export default (new Notification())