/** @jsxRuntime classic **/
/** @jsx jsx **/
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "Components/section-heading";
import TeamCard from "Components/cards/team-member";

import Member1 from "assets/images/team/member1.webp";
import Member2 from "assets/images/team/member2.webp";
import Member7 from "assets/images/team/member7.webp";
import Member4 from "assets/images/team/member4.webp";
import Member5 from "assets/images/team/member5.webp";
import Member6 from "assets/images/team/member6.webp";

const data = [
  {
    id: 1,
    imgSrc: Member1,
    altText: "Dr Asha S Vijay",
    title: "Dr Asha S Vijay",
    designation: "Founder & Medical Director",
    website: "https://garbhagudi.com/dr-asha-s-vijay-profile",
  },
  {
    id: 2,
    imgSrc: Member2,
    altText: "Dr Chaithra S.K",
    title: "Dr Chaithra S.K",
    designation: "Senior Ferility Specialist",
    website: "https://garbhagudi.com/dr-chaitra-s-k",
  },
  {
    id: 3,
    imgSrc: Member4,
    altText: "Dr Maheshwari M",
    title: "Dr Maheshwari M",
    designation: "Senior Ferility Specialist",
    website: "https://garbhagudi.com/dr-maheshwari",
  },
  {
    id: 4,
    imgSrc: Member5,
    altText: "Dr Chinmayie R",
    title: "Dr Chinmayie R",
    designation: "Fertility Specialist",
    website: "https://garbhagudi.com/dr-chinmayie-r",
  },
  {
    id: 5,
    imgSrc: Member6,
    altText: "Dr Swetha V",
    title: "Dr Swetha V",
    designation: "Fertility Specialist",
    website: "https://garbhagudi.com/dr-swetha-v",
  },
  {
    id: 6,
    imgSrc: Member7,
    altText: "Dr Priyanka Rani",
    title: "Dr Priyanka Rani",
    designation: "Fertility Specialist",
    website: "https://garbhagudi.com/dr-priyanka-rani",
  },
];

export default function TeamSection() {
  return (
    <section id="team">
      <Container>
        <SectionHeader
          sx={styles.header}
          title="Meet our Superheroes"
          description="Our team of Fertility Specialists have been recognized for their extensive clinical experience and research contributions, as well as for their success in treating the most challenging fertility cases."
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <TeamCard
              key={`team--key${item.id}`}
              src={item.imgSrc}
              altText={item.altText}
              title={item.title}
              designation={item.designation}
              website={item.website}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pb: [9, 9, 9, 12, 12, 9],
    mt: [0, null, -6, null, -4],
    gridGap: ["35px 0px", null, 0, null, null, "30px 35px"],
    gridTemplateColumns: [
      "repeat(2,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(3,1fr)",
    ],
    a: {
      textDecoration: "none",
      color: "inherit",
    },
  },
  header: {
    maxWidth: "600px",
  },
};
