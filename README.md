---

# 📘 Question Bank & Examination System – Project Documentation

## 📌 Project Overview

A **ReactJS-based web application** designed to create and manage a centralized question bank across various universities and subjects. The system enables faculty to submit questions, examination cell admins to manage users and exams, and students to take exams online. The application supports role-based access, automatic exam generation, and real-time exam submissions.

---

## 🎯 Key Features

- Collect questions from faculty across multiple universities.
- Maintain a question bank per subject.
- Auto-generate question papers based on selected criteria (e.g., number of questions, difficulty level).
- Role-based access for Faculty, Examination Cell Admin, Students, and Admin.
- Online examination with auto-submit on timeout.
- Centralized viewing of submitted answers for review and analysis.

---

## 👥 User Roles & Responsibilities

### **Faculty**
- Enter questions with answer options.
- Manage questions across multiple subjects.

### **Examination Cell Admin**
- **Faculty Management:**
  - Add/Edit/Delete faculty.
  - Assign subjects to faculty.
- **Student Management:**
  - Add/Edit student details.
  - Assign tests/exams.
  - Send exam invitations via email.
- **Exam Management:**
  - Create question papers.
  - Assign exams to students (online/offline).
  - Set exam timing for online tests.
  - Review submitted exams in a consolidated view.

### **Admin**
- Manage users with different roles.
- Assign roles (Admin, Faculty, Exam Cell Admin, Student).
- Monitor exam statistics (by subject/date).
- Generate result reports.

### **Student**
- Access assigned online exams.
- Attempt and submit exams within allotted time.
- Automatic submission if time expires.

---

## 🧩 UI Modules

### 1. **Question Entry (Faculty)**
- Form to input:
  - Subject Name
  - Question Text
  - Question Type:
    - Multiple Choice
    - Short Theory
    - Long Theory
    - Yes/No
  - Complexity Level
  - Correct Answer (for objective-type questions)

### 2. **Create Question Paper (Exam Cell Admin)**
- Select Subject
- Choose:
  - Number of questions
  - Type of questions
  - Complexity levels
- Select Exam Type:
  - Online (send test link to students)
  - Offline (generate printable version)
- Set time limit (for online exams)

### 3. **Student Exam Interface**
- View assigned exams.
- Attempt questions and submit.
- Auto-submit on time expiration.
- Instant scoring upon submission.

---

## 📦 Technical Stack

- **Frontend:**
  - ReactJS
  - Bootstrap

- **Backend:**
  - Java 8
  - Spring Boot
  - RESTful APIs
  - Lombok

- **Database:**
  - MySQL

---

## ✅ Summary

This project offers a seamless solution for managing question banks, generating exams, and conducting online tests. With clearly defined roles and automated flows, it improves efficiency and reliability in the examination process across educational institutions.
