import { useState } from 'react'


function App() {
  const{login, setlogin} = useState(false);

  function loginPressed(){
    setLogin(true);
  }

  return (
    <button onClick={loginPressed}>Login</button>
  )
}

export default App
