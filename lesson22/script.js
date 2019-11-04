$(function(){
  const $input = $('#usersSource');
  const $userTemplate = $('#userTemplate').html();
  const $userInfoBoard = $('#userInfoBoard');  

  $input.autocomplete({
    source: function (request, response) {
      $.ajax({
        url: 'https://api.github.com/search/users?q=' + $input.val(),
        dataType: "jsonp",
        success: function(data) {
          console.log(data.data.items);
          response($.map(data.data.items, (elem) => elem.login));
        }
      });
    },
    select: function(event, ui) {
      $.ajax( {
        url: 'https://api.github.com/users/'+ ui.item.value,
        dataType: "jsonp",        
        success: function(data){
          const date = changeFormatDate(data.data.created_at);
          const html = getUserItemsHtml(data.data.avatar_url, data.data.html_url, data.data.name, data.data.public_repos, data.data.followers, date);
          displayUserInfo(html);
        }
      });      
    },
    minLength: 2,    
  }); 
  
  function changeFormatDate(date) {
    return new Date(Date.parse(date)).toLocaleDateString();
  }

  function getUserItemsHtml(avatar_url,html_url, name, repos, followers, date) { 
    return  $userTemplate.replace('{{urlAvatar}}', avatar_url)
                          .replace('{{urlGithub}}', html_url)
                          .replace('{{urlLinkGithub}}', html_url)
                          .replace('{{name}}', name)
                          .replace('{{publicRepos}}', repos)
                          .replace('{{date}}', date)
                          .replace('{{followers}}', followers);
  }

  function displayUserInfo(elem) {
    $userInfoBoard.html(elem);
  }
});