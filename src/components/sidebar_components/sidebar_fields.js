import React,{useState} from "react";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
let typesOfFields = ["Rent","Bedrooms", "Bathrooms"];

const generateMinMaxFields = () => {
  let components = [];
  typesOfFields.forEach((field) => {
    components.push(
      <div id={`sidebar_${field}`}>
        <h3 id="sidebar_subtitle">{field}</h3>
          <input
            type="text"
            id="sidebar_min_field"
            name="Min"
            placeholder ={field === "Rent" ? "$Min" : "Min"}
          />
        <input
          type="text"
          id="sidebar_max_field"
          name="Max"
          placeholder ={field === "Rent" ? "$Max" : "Max"}
          />
          <Button variant="contained" id="sidebar_button">
            Go
          </Button>
      </div>
    );
  });
  return components;
};

function SidebarFields({parish, setParishFilterInRedux}) {
  const [parishFilter, setParishFilterInState] = useState(parish);

  //console.log(parishFilter)
  return (
    <div >
      <div id="sidebar_parish">
        <h3 id="sidebar_subtitle">Parish</h3>
        <input
          type="text"
          id="sidebar_field"
          name="fname"
          placeholder="Enter parish"
          defaultValue={parish}
          onChange={(e)=>{
            setParishFilterInState(e.target.value)
            //console.log(parishFilter)
          }}
        />
        <span>
          <Button variant="contained" id="sidebar_button" onClick={
            ()=>setParishFilterInRedux(parishFilter)
          }>
            Go
          </Button>
        </span>
      </div>
      {generateMinMaxFields()}

    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    parish: state.filterReducer.parish
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setParishFilterInRedux: (parish) => {
      dispatch({ type: "SET_PARISH_FILTER", payload: {parish} });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarFields);
