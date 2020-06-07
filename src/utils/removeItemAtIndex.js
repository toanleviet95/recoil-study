export default (arr, index) => arr ? [...arr.slice(0, index), ...arr.slice(index + 1)] : [];
