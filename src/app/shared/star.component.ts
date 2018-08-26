import { Component, OnChanges } from '../../../node_modules/@angular/core';

@Component ({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']

})

export class StarComponent implements OnChanges {
    rating = 4;
    starWidth = 5;

    ngOnChanges(): void {

        this.starWidth = this.rating * 75 / 5;

    }

}
