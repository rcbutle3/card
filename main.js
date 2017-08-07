//get Robins Log Info

fetch('https://api.github.com/users/rcbutle3')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {

          let FullName = data.name;
          console.log(`Name: ${FullName}`);
          let login = data.login ;
          console.log (`Github URL ${login}`)
          let email = data.email;
          console.log (`email: ${email}`)
          let company = data. company
          console.log (`Company: ${company}`)
          let blog= data.blog;
          console.log (`Website: ${blog}`)



      //  let markup= RobinsGitHubInfo


          //  </div>


        // / document.body.innerHTML = markup;

      });
    }
  )
