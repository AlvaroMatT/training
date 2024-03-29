import React from 'react';

export default function Todo(props){
    const action = props.name;
    return(
        <li className="todo stack-small">
          <div className="c-cb">
            <input id={props.id} type="checkbox" defaultChecked={props.completed} />
            <label className="todo-label" htmlFor={props.id}>
              {action}
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">{action}</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">{action}</span>
            </button>
          </div>
        </li>

    );
}