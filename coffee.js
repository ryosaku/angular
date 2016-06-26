import { Component } from 'angular2/core'
import { bootstrap } from 'angular2/platform/browser'

@Component({
    selector: 'coffee',
    template: `
        <select #data (change) = 'change(data.value)'>
            <option *ngFor = '#c of coffee'>{{c.name}}</option>
        </select>
        <p *ngIf = 'price != null'>The price is {{price}}</p>
    `
})

class Coffee{
    constructor(){
        this.coffee = [
            {name: 'Latte', price:90},
            {name: 'Mocha', price:100},
            {name: 'Espresso', price:80}
        ]
    }
    change(v){
        for(let i = 0; i < this.coffee.length; i++){
            if(v == this.coffee[i].price){
                this.price = this.coffee[i].price
            }
        }
    }
}

bootstrap(Coffee);