import { CanActivateFn } from '@angular/router';

export const permissionGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem('admin') === 'admin123'){
    return true;
    }else if(localStorage.getItem('admin') && localStorage.getItem('password')){
      return true;
    }
    else{
      return false;
    }
};
