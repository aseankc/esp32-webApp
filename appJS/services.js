app.service('AuthService', function() {
    
    this.auth = function (username,password) {
      console.log("this is in auth method");
      return true;
    }
  });