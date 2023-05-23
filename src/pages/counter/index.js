import { Fragment } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/layout";
import { useEffect, useState } from "react";

export default function Counter(){
 const [counter, setCounter] = useState(0);
  useEffect (() => {
    document.title= "محاسبه" + "|" + " " + counter;
  },[counter])
  function clickMe() {
    setCounter(counter + 1);
  }
  function clickHere() {
    setCounter(counter - 1);
  }
    return(
        <Fragment>
          <Layout>
            <div>HomePage</div>
            <button onClick={clickMe}>+</button>
            <button onClick={clickHere}>-</button>
            {counter}
            <div><Link to="/">go to home Page</Link></div>
            <div><Link to="/contact-us" >go to contact us</Link></div>
            <div><Link to="/about-us">go to about us</Link></div>
          </Layout>
        </Fragment>
    )
}