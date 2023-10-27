import { useState } from 'react';
import Modal from './components/modal';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="App">
      <button className='button' onClick={() => setIsModalOpen(true)}>Upload Document</button>
      <Modal title='Document Upload' isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
