import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cartItem'
})
export class CartItemPipe implements PipeTransform {

  transform(objects: any[]): any[] {
    if(objects) {
        return objects.filter(object => {
          console.log('cartItem')
          // console.log(object)
          return object.quantity === 1;
            
        });
    }
}


}
