export function addUser(data) {
    console.log("step2 in action.js", data)
    return { type: "ADD_USER", payload: data };
}

export const deleteUser = (data) => {
    return { type: "DELETE_USER", payload: data };
}

export const updateUser = (data) => {
    console.log(data)
    return { type: "UPDATE_USER", payload: data };
}