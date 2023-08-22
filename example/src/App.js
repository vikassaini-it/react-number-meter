import React, { useState } from 'react'

import { RollingMeter, ShiftingMeter } from 'react-meter'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import 'react-meter/dist/index.css'
import { Slider } from '@mui/material'

const App = () => {
  const [value, setValue] = useState(100000)
  const [duration, setDuration] = useState(1000)
  return (
    <div
      style={{
        width: '100%',
        height: '100vh'
      }}
      className='d-flex flex-column align-items-center'
    >
      <h1 style={{ fontSize: '3rem' }}>REACT METER</h1>
      <div className='w-100 row'>
        <div className='col-12 col-md-6 d-flex justify-content-center flex-column align-items-center'>
          <h2>SHIFTING METER</h2>
          <p className='w-50 text-center'>
            This is a shifting meter which always shifts in both direction
            depending upon value, bottom to top
          </p>
          <ShiftingMeter value={value} duration={duration} />
        </div>
        <div className='col-12 col-md-6 d-flex justify-content-center flex-column align-items-center'>
          <h2>ROLLING METER</h2>
          <p className='w-50 text-center'>
            This is a rolling meter which always rolls in one direction, bottom
            to top
          </p>
          <RollingMeter value={value} duration={duration} />
        </div>
      </div>
      <div className='w-100 row mt-5'>
        <div className='col-12 d-flex gap-1 justify-content-center'>
          <IconButton
            aria-label='reduce'
            onClick={() => {
              setValue((prev) => prev - 1)
            }}
          >
            <RemoveIcon />
          </IconButton>
          <Button
            variant='outlined'
            onClick={() => setValue(Math.floor(Math.random() * 1000001))}
          >
            Random Value
          </Button>
          <IconButton
            aria-label='reduce'
            onClick={() => {
              setValue((prev) => prev + 1)
            }}
          >
            <AddIcon />
          </IconButton>
        </div>
        <div className='pt-3 mt-5 col-12 d-flex gap-1 justify-content-center align-items-center gap-5'>
          <h3>Duration (ms)</h3>
          <div className='w-50'>
            <Slider
              aria-label='Duration'
              defaultValue={1000}
              valueLabelDisplay='on'
              step={100}
              marks
              min={100}
              max={10000}
              onChange={(e) => {
                setDuration(e.target.value)
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
