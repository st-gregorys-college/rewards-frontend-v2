import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from '../components/Card';

import Homeroom from "../views/Homeroom";

export default function HomeroomList() {
  const homeroomYears = [7, 8, 9, 10, 11, 12];
  const homeroomLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

  return (
    <Card
      header={
        <h4 className="mb-0">Homeroom Selection</h4>
      }
      body={
        <Accordion className="accordion-flush">
          {
            homeroomYears.map(year => {
              return (
                <Accordion.Item className="accordion-item p-1" eventKey={year}>
                  <Accordion.Header className="accordion-header">Year {year}</Accordion.Header>
                  <Accordion.Body>
                    {
                      homeroomLetters.map(letter => {
                        return <Link className="btn btn-sm btn-primary m-1" to={{
                          pathname: '/homeroom/' + year + 'HR' + letter,
                          state: {
                            code: year + 'HR' + letter,
                            year_group: year,
                            letter: letter
                          }
                        }}>{letter}</Link>
                      })
                    }
                  </Accordion.Body>
                </Accordion.Item>
              )
            })
          }
        </Accordion>
      }
    />
  );
};