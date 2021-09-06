import { Link } from "react-router-dom";
import { Bar } from 'react-chartjs-2';
import Card from "./Card";

export default function PointsBreakdown() {
  const chartData = {
    labels: ['Green Stamps', 'Positive Merits', 'Rewards'],
    datasets: [{
      backgroundColor: ['rgba(105, 224, 105, 0.4)','rgb(123, 180, 223, 0.4)','rgba(136, 0, 36, 0.4)'],
      borderColor: ['rgb(105, 224, 105)','rgb(123, 180, 223)','rgba(136, 0, 36)'],
      borderWidth: 1,
      data: [10, 3, 8]
    }]
  };

  const chartOptions = {
    plugins: {
      legend: {
        display: false
      },
    },
  };

  return (
    <Card
      header={
        <div className="row align-items-center">
          <div className="col">
            <h4 className="mb-0">Points Breakdown</h4>
          </div>
          <div className="col-auto">
            <Link className="small text-gray-700" to="/profile/general">View Profile</Link>
          </div>
        </div>
      }
      body={
        <Bar data={chartData} options={chartOptions} />
      }
    />
  );
};