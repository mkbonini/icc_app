import * as React from 'react';
import {useRef} from 'react'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button, Card, CardContent, Grid } from '@mui/material';

export default function AddressForm() {
  const firstNameRef = useRef('')
  const lastNameRef = useRef('')
  const emailRef = useRef('')
  const addressRef = useRef('')
  const cityRef = useRef('')
  const stateRef = useRef('')
  const zipRef = useRef('')

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log( emailRef?.current.value); 
}
	return (
		<>
			<Card sx={{maxWidth: 900, margin:"0 auto" }}>
        <CardContent>
          <Typography variant='h1' fontSize={38} align='center'  sx={{pt:5, fontWeight:'500' }}>Registration</Typography>
          <Typography variant='h2' fontSize={18} align='center' >Please enter your information below</Typography>
          <form onSubmit={handleSubmit}>
          <Grid container spacing={1.5} sx={{p: '2rem 5rem 3rem 5rem'}}>
            <Grid xs={12} sm={6} item>
              <TextField required label="First Name" inputRef={firstNameRef}  placeholder='Enter First Name' fullWidth/> 
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField required label="Last Name" inputRef={lastNameRef} placeholder='Enter Last Name' fullWidth/>  
            </Grid>
            <Grid xs={12} item>
              <TextField required label="Email" inputRef={emailRef} placeholder='Enter Email' type='email' fullWidth/>  
            </Grid>
            <Grid xs={12} item>
              <TextField required label="Address" inputRef={addressRef} placeholder='Enter Address' fullWidth/>  
            </Grid>
            <Grid xs={12} sm={4} item>
              <TextField required label="City" inputRef={cityRef} placeholder='Enter City' fullWidth/>  
            </Grid>
            <Grid xs={12} sm={4} item>
              <TextField required label="State" inputRef={stateRef} placeholder='Enter State' fullWidth/>  
            </Grid>
            <Grid xs={12} sm={4} item>
              <TextField required type='number' label="Zip Code" inputRef={zipRef} placeholder='Enter Zip Code' fullWidth/>  
            </Grid>
            <Grid xs={12} sx={{display: 'flex', justifyContent:'flex-end'}} item>
              <Button variant='contained' type='submit'  sx={{mt:2, width: '200px', backgroundColor:'#ob5940'}}>Submit</Button>
            </Grid>
          </Grid>
          </form>
        </CardContent>      
      </Card>
		</>
	);
}