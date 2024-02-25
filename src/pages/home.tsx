// export default function Home() {
//     return (
//         <div>
//             <h1>Home</h1>
//         </div>
//     );
// }
// import React from 'react';

import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

export default function Home() {
    return (
        <div className="landing-page">
            <h1>Welcome to ImpactAura !!!</h1>
            <p>Where every action counts towards a better world.</p>
            <Link to="/login">
                <button className="get-started-button">Get Started</button>
            </Link>
        </div>
    );
}
