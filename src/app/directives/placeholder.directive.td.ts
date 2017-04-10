//https://plnkr.co/edit/Mm4OXhDIhsr7AJ7vX8tc?p=preview
import { Directive, HostListener, Input, ElementRef, OnInit, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[dataModel]'
})
export class PlaceholderDirective implements OnInit, OnChanges {
  @Input() dataModel:string;
  @Output() dataModelChange = new EventEmitter();
  @Output() change =  new EventEmitter();
  constructor(private elementRef: ElementRef) {}

  @HostListener('keydown', ['$event'])
//http://stackoverflow.com/questions/18552336/prevent-contenteditable-adding-div-on-enter-chrome
  onInput($event: any) {
    if ($event.key === 'Enter') {
      // insert 2 br tags (if only one br tag is inserted the cursor won't go to the next line)
      document.execCommand('insertHTML', false, '<br/>');// --> https://www.bennadel.com/blog/3235-creating-a-simple-copy-to-clipboard-directive-in-angular-2-4-9.htm
      // prevent the default behaviour of return key pressed
      return false;
    }
  }

  @HostListener('keyup', ['$event'])
  onChange($event: any) {
    const value = this.elementRef.nativeElement.innerText;
    this.dataModel = value;
    this.dataModelChange.emit(value);
  }
  // @HostListener('click', ['$event'])
  // onFocus($event: any) {
  //   const value = this.elementRef.nativeElement.innerText;
  //   if(value === this.ceDefault) {
  //     this.elementRef.nativeElement.innerText = '';
  //   }
  // }
  // @HostListener('blur', ['$event'])
  // onFocusout($event: any) {
  //   let value = this.elementRef.nativeElement.innerText;
  //   value = value.replace(/(\r\n|\n|\r)/gm, '');
  //   if(value === '') {
  //     this.elementRef.nativeElement.innerText = this.ceDefault;
  //   }
  // }

  @HostListener('blur', ['$event'])
  onFocusout($event: any) {
    const value = this.elementRef.nativeElement.innerText;
    this.change.emit(value);
  }

  /*
   * Set the color based on actual or default placeholder color
   */
  ngOnInit() {
    if(this.dataModel) {
      this.elementRef.nativeElement.innerText = this.dataModel;
    }else {
      this.elementRef.nativeElement.innerText = '';
    }
  }
  /*
   * Below will be triggered if source is modified in aside section
   */
  ngOnChanges(changes: SimpleChanges) {
    const cv = changes['dataModel'].currentValue;
    this.elementRef.nativeElement.innerText = cv;
  }
}
