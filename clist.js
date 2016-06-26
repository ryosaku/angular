import { Component } from 'angular2/core'
import { bootstrap } from 'angular2/platform/browser'

@Component({
    selector: 'coffee-list'
    template:`
        '<i>Coffee List</i>'
        <ul *ngIf = 'coffee'>
            <li *ngFor = '#c of coffee'>{{c.name}}</li>
        </ul>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Available</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Latte</td>
                    <td>50</td>
                    <td>5</td>
                </tr>
                <tr *ngFor = '#c of coffee'>
                    <td>{{c.name}}</td>
                    <td>{{c.price}}</td>
                    <td>{{c.available}}</td>
                </tr>
            </tbody>
        </table>
    `
})

class Clist{
    constructor(){
        fetch('http://codestar.work:4000/coffees').then(r => r.json()).then(d => this.coffee = d)
    }

}

bootstrap(Clist);