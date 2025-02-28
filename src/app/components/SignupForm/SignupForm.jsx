'use client';

export const SignupForm = () => {
    return (
        <div>
            <h2>Sign up</h2>
            <input type="email" placeholder="Email" autoFocus={false}/>
            <input type="password" placeholder="Password" autoFocus={false}/>
            <input type="password" placeholder="Confirm Password"autoFocus={false} />
            <button>Sign up</button>
        </div>
    );
};
