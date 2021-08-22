import React from 'react'

import './stats-detail.styles.scss'
import StatsInfo from '../stats-info/stats-info.components'


const StatsDetail = () => (
    <div className='stats-detail'>
        <div className='stats-detail__content'>
            <div className='stats-detail__box'>
                <h1 className='stats-detail__header'>
                    Get <span className='stats-detail__text-dark'>insights</span> that help your business grow.
                </h1>
                <p className='stats-detail__description'>
                    Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.
                </p>
            </div>
            <div className='stats-detail__stats'>
                <StatsInfo unit='10k+' unitInfo='COMPANIES' />
                <StatsInfo unit='314' unitInfo='TEMPLATES' />
                <StatsInfo unit='12M+' unitInfo='QUERIES' />
            </div>
        </div>
        
    </div>
)

export default StatsDetail