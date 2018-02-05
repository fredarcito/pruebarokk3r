import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

	public line;
	public bar;
	public chart;
	public category = [];

  constructor(private data:DataService) {
  		this.lineChart();
  		this.columnChart();
  		this.pieChart();

   }

  ngOnInit() {
  }


  lineChart(){

    this.data.data().subscribe((value)=>{

      let a= value.length;
      let time = value[0].data.time;
      let hour = new Date(time).getHours();
      let minutes = new Date(time).getMinutes();
      this.category.push(hour+":"+minutes+"min");

      for(let i=0; i<a; i++){
        let name = value[i].name;
        let speed = value[i].data.speed; 
        this.line.addPoint(speed,[i]);
      }

    });

    let line= new Chart({
       chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'line'
      },
      title: {
        text: 'Speed Zones'
    },

    xAxis: {
        categories: this.category
    },

    yAxis: {
        title: {
            text: 'Tiempo'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            pointStart: 0
        }
    },
      series:[{
        name: "Calle 85",
        data: []
      },
      {
        name: "Salitre Plaza",
        data: []
      },
      {
        name: "Parque 93",
        data: []
      },
      {
        name: "Calle 80",
        data: []
      },
      {
        name: "Centro",
        data: []
      }
      ]
    });

    this.line = line;
  }


  columnChart(){

  	this.data.data().subscribe((value)=>{
      
      let a= value.length;
      let obj;

      for(let i=0; i<a; i++){
        this.bar.removePoint(i);
       	let name = value[i].name;
        let count = value[i].data.count; 
        this.bar.addPoint(count,[i]);
      }

    });


  	let column= new Chart({
       chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'column'
      },
      title: {
        text: 'Count By Zones'
    },

    xAxis: {
        categories: this.category
    },

   yAxis: {
        title: {
            text: 'Count'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            pointStart: 0
        }
    },
      series:[{
        name: "Calle 85",
        data: [10]
      },
      {
        name: "Salitre Plaza",
        data: [8.5]
      },
      {
        name: "Parque 93",
        data: [15]
      },
      {
        name: "Calle 80",
        data: [13]
      },
      {
        name: "Centro",
        data: [9]
      }
      ]
    });

  	this.bar = column;

  }


   pieChart( ){

    this.data.data().subscribe((value)=>{
      let a= value.length;
      let obj;

      for(let i=0; i<a; i++){
        this.chart.removePoint(i);
       let name = value[i].zoneId;
        let cant = value[i].data.count;
        obj = {name:name, y:cant};
        this.chart.addPoint(obj);
      }
    });

    let pie= new Chart({
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Speed Average'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
      },
      series: [{
        name: 'Empleado',
        data: []
      }]
    });

    this.chart = pie;
  }

}
