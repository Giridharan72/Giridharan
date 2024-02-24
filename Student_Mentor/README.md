# ZEN-Mentos-Backend

# Mentor and Student Assigning with Database

FrontEnd  [https://preethi-st.github.io/ZEN-Mentors-Frontend/](https://giridharan-1.onrender.com)

Agenda

----------------------------------------------------------------------------------------------

1.Write API to create Mentor

2.Write API to create Student

3.Write API to Assign a student to Mentor
   > Select one mentor and Add multiple Student
   
   > A student who has a mentor should not be shown in List

4.Write API to Assign or Change Mentor for particular Student
   > Select One Student and Assign one Mentor
   
5.Write API to show all students for a particular mentor

--------------------------------------------------------------------------------------------------

Base URL [https://zen-assign-mentors.herokuapp.com](https://giridharan-1.onrender.com)

# Mentor Api's

<pre>GET          <a href="[https://zen-assign-mentors.herokuapp.com](https://giridharan-1.onrender.com)/mentors">/Mentors </a></pre>

<pre>POST         <a href="[https://zen-assign-mentors.herokuapp.com](https://giridharan-1.onrender.com)/mentors">/Mentors </a></pre>

<pre>GET by ID    <a href="https://giridharan-1.onrender.com/mentors/get-mentor/65da0398c8b012218851be75">/Mentors/get-mentor/:ID </a></pre>

# Student Api's

<pre>GET          <a href="[https://zen-assign-mentors.herokuapp.com](https://giridharan-1.onrender.com)/students"> /Students </a></pre>

<pre>POST         <a href="[https://zen-assign-mentors.herokuapp.com](https://giridharan-1.onrender.com)/students/students"> /Students </a></pre>

<b>To get list of students whose mentors weren't assigned </b>

<pre>GET          <a href="[https://zen-assign-mentors.herokuapp.com](https://giridharan-1.onrender.com)/students/no-mentors">/Students/no-mentors</a></pre>

<b>To assign or change Mentor for student</b>

<pre>PATCH        <a href=" [https://zen-assign-mentors.herokuapp.com](https://giridharan-1.onrender.com)/students/students/assign-mentor/60e5dc9da2d09d6d581b7058">/Students/assign-mentor/:student-id</a></pre>

<b> To assign mentors for multiple Students </b>

<pre>PATCH        <a href="[https://zen-assign-mentors.herokuapp.com](https://giridharan-1.onrender.com)/students/assign-mentor-students">/Students/assign-mentor-students</a></pre>

<b> To Assign or Change Mentor for particular student </b>
  > Pass Mentor ID in request Body

<pre>PATCH        <a href="[https://zen-assign-mentors.herokuapp.com](https://giridharan-1.onrender.com)/students/assign-mentor/60e5dc9da2d09d6d581b7058">/Students/assign-mentor/:student-id</a> </pre>

<b> To Assign mentor for multiple students </b>
  > Pass Mentor ID and Student ID as list in body
 
<pre>PATCH        <a href="[https://zen-assign-mentors.herokuapp.com](https://giridharan-1.onrender.com)/students/students/assign-mentor-students">/Students/assign-mentor-students</a> </pre>

<b> To get all students of particular Mentor

<pre>GET          <a href="[https://zen-assign-mentors.herokuapp.com](https://giridharan-1.onrender.com)/students /mentor-students/60e7f4acd5ff5342a06652dd">/Students/mentor-students/:mentor-id </a></pre>
 






