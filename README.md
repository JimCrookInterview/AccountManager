# AccountManager
Account Manager for small company :)


Key Features : 

- Single webpage application
- Header with company name
- Currently logged in user
- Legend with description for table
- Fully working table with all users
- Clearly shown difference between users who :
      - were offline more than 12 months
      - have their balance in negative numbers
      - other users
- Total balance number is counted and user can see it clearly
- Possibility to make an 10% discount offer for inactive users (over 12 months ) - already counted in modal popup
- Possibility to request money from customers with negative balances
- For rest of ( not problematic ) customers can have various actions, but are currently disabled.
- Table is not showing GUID and ID because that numbers are mostly user for DB reasons, and backend operations, and account manager cant use them


Possible improvements : 

- Pagination, with choosing how many records should be on one page.
- have more tables ( main table should contain all data, but rest tables could be filtered just by NEGATIVE BALANCES & OFFLINE status).
- history of what Jim already done. to whom he sent notifications.
- possible balance when users pay minus balances.
- UI addon component - like datatables - to hide columns, when resolution is changed (responsive ), or to sort them, or freeze headers.
- Graphs ( Cake graph with negative balances and positive ones )
- Hints for Jim, with new features like "did you know that you can sort your table .....etc".
- table cell with email/ number can be clickable so Jim may call/mail them directly ( link to cell/ outlook )
- registered date with nicer UI
- any new features...


Development : 

Development was done in one day. Application lack of few features mentioned in " Possible Improvements".
Web Application uses simple jQuery library with bootstrap and simple CSS. I chose to make header and user features fixed. Table is created dynamically within only one request to server. We dont need to overload server so thats why we requested all data at once. Could be a problem when there is a bigger database of users, than we may use filtering and pagination along lazy loading. We have at least LOADING... message on the screen in case that it would take more time as usual. ASYNC is set to false, because we want data to be ordered as they are in DB. It also depends on requirements of app. Recieved data from JSON are divided into separate cells to create a table. Hardest part in current solution is a button at the end of application. There is a single button created dynamically.
Problem is that there are lot of parameters and all logic is created still within this AJAX call. possible another solution would be to create buttons with requested parameters in separate function, and then append whole button into field in table row. That would be much smarter and code-cleaner solution.  
Styles in application are separated, and are overwritten of some basic bootstrap styles, just because of this demonstration of application.
Application contains just one image of Jim ! Files are separated into folders.

Final words are that solution is made very simple way with usage JS library jQuery, for really small and simple company. Bigger projects should be build on some of availaible UI Frameworks our there.





