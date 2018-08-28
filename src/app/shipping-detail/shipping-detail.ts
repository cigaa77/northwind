export class ShippingDetail {
    constructor(
        public fullName: string,
        public adress: string,
        public isGift: boolean,
        public cityId: number
    ) { }
}