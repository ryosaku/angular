import { Component, Input } from 'angular2/core'
import { bootstrap } from 'angular2/platform/browser'

@Component({
    selector: 'text',
    template: '<input [placeholder]="placeholder">'
})
class Text{
    @Input('placeholder') placeholder
}

@Component({
    selector: 'btn',
    template: `
        <button>{{search}}</button>
    `
})
class Button{
    @Input('search') search
}

@Component({
    selector: 'app',
    directive: [Text],
    template: `
        <text [placeholder]=''placeholder></text>
        <btn [search]='searchLocalText'></btn>
    `
})

class App{
    constructor(){
        this.searchLocalText = 'ค้นหา'
        this.placeholder = 'ใส่ข้อมูลที่ต้องการค้นหา'
    }
}