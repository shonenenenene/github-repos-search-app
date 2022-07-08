import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRepos } from '../actions/repos';
import { setCurrentPage } from '../reducers/reposReducer';
import Repo from './repo/Repo';
import { createPages } from '../func/pagesCreator';
import './main.less'



const Main = () => {

    const dispatch = useDispatch()
    const repos = useSelector( state => state.repos.items )
    const isFetching = useSelector( state => state.repos.isFetching )
    const currentPage = useSelector( state => state.repos.currentPage )
    const totalCount = useSelector( state => state.repos.totalCount )
    const perPage = useSelector(state => state.repos.perPage)
    const [searchValue, setSearchValue] = useState( '' )
    const pagesCount = Math.ceil(totalCount /perPage)
    const pages = []

    createPages(pages, pagesCount, currentPage)

    useEffect( () => {
        dispatch(getRepos(searchValue, currentPage, perPage))
    }, [currentPage] )
    
    function searchHandler() {
        dispatch(setCurrentPage(1))
        dispatch(getRepos(searchValue, currentPage, perPage))
    }

    return (
        <div>
            <div className='search'>
                <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className='search-input' type="text" />
                <button onClick={() => searchHandler()} className='search-btn'>search</button>
            </div>
            {
                isFetching === false
                ?
                    repos.map( repo => <Repo repo={repo} /> )
                :
                    <div className='fetching'>

                    </div>   
                    
            }
            <div className='pages'>
                {pages.map(( page, index ) => <span className={currentPage == page ? "current-page" : "page"} onClick={() => dispatch(setCurrentPage(page))} key={ index } >{ page }</span>)}
            </div>
        </div>
    )
}

export default Main