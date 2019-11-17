import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';


@Component({
  selector: 'app-hombro',
  templateUrl: './hombro.component.html',
  styleUrls: ['../../radiografias.component.css']
})
export class HombroComponent implements OnInit {

  constructor() { }

   ngOnInit() {

   }

   onClick(elem){
      // console.log("select", elem.target, elem.target.attributes.id);
      let title = jQuery(elem.target).attr('title');
      $('path').removeClass('selected');
      $(elem.target).addClass('selected');
      jQuery("#nombre").html(title);
   }

}
