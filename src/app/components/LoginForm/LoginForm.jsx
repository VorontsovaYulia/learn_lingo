'use client';

export const LoginForm = () => {
    return (
        <div>
            <h2>Log in</h2>
            <input type="email" placeholder="Email" autoFocus={false}/>
            <input type="password" placeholder="Password" autoFocus={false}/>
            <button>Log in</button>
        </div>
    );
};
