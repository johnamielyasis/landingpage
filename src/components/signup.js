import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { settingsAtom } from '../atoms';

export default function SignUp() {
  const { primaryColor } = useRecoilValue(settingsAtom);
  const [email, setEmail] = useState('');


  const handleSubmit = function (e) {
    console.log(email);
    setEmail('');
    e.preventDefault();
  }

  return (
    <div className="container flex mx-auto my-4 justify-center pt-4">
      <div className="flex flex-col">
        <h3 className="flex justify-center">Don't miss out on another event! Subscribe to our newsletter</h3>
        <form className="flex justify-center" onSubmit={handleSubmit}>
          <label>
            <span className="hidden text-2xl font-semibold">
              Email:
            </span>
            <input className="border-2 mx-2 p-1" type="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          </label>
          <input className={`bg-${primaryColor}-500 px-3 mx-1 text-white font-bold rounded-md h-9 cursor-pointer hover:bg-white hover:text-${primaryColor}-400 border-2 border-${primaryColor}-400`} type="submit" value="Subscribe" />
        </form>
      </div>
    </div>
  )
}