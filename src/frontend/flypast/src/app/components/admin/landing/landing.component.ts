import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreFacadeService } from 'src/app/store/store-facade.service';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
    public attractions$ = this.storeFacadeService.user.attraction.getAttractions$;

    constructor(private router: Router, private route: ActivatedRoute, private storeFacadeService: StoreFacadeService) {}

    ngOnInit(): void {
        this.storeFacadeService.user.attraction.fetchAttractions();
    }

    onClickItem(id: number): any {
        this.router.navigate(['../edit', id], { relativeTo: this.route });
    }
}
