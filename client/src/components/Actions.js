import React from "react";

const Actions = props => {
  return (<div>
    {props.actions.map(action => {
      return <div>
        <h2 onClick={() => props.history.push(`/actions/${action.id}`)}>{action.project_id}</h2>
        <p>{action.description}</p>
      </div>
    })}
  </div>
  )
};

export default Actions;
