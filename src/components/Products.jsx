import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stack from "@mui/material/Stack";
import products from "./products_data.jsx";
import List from "./List";

const iphones = products.filter(p => p.category === "iphone");
const samsung = products.filter(p => p.category === "samsung");
const pixel = products.filter(p => p.category === "pixel");
const accessories = products.filter(p => p.category === "accessories");

function CreateList(product) {
  return (
    <List
      key={product.id}
      name={product.name}
      image={product.img}
      description={product.description}
      price={product.price}
    />
  );
}

function Products(Heading) {
  return (
    
  <div>
    
    <Typography variant="h3" align="center" sx={{ mt: 4 }}>Products</Typography>

<Container>


  <Typography variant="h4" sx={{ mt: 5, mb: 2 }}>
    iPhone
  </Typography>

  <Stack direction="row" sx={{ flexWrap: "wrap", justifyContent: "center" }}>
    {iphones.map(CreateList)}
  </Stack>


  <Typography variant="h4" sx={{ mt: 5, mb: 2 }}>
    Samsung
  </Typography>

  <Stack direction="row" sx={{ flexWrap: "wrap", justifyContent: "center" }}>
    {samsung.map(CreateList)}
  </Stack>


  <Typography variant="h4" sx={{ mt: 5, mb: 2 }}>
    Pixel
  </Typography>

  <Stack direction="row" sx={{ flexWrap: "wrap", justifyContent: "center" }}>
    {pixel.map(CreateList)}
  </Stack>

    <Typography variant="h4" sx={{ mt: 5, mb: 2 }}>
    Accessories
  </Typography>

  <Stack direction="row" sx={{ flexWrap: "wrap", justifyContent: "center" }}>
    {accessories.map(CreateList)}
  </Stack>
  
</Container>
  </div>
  )
}
export default Products;
