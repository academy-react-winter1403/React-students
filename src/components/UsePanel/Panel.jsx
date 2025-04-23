import React from 'react'
import Icon from './Icon'
import Text from './Text'
import PanelList from './PanelList'
import Header from './HeaderList'


const Panel = () => {
  return (
      <div className='w-[1520px] h-[1024px] bg-them font-Iran flex flex-nowrap'>
        <div className='flex flex-wrap flex-col justify-start gap-5 items-start mr-4'>
          <Icon />
          <Text />
          <PanelList />
        </div>
        <div className='w-full h-10'>
            <Header />
        </div>
    </div>
  )
}

export default Panel