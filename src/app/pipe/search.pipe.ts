import { Pipe, PipeTransform } from '@angular/core';
import { BrowserStack } from 'protractor/built/driverProviders';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items:any[], keyword: any, properties: string[]){
     //if(!items) return [];
    // if(!keyword) return [];
     return items.filter(item=>{
       var itemmFound:Boolean;
       for(let i=0;i<properties.length;i++){
         if(item[properties[i]].toLowerCase().indexOf(keyword.trim().toLowerCase()) !== -1){
           itemmFound = true;
           break;
         }
       }
       return itemmFound;
     });
    // if (!term) return value;
    // return (value || []).filter(item => keys.split(',').some(key => item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key])));

  }

}
