import { useState } from 'react';
import Home from './Home';
import Movies from './Movies';

export default function Main() {

  const [visible, setVisible] = useState(true);
  

  const toggleVisible = () => {
    setVisible((prevVisible) => !prevVisible);
  }

  return (
    <>
    <main>
        {visible && (
          <Home visible={visible} toggleVisible={toggleVisible}/>
        )}
        {!visible && <Movies/>}
      </main>
    </>
  )
}
