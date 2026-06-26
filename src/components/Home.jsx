import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { yellow } from '@mui/material/colors';
import images from "../Images.jsx";

function Home() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex(index + 1);
  }
  let data = images[index];

  return (
    <div>
    <Typography
  variant="h3"
  component="h3"
  align="center"
  sx={{ mt: 4 }}>
  Welcome to the Mobile&Co!
  </Typography>
  <p sx={{ mt: 3 }} align="center"> Here we design our together future. We propose selection amongst the best products possible on the market with the best provided prices!</p>
  <Typography
  variant="h4"
  component="h4"
  align="center"
  sx={{ mt: 6, mb: 8 }}>
  Featured products
  </Typography>
  <Container>


  <Stack direction="row" sx={{ justifyContent: "center"}}>
    <div><img src={data.img} style={{ width: "300px", height: "200px", background: "#eee" }}/>
    <h5>{data.name}</h5></div>
  </Stack>
  <h2 align="center">Click to see what we have!</h2>
  </Container>
  <div className="wrapper">
        <button onClick={handleClick}>
        <h3>Next</h3>
      </button>
      </div>
  </div>
  )
}

export default Home;
