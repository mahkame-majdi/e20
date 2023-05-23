import { Fragment } from "react";
import { Link } from "react-router-dom";
import Layout from "../layout";
import { useEffect } from "react";

export default function ContactUs (){
    useEffect (() => {
        document.title= "ارتباط با ما";
      },[]);
    return(
        <Fragment>
            <Layout>
                <div>contact-us</div>
                <Link to="/">go to homePage</Link>
                <Link to="/about-us">go to about us</Link>
            </Layout>
        </Fragment>
    )
}