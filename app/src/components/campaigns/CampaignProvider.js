
import React, { useState } from 'react'

export const CampaignContext = React.createContext()

export const CampaignProvider = props => {

    const [campaigns, setCampaigns] = useState([])
    console.log(campaigns)

    const getCampaigns = () => {
        return fetch(`https://www.plugco.in/public/take_home_sample_feed`, {
            "method": "GET"
        }
        )
            .then(response => response.json())
            .then(response => setCampaigns(response))
    }

    return (
        <CampaignContext.Provider value={{
            getCampaigns,
            campaigns
        }}>
            {props.children}
        </CampaignContext.Provider>
    )

}