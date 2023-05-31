import React from 'react'
import { fetchData } from '../helper';
import AddPet from '../components/AddPet';
import { PetList } from '../components/PetList';
import { useLoaderData } from 'react-router-dom';
import Intro from '../components/Intro';
import { toast } from 'react-toastify'

export function dashboardLoader() {
    const patientList = fetchData('patientList');
    const userName = fetchData('userName');
    return { patientList, userName };
}

export async function dashboardAction({ request }) {
    const data = await request.formData();
    const { _action, ...values } = Object.fromEntries(data);
    if (_action === "newUser") {
        try {
            localStorage.setItem("userName", JSON.stringify(values.userName));
            return toast.success(`Welcome , ${values.userName}`);
        } catch (e) {
            throw new Error("There was a problem creating your account!");
        }
    }

}


const Dashboard = () => {
    const { userName } = useLoaderData();
    return (
        <>
            {
                userName ? (
                    <div className="container" >
                        <AddPet />
                        <div style={{ height: 400, width: '100%' }}>
                            <PetList />
                        </div>
                    </div >
                ) :
                    <Intro />

            }

        </>)
}

export default Dashboard