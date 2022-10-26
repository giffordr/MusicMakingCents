"use strict";
/* jshint node: true */
/*
 * Model data musicmakingcents blog.
 * This module returns an object called articleModels with the following functions:
 *
 * articleModels.articleListModel - A function that returns the list of users on the system. The
 * list is returned as an array of objects containing:
 *   _id  (string) - The ID of the user.
 *   first_name (string) - The first name of the user.
 *   last_name (string) - The last name of the user.
 *   location (string) - The location of the user.
 *   description (string) - A brief user description.
 *   occupation (string) - The occupation of the user.
 *
 * articleModels.Model - A function that returns the info of the specified user. Called
 * with an user ID (id), the function returns n object containing:
 *   _id  (string) - The ID of the user.
 *   first_name (string) - The first name of the user.
 *   last_name (string) - The last name of the user.
 *   location (string) - The location of the user.
 *   description (string) - A brief user description.
 *   occupation (string) - The occupation of the user.
 *
 * articleModels.photoOfUserModel - A function that returns the photos belong to
 * the specified user. Called  with an user ID (id), the function returns an object containing:
 *   _id  (string) - The ID of the photo
 *   date_time (date) - he date and time the picture was taken in ISO format.
 *   file_name (string) - The file name in the image directory of the picture.
 *   user_id (string) - The user id of the picture's owner.
 *   comments: {array of objects} - An array of comment objects containing the properties:
 *        _id  (string) - The ID of the comment.
 *        date_time (date) - The date the comment was made in ISO format.
 *        comment (string) - The text of the comment.
 *        user: {object} The user info (see userMode for format) who made the comment
 *        photo_id: (string) - The ID of the photo the comment belongs to.
 *
 * 
 * 
 */
(function() {

   // Instantiate 'articles' list.
   var articles = [];
   
   var colors =   {
            green: "rgba(75, 192, 192, 1)",
            yellow: "rgba(255, 206, 86, 1)",
            orange: "rgba(255, 206, 86, 1)",
            red: "rgba(255, 99, 132, 1)",
          };
  
   var colorsHover =  {
            green: "rgba(75, 192, 192, 0.6)",
            yellow: "rgba(255, 206, 86, 0.6)",
            orange: "rgba(255, 206, 86, 0.6)",
            red: "rgba(255, 99, 132, 0.6)",
          };
   
   // Create function to add new article to 'articles' list
   var addNewArticle = (TTP, Cost, Exposure, Difficulty, Profit, ArticleTitle) => {
  
       let score = TTP + Cost + Exposure + Difficulty + Profit;
     
       let tempData = [
           { name: "TTP", bgcolor: "rgba(255, 99, 132, 1)", completed: TTP },
           { name: "Cost", bgcolor: "rgba(75, 192, 192, 1)", completed: Cost },
           { name: "Reach", bgcolor: "rgba(255, 206, 86, 1)", completed: Exposure },
           { name: "Difficulty", bgcolor: "rgba(255, 99, 132, 1)", completed: Difficulty },
           { name: "Profit", bgcolor: "rgba(75, 192, 192, 1)", completed: Profit },
        ];
     
       let pieAmount = [0,0,0,0];
     
       let barColor = [
              "rgba(75, 192, 192, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(255, 99, 132, 1)",
             ];
     
       let labelColor = [
              "rgba(75, 192, 192, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(255, 99, 132, 1)",
             ];
     
       let hoverColor = [];
     
       let chartLabels = ["TTP","Cost","Reach", "Difficulty", "Profit"];
       
       tempData.map((item,idx) => {
         
         if (item.completed >= 15){
           item.bgcolor = colors.green;
           pieAmount[0] = pieAmount[0]+20;
           barColor[0] =colors.green;
           labelColor[idx] =colors.green;
           hoverColor[0] = colorsHover.green;
         }; 
         
         if (item.completed >= 10  && item.completed< 15){
           item.bgcolor = colors.yellow;
           pieAmount[1] = pieAmount[1]+20;
           barColor[1] =colors.yellow;
           labelColor[idx] =colors.yellow;
           hoverColor[1] = colorsHover.yellow;
         }; 
         
         if (item.completed >= 5  && item.completed< 10){
           item.bgcolor = colors.orange;
           pieAmount[2] = pieAmount[2]+20;
           barColor[2] =colors.orange;
           labelColor[idx] =colors.orange;
           hoverColor[2] = colorsHover.orange;
         };
         
         if (item.completed >= 0  && item.completed< 5){
           item.bgcolor = colors.red;
           pieAmount[3] = pieAmount[3]+20;
           barColor[3] =colors.red;
           labelColor[idx] =colors.red;
           hoverColor[3] = colorsHover.red;
         };
       });
       
       articles.push({title: ArticleTitle, data: tempData, datastuff: {
             labels: chartLabels,
             datasets: [
               {
                 data: pieAmount,
                 backgroundColor: barColor,
                 borderColor: barColor,
                 hoverBackgroundColor: hoverColor,
                 borderWidth: 0.4,
                 weight: 0.1,
                 
               },
             ],
           },
            options: {
               cutout: "90%",
               responsive: true,
               maintainAspectRatio: false,
               centerText: {
                       color: "black",
                       value: score,
                       fontSizeAdjust: 1 // increase font size 20% based on default font size
                     },
               
               plugins: {
                   legend: {
                       display: false,
                       
                   },
                 tooltip: {
                   enabled: false,
                    callbacks: {
                     label: function(context) { 
                       var label = chartLabels[context.dataIndex];
                       return label;
                                              },
                               }
                           },
                         },
                  
               
                     
                     },
                           
     });
    
};

   var articleListModel = function() {
      addNewArticle(16,12,8,15,4, "Spotify: Which streaming service is best?");
      addNewArticle(2,6,12,15,18, "Things 3");
      addNewArticle(19,18,17,16,18, "Kayla's article hehe");
      addNewArticle(3,3,17,10,11, "Kayla's article hehe 2");
      
      return articles;
   };

   var userModel = function(userId) {
      for (var i = 0; i < users.length; i++) {
         if (users[i]._id === userId) {
            return users[i];
         }
      }
      return null;
   };

   var photoOfUserModel = function(userId) {
      return photos.filter(function (photo) {
         return (photo.user_id === userId);
      });
   };


   var articleModels =  {
      articleListModel: articleListModel,

      
   };

   if( typeof exports !== 'undefined' ) {
      // We're being loaded by the Node.js module loader ('require') so we use its
      // conventions of returning the object in exports.
      exports.articleModels = articleModels;
   } else {
      // We're not in the Note.js module loader so we assume we're being loaded
      // by the browser into the DOM.
      window.articleModels = articleModels;
   }
})();
