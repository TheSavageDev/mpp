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

export const ServiceVsTherapy: React.FC = () => {
  return (
    <Container maxWidth="xl" disableGutters>
      <Typography variant="h2" gutterBottom>
        The Differences between Service Dogs, Therapy Dogs
      </Typography>
      <Card sx={{ mb: 2, mx: 4 }}>
        <CardContent>
          <Typography variant="body1" gutterBottom>
            Differentiating between, service dogs, therapy dogs and emotional
            support animals is not a matter of splitting hairs or political
            correctness. Each of these dogs has a very different job from the
            others and the terms are not interchangeable.
          </Typography>
          <Typography variant="body1">
            While we appreciate the invaluable role that therapy dogs play in
            society and the crucial impact that emotional support animals have
            on the lives of their disabled owners, Please Don't Pet Me is
            dedicated to promoting understanding and respect for service dog
            teams. In the spirit of doing so, we hope to reduce the prevalent
            confusion about the differences between these three roles.
          </Typography>
        </CardContent>
      </Card>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Card sx={{ mx: 4 }}>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Service Dogs
            </Typography>
            <Typography variant="body1" gutterBottom>
              Service Dogs are individually trained to perform tasks and do work
              that mitigate their handlers' disabilities. Service dogs are much
              more than highly trained companions. Working as part of a team
              with their disabled partners, service dogs help them attain the
              safety and independence from which their handlers' disabilities
              would otherwise limit them.
            </Typography>
            <Typography variant="body1">
              The Americans with Disabilities Act (ADA) protects the rights of
              people with disabilities to be accompanied by their service dogs
              in public places, like businesses, restaurants, grocery stores,
              hotels, etc. Additional acts of law, like the DOT's Air Carrier
              Access Act, DOJ/HUD Fair Housing Act and Federal Rehabilitation
              Act protect the rights of people with disabilities to be
              accompanied by their service animals under a wide variety of
              circumstances under which the ADA may not be applicable.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ mx: 4 }}>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Therapy Dogs
            </Typography>
            <Typography variant="body1" gutterBottom>
              Therapy Dogs also receive extensive training but have a completely
              different type of job from service dogs. Their responsibilities
              are to provide psychological or physiological therapy to
              individuals other than their handlers; who are usually their
              owners. These dogs have stable temperaments and friendly,
              easy-going personalities. Typically, they visit various
              institutions like hospitals, schools, hospices, psychotherapy
              offices, nursing homes and more. Unlike service dogs, therapy dogs
              are encouraged to socialize and interact with a variety of people
              while they're on-duty.
            </Typography>
            <Typography variant="body1">
              Somewhat similar to service dogs, therapy dogs can have a variety
              of jobs. While most people are familiar with therapy dogs who
              visit places like hospitals, nursing homes and hospices to provide
              emotional therapy, these are not the only environments in which
              therapy dogs can be beneficial. Therapy dogs may also visit
              schools, day cares, group homes and rehabilitation centers. Their
              roles vary, from dogs who give learning disabled children the
              confidence to read out loud to actively participating in physical
              rehabilitation therapy. In some cases, a therapy dog will work in
              a particular establishment exclusively, like a psychotherapy
              practice.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Therapy dogs may be trained by just about anyone, but must meet
              the standards set by a particular organization to be certified and
              actively participate within the respective organization. They are
              usually handled by their owners, but in some cases of Animal
              Assisted Therapy, the therapy dog may be handled by a trained
              professional.
            </Typography>
            <Typography variant="body1">
              It is important to note that, despite thorough training,
              certification and the therapeutic benefits therapy dogs provide,
              they do not have the same jobs or legal designation as service
              dogs. While some institutions offer therapy dogs access on a case
              by case for the benefit of patients, guests, customers or
              clientele, the handlers or owners of therapy dogs do not have the
              same rights to be accompanied by these dogs in places where pets
              are not permitted.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};
