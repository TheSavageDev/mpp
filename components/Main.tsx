import React from "react";
import {
  Container,
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

export const Main: React.FC = () => {
  return (
    <Container maxWidth="xl" disableGutters>
      <Typography variant="h2">Our Mission</Typography>
      <Typography variant="body1" my={1}>
        To provide Missouri military veterans, and First Responders suffering
        from Post-Traumatic Stress Disorder (PTSD) or Traumatic Brain Injury
        (TBI) with a trained Service dog, most of these dogs of which will be
        rescued from local shelters.
      </Typography>
      <Typography variant="body1" my={1}>
        This is accomplished by pairing the veteran/first responder with a
        rescued dog who will train together until graduation.
      </Typography>
      <Typography variant="h2">Our Goal</Typography>
      <Typography variant="body1" my={1}>
        To help our war heroes and first responders improve in their symptoms of
        PTSD, adjust back into civilian life, lead a more productive life and
        help them build self-esteem. We also want to help the pet overpopulation
        problem by helping place shelter or rescue dogs into good homes.
      </Typography>
      <Typography variant="h2">What We Do</Typography>
      <Typography variant="body1" my={1}>
        Missouri Patriot Paws (MPP) was established in December 2013 to provide
        the training of service dogs for Missouri veterans and first responders
        with Post Traumatic Stress Disorder (PTSD)/Traumatic Brain Injury (TBI).
        MPP is a non-profit organization operating under EIN # 46-5300374.
      </Typography>
      <Typography variant="body1" my={1}>
        Please, visit Missouri Patriot Paws on FACEBOOK, for updates and
        pictures of current clients and their service dogs!!!
      </Typography>
      <Typography variant="body1" my={1}>
        We believe that the bond between a veteran/first responder and his/her
        service dog can contribute greatly to the veteran/first responder's
        emotional, mental, spiritual, and physical healing. We work to provide a
        trained service dog to any veteran/first responder with PTSD/TBI,
        regardless of financial situation or other challenges.
      </Typography>
      <Typography variant="body1" my={1}>
        Our organization will work with a veteran/first responder who already
        has a dog with whom he/she has an established bond. If the client does
        not have his/her own dog, we can assist in assessing and choosing a dog
        from a local shelter, rescue group, or breeder. The veteran/first
        responder can also choose a dog from our Available Assessed Dogs' page.
        We are happy to consult on whether the veteran/first responder dog has
        the potential to be a Service Dog. The dog must already be in the
        veteran/first responder's possession before training begins. Missouri
        Patriot Paws has trainers who are highly experienced.
      </Typography>
      <Typography variant="body1" my={1}>
        PTSD Service Dogs are trained to:
        <List>
          <Item text="Assist in a medical crisis" />
          <Item text="Provide treatment related assistance" />
          <Item text="Assist in coping with emotional overload" />
          <Item text="Perform security enhancement" />
        </List>
      </Typography>
      <Typography variant="body1" my={1}>
        The veteran/first responder must ensure the service dog candidate has a
        designated veterinarian. Updated vaccination records are required for
        the dog, along with monthly heartworm and flea/tick prevention
        treatment. Between regularly scheduled training sessions, the
        veteran/first responder is expected to train daily with the dog to
        reinforce training and increase proficiency.
      </Typography>
      <Typography variant="body1" my={1}>
        We provide answers to any questions veterans/first responders might have
        regarding access rights for Service Dogs in workplaces,
        apartments/rental houses, and places of business. We also offer guidance
        on the process of getting the proper vests for their dogs, and how to
        respond to questions or requests from people who are interested in their
        service dogs.
      </Typography>
    </Container>
  );
};
