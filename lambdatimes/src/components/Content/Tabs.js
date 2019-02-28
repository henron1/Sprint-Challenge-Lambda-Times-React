import React from 'react';
import styled from 'styled-components';
import Tab from './Tab';
import PropTypes from 'prop-types';


const TabsMain = styled.div`
border-bottom: 1px solid lightgrey;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
width: 100%;
height: 47px;
background-color: #fff;`

const Topics = styled.div`
display: flex;
justify-content: none;
align-items: center;
flex-direction: row;`

const Title5 = styled.span`
font-size: 12px;
letter-spacing: 1px;
font-weight: bold;
}`

const Tab9 = styled.div`display: flex;
justify-content: none;
align-items: center;
flex-direction: row;
color: #fff;
background-color: #333;
margin: 0 5px;
padding: 2px 10px;
font-size: 12px;
letter-spacing: 2px;
cursor: pointer;
font-weight: bold;`


const Tabs = props => {
  return (
    <TabsMain>
      <Topics>
        <Title5>TRENDING TOPICS:</Title5>
        <Tab9>
        {props.tabs.map((tab) => 
          <Tab selectTabHandler={props.selectTabHandler} selectedTab={props.selectedTab} tab={tab} />
        )}

        </Tab9>
        
      </Topics>
    </TabsMain>
  );
};

Tabs.propTypes = {
  tab: PropTypes.array.isRequired,
  selectedTab: PropTypes.object.isRequired,
  selectedTabHandler: PropTypes.object.isRequried
} 

// Make sure to use PropTypes to validate your types!
export default Tabs;

