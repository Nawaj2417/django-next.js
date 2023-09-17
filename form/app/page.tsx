"use client"
import  { useState, useEffect } from 'react';




import { Box, Button, FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, Stack, TextField, Typography } from '@mui/material'
// import React from 'react'

const Page = () => {
  // const decodedClassId = decodeURIComponent(params.classid || '');
  // Add this for backend 
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    // id: 0,
    // age: '',
    // dob: '',
    // address: '',
    // father: '',
    // mother: '',
    // mobile: '',
    // email: '',
    // gender: 'female',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();


    try {
      const response = await fetch('http://127.0.0.1:8000/api/admissions/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Admission added successfully');
        // Optionally, reset form after successful submission
        setFormData({
          first_name: '',
          last_name: '',
          // id: 0,
          // age: '',
          // dob: '',
          // address: '',
          // father: '',
          // mother: '',
          // mobile: '',
          // email: '',
          // gender: 'female',
        });
      } else {
        console.error('Failed to add admission');
      }
    } catch (error) {
      console.error('Error adding admission:', error);
    }
  };




  return (
    <Stack>

      <Paper component="form" onSubmit={handleSubmit}>

        <div>
          <TextField required sx={{ margin: "10px", width: "25%" }} id="first_name" label="first name" variant="filled" onChange={(e) => setFormData({ ...formData, first_name: e.target.value })} />
          <TextField required sx={{ margin: "10px", width: "25%" }} id="last_name" label="last name" variant="filled" onChange={(e) => setFormData({ ...formData, last_name: e.target.value })} />
          {/* <TextField required sx={{ margin: "10px", width: "25%" }} id="id1" label="id" variant="filled" onChange={(e) => setFormData({ ...formData, id1: e.target.value })} type='number' inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} /> */}


        </div>
        {/* <div>
          <TextField sx={{ margin: "10px", width: "25%" }} id="filled-basic" label="age" variant="filled" />
          <TextField sx={{ margin: "10px", width: "25%" }} id="filled-basic" label="date of birth" variant="filled" />
          <TextField sx={{ margin: "10px", width: "25%" }} id="filled-basic" label="address" variant="filled" />
        </div>
        <div>
          <TextField sx={{ margin: "10px", width: "25%" }}
            disabled
            id="outlined-disabled"

          />
          <TextField sx={{ margin: "10px", width: "25%" }} id="filled-basic" label="Father name" variant="filled" />
          <TextField sx={{ margin: "10px", width: "25%" }} id="filled-basic" label="Mother name" variant="filled" />
        </div>
        <div>

          <TextField sx={{ margin: "10px", width: "25%" }} id="filled-basic" label="Mobile number" variant="filled" />
          <TextField sx={{ margin: "10px", width: "25%" }} id="filled-basic" label="Email" variant="filled" />
        </div> */}




        <FormControl sx={{ margin: "10px" }}>
          {/* <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />


          </RadioGroup> */}
          <Button sx={{ margin: "10px" }} variant="contained" type='submit'>Submit</Button>
        </FormControl>
      </Paper>
    
   </Stack >

  )
}

export default Page;