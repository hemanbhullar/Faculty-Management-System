import React from 'react'

const SetAdminCredentialsButton = () => {
    const setAdminCredentials = (e) => {
        e.preventDefault();
        // Retrieve existing faculty credentials or initialize an empty array
        const facultyCredentials = JSON.parse(localStorage.getItem('facultyCredentials')) || [];

        //check if the admin role is present in any of the faculty credentials
        const isAdmin = facultyCredentials.some(credentials => credentials.role === 'admin');

        if (!isAdmin) {
            const adminEmail = prompt('Enter admin email:');
            const adminPassword = prompt('Enter admin Password:');

            // Create an object for the admin credentials
            const adminCredentials = {
                email: adminEmail,
                password: adminPassword,
                role: 'admin',
            };
            // Add the admin credentials to the faculty credentials array
            facultyCredentials.push(adminCredentials);

            // Store the updated faculty credentials array in local storage
            localStorage.setItem('facultyCredentials', JSON.stringify(facultyCredentials));

            // Hide the button
            const setCredentialsButton = document.querySelector('.setAdminText');
            setCredentialsButton.innerHTML = 'Successfully Created';
        } else {
            alert('Admin credentials are already set.');
        }

    }
    return (
        <div>
            <button id='set-credentials-button' onClick={setAdminCredentials} ><span className='setAdminText'> Set Admin Credentials</span></button>
        </div>
    )
}

export default SetAdminCredentialsButton;