import React from 'react';

export const Card = props => {
    return (
        <div style={{margin: '1em'}}>
            <img src={props.avatar_url} alt="avatar" style={{width: '70px'}}/>
            <div>
                <div style={{fontWeight: 'bold'}}>{props.login}</div>
                <div>{props.blog}</div>
            </div>
        </div>
    )
};