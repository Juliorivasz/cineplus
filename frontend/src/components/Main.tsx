import { useState } from 'react';
import Home from './Home';
import Movies from './Movies';

export default function Main() {

  const [visible, setVisible] = useState(true);

  const toggleVisible = (state: boolean) => {
    setVisible(state);
  }

  return (
    <>
    <main>
        <Home
          visible={visible}
          toggleVisible={toggleVisible}/>
        <Movies
          visible={!visible} />
    </main>
    </>
  )
}
