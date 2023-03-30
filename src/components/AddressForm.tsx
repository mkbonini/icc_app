import * as React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Card, CardContent, Grid } from '@mui/material';

export default function AddressForm() {
	return (
		<>
			<Card>
        <CardContent>
          <Grid container spacing={1}>
          <Grid xs={12} sm={6} item>
            <TextField required label="First Name" id="first_name" placeholder='Enter first name' fullWidth/> 
          </Grid>
          <Grid xs={12} sm={6} item>
            <TextField required label="Last Name" id="last_name" placeholder='Enter last name' fullWidth/>  
          </Grid>
          </Grid>
        </CardContent>      
      </Card>
		</>
	);
}