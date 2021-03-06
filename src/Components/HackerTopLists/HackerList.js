import React from 'react';
import styled from 'styled-components';

//Import components
import HackerRow from './HackerRow';
import HackerTopRow from './HackerTopRow';
import ExplanationSection from './ExplanationSection';

//Export default component
export default function HackerList(props) {
  return (
    <SDHackerList>
      <ExplanationSection color={props.color} explanation={props.explanation} />
      <HackerTopRow metric={props.metric} color={props.color} />
      {props.data.map((data, index) => (
        <HackerRow searchHacker={props.searchHacker} color={props.color} key={data.commentor} data={data} index={index} heading={props.heading} />
      ))}
    </SDHackerList>
  );
}

//Styled components
const SDHackerList = styled.div`
  box-sizing: border-box;
  min-height: 40vh;
  padding: 2%;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  h3 {
    margin-bottom: 20px;
  }
`;
