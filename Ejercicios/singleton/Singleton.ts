class Singleton {
    private static instance: Singleton;

    private constructor(){
        // initialize.
    }

    public static getInstance(): Singleton{
        if (!this.instance){
            this.instance = new Singleton();
        }

        return this.instance;
    }
}

export default Singleton;