import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { tagValue } from '../lib/tagSlice'

export default function Test() {
  const value = useSelector((state) => state.tagSlice.value)
  const dispatch = useDispatch()

  return (
    <div className='my-40'>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(tagValue('1222'))}
        >
          Increment
        </button>
        <span>{value}</span>
      </div>
    </div>
  )
}

