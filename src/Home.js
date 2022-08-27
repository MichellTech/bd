import React, { useState } from 'react'

const Home = () => {
  const [male, setMale] = useState([1, 2, 3, 4, 5, 6, 7])
  const [female, setFemale] = useState([1, 2, 3, 4, 5, 6, 7])
  const [loading, setLoading] = useState(false)
  const [selectedMale, setSelectedMale] = useState('')
  const [selectedFemale, setSelectedFemale] = useState('')

  const handleShuffle = () => {
    setLoading(true)

    setTimeout(() => {
      if (male.length > 0 && female.length > 0) {
        const maleNum = male[Math.floor(Math.random() * male.length)]
        const femaleNum = female[Math.floor(Math.random() * female.length)]

        const newMale = male.filter((num) => num !== maleNum)
        const newFemale = female.filter((num) => num !== femaleNum)

        setSelectedMale(maleNum)
        setMale(newMale)
        setSelectedFemale(femaleNum)
        setFemale(newFemale)
        setLoading(false)
        return
      } else {
        reset()
        setLoading(false)
        return
      }
    }, 3000)
  }
  const reset = () => {
    setFemale([1, 2, 3, 4, 5, 6, 7])
    setMale([1, 2, 3, 4, 5, 6, 7])
    setSelectedFemale('')
    setSelectedMale('')
  }
  return (
    <div className='bg-gray-100'>
      <div className='container pt-10 h-full mx-auto'>
        <div className='flex pt-10 items-center justify-between w-full'>
          <div className='w-2/5 shadow-md flex items-center justify-center h-60 rounded-lg text-white font-bold bg-blue-600'>
            {loading ? (
              <h2 className='text-2xl animate-pulse'>Loading...</h2>
            ) : selectedMale ? (
              <h1 className='text-5xl text-cen'>{selectedMale}</h1>
            ) : (
              <h2 className='text-xl text-center'>Click shuffle to select</h2>
            )}
          </div>
          <div className='w-2/5 shadow-md flex items-center justify-center h-60 rounded-lg text-white font-bold bg-blue-600'>
            {loading ? (
              <h2 className='text-2xl animate-pulse'>Loading...</h2>
            ) : selectedFemale ? (
              <h1 className='text-5xl '>{selectedFemale}</h1>
            ) : (
              <h2 className='text-xl text-center'>Click shuffle to select</h2>
            )}
          </div>
        </div>
        <div className='flex pt-20 items-center justify-center gap-5'>
          <button
            onClick={() => handleShuffle()}
            className='border shadow px-10 hover:bg-blue-600 py-2 rounded-lg bg-blue-400 text-white'
          >
            Shuffle
          </button>
          <button
            onClick={() => reset()}
            className='border shadow hover:bg-red-600 px-6 py-2 rounded-lg bg-red-400 text-white'
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
