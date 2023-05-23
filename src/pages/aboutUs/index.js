import { Fragment } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/layout";
import { useEffect } from "react";

export default function AboutUs(){
  useEffect (() => {
    document.title= "درباره ما";
  },[]);
    return(
        <Fragment>
          <Layout>
          <div>about_us</div>
          <div><Link to="/counter" >go to counter</Link></div>
          <div><Link to="/">go to home Page</Link></div>
          <div><Link to="/contact-us" >go to contact us</Link></div>
          </Layout>
        </Fragment>
    )
}