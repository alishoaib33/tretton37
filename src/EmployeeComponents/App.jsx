import React, {useState} from 'react';
import useFetchProfiles from './useFetchProfiles'
import Profile from './Profile.jsx'
import NoProfileFound from './NoProfileFound.jsx'
import ProfilesPagination from './ProfilesPagination.jsx';
import Filters from './Filters.jsx';
import CatalogMagic from './CatalogMagic'

function App() {
    const [params, setParams] = useState({})
    const [page, setPage] = useState(1)
    const {profiles, loading, error, hasNextPage, totalItemsReturned} = useFetchProfiles(params, page)
    const linkedinUrl = 'https://linkedin.com/';
    const githubUrl = 'https://github.com/';
    const twitterUrl = 'https://twitter.com/';

    function ManageParamChange(e) {

        if (typeof e.target !== "undefined" && e.target.name == '_sort') {
            let sortBy = e.target.value.split("&")['0']
            let sortOrder = e.target.value.split("&")['1']
            setPage(1)
            setParams(prevParams => {
                return {...prevParams, ['_sort']: sortBy, ['_order']: sortOrder}
            })
        } else {
            var param = (typeof e.current !== "undefined" ? e.current.name : e.target.name)
            var value = (typeof e.current !== "undefined" ? e.current.value : e.target.value)
            setPage(1)
            setParams(prevParams => {
                return {...prevParams, [param]: value, ['_sort']: 'name,office', ['_order']: 'desc,asc'}
            })
        }


    }

    return (

        <div class="container">
            <h1 class="mb-4">The fellowship of the tretton37</h1>
            <Filters params={params} onParamChange={ManageParamChange}/>
            {loading && <CatalogMagic/>}
            {error && <h1>Error. Try Refreshing.</h1>}
            <div class="row">
                {profiles.length > 0 ? profiles.map((profile, index) => {
                    return <Profile key={index + '-' + profile.phoneNumber} profile={profile} linkedinUrl={linkedinUrl}
                                    githubUrl={githubUrl} twitterUrl={twitterUrl}/>
                }) : <NoProfileFound/>}
            </div>
            {totalItemsReturned < 8 ? '' :
                <ProfilesPagination page={page} setPage={setPage} hasNextPage={hasNextPage}/>}
        </div>
    )
}

export default App;
