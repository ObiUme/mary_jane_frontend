import { TextField, Grid, Button } from "@material-ui/core";
// import {useHistory} from 'react-router-dom'
import {useState} from 'react'



function EditStrainForm({ selectStrain, onUpdateStrain}) {
    

    // const history = useHistory();
    const [formData, setFormData] = useState({
        strain: selectStrain.strain,
        buzzword: selectStrain.buzzword,
        cannabinoid: selectStrain.cannabinoid,
        health_benefit: selectStrain.health_benefit,
        image_url: selectStrain.image_url
    })

    function onChangeForm(e){
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        })
    }

    function handleFormSubmit(e){
        const updatedStrain = {
            strain: formData.strain,
            buzzword: formData.buzzword,
            cannabinoid: formData.cannabinoid,
            health_benefit: formData.health_benefit,
            image_url: formData.image_url,
        }
        e.preventDefault()
        fetch(`http://localhost:9292/strains/${selectStrain.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(updatedStrain)
        })
        .then(res => res.json())
        .then(onUpdateStrain)
        
    }

    return (
        <form className='form'onSubmit={handleFormSubmit}>
            <Grid container spacing={4} color='primary'>
                <Grid item xs={12}
                    style={{
                        background: 'white',
                        textAlign: 'center',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: '10vh'
                    }}
                    >
                        <TextField
                            fullWidth
                            label='strain'
                            id='strain'
                            variant='outlined'
                            value={formData.strain}
                            onChange={onChangeForm}
                        />
                    </Grid>
                    <Grid item xs={12}
                    style={{
                        background: 'white',
                        textAlign: 'center',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: '10vh'
                    }}
                    >
                        <TextField
                            fullWidth
                            label='buzzword'
                            id='buzzword'
                            variant='outlined'
                            value={formData.buzzword}
                            onChange={onChangeForm}
                        />
                    </Grid>
                    <Grid item xs={12}
                    style={{
                        background: 'white',
                        textAlign: 'center',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: '10vh'
                    }}
                    >
                        <TextField
                            fullWidth
                            label='cannabinoid'
                            id='cannabinoid'
                            variant='outlined'
                            value={formData.cannabinoid}
                            onChange={onChangeForm}
                        />
                    </Grid>
                    <Grid item xs={12}
                    style={{
                        background: 'white',
                        textAlign: 'center',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: '10vh'
                    }}
                    >
                        <TextField
                            fullWidth
                            label='health_benefit'
                            id='health_benefit'
                            variant='outlined'
                            value={formData.health_benefit}
                            onChange={onChangeForm}
                        />
                    </Grid>
                    <Grid item xs={12}
                    style={{
                        background: 'white',
                        textAlign: 'center',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: '10vh'
                    }}
                    >
                        <TextField
                            fullWidth
                            label='image_url'
                            id='image_url'
                            variant='outlined'
                            value={formData.image_url}
                            onChange={onChangeForm}
                        />
                        <Button type="submit" variant="contained" color="primary" className="form__custom-button" style={{ marginLeft: "auto",
                         marginRight: "auto", marginTop: "30px", marginBottom: "30px" }}>
                            Update Strain
                        </Button>

                    </Grid>
           </Grid>
        </form>
    )
        
}

export default EditStrainForm;