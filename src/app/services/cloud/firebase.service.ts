import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore) { }

  create_Appointment(appointment) {
    return this.firestore.collection('appointments').add(appointment);
  }
 
  read_Appointment() {
    return this.firestore.collection('appointments').snapshotChanges();
  }
 
  update_Appointment(appointment_id, appointment){
    this.firestore.doc('appointments/' + appointment_id).update(appointment);
  }
 
  delete_Appointment(appointment_id) {
    this.firestore.doc('appointments/' + appointment_id).delete();
  }
  
}
