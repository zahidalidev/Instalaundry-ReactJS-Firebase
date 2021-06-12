import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

//config
import { Colors } from '../config/Colors';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//       width: '25ch',
//     },
//   },
// }));

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Checkout() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <div className="container-fluid" style={{ marginTop: '6rem' }}>
        <div className="row p-4 d-flex justify-content-center align-items-center">
          <div
            className="col-10 "
            style={{
              color: Colors.primary,
              fontSize: '2.5rem',
              fontWeight: 'bold',
            }}
          >
            Contact Information
          </div>
        </div>
        <div className="row  d-flex justify-content-center align-items-center">
          <div
            className="col-5 text-white "
            style={{ backgroundColor: Colors.secondary, height: '30rem' }}
          >
            first 5 col
            <div className="row d-flex justify-content-start align-items-start">
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
            </div>
            <div className="row d-flex justify-content-start align-items-start">
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
            </div>
            <div className="row d-flex justify-content-start align-items-start">
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Age
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={age}
                  onChange={handleChange}
                  label="Age"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="row d-flex justify-content-start align-items-start">
              qwqwqw
            </div>
          </div>
          <div
            className="col-5  text-white "
            style={{ backgroundColor: Colors.primary, height: '30rem' }}
          >
            second 5 col
            <div className="row d-flex justify-content-start align-items-start">
              adas
            </div>
            <div className="row d-flex justify-content-start align-items-start">
              adas
            </div>
            <div className="row d-flex justify-content-start align-items-start">
              adas
            </div>
            <div className="row d-flex justify-content-start align-items-start">
              adas
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
