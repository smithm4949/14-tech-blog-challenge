const postFormHandler = async (event) => {
  event.preventDefault();

  const postTitle = document.querySelector('#post-title').value.trim();
  const postContents = document.querySelector('#post-contents').value.trim();
  const userId = document.querySelector('#userId').value.trim();

  if (postTitle && postContents) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/posts', {
          method: 'POST',
          body: JSON.stringify({ postTitle, postContents, userId }),
          headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
          document.location.reload();
      } else {
          console.log(response.statusText);
      }
  }
};

document.querySelector('#submit-post-button').addEventListener('click', postFormHandler);