import React, {useState, useEffect} from 'react';
import StrainContainer from './StrainContainer';
import AddNewStrainForm from './AddNewStrainForm'
import {Route, Switch} from 'react-router-dom';
import NavBar from './NavBar';
import EditStrainForm from './EditStrainForm';
import MedicalContainer from './MedicalContainer'
import {  ThemeProvider} from '@material-ui/core/styles';
import Home from './Home'
import theme from './theme';
import './App.css';





function App() {
  const [strains, setStrains] = useState([])
  const [selectStrain, setSelectStrain] = useState('')
  const [medicalUse, setMedicalUse] = useState([])

  useEffect(() =>{
    fetch(`http://localhost:9292/medical_use`)
    .then(res => res.json())
    .then(setMedicalUse)
  }, [])

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
    <div style={{backgroundColor: 'gray', margin: '0', backgroundImage: "url('https://wallpapercave.com/wp/wp3243306.jpg')", cursor: "url('https://img.icons8.com/doodle/96/000000/up-left-arrow--v2.png') 32 32"
  }}>
    <ThemeProvider theme={theme}>
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
        <Route path='/medical_use'>
        <MedicalContainer medicalUse={medicalUse}/>
        </Route>
        {/* <Route path='/'>
          <Home/>
        </Route> */}
      </Switch>
      
    </ThemeProvider>
    </div>
  );
}

export default App;
