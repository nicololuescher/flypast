import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { StoreFacadeService } from '../../../store/store-facade.service';

@Component({
    selector: 'app-ride-selection',
    templateUrl: './ride-selection.component.html',
    styleUrls: ['./ride-selection.component.css']
})
export class RideSelectionComponent implements OnInit {
    public numberOfRides$ = this.storeFacade.user.ticket.getNumberOfRides$;
    constructor(private storeFacade: StoreFacadeService, private router: Router, private route: ActivatedRoute) {}

    ngOnInit(): void {}

    openSelect(): void {
        this.router.navigate(['../select-activity'], { relativeTo: this.route });
    }
}
