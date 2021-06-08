import React, { useEffect } from 'react'

const Error = ({ code, title, description }) => {
    useEffect(() => {
        document.title = ('Error ' + code + ' | ' + title) || 'Error'

        return () => {
            document.title = '00 Team'
        }
    }, [document])

    return (
        <div className="error-stuffs">
            <h2 className="error-code">{code }</h2>
            <h3 className="error-title">{ title }</h3>
            <p className="error-description">{ description }</p>
        </div>
    )
}


Error.defaultProps = {
    code: 'None',
    title: 'None',
    description: 'None',
}

export default Error
