import React from "react";
import { Box, Container, Grid, Heading, Text } from "theme-ui";

import Image from "Components/image";

import bannerImg from "assets/images/ivffromhome.webp";

const Banner = () => {
  return (
    <Box sx={styles.banner} id="home">
      <Container sx={styles.container}>
        <Grid sx={styles.grid}>
          <Box sx={styles.content}>
            <Heading as="h3">
              Start IVF from home with our IPL treatment!
            </Heading>
            <Text as="p">
              IPL stands for Injections, Pharmacy & Lab. It is a service by
              GarbhaGudi specially started for patients seeking infertility
              treatment during the ongoing pandemic. The idea is to help you
              start treatment right from the safety of your home.
            </Text>
          </Box>
          <Box sx={styles.image}>
            <Image
              src={bannerImg}
              alt="IVF from Home Logo"
              style={{ width: "450px", height: "350px" }}
            />
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;

const styles = {
  banner: {
    pt: ["110px", null, null, null, "150px", "200px"],
    pb: ["50px", null, null, null, "60px", null, "0"],
    overflow: "hidden",
  },
  container: {
    width: [null, null, null, null, null, null, "1390px"],
  },
  grid: {
    display: "grid",
    gridTemplateColumns: ["1fr", null, null, "1fr 1fr"],
    gridGap: "0",
  },
  content: {
    h3: {
      fontWeight: "bold",
      lineHeight: [1.39],
      letterSpacing: ["-.7px", "-1.5px"],
      mb: ["15px", null, null, null, "20px"],
      width: ["100%"],
      maxWidth: ["100%", null, null, "90%", "100%", "540px"],
      fontSize: [6, null, null, "36px", null, "55px", 9],
    },
    p: {
      fontSize: [1, null, null, 2, null, 3],
      lineHeight: ["26px", null, null, null, 2.33],
      color: "text_secondary",
      mb: ["20px", null, null, null, null, "30px"],
      width: ["100%"],
      maxWidth: ["100%", null, null, null, null, "410px"],
      br: {
        display: ["none", null, null, null, "inherit"],
      },
    },
  },
  image: {
    img: {
      display: "flex",
      width: "500px",
      mixBlendMode: "darken",
      position: "relative",
      top: ["0", null, null, null, null, "-40px"],
      maxWidth: ["100%", null, null, null, null, null, "none"],
    },
  },
};
