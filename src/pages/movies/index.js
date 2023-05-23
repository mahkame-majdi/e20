import Layout from "../../components/layout";
import { Link } from "react-router-dom";
import MovieList from "../../components/movieList";
import { series1 } from "../../components/movieItems";
import { useEffect } from "react";

export default function Movies(){
    useEffect (() => {
        document.title= "فیلم های من";
      },[]);
    return(
        <Layout>
            <h1>movies</h1>
            <MovieList data={series1}></MovieList>
            <Link to="/">go to Home Page</Link>
            <Link to="/contact-us" >go to contact us</Link>
            <Link to="/about-us">go to about us</Link>
        </Layout>
    )
}