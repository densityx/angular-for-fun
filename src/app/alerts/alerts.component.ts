import {Component, ViewChild} from '@angular/core';
import {AlertProps} from "./box/box.component";

@Component({
    selector: 'app-alerts',
    templateUrl: './alerts.component.html',
    styleUrls: ['./alerts.component.css']
})
export class AlertsComponent {
    alerts: AlertProps[] = [
        {
            type: 'warning',
            className: 'bg-red-400',
            message: 'Warning Alert!'
        },
        {
            type: 'success',
            className: 'bg-green-400',
            message: 'Success Alert!'
        },
        {
            type: 'warning',
            className: 'bg-red-400',
            message: 'Warning Alert 2!'
        },
        {
            type: 'success',
            className: 'bg-green-400',
            message: 'Success Alert 2!'
        },
    ];

    @ViewChild('message', {static: true}) message: any;

    revealMessage(event: HTMLInputElement) {
        console.log(this.message.nativeElement.value);
    }

    receiveBoxClicked({message}: { message: string }) {
        alert(message + ' from parent!')
    }
}
