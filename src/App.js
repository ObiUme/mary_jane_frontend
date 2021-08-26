import React, {useState, useEffect} from 'react';
import StrainContainer from './StrainContainer';
import AddNewStrainForm from './AddNewStrainForm'
import {Route, Switch} from 'react-router-dom';
import NavBar from './NavBar';
import EditStrainForm from './EditStrainForm';
// import { createTheme, ThemeProvider} from '@material-ui/core'
import './App.css';

// const theme = createTheme({
//   pallete: {
//       primary: {
//           main: success.main
//       },
//       secondary: {
//           main: '#727272'
//       },
//   },
//       typography: {
//           fontFamily: 'sans-serif'
//       }
//   }
// )



function App() {
  const [strains, setStrains] = useState([])
  const [selectStrain, setSelectStrain] = useState('')

  useEffect(() =>{
    fetch(`http://localhost:9292/strains`)
    .then(res => res.json())
    .then(setStrains)
}, [])

  function handleDeleteStrain(id){
    fetch(`http://localhost:9292/strains/${id}` , {
      method: 'DELETE',
    });

    const updatedStrainList = strains.filter((strain)=> strain.id !== id)
    setStrains(updatedStrainList)
  }
  
  function handleUpdateStrain(obj){
    setStrains(strains.map(strain => strain.id === obj.id ? obj : strain))
  }
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route path="/strains">
      <StrainContainer strains={strains} setStrains={setStrains} onDeleteStrain={handleDeleteStrain} setSelectStrain={setSelectStrain}/>
        </Route> 
        <Route path="/addnewstrain">
      <AddNewStrainForm/>
        </Route> 
        <Route path='/editstrain'>
        <EditStrainForm selectStrain={selectStrain} onUpdateStrain={handleUpdateStrain}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
