import { useState } from 'react'

const ElementAddList = () => {
  const data = [
    {
      id: 1,
      name: 'a'
    },
    {
      id: 2,
      name: 'b'
    },
    {
      id: 3,
      name: 'c'
    }
  ]
  const [elements, setElements] = useState(data);
  return (
    <div>
      <h3> List </h3>
      {elements.map(item => (
        <div key={item.id} data-testid="record">
          {item.id}: {item.name}
        </div>
      ))}
      <button onClick={() => {
        setElements([...elements, {
          id: 4,
          name: 'abhinav'
        }])
      }}> Add to list </button>
    </div>
  )
}

export default ElementAddList