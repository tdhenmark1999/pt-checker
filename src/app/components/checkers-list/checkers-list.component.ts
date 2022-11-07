import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Checker } from 'src/app/models/checker.model';
import { CheckerService } from 'src/app/services/checker.service';

@Component({
  selector: 'app-checkers-list',
  templateUrl: './checkers-list.component.html',
  styleUrls: ['./checkers-list.component.css']
})
export class CheckersListComponent implements OnInit {

  checkers?:any;
  currentChecker: any;
  currentIndex = -1;
  id = '';
  searchText:any;
  ptCheckerValue:any;
  checkersContainer:any;
  checkersContainerEmpty:any;
  statusCode:any;
  btnLoading:any;
  btnSubmit:any;

  constructor(private checkerService: CheckerService) { }

  ngOnInit(): void {

    this.btnLoading = false;
    this.btnSubmit = true;

  }



  refreshList(): void {
    this.currentChecker = {};
    this.currentIndex = -1;
  }

  setActiveChecker(checker: Checker, index: number): void {
    this.currentChecker = checker;
    this.currentIndex = index;
  }
  // keyPressAlphanumeric(event) {
  //
  //   var inp = String.fromCharCode(event.keyCode);
  //
  //   if (/[a-zA-Z0-9]/.test(inp)) {
  //     return true;
  //   } else {
  //     event.preventDefault();
  //     return false;
  //   }
  // }
  searchPostId(): void {
    this.btnLoading = true;
    this.btnSubmit = false;
    if (this.id === '') {
      window.alert("Please Enter ID");
      this.btnLoading = false;
      this.btnSubmit = true;
      this.checkers = null;
    } else if(this.id != '') {
      this.checkers = null;
      this.currentChecker = {};
      this.currentIndex = -1;


      this.checkerService.findPawnTicket(this.id)


        .subscribe(
          data => {

              this.btnLoading = false;
              this.btnSubmit = true;
              this.checkers = data.body;
              this.statusCode = data.status;
              console.log(data);


          },
          e => {
            console.error(e);
            this.statusCode = e.status;
            this.btnLoading = false;
            this.btnSubmit = true;
          });

    }


  }
}
