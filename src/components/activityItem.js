import React from 'react';
import { Link } from 'gatsby';

const ActivityItem = ({ activity }) => {

const {title, slug} = activity.node

return(

    <Link to = {`/activities/${slug}`}><div>{title}</div></Link> 

)

}



export default ActivityItem