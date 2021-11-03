import React from 'react'

export default function ProfilesPagination({page, setPage, hasNextPage, totalProfile}) {
    function adjustPage(amount) {
        setPage(prevPage => prevPage + amount)
    }

    return (

        <div className="row">
            <div className="col-lg-12 d-flex align-items-center">
                <div className="pagination ml-auto">
                    {page !== 1 ? <a href="#">&laquo;</a> : ''}
                    {page !== 1 ? <a href="#" onClick={() => setPage(1)}>1</a> : ''}
                    {page > 2 ? <a href="#" onClick={() => adjustPage(-1)}>{page - 1}</a> : ''}
                    <a className="active" href="#">{page}</a>
                    {hasNextPage ? <a href="#" onClick={() => adjustPage(1)}>{page + 1}</a> : ''}
                    {hasNextPage ? <a href="#" onClick={() => adjustPage(1)}>&raquo;</a> : ''}
                </div>


            </div>
        </div>

    )
}
