import React from 'react'
import GithubLogo from '../assets/svg/github.svg'
import ExternalLink from '../assets/svg/external.svg'


const ProjExternalLinks = (props) => {
    const { card_or_proj, proj_id, proj_gitlink, proj_livelink } = props;
    console.log(proj_livelink)
    return (
        <ul className={`${card_or_proj}-external-links`}>
            <li className={`${card_or_proj}-external-links-li`}>
                <a href={proj_gitlink} className='-github-link' aria-label={`${proj_id} on github`}>
                    <GithubLogo/>
                </a>
            </li>
            {
                proj_livelink &&
                <li className={`${card_or_proj}-external-links-li`}>
                <a href={proj_livelink} className="card-live-link" aria-label={`${proj_id} live application`}>
                    <ExternalLink />
                </a>
            </li>
            }
        </ul>

    )
}

export default ProjExternalLinks
