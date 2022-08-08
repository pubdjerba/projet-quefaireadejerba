import * as React from "react"
import { graphql,  Link,  useStaticQuery } from 'gatsby'
import ActivitiesList from "../components/activitieslist"
import Button from '@mui/material/Button';

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {

const data = useStaticQuery(graphql`
query {
  allStrapiActivity {
    edges {
      node {
        title
        slug
        categories {
          id
          type
          slug
        }
               
      }
    }
  }
}

`);
const activities = data.allStrapiActivity.edges

return(
  <Layout>
  <Seo title="Home" />

  <div><h2>Categorie:</h2>
  <ul>
    <li><Link to={"/categories/activites-nautiques"}>Aventure</Link></li>
    
  </ul>
  <Button variant="contained">Contained</Button>
  </div>
<hr/>
    <ActivitiesList activities = {activities}  />
   
  </Layout>


);
}
  
export default IndexPage