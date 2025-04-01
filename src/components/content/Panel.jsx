import React from 'react'
import Icon from './Icon'
import Text from './Text'
import PanelList from './PanelList'


const Panel = () => {
  return (
    <div className='flex bg-them font-Iran'>
      <div className='w-66 max-h-[620px] mt-4 mr-4 flex flex-wrap flex-col justify-start gap-5 items-start'>
        <Icon />
        <Text />
        <PanelList />
      </div>
    </div>

  )
}

export default Panel