import React from 'react';
import ActivityItem from './activityItem';

const ActivitiesList = ({ activities }) =>
  activities.map((activity, index) => <ActivityItem activity={activity} key={index} />);

export default ActivitiesList;