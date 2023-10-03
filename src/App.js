
import './App.css';
import Navbar from './component/Nav/Navbar';
// import {BrowserRouter as Route} fr om 'react-router-dom';
import FormValidation from './component/hooks/FormValidation';
import Hooks from './component/hooks/Hooks';
import UseMemo from './component/hooks/UseMemo';
import UseRef from './component/hooks/UseRef';
// import MapKeyAllribute from './component/MapAndKeyAttribute/MapKeyAllribute';
import NestedArray from './component/MapAndKeyAttribute/NestedArray';
import ReuseComponent from './component/ReuseComponent/ReuseComponent';
import Hoc from './component/HOC/Hoc';
import AxiosPra from './component/AxiosPractice/AxiosPra';

// import DynamicRouting from './component/dynamicRouting/DynamicRouting';
function App() {
  return (
    <>
    {/* <Route exact path='/' component={Navbar}></Route> */}
 
      <Navbar />
      <Hooks />
      <UseRef />
      <FormValidation />
      {/* <MapKeyAllribute /> */}
      <NestedArray />
      <ReuseComponent />
      <UseMemo />
      <Hoc />
      <AxiosPra />
      {/* <DynamicRouting /> */}
    </>
  );
}

export default App;
