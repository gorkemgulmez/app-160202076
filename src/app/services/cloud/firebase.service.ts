import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore) { }

  /*
    db_name
  * appointments -> randevu
  * surgeons -> ameliyat
  * medicines -> ilaçlar
  * analyzes -> analiz
  */
  create(db_name: string, id: string, data) {
    //this.firestore.firestore.onSnapshotsInSync()
    return this.firestore.collection(db_name).doc(id).set(data);
  }
 
  read(db_name: string) {
    return this.firestore.collection(db_name).snapshotChanges();
  }
 
  update(db_name: string, id: string, data){
    this.firestore.doc( db_name + '/' + id).update(data);
  }
 
  delete(db_name: string, id: string) {
    this.firestore.doc( db_name + '/' + id).delete();
  }
  
}
