import { Signal } from './signal';
import { SignalName } from './enum/signal-name';
import { Server } from 'socket.io';

export class SignalManager {

    public signals: Array<Signal> = [];

    constructor(
        private socket: Server
    ) {
        //
    }
    
    public createSignal(name: SignalName): void {
        const newSignal: Signal = new Signal(name,0);
        this.signals.push(newSignal);
    }
    
    public updateState(name: SignalName, value: number): void {
        const current = this.signals.find(s => s.name === name);
        current?.setValue(value);
        console.log('<Update value at ' + name + ' with ' + value + ' >');
        current ? this.sendSignal(current) : null;
    }

    private sendSignal(signal: Signal): void {
        this.socket.emit(signal.name, signal);
    }

}
