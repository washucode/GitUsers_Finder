import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datepipe'
})
export class DatepipePipe implements PipeTransform {

  transform(value: any ,args?: any): any {
    if (value) {
    const timeDifference = Math.floor((+new Date() - +new Date(value)) / 1000);//convert to seconds
    const fromSeconds = {'year': 31536000, 'month': 2592000,'week': 604800,'day': 86400,'hour': 3600,'minute': 60,'second': 1 };
    if (timeDifference < 29){
        return 'Just now';
    }

    let timeDifferenceFinal;
    for (const i in fromSeconds) {
                timeDifferenceFinal = Math.floor(timeDifference / fromSeconds[i]);
                if (timeDifferenceFinal > 0){
                    if (timeDifferenceFinal === 1) {
                        return timeDifferenceFinal + i + "ago";
                    } else {
                        return timeDifferenceFinal  + i + 's ago';
                    }
            }
        }
        return value;
    }

 }

}
