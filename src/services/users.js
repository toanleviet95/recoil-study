
const getUserByID = async (id) => {
    try {
        const response = await fetch(`https://reqres.in/api/users/${id}`);
        const data = await response.json();
        return data;
    } catch (e) {
        return { error: e.toString() };
    }
};

export default getUserByID;
