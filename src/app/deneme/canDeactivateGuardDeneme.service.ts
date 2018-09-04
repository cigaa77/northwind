import { CanDeactivate } from "@angular/router";
import { ShippingDetailComponent } from "../shipping-detail/shipping-detail.component";

export class CanDeactivateGuardDeneme implements CanDeactivate<ShippingDetailComponent>{
    canDeactivate(component: ShippingDetailComponent):boolean{
        if( !component.isDirty)
        return true;
        else{
            return confirm("Are you Sure !!!");
        }
    }
}