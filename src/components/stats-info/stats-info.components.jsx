import React from 'react'

import './stats-info.styles.scss'

const StatsInfo = ({unit,unitInfo})=>(
    <div className='stats-info'>
        <p className='stats-info__unit'>{unit}</p>
        <p className='stats-info__unit-info'>{unitInfo}</p>
    </div>
)

export default StatsInfo