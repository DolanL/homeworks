import React from 'react'
import s from "./Error404.module.css"

function Error404() {
    return (
        <div className={s.section}>
            <div className={s.Error}>Error 404</div>
            <div>This Page doesn't exist!</div>
            <div>Would you like to learn about HTTPS errors <a style={{color:"white"}} href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status">https://developer.mozilla.org/en-US/docs/Web/HTTP/Status</a></div>
        </div>
    )
}

export default Error404
