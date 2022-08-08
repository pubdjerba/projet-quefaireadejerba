import React from "react"
import { graphql } from "gatsby"
export default function Component({data}) {
  return <div>{data.strapiActivity.title}</div>
}

export const query = graphql`
  query($id: String) {
    strapiActivity (id: {eq: $id}) {
         title
          slug
          id
        }
      
  }
`