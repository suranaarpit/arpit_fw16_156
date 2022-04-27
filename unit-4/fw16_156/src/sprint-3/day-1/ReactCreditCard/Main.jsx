import React, { useState } from 'react'
import Form from './ReactForm';
import Card from './ReactCard';
import { Maindiv } from './ReactCard.styled';
const Main = () => {
    const [data, setData] = useState({})
    return (
        <>
            <Maindiv>
                <Form data={data} setData={setData} />
                <Card {...data} />
            </Maindiv>

        </>
    )
}

export default Main