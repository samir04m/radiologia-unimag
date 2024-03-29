import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-rodilla',
  templateUrl: './rodilla.component.html',
  styleUrls: ['../../radiografias.component.css']
})
export class RodillaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClick(elem){
     let title = jQuery(elem.target).attr('title');
     $('path').removeClass('selected');
     $(elem.target).addClass('selected');
     jQuery("#nombre").html(title);
  }

  onClick2(elem){
     let title = jQuery(elem.target).attr('title');
     $('path').removeClass('selected');
     $(elem.target).addClass('selected');
     jQuery("#nombre2").html(title);
  }

}
