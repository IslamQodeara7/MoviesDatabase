import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(list: any[], term: string): any {
    return list.filter((hasta) => {
      if(hasta.title){

        return hasta.title.toLowerCase().includes(term.toLowerCase());
      }
      else if(hasta.name){
        
        return hasta.name.toLowerCase().includes(term.toLowerCase());
      }
    });
   
  }

}
