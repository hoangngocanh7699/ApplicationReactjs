import { Theme } from "../providers/theme"
import { useContext } from 'react'

function Header() {
  const { name } = useContext(Theme)

    return (
      <div className="header">
        <h1>{name}</h1>
      </div>
    );
  }
  
  export default Header
  