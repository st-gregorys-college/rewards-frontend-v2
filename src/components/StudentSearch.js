import Card from "./Card";

export default function StudentSearch() {
  const searchStudents = event => {
    const { value } = event.target;

    console.log(value);
  };

  return (
    <Card
      header={
        <>
          <h4 className="mb-2">Search</h4>
          <small className="text-gray-700">Enter a student's First name, Last name or Student ID. You can also use terms such as "jo sm" or "sm jo"</small>
        </>
      }
      body={
        <div className="form-group mb-0">
          <input type="text" className="form-control" maxLength="30" onInput={searchStudents} placeholder="Search" />
        </div>
      }
    />
  )
}