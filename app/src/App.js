import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEmail } from '../src/redux/actions';

function App() {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.email);
  const handleEmailChange = (event) => {
    dispatch(setEmail(event.target.value));
  };
  return (
   <div>
    <div>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={handleEmailChange}
      />
      <p>Your email: {email}</p>
    </div>
   </div>
  );
}

export default App;
