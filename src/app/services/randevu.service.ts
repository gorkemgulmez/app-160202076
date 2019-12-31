import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandevuService {

  constructor() { }

  /*writeOkClick() {
    var sql = 'INSERT INTO medicines (patient_id,doctor_id,medicine_name,description) VALUES (\'' + this.id
      + '\',\'' + 1 + '\', \'' + this.drugName + '\', \'' + this.description + '\')';

    this.executeSqlScript(sql);
    this.backClick();
  }

  writeOnClick() {
    this.isWrite = true;
    this.isUpdate = false;
    this.isDelete = false;
    this.isCrudButton = true;
  }

  deleteOkClick() {
    var sql = 'DELETE FROM medicines WHERE id = ' + this.selectedMedicine.id;

    this.executeSqlScript(sql);

    this.medicines = this.medicines.filter(item => item.id !== this.selectedMedicine.id);
    this.backClick();
    this.medicines = [];
  }


  deleteOnClick() {
    this.isDelete = true;
    this.sqlService.db.executeSql('SELECT * FROM medicines WHERE patient_id = ' + this.id).then((rs: any) => {
      this.sqlService.asArray(rs).then((list) => {
        this.medicines = list;
        console.log(this.medicines);
      });
    });

    this.isUpdate = false;
    this.isWrite = false;
    this.isCrudButton = true;
  }

  updateOkClick() {
    var sql = `UPDATE medicines SET medicine_name = ${this.drugName}, description = ${this.description} WHERE id = ${this.selectedMedicine.id}`;

    this.executeSqlScript(sql);

    this.medicines = [];
    this.backClick();
  }

  updateOnClick() {
    this.isUpdate = true;
    this.sqlService.db.executeSql('SELECT * FROM medicines WHERE patient_id = ' + this.id).then((rs: any) => {
      this.sqlService.asArray(rs).then((list) => {
        this.medicines = list;
        console.log(this.medicines);
      });
    });

    this.isWrite = false;
    this.isDelete = false;
    this.isCrudButton = true;
  }

  checkId(): boolean {
    return !(this.id >= 10000000000 && this.id <= 99999999999);
  }

  backClick() {
    this.isWrite = false;
    this.isDelete = false;
    this.isUpdate = false;
    this.isCrudButton = false;
  }

  private executeSqlScript(sql: string) {
    this.sqlService.db.executeSql(sql, {})
      .then(() => {
        this.theConsole += '\n' + 'Executed SQL' + sql;
        this.presentToast('İşlem başarılı.');
      })
      .catch(e => {
        this.theConsole += 'Error: ' + JSON.stringify(e);
        this.presentToast('Eksik veya yanlış giriş yaptınız.');
      });
  }*/

}
