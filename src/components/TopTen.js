import React, { useEffect, useState } from 'react';

import Card from "./Card";
import Dropdown from "./Dropdown";
import TopTenItem from './TopTenItem';

export default function TopTen() {
  const topTenModes = [
    {
      name: 'Current',
      value: 'current'
    },
    {
      name: 'Total',
      value: 'total' 
    }
  ];

  const topTenYearGroups = [
    {
      name: 'All Years',
      value: 'all'
    },
    {
      name: 'Year 7',
      value: 7
    },
    {
      name: 'Year 8',
      value: 8
    },
    {
      name: 'Year 9',
      value: 9
    },
    {
      name: 'Year 10',
      value: 10
    },
    {
      name: 'Year 11',
      value: 12
    },
    {
      name: 'Year 12',
      value: 12
    },
  ];

  const placeText = [
    {
      place: 1,
      sup: 'st'
    },
    {
      place: 2,
      sup: 'nd'
    },
    {
      place: 3,
      sup: 'rd'
    },
    {
      place: 4,
      sup: 'th'
    },
    {
      place: 5,
      sup: 'th'
    },
    {
      place: 6,
      sup: 'th'
    },
    {
      place: 7,
      sup: 'th'
    },
    {
      place: 8,
      sup: 'th'
    },
    {
      place: 9,
      sup: 'th'
    },
    {
      place: 10,
      sup: 'th'
    }
  ];

  const _tempStudents = [
    {
      first_name: 'Cooper',
      last_name: 'BELTRAMI',
      house: 'Donovan',
      points: '150',
      year_group: '12'
    },
    {
      first_name: 'Cristian',
      last_name: 'LUSTRI',
      house: 'Laurentian',
      points: '100',
      year_group: '12'
    }
  ];

  const [topTenStudents, setTopTenStudents] = useState([]);

  useEffect(() => {
    setTopTenStudents(_tempStudents);
  }, []);

  const topTenModeChange = event => {
    const { value } = event.target;

    console.log(value);
  };

  const topTenYearGroupsChange = event => {
    const { value } = event.target;

    console.log(value);
  };

  return (
    <Card
      header={
        <div className="row align-items-center" style={{height: 35}}>
          <div className="col">
            <h4 className="mb-0">Top Ten</h4>
          </div>
          <div className="col-auto" style={{padding: 0}}>
            <Dropdown
              id="top-ten-mode-dropdown"
              name="top-ten-mode-dropdown"
              options={topTenModes}
              onChange={topTenModeChange}
            />
          </div>
          <div className="col-auto">
          <Dropdown
              id="top-ten-year-dropdown"
              name="top-ten-year-dropdown"
              options={topTenYearGroups}
              onChange={topTenYearGroupsChange}
            />
          </div>
        </div>
      }
      body={
        <div className="list-group" style={{padding: '1.3rem'}}>
          <div className="row">
            <div className="col-12 col-md-6 toptenlist">
              {
                topTenStudents.map((student, i) => {
                  return <TopTenItem 
                    place={placeText[i].place}
                    sup={placeText[i].sup}
                    name={student.first_name + ' ' + student.last_name}
                    year={student.year_group}
                    house={student.house}
                    points={student.points}
                  />
                })
              }
            </div>
          </div>
        </div>
      }
    />
  );
};