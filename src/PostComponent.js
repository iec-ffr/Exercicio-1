import React from 'react';

export const PostComponent = ({comment,image}) => (
    <>
        <div className="card mb-3 col-md-12">
            <div className="row no-gutters">
                <div className="col-md-4">
                <img src={image} className="card-img" alt="..."/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <p className="card-text text-justify">
                        {comment} 
                    </p>
                </div>
                </div>
            </div>
        </div>        
    </>
)

