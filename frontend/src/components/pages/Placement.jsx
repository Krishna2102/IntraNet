import React from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const btechData = [
    { year: "2019", placement: 85 },
    { year: "2020", placement: 85 },
    { year: "2021", placement: 85 },
    { year: "2022", placement: 85 },
    { year: "2023", placement: 90 },
    { year: "2024", placement: 93 },
];

const mcaData = [
  { year: "2019", placement: 85 },
    { year: "2020", placement: 85 },
    { year: "2021", placement: 85 },
    { year: "2022", placement: 85 },
    { year: "2023", placement: 90 },
    { year: "2024", placement: 93 },
];

const mtechData = [
  { year: "2019", placement: 85 },
    { year: "2020", placement: 85 },
    { year: "2021", placement: 85 },
    { year: "2022", placement: 85 },
    { year: "2023", placement: 90 },
    { year: "2024", placement: 93 },
];

const ChartSection = ({ title, data }) => (
  <div className="bg-white p-6 rounded shadow-md">
    <h2 className="text-xl font-bold mb-4">{title} Placement Trends</h2>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis unit="%" domain={[0, 100]} />
        <Tooltip />
        <Legend />
        <Bar dataKey="placement" fill="#7c3aed" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

const Placement = () => {
  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <Navbar />
      <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <ChartSection title="BTech" data={btechData} />
        <ChartSection title="MCA" data={mcaData} />
        <ChartSection title="MTech" data={mtechData} />
      </div>
      <Footer/>
    </div>
  );
};

export default Placement;
