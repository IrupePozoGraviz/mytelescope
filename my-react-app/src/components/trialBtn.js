import React from 'react'
// import { useNavigate } from 'react-router-dom'
import '../css/trialBtn.css'

export const TrialBtn = () => {
  /*const navigate = useNavigate()
  const handleClick = () => {
    navigate('/projektledning')
  }*/

  return (
    <div>
      <button
        className="MoreInfoBtn"
        type="button"
        //onClick={handleClick}
        aria-label="Läs mer om våra projektledningstjänster">
        Start Trial
      </button>
    </div>
  )
}