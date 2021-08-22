import React from 'react'

import './stats-page.styles.scss'
import StatsDetail from '../../components/stats-detail/stats-detail.component';
import StatsImage from '../../components/stats-image/stats-image.component';

const StatsPage = () => (
    <div className='stats-page'>
        <StatsDetail />
        <StatsImage />
    </div>
)

export default StatsPage;