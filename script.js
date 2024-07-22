document.addEventListener ('DOMContentLoaded', () => {
  const themeToggle = document.querySelector ('.theme-toggle');
  const body = document.body;

  themeToggle.addEventListener ('click', () => {
    body.classList.toggle ('light-mode');
    themeToggle.textContent = body.classList.contains ('light-mode')
      ? '🌙'
      : '☀️';
  });

  const modal = document.getElementById ('video-modal');
  const videoFrame = document.getElementById ('video-frame');
  const closeBtn = document.getElementsByClassName ('close')[0];
  const watchDemoBtns = document.querySelectorAll ('.watch-demo');
  const viewCvBtn = document.getElementById ('view-cv');

  watchDemoBtns.forEach (btn => {
    btn.addEventListener ('click', e => {
      e.preventDefault ();
      const videoUrl = btn.getAttribute ('data-video');
      videoFrame.src = videoUrl;
      modal.style.display = 'block';
    });
  });

  closeBtn.onclick = () => {
    modal.style.display = 'none';
    videoFrame.src = '';
  };

  window.onclick = event => {
    if (event.target == modal) {
      modal.style.display = 'none';
      videoFrame.src = '';
    }
  };

  viewCvBtn.addEventListener ('click', e => {
    e.preventDefault ();
    window.open ('Henry Dioniz Transcripts.pdf', '_blank');
  });

  const skills = {
    'Web Development': [
      {
        name: 'HTML5',
        badge: 'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
      },
      {
        name: 'CSS3',
        badge: 'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white',
      },
      {
        name: 'JavaScript',
        badge: 'https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E',
      },
      {
        name: 'TypeScript',
        badge: 'https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white',
      },
      {
        name: 'Tailwind',
        badge: 'https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white',
      },
      {
        name: 'React',
        badge: 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB',
      },
      {
        name: 'Next.js',
        badge: 'https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white',
      },
    ],
    'Backend & Databases': [
      {
        name: 'Node.js',
        badge: 'https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white',
      },
      {
        name: 'MongoDB',
        badge: 'https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white',
      },
      {
        name: 'MySQL',
        badge: 'https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white',
      },
      {
        name: 'PostgreSQL',
        badge: 'https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white',
      },
    ],
    'Tools & Platforms': [
      {
        name: 'Git',
        badge: 'https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white',
      },
      {
        name: 'GitHub',
        badge: 'https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white',
      },
      {
        name: 'Drupal',
        badge: 'https://img.shields.io/badge/Drupal-0678BE?style=for-the-badge&logo=drupal&logoColor=white',
      },
    ],
  };

  const skillCloud = document.querySelector ('.skill-cloud');
  Object.entries (skills).forEach (([category, skillList]) => {
    const categoryDiv = document.createElement ('div');
    categoryDiv.classList.add ('skill-category');
    const categoryTitle = document.createElement ('h3');
    categoryTitle.textContent = category;
    categoryDiv.appendChild (categoryTitle);

    skillList.forEach (skill => {
      const skillBadge = document.createElement ('img');
      skillBadge.src = skill.badge;
      skillBadge.alt = skill.name;
      skillBadge.title = skill.name;
      skillBadge.classList.add ('skill-badge');
      categoryDiv.appendChild (skillBadge);
    });

    skillCloud.appendChild (categoryDiv);
  });

  if (document.querySelector ('.gallery-grid')) {
    const galleryGrid = document.querySelector ('.gallery-grid');
    for (let i = 1; i <= 6; i++) {
      const galleryItem = document.createElement ('div');
      galleryItem.classList.add ('gallery-item');
      const img = document.createElement ('img');
      img.src = `./assets/gallery-${i}.jpg`;
      img.alt = `Gallery Image ${i}`;
      galleryItem.appendChild (img);
      galleryGrid.appendChild (galleryItem);
    }
  }
});
