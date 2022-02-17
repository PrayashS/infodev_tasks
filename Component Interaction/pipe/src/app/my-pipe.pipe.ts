import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})


export class MyPipePipe implements PipeTransform {
  transform(value: any, filterString: any) {
      if (value.length === 0 || filterString === ''){
        return value;
      }
      const users: any = [];
      for (const user of value) {
        if (user['name'] === filterString){
          user.push(user);
        }
      }
      return users;
  // transform(value: any, filterString: any, ...args: any[]) {
  //     if(value.length === 0){
  //       return value;
  //     }
  //     return value.filter(function(search:any){
  //       return search.name.toLowerCase().indexOf(filterString.toLowerCase()) > -1
  //     })
  // }
      
  }
}
// export class MyPipePipe implements PipeTransform {
  // public nepNum: string | undefined
  // public input: string | undefined
  // transform(value: String, ...args: unknown[]): any{
    // let n;
    // let nepaliNumbers:any ={
    //   0: '०',
    //   1: '१',
    //   2: '२',
    //   3: '३',
    //   4: '४',
    //   5: '५',
    //   6: '६',
    //   7: '७',
    //   8: '८',
    //   9: '९',
    // };
    // function langChange(num:any) {
    //   let nepaliNum = '';
    //   let numArray = num.toString().split('');
    //   for (let a in numArray) {
    //     for (let i in nepaliNumbers) {
    //       if (i === numArray[a]) {
    //         nepaliNum += nepaliNumbers[i];
    //       }
    //     }
    //   }
    //   return nepaliNum;
    // }
    // n=langChange(value);
    // console.log(n)
    // return n;
    
  // }


