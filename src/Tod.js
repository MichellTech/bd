import React, { useState } from 'react'

const Tod = () => {
  const data = {
    1: 'Do you like loud or silent in bed',
    2: 'Whats your current body count',
    3: 'If you met genie, what would be your 3 wishes',
    4: 'Whats your favourite sex position',
    5: "What is something you're glad your mum doesnt know about you",
    6: 'Has anyone accidentally seen you naked? if Yes, who??',
    7: "What is the strangest rumour you've heard about yourself?",
    8: 'Who in the room would you want to see naked',
    9: 'Spin a bottle, whoever it points at gets to dare you',
    10: 'Make eye contact wth the person to your right and moan for 10sec',
    11: 'Freestyle for 15secs',
    12: 'Exchange/Take off two pieces of clothing with the player on your right',
    13: 'Whisper something dirty to the person on your right',
    14: 'Using your elbow, upload a whatsapp status',
    15: 'Spin a bottle, give whoever it points a butt massage',
    16: 'Put 5 different drinks in a cup and drink',
  }
  const [number, setNumber] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
  ])
  const [loading, setLoading] = useState(false)
  const [selectedNumber, setSelectedNumber] = useState('')

  const handleShuffle = () => {
    setLoading(true)

    setTimeout(() => {
      if (number?.length > 0) {
        const nums = number[Math.floor(Math.random() * number.length)]
        const newNumber = number.filter((num) => num !== nums)
        setSelectedNumber(nums)
        setNumber(newNumber)
        return setLoading(false)
      }
      reset()
      return setLoading(false)
    }, 3000)
  }
  const reset = () => {
    setNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])
    setSelectedNumber('')
  }
  return (
    <div className='bg-gray-100'>
      <div className='container pt-10 h-full mx-auto'>
        <div className='flex pt-10 items-center justify-center w-full'>
          <div
            onClick={() => (loading ? () => {} : handleShuffle())}
            className='w-1/2 hover:bg-blue-400 shadow-md cursor-pointer flex items-center justify-center h-60 rounded-lg text-white font-bold bg-blue-600'
          >
            {loading ? (
              <h2 className='text-2xl animate-pulse'>Loading...</h2>
            ) : selectedNumber ? (
              <div className='flex-col items-center flex'>
                <h1 className='text-5xl mb-5 text-cen'>{selectedNumber}</h1>
                {selectedNumber && (
                  <h2 className='text-4xl text-center text-white'>
                    {data[selectedNumber]}
                  </h2>
                )}
              </div>
            ) : (
              <h2 className='text-xl text-center'>
                Click shuffle to reveal number
              </h2>
            )}
          </div>
        </div>
        {/* <div className='flex pt-20 items-center justify-center gap-5'>
          <button
            onClick={() => }
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
        </div> */}
      </div>
    </div>
  )
}

export default Tod
