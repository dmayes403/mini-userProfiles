angular.module('userProfiles')
.service('mainService', function(){
    const data = [
      {
          "id": 0,
          "first_name": "george",
          "last_name": "bluth",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg",
          "isFavorite": false
      },
      {
          "id": 1,
          "first_name": "lucille",
          "last_name": "bluth",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg",
          "isFavorite": false
      },
      {
          "id": 2,
          "first_name": "oscar",
          "last_name": "bluth",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg",
          "isFavorite": false
      }
    ]

    this.getUsers = function(){
      // return copy
      return data.slice();  //creates a copy instead of a reference
    }

    this.toggleFavorite = function(userID){
      // update data here in service
      data.forEach(item => {
        if(item.id === userID){
            item.isFavorite = !item.isFavorite;
        }
      });
      // return a new copy
      return data.slice();
    }
})
