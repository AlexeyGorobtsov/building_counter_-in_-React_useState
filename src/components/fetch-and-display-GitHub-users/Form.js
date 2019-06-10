import React from 'react';
import axios from 'axios';

const { useState } = React;

export const Form = props => {
    const [ username, setUsername ] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        axios
            .get(`https://api.github.com/users/${username}`)
            .then(res => {
                props.onSubmit(res.data);
                setUsername('')
            })
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                   value={username}
                   onChange={e => setUsername(e.target.value)}
                   placeholder={'GitHub username'}
                   required
            />
            <button type={'submit'}>Add card</button>
        </form>
    )
};