import React from "react";
import Layout from "../components/Layout";
import { Typography } from "@mui/material";
import { Box, Tabs, Tab } from "@mui/material";
import { Main } from "../components/Main";
import { Staff } from "../components/Staff";
import { Teams } from "../components/Teams";
import { PlacesToHelp } from "../components/PlacesToHelp";
import { HowYouCanHelp } from "../components/HowYouCanHelp";
import { HowWeCanHelp } from "../components/HowWeCanHelp";
import { Sponsors } from "../components/Sponsors";
import { ServiceVsTherapy } from "../components/ServiceVsTherapy";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const Home: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Layout>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
      >
        <Tab label="Welcome" />
        <Tab label="Our Staff" />
        <Tab label="Teams" />
        <Tab label="Service Dogs vs Therapy Dogs" />
        <Tab label="How We Can Help" />
        <Tab label="How You Can Help" />
        <Tab label="Sponsors and Friends" />
        <Tab label="Places To Help" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Main />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Staff />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Teams />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ServiceVsTherapy />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <HowWeCanHelp />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <HowYouCanHelp />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Sponsors />
      </TabPanel>
      <TabPanel value={value} index={7}>
        <PlacesToHelp />
      </TabPanel>
    </Layout>
  );
};

export default Home;
