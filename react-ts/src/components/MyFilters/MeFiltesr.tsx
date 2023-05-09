import classes from "./MyFilters.module.css"


const MyFilters = ({options, defultValue, value, onChange}) => {
    
    return (
        <>
<div className={classes.MyFilters}>
    <select value={value}
    onChange={event => onChange(event.target.value)}
    >
        <option disabled>{defultValue}</option>
        {options.map(option =>
            <option key={option.value} value={option.value}>
                 {option.name}
            </option>           
        )}
        
    </select>


   <div className={classes.filterWrapper}>
  <input 
  id="smartphones"
  
  className={classes.inputFilter} type="checkbox" />
  <label htmlFor="">smartphones</label>
  <span>(5/5)</span>
   </div>
   <div className={classes.filterWrapper}>
  <input className={classes.inputFilter} type="checkbox" />
  <label htmlFor="">laptops</label>
  <span>(5/5)</span>
   </div>
   <div className={classes.filterWrapper}>
  <input className={classes.inputFilter} type="checkbox" />
  <label htmlFor="">skincare</label>
  <span>(5/5)</span>
   </div>
</div>
</>
    )
}

export default MyFilters;
