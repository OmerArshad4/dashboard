import React from 'react';
import { Grid } from '@mui/material';
import {
  GridContainer,
  Btn,
  Heading1,
  Head2,
  Heading3,
  Heading4,
  Form,
  FgBtn, 
  SigBtn,
  Fingr,
} from './userLogin.styled';
import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { FingerPrint } from '../asserts/fingerprint';

const UserLogin = () => {
  const [values, setValues] = React.useState({
    email: '',
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Grid container style={{ display: 'flex' }}>
        <GridContainer
          item
          md={7}
          sm={7}
          
          style={{ border: '1px solid yellow' }}
        >
          <Box>
            <Fingr>
            <FingerPrint />
            </Fingr>
          
            <Heading1>Syntizen</Heading1>
            <Head2>Solution for all your company needs</Head2>
          </Box>
        </GridContainer>

        <Grid item md={5} sm={5} xs={5} style={{ border: '1px solid red' }}>
          <Box>
            <Heading3>Hello Again!</Heading3>
            <Heading4>Welcome Back</Heading4>

            <Form>
              <FormControl sx={{ m: 1, width: '400px' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-email">
                  Email Address
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-email"
                  value={values.email}
                  onChange={handleChange('email')}
                  label="Email"
                />
              </FormControl>
              <FormControl sx={{ m: 1, width: '400px' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password}
                  onChange={handleChange('password')}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            </Form>
            <Btn>Login</Btn>
            <br />
            <FgBtn href="#text-buttons">Forgot Password</FgBtn>
            <SigBtn href="#text-buttons">SignUp</SigBtn>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default UserLogin;
