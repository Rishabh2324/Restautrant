import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Feedback, ContactType } from '../shared/feedback';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  @ViewChild('fform') feedbackFormDirective;           //This ensures that form is completely reset

  feedbackForm: FormGroup;                             //declaring variables to use use created classes
  feedback: Feedback;                                  //declaring variables to use use created classes
  contactType = ContactType;                           //declaring variables to use use created classes
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {                                       //this is reactive for the non ui part , now its view is is shown in html file .The data flow from the non-uipasrt to th Ui part
    this.feedbackForm = this.fb.group({
      firstname: ['', Validators.required],            //using validators in the form
      lastname: ['', Validators.required],
      telnum: ['', Validators.required],
      email: ['', Validators.required],
      agree: false,
      contacttype: 'None',
      message: ''
    });

  }
  onSubmit() {
    this.feedback = this.feedbackForm.value;        //on cliking the submit button this functions actuates and the data flows from the non-ui part to the Ui part
    console.log(this.feedback);
    this.feedbackForm.reset({                       //further submitting the form the form resets
      firstname: '',
      lastname: '',
      telnum: '',
      email: '',
      agree: false,
      contacttype: 'None',
      message: ''
    });
    this.feedbackFormDirective.resetForm();
  }
}
