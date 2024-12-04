
const data = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
    { value: 6 },
    { value: 7 },
    { value: 8 },
    { value: 9 },
    { value: 10 }
];
const groupedData = data.reduce((acc, curval, curind) => {
    const groupIndex = Math.floor(curind / 5); // Determine group index based on the current index.

    // Initialize the group if it doesn't exist
    if (!acc[groupIndex]) {
        acc[groupIndex] = { three: [], two: [] };
    }

    // Add to `three` if its length is less than 3
    if (acc[groupIndex].three.length < 3) {
        acc[groupIndex].three.push(curval);
    }
    // Otherwise, add to `two`
    else {
        acc[groupIndex].two.push(curval);
    }

    return acc;
}, []); // Start with an empty array.

console.log(JSON.stringify(groupedData))
