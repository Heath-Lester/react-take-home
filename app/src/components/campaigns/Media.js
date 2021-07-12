import React from "react"
import { MediaCard } from "./MediaCard"

export const Media = medias => {

    return (
        <article className="campaign--media">
            {medias.medias.map(m => {
                return <MediaCard
                    photo={m.cover_photo_url}
                    download={m.download_url}
                    tracking={m.tracking_link}
                    type={m.media_type}
                />
            })}
        </article>
    )
}