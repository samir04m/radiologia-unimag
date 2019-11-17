import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-muneca',
  templateUrl: './muneca.component.html',
  styleUrls: ['../../radiografias.component.css']
})
export class MunecaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClick(elem){
     let title = jQuery(elem.target).attr('title');
     $('path').removeClass('selected');
     $(elem.target).addClass('selected');
     jQuery("#nombre").html(title);
  }

}
