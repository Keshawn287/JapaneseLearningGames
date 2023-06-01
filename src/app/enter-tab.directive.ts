import { Directive, Renderer2, ContentChildren, QueryList, AfterViewInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appEnterTab]'
})
export class EnterTabDirective implements AfterViewInit {
  @ContentChildren("nextTab") controls!: QueryList<any>;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.controls.changes.subscribe(controls => {
      this.createKeydownEnter(controls);
    });

    if (this.controls.length) {
      this.createKeydownEnter(this.controls);
    }
  }

  private createKeydownEnter(querycontrols: QueryList<any>) {
    querycontrols.forEach(c => {
      this.renderer.listen(c.nativeElement, 'keydown.enter', (event: KeyboardEvent) => {
        if (this.controls.last !== c) {
          const controls = querycontrols.toArray();
          const index = controls.findIndex((d: any) => d === c);

          if (index >= 0) {
            const nextControl = controls.find((n: any, i: number) => {
              return n && !n.nativeElement.attributes.disabled && i > index;
            });

            if (nextControl) {
              nextControl.nativeElement.focus();
              event.preventDefault();
            }
          }
        }
      });
    });
  }
}
