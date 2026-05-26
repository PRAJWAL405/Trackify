# Trackify

Trackify is a web application that helps you analyze and plan your YouTube playlist watching schedule. By pasting YouTube playlist URLs, you can instantly see total durations, average video lengths, and calculate exactly how long it will take to finish the playlist.

## Features

- **Playlist Analysis**: View total duration, number of videos, and average video length for any YouTube playlist.
- **Speed Breakdown**: See exactly how much time you can save by watching at different playback speeds (1.25x, 1.5x, 1.75x, 2x).
- **Daily Plan Estimator**: Input your daily watch time window (e.g., 60 minutes/day) and Trackify will calculate how many days it will take to finish the playlist.
- **Dynamic Playback Speed Adjustments**: Select your preferred playback speed directly on the Daily Plan card, and Trackify will dynamically update the exact date of completion (starting from today) and the number of days needed.
- **Support for Partial Playlists**: Calculate durations for specific segments of a playlist using custom start and end indices.

## Tech Stack

- **Frontend**: React, TypeScript, Vite
- **Backend**: Java, Spring Boot
- **API**: YouTube Data API integration

## Running Locally

### Prerequisites
- Node.js & npm (for the frontend)
- Java & Maven (for the backend)

### Backend
1. Navigate to the `trackify-backend` directory.
2. Run the Spring Boot application:
   ```bash
   mvn spring-boot:run
   ```

### Frontend
1. Navigate to the `trackify-frontend` directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Recent Updates
- Added dynamic playback speed selection for Daily Plan estimation, allowing users to accurately forecast completion dates based on custom playback speeds.
