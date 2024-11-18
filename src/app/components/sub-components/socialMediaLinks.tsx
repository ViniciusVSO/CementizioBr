import {ComponentType } from "react"

type SocialMediaLinkProps = {
    socialMedia: string,
    Icon: ComponentType,
    link?: string;
}

export default function SocialMediaLink({socialMedia, Icon, link}: SocialMediaLinkProps){
    return(
        <a href={link} style={{textDecoration: "none", color: "white"}} target="_blank" className="flex items-center gap-2 text-white no-underline">
            <Icon />
            <span className=" ">
                {socialMedia}
            </span>
        </a>
    )
}