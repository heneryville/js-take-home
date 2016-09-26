# Requirements
- services/universities.js right now uses callbacks. Convert it to instead return a Promise
- Make the names clickable to a link to the university's website
- Universities with quotes in their names don't work properly. (See Universidad Catolica "Redemptoris Mater" in Nicaragua)
- The United States has a huge number of universities. Add paging so we're not overwhelmed.
  - Paging should be controlled by a page=XXX in the query string
   - 10 universities per page
   - When there is paging, There should be a button for the prior page (inactive if there is none), followed by a link to the prior page (if there is one) followed by the current page (no link), then a link to the next page (if there is one), then a next arrow linking to the next page (inactive if there is no next page)
    e.g. < 1 [2] 3 > 
    e.g. < 10 [11] 12 > 
    e.g. < [1] 2 > 
   - No paging should be shown for countries with few universities (e.g. luxembourg)
   - Make sure that your paging is robust. It should do something reasonable when we change the page

# Notes
- Fork this repo on github to get started. When you're done, share with the github link
- To start the server, run `npm start` It will run on port 3000 by default
- Feel free to change anything. Want to use hapi instead of express? Sure. Want to add an NPM package? Sure.
- If you've got questions about requirements, you can reach out to me via email. However, if you make an assumption, just drop a comment in your code to let me know why you did what you did
