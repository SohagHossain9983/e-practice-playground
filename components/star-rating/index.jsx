import React from 'react';
import ReactStars from 'react-stars'

const StarRating = (props) => {
    return (
        <div id="star-rating" className=" d-flex align-items-center">
            <div className="star-icon">
                <ReactStars
                    count={5}
                    size={18}
                    color2={'#ffd700'} />
            </div>
            <div className='ps-1 mt-0'>
                <p className="mb-0">{props.rating}</p>
            </div>
        </div>
    )
}

export default StarRating
