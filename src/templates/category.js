import React from 'react';
import ActivitiesList from "../components/activitieslist"
import { graphql } from 'gatsby';

export default function CategoryTemplate({pageContext, data}) {
 const {type} = pageContext
 const activities = data.allStrapiActivity.edges

  console.log(activities, type)
  
  return(
    <div>
          <ActivitiesList activities = {activities}  />
    </div>
  )
        
    }


    export const pageQuery = graphql`
    query ($type: String) {
        allStrapiActivity(filter: {categories: {elemMatch: {type: {in: [$type]}}}}) {
          edges {
            node {
              title
              slug
            }
          }
        }
      }`
      
      