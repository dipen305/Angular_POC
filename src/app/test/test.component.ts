import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { PlaceholderDirective } from '../directives/placeholder.directive';
import { ErrorModalComponent } from '../shared/error-modal/error-modal.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  @ViewChild(PlaceholderDirective, { static: true }) alertHost!: PlaceholderDirective;

  constructor() { }

  ngOnInit(): void {
  }

  onTest() {
    this.showErrorAlert('hello');
  }

  private showErrorAlert(message: string) {
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();
    const componentRef = hostViewContainerRef.createComponent(ErrorModalComponent);
    componentRef.instance.errorMessage = message;
  }

}
