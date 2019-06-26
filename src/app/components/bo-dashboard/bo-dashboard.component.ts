import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { CoopThingService} from '../../services/coopThingService.service';
import { CoopDTO} from "../../../../src/dto/CoopDTO"
import { ActionEventService} from '../../services/action-event.service';
import { ParamDTO } from '../../../../src/dto/ParamDTO';
//import { LabelEventService} from '../../services/label.service';
import { LabelService } from '../../services/label.service';
import { sigma } from 'sigma';
import {ThingDTO} from '../../../../src/dto/ThingDTO';
import { ThingService} from '../../services/thing.service';
import {LabelDTO} from '../../../../src/dto/LabelDTO';
import {ActioneventDTO} from '../../../../src/dto/ActioneventDTO';

declare var $: any;
declare var arbor: any;
declare var s : any;

@Component({
  selector: 'app-bo-dashboard',
  templateUrl: './bo-dashboard.component.html',
  styleUrls: ['./bo-dashboard.component.css']
})
export class BoDashboardComponent implements OnInit {
  private sys;
  public coopList: Array<CoopDTO>;
  public thingListId: Array<String>;
  public thingsWorking: Array<ThingDTO>;
  public labelShow :Array<LabelDTO>;
  public actionList : Array<ActioneventDTO>;
  public eventList : Array<ActioneventDTO>;

  constructor(private router : Router,private coopThingService:CoopThingService, private actionEventService:ActionEventService,
     private labelService:LabelService, private thingService:ThingService ) {
    this.router.onSameUrlNavigation = 'reload';
  }

  ngOnInit() {





   sigma.utils.pkg('sigma.canvas.edges');
   sigma.canvas.edges.t = function(edge, source, target, context, settings) {
     var color = edge.color,
         prefix = settings('prefix') || '',
         edgeColor = settings('edgeColor'),
         defaultNodeColor = settings('defaultNodeColor'),
         defaultEdgeColor = settings('defaultEdgeColor');

     if (!color)
       switch (edgeColor) {
         case 'source':
           color = source.color || defaultNodeColor;
           break;
         case 'target':
           color = target.color || defaultNodeColor;
           break;
         default:
           color = defaultEdgeColor;
           break;
       }

     context.strokeStyle = color;
     context.lineWidth = edge[prefix + 'size'] || 1;
     context.beginPath();
     context.moveTo(
       source[prefix + 'x'],
       source[prefix + 'y']
     );
     context.lineTo(
       source[prefix + 'x'],
       target[prefix + 'y']
     );
     context.lineTo(
       target[prefix + 'x'],
       target[prefix + 'y']
     );
     context.stroke();
   };

   // Now, let's use the renderer
   var i,
       s,
       N = 50,
       E = 150,
       g = {
         nodes: [],
         edges: []
       },
       colors = [
         '#617db4',
         '#668f3c',
         '#c6583e',
         '#b956af'
       ];

   // Generate a random graph:
   for (i = 0; i < N; i++)
     g.nodes.push({
       id: 'n' + i,
       label: 'Node ' + i,
       x: Math.random(),
       y: Math.random(),
       size: Math.random(),
       color: colors[Math.floor(Math.random() * colors.length)]
     });

   for (i = 0; i < E; i++)
     g.edges.push({
       id: 'e' + i,
       source: 'n' + (Math.random() * N | 0),
       target: 'n' + (Math.random() * N | 0),
       size: Math.random(),
       type: 't'
     });

   // Instantiate sigma:
   s = new sigma({
     graph: g,
     renderer: {
       // IMPORTANT:
       // This works only with the canvas renderer, so the
       // renderer type set as "canvas" is necessary here.
       container: 'g-container',
       type: 'canvas'
     }
   });

    // Generate a random graph:
    // for (i = 0; i < N; i++)
    //   g.nodes.push({
    //     id: 'n' + i,
    //     label: 'Node ' + i,
    //     x: Math.random(),
    //     y: Math.random(),
    //     size: Math.random(),
    //     color: '#666'
    //   });
    //
    // for (i = 0; i < E; i++)
    //   g.edges.push({
    //     id: 'e' + i,
    //     source: 'n' + (Math.random() * N | 0),
    //     target: 'n' + (Math.random() * N | 0),
    //     size: Math.random(),
    //     color: '#ccc'
    //   });

    // Instantiate sigma:
  }



}