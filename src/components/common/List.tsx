import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import '../../index.css';

const List = ({content, map} : { content: Array<Array<string>>, map: string }) => {
  let count: number = 1;
  const contentList = content.map(i => <ListItem key={count} step={count++} content={i} lastStep={content.length} map={map}/>);

  return (
    <React.Fragment>
      {contentList}
    </React.Fragment>
  );
}

List.propTypes = {
  content: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default List;
