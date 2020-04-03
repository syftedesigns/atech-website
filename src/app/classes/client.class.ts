export class AtechClientContact {
    constructor(
        public name: string,
        public lastname: string,
        public country: string,
        public email: string,
        public company?: string,
        public phone?: string,
        public interestOn?: string
    ) {}
}
