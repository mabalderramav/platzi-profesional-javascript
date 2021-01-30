interface Observer {
    update: (data: any) => void;
}

interface Subject {
    suscribe: (observer: Observer) => void;
    unsuscribe: (observer: Observer) => void;
}

class BitcoinPrice implements Subject{
    private observers: Observer[] = [];

    constructor(){
        const el: HTMLInputElement = document.querySelector('#value');
        el.addEventListener('input', () => {
            this.notify(el.value);
        });
    }

    suscribe(observer: Observer) {
        this.observers.push(observer);
    }

    unsuscribe(observer: Observer) {
        const index = this.observers.findIndex( obs => { return obs === observer });
        this.observers.splice(index, 1);
    }

    notify(data: any) {
        this.observers.forEach(observer => observer.update(data));
    }
}

class PriceDisplay implements Observer {
    private el: HTMLElement;

    constructor(){
        this.el = document.querySelector("#price")
    }

    update(data: any) {
        this.el.innerText = data;
    }
}

const value = new BitcoinPrice();
const display = new PriceDisplay();

value.suscribe(display);

setTimeout(
    () => value.unsuscribe(display),
    5000
);
