import React from 'react';
import { ButtonNew, FormDiv, InputNew } from './ReactCard.styled';
import "./card.css"
const Form = ({ data, setData }) => {

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
    }
    const handleReload = () => {
        window.location.reload()
    }



    return (

        <>
            <FormDiv>
                <form onSubmit={handleSubmit}>
                <label>CARD NUMBER </label>
                    <br />
                    <br />
                    <InputNew type="number" name="number"  max={16} onChange={handleChange} />
                    <br />
                    <br />
                    
                    <label>CARD HOLDER'S NAME</label>
                    <br />
                    <br />
                    <InputNew type="text" name="name" onChange={handleChange} required />
                    <br />
                    <br />
                    <label>EXPIRY DATE</label>
                    <br />
                    <br />
                    <InputNew type="date" maxLength={2} name="month" onChange={handleChange} required />
                    <br />
                    <br />
                    <label>CVV</label>
                    <br />
                    <br />
                    <InputNew
                        type="password"
                        maxLength={3}
                        name="cvv"
                        onChange={handleChange}
                        required
                    />
                    <br />
                    <br />
                    <p style={{color: "white"}}>Payment Amount:  <span style={{color: "green", fontWeight: "bold"}}>12,300</span></p>
                    <br />
                    <ButtonNew style={{cursor: "pointer"}} type="submit" value="PAY" onClick={handleReload}>Pay</ButtonNew>
                </form>
            </FormDiv>
        </>
    )
}

export default Form