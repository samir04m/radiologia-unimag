import { Component, OnInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sacroglutea',
  templateUrl: './sacroglutea.component.html',
  styles: ['../../radiografias.component.css']
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

}
