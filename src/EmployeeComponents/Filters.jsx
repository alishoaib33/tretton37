import React, {useState, useRef} from 'react'

export default function Filters({params, onParamChange}) {
    const inputRef = React.createRef();
    const onClick = () => {
        onParamChange(inputRef);
    }
    return (
        <div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="sorting-wrap">
                        <ul>
                            <li>
                                <div class="grid-list-nav">
                                </div>
                            </li>
                            <li>
                                <div class="short-by text-center">
                                    <select class="nice-select" name="_sort" onChange={onParamChange}>
                                        <option value="name&asc">Sort By Name Asc</option>
                                        <option value="name&desc">Sort By Name Desc</option>
                                        <option value="office&asc">Sort By Office Asc</option>
                                        <option value="office&desc">Sort By Office Desc</option>
                                    </select>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-12">
                    <div class="search-bar mb-30">
                        <form action="#">
                            <input type="search" name="q" ref={inputRef} placeholder="Search your keyword..."/>
                            <button onClick={onClick} name="searchBtn" type="button"><i class="fas fa-search"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}
