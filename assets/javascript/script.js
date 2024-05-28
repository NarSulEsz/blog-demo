const submitBtn = document.querySelector('#submit');//const with querySelector that finds the button on index.html
const titleInput = document.querySelector('#title');//const with querySelector that grabs the value of users input
const postsEl = document.querySelector('#posts');/*const with querySelector that provides renewal of content 
in appropriate section of blog.html without changing the file itself*/
const modeBtn = document.querySelector('#mode');
const htmlEl = document.querySelector('html');
const setTheme = function() {
    htmlEl.dataset.theme = localStorage.getItem('theme');
  }

/*This function below provides obtaining data (posts as a string) from local Storage, 
the turning those data from string to object,
then after new value from users input has been gotten turns those data to string
and sends in to the local starage.
!This chunk of code was borrowed from Anthony Cooper(Instructor)*/
const renderPosts = function() {
    // Retrives data from localStorage if it exists.
    const data = localStorage.getItem('posts');
  
    // Parse the data and tf no posts are stored, provide an empty array
    const posts = JSON.parse(data) || [];
  /* The for loop below provides:  */
    for (let post of posts) {
      const headerEl = document.createElement('header');
      const blogPostEl = document.createElement('article');
      const pEl = document.createElement('p');
  
      headerEl.textContent = post.title; 
      pEl.textContent = "some content to be added later";
  
      blogPostEl.appendChild(headerEl);
      blogPostEl.appendChild(pEl);
      postsEl.appendChild(blogPostEl);
    }
  }
/*The function below provides changing the lightness of the whole document 
!This chunk of code was borrowed from Anthony Cooper(Instructor)*/
  const toggleTheme = function() {
    if (htmlEl.dataset.theme === 'dark') {
      htmlEl.dataset.theme = 'light';
    } else {
      htmlEl.dataset.theme = 'dark';
    }
    localStorage.setItem('theme', htmlEl.dataset.theme);
  }
  


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

if (submitBtn) submitBtn.addEventListener('click', handleSubmit);/*Event listiner that starts the "handleSubmit" function after 
event "click" happens with  hmtl element that signed by the querySelector "submit"*/
if (postsEl) renderPosts();/*function "renderPosts" launched*/
if (modeBtn) modeBtn.addEventListener('click', toggleTheme);/* function "toggleTheme" launched**/
setTheme();/*function setTheme launched */
