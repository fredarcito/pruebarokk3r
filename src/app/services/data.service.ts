import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class DataService {

	basicData =[
 {"zoneId":"Calle 85", "data":{"count":1,"speed":10,"time":1466781876681}},
 {"zoneId":"Salitre plaza", "data":{"count":2,"speed":8.5,"time":1466781876681}},
 {"zoneId":"Parque 93", "data":{"count":4,"speed":15,"time":1466781876681}},
 {"zoneId":"Calle 80", "data":{"count":3,"speed":13.5,"time":1466781876681}},
 {"zoneId":"Centro", "data":{"count":1,"speed": 9 ,"time":1466781876681}}
]

  constructor() { console.log("servicio Listo") }



	data():Observable<any[]>{
		return new Observable<any[]>((observer)=>{
			setInterval(()=>{
				const time = Date.now();
				const newData = this.basicData.map(item=>{
					return {
						zoneId: item.zoneId,
						data : {count: Math.floor(Math.random()*10),speed: Math.floor(Math.random()*100),time }
					};	
				});

				observer.next(newData);
			}, 5000);
		});
	}

}
