import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMessage } from '../redux/messageReducer';

function Greeting() {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.message);

  useEffect(() => {
    dispatch(fetchMessage());
  }, []);

  return (
    <div>
      <h1>Greeting</h1>
      <p>{message}</p>
      <button type="button" onClick={() => dispatch(fetchMessage())}>Get Greeting</button>
    </div>
  );
}

export default Greeting;
