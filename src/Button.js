import React from 'react'

const Button = ({buttonText,userReq,setUserReq}) => {
  return (
        <button
            className='button'
            onClick={()=>{setUserReq(buttonText)}}
        >
            {buttonText}
        </button>
  )
}

export default Button