//https://plnkr.co/edit/Mm4OXhDIhsr7AJ7vX8tc?p=preview
import { Directive, HostListener, Input, ElementRef, OnInit, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[dataModel]'
})
export class ContenteditableModelDirective implements OnInit, OnChanges {
  @Input() dataModel:string;
  @Input() inline:boolean;
  @Input() editable:boolean;
  @Output() dataModelChange = new EventEmitter();
  @Output() change =  new EventEmitter();
  private originValue:string;
  private countClicked:number;
  constructor(private elementRef: ElementRef) {}

  /*
   * Set the color based on actual or default placeholder color
   */
  ngOnInit() {
    if(this.dataModel) {
      this.elementRef.nativeElement.innerText = this.dataModel;
    }else {
      this.elementRef.nativeElement.innerText = '';
    }
    this.countClicked = 0;
    this.originValue = this.dataModel;
    this.elementRef.nativeElement.contentEditable = false;
  }
  /*
   * Below will be triggered if source is modified in aside section
   */
  ngOnChanges(changes: SimpleChanges) {
    if(changes['dataModel'].currentValue !== changes['dataModel'].previousValue){
      const cv = changes['dataModel'].currentValue;
      this.elementRef.nativeElement.innerText = cv;
    }

  }

  @HostListener('click', ['$event'])
  onFocus($event: any) {
    if(this.editable || this.elementRef.nativeElement.getAttribute('editable')=='true') {
      if(!this.elementRef.nativeElement.oneClick){
        this.countClicked++;
        if (this.countClicked >= 2) {
          this.elementRef.nativeElement.contentEditable = true;
          this.elementRef.nativeElement.focus();
        } else {
          let _this = this;
          setTimeout(() => {
            if (this.countClicked < 2) {
              this.countClicked=0;
              this.elementRef.nativeElement.oneClick = true;
              this.elementRef.nativeElement.click();
            }
          }, 300);
        }
        return false;
      }else{
        this.elementRef.nativeElement.oneClick = false;
      }
    }

  }

  @HostListener('dblclick', ['$event'])
  onDoubleClick($event: any) {
    var election = window.getSelection();
    election.collapseToStart();
  }

  @HostListener('keydown', ['$event'])
//http://stackoverflow.com/questions/18552336/prevent-contenteditable-adding-div-on-enter-chrome
  onInput($event: any) {
    if ($event.key === 'Enter') {
      if (!this.inline) {
        // insert 2 br tags (if only one br tag is inserted the cursor won't go to the next line)
        //http://stackoverflow.com/questions/37521298/how-to-inject-document-in-angular-2-service
        document.execCommand('insertHTML', false, '<br/>');// --> https://www.bennadel.com/blog/3235-creating-a-simple-copy-to-clipboard-directive-in-angular-2-4-9.htm
        // prevent the default behaviour of return key pressed
      }
      return false;
    }
  }

  @HostListener('keyup', ['$event'])
  onChange($event: any) {
    const value = this.elementRef.nativeElement.innerText;
    this.dataModel = value;
    this.dataModelChange.emit(value);
  }

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
    //const value = this.elementRef.nativeElement.innerText;
    this.elementRef.nativeElement.contentEditable=false;
    this.countClicked=0;
    if(this.dataModel !== this.originValue){
      this.originValue = this.dataModel;
      this.change.emit(this.dataModel);
    }

  }


}
