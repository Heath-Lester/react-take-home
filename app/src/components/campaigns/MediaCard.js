import React from "react"

export const MediaCard = ({ photo, download, tracking, type }) => {

    console.log(photo, download, tracking, type)

    if (type === "video") {


        return (
            <div className="media--card">
                <img className="card--photo" src={photo} alt="cover photo" />
                <div className="card--buttons">
                    <button onClick={e => {
                        e.preventDefault()
                        download = { download }
                    }} />
                    <button onClick={e => {
                        e.preventDefault()
                        navigator.clipboard.writeText({ tracking })
                    }} />


                </div>
            </div>
        )
    } else {
        return <></>
    }
}