/** JavaScript code to generate the chart of courses **/

var tasks = [

{"startDate":new Date(0),"endDate":new Date(1),"taskName":"1","status":"PAST",
    "label":"CS 125", "name":"Intro to Computer Science",
    "description":"Programming fundamentals, variables, recursion"},
{"startDate":new Date(0),"endDate":new Date(1),"taskName":"2","status":"PAST",
    "label":"CS 100", "name":"Freshman Orientation",
    "description":"Seminars on various Computer Science topics."},
{"startDate":new Date(0),"endDate":new Date(1),"taskName":"3","status":"PAST",
    "label":"MATH 241", "name":"Calculus III",
    "description":"Multivariable calculus and differential equations"},
{"startDate":new Date(0),"endDate":new Date(1),"taskName":"4","status":"PAST",
    "label":"HIST 100", "name":"Global History",
    "description":"Social, political, and economic developments from 500-1500"},


{"startDate":new Date(1),"endDate":new Date(2),"taskName":"1","status":"PAST",
    "label":"CS 173", "name":"Discrete Structures",
    "description":"Formal logic, set theory, induction, and recursion"},
{"startDate":new Date(1),"endDate":new Date(2),"taskName":"2","status":"PAST",
    "label":"CS 225", "name":"Data Structures",
    "description":"Abstract data types, fundamental data structures, algorithms, and Big-O analysis"},
{"startDate":new Date(1),"endDate":new Date(2),"taskName":"3","status":"PAST",
    "label":"MATH 415", "name":"Applied Linear Algebra",
    "description":"Matrices, vector spaces, eigenvectors, and other concepts"},
{"startDate":new Date(1),"endDate":new Date(2),"taskName":"4","status":"PAST",
    "label":"PHYS 212", "name":"Electricity & Magnetism",
    "description":"Electric and magnetic fields, elementary circuit design, electromagnetic waves"},


{"startDate":new Date(2),"endDate":new Date(3),"taskName":"1","status":"PAST",
    "label":"CS 241", "name":"System Programming",
    "description":"POSIX processes, inter-process communication, multithreading and synchronization, semaphores and mutexes, MapReduce, file I/O, and socket network programming"},
{"startDate":new Date(2),"endDate":new Date(3),"taskName":"2","status":"PAST",
    "label":"CS 398", "name":"Computer Architecture",
    "description":"Logic gates, computer architecture, MIPS assembly, caching, and pipelining"},
{"startDate":new Date(2),"endDate":new Date(3),"taskName":"3","status":"PAST",
    "label":"CS 357", "name":"Numerical Methods I",
    "description":"Floating point computation, function approximation, systems of linear equations, applications in engineering"},
{"startDate":new Date(2),"endDate":new Date(3),"taskName":"4","status":"PAST",
    "label":"PHYS 214", "name":"Quantum Physics",
    "description":"Photons, Heisenberg's Uncertainty Principle, wave mechanics, and duality"},
{"startDate":new Date(2),"endDate":new Date(3),"taskName":"5","status":"PAST",
    "label":"BADM 261", "name":"Technology & Management Seminar",
    "description":"Corporate executive seminars in management, technology, and innovation"},


{"startDate":new Date(3),"endDate":new Date(4),"taskName":"1","status":"CURRENT",
    "label":"CS 242", "name":"Programming Studio",
    "description":"Large coding projects with weekly code critiques and a focus on software engineering"},
{"startDate":new Date(3),"endDate":new Date(4),"taskName":"2","status":"CURRENT",
    "label":"CS 373", "name":"Theory of Computation",
    "description":"Rewriting-logic, computability, finite automata, regular languages, and functional programming"},
{"startDate":new Date(3),"endDate":new Date(4),"taskName":"3","status":"CURRENT",
    "label":"CS 411", "name":"Database Systems",
    "description":"Relational databases, relational algebra, functional dependencies. Design, implementation, and optimization of query languages."},
{"startDate":new Date(3),"endDate":new Date(4),"taskName":"4","status":"CURRENT",
    "label":"CS 425", "name":"Distributed Systems",
    "description":"Clock synchronization, network reliability, multicast, consensus, leader election, distributed shared memory, mutual exclusion, distributed database (Cassandra, COPS, etc)"},
{"startDate":new Date(3),"endDate":new Date(4),"taskName":"5","status":"CURRENT",
    "label":"CS 210", "name":"Ethical & Professional Issues",
    "description":"Ethical desicion making, intellectual property, privacy, and current events"},


{"startDate":new Date(4),"endDate":new Date(5),"taskName":"1","status":"FUTURE",
    "label":"CS 473", "name":"Fundamental Algorithms",
    "description":""},
{"startDate":new Date(4),"endDate":new Date(5),"taskName":"2","status":"FUTURE",
    "label":"CS 498", "name":"Statistics & Probability",
    "description":""},
{"startDate":new Date(4),"endDate":new Date(5),"taskName":"3","status":"FUTURE",
    "label":"CS 465", "name":"User Interface Design",
    "description":""},
{"startDate":new Date(4),"endDate":new Date(5),"taskName":"4","status":"FUTURE",
    "label":"CS 492", "name":"Senior Project I",
    "description":""},
{"startDate":new Date(4),"endDate":new Date(5),"taskName":"5","status":"FUTURE",
    "label":"BADM 365", "name":"Marketing",
    "description":""},
{"startDate":new Date(4),"endDate":new Date(5),"taskName":"6","status":"FUTURE",
    "label":"TMGT 367", "name":"Management of Innovation & Technology",
    "description":""},

{"startDate":new Date(5),"endDate":new Date(6),"taskName":"1","status":"FUTURE",
    "label":"CS 421", "name":"Programming Languages & Compilers",
    "description":""},
{"startDate":new Date(5),"endDate":new Date(6),"taskName":"2","status":"FUTURE",
    "label":"CS 461", "name":"Computer Security I",
    "description":""},
{"startDate":new Date(5),"endDate":new Date(6),"taskName":"3","status":"FUTURE",
    "label":"CS 494", "name":"Senior Project II",
    "description":""},
{"startDate":new Date(5),"endDate":new Date(6),"taskName":"4","status":"FUTURE",
    "label":"ACCY 200", "name":"Fundamentals of Accounting",
    "description":""},
{"startDate":new Date(5),"endDate":new Date(6),"taskName":"5","status":"FUTURE",
    "label":"TMGT 366", "name":"Product Design and Development",
    "description":""},
{"startDate":new Date(5),"endDate":new Date(6),"taskName":"6","status":"FUTURE",
    "label":"TMGT China", "name":"Cultural Studies",
    "description":""},

{"startDate":new Date(6),"endDate":new Date(7),"taskName":"1","status":"FUTURE",
    "label":"CS 525", "name":"Advanced Distributed Systems",
    "description":""},
{"startDate":new Date(6),"endDate":new Date(7),"taskName":"2","status":"FUTURE",
    "label":"CS 438", "name":"Communication Networks",
    "description":""},
{"startDate":new Date(6),"endDate":new Date(7),"taskName":"3","status":"FUTURE",
    "label":"FIN 221", "name":"Corporate Finance",
    "description":""},
{"startDate":new Date(6),"endDate":new Date(7),"taskName":"4","status":"FUTURE",
    "label":"TMGT 460", "name":"Business Process Modeling",
    "description":""},

{"startDate":new Date(7),"endDate":new Date(8),"taskName":"1","status":"FUTURE",
    "label":"CS 460", "name":"Computer Security Lab",
    "description":""},
{"startDate":new Date(7),"endDate":new Date(8),"taskName":"2","status":"FUTURE",
    "label":"CS 538", "name":"Advanced Communication Networks",
    "description":""},
{"startDate":new Date(7),"endDate":new Date(8),"taskName":"3","status":"FUTURE",
    "label":"CS 528", "name":"Object-Oriented Programming",
    "description":""},
{"startDate":new Date(7),"endDate":new Date(8),"taskName":"4","status":"FUTURE",
    "label":"TMGT 461", "name":"Capstone Project",
    "description":""}

];

var taskStatus = {
    "FUTURE" : "bar",
    "CURRENT" : "bar-killed",
    "PAST" : "bar-running"
};

var taskNames = [ "1", "2", "3", "4", "5", "6" ];

tasks.sort(function(a, b) {
    return a.endDate - b.endDate;
});
var maxDate = tasks[tasks.length - 1].endDate;
tasks.sort(function(a, b) {
    return a.startDate - b.startDate;
});
var minDate = tasks[0].startDate;

var format = "%_L";

var gantt = d3.gantt().taskTypes(taskNames).taskStatus(taskStatus).tickFormat(format);
gantt(tasks);




