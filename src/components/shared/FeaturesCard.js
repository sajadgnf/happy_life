import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const FeaturesCard = ({feature}) => {
   
    return (
        <Card>
                <CardMedia
                    component='img'
                    height="140"
                    image={feature.img}
                    alt="feature"
                />
                <CardContent>
                    <Typography>{feature.title}</Typography>
                </CardContent>
        </Card>
    );
};

export default FeaturesCard;