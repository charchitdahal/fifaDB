
import React from "react"
import Layout from "../components/layout"
import { Table} from 'reactstrap';
import SEO from "../components/seo"




export default (props) =>{
    const {pageContext} = props;
    const{player_traits,short_name,player_positions,dribbling,defending,physic,age,long_name,nationality,club,overall,shooting,pace} = pageContext;


    return(
        <Layout>
            <SEO title={short_name}  />
        <div>

            <h1>What is {short_name} FIFA 21 Rating?</h1>

                <p><b>Full Naam:</b> {long_name}</p>
                <p><b>Age:</b> {age}</p>
                <p><b>Country:</b> {nationality}</p>
                <p><b>Club:</b> {club}</p>
                 <p><b>Position:</b> {player_positions}</p>

                <p><b>Overall Rating:</b> {overall}</p>

                <h2>Ratings Breakdown</h2>

            <Table className="my-4">
                <thead>
                <tr>
                    <th width="20%"> Pace  </th>
                    <th width="20%"> Shooting   </th>
                    <th width="20%"> Dribbling  </th>
                    <th width="20%"> Defending   </th>
                    <th width="20%"> Physic  </th>
                </tr>
                </thead>
                <tbody>
                <td>{pace}</td>
                <td>{shooting}</td>
                <td>{dribbling}</td>
                <td>{defending}</td>
                <td>{physic}</td>
                </tbody>

            </Table>

            <h2>What are {short_name} Traits in FIFA 21?</h2>
            {player_traits}

        </div>

            <p></p>
            <a href="/">Home</a>
        </Layout>

    )
}
