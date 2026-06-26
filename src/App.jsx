import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Products from "./components/Products";
import Nav from "./components/Nav";
import { createTheme, ThemeProvider } from "@mui/material/styles";



const theme = createTheme({
  palette:{
    primary:{
      main: '#2196f3'
    },
    secondary: {
      main: '#4A3475'
    },
  },
});


export default function App() {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="Products" element={<Products />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}
