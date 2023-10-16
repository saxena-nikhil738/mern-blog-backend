import { Container } from "@mui/material";
import Header from "../header/header";
import Footer from "./footer";
import Slidder from "./imageSlider";

const Main = () => {
  return (
    <>
      <Header />
      <Container className="parent mt-5 mx-auto">
        <Slidder />

        {/* <div className="mx-auto mb-3 mb-5" sx={{ height: 800, weight: 800 }}>
        <CardMedia
          component="img"
          height="auto mb-500"
          image={url}
          alt="Image"
        />
        </div> */}

        {/* About */}
        {/* <p className="text-primary fs-3 fw-bold">About</p>

      <About /> */}
        <Footer />
      </Container>
    </>
  );
};

export default Main;
