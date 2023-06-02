export const fetchData = (key) => JSON.parse(localStorage.getItem(key));

export const savePet = ({
  petName, status, pawrent, breed, gender, dob, contactPhoneNo, address, township, city,
}) => {
  const newPet = {
    id: crypto.randomUUID(),
    petName,
    status,
    pawrent,
    breed,
    gender,
    dob,
    contactPhoneNo,
    address: `${address}, ${township} ,${city}`,
  };

  const existingPets = fetchData('pets') ?? [];
  return localStorage.setItem('pets', JSON.stringify([...existingPets, newPet]));
};

export const deleteItem = ({ key }) => {
  localStorage.removeItem(key);
};

export const updatePet = ({
  id, petName, status, pawrent, breed, gender, dob, contactPhoneNo, address, township, city,
}) => {
  const petList = fetchData('pets');

  if (petList) {
    const editedIndex = petList.findIndex((pet) => pet.id === id);
    const editedPet = {
      id,
      petName,
      status,
      pawrent,
      breed,
      gender,
      dob,
      contactPhoneNo,
      address: `${address}, ${township} ,${city}`,
    };
    petList[editedIndex] = editedPet;
    localStorage.setItem('pets', JSON.stringify(petList));
  }
};

export const deletePet = (id) => {
  const petList = fetchData('pets');

  if (petList) {
    const updatedPetList = petList.filter((pet) => pet.id !== id);
    localStorage.setItem('pets', JSON.stringify(updatedPetList));
  }
};
