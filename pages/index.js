import {
  Container,
  Typography,
  CardContent,
  CardMedia,
  Grid,
  Box,
  Button
} from "@mui/material";
import Head from "next/head";
import Image from "next/image";
//import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Grid container
          maxWidth={true}
          sx={{
            display: "flex",
            marginTop: 2,
            justifyContent: "space-around",
            gap: 6,
            flexWrap: "wrap",
          }}
        >
          <Grid item
            className={styles.heroText}
          >
            <Typography variant="h1" >Spend less time</Typography>
            <Typography variant="h1">Do more !!!</Typography>
            <Button href="/tools" sx={{ borderRadius: 0, width: 150, marginTop: 4 }} variant="contained" color="primary">Explore Tools</Button>
          </Grid>
          <Grid item sx={{ display: 'flex', py: 4 }}>
            <Image
              src={
                "https://res.cloudinary.com/attic-gis/image/upload/v1656446620/energy_pbuhs9.png"
              }
              height={450}
              width={450}
              alt="hero"
            />
          </Grid>
        </Grid>
        <Container sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
          <Typography variant="h2">Our Philosophy</Typography>
          <Box sx={{marginTop:2}}>
            <Typography sx={{lineHeight:'45px', fontWeight:400}} variant="body1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
          </Box>
        </Container>
      </main>

      <footer></footer>
    </div>
  );
}
