import { Box } from "@chakra-ui/react";
import React from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer, 
  XAxis,
  YAxis,  
} from "recharts";

const data = [
  {
    name: "Jan",
    uv: 740,
    pv: 2400,
    amt: 1000,
  },
  {
    name: "Feb",
    uv: 900,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    uv: 790,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    uv: 400,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    uv: 1000,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    uv: 590,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Jul",
    uv: 830,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Aug",
    uv: 350,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Sep",
    uv: 820,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Oct",
    uv: 700,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Nov",
    uv: 940,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Dec",
    uv: 600,
    pv: 4300,
    amt: 2100,
  },
];

const BarChartSection = () => {
  return (
    <Box
      width={"100%"}
      height={400}
      flexGrow={1}
      border={"1px solid #aaaa"}
      boxShadow={" 1px solid var(--Grays-Gray-6, rgba(242, 242, 247, 1))"}
      borderRadius={8}
      pt={5}
      pb={5}
      mr={5}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barSize={29}>
          <Bar dataKey="uv" fill="#8884d8" /> 
          <XAxis dataKey="name" />
          <YAxis /> 
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};
export default BarChartSection;
