# NexMeet

> **Meet. Connect. Grow.**

NexMeet is a modern web application designed to help people connect with strangers through meaningful conversations. The primary goal of the platform is to reduce social anxiety by providing a safe and engaging environment where users can interact with new people, build confidence, and improve their communication skills.

Whether you're looking to make new friends, practice conversations, or step outside your comfort zone, NexMeet makes meeting people simple and accessible.

---

## Overview

Many people struggle with social anxiety, lack of confidence, or difficulty initiating conversations with new people. NexMeet addresses this challenge by creating a platform where users can discover and join conversations with strangers in a secure and user-friendly environment.

The platform focuses on encouraging healthy social interactions while providing an intuitive experience for both new and returning users.

---

## Features

### User Authentication
- Secure Sign Up and Login
- User Profile Management
- Protected Routes
- Session Management

### Meet New People
- Connect with strangers
- Discover people with similar interests
- Join conversations effortlessly

### Dashboard
- View your connections
- Track your activities

### Responsive Design
- Mobile-friendly interface
- Modern UI
- Smooth user experience
- Optimized for different screen sizes

---

## Tech Stack

### Frontend
- React.js
- Vanilla CSS
- BootStrap
- JavaScript
- Material UI

### Backend
- Express.js
- Node.js
- Bcrypt
- Socket.io
- HTTP - Status
- Cors

### Database
- Mongoose
- NoSQL

### Deployment
- Render

---

## Project Structure

```
NexMeet
│
├── Backend/
│       └── srs/
│           ├──── controllers/
│           │       ├─── socketManager.js
│           │       └─── user.controller.js
│           │
│           ├──── models/
│           │       ├──── meeting.model.js
│           │       └──── users.model.js
│           │
│           ├──── routes/
│           │       └──── user.route.js
│           │
│           └──── app.js
│
├── Frontend/
│           ├──── public/
│           │        ├──── background.png
│           │        └──── mobile.png
│           │
│           ├──── src/
│           │        ├──── contexts/
│           │        │         ├──── AuthContext.jsx
│           │        │         └──── backend.code-workspace
│           │        │
│           │        ├──── pages/
│           │        │         ├──── authentication.jsx
│           │        │         ├──── history.jsx
│           │        │         ├──── home.jsx
│           │        │         ├──── landing.jsx
│           │        │         └──── VideoMeet.jsx
│           │        │
│           │        ├──── styles/
│           │        │         └──── videoComponent.module.css
│           │        │
│           │        ├──── utils/
│           │        │         └──── withAuth.jsx
│           │        │
│           │        ├──── App.css
│           │        ├──── App.jsx
│           │        ├──── environmen.js
│           │        ├──── index.css
│           │        └──── main.jsx
│           │
│           └──── index.html
│
├── .gitignore
│
└── README.md
```

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/SaGAR-2609/NexMeet.git
```

### Navigate to the Project

```bash
cd NexMeet
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env.local` file in the project root.

```env
MONGODB_LINK=YOUR_MONGODB_URL_LINK
```

### Start Development Server

```bash
npm run dev
```

Visit:

```
http://localhost:3000
```

---

## How It Works

1. Create an account or log in.
2. Complete your profile.
3. Connect with strangers based on shared interests.
4. Start meaningful conversations.
5. Build confidence through regular interactions.

---

## Motivation

Social anxiety affects millions of people worldwide and often makes it difficult to start conversations or meet new people.

NexMeet was built to provide a comfortable online space where users can practice communication, interact with strangers in a positive environment, and gradually improve their social confidence.

---

## Future Enhancements

- AI-based conversation suggestions
- Interest-based matching
- Friend requests
- Community groups
- Event-based meetups
- Profile verification
- Reporting and moderation system
- Dark mode
- Mobile application

---

## Security

- Secure Authentication
- Protected User Data
- Role-Based Access Control
- Secure Database Management
- Input Validation

---

## Learning Outcomes

This project helped in understanding:

- Full Stack Web Development
- React.js
- JavaScript
- Authentication
- Database Design
- API Integration
- Responsive UI Design
- State Management
- Deployment on Render
- Git & GitHub Workflow

---

## Contributing

Contributions are welcome!

If you'd like to improve NexMeet:

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push the branch

```bash
git push origin feature-name
```

5. Open a Pull Request

---

## License

This project is developed for educational and learning purposes. You are free to use, modify, and enhance it for personal or academic projects.

---

## Author

**Sagar Choubey**

GitHub: https://github.com/SaGAR-2609

Project Repository:
https://github.com/SaGAR-2609/NexMeet

---

## Show Your Support

If you found this project useful, consider giving it a ⭐ on GitHub.

It motivates future development and helps others discover the project.