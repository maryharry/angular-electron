import { Injectable } from '@angular/core';
//import * as data from '../data/local.json';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  users:any;
  products:any;
  user_name:string;
  tax_percent:number;
  constructor() { 
    this.user_name="";
    this.tax_percent = 5;
    this.users = [
        { "id": 1, "first_name": "aman", "last_name": "raikwar", "email": "aman@mailinator.com", "status": "active" },
        { "id": 2, "first_name": "sanjay", "last_name": "pande", "email": "pande@mailinator.com", "status": "inactive" },
        { "id": 3, "first_name": "ravi", "last_name": "sharma", "email": "sharma@mailinator.com", "status": "pending" },
        { "id": 4, "first_name": "dhanu", "last_name": "pakhale", "email": "daman@mailinator.com", "status": "active" },
        { "id": 5, "first_name": "akash", "last_name": "sharma", "email": "sharma@mailinator.com", "status": "active" },
        { "id": 6, "first_name": "rahul", "last_name": "pandit", "email": "rahul@mailinator.com", "status": "inactive" },
        { "id": 7, "first_name": "vijay", "last_name": "barapatre", "email": "vijay@mailinator.com", "status": "pending" },
        { "id": 8, "first_name": "anil", "last_name": "kapoor", "email": "anil@mailinator.com", "status": "active" },
        { "id": 9, "first_name": "anil next", "last_name": "kapoor", "email": "anil@mailinator.com", "status": "active" }

  ]

  this.products = [
    { "id": 1, "productName": "Samsung Galaxy", "categoryName": "Mobile", "price": "12000", 
    "productimages": ["http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Picture.png",
    "http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Picture.png",
    "http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Picture.png",
    "http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Picture.png",
    "http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Picture.png" 
    
    ],"quantityPerUnit":10,"quantity":0,"totalAmount":0,"status":"active","color":"Black"},
    { "id": 2, "categoryName": "Tablet", "productName": "Lenov 112C", "price": "40000","productimages": 
    ["http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Picture.png",
    "http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Picture.png",
    "http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Picture.png",
    "http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Picture.png",
    "http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Picture.png" 
    
    ],"quantityPerUnit":25,"quantity":0,"totalAmount":0, "status": "active","color":"Black" },
    { "id": 3, "categoryName": "Gas", "productName": "Hp Celendor", "price": "5000","productimages": 
    ["http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Picture.png",
    "http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Picture.png",
    "http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Picture.png",
    "http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Picture.png",
    "http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Picture.png" 
    
    ],"quantityPerUnit":45,"quantity":0,"totalAmount":0, "status": "active","color":"Black"  },
    { "id": 4, "categoryName": "Induction","productName": "Pretige 15.0+ 1600W","price": "2000","productimages": 
    ["http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Picture.png",
    "http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Picture.png",
    "http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Picture.png",
    "http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Picture.png",
    "http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Picture.png" 
    
    ],"quantityPerUnit":8,"quantity":0,"totalAmount":0, "status": "active","color":"Black" },
    { "id": 6, "categoryName": "Soap", "productName": "Patanjali Neem Soap","price": "50","productimages": 
    ["http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Picture.png",
    "http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Picture.png",
    "http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Picture.png",
    "http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Picture.png",
    "http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Picture.png" 
    
    ],"quantityPerUnit":76,"quantity":0,"totalAmount":0, "status": "active","color":"Black" },
    { "id": 7, "categoryName": "Geazer", "productName": "Bajaj 200 Watt", "price": "3500","productimages": 
    ["http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Picture.png",
    "http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Picture.png",
    "http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Picture.png",
    "http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Picture.png",
    "http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Picture.png" 
    
    ],"quantityPerUnit":75,"quantity":0,"totalAmount":0, "status": "active","color":"White"},
    { "id": 8, "categoryName": "Fan", "productName": "Orient", "price": "700","productimages": 
    ["http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Picture.png",
    "http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Picture.png",
    "http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Picture.png",
    "http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Picture.png",
    "http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Picture.png" 
    
    ],"quantityPerUnit":49,"quantity":0,"totalAmount":0, "status": "active","color":"Black" },
    { "id": 9, "categoryName": "Cooker", "productName": "Neo", "price": "450","productimages": 
    ["http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Picture.png",
    "http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Picture.png",
    "http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Picture.png",
    "http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Picture.png",
    "http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Picture.png" 
    
    ],"quantityPerUnit":18,"quantity":0,"totalAmount":0, "status": "active","color":"Silver"  },
    { "id": 10, "categoryName": "Bottle", "productName": "Water Bottle","price": "110","productimages": 
    ["http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Picture.png",
    "http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Picture.png",
    "http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Picture.png",
    "http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Picture.png",
    "http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Picture.png" 
    
    ],"quantityPerUnit":14,"quantity":0,"totalAmount":0, "status": "active","color":"Silver"},
    { "id": 10, "categoryName": "Shoes", "productName": "Nike","price": "1000","productimages": 
    ["http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Picture.png",
    "http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Picture.png",
    "http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Picture.png",
    "http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Picture.png",
    "http://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Picture.png" 
    
    ],"quantityPerUnit":5,"quantity":0,"totalAmount":0, "status": "active","color":"Silver"}
  ]
} 

  ngOnInit(){
    console.log(this.users);
  }

  getUsers() {
    return this.users;
  }

  getProducts(){
    return this.products;
  }
}
