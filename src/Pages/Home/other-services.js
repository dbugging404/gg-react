/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from "theme-ui";
import SectionHeading from "Components/section-heading";
import Service from "Components/cards/service";
import icon5 from "assets/images/icons/service4.webp";
import icon6 from "assets/images/icons/service7.webp";
import icon9 from "assets/images/icons/service9.webp";

const data = [
  {
    id: 2,
    icon: icon5,
    moreLink: "#learn-more",
    title: "Free Second Opinion",
    description: `Patients can come and meet our doctors and understand if the advised treatment is the best thing for the patient couple.`,
  },
  {
    id: 3,
    icon: icon6,
    moreLink: "#learn-more",
    title: "Financing Options",
    description: `0% interest for patients when they cannot manage the finances to meet the cost of procedures..`,
  },
  {
    id: 6,
    icon: icon9,
    moreLink: "#learn-more",
    title: "Online Support",
    description: `Patients can meet our doctors online to have a safe consultation during the pandemic.`,
  },
];

const OtherServices = () => {
  return (
    <Box as="section" sx={styles.section} id="why-us">
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="What makes GarbhaGudi special?"
          description="GarbhaGudi is known for its top-class treatment at affordable costs and unparalled success rates."
        />
        <Box sx={styles.contentWrapper}>
          {data?.map((item) => (
            <Service key={item.id} item={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};
export default OtherServices;

const styles = {
  section: {
    backgroundColor: "#F9FAFC",
    pt: [9, 9, 9, 11],
    pb: [9, 9, 9, 12, 12, 14],
  },
  heading: {
    mb: [6, null, null, 8, 9, null, 13],
    p: {
      maxWidth: 500,
      margin: "10px auto 0",
    },
  },
  contentWrapper: {
    gap: ["30px 30px", "30px 30px", "30px 30px", "80px 30px"],
    display: "grid",
    justifyContent: ["center", "center", "center", "unset"],
    gridTemplateColumns: [
      "repeat(1, 285px)",
      "repeat(1, 325px)",
      "repeat(1, 285px)",
      "repeat(3, 1fr)",
    ],
  },
};
