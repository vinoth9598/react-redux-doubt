import React from 'react';
import { useSelector } from 'react-redux';

function App() {
  const user=useSelector(state=>state);
  
  return (
    <div>
        {
          console.log(user)
        }
    </div>
  )
}

export default App;
