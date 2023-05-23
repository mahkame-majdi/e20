import { Fragment } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/layout";
import { useEffect } from "react";

export default function HomePage(){
  useEffect (() => {
    document.title= "خانه";
  },[]);
    return(
        <Fragment>
          <Layout>
            <div>HomePage</div>
            {/* <Link to="/movies">go to Movies</Link> */}
            <div><Link to="/counter" >go to counter</Link></div>
            <div><Link to="/">go to home Page</Link></div>
            <div><Link to="/contact-us" >go to contact us</Link></div>
            <div><Link to="/about-us">go to about us</Link></div>
          </Layout>
        </Fragment>
    )
}