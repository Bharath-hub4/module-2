# IELTS Speaking Test Registration Form

## Overview

This project implements a responsive, interactive registration form for the IELTS Speaking Test platform using **HTML**, **CSS**, and **JavaScript**.

## Features

- **Form Fields:**
  - **Full Name** (required, max 50 chars)
  - **Email Address** (required, valid format)
  - **Phone Number** (required, exactly 10 digits)
  - **Test Date** (required)
  - **Additional Notes** (optional, max 200 chars)

- **Validation Rules:**
  - All required fields must be filled.
  - Email must be in a valid format.
  - Phone number must be exactly 10 digits.
  - Invalid fields are highlighted with a red border and an error message.
  - Success message displays upon valid submission, and form is cleared.

- **Styling:**
  - Clean, modern design with clear labels and spacing.
  - Uses Flexbox for layout.
  - Responsive: adjusts gracefully for mobile, tablet, and desktop.
  - Interactive feedback with `:hover` and `:focus` effects.

- **Interactivity:**
  - Client-side JavaScript validates fields on submit.
  - Shows error messages dynamically.
  - Success message shown on valid submission.

## Instructions to Run Locally

1. **Download/Unzip Files:**
   - Unzip the folder `Module2_Assignment_<YourName>.zip`.
   - Ensure the following files are present:
     - `registration_form.html`
     - `style.css`
     - `form_validation.js`
     - `README.md`
     - (Screenshots as described below)

2. **Open the Form:**
   - Double-click `registration_form.html` to open it in your browser (no server needed).

3. **Test the Form:**
   - Try submitting with missing or invalid fields to see error messages.
   - Enter valid data and submit to see the success message.
   - Resize the browser or open on different devices to see responsive design.

## Screenshots

### 1. Desktop View
![Desktop Screenshot](screenshots/desktop.png)

### 2. Tablet View
![Tablet Screenshot](screenshots/tablet.png)

### 3. Mobile View
![Mobile Screenshot](screenshots/mobile.png)

### 4. Validation Error Messages
![Validation Error Screenshot](screenshots/validation_errors.png)

### 5. Success Message
![Success Message Screenshot](screenshots/success.png)

> _Replace the above image paths/names with your actual screenshots in a `screenshots/` folder._

## File Structure

```
Module2_Assignment_<YourName>/
├── registration_form.html
├── style.css
├── form_validation.js
├── README.md
└── screenshots/
    ├── desktop.png
    ├── tablet.png
    ├── mobile.png
    ├── validation_errors.png
    └── success.png
```

---

## Validation Rules (Summary)

- **Full Name**: Required, max 50 characters.
- **Email Address**: Required, must be a valid email format.
- **Phone Number**: Required, must be exactly 10 digits (numeric).
- **Test Date**: Required.
- **Additional Notes**: Optional, max 200 characters.

## Author

_Your Name_
