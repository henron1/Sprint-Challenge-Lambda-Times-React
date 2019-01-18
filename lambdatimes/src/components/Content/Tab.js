import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/

  // if (props.tab === props.selectedTab) {
  //   this.className='tab active-tab'
  // } else {
  //   this.className='tab'
  // }

  return (
    <div
      // className={''}
      selectedTab={props.selectedTab}
      tab={props.tab}
      onClick={() => {props.selectTabHandler(props.tab)} }
      // toUpperCase={props.tab.toUpperCase()}>
    >
       {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;
