import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-sacroglutea',
  templateUrl: './sacroglutea.component.html',
  styleUrls: ['../../radiografias.component.css']
})
export class SacrogluteaComponent implements OnInit {

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
  onClick3(elem){
     let title = jQuery(elem.target).attr('title');
     $('path').removeClass('selected');
     $(elem.target).addClass('selected');
     jQuery("#nombre3").html(title);
  }

}
