import React, { useEffect, useState } from "react";

import Card from "./Card";
import Dropdown from "./Dropdown";
import Modal from './Modal';
import MeritItem from "./MeritItem";

export default function MeritList() {
  const meritYearGroupOptions = [
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

  const meritActionOptions = [
    {
      name: 'Unactioned',
      value: 'unactioned'
    },
    {
      name: 'Actioned',
      value: 'actioned'
    }
  ];

  // Merits are as follows
  // 0 - Blue
  // 1 - White
  // 2 - Maroon

  const meritTypeOptions = [
    {
      name: 'All',
      value: 'all'
    },
    {
      name: 'Blue',
      value: 0
    },
    {
      name: 'White',
      value: 1
    },
    {
      name: 'Maroon',
      value: 2
    }
  ];

  const _tempMeritList = [
    {
      first_name: 'Cooper',
      last_name: 'BELTRAMI',
      year_group: '12',
      student_id: '63895',
      merit: 0
    },
    {
      first_name: 'Cristian',
      last_name: 'LUSTRI',
      year_group: '12',
      student_id: '64789',
      merit: 1
    },
    {
      first_name: 'Spencer',
      last_name: 'BELTRAMI',
      year_group: '8',
      student_id: '66540',
      merit: 3
    },
  ];
  
  const _tempAdmin = false;

  const [meritList, setMeritList] = useState([]);

  useEffect(() => {
    setMeritList(_tempMeritList);
  }, [])

  const meritYearGroupChange = e => {
    const { value } = e.target;

    console.log(value);
  }

  const meritActionChange = e => {
    const { value } = e.target;

    console.log(value);
  }

  const meritTypeChange = e => {
    const { value } = e.target;

    console.log(value);
  }

  return (
    <>
      <Card
        header={
          <div className="row align-items-center" style={{height: 35}}>
            <div className="col">
              <h4 className="mb-0">Merit List</h4>
            </div>
            <div className="col-auto" style={{padding: 0}}>
            <Dropdown
                id="merit-list-action-dropdown"
                options={meritActionOptions}
                onChange={meritActionChange}
              />
            </div>
            <div className="col-auto">
              <Dropdown
                id="merit-list-type-dropdown"
                options={meritTypeOptions}
                onChange={meritTypeChange}
              />
            </div>
            {
              _tempAdmin ?
              <div className="col-auto">
                <Dropdown
                  id="merit-list-yeargroup-dropdown"
                  options={meritYearGroupOptions}
                  onChange={meritYearGroupChange}
                />
              </div> : ''
            }
          </div>
        }
        body={
          <div className="list-group" style={{padding: '1.3rem'}}>
            <div className="row">
              <div className="col-12 col-md-6">
                {
                  meritList.map(student => {
                    return <MeritItem student={student} />
                  })
                }
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