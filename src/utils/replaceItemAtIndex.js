export default (arr, index, newValue) => arr ? [...arr.slice(0, index), newValue, ...arr.slice(index + 1)] : [];
