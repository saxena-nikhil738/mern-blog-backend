

import { Container, Grid } from "@mui/material";
import Banner from "../banner/banner";
import Categories from "./Categories";
import Posts from "./Post/Posts";
import { Login } from "@mui/icons-material";
import Footer from "../main/footer";



const Home = () => {
  return (
    <>
    {/* {isUserAuthenticated === false ? (<Login/>) : */}
    <Container>
     
      {/* <Grid container className="postDiv">
        <Grid item lg={2} sm={2} xs={12}>
          <div className="category">
          
          </div>
        </Grid>
        <Grid container item xs={12} sm={10} lg={10}>
        
        </Grid>
      </Grid>
       */}
      <div className=" justify-content-center w-80 mx-auto">
        {/* <div className="col-md-3"><Categories /></div> */}
        <div className="col-md-10 mx-auto"> <Posts/></div>
        <Footer/>
      </div>
      
      </Container>
      
    
    </>
  );

}
export default Home;