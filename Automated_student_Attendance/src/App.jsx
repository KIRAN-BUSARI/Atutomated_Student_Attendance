import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex h-screen items-center justify-center">
      <h1 className='text-3xl text-blue-600'>This is Automated Students Attendance Webiste</h1>
    </div>
  )
}

export default App
