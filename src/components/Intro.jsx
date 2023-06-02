import React from 'react';
import { Form } from 'react-router-dom';
// library
import { UserPlusIcon } from '@heroicons/react/24/solid';
import illustration from '../assets/clinic-pet.webp';

const Intro = () => (
  <div className="intro">
    <div>
      <h1>
        {' '}
        Take care of
        <span className="accent">
          {' '}
          Your Pet
        </span>
      </h1>
      <p>
        Regularly visit the clinic is the way to go.
      </p>
      <Form
        method="post"
      >
        <input
          type="text"
          name="userName"
          required
          placeholder="What is your name?"
          aria-label="Your name"
          autoComplete="given-name"
        />
        <input type="hidden" name="_action" value="newUser" />
        <button type="submit" className="btn btn--dark">
          <span>Create Account</span>
          <UserPlusIcon width={20} />
        </button>
      </Form>
    </div>
    <img src={illustration} alt="Doctor with dog" width={600} />
  </div>
);

export default Intro;
