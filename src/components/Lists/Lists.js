import React from 'react';
import './Lists.css';

const Lists = (props) => {
  return (
    <ul className="lists">{
        props.data.map((listData) => {
            return <li key={listData.id}>{listData.text}</li>;
        })
    }
    </ul>
  );
}

export default Lists;