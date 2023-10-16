import { useEffect, useState } from "react";
import { API } from "../../../service/api";
import { Box, Grid } from "@mui/material";
import { useSearchParams,Link } from 'react-router-dom';

import Post from "./Post";
import Header from "../../header/header";
import { toast } from "react-toastify";
const Posts = () => {
    // console.log(post.)
    const [posts, setPosts] = useState([]);
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');
    useEffect(() => {
        const fetchData = async () => {
            try{
                let response = await API.getAllPosts({  });
                //   let response = await axios.get("/post/${}")
                if (response.isSuccess) {
                    setPosts(response.data);
                }
                
            }catch{
                // toast.error("No posts found", {position: toast.POSITION.TOP_CENTER});
            }
            
        }
        fetchData();
    }, [category])  
    return (
        <>
        <Header/>
        <div className="center">
        <div className="d-flex flex-wrap justify-content-start ">

       
            {
                posts && posts.length > 0 ? posts.map(post => (
                    // <Grid item lg={4} sm={12} >
                        <Link to={`details/${post._id}`} style={{textDecoration:'none',color:'inherit'}}>
                        <Post post={post} />
                        </Link>
                       
                    // </Grid>
                    
                )) : (<Box style={{ color: '#878787', margin: '30px 80px', fontSize: 18 }}>no data available to display</Box>)
            }
             </div>
             </div>
        </>
    )
}
export default Posts;