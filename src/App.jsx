import { useEffect, useState } from 'react'
import InputRange from './components/InputRange/InputRange'

function App() {
  const [offsetX, setOffsetX] = useState(2)
  const [offsetY, setOffsetY] = useState(2)
  const [blurRadius, setBlurRadius] = useState(2)
  const [blurSpread, setBlurSpread] = useState(2)
  const [color, setColor] = useState('#a19b9b')
  const shadow = `${offsetX}px ${offsetY}px ${blurRadius}px ${blurSpread}px ${color}`
  const [cssValue, setCssValue] = useState(shadow)
  useEffect(() => {
    setCssValue(shadow)
  })
  return (
    <div
      className='App'
      style={{ boxShadow: shadow }}
    >
      <InputRange
        className={'offset-x'}
        label={'Offset X'}
        type={'range'}
        value={offsetX}
        onChange={(e) => setOffsetX(e.target.value)}
      />
      <InputRange
        className={'offset-y'}
        label={'Offset Y'}
        type={'range'}
        value={offsetY}
        onChange={(e) => setOffsetY(e.target.value)}
      />
      <InputRange
        className={'blur-radius'}
        label={'Blur Radius'}
        type={'range'}
        value={blurRadius}
        onChange={(e) => setBlurRadius(e.target.value)}
      />
      <InputRange
        className={'blur-spread'}
        label={'Blur Spread'}
        type={'range'}
        value={blurSpread}
        onChange={(e) => setBlurSpread(e.target.value)}
      />
      <InputRange
        className={'color'}
        label={'Color'}
        type={'color'}
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <InputRange
        className={'css-value'}
        label={'CSS box-shadow'}
        type={'text'}
        value={cssValue}
        onChange={(e) => setCssValue(e.target.value)}
        readOnly={true}
      />
    </div>
  )
}

export default App
