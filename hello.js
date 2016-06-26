import { Component } from 'angular2/core'
import { bootstrap } from 'angular2/platform/browser'

@Component({
    selector: 'hello'
    template:`
        <input #data placeholder = 'Enter your name' (keyup) = 'typing($event)'>
        <p *ngIf = 'massage'>{{massage}}</p>
    `
})

class Hello{
    typing(e){
        this.massage = "Hello " + e.target.value + "!"
    }
}
bootstrap(Hello);