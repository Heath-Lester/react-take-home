import React, { useEffect, useContext } from "react"
import { CampaignContext } from "./CampaignProvider"
import { CampaignLogo } from "./CampaignLogo"
import { Media } from "./Media"

export const Campaigns = props => {

    const { getCampaigns, campaigns } = useContext(CampaignContext)


    useEffect(() => {
        getCampaigns()
    }, [])
    
    if (campaigns.hasOwnProperty("campaigns")) {
        return (
            <section className="container--campaigns">
                {campaigns.campaigns.map(c => {
                    return (<article className="campaign">
                        <CampaignLogo name={c.campaign_name} icon={c.campaign_icon_url} payPerInstall={c.pay_per_install} />
                        <Media medias={c.medias} />
                    </article>)
                })}
            </section>
        )
    } else {
        return <></>
    }
}