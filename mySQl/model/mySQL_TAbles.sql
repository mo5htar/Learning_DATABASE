
Create table students(
    id is not Null  auto_increament,
    name varchar(50),
    age int,
    email varchar(10),
    password text    
    course_id int
    constraint pk_std primary key(id)
    constraint fk_course foreign key(course_id) references courses(id)
)

Create table courses(
    id is not Null  auto_increament,
    name varchar(50),
    constraint pk_course primary key(id)
)

