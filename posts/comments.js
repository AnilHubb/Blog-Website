// comments.js

// Get post ID from file name like post1
const postId = location.pathname.split("/").pop().split(".")[0];

function loadComments() {
  const comments = JSON.parse(localStorage.getItem(`${postId}-comments`)) || [];
  const commentList = document.getElementById("comment-list");
  if (commentList) {
    commentList.innerHTML = comments
      .map(c => `<div class="comment">${c}</div>`)
      .join("");
  }
}

function addComment() {
  const input = document.getElementById("comment-input");
  const comment = input.value.trim();
  if (!comment) return;

  const comments = JSON.parse(localStorage.getItem(`${postId}-comments`)) || [];
  comments.push(comment);
  localStorage.setItem(`${postId}-comments`, JSON.stringify(comments));
  input.value = "";
  loadComments();
}

window.addEventListener("DOMContentLoaded", loadComments);
