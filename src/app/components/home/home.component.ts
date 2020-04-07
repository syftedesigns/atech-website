import { Component, OnInit, AfterViewInit, ViewChild, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { MatVerticalStepper, MatStep } from '@angular/material/stepper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild(MatVerticalStepper) stepper: MatVerticalStepper;
  // Patners

  // @ViewChild('matStep') step0: ElementRef<MatStep>;
  // https://github.com/angular/components/issues/15478 - para los timeline de diferente color
  // Alojamos el array de pasos
  @ViewChildren('matStep') componentSteps: QueryList<MatStep[]> | any;
  public DynamicSteps: MatStep[] = [];

  // tslint:disable-next-line:no-inferrable-types
  public interacted: boolean = false;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.stepper._getIndicatorType = () => 'number'; // Para desactivar el comportamiento de los tabs+
      this.componentSteps.toArray();
      this.DynamicSteps = this.componentSteps._results;
      console.log(this.DynamicSteps[0]);
      this.DynamicSteps[1].content.elementRef.nativeElement.parentElement.style.background = 'Background-color: orange';
      // this.DynamicSteps[0].content.elementRef.nativeElement.parentElement.style.background
    }, 500);
  }

  ngAfterViewInit() {
  }
  // Simbolo "X" y "+" del Timeline
  stepperEventNode(event: any) {
    // for (let x = 0; x < Number(this.componentSteps._results.length); x++) {
      // this.componentSteps._results[x].interacted = false;
      // if (event.selectedIndex === x) {
        // Accedemos al step y le colocamos como true
        // this.componentSteps._results[x].interacted = true;
        // console.log(this.componentSteps._results[x]);
     //  }
      // Debemos eliminar el previous por si pinchamos otro tab
      // this.componentSteps._results[event.previouslySelectedIndex].interacted = false;
      // this.DynamicSteps[event.selectedIndex].interacted = false;
      // this.DynamicSteps[event.previouslySelectedIndex].interacted = true;
      // Hacemos un barrido para que todos se coloquen en "+" excepto el que estamos actualmente
      // tslint:disable-next-line:no-inferrable-types
      let bubble: number = 0;
      for (const iterator of this.DynamicSteps) {
        if (bubble !== event.selectedIndex) {
          iterator.interacted = false;
        } else {
          iterator.interacted = true;
        }
        bubble++;
      }
  }
  /*selectedIndex: 0
    previouslySelectedIndex: 1
*/
}
