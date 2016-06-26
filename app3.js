import { Component, Pipe } from 'angular2/core'
import { bootstrap } from 'angular2/platform/browser'

@Pipe({
    name: 'ukUnit'
})

class MeterToFoot{
    transform(v){
        return v * 3.28
    }
}

@Pipe({
    name: 'MeterToMiles'
})
class MeterToMiles{
    transform(v){
        return v * 0.63
    }
}

@Component({
    selector: 'app3',
    template: 'The length is {{length || MeterToMiles}}',
    pipes: [MeterToFoot]
})

class Demo{
    constructor(){
        this.length = 1500
    }
}

bootstrap(Demo)