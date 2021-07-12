import React from "react"

export const CampaignLogo = ({ name, icon, payPerInstall }) => {

    return (
        <header className="campaign--header">
            <img className="campaign--logo" src={icon} alt={"logo"} />
            <div className="campaign--info">
                <h2>{name}</h2>
                <h3>{payPerInstall} per install</h3>
            </div>
        </header>
    )
}