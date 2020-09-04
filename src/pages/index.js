import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import JSONData from "../../content/fifa_raw.json"

import 'bootstrap/dist/css/bootstrap.css';

export default (props) => {

    return(

    <Layout>
        <SEO title="Home" />

        <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>

            <h1>Welcome to your {JSONData.title}</h1>
            <p>Select from the players below to get details.</p>
            <ul>
                {JSONData.pages.map((data, index) => {

                    return <p><a href={data.short_name.replace(/ /g, '')}>{data.short_name}</a></p>
                })}
            </ul>

        </div>
        <Link to="/L.Messi/">Messi</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
)
}