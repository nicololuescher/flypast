import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreFacadeService } from 'src/app/store/store-facade.service';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
    titles = [{ name: 'FIRST FLIEGER' }, { name: 'FIRST GLIDER' }, { name: 'FIRST MOUNTAIN CART' }, { name: 'TROTTIBIKE' }];
    public attractions$ = this.storeFacadeService.user.attraction.getAttractions$;

    constructor(private router: Router, private route: ActivatedRoute, private storeFacadeService: StoreFacadeService) {}

    /* eslint-disable */
    ngOnInit(): void {
        this.storeFacadeService.user.attraction.fetchAttractions();
    }
    /* eslint-enable */

    onClickItem(id: number): any {
        this.router.navigate(['../edit', id], { relativeTo: this.route });
    }
}
