export default function Dropdown({ id, name, options, onChange }) {
  return (
    <select name={name} id ={id} className="form-select form-select-xs btn-primary" onChange={onChange}>
       {
         options.map(option => {
          return <option className="dropdown-item" value={option.value}>{option.name}</option>
         })
       } 
    </select>
  );
};