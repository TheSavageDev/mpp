import React from "react";
import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import prisma from "../lib/prisma";

// export const getStaticProps: GetStaticProps = async () => {
//   const handlers = await prisma.handler.findMany({
//     select: {
//       id: true,
//       name: true,
//       dog: true,
//       logbook: {
//         select: {
//           id: true,
//           totalMinutes: true,
//           entries: {
//             select: {
//               id: true,
//               tasks: true,
//               minutes: true,
//               notes: true,
//               location: true,
//               date: true,
//             },
//           },
//         },
//       },
//       email: true,
//     },
//   });

//   return {
//     props: { handlers: JSON.parse(JSON.stringify(handlers)) },
//     revalidate: 10,
//   };
// };

type Props = {
  handlers: {
    name: string;
    id: string;
    email: string;
    dog: {
      name: string;
    };
    logbook: {
      id: string;
      totalMinutes: number;
      entries: {
        id: string;
        minutes: number;
        tasks: string;
        notes: string;
        location: string;
        date: string;
      }[];
    };
  }[];
};

const Blog: React.FC<Props> = (props) => {
  return (
    <Layout>
      <main>
        {props.handlers.map((handler) => (
          <div key={handler.id}>
            <h1>
              {handler.name} - {handler.email}
            </h1>
            <h2>{handler.dog.name}'s Logbook</h2>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Minutes</th>
                  <th>Tasks</th>
                  <th>Locations</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {handler.logbook.entries.map((entry) => {
                  return (
                    <tr id={entry.id}>
                      <td>{entry.date.toString()}</td>
                      <td>{entry.minutes}</td>
                      <td>{entry.tasks}</td>
                      <td>{entry.location}</td>
                      <td>{entry.notes}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <h2>Notes and Total Time</h2>
            <div>
              <p>
                Weekly minutes:{" "}
                {handler.logbook.entries.reduce((a, b) => a + b.minutes, 0)}
              </p>
              <p>
                Total minutes:{" "}
                {handler.logbook.totalMinutes +
                  handler.logbook.entries.reduce((a, b) => a + b.minutes, 0)}
              </p>
              <p>
                Total Hours:{" "}
                {(handler.logbook.totalMinutes +
                  handler.logbook.entries.reduce((a, b) => a + b.minutes, 0)) /
                  60}
              </p>
            </div>
          </div>
        ))}
      </main>
    </Layout>
  );
};

export default Blog;
