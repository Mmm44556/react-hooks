import {memo} from 'react'

export default memo(function List({text}) {
  
  // console.log('render List')
  let items = [];
  for (let i = 0; i < 250; i++) {
    items.push(<Item key={i} text={text} />);
  }
  return (
    <div className='list-container' style={{height:'500px',overflow:"scroll"}}>
    {
      items
    }
    </div>

    
  )
})


function Item({text}) {
  let startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }

  return (
    <li >
      {text}
    </li>
  )
}

