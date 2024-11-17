import React from 'react'

const Btn = ({text}) => {
    return (
        <div>
            <div className="btn">
                <button type="submit">{text}</button>
            </div>
        </div>
    )
}

export default Btn
