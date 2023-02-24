
//solve-1

const students =[
    {name: "samad", email: "samad@gmail.com", avg: 57, fiftyPercent: true},
    {name: "rakib", email: "rakib@gmail.com", avg: 49, fiftyPercent: false},
    {name: "jibon", email: "jibon@gmail.com", avg: 38, fiftyPercent: false},
    {name: "kamrul", email: "kamrul@gmail.com", avg: 50, fiftyPercent: true},
    {name: "mukta", email: "mukta@gmail.com", avg: 45, fiftyPercent: false},
    {name: "sima", email: "sima@gmail.com", avg: 51, fiftyPercent: true},
    {name: "atik", email: "atik@gmail.com", avg: 48, fiftyPercent: false},
    {name: "murad", email: "murad@gmail.com", avg: 52, fiftyPercent: true},
    {name: "saiful", email: "saiful@gmail.com", avg: 50, fiftyPercent: true},
    {name: "khaja", email: "khaja@gmail.com", avg: 53, fiftyPercent: true},
];

const scic = students.filter(s => s.avg >= 50 && s.fiftyPercent === true);
const allowNames = scic.map((st) => st.name);



const notAllowScic =students.filter(std => std.avg<= 50 && std.fiftyPercent === false);
const failedName = notAllowScic.map((st) => st.name);


console.log(scic);
console.log(allowNames)


console.log(notAllowScic);
console.log(failedName);



//solve -2
const allPatro = [
    {Name: 'abul', job: 'sorkari', salary: 17000},
    {Name: 'babul', job: 'besorkari', salary: 25000},
    {Name: 'sabul', job: 'sorkari', salary: 21000},
    {Name: 'kabul', job: 'besorkari', salary: 47000},
    {Name: 'mubul', job: 'sorkari', salary: 23000},
    {Name: 'rubul', job: 'besorkari', salary: 55000},
];

//const choicePatro = patro.filter(jubok => jubok.job === 'sorkari');
const choicePatro = allPatro.filter(patro => (patro.job === 'sorkari' && patro.salary >= 20000) || (patro.job === 'besorkari' && patro.salary >= 40000));
console.log(choicePatro);


//solve -3
const persons =[
    {id: 'ID01', name: 'Abdul hanif', age: 25},
    {id: 'ID02', name: 'Abul Malik', age: 23},
    {id: 'ID03', name: 'Abdul Rohim', age: 45},
    {id: 'ID04', name: 'Abdul Zabbar', age: 54}
];


// const info = {};

// // persons.map(p => {
// //     console.log(p);
// // })
// const info = {};



// const info ={};
// info['name'] = 'Abdul Malik'
// info['age'] = 23;
// console.log(info);


const info ={};
persons.map(p => {
    const id = p.id;
    const value = p.name;
    info['id'] = value;
   
})
console.log(info)


//solve-4
const allStudents = [
    {
        student1:{
            name: 'abul',
            age: '17',
            isMale: true,
            education: {
                class: 7,
                subjects: ['bangla', 'english', 'math'],
                school: 'Rajuk uttora school',
            }
        },
        student02 : {
            name: 'jorina',
            age: '22',
            isMale: false,
            education: {
                class: 12,
                subjects: ['bangla', 'english', 'math'],
                school: 'kabul uttora school',
            }
        },
        student03:{
            name: 'fahim',
            age: '19',
            isMale: true,
            education: {
                class: 9,
                subjects: ['bangla', 'english', 'math'],
                school: 'city uttora school',
            }
        }
        
    }
];


allStudents.map(student =>{
    for(let i in student){
        const {name, age, isMale, education} = student[i];
        const {subjects} = education;

        const information = `
            My name is ${name}
            My age is ${age}
            My gender is ${isMale === true ? 'Male' : 'Female'}
            My subjects are: ${subjects.map((s)=> s)}
        `
        console.log(information);
    }
})


