import React, {useState, useEffect} from 'react';
import SubListItem from './SubListItem';
import '../../index.css';

const List = ({content, allComplete, map} : { content: Array<string>, allComplete: any, map: string}) => {
  const [numComp, setNumComp] = useState(0);
  let count: number = 1;
  const sliced = content.slice(1);

  const handleComp = (completed: boolean) => {
    completed ? setNumComp(prev => prev+1) 
      : setNumComp(prev => prev-1);
  };

  const contentList = sliced.map(i => <SubListItem key={count} step={count++} content={i} completed={handleComp} map={map}/>);
  
  useEffect(() => {
    if (numComp === sliced.length && numComp > 0) allComplete();
  }, [numComp]);

  return (
    <div className="sublistContent">
      {contentList}
    </div>
  );
}

export default List;
