import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { createStore } from 'redux';



@Component({
  selector: 'app-day32-challenge',
  templateUrl: './day32-challenge.component.html',
  styleUrls: ['./day32-challenge.component.css']
})
export class Day32ChallengeComponent implements OnInit {

  reducer: any;
  store: any;

  constructor() { }
  users = [{
    "id": 1,
    "first_name": "Jeanette",
    "last_name": "Penddreth",
    "email": "jpenddreth0@census.gov",
    "gender": "Female",
    "ip_address": "26.58.193.2",
    "approved": true
  }, {
    "id": 2,
    "first_name": "Giavani",
    "last_name": "Frediani",
    "email": "gfrediani1@senate.gov",
    "gender": "Male",
    "ip_address": "229.179.4.212",
    "approved": true
  }, {
    "id": 3,
    "first_name": "Noell",
    "last_name": "Bea",
    "email": "nbea2@imageshack.us",
    "gender": "Female",
    "ip_address": "180.66.162.255",
    "approved": false
  }, {
    "id": 4,
    "first_name": "Willard",
    "last_name": "Valek",
    "email": "wvalek3@vk.com",
    "gender": "Male",
    "ip_address": "67.76.188.26",
    "approved": true
  }];

  videos = [
    {
      "videos": [
        { "title": "Set Default Location", "id": 0, "videos": ["0_0"], "description": "Set Default Location is needed first before start creating projects." },
        { "title": "Create Routes", "id": 1, "videos": ["1_0"], "description": "Routes are composed of two sites.  Once a route is created, it can be selected for Traffic and Transportation activities." },
        { "title": "Create Project", "id": 2, "videos": ["2_0"], "description": "User needs to make sure default view is the right location for the project.  Once it's identified, simply click and drag an operation onto the map and follow the wizard." },
        { "title": "Edit Operation", "id": 3, "videos": ["3_0"], "description": "This video explains how to Edit Operation from the parameters tab.  It explains element input fields, route selection, input data as batch." }
      ]
    }
  ]

  vendors = [{
    "id": 1,
    "name": "Martinez Excavation",
    "description": "Swimming Pool dirt fill up by two feet",
    "amount": 1100,
    "data": "6/11/2020",
    "paid": true
  }, {
    "id": 2,
    "name": "Miguel",
    "description": "Resbaladero five feet tall, 3 feet wide (u-sahpe)",
    "amount": 4700,
    "data": "6/11/2020",
    "paid": false
  }, {
    "id": 3,
    "name": "Mario - cunado de Jaime",
    "description": "Plomero adding pipes for return extension.  Jet installation, carrito para la basure, pipe installation for slide.  Valves (3) for return, carrito and slide.",
    "amount": 700,
    "data": "6/11/2020",
    "paid": false
  }, {
    "id": 4,
    "name": "Concreto",
    "description": "Concreto sobre la barilla",
    "amount": 5500,
    "data": "6/11/2020",
    "paid": false
  }, {
    "id": 5,
    "name": "Luz",
    "description": "Luz de 12V no es peligrosa.  Run power line to the source",
    "amount": 1500,
    "data": "6/11/2020",
    "paid": false
  }, {
    "id": 6,
    "name": "Plaster",
    "description": "Colored plaster to be added to pool",
    "amount": 5000,
    "data": "6/11/2020",
    "paid": false
  }, {
    "id": 7,
    "name": "Jose Primer Plomero",
    "description": "Plomero Tester",
    "amount": 200,
    "data": "6/11/2020",
    "paid": true
  }];


  ngOnInit() {
    var nums = [2, 4, 6, 10, 16];
    var femaleUsers = this.users.filter(user => {
      return user.gender == "Male";
    });
    console.log('User: ' + this.getUser(1));
    console.log(this.geGendertArray('Female'));
    console.log(this.geGendertArray('Male'));
    console.log(this.setApproved(false));
    console.log(this.setApproved(true));
    console.log(this.setApprovedNormal(false));
    console.log(this.reduceSumIds());
    console.log(this.chainingFuncs(nums));
    console.log(this.createIdsArray());
    console.log(this.createVideoList());
    console.log(this.getApprovedUsers());
    console.log('Grand total: ' + this.listVendors());
    console.log('Total owed: ' + this.listTotalOwed());
  }

  listTotalOwed(){
    
    return this.vendors.filter(svc => {
      return svc.paid == false;
    }).reduce((acc, svc) => {
      return acc + svc.amount;
    },0)
  }
  //list of vendors and grand total
  listVendors(){
    return _.map(this.vendors, 'amount')
    .reduce(function(sum,n){
      return sum + n;
    })

    // return this.vendors.map( ven => {
    //   return {vendor: ven.name, amount: ven.amount};
    // })
    // .map(val => {
    //   console.log(val);
    //   return val.amount;
    // })
    // .reduce((acc,amount) => {
    //   return acc + amount;
    // },0)
  }

  geGendertArray(gender: string) {
    return this.users.filter(u => {
      return u.gender == gender;
    })
  }

  getUser(id: number) {
    this.users.find(user => {
      return user.id === id;
    });
  }

  /****
   * setting object literal
   */
  setApproved(isApproved: boolean) {
    return this.users.map(user => ({
      ...user,
      approved: isApproved
    }))
  }

  setApprovedNormal(isApproved: boolean) {
    return this.users.map(u => {
      u.approved = isApproved;
      return u;
    })
  }

  reduceSumIds() {
    return this.users.map(u => {
      return u.id;
    })
      .reduce((acc, id) => {
        return acc + id;
      }, 20);
  }

  chainingFuncs(nums: number[]) {
    return nums.map(n => {
      n = n - 1;
      return n;
    }).map(n => {
      n = n * n;
      return n;
    }).filter(n => {
      return n % 3 == 0;
    }).reduce((acc, n) => {
      return acc + n;
    }, 0)
  }

  //this returns an array of ids[1,2,3,4]
  createIdsArray() {
    return _.map(this.users, 'id');
  }

  //returns an array of video objects
  createVideoList(){
    return _.map(this.videos,'videos');
  }

  isApproved = (user) => {return user.approved;}
  getApprovedUsers(){
    return this.users.filter(this.isApproved);
  }
  
}
