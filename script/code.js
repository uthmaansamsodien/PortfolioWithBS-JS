// about
let about = document.querySelector('section#about .row:last-child');
let aboutContents = [
    "Hello, my name is Uthmaan Samsodien and I am 21 years old. Born in Cape Town, South Africa.I am currently a student at Life Choices and want to find a job in the web devlopment industry, I attended and graduatuated at South Peninsula High from 2017 to 2022. I am a very sport orientated person who loves being active. I am always up to learning new things to up-skill myself, trying to achieve the best possible version of myself. I've always had a passion for technology and gadget type things (phones, computers, consoles ect.) I enjoy working with people, learning from them, motivating them and always giving my full and undevided attention to when I am interacting with them."
]

// loop through the contents
aboutContents.forEach( (content)=>{
    about.innerHTML +=`
    <p class='lead'>${content}</p>
    `
} )

//education 
let education = [
    {
        id: 1,
        year: 2023,
        description: 'Currently doing a 6-month coding course',
        place: 'Life Choices',
        type: '',
        certificate: ''
    },
    {
        id: 2,
        year: 2022,
        description: 'Passed matric',
        place: 'South Peninsula High, (bacholors pass)',
        type: '',
        certificate: ''
    },
    // {
    //     id: 3,
    //     year: 2018,
    //     description: 'I got my certificates on Intro to Python',
    //     place: 'Data Camp',
    //     type: 'certificate',
    //     certificate: ''
    // },
    // {
    //     id: 4,
    //     year: 2015,
    //     description: 'I got my certificate on Intro to Android Developer',
    //     place: 'Study Jams',
    //     type: 'certificate',
    //     certificate: ''
    // },
    // {
    //     id: 5,
    //     year: 2014,
    //     description: 'I got my diploma on Software Engineering',
    //     place: 'Tshwane University of Technology',
    //     type: 'Diploma',
    //     certificate: ''
    // },
    // {
    //     id: 6,
    //     year: 2005,
    //     description: 'Completed my course on PC Engineering',
    //     place: 'Havatech',
    //     type: 'Certificate',
    //     certificate: ''
    // },
    // {
    //     id: 7,
    //     year: 2000,
    //     description: 'Grade 12',
    //     place: '',
    //     type: 'Certificate',
    //     certificate: ''
    // },
]
//
let divEducation = document.querySelector('.education');
education.forEach((data)=> {
    divEducation.innerHTML += `
    <div class="card">
        <h4 class="display-4">${data.year}</h4>
        <div class="card-body">
            <p class="text-white">
                ${data.description} @ <span>${data.place}</span> 
                <a href="${data.certificate}" target="_blank">${data.type}</a>
            </p>
        </div>
    </div>
    `
})