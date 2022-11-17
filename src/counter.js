export default () => ({
    count: 0,
    init() {
        this.count = 5;
    },
    increment(e) {
        this.count++;
        console.log(`inc: ${e.altitudeAngle}`);
    },
    decrement(e) {
        this.count--;
        console.log(`dec: ${e.altitudeAngle}`);
    }
})

// document.addEventListener('alpine:init', () => {
//     Alpine.data('counter', () => ({...}));
// });