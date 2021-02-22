import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DataService} from '../../services/data.service';
import { CommonService } from '../../services/common.service';
import { cartProduct } from '../../model/common.model';
import * as jQuery from 'jquery';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any;
  searchText:string;
  cartProductList:any[];
  current_quantity:number;
  items:any;
  local_storage:any[];
  itemsInCart:any[];
  listServiceFeature: any = [];
  sub_total:number;
  login_username:string;
  tax_amount:number;
  final_total_amount:number;
  
  constructor(
    private router: Router,
    private dataService:DataService,
    public commonService: CommonService
    ) { 
    this.products = this.dataService.getProducts();
    this.commonService.setTitle('POS | Products');
    this.current_quantity = 0;
    this.itemsInCart= [];
    this.login_username = this.dataService.user_name;
    this.tax_amount = 0;  
    this.final_total_amount = 0;
   
  }
 
  ngAfterContentChecked()  {
    this.sub_total = 0;
    for (const product of this.products) {
      this.sub_total += parseInt(product.price)*parseInt(product.quantity);
    }
    this.tax_amount = (this.sub_total)*(this.dataService.tax_percent/100);
    this.final_total_amount = (this.tax_amount)+(this.sub_total);
   
}


  ngOnInit(): void {
    localStorage.removeItem('cart');
    (function ($) {
      $(document).ready(function(){
        console.log("Hello from jQuery!");
        $(".addCartbtn").click(function(){
          console.log('addCartbtn')
          $(this).prop('disabled', true);
        })
        $(".reduceQuantity").click(function(){
          console.log('reduce quantity')
          const quntity = $(this).parent().find('.count').val();
         // console.log(parseInt(quntity)+1)
          console.log($(this).parent().find('.count').val())
         
         
        })
        $(".increaseQunatity").click(function(){
          console.log('increase quantity'+$(".counter_row_"+$(this).attr('id')+' count'))
          let currrent_num =  $(".counter_row_"+$(this).attr('id')+' count').val();
          $(".counter_row_"+$(this).attr('id')+' count').val(2);
        
        })
      });
      $(".openbtn").click(function(){
        var width_side = document.getElementById("mySidebar");
        var side_value = width_side.offsetWidth;
        if (side_value < 200) {
            document.getElementById("mySidebar").style.width = "200px";
            document.getElementById("menus").style.display = "block";
            document.getElementById("menus1").style.display = "block";
            document.getElementById("menus2").style.display = "block";
            document.getElementById("menus3").style.display = "block";
            document.getElementById("menus4").style.display = "block";
            document.getElementById("menus5").style.display = "block";
            document.getElementById("menus6").style.display = "block";
            $(document).ready(function() {
                $(".left-icons").hover(function() {
                    $(this).css("padding", "15px 55px 15px 60px");
                }, function() {
                    $(this).css("padding", "15px 55px 15px 60px");
                });
            });
        } else {
            if (screen.width > 800) {
                document.getElementById("mySidebar").style.width = "100px";
                $(document).ready(function() {
                    $(".left-icons").hover(function() {
                        $(this).css("padding", "17px 5px 15px 30px");
                    }, function() {
                        $(this).css("padding", "17px 5px 15px 0px");
                    });
                });
            } else {
                document.getElementById("mySidebar").style.width = "75px";
                $(document).ready(function() {
                    $(".left-icons").hover(function() {
                        $(this).css("padding", "17px 5px 15px 17px");
                    }, function() {});
                });
            }
            document.getElementById("main").style.marginLeft = "0px";
            document.getElementById("menus").style.display = "none";
            document.getElementById("menus1").style.display = "none";
            document.getElementById("menus2").style.display = "none";
            document.getElementById("menus3").style.display = "none";
            document.getElementById("menus4").style.display = "none";
            document.getElementById("menus5").style.display = "none";
            document.getElementById("menus6").style.display = "none";
        }
        
      })
      $(".closebtn").click(function(){
       
      })
    
    })(jQuery);
   }

   reduceQuantity(product) {
    console.log(product)

    console.log($(""));
      
   } 
   search(): void {
    let term = this.searchText;
    console.log(term)
    if(term.length == 0) {
      this.products = this.dataService.getProducts(); 
      console.log(this.products)
    }
    this.products = this.products.filter(function(tag) {
        return tag.categoryName.toLowerCase().indexOf(term) >= 0 || tag.price.toLowerCase().indexOf(term) >= 0 || tag.productName.toLowerCase().indexOf(term) >= 0 || tag.color.toLowerCase().indexOf(term) >= 0 || tag.status.toLowerCase().indexOf(term) >= 0;
    }); 
}

addCartItem(product) {
    console.log(product)
    this.items = product
    console.log(this.itemsInCart)
    if(localStorage.getItem('cart')  == null){

     // $(".count_"+product.id).val(1);
      // console.log("LOCALSTORAGE NULL",JSON.parse(localStorage.getItem('cart')));
      this.items['quantity'] = 1;
      console.log(this.products)
      // console.log(this.items)
      for(var p_index  in this.products) {
        // console.log(this.products[p_index])
        // console.log(this.products[p_index].id)
        // console.log(this.products[p_index].quantity)
          if(this.products[p_index].id == product.id){
            console.log(this.products[p_index])
            this.products[p_index].quantity = 1;
            this.products[p_index].totalAmount = this.products[p_index].quantity * product.price;
            console.log(this.products[p_index])
          }

        
      }
      this.itemsInCart.push(this.items);
      localStorage.setItem('cart', JSON.stringify(this.itemsInCart));
      console.log('Pushed first Item: ', this.itemsInCart);
      console.log(this.products)
    }
    else
    {
      this.itemsInCart = JSON.parse(localStorage.getItem('cart'));
      // pushed another item
      // console.log("LOCAL STORAGE HAS ITEMS",JSON.parse(localStorage.getItem('cart')));
      let isAvailable = false;  
    if(this.items){
      // console.log(JSON.parse(localStorage.getItem('cart')))
      for(var i in this.itemsInCart){
        if(this.itemsInCart[i].id == this.items.id) {
          isAvailable = true;
          break;  
        }
      }

      // on already available item  
      if(isAvailable) {
        for(var p_index  in this.products) {
          // console.log(this.products[p_index])
          // console.log(this.products[p_index].id)
          // console.log(this.products[p_index].quantity)
            if(this.products[p_index].id == product.id){
              console.log(this.products[p_index])
              this.products[p_index].quantity = 1;
              this.products[p_index].totalAmount = this.products[p_index].quantity * product.price;
              console.log(this.products[p_index])
            }
  
          
        }
      }
      if(isAvailable === false) {
        for(var p_index  in this.products) {
            if(this.products[p_index].id == product.id){
              console.log(this.products[p_index])
              this.products[p_index].quantity = 1;
              this.products[p_index].totalAmount = this.products[p_index].quantity * product.price;
              console.log(this.products[p_index])
            }
          
        }
        this.itemsInCart.push(this.items);
        localStorage.setItem('cart', JSON.stringify(this.itemsInCart));
      }  
      
    }
    
    }
}

removeCartItem(product){
  console.log(product)
  console.log('product remove')
}

reduceCartProductQuantity(product) {
  console.log('reduceCartProductQuantity')
  console.log(product)
  // all service product list loop
  for(var p_index  in this.products) {

      // compare sarvice product id from reduce product id 
      if(this.products[p_index].id == product.id){
        console.log(this.products[p_index])
        this.products[p_index].quantity = this.products[p_index].quantity-1;
        
        if(this.products[p_index].quantity == 0 ) {
          this.products[p_index].totalAmount = 0;
          $(".addCartbtn"+product.id).prop('disabled', false);
          // if compare match then it update quantity on local storage  json
          let cartJson = JSON.parse(localStorage.getItem('cart'));
              //console.log(cartJson)
        } else {
          this.products[p_index].totalAmount = this.products[p_index].quantity * product.price;
        }
        console.log(this.products[p_index])
       
      }

    
  }


}


increaseCartProductQuantity(product) {
  console.log('increaseCartProductQuantity')
  for(var p_index  in this.products) {
    // compare sarvice product id from reduce product id 
    if(this.products[p_index].id == product.id){
      console.log(this.products[p_index])
      this.products[p_index].quantity = this.products[p_index].quantity+1;
      console.log(this.products[p_index])
      // $(".addCartbtn"+product.id).show();
    }
}
}

connectDevice() {
  console.log('connectDevice');
  console.log(navigator.plugins)
}

logout(){
  localStorage.removeItem('SeesionUser');
  this.router.navigate(['login']);
}

}
