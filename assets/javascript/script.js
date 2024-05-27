const submitBtn = document.querySelector('#submit');//const with querySelector that finds the button on index.html
const titleInput = document.querySelector('#title');//const with querySelector that grabs the value of users input



/*This function below provides obtaining data from local Storage, the turning those data from string to object,
then after new value from users input has been gotten turns those data to string and sends in to the local starage.
!This chunk of code was borrowed from Anthony Cooper(Instructor)*/
const handleSubmit = function(event) {
  event.preventDefault();

  // Obtain data from localStorage in case they have been stored the previusly
  const data = localStorage.getItem('posts');

  // Parse the data and if no posts are stored, provide an empty array
  const posts = JSON.parse(data) || [];

  // Retrives the title input's value and trims unecessary whitespace 
  const title = titleInput.value.trim();
  
  // Creates a post object
  const post = {
    title: title
  };

  // Append the post object to the posts collection
  posts.push(post);

  // Serialize the data prior to saving to localStorage
  const serializedData = JSON.stringify(posts);

  // Save serialized data to localStorage
  localStorage.setItem('posts', serializedData);

  setTimeout(function() {
    location.assign('./blog.html');
  }, 250);
};

if (submitBtn) submitBtn.addEventListener('click', handleSubmit);

