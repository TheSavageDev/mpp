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

export const HowWeCanHelp: React.FC = () => {
  return (
    <Container maxWidth="xl" disableGutters>
      <Box>
        <Typography variant="h3" gutterBottom>
          Download a copy of the{" "}
          <Link
            href="https://www.mopatriotpaws.org/uploads/3/4/6/8/34684815/mpp_application__09-09_.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Missouri Patriot Paws Application
          </Link>
        </Typography>
        <Card>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Process for Missouri Patriot Paws (MPP) Service Dog Program
            </Typography>
            <Typography variant="body1" gutterBottom mx={2}>
              This document outlines the steps for a veteran, medically
              diagnosed with PTSD/TBI, to apply for the Missouri Patriot Paws
              (MPP) Service Dog program.
            </Typography>
            <Typography variant="body1" gutterBottom mx={2}>
              <ol>
                <li>
                  Veteran contacts the MPP Program Coordinator, Susan Hinkle, by
                  phone (573-578-2141) or email (
                  <Link
                    href="mailto:susan@mopatriotpaws.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    susan@mopatriotpaws.org
                  </Link>
                  ) with the following information:
                  <ul>
                    <li>Full Name</li>
                    <li>
                      Address (physical address and mailing address if different
                      from physical address)
                    </li>
                    <li>Contact Phone Number</li>
                    <li>Contact Email Address</li>
                  </ul>
                </li>
                <li>
                  The Program Coordinator will contact the sender to schedule a
                  meeting to discuss the program further and assist the
                  Applicant in preparing the program's{" "}
                  <Link
                    href="https://www.mopatriotpaws.org/uploads/3/4/6/8/34684815/mpp_application__10-17_.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    application
                  </Link>
                  . The Program Coordinator will provide copies of the following
                  documents to the Applicant via email:
                  <ul>
                    <li>Client's Bill of Rights</li>
                    <li>Team Handler's Standards</li>
                    <li>Service Dog in Public Standards</li>
                    <li>MPP Program Standards</li>
                    <li>
                      List of Financial Responsibilities- (what the Applicant
                      will be responsible for and what the program covers)
                    </li>
                    <li>Program's Certification Standards</li>
                    <li>
                      IAADP's “Service Dog Tasks for Panic Disorder, PTSD, and
                      Depression” document
                    </li>
                    <li>Public Access Test Standards</li>
                  </ul>
                </li>
                <li>
                  Program Administration Checklist
                  <ul>
                    <li>Copy of prepared and signed Application</li>
                    <li>
                      Emails related to this case (applicant has been accepted
                      into the program, Service Dog candidate related details,
                      Training Begin Date, Training End Date, Certification Exam
                      Date, Graduation Ceremony date, and other email
                      communications related to a specific Team, etc)
                    </li>
                    <li>
                      Copy of the PCM letter confirming PTSD and recommendation
                      for an Service Dog
                    </li>
                    <li>
                      Copy of the Applicant/Handler's liability insurance policy
                      and rider covering the Service Dog Candidate
                    </li>
                    <li>
                      Copy of the Service Dog candidate's most current
                      veterinarian records including but not limited to:
                      vaccinations, heartworm test with results, confirming the
                      Service Dog candidate is altered (spayed or neutered), and
                      micro-chipped (registration number, who with, and
                      micro-chipped date)
                    </li>
                    <li>
                      Copy of the Team's members (Handler and Assistance Service
                    </li>
                    <li>
                      Copy of the completed AKC's CGC Program Test/Registration
                    </li>
                    <li>Canine pictures</li>
                    <li>
                      Copy of the completed Home Visit/Phone Interview report
                      and completed “ADA Related Service Dog Tasks Worksheet”
                      Form
                    </li>
                    <li>Copy of the completed Public Access Test</li>
                    <li>
                      Copy of completed and updated ADA Related Service Dog
                      Tasks worksheet
                    </li>
                    <li>
                      Copy of the program's customized laminated ID card
                      ordering form
                    </li>
                    <li>Copy of the MPP Certification Certificate</li>
                    <li>
                      Copy of subsequent written follow-ups by the appropriate
                      Liaison following the Graduation Ceremony
                    </li>
                  </ul>
                </li>
                <li>
                  The Program Coordinator and the assigned trainer will meet
                  with the Client (Team Handler) to determine which dog would be
                  a good candidate as the team's Service Dog, using the
                  following options:
                  <ul>
                    <li>
                      Program Coordinator and assigned trainer meets with the
                      program's Client and his/her existing companion dog to
                      determine if the dog has the temperament and qualities to
                      be a good candidate for training in preparation for the
                      program's Certification Exam
                    </li>
                    <li>
                      Program Coordinator, assigned Trainer, and the program's
                      Client visit a pre-determined animal shelter or animal
                      rescue group to meet with potential shelter or rescue
                      animals to determine if one of them appears to accept the
                      Client (Team Handler) as a good match, has appropriate
                      temperament as a Service Dog, and ability to become a good
                      candidate for the program's training in preparation for
                      the program's Certification Exam.
                    </li>
                  </ul>
                </li>
                <li>
                  The Program Coordinator will maintain open communications with
                  the Handler and the Trainer during the training term.
                </li>
                <li>
                  Upon the Team's completion of the program's formal training,
                  the Trainer advises the Program Coordinator that the Team is
                  ready to take the Certification Exam. The Program Coordinator
                  will schedule the exam at a convenient time for both the
                  Tester and Team.
                  <br />
                  <strong>NOTE</strong>: If possible, the Program Coordinator
                  should be in attendance to assist the Tester, as needed, and
                  support the Team.
                </li>
                <li>
                  The Program Coordinator will make arrangements and set a date
                  for an official Graduation Ceremony.
                </li>
                <li>
                  The Program Coordinator will perform the following steps:
                  <ul>
                    <li>Order the program's customized Team's ID card</li>
                    <li>Prepare the Team's Certification Certificate</li>
                    <li>Maintain copy of certificate in the Team's file</li>
                    <li>
                      MPP Coordinator will maintain monthly communication with
                      the veteran to monitor team's progress.
                    </li>
                  </ul>
                </li>
              </ol>
            </Typography>
          </CardContent>
        </Card>
        <Typography variant="h3" gutterBottom>
          Download a copy of the{" "}
          <Link
            href="https://www.mopatriotpaws.org/uploads/3/4/6/8/34684815/mpp_application__09-09_.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Missouri Patriot Paws Application
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};
