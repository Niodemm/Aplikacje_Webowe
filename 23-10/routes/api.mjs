import express from 'express';

const router = express.Router();

const students = [
    { id: 1, name: 'Olo', surname: 'Bumblebee', email: 'fefum-ipiya62@gmail.com' },
    { id: 2, name: 'Damian', surname: 'Stevens', email: 'hakilos_opu31@outlook.com' },
    { id: 3, name: 'Gerard', surname: 'Gilbert', email: 'vatixih_ido44@gmail.com' },
    { id: 4, name: 'Siena', surname: 'Mason', email: 'ihaverocket@gmail.com' },
    { id: 5, name: 'Jason', surname: 'Wasi', email: 'sucucit-ogu46@mail.com' },
    { id: 6, name: 'Jesus', surname: 'Kichot', email: 'pam_ecurigu71@gmail.com' },
    { id: 7, name: 'Daniel', surname: 'Miraculum', email: 'wukawi-ripa89@gmail.com' },
    { id: 8, name: 'Montagem', surname: 'Toma', email: 'hofa-tamori25@yahoo.com' },
    { id: 9, name: 'Victor', surname: 'Baus', email: 'sedeg-akaji5@aol.com' },
    { id: 10, name: 'Etson', surname: 'Melon', email: 'bilu_poyure69@hotmail.com' }
]

const subjects = [
    { id: 1, name: 'j.Polski', hoursAWeek: 2 },
    { id: 2, name: 'j.Angielski', hoursAWeek: 3 },
    { id: 3, name: 'Chemia', hoursAWeek: 1 },
    { id: 4, name: 'Geografia', hoursAWeek: 2 },
    { id: 5, name: 'Matematyka', hoursAWeek: 3 },
    { id: 6, name: 'Programowanie aplikacji webowych', hoursAWeek: 4 },
    { id: 7, name: 'Programowanie aplikacji desktopowych', hoursAWeek: 2 },
    { id: 8, name: 'Testowanie i dokumentowanie aplikacji', hoursAWeek: 1 },
    { id: 9, name: 'Biologia', hoursAWeek: 1 },
    { id: 10, name: 'j.Angielski zawodowy', hoursAWeek: 1 }
]

router.use((req,res,next) => {
    console.log('Time:', Date.now());
    next();
})

router.get('/', (req, res) => {
    const info = {
        "/api": "Informacje o API",
        "/api/students": "Informacje o 10 studentach",
        "/api/subjects": "Informacje o 10 przedmiotach",
        "/api/students/:id": "Informacje o studencie o danym id",
        "/api/subjects/:id": "Informacje o przedmiocie o danym id"
    }
    res.json(info);
})

router.get('/students', (req, res) => {
    res.json(students);
})

router.get('/subjects', (req, res) => {
    res.json(subjects);
})

router.get('/students/:id', (req, res) => {
    const chosenId = req.params.id;
    const chosenStudent = students.find(students => students.id == chosenId);
    if (chosenStudent){
        res.json(chosenStudent);
    }
    else {
        res.status(404);
        res.send("Error 404: Page not found");
    }
})

router.get('/subjects/:id', (req, res) => {
    const chosenId = req.params.id;
    const chosenSubject = subjects.find(subjects => subjects.id == chosenId);
    if (chosenSubject){
        res.json(chosenSubject);
    }
    else {
        res.status(404);
        res.send("Error 404: Page not found");
    }
})

export {router as apiRouter};
