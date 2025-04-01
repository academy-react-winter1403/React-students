import React from 'react'
import Icon from './Icon'
import Text from './Text'
import PanelList from './PanelList'
import DarkMode from '../common/DarkMode'


const Panel = () => {
  return (
      <div className='w-[1440px] h-[1024px] bg-them font-Iran mt-4 mr-4 flex flex-nowrap border-red-300 border-2'>
        <div className='flex flex-wrap flex-col justify-start gap-5 items-start'>
          <Icon />
          <Text />
          <PanelList />
        </div>
        <div className='w-full h-12 border-2 border-purple-400'>
            <DarkMode />
        </div>
    </div>
  )
}

export default Panel