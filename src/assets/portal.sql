DROP TABLE clinics;
CREATE TABLE IF NOT EXISTS clinics (id INTEGER PRIMARY KEY AUTOINCREMENT, clinic_name TEXT);

DROP TABLE doctors;
CREATE TABLE IF NOT EXISTS doctors (doctor_name TEXT, clinic_id INTEGER, username PRIMARY KEY TEXT, d_password TEXT);

DROP TABLE patients;
CREATE TABLE IF NOT EXISTS patients (tc_no VARCHAR(11) PRIMARY KEY, patient_name TEXT, p_password TEXT);

DROP TABLE appointments;
CREATE TABLE IF NOT EXISTS appointments (id INTEGER PRIMARY KEY AUTOINCREMENT, patient_id INTEGER, doctor_id INTEGER, appointment_time TIME);

DROP TABLE medicines;
CREATE TABLE IF NOT EXISTS medicines (id INTEGER PRIMARY KEY AUTOINCREMENT, patient_id INTEGER, doctor_id INTEGER, medicine_name TEXT, description TEXT);

DROP TABLE analyzes;
CREATE TABLE IF NOT EXISTS analyzes  (id INTEGER PRIMARY KEY AUTOINCREMENT, patient_id INTEGER, doctor_id INTEGER, analysis_name TEXT, description TEXT);

DROP TABLE surgeons;
CREATE TABLE IF NOT EXISTS surgeons (id INTEGER PRIMARY KEY AUTOINCREMENT, doctor_id INTEGER, patient_id INTEGER, surgeon_type TEXT, surgeon_time TIME);

DROP TABLE doctor_vacations;
CREATE TABLE IF NOT EXISTS doctor_vacations (doctor_id INTEGER, start_date datetime, end_date datetime, vacation_type TEXT);

