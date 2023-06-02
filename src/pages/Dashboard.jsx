import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchData, savePet, updatePet } from '../helper';
import AddPet from '../components/AddPet';
import Intro from '../components/Intro';

export function dashboardLoader() {
  const petList = fetchData('pets');
  const userName = fetchData('userName');
  return { petList, userName };
}

export async function dashboardAction({ request }) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);
  if (_action === 'newUser') {
    try {
      localStorage.setItem('userName', JSON.stringify(values.userName));
      return toast.success(`Welcome , ${values.userName}`);
    } catch (e) {
      throw new Error('There was a problem creating your account!');
    }
  }

  if (_action === 'newPet') {
    try {
      savePet({
        petName: values.petName,
        status: values.status,
        pawrent: values.pawrent,
        breed: values.breed,
        gender: values.gender,
        dob: values.dob,
        contactPhoneNo: values.contactPhoneNo,
        address: values.address,
        township: values.township,
        city: values.city,
      });
      return toast.success('New pet created!');
    } catch (e) {
      throw new Error('There was a problem creating your pet');
    }
  }

  if (_action === 'update') {
    try {
      updatePet({
        id: values.id,
        petName: values.petName,
        status: values.status,
        pawrent: values.pawrent,
        breed: values.breed,
        gender: values.gender,
        dob: values.dob,
        contactPhoneNo: values.contactPhoneNo,
        address: values.address,
        township: values.township,
        city: values.city,
      });

      return toast.success(`Updated ${values.petName}!`);
    } catch (e) {
      throw new Error('There was a problem updating your pet');
    }
  }
  return undefined;
}

const Dashboard = () => {
  const { userName, petList } = useLoaderData();
  return (
    <>
      {
        userName ? (
          <div className="container">
            <AddPet petList={petList} />
          </div>
        )
          : <Intro />

      }
    </>
  );
};

export default Dashboard;
