import React from 'react'
import '../css/WaterDroplets.css'

const WaterDroplets = () => {
  const getRoundedPosition = (index, totalDroplets) => {
    const percentage = Math.round((index / (totalDroplets - 1)) * 100)
    return `${percentage}%`
  }

  return (
    <div className="water-droplets-container">
      {[...Array(10)].map((_, index) => (
        <div
          key={index}
          className="water-droplet"
          style={{ left: getRoundedPosition(index, 10) }}
        />
      ))}
    </div>
  )
}

export default WaterDroplets