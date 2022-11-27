import {Component} from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent {
    serverName: string = '';
    servers: string[] = ['Digital Ocean', 'Vultr'];
    serverId: number = 10;
    serverStatus: string = 'running';
    allowNewServer: boolean = false;

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';

        setTimeout(() => {
            this.allowNewServer = true;
            console.log('allowed now')
        }, 2000)
    }

    getServerStatus(): string {
        return this.serverStatus
    }

    addNewServer() {
        console.log('adding new server')
    }

    onUpdateServerId(event: Event) {
        this.serverId = Number((<HTMLInputElement>event.target).value)
    }

    onUpdateServerStatus(event: Event) {
        this.serverStatus = (<HTMLInputElement>event.target).value;
    }

    resetInputs() {
        this.serverId = 0;
        this.serverStatus = '';
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }

    addServer() {
        if (this.serverName == '') return;

        this.servers.push(this.serverName);
        this.serverName = '';
    }
}
