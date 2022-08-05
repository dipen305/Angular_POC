import { Component, OnInit, ViewChild } from '@angular/core';
import { PlaceholderDirective } from '../directives/placeholder.directive';
import { ErrorModalComponent } from '../shared/error-modal/error-modal.component';

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.scss']
})
export class DynamicComponentComponent implements OnInit {
  @ViewChild(PlaceholderDirective, { static: true }) alertHost!: PlaceholderDirective;

  constructor() { }

  ngOnInit(): void {
  }

  onDynamic() {
    this.showErrorAlert('Component created dynamically!');
  }

  private showErrorAlert(message: string) {
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();
    const componentRef = hostViewContainerRef.createComponent(ErrorModalComponent);
    componentRef.instance.errorMessage = message;
  }
}
