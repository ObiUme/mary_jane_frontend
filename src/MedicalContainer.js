import MedicineCard from './MedicineCard'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'

function MedicalContainer({medicalUse}){
    return (
        <Container>
        <Grid container spacing={3} style={{marginTop: '50px'}}>
            {medicalUse.map(medicalObj => (
                <Grid item key={medicalObj.id} xs={12} md={6} lg={4}>
                    <MedicineCard medicalObj={medicalObj}/>
                </Grid>

            ))}
        </Grid>
    
    
    </Container>
    )
}

export default MedicalContainer;