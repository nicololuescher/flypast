import { Component, OnInit } from '@angular/core';
import {StoreFacadeService} from "../../../store/store-facade.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-rider-information',
  templateUrl: './rider-information.component.html',
  styleUrls: ['./rider-information.component.css']
})
export class RiderInformationComponent implements OnInit {

    ticketArray:string[] = []
    showAddRider = true
    showInput = false
  constructor(private storeFacade: StoreFacadeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  openTimeSelect(): void {
      this.router.navigate(['../select-activity'], { relativeTo: this.route });
  }

  showInputFields(): void {
        this.showInput = true;
        this.showAddRider = false;
  }

  onSubmit(ticketNumber: NgForm): any {

  }

  addTicket(ticketNumber: String): void {
        this.ticketArray.push("ticketNumber");
  }

}
