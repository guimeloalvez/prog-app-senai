import React from 'react'
import './Posts.css'

function Post({p}) {
    const {id, emoji, texto, hashtags, curtidas} = p
    return (
        <div className="cont-post">
            <span className="emoji-post">{emoji}</span>
            <div className="conteudo-post">
                <p>{texto}</p>
                <small>{hashtags.join(' ')}</small>
            </div>
            <span className="curtidas-post">❤️ {curtidas}</span>
        </div>
    )
}

export default Post