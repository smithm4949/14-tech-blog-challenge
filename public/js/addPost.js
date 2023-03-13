const postFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#post-title').value.trim();
  const contents = document.querySelector('#post-contents').value.trim();
  const userId = document.querySelector('#userId').value.trim();

  if (title && contents) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/posts', {
          method: 'POST',
          body: JSON.stringify({ title, contents, userId }),
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