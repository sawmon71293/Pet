export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key));
}


export const savePet = ({ pet }) => {
    const [petName, status, pawrent, breed, gender, dob, contactPhoneNo, address] = pet;
    const newPet = {
        id: crypto.randomUUID(),
        petName,
        status,
        pawrent,
        breed,
        gender,
        dob,
        contactPhoneNo,
        address
    }
    const existingPets = fetchData("pets") ?? [];
    return localStorage.setItem("pets", JSON.stringify([...existingPets, newPet]));
}

export const deleteItem = ({ key }) => {
    localStorage.removeItem(key);
}