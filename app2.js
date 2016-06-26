import { Component, Inject } from 'angular2/core'
import { bootstrap } from 'angular2/platform/browser'

class StockServiceMockup{
    read(){
        return [
            {name: 'AAPL', price: 20.87},
            {name: 'GOOG', price: 18.37},
            {name: 'MSFT', price: 17.56}
        ]
    }
}

class StockService{
    read(){

    }
}

class StockServiceLive extends StockService{

}

@Component({
    selector: 'app2',
    template: `stock Today
        <ol>
        <li *ngFor='#d of data'>{{d.name}} - {{d.price}}</li>
        </ol>
    `
    providers: [StockService, StockServiceMockup]
})
class StockBoard{
    constructor(@Inject(StockService) s){
        this.service = s
        this.data = this.service.read()
    }

    /*constructor(){
        this.service = new StockServiceMockup()
        this.data = this.service.read()
    }*/
}

bootstrap(StockBoard, [StockServiceMockup])

//bootstrap(StockBoard)