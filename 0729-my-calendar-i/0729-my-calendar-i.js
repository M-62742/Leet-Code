class MyCalendar {
    constructor() {
        this.events = [];
    }

    book(start, end) {
        // Check for overlap with existing events
        for (let [s, e] of this.events) {
            if (start < e && s < end) { // overlap condition
                return false;
            }
        }
        // If no overlap, add the event
        this.events.push([start, end]);
        return true;
    }
}

// Example usage:
const myCalendar = new MyCalendar();
console.log(myCalendar.book(10, 20)); // return true
console.log(myCalendar.book(15, 25)); // return false
console.log(myCalendar.book(20, 30)); // return true
