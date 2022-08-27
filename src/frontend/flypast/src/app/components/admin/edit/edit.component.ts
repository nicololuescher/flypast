import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Attraction } from 'src/app/interfaces/models';
import { StoreFacadeService } from 'src/app/store/store-facade.service';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy {
    public attractions$ = this.storeFacadeService.user.attraction.getAttractions$;
    private sub: any;
    private sub2: any;
    @ViewChild('ticketNumber') form?: NgForm;
    id?: number;
    at?: Attraction;

    constructor(private storeFacadeService: StoreFacadeService, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.storeFacadeService.user.attraction.fetchAttractions();
        this.sub = this.route.params.subscribe((params) => (this.id = +params['id']));
        this.sub2 = this.attractions$.subscribe((attractions) => {
            this.at = attractions?.filter((attraction) => attraction.ID === this.id)[0];
            if (this.at) {
                this.form?.controls['opening_time'].setValue(this.dateToString(this.at?.start_time_minutes));
                this.form?.controls['last_ride'].setValue(this.dateToString(this.at?.end_time_minutes));
            }
            this.form?.controls['ride_duration'].setValue(this.at?.slotduration);
            this.form?.controls['number_of_seats'].setValue(this.at?.max_rides_per_slot);
        });
    }

    dateToString(time: any) {
        let hours = new String(time / 60);
        let min = new String(time % 60);

        if (hours.length == 1) hours = `0${hours}`;
        if (min.length == 1) min = `0${min}`;
        return `${hours}:${min}`;
    }

    onSubmit(loginData: NgForm): any {}

    ngOnDestroy(): void {
        this.sub.unsubscribe();
        this.sub2.unsubscribe();
    }
}
