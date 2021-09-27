import { Server } from "socket.io";
import { SignalManager } from './core/signal-manager';
import { SignalName } from './core/enum/signal-name';

export class App {
    public io = new Server({});
    public signalManager = new SignalManager(this.io);
    
    constructor(){
        this.wakeUpSignal();
        this.test();
    }
    
    private wakeUpSignal(): void {
        this.createSocketInstance();
        this.signalManager.createSignal(SignalName.VELOCIMETER);
    }

    private createSocketInstance(): void {
        this.io.on("connection", (socket) => {
            console.log('< New Socket Connected >');            
        });
        this.io.listen(2000);
    }
    
    private test(): void {
        setInterval( () => {
            const va = Math.floor(Math.random() * (120-10) + 10 );
            this.signalManager.updateState(SignalName.VELOCIMETER, va);
        }, 500);
    }
}

const a = new App();
