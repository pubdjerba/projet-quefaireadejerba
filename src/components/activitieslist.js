import React from "react"
import ActivityItem from "./activityItem"
import Stack from "@mui/material/Stack"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"

const ActivitiesList = ({ activities }) => (
  <Grid container direction="column" spacing={1}>
    {activities.map((activity, index) => (
      <Grid item>
        <ActivityItem activity={activity} key={index} />
      </Grid>
    ))}
  </Grid>
)

export default ActivitiesList
