export class ServersService {
    constructor(private httpHandler: any) {}

    async handle() {
        console.log('TEST')
        // this.httpHandler.get("URL");
    }

    async handleClick() {
        console.log("CLICKED");
    }
}
