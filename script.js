const blogPosts = [
  {
    title: "How I Learned JavaScript",
    summary: "A beginner's journey to mastering JavaScript step-by-step.",
    link: "posts/post1.html",
    image: "assets/js-journey.avif",
    date: "June 15, 2024"
  },
  {
    title: "Understanding Flexbox",
    summary: "CSS Flexbox explained with real-world examples and layout tips.",
    link: "posts/post2.html",
    image: "assets/flexbox-guide.avif",
    date: "July 17, 2024"
  },
  {
    title: "JavaScript Learned Topics",
    summary: "All the key concepts I've learned in JavaScript, including ES6+ features.",
    link: "posts/js-topics.html",
    image: "assets/js-topics.jpg",
    date: "Augest 07, 2024"
  },
  {
    title: "JavaScript Interview Questions",
    summary: "Frequently asked interview questions with answers and explanations.",
    link: "posts/js-interview.html",
    image: "assets/js-questions.jpg",
    date: "November 11, 2024"
  },
  {
    title: "JavaScript Projects Showcase",
    summary: "Mini projects I've built using JavaScript with GitHub links.",
    link: "posts/js-projects.html",
    image: "assets/projects.jpg",
    date: "January, 2025"
  }
];

const container = document.getElementById("blog-container");

blogPosts.forEach((post, index) => {
  const card = document.createElement("div");
  card.className = "post-card";
  card.innerHTML = `
    <img src="${post.image}" alt="${post.title}" />
    <div class="post-content">
      <h3>${post.title}</h3>
      <p class="date">Published on: ${post.date}</p>
      <p>${post.summary}</p>
      <a href="${post.link}" class="read-more">Read More</a>

      <div class="like-section">
        <span class="like-count" id="like-count-${index}">0</span>
        <button class="like-button" onclick="toggleLike(${index})">❤️</button>
      </div>
    </div>
  `;
  container.appendChild(card);
});

function toggleLike(index) {
  const key = `like-${index}`;
  let count = localStorage.getItem(key) || 0;
  count = parseInt(count) + 1;
  localStorage.setItem(key, count);
  document.getElementById(`like-count-${index}`).innerText = count;
}

// Load saved likes on page load
window.addEventListener("DOMContentLoaded", () => {
  blogPosts.forEach((_, index) => {
    const key = `like-${index}`;
    const count = localStorage.getItem(key) || 0;
    const likeEl = document.getElementById(`like-count-${index}`);
    if (likeEl) {
      likeEl.innerText = count;
    }
  });
});





