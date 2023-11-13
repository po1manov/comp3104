import React from 'react';
import "./Student.css";

const s = {
  color: "yellow",
  forgroundColor: "yellow",
}

export default function Student(props) {
  return (
    <React.Fragment>
      <h1>Welcome to FullStack Develpment - I</h1>
      <h1>React Js Programming Week09 Lab Exercise</h1>
      <h2 style={s}>ID: {props.id}</h2>
      <h2 style={s}>Name: {props.nm}</h2>
      <h3>George Brown College, Toronto</h3>
    </React.Fragment>
  );
}

Student.defaultProps = {
  nm: "Egor Poimanov",
  id: "101249541"
}
