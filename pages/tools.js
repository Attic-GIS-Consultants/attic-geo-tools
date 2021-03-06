import React from 'react';
import { Card, CardActionArea, Container, Typography, CardContent, CardMedia, Grid } from '@mui/material'


function Tools() {
  return (
    <div>
      <Container maxWidth={true} sx={{ display: "flex", flexDirection: 'column', alignItems: 'center',marginTop:2 }}>
        <Typography variant="h2">Tools</Typography>


        <Grid container sx={{ display: 'flex', justifyContent: 'center', py: 2, gap: 12 }} maxWidth={true}>
          <Grid item >
            <Card sx={{ width: '100%', marginLeft: 2, marginRight: 2, marginBottom: 2, maxWidth: 345, height: 250 }} elevation={12}>
              <CardActionArea
                href='/tools/converter'
              >
                <CardMedia
                  component="img"
                  height="140"
                  image="https://cdn1.vectorstock.com/i/1000x1000/52/80/globe-with-locations-earth-and-continents-vector-28045280.jpg"
                  alt="coordinate convert"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Coordinate Converter
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Convert meters into degrees or vice versa
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item>
            <Card sx={{ width: '100%', marginLeft: 2, marginRight: 2, marginBottom: 2, maxWidth: 345, height: 250 }} elevation={12}>
              <CardActionArea
                href='/tools/maps'
              >
                <CardMedia
                  component="img"
                  height="140"
                  image="https://res.cloudinary.com/attic-gis/image/upload/v1656019047/map_rfvxls.png"
                  alt="coordinate convert"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Hosted Maps
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Create maps in QGIS and upload and host the layers on a web map
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Tools;