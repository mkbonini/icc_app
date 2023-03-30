import * as React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button, Card, CardContent, Grid } from '@mui/material';

export default function AddressForm() {
	return (
		<>
			<Card sx={{maxWidth: 800, margin:"0 auto" }}>
        <CardContent>
          <form>
          <Grid container spacing={1.5}>
            <Grid xs={12} sm={6} item>
              <TextField required label="First Name" id="first_name" placeholder='Enter First Name' fullWidth/> 
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField required label="Last Name" id="last_name" placeholder='Enter Last Name' fullWidth/>  
            </Grid>
            <Grid xs={12} item>
              <TextField required label="Email" id="email" placeholder='Enter Email' type='email' fullWidth/>  
            </Grid>
            <Grid xs={12} item>
              <TextField required label="Address" id="address" placeholder='Enter Address' fullWidth/>  
            </Grid>
            <Grid xs={12} sm={6} lg={4} item>
              <TextField required label="City" id="city" placeholder='Enter City' fullWidth/>  
            </Grid>
            <Grid xs={12} sm={6} lg={4} item>
              <TextField required label="State" id="state" placeholder='Enter State' fullWidth/>  
            </Grid>
            <Grid xs={12} sm={6} lg={4} item>
              <TextField required type='number' label="Zip Code" id="zipcode" placeholder='Enter Zip Code' fullWidth/>  
            </Grid>
            <Grid xs={12} item>
              <Button variant='contained' type='submit'>Submit</Button>
            </Grid>
          </Grid>
          </form>
        </CardContent>      
      </Card>
		</>
	);
}