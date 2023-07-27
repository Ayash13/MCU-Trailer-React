import React from 'react';
import './App.css';

import guardiansBackground from './images/gotg.jpg';
import spidermanBackground from './images/spiderman.jpg';
import thorBackground from './images/thor.jpg';

function App() {
  const categories = [
    {
      title: 'Guardians of the Galaxy',
      background: guardiansBackground,
      videos: [
        {
          id: 'd96cjJhvlMA',
          title: 'Guardian of The Galaxy Vol 1',
          description:
            'Brash space adventurer Peter Quill (Chris Pratt) finds himself the quarry of relentless bounty hunters after he steals an orb coveted by Ronan, a powerful villain.',
        },
        {
          id: 'wUn05hdkhjM',
          title: 'Guardian of The Galaxy Vol 2',
          description:
            'Peter Quill and his fellow Guardians are hired by a powerful alien race, the Sovereign, to protect their precious batteries from invaders.',
        },
        {
          id: 'u3V5KDHRQvk',
          title: 'Guardian of The Galaxy Vol 1',
          description:
            'Still reeling from the loss of Gamora, Peter Quill must rally his team to defend the universe and protect one of their own.',
        },
      ],
    },
    {
      title: 'Spiderman',
      background: spidermanBackground,
      videos: [
        {
          id: 'n9DwoQ7HWvI',
          title: 'Spiderman Homecoming',
          description: 'Thrilled by his experience with the Avengers, young Peter Parker returns home to live with his Aunt May.',
        },
        {
          id: 'rk-dF1lIbIg',
          title: 'Spiderman Far From Home',
          description:
            'Peter Parker and his friends go on a European vacation, where Peter finds himself agreeing to help Nick Fury uncover the mystery of several elemental creature attacks.',
        },
        {
          id: 'JfVOs4VSpmA',
          title: 'Spiderman No Way Home',
          description:
            "With Spider-Man's identity now revealed, our friendly neighborhood web-slinger is unmasked and no longer able to separate his normal life as Peter Parker from the high stakes of being a superhero.",
        },
      ],
    },
    {
      title: 'Thor',
      background: thorBackground,
      videos: [
        {
          id: 'ue80QwXMRHg',
          title: 'Thor Ragnarok',
          description:
            'As the son of Odin (Anthony Hopkins), king of the Norse gods, Thor (Chris Hemsworth) will soon inherit the throne of Asgard from his aging father.',
        },
        {
          id: 'npvJ9FTgZbM',
          title: 'Thor The Dark World',
          description:
            'In ancient times, the gods of Asgard fought and won a war against an evil race known as the Dark Elves. The survivors were neutralized, and their ultimate weapon was buried in a secret location.',
        },
        {
          id: 'Go8nTmfrQd8',
          title: 'Thor Love and Thunder',
          description:
            "Thor embarks on a journey unlike anything he's ever faced -- a quest for inner peace. However, his retirement gets interrupted by Gorr the God Butcher.",
        },
      ],
    },
  ];

  return (
    <div className="app">
      <header className="app-header">
        <h1>Marvel Cinematic Universe</h1>
      </header>
      <main className="app-content">
        {categories.map((category) => (
          <section key={category.title} className="category-section">
            <div
              className="category-background"
              style={{ backgroundImage: `url(${category.background})` }}
            >
              <div className="category-overlay">
                <h2 className="category-title">{category.title}</h2>
              </div>
            </div>
            <div className="video-container">
              {category.videos.map((video) => (
                <div key={video.id} className="video-card">
                  <iframe
                    title={video.title}
                    src={`https://www.youtube.com/embed/${video.id}`}
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                  <h3>{video.title}</h3>
                  <p>{video.description}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default App;