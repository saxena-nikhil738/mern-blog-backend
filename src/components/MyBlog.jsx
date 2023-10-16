import React from "react";
import { DataContext } from "../context/DataProvider";
import { useEffect, useState, useContext } from "react";
import { Box, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Post from "./home/Post/Post";
import { API } from "../service/api";
import Footer from "./main/footer";

const MyBlog = () => {
  const { account } = useContext(DataContext);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let response = await API.getAllPosts({});
      const result = response.data.filter(
        (post1) => post1.username === account.username
      );
      //   let response = await axios.get("/post/${}")
      if (response.isSuccess) {
        setPosts(result);
      } 
    };
    fetchData();
  }, []);
  return (
    <>
      <>
        <Container className="  mx-auto">
          <div className="tab1 justify-content-center">
            <div className="w-80 tab2 d-flex flex-wrap justify-content-center ">
              {posts && posts.length > 0 ? (
                posts.map((post) => (
                  // <Grid item lg={4} sm={12} >
                  <Link
                    to={`details/${post._id}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Post post={post} />
                  </Link>

                  // </Grid>
                ))
              ) : (
                <Box
                  style={{
                    color: "#878787",
                    margin: "30px 80px",
                    fontSize: 18,
                  }}
                >
                  no data available to display
                </Box>
              )}
            </div>
          </div>
          <Footer />
        </Container>
      </>
    </>
  );
};

export default MyBlog;
