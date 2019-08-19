import React from 'react';

export const HeaderComponent = () => (

    <>
        <div className="row">
            <div>
                <img src="./logo.png" />
            </div>
            <div className="col-md-12">
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Topic 1</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Topic 2</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Topic 3</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Topic 4</a>
                    </li>
                </ul> 
            </div>      
            <div className="col-md-12">          
                <div className="input-group mb-3 col-3 float-right">
                    <input type="search" className="form-control" placeholder="Search" aria-label="Buscar" />
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1"><b>></b></span>
                    </div>
                </div>
            </div>
            
        </div>
    </>

)