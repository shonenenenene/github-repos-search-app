import React from 'react';
import './repo.less'
import dateFormat, { masks } from "dateformat"


const Repo = (props) => {
    const repo = props.repo

    return (
        <div className="repo">
            <div className='repo-header'>
                <div className='repo-header-name'><a href={repo.html_url} target="_blank" className='repo-link'>{ repo.name }</a></div>
                <div className='repo-header-stars'>stars: { repo.stargazers_count }</div>
            </div>
            <div className='repo-last-commit'>last commit was { dateFormat(repo.updated_at, "mmmm dS, yyyy, h:MM:ss TT") }</div>
        </div>
    )
}

export default Repo