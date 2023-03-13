const commentFormHandler = async (event) => {
  event.preventDefault();

    const commentContents = document.querySelector('#comment-contents').value.trim();
  const postId = document.querySelector('#postId').value.trim();

  if (commentContents) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify({ commentContents, postId }),
          headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
          document.location.reload();
      } else {
          console.log(response.statusText);
      }
  }
};

document.querySelector('#submit-comment-button').addEventListener('click', commentFormHandler);