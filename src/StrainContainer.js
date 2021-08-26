import StrainCard from './StrainCard'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'





function StrainContainer({strains, setStrains, onDeleteStrain, setSelectStrain}) {

    
    return (
        <Container>
            <Grid container spacing={3} style={{marginTop: '100px'}}>
                {strains.map(strainObj => (
                    <Grid item key={strainObj.id} xs={12} md={6} lg={4}>
                        <StrainCard strainObj={strainObj} onDeleteStrain={onDeleteStrain} setSelectStrain={setSelectStrain}/>
                    </Grid>

                ))}
            </Grid>
        
        
        </Container>
    )
}

export default StrainContainer;