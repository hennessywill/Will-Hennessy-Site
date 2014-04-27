/** JavaScript code to generate the chart of courses **/

var tasks = [
{"startDate":new Date(0),"endDate":new Date(1),"taskName":"1","status":"PAST","label":"CS 125"},
{"startDate":new Date(0),"endDate":new Date(1),"taskName":"2","status":"PAST","label":"CS 100"},
{"startDate":new Date(0),"endDate":new Date(1),"taskName":"3","status":"PAST","label":"MATH 241"},
{"startDate":new Date(0),"endDate":new Date(1),"taskName":"4","status":"PAST","label":"HIST 100"},

{"startDate":new Date(1),"endDate":new Date(2),"taskName":"1","status":"PAST","label":"CS 173"},
{"startDate":new Date(1),"endDate":new Date(2),"taskName":"2","status":"PAST","label":"CS 225"},
{"startDate":new Date(1),"endDate":new Date(2),"taskName":"3","status":"PAST","label":"MATH 415"},
{"startDate":new Date(1),"endDate":new Date(2),"taskName":"4","status":"PAST","label":"PHYS 212"},

{"startDate":new Date(2),"endDate":new Date(3),"taskName":"1","status":"PAST","label":"CS 241"},
{"startDate":new Date(2),"endDate":new Date(3),"taskName":"2","status":"PAST","label":"CS 398"},
{"startDate":new Date(2),"endDate":new Date(3),"taskName":"3","status":"PAST","label":"CS 357"},
{"startDate":new Date(2),"endDate":new Date(3),"taskName":"4","status":"PAST","label":"PHYS 214"},
{"startDate":new Date(2),"endDate":new Date(3),"taskName":"5","status":"PAST","label":"BADM 261"},

{"startDate":new Date(3),"endDate":new Date(4),"taskName":"1","status":"CURRENT","label":"CS 242"},
{"startDate":new Date(3),"endDate":new Date(4),"taskName":"2","status":"CURRENT","label":"CS 373"},
{"startDate":new Date(3),"endDate":new Date(4),"taskName":"3","status":"CURRENT","label":"CS 411"},
{"startDate":new Date(3),"endDate":new Date(4),"taskName":"4","status":"CURRENT","label":"CS 425"},
{"startDate":new Date(3),"endDate":new Date(4),"taskName":"5","status":"CURRENT","label":"CS 210"},

{"startDate":new Date(4),"endDate":new Date(5),"taskName":"1","status":"FUTURE","label":"CS 473"},
{"startDate":new Date(4),"endDate":new Date(5),"taskName":"2","status":"FUTURE","label":"CS 498"},
{"startDate":new Date(4),"endDate":new Date(5),"taskName":"3","status":"FUTURE","label":"CS 465"},
{"startDate":new Date(4),"endDate":new Date(5),"taskName":"4","status":"FUTURE","label":"CS 492"},
{"startDate":new Date(4),"endDate":new Date(5),"taskName":"5","status":"FUTURE","label":"BADM 365"},
{"startDate":new Date(4),"endDate":new Date(5),"taskName":"6","status":"FUTURE","label":"TMGT 367"},

{"startDate":new Date(5),"endDate":new Date(6),"taskName":"1","status":"FUTURE","label":"CS 421"},
{"startDate":new Date(5),"endDate":new Date(6),"taskName":"2","status":"FUTURE","label":"CS 461"},
{"startDate":new Date(5),"endDate":new Date(6),"taskName":"3","status":"FUTURE","label":"CS 494"},
{"startDate":new Date(5),"endDate":new Date(6),"taskName":"4","status":"FUTURE","label":"ACCY 200"},
{"startDate":new Date(5),"endDate":new Date(6),"taskName":"5","status":"FUTURE","label":"TMGT 366"},
{"startDate":new Date(5),"endDate":new Date(6),"taskName":"6","status":"FUTURE","label":"TMGT China"},

{"startDate":new Date(6),"endDate":new Date(7),"taskName":"1","status":"FUTURE","label":"CS 525"},
{"startDate":new Date(6),"endDate":new Date(7),"taskName":"2","status":"FUTURE","label":"CS 438"},
{"startDate":new Date(6),"endDate":new Date(7),"taskName":"3","status":"FUTURE","label":"FIN 221"},
{"startDate":new Date(6),"endDate":new Date(7),"taskName":"4","status":"FUTURE","label":"TMGT 460"},

{"startDate":new Date(7),"endDate":new Date(8),"taskName":"1","status":"FUTURE","label":"CS 460"},
{"startDate":new Date(7),"endDate":new Date(8),"taskName":"2","status":"FUTURE","label":"CS 538"},
{"startDate":new Date(7),"endDate":new Date(8),"taskName":"3","status":"FUTURE","label":"CS 528"},
{"startDate":new Date(7),"endDate":new Date(8),"taskName":"4","status":"FUTURE","label":"TMGT 461"},


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