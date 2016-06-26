import { Component } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';

@Component({
    selector: 'coffee2'
    template: `
        <div *ngFor = '#c of coffee'>
            <input type = 'radio' 
            name = 'coffee' 
            value = '{{c.name}}'
            #item
            (click) = 'show(item.value)'>{{c.name}}
        </div>
    `
})
class Coffee {
    constructor(){
        this.coffee = [
            {name: 'Latte', price: 90},
            {name: 'Mocha', price: 100},
            {name: 'Espresso', price: 80}
        ]
    }

    show(v){
        alert("Select " + v)
    }

}

bootstrap(Coffee);