import Card from "./Card";
import Dropdown from "./Dropdown";
import { Bar } from 'react-chartjs-2';

export default function StageChallenge() {
  const stages = [
    {
      name: 'Stage 4',
      value: 4
    },
    {
      name: 'Stage 5',
      value: 5
    },
    {
      name: 'Stage 6',
      value: 6
    }
  ];

  const chartData = {
    labels: ['Year 7', 'Year 8'],
    datasets: [{
      backgroundColor: 'rgba(123, 180, 223, 0.6)',
      borderColor: 'rgb(130,0,36)',
      pointBackgroundColor: 'rgb(238, 179, 20)',
      borderWidth: '2',
      data: [10, 20],
    }]
  }

  const chartOptions = {
    plugins: {
      legend: {
        display: false
      },
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

  const stageChange = event => {
    const { value } = event.target;

    console.log(value);
  }

  return (
    <Card
      header={
        <div className="row align-items-center" style={{height: 35}}>
          <div className="col">
            <h4 className="mb-0">Stage Challenge</h4>
          </div>
          <div className="col-auto">
            <Dropdown
              id="stage-challenge-stages"
              options={stages}
              onChange={stageChange}
            />
          </div>
        </div>
      }
      body={
        <Bar data={chartData} options={chartOptions} />
      }
    />
  );
}