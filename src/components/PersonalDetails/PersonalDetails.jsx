import { useState, useEffect } from "react";
import './PersonalDetails.scss'
import downArrow from '../../assets/down.png'
const PersonalDetails = ({ saveDisplayPersonal }) => {
    const [show, setShow] = useState(true);
    const [imgToggle, setImgToggle] = useState(true)
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');


    const toggleShow = () => {
        setShow(prev => !prev);
        setImgToggle(prev => !prev)
    };
    useEffect(() => {
        saveDisplayPersonal({
            fullName,
            email,
            phoneNumber,
            address
        });
    }, [fullName, email, phoneNumber, address]);

    const handleFullName = ({ target }) => {
        setFullName(target.value)

    };
    const handleEmail = ({ target }) => {
        setEmail(target.value);

    }
    const handlePhoneNumber = ({ target }) => {
        setPhoneNumber(target.value);

    }
        
    const handleAddress = ({ target }) => {
        setAddress(target.value)

    }

    return (
        <div className="personal-show-container">
            <div className="show-toggle" onClick={toggleShow}>
                <h2>Personal Details</h2>
                <img src={downArrow} alt="down arrow" className={imgToggle ? 'rotate' : 'unrotate'}/>
            </div>

            {show && (
                <form>
                    <label htmlFor="full-name">Full Name
                        <input type="text" id="full-name" name="fullName" value={fullName} onChange={handleFullName} required/>
                    </label>

                    <label htmlFor="email">Email
                        <input type="email" id="email" name="email" value={email} onChange={handleEmail} required/>
                    </label>

                    <label htmlFor="phone-number">Phone Number
                        <input type="tel" id="phone-number" name="phoneNumber" value={phoneNumber} onChange={handlePhoneNumber} required/>
                    </label>

                    <label htmlFor="address">Address
                        <input type="text" id="address" name="address" value={address} onChange={handleAddress} required/>
                    </label>
                </form>
            )}
        </div>
    );
};

export default PersonalDetails;
