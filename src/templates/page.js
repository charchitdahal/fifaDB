
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
            <p>{long_name}</p>
            <h2>{age}</h2>

                <p>{nationality}</p>
                    <p>{club}</p>


            {/*{*/}
            {/*    (typeof player_tags == 'string') && <p>{player_tags}</p>*/}
            {/*}*/}
            {/*{*/}
            {/*    Array.isArray(player_tags) &&*/}
            {/*        player_tags.map(para ==> ())*/}
            {/*    <div>*/}
            {/*    <h3>{para.short_name}</h3>*/}
            {/*    <p>{para.player_tags}</p>*/}
            {/*    <p>{para.player_tags}</p>*/}

            {/*    </div>*/}
            {/*}*/}
        </div>
    )
}

