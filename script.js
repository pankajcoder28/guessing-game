var a = [{
    team:"Chennai Super Kings (CSK)",
    captain:"captain: Ruturaj Gaikwad",
    trophies:"trophies:	5 (2010, 2011, 2018, 2021, 2023)",
    primary: "yellow",
    secondary:"blue"
},
{
    team:"Mumbai Indians (MI)",
    captain:"captain: Hardik Pandya",
    trophies:"trophies:	5 (2013, 2015, 2017, 2019, 2020)",
    primary: "blue",
    secondary:"gold"
},
{
    team:"Kolkata Knight Riders (KKR)",
    captain:"captain: Shreyas Iyer",
    trophies:"trophies:	3 (2012, 2014, 2024)",
    primary: "purple",
    secondary:"gold"
},
{
    team:"Royal Challengers Bengaluru (RCB)",
    captain:"captain: Faf du Plessis",
    trophies:"trophies:	0 (Finalists 2009, 2011, 2016)",
    primary: "red",
    secondary:"black"
},
{
    team:"Delhi Capitals (DC)",
    captain:"captain: Rishabh Pant",
    trophies:"trophies:	0 (Finalists 2020)",
    primary: "blue",
    secondary:"red"
},
{
    team:"Rajasthan Royals (RR)",
    captain:"captain: Sanju Samson",
    trophies:"trophies:	1 (2008)",
    primary: "pink",
    secondary:"blue"
},
{
    team:"Sunrisers Hyderabad (SRH)",
    captain:"captain: Pat Cummins",
    trophies:"trophies:	1 (2016)",
    primary: "Orange",
    secondary:"black"
},
{
    team:"Punjab Kings (PBKS)",
    captain:"captain: Shikhar Dhawan",
    trophies:"trophies:	0 (Finalists 2014)",
    primary: "Red",
    secondary:"silver"
},
{
    team:"Gujarat Titans (GT)",
    captain:"captain: Shubman Gill",
    trophies:"trophies:	1 (2022)",
    primary: "Dark Blue	",
    secondary:"gold"
},
{
    team:"Lucknow Super Giants (LSG)",
    captain:"captain: KL Rahul",
    trophies:"trophies: 0 (Playoffs 2022, 2023, 2024)",
    primary: "blue",
    secondary:"green"
}]

var btn = document.querySelector('button');
var box = document.querySelector('#box');
var h1 = document.querySelector('h3');
var h4 = document.querySelector('#cap');
var h5 = document.querySelector('#trop');
var main = document.querySelector('main');

btn.addEventListener('click',function(){
   var res = Math.floor(Math.random()*a.length);
   h1.innerHTML = a[res].team
   h4.innerHTML = a[res].captain
   h5.innerHTML = a[res].trophies
   box.style.backgroundColor = a[res].secondary
   main.style.backgroundColor = a[res].primary

});
