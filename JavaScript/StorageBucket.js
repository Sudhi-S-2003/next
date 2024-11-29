function StorageBucket(cb) {
    let value = 0;
        const _check_number = (val) => {
        if (typeof val !== "number") {
            throw new Error(`Invalid input: ${val}. Value must be a number.`);
        }
    };

    // Public methods
    this.getValue = () => value; 
    
    this.setValue = (val) => {
        _check_number(val);
        value = val;
        if (cb) cb(value, "setValue"); 
    };

    this.inc = () => {
        value += 1; 
        if (cb) cb(value, "increment"); 
    };

    this.dec = () => {
        value -= 1;
        if (cb) cb(value, "decrement"); 
    };

    this.math = (sec, type = "add") => {
        _check_number(sec); 
        if (type === "add") value += sec;
        if (type === "min") value -= sec;
        if (type === "div") value /= sec;
        if (type === "mul") value *= sec;
        if (type === "mod") value %= sec;
        if (cb) cb(value, `math_process_${type}`);
    };
}

// Create an instance of StorageBucket
const UseState = new StorageBucket((newValue, action) => {
    console.log(`Action: ${action}, Value updated to: ${newValue}`);
});

const range = (start, end) => Array.from({ length: end - start + 1 }, (_, i) => start + i);

const numbers = range(99, 100); // Creates [99, 100]
numbers.forEach((num) => {
    UseState.setValue(num); 
});
try {
    UseState.math(2, "mul"); 
    UseState.math(3, "add"); 
    UseState.math(1, "div");
    UseState.math("we", "mod"); 
     
} catch (error) {
    console.error(error.message);
}
