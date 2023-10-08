import React from 'react';
import { Grid } from '@mui/material';
import RowCard from './RowCard'; // Import your RowCard component

const cardData = [
  {
    title: 'Plan 1',
    location: 'Location 1',
    description:'Childplan',

  },
  {
    title: 'Plan 2',
    location: 'Location 1',
    description:'PensionPlan',
  },
  {
    title: 'Plan 3',
    location: 'Location 1',
    description:'MarriagePlan',
  },
  {
    title: 'Plan 4',
    location: 'Location 1',
    description:'RecuuringDP',
  },
];

const CardGrid = () => {
  return (
    <Grid container spacing={2}>
      {cardData.map((card, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <RowCard title={card.title} location={card.location} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardGrid;
