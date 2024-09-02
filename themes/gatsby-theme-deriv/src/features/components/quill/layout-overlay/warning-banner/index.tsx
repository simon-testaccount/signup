import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import WarningText from './warning-text'
import { useShowCfdBanner } from 'components/hooks/use-show-cfd-banner'

const WarningBanner = () => {
    const show_banner = useShowCfdBanner()

    const loss_percent = 70.78

    if (show_banner) {
        return <WarningText loss_percent={loss_percent} />
    }
    return <></>
}

export default WarningBanner
