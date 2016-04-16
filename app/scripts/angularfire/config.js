angular.module('firebase.config', [])
  .constant('FBURL', 'https://alertapptfg.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password'])

  .constant('loginRedirectPath', '/login');
