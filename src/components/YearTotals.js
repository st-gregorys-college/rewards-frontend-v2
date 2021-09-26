import Card from "./Card";
import { Bar } from 'react-chartjs-2';

export default function YearTotals() {
  const chartData = {
    labels: ['Year 7', 'Year 8', 'Year 9', 'Year 10', 'Year 11', 'Year 12'],
    datasets: [{
      backgroundColor: 'rgba(123, 180, 223, 0.4)',
      borderColor: 'rgb(123, 180, 223)',
      data: [100, 300, 70, 500, 200, 600],
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
        <h4 className="mb-0">Year Group Totals</h4>
      }
      body={
        <Bar data={chartData} options={chartOptions} />
      }
    />
  );
}