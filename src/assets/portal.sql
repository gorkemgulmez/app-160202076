DROP TABLE clinics;
CREATE TABLE IF NOT EXISTS clinics (id INTEGER PRIMARY KEY AUTOINCREMENT, clinic_name TEXT);
INSERT INTO clinics (clinic_name) VALUES ('cildiye');
INSERT INTO clinics (clinic_name) VALUES ('dis');
INSERT INTO clinics (clinic_name) VALUES ('kbb');
INSERT INTO clinics (clinic_name) VALUES ('noroloji');

DROP TABLE doctors;
CREATE TABLE IF NOT EXISTS doctors (id INTEGER PRIMARY KEY AUTOINCREMENT, doctor_name TEXT, clinic_id INTEGER, username TEXT, d_password TEXT);
INSERT INTO doctors (doctor_name, clinic_id, username, d_password) VALUES ('Hakan Kişi', '1',  'hakankisi', '123456');
INSERT INTO doctors (doctor_name, clinic_id, username, d_password) VALUES ('Mehmet Kişi', '1',  'mehmetkisi', '123456');
INSERT INTO doctors (doctor_name, clinic_id, username, d_password) VALUES ('Ayşe Kişi', '2',  'aysekisi', '123456');
INSERT INTO doctors (doctor_name, clinic_id, username, d_password) VALUES ('Fatma Kişi', '2',  'fatmakisi', '123456');
INSERT INTO doctors (doctor_name, clinic_id, username, d_password) VALUES ('Murat Kişi', '3',  'muratkisi', '123456');
INSERT INTO doctors (doctor_name, clinic_id, username, d_password) VALUES ('Recep Kişi', '3',  'recepkisi', '123456');
INSERT INTO doctors (doctor_name, clinic_id, username, d_password) VALUES ('Kübra Kişi', '4',  'kubrakisi', '123456');

DROP TABLE patients;
CREATE TABLE IF NOT EXISTS patients (id INTEGER PRIMARY KEY AUTOINCREMENT, patient_name TEXT, username TEXT, p_password TEXT);
INSERT INTO patients (patient_name, username, p_password) VALUES ('Görkem G', 'gorkemg', '123456');
INSERT INTO patients (patient_name, username, p_password) VALUES ('Kübra C', 'kubrac', '123456');
INSERT INTO patients (patient_name, username, p_password) VALUES ('Recep K', 'recepk', '123456');
INSERT INTO patients (patient_name, username, p_password) VALUES ('Mehmet K', 'mehmetk', '123456');
INSERT INTO patients (patient_name, username, p_password) VALUES ('Cihangir B', 'cio', '123456');

DROP TABLE appointments;
CREATE TABLE IF NOT EXISTS appointments (id INTEGER PRIMARY KEY AUTOINCREMENT, patient_id INTEGER, doctor_id INTEGER, appointment_time TIME);
INSERT INTO appointments (patient_id, doctor_id, appointment_time) VALUES ('1', '1', '12:00');

DROP TABLE medicines;
CREATE TABLE IF NOT EXISTS medicines (id INTEGER PRIMARY KEY AUTOINCREMENT, patient_id INTEGER, doctor_id INTEGER, medicine_name TEXT, description TEXT);
INSERT INTO medicines (patient_id, doctor_id, medicine_name, description) VALUES ('1', '1', 'deneme', 'deneme');

DROP TABLE analyzes;
CREATE TABLE IF NOT EXISTS analyzes  (id INTEGER PRIMARY KEY AUTOINCREMENT, patient_id INTEGER, doctor_id INTEGER, analysis_name TEXT, description TEXT);

DROP TABLE surgeons;
CREATE TABLE IF NOT EXISTS surgeons (id INTEGER PRIMARY KEY AUTOINCREMENT, doctor_id INTEGER, patient_id INTEGER, surgeon_type TEXT, surgeon_time TIME);
INSERT INTO surgeons (doctor_id, patient_id, surgeon_type, surgeon_time) VALUES ('1', '2', 'type1', '12:00');
INSERT INTO surgeons (doctor_id, patient_id, surgeon_type, surgeon_time) VALUES ('1', '2', 'type2', '13:00');
INSERT INTO surgeons (doctor_id, patient_id, surgeon_type, surgeon_time) VALUES ('1', '2', 'type3', '14:00');

DROP TABLE doctor_vacations;
CREATE TABLE IF NOT EXISTS doctor_vacations (doctor_id INTEGER, start_date datetime, end_date datetime, vacation_type TEXT);

