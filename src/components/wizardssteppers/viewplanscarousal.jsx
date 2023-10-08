import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import { Card, CardContent, Typography } from '@mui/material';

function CarouselComponent() {
  return (
    <Carousel>
      <div>
        <Card>
          <CardContent>
            <Typography variant="h5">Slide 1</Typography>
            <Typography>This is the content of slide 1.</Typography>
          </CardContent>
        </Card>
      </div>
      <div>
        <Card>
          <CardContent>
            <Typography variant="h5">Slide 2</Typography>
            <Typography>This is the content of slide 2.</Typography>
          </CardContent>
        </Card>
      </div>
      <div>
        <Card>
          <CardContent>
            <Typography variant="h5">Slide 3</Typography>
            <Typography>This is the content of slide 3.</Typography>
          </CardContent>
        </Card>
      </div>
    </Carousel>
  );
}

export default CarouselComponent;
