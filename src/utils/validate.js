export const checkValidData = ({ email, password }) => {
    // Adjusted regex for email validation
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Password regex to require at least one uppercase, lowercase, digit, and minimum 8 characters
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    if (!isEmailValid.test(email)) return "Email ID is not valid";
    if (!isPasswordValid.test(password)) return "Password is not valid";

    return null;
};
