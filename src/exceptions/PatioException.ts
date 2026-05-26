export class PatioException extends Error {
    constructor(message: string) {
        super(message);
        this.name = "PatioException";
    }
}