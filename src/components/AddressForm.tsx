import * as React from "react";
import { useRef, useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button, Card, CardContent, Grid, Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { postData } from "../utils/model";

export default function AddressForm() {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const stateRef = useRef<HTMLInputElement>(null);
  const zipRef = useRef<HTMLInputElement>(null);

  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    submitData({
      first_name: firstNameRef.current!.value,
      last_name: lastNameRef.current!.value,
      email: emailRef.current!.value,
      address: addressRef.current!.value,
      city: cityRef.current!.value,
      state: stateRef.current!.value,
      zip: zipRef.current!.value,
    });
  };
  async function submitData(body: any) {
    let request = await postData(body);
    request == 200 && setSubmitSuccess(true);
  }
  return (
    <Card
      sx={{
        maxWidth: 900,
        margin: "0 auto",
        minHeight: 560,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <CardContent>
        {!submitSuccess ? (
          <>
            <Typography
              variant="h1"
              fontSize={38}
              align="center"
              sx={{ pt: 5, fontWeight: "500" }}
            >
              Registration
            </Typography>
            <Typography variant="h2" fontSize={18} align="center">
              Please enter your information below
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={1.5} sx={{ p: "2rem 5rem 3rem 5rem" }}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    required
                    label="First Name"
                    inputRef={firstNameRef}
                    placeholder="Enter First Name"
                    fullWidth
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    required
                    label="Last Name"
                    inputRef={lastNameRef}
                    placeholder="Enter Last Name"
                    fullWidth
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    required
                    label="Email"
                    inputRef={emailRef}
                    placeholder="Enter Email"
                    type="email"
                    fullWidth
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    required
                    label="Address"
                    inputRef={addressRef}
                    placeholder="Enter Address"
                    fullWidth
                  />
                </Grid>
                <Grid xs={12} sm={4} item>
                  <TextField
                    required
                    label="City"
                    inputRef={cityRef}
                    placeholder="Enter City"
                    fullWidth
                  />
                </Grid>
                <Grid xs={12} sm={4} item>
                  <TextField
                    required
                    label="State"
                    inputRef={stateRef}
                    placeholder="Enter State"
                    fullWidth
                  />
                </Grid>
                <Grid xs={12} sm={4} item>
                  <TextField
                    required
                    type="number"
                    label="Zip Code"
                    inputRef={zipRef}
                    placeholder="Enter Zip Code"
                    fullWidth
                  />
                </Grid>
                <Grid
                  xs={12}
                  sx={{ display: "flex", justifyContent: "flex-end" }}
                  item
                >
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{
                      mt: 2,
                      height: "50px",
                      width: "180px",
                      borderRadius: "30px",
                      backgroundColor: "#ob5940",
                    }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </>
        ) : (
          <>
            <CheckCircleIcon
              color="primary"
              sx={{ fontSize: "80px", mt: "-1rem", width: "100%" }}
            />
            <Typography
              variant="h1"
              fontSize={38}
              align="center"
              sx={{ pt: 1, fontWeight: "500" }}
            >
              Success!
            </Typography>
            <Typography
              variant="h2"
              fontSize={18}
              align="center"
              sx={{ pt: 1 }}
            >
              Your information has been submitted
            </Typography>
          </>
        )}
      </CardContent>
    </Card>
  );
}
