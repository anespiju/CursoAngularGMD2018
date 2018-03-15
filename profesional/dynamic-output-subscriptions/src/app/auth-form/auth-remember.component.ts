

import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'auth-remember',
    template:`
        <label>

            <input type="checkbox" 
                (change)="onChecked($event.target.checked)"
                >
                Remember me
        </label>
    
    `
})

export class AuthRememberComponent {

    @Output()
    checked: EventEmitter<boolean> = new EventEmitter<boolean>();

    onChecked(value: boolean){
        this.checked.emit(value);
    }
    
}