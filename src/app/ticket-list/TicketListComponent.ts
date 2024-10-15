import { Component, OnInit } from '@angular/core';
import { TicketService, Ticket } from './ticket.service';


@Component({
    selector: 'app-ticket-list',
    templateUrl: './ticket-list.component.html',
    styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
    tickets: Ticket[] = [];

    constructor(private ticketService: TicketService) { }

    ngOnInit(): void {
        this.loadTickets();
    }

    loadTickets(): void {
        this.ticketService.getTickets().subscribe(tickets => this.tickets = tickets);
    }

    deleteTicket(id: number): void {
        this.ticketService.deleteTicket(id).subscribe(() => this.loadTickets());
    }

}
