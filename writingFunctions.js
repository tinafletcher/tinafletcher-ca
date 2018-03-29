/* not used anymore */
function toggleVisibility(id){
  var article = document.getElementById(id);
  if(article.style.display == 'block')
    article.style.display='none';
  else
    article.style.display='block';
}

function updateBlogwindow(id, location){
  var selectedArticle = document.getElementById(id).innerHTML;
  document.getElementById(location).innerHTML = selectedArticle;
}

function populateDefault(id, location){
  var defaultArticle = document.getElementById(id).innerHTML;
  document.getElementById(location).innerHTML = defaultArticle;
}
