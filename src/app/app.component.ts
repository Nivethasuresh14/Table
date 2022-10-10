import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { WeekserviceService } from './weekservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private Weekdays : WeekserviceService){}

  activeIndex1: number = 0;
  basicOptions: any;
  basicData: any;
  weeks : any[];
  activeIndex2: number = 0;

  scrollableTabs: any[] = Array.from({ length: 50 }, (_, i) => ({ title: `Tab ${i + 1}`, content: `Tab ${i + 1} Content` }));
  items: MenuItem[];

    scrollableItems: MenuItem[];

    activeItem: MenuItem;

    activeItem2: MenuItem;

    ngOnInit() {

      this.Weekdays.getweekbyapi().then(weeks => {
        this.weeks = weeks;
       console.log("weeks",this.weeks)
      });


      this.basicData = {
        labels: this.weeks,
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: '#42A5F5',
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: 'My Second dataset',
                backgroundColor: '#FFA726',
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };
        this.items = [
            {label: 'Home', icon: 'pi pi-fw pi-home'},
            {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
            {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
            {label: 'Documentation', icon: 'pi pi-fw pi-file'},
            {label: 'Settings', icon: 'pi pi-fw pi-cog'}
        ];

        this.scrollableItems = Array.from({ length: 50 }, (_, i) => ({label: `Tab ${i + 1}`}));

        this.activeItem = this.items[0];

        this.activeItem2 = this.scrollableItems[0];
    }
    applyDarkTheme() {
      this.basicOptions = {
          plugins: {
              legend: {
                  labels: {
                      color: '#ebedef'
                  }
              }
          },
          scales: {
              x: {
                  ticks: {
                      color: '#ebedef'
                  },
                  grid: {
                      color: 'rgba(255,255,255,0.2)'
                  }
              },
              y: {
                  ticks: {
                      color: '#ebedef'
                  },
                  grid: {
                      color: 'rgba(255,255,255,0.2)'
                  }
              }
          }
      };
    }

    applyLightTheme() {
      this.basicOptions = {
          plugins: {
              legend: {
                  labels: {
                      color: '#495057'
                  }
              }
          },
          scales: {
              x: {
                  ticks: {
                      color: '#495057'
                  },
                  grid: {
                      color: '#ebedef'
                  }
              },
              y: {
                  ticks: {
                      color: '#495057'
                  },
                  grid: {
                      color: '#ebedef'
                  }
              }
          }
      };

    }
    
}
