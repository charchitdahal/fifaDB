
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default (props) =>{
    const {pageContext} = props;
    const{short_name,age,long_name,nationality,club} = pageContext;


    return(
        <div>

            <h1>What is {short_name} FIFA 21 Rating?</h1>

                <p><b>Full Name:</b> {long_name}</p>
                <p><b>Age:</b> {age}</p>
                <p><b>Country:</b> {nationality}</p>
                <p><b>Club:</b> {club}</p>

        </div>

    )
}
