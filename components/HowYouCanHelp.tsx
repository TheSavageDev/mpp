import React from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";

const Item = ({ text }: { text: string }) => (
  <ListItem>
    <ListItemIcon>
      <PetsIcon color="secondary" />
    </ListItemIcon>
    <ListItemText>{text}</ListItemText>
  </ListItem>
);

export const HowYouCanHelp: React.FC = () => {
  return (
    <Container maxWidth="xl" disableGutters>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Card sx={{ mx: 2 }}>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Donations
            </Typography>
            <Typography variant="body1" gutterBottom mx={2}>
              Donations can made to Missouri Patriot Paws under the 501(c)3
              under EIN # 46-5300374 that was granted in December 2014 making
              these tax deductible as defined under section 170(b)(1)(A)(vi) of
              the Internal Revenue Code and specific tax deductible related
              questions should be discussed with your personal tax advisor.
            </Typography>
            <Typography variant="body1" gutterBottom mx={2}>
              You can help Missouri Patriot Paws by shopping at
              <Link
                variant="body1"
                href="https://smile.amazon.com/about"
                underline="hover"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Amazon Smile.
              </Link>
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ mx: 2 }}>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Service Dog Assistance Funding Links
            </Typography>
            <Link
              variant="body1"
              gutterBottom
              mx={2}
              sx={{ display: "block" }}
              href="http://www.assistancedogunitedcampaign.org/"
              underline="hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Assistance Dog United Campaign (ADUC)
            </Link>
            <Link
              variant="body1"
              gutterBottom
              mx={2}
              sx={{ display: "block" }}
              href="http://www.humanesociety.org/animals/resources/tips/trouble_affording_pet.html"
              underline="hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Humane Society of the United States - Resources
            </Link>
            <Typography variant="body1" gutterBottom mx={2}>
              IRS: Guide Dog or Other Service Animal
            </Typography>
            <Link
              variant="body1"
              gutterBottom
              mx={2}
              sx={{ display: "block" }}
              href="http://www.irs.gov/pub/irs-pdf/p502.pdf"
              underline="hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ref: Medical and Dental Expenses, Publication 502 (2012), Page 8
            </Link>
            <Typography variant="body1" mx={2}>
              "You can include in medical expenses the costs of
              buying, training, and maintaining a guide dog or other service
              animal to assist a visually impaired or hearing disabled person,
              or a person with other physical disabilities.* In general, this
              includes any costs, such as food, grooming, and veterinary care,
              incurred in maintaining the health and vitality of the service
              animal so that it may perform its duties."
            </Typography>
            <Typography variant="caption" mx={2}>
              *The Americans with Disability Act has now included psychiatric
              service dogs in the description of other physical disabilities.
              Therefore, anyone suffering from such conditions as PTSD, TBI,
              anxiety disorders, depression, etc. would be able to benefit from
              the same assistance.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ mx: 2 }}>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Veterinarians
            </Typography>
            <Typography variant="body1" gutterBottom mx={2}>
              Most veterinarians offer a 10%-25% discount on medical treatment
              for Service Dogs. Ask your favorite vet about their discount
              policy.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};
