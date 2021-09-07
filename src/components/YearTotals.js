import Card from "./Card";
import { Bar } from 'react-chartjs-2';

export default function YearTotals() {
  const chartData = {

  };

  const chartOptions = {

  };
  
  return (
    <Card
      header={
        <h4 className="mb-0">Year Group Totals</h4>
      }
      body={
        <Bar data={chartData} options={chartOptions} />
      }
    />
  );
};