import React from 'react'
import Button from './Button'

const Form = ({userReq,setUserReq}) => {
  return (
    <form onSubmit={(e)=>e.preventDefault()}>
      <div className='buttonList'>
        <Button
            buttonText="users"
            userReq={userReq}
            setUserReq={setUserReq}
        />
        <Button
            buttonText="albums"
            userReq={userReq}
            setUserReq={setUserReq}
        />
        <Button
            buttonText="comments"
            userReq={userReq}
            setUserReq={setUserReq}
        />
      </div>
    </form>
  )
}

export default Form