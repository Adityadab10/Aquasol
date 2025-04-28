import React from 'react'
import { Link } from "react-router-dom";

function Signup() {
  return (
    <Link to="/signup">
    <div>
        <button className="bg-transparent h-12 w-28 rounded-lg border border-white text-white hover:bg-blue-300 hover:text-black hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
  Signup
</button>
    </div>
    </Link>
  )
}

export default Signup