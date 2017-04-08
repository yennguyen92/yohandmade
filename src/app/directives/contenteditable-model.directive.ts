import {Directive, ElementRef, Input, Output, EventEmitter, OnChanges} from "@angular/core";

@Directive({
  selector: '[contenteditableModel]',
  host: {
    '(blur)': 'onEdit()'
  }
})

export class ContenteditableModelDirective implements OnChanges {
  @Input('contenteditableModel') model: string;
  @Output('contenteditableModelChange') changeEvent = new EventEmitter();

  constructor(
    private elementRef: ElementRef
  ) {
    //console.log('ContentEditableDirective.constructor');
  }

  ngOnChanges(changes: any) {
    console.log('ContentEditableDirective.ngOnChanges');
    //console.log(changes);
    if (changes.model){
      this.refreshView(changes.model);
    }
  }

  onEdit() {
    console.log('ContentEditableDirective.onEdit');
    let value = this.elementRef.nativeElement.innerHtml
    this.model = value;
    this.changeEvent.emit(value)
  }

  private refreshView(model:any) {
    console.log('ContentEditableDirective.refreshView');
    this.elementRef.nativeElement.innerHtml = model.currentValue;
  }
}
