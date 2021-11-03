import React, {useState} from 'react'
import { Form, Col } from 'react-bootstrap'

export default function Filters({ params, onParamChange }) {

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
                  <select class="nice-select" name="_sort"  onChange={onParamChange}>
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
                <input type="text" name="q"  placeholder="Search your keyword..."/>
                <button onClick={onParamChange} name="searchBtn" type="button"><i class="fas fa-search"></i></button>
              </form>
            </div>
          </div>
        </div>
     </div>

  )
}
