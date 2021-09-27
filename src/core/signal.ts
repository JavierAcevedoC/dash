import { SignalName } from '../core/enum/signal-name';

export class Signal {
    public name: SignalName;
    private value: number;
    private state: boolean;

    constructor(name: SignalName, value: number){
        this.name = name;
        this.value = value;
        this.state = false;
    }

    public setValue(n: number): void {
        this.value = n;
        this.state = Boolean(n > 0);
    }
    
    public getValue(): number {
        return this.value;
    }
    
    public getState(): boolean {
        return this.state;
    }

}
