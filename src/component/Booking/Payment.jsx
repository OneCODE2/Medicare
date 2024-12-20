import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Swal from 'sweetalert2'
export default function PaymentForm() {

const [name,setName]=React.useState("");
const [card,setCard]=React.useState("");
const [expiry,setExpiry] = React.useState("");
const [cvv,setCvv]= React.useState("");


// const handleClick = ()=>{
//   if(!name.length && card.length!=16 && expiry.length!=4 && cvv.length!=3){
//     Swal.fire({
//       title: 'LogOut',
//       text: 'You are Logged Out',
//       icon: 'error',
//       confirmButtonColor: '#3167D9'
//     })
//   }

// }


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            variant="outlined"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="outlined"
            value={card}
            onChange={(e)=> setCard(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="outlined"
            value={expiry}
            onChange={(e)=> setExpiry(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            // helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="outlined"
            value={cvv}
            onChange={(e)=>setCvv(e.target.value)}
          />
        </Grid>
        {/* <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
}