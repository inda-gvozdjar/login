import React, { useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { auth } from "../../config/Fire";

const ForgotPass = () => {
    const [email, setEmail] = useState("");
    const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
    const [error, setError] = useState(null);
    const onChangeHandler = event => {
        const { name, value } = event.currentTarget;
        if (name === "userEmail") {
            setEmail(value);
        }
    };
    const sendResetEmail = event => {
        event.preventDefault();
        auth
            .sendPasswordResetEmail(email)
            .then(() => {
                setEmailHasBeenSent(true);
                setTimeout(() => { setEmailHasBeenSent(false) }, 3000);
            })
            .catch(() => {
                setError("Error resetting password");
            });
    };
    return (
        <div className="resset-container">
            <div className="resset-position">
                <h1 className="resset-tittle"> Reset your Password </h1>
                <div>
                    <form action="" className="reset-form">
                        {emailHasBeenSent && (
                            <div>
                                An email has been sent to you!
                            </div>
                        )}
                        {error !== null && (
                            <div className="Error">
                                {error}
                            </div>
                        )}

                        <input
                            type="email"
                            name="userEmail"
                            id="userEmail"
                            value={email}
                            placeholder="Input your email"
                            onChange={onChangeHandler}
                            className="email-input"
                        />
                        <button className="ressetBtn" onClick={event => {
                            sendResetEmail(event);
                        }}
                        >Send me a reset link </button>
                    </form>
                    <Link to="/login">
                        <h5> &larr; back to sign in page</h5> </Link>
                </div>
            </div>
        </div>
    );
};
export default ForgotPass;