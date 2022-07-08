import React from 'react';
import './repo.less'


const Repo = (props) => {
    const repo = props.repo

    return (
        <div className="repo">
            <div className='repo-header'>
                <div className='repo-header-name'>{ repo.name }</div>
                <div className='repo-header-stars'>stars: { repo.stargazers_count }</div>
            </div>
            <div className='repo-last-commit'>{ repo.updated_at }</div>
            <a href={repo.html_url} className='repo-link'>linkkkk</a>
        </div>
    )
}

export default Repo