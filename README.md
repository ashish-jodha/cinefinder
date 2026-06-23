# 🎬 CineFinder

A movie discovery application built with React, Vite, and Tailwind CSS.

Users can search for movies, view detailed information, and discover nearby theater showtimes using browser geolocation and location-based services.

## 🌐 Live Demo

👉 **https://cinefinder-six.vercel.app/**

---

## ✨ Features

- 🔍 Search movies using the OMDb API
- 🎬 View movie posters, ratings, runtime, and plot details
- 🛣️ Dynamic routing with React Router
- 📍 Browser-based geolocation support
- 🗺️ Reverse geocoding using OpenStreetMap
- 🎟️ Location-aware theater showcase using mock showtime data
- 📅 Filter showtimes by date categories
- ✨ Skeleton loading states for improved user experience
- 🚨 Custom 404 page and error handling
- 📱 Fully responsive design

---

## 🛠️ Tech Stack

| Technology          | Purpose                  |
| ------------------- | ------------------------ |
| React (Vite)        | Frontend Framework       |
| React Router DOM    | Routing & URL Parameters |
| Tailwind CSS        | Styling                  |
| OMDb API            | Movie Data               |
| OpenStreetMap API   | Reverse Geocoding        |
| Web Geolocation API | User Location Services   |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js** installed.

You will also need an **OMDb API key**.

### Installation

Clone the repository:

```bash
git clone https://github.com/ashish-jodha/cinefinder.git
```

Navigate to the project directory:

```bash
cd cinefinder
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the root directory:

```env
VITE_OMDB_API_KEY=your_actual_api_key_here
```

Start the development server:

```bash
npm run dev
```

---

## 📂 Project Structure

```text
src/
├── App.jsx             # Main router and layout
├── Home.jsx            # Landing page
├── MovieDashboard.jsx  # Data fetching and state management
├── SearchBar.jsx       # Search component
├── MovieInfo.jsx       # Movie details display
├── LocationBanner.jsx  # Geolocation handling
├── TheaterList.jsx     # Theater and showtime display
├── DateSelector.jsx    # Showtime filtering
├── SkeletonCard.jsx    # Loading UI
└── NotFound.jsx        # Custom 404 page
```

---

## 👨‍💻 Author

**Ashish Jodha**
