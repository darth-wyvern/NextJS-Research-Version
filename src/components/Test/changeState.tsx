import { useEffect, useState } from "react"

const ChangeState = () => {
  const [toggleTextVisible, setToggleTextVisible] = useState(false)
  return (
    <div>
      {toggleTextVisible && <p> Text visible </p>}
      <button onClick={() => { setToggleTextVisible(!toggleTextVisible) }}>
        Toggle text
      </button>
    </div>
  )
}

export default ChangeState;