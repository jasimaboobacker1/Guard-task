import { Component } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AboutComponent } from '../about/about.component';

export const deactivateGuard: CanActivateFn = (route, state) => {

    return true;
 
};
