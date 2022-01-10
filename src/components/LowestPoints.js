import React, { useEffect, useState } from "react";

import Card from "./Card";
import Dropdown from "./Dropdown";
import Modal from './Modal';
import LowestPointsItem from "./LowestPointsItem";

export default function LowestPoints() {
  const lowestPointsYearGroupOptions = [
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

  const _tempLowestPointsList = [
    {
      first_name: 'Cooper',
      last_name: 'BELTRAMI',
      year_group: '12',
      student_id: '63895',
      points: {
        total: 20,
        2021: 9 
      }
    },
    {
      first_name: 'Cristian',
      last_name: 'LUSTRI',
      year_group: '12',
      student_id: '64789',
      points: {
        total: 12,
        2021: 3
      }
    },
    {
      first_name: 'Spencer',
      last_name: 'BELTRAMI',
      year_group: '8',
      student_id: '66540',
      points: {
        total: 18,
        2021: 6
      }
    }
  ];
  
  const _tempAdmin = true;

  const [lowestPointsList, setLowestPointsList] = useState([]);

  useEffect(() => {
    setLowestPointsList(_tempLowestPointsList);
  }, [])

  const lowestPointsYearGroupChange = e => {
    const { value } = e.target;
  }

  return (
    <>
      <Card
        header={
          <div className="row align-items-center" style={{height: 35}}>
            <div className="col">
              <h4 className="mb-0">Lowest Points List</h4>
            </div>
            {
              _tempAdmin ?
              <div className="col-auto">
                <Dropdown
                  id="lowest-point-list-yeargroup-dropdown"
                  options={lowestPointsYearGroupOptions}
                  onChange={lowestPointsYearGroupChange}
                />
              </div> : ''
            }
          </div>
        }
        body={
          <div className="list-group">
            <div className="list-group toptenlist">
              <div className="row">
                <div className="col-12 col-md-6">
                  {
                    lowestPointsList.slice(0, Math.floor(lowestPointsList.length / 2)).map(student => {
                      return <LowestPointsItem student={student} />
                    })
                  }
                </div>
                <div className="col-12 col-md-6">
                  {
                    lowestPointsList.slice(Math.floor(lowestPointsList.length / 2), lowestPointsList.length).map(student => {
                      return <LowestPointsItem student={student}/>
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        }
      />
      <Modal
        
      />
    </>
  );
}