import { useState } from 'react'
import './App.css'
import Banner from './assets/Component/Banner'
import Digitaltoolsitem from './assets/Component/Digitaltoolsitem'
import Navbar from './assets/Component/Navbar'
import Performance from './assets/Component/Performance'

const data = async () => {
  const response = await fetch('./data.json');
  return response.json();
}

const mainData = data();
function App() {
  const [selectedItems, setSelectedItems] = useState([]);

  return (
    <>
      <Navbar
        selectedItems={selectedItems}
      ></Navbar>
      <Banner></Banner>
      <Performance></Performance>
      <Digitaltoolsitem
        mainData={mainData}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
      ></Digitaltoolsitem>
    </>
  )
}

export default App
