import React from 'react';
import { Form } from 'react-router-dom';
// library
import { UserPlusIcon } from '@heroicons/react/24/solid';
import { Button } from '@mui/material';
import illustration from '../assets/clinic-pet.webp';

const Intro = () => (
  <div className="flex justify-center items-center">
    <div>
      <h1 className="font-semibold">
        {' '}
        Take care of
        <span className="text-green-500 ">
          {' '}
          Your Pet
        </span>
      </h1>
      <p>
        Regularly visit the clinic is the way to go.
      </p>
      <Form
        className="mt-5"
        method="post"
      >
        <div className="flex ">
          <div className="mr-3">
            <input
              type="text"
              name="userName"
              required
              placeholder="What is your name?"
              aria-label="Your name"
              autoComplete="given-name"
              className="py-2 outline outline-[#007AC2] w-full rounded-md border placeholder: p-2"
            />
          </div>
          <div>
            <input type="hidden" name="_action" value="newUser" />
            <Button type="submit" className="flex space-x-2 border-[green]">
              <span>Create Account</span>
              <UserPlusIcon width={20} />
            </Button>
          </div>
        </div>
      </Form>
    </div>
    <div className="mr-5">
      <img src={illustration} alt="Doctor with dog" width={600} />
    </div>
  </div>
);

export default Intro;
