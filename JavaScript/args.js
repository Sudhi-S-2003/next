function fn(...args) {
    return args.map((arg, index) => {
        let argType = Array.isArray(arg) ? "array" : arg === null ? "null" : typeof arg;
        let special = typeof arg === "number" ? arg.toString() : "";
        let length =
            typeof arg === "number"
                ? special.length
                : Array.isArray(arg) || typeof arg === "string" ? arg.length
                    : typeof arg === "object" && arg !== null ? Object.keys(arg).length
                        : 0;

        // Construct the object with at least 10 properties
        let result = {
            key: `argument_${index + 1}`, // Customizable key format
            type: argType,
            value: arg,
            length: length, // Calculated length
            isNull: arg === null,
            isUndefined: arg === undefined,
            isObject: typeof arg === "object" && !Array.isArray(arg) && arg !== null,
            isArray: Array.isArray(arg),
            isString: typeof arg === "string",
            isNumber: typeof arg === "number",
            isBoolean: typeof arg === "boolean",
            description: `This is argument_${index + 1}`,
        };

        return result;
    });
}

// Test
console.log(JSON.stringify(fn(10, 23, "gf", null, [1, 2, 3], { a: 1, b: 2 }, undefined, [])));
