import React from 'react'
import '../css/WaterDroplets.css'

const WaterDroplets = () => {
  const getRoundedPosition = (index, totalDroplets) => {
    const percentage = Math.round((index / (totalDroplets - 1)) * 100)
    return `${percentage}%`
  }

  const getRandomSize = () => {
    const minSize = 25
    const maxSize = 50
    return Math.round(Math.random() * (maxSize - minSize) + minSize);
  }

  return (
    <div className="water-droplets-container">
      {[...Array(10)].map((_, index) => {
        const randomSize = getRandomSize()
        return (
          <div
            key={index}
            className="water-droplet"
            style={{
              left: getRoundedPosition(index, 10),
              width: `${randomSize}px`,
              height: `${randomSize}px`,
            }}
          />
        )
      })}
    </div>
  )
}

export default WaterDroplets