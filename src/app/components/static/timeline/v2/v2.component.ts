import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { MatVerticalStepper, MatStep } from '@angular/material/stepper';
import { ContactService } from '../../../../services/contact/contact.service';

@Component({
  selector: 'app-v2',
  templateUrl: './v2.component.html',
  styleUrls: ['./v2.component.css']
})
export class V2Component implements OnInit {
  @ViewChild(MatVerticalStepper) stepper: MatVerticalStepper;
  @ViewChildren('matStep') componentSteps: QueryList<MatStep[]> | any;
  public DynamicSteps: MatStep[] = [];
  public interacted: boolean = false;

  constructor(public contact: ContactService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.stepper._getIndicatorType = () => 'number'; // Para desactivar el comportamiento de los tabs+
      this.componentSteps.toArray();
      this.DynamicSteps = this.componentSteps._results;
      console.log(this.DynamicSteps);
    }, 500);
  }

  stepperEventNode(event: any) {
      let bubble: number = 0;
      for (const iterator of this.DynamicSteps) {
        if (bubble !== event.selectedIndex) {
          iterator.interacted = false;
        } else {
          iterator.interacted = true;
        }
        bubble++;
      }
      // Para patner
      if (event.selectedIndex >= 7 || event.selectedIndex === 0) {
        // tslint:disable-next-line:max-line-length
        this.contact.openSnackBar(`En Atech analizamos tu ${event.selectedStep.ariaLabel} a través de nuestro programa de socios`, 'gray');
        console.log(event.selectedStep.ariaLabel);
        // this.contact.openSnackBar('')
      }
  }
  DisplayHelper() {
    alert('hola mundo');
  }
}
