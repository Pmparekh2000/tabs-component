import React, { useState } from 'react'

const Tabs = ({tabs=[], apiData={}, currentTabSelected=0, onTabChangeHandler=() => {}}) => {
  const [currentTab, setCurrentTab] = useState(null);
  const [currentTabIndex, setCurrentTabIndex] = useState(currentTabSelected);

  const handleTabChange = (tab, index) => {
    onTabChangeHandler(index);
    const {component: Component, props: defaultProps} = tab;
    setCurrentTab(<Component {...defaultProps} {...apiData[index]} />);
    setCurrentTabIndex(index);
  };

  return (
    <div className='tabs'>
        <div className='tabs__container'>
            {
                tabs?.map((tab, index) => {
                    return (
                        <button className={`${currentTabIndex === index ? 'active' : ''}`} key={tab?.id} onClick={() => handleTabChange(tab, index)}>{tab?.title}</button>
                    )
                })
            }
        </div>
        <div className='tabs__content'>
            {currentTab ? currentTab : <div>Select a tab</div>}
        </div>
    </div>
  )
}

export default Tabs