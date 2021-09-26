import Card from "./Card";
import { Bar } from 'react-chartjs-2';

export default function HouseTotals() {
  const chartData = {
    labels: ['Molloy', 'Laurentian', 'Donovan', 'Kilian'],
    datasets: [{
      backgroundColor: ['rgba(2, 84, 165, 0.4)','rgb(238, 64, 53, 0.4)','rgba(255, 223, 1, 0.4)','rgba(1, 135, 82, 0.4)'],
      borderColor: ['rgb(2, 84, 165)','rgb(238, 64, 53)','rgba(255, 223, 1)','rgba(1, 135, 82)'],
      data: [10, 30, 50, 10],
      borderWidth: 1
    }]
  }

  const chartOptions = {
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          display: false
        }
      }
    },
    responsive: true,
    maintainAspectRatio: false
  }
  
  return (
    <Card
      header={
        <h4 className="mb-0">House Totals</h4>
      }
      body={
        <Bar data={chartData} options={chartOptions} />
      }
    />
  );
}