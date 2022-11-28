import {Component, EventEmitter, Input, Output} from '@angular/core';

export interface AlertProps {
    type: string;
    className: string;
    message: string;
}

@Component({
    selector: 'app-alert-box',
    templateUrl: './box.component.html',
    styleUrls: ['./box.component.css']
})
export class BoxComponent {
    @Input() alert: AlertProps | undefined;
    @Output() alertClicked = new EventEmitter<{ message: string }>;

    constructor() {
    }

    emitBoxClick() {
        this.alertClicked.emit({message: this.alert?.message || ''});
    }
}
