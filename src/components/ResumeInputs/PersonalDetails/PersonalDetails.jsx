
import { useState } from "react"

const PersonalDetails = () => {
    const [show, setShow] = useState(false)
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [address, setAddress] = useState('')

    const toggleShow = () => {
        setShow(prevShow => !prevShow)
    }

    const handleFullName = e => setFullName(e.target.value)
    const handleEmail = e => setEmail(e.target.value)
    const handlePhoneNumber = e => setPhoneNumber(e.target.value)
    const handleAddress = e => setAddress(e.target.value)
    
    

    return (
        <div className="show-container">
            <div 
                className="show-toggle"
                onClick={() => toggleShow()}>
                <h2>Personal Details</h2>


            </div>

            {show && (
                <form>
                    <label htmlFor="full-name">Full name
                        <input type="text" id="full-name" name="fullName" value={fullName} onChange={e => handleFullName(e)}/>
                    </label>

                    <label htmlFor="email">Email
                        <input type="email" id="email" name="email" value={email} onChange={e => handleEmail(e)}/>
                    </label>

                    <label htmlFor="phone-number">Phone number
                        <input type="tel" id="phone-number" name="phoneNumber" value={phoneNumber} onChange={e => handlePhoneNumber(e)}/>
                    </label>

                    <label htmlFor="address">Address
                        <input type="text" id="address" name="address" value={address} onChange={e => handleAddress(e)}/>
                    </label>
                </form>
            )}
    
        </div>
    )   
}

export default PersonalDetails