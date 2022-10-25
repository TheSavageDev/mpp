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

export const PlacesToHelp: React.FC = () => {
  return (
    <Container maxWidth="xl" disableGutters>
      <Typography variant="h2" gutterBottom sx={{ color: "red" }}>
        For Immediate Mental Health Services
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Card sx={{ mx: 4 }}>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Emergency Medical Services
            </Typography>
            <Link
              variant="body2"
              mx={2}
              sx={{ color: "red" }}
              href="tel:911"
              underline="hover"
            >
              Call 911
            </Link>
            <Typography variant="body1" gutterBottom mx={2}>
              If the situation is potentially life-threatening, get immediate
              emergency assistance by calling 911, available 24 hours a day.
            </Typography>
            <Typography variant="h4" gutterBottom>
              National Suicide Prevention Lifeline
            </Typography>
            <Link
              variant="body1"
              gutterBottom
              mx={2}
              sx={{ color: "red" }}
              href="tel:18002738255"
              underline="hover"
            >
              Call: 1-800-273-8255
            </Link>
            <Typography variant="body1" gutterBottom mx={2}>
              If you or someone you know is suicidal or in emotional distress,
              contact the National Suicide Prevention Lifeline. Trained crisis
              workers are available to talk 24 hours a day, 7 days a week. Your
              confidential and toll-free call goes to the nearest crisis center
              in the Lifeline national network. These centers provide crisis
              counseling and mental health referrals.
            </Typography>
            <Typography variant="h4" gutterBottom>
              Veterans Crisis Line
            </Typography>
            <Link
              variant="body1"
              gutterBottom
              mx={2}
              sx={{ color: "red" }}
              href="tel:18002738255"
              underline="hover"
            >
              Call: 1-800-273-8255 Press 1
            </Link>
            <br />
            <Link
              href="https://www.veteranscrisisline.net/"
              target="_blank"
              rel="noopener noreferrer"
              mx={2}
              variant="body2"
              underline="hover"
            >
              Veterans Crisis Line Website
            </Link>
            <Typography variant="body1" gutterBottom mx={2}>
              The Veterans Crisis Line connects Veterans in crisis and their
              families and friends with qualified, caring Department of Veterans
              Affairs responders through a confidential toll-free hotline,
              online chat, or text.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ mx: 4 }}>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Law Enforcement (COPLINE)
            </Typography>
            <Link
              variant="body1"
              gutterBottom
              mx={2}
              sx={{ color: "red" }}
              href="tel:18002675463"
              underline="hover"
            >
              Call: 1-800-267-5463
            </Link>

            <Typography variant="h4" gutterBottom>
              Fire/EMS Helpline
            </Typography>
            <Link
              variant="body1"
              gutterBottom
              mx={2}
              sx={{ color: "red" }}
              href="tel:18887313473"
              underline="hover"
            >
              Call: 1-888-731-3473
            </Link>

            <Typography variant="h4" gutterBottom>
              Safe Call Now
            </Typography>
            <Link
              variant="body1"
              gutterBottom
              mx={2}
              sx={{ color: "red" }}
              href="tel:12064593020"
              underline="hover"
            >
              Call: 1-206-459-3020
            </Link>
            <Typography variant="body1" gutterBottom mx={2}>
              24/7 help line staffed by first responders for first responders
              and their family members. They can assist with treatment options
              for responders who are suffering from mental health, substance
              abuse and other personal issues.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};
