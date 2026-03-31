import { useState } from 'react'
import './App.css'
import Banner from './assets/Component/Banner'
import Digitaltoolsitem from './assets/Component/Digitaltoolsitem'
import Navbar from './assets/Component/Navbar'
import Performance from './assets/Component/Performance'
import PricingSection from './assets/Component/PricingSection'
import { ToastContainer } from 'react-toastify';
import GetstartedStapes from './assets/Component/GetstartedStapes'
import WorkflowSection from './assets/Component/WorkflowSection'
import Footer from './assets/Component/Footer'

const data = async () => {
  const response = await fetch('./data.json');
  return response.json();
}

const mainData = data();
function App() {
  const [selectedItems, setSelectedItems] = useState([]);

  return (
    <>
      <ToastContainer />
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
      <GetstartedStapes></GetstartedStapes>
      <PricingSection></PricingSection>
      <WorkflowSection></WorkflowSection>
      <Footer></Footer> 
    </>
  )
}

export default App
