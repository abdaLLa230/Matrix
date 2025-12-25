
# Matrix — Games Showcase (React + Vite)

Overview
--------
Matrix Games is a React + Vite web frontend for showcasing games. It uses TailwindCSS and Sass for styling, Redux Toolkit for state management, and includes features like infinite scrolling, per-game detail pages, and Progressive Web App (PWA) support via vite-plugin-pwa.


## Project Description
Matrix Games is a web project built with React and Vite, featuring multiple pages including:  
- Home  
- Games  
- Contact  
- About  
- Game Details  

On the Game Details page, users can view detailed information about each game, including specifications, system requirements, and links to watch or try the game.

## Technologies Used
- React  
- Vite  
- Sass (SCSS)
- Axios (for API calls)
- Tailwind CSS (for styling)  
- React Router (for navigation)  
- Additional libs: Swiper, Framer Motion, react-select


## Installation and Running
1. Make sure Node.js is installed on your machine.  
2. Clone the repository to your local machine.  
3. Open your terminal inside the project folder and run:  

npm install
to install all dependencies.  
4. To run the project locally, run:  

npm run dev
5. Open your browser and go to:
http://localhost:5173

to view the project.

## How to Use  
- Navigate between pages using the top menu.  
- On the Games page, select a game to view its details.  
- On the Game Details page, you will find full information about the game, system requirements, and links to watch or try it.

## Notes & Implementation Details
API calls are done via Axios. Update endpoints or env variables as needed.
Redux slice games-slice.jsx manages game loading and storage.
Styling blends Tailwind CSS with SCSS component styles for flexibility.
PWA support uses vite-plugin-pwa configured in vite.config.js. This enables offline capabilities and installability.


## Project Structure (Important)

src/
  main.jsx            
  App.jsx             
  index.css, App.css  
  mixins.scss         
  Components/
    Navbar/
    Game/
    Footer/
    ScrollToTopBTN/
  Pages/
    Home.jsx
    Games.jsx
    GameDetails.jsx
    About.jsx
    Contact.jsx
    Loading.jsx
    NotFound.jsx
    Layout.jsx
  store/
    store.jsx        
    slices/
      games-slice.jsx 
public/
  manifest.json       
vite.config.js        
tailwind.config.js    
postcss.config.js   

----

## Contribution

- Abdallah Ali Abdallah           23017771       NT
- Ibrahim Yasser Abdelmoniem       23017792       NT
- Mohamed Hany Abdelrahman        23017738       CS
- Abdelrahman Saber Gaber         23017855       NT
- Omar Sameh Sabry                23017897       CS
- Ahmed Mohamed Mohamed           202202620      CS

---
