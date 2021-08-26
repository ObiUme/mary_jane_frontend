import { TextField, Grid, Button } from "@material-ui/core";
// import {useHistory} from 'react-router-dom'
import {useState} from 'react'



function AddNewStrainForm() {
    // const history = useHistory();
    const [formData, setFormData] = useState({
        strain: "",
        buzzword: "",
        cannabinoid: "",
        health_benefit: "",
        image_url: ""
    })

    function onChangeForm(e){
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        })
    }

    function handleFormSubmit(e){
        const newStrain = {
            strain: formData.strain,
            buzzword: formData.buzzword,
            cannabinoid: formData.cannabinoid,
            health_benefit: formData.health_benefit,
            image_url: formData.image_url,
        }
        e.preventDefault()
        fetch(`http://localhost:9292/strains`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(newStrain)
        })
        setFormData({strain: "",
        buzzword: "",
        cannabinoid: "",
        health_benefit: "",
        image_url: ""})
    
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
                            required
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
                            required
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
                            required
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
                            required
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
                            required
                            value={formData.image_url}
                            onChange={onChangeForm}
                        />
                        <Button type="submit" variant="contained" color="primary" className="form__custom-button" style={{ marginLeft: "auto",
                         marginRight: "auto", marginTop: "30px", marginBottom: "30px" }}>
                            Sumbit Strain
                        </Button>

                    </Grid>
           </Grid>
        </form>
    )
        
}

export default AddNewStrainForm;