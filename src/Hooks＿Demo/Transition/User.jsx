import { useState, useEffect } from "react"

export default function User() {

  let items = [];
  for (let i = 0; i < 700; i++) {
    items.push(<Item key={i} index={i} />);
  }



  return (
    <ul style={{ height: '200px', overflow: 'scroll' }}>
      {
        items
      }
    </ul>
  )
}

function Item({ index }) {
  let startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }
  return <li className="item">
    Post #{index + 1}
  </li>
}