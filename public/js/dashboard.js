const { response } = require("express");

const newPostHandler = async (e) => {
  e.preventDefault();

  const title = document.querySelector("#new-title").value.trim();
  const content = document.querySelector("#new-content").value.trim();

  if (title && content) {
    const response = await fetch("/api/post/newpost", {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    });
  }

  if (response.ok) {
    document.location.replace("/api/users/dashboard");
    console.log('kk')
  } else {
    alert("Failded to reload Dashboard");
  }
};

document.querySelector(".new-post").addEventListener("submit", newPostHandler);
