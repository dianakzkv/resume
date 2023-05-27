// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: 'Diana',
    lastname: 'Kazakova',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяц',
  address: 'Odesa, St. Saharova 46',
}

var footer = {
  social: {
    email: {
      text: 'diana@gmail.com',
      link: 'mailto:diana@gmail.com',
    },
    phone: {
      text: '+380670000123',
      link: 'tel:+380670000123',
    },
    linkedin: {
      text: 'LinkedIn',
      link: 'https://www.linkedin.com/in/dianakzkv',
    },
  },
}

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Summary',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 
        1 years of experience in development. Whenever 
        I start to work on a new project I learn the domain 
        and try to understand the idea of the project. Good 
        team player, every colleague is a friend to me.`,
      },

      experience: {
        title: 'Other experience',
        text: ` Pet project for parsing sport betting data from 
        different platforms ( odds ) and sport statistics ( tournament 
        position, goals etc), analyzing by simple mathematics models 
        and preparing probability for such events like: money line -
        first win / draw / second win, totals etc.`,
      },
    },

    footer,
  })
})

// ================================================================

router.get('/skills', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Skills',
    },

    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 7,
        },
        {
          name: 'VS Code',
          point: 8,
        },
        {
          name: 'Git & Terminal',
          point: 6,
        },
        {
          name: 'NPM',
          point: 5,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'C++',
          point: null,
        },
      ],
      hobbies: [
        {
          name: 'Танці',
          isMain: true,
        },
        {
          name: 'Спортзал/бокс/велоспорт',
          isMain: true,
        },
        {
          name: 'Малювання',
          isMain: false,
        },
      ],
    },

    footer,
  })
})

// ================================================================

router.get('/education', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Education',
    },

    header,

    main: {
      educations: [
        {
          name: 'ЗОШ №92',
          isEnd: true,
        },
        {
          name: '5 star centre',
          isEnd: true,
        },
        {
          name: 'NUOP',
          isEnd: false,
        },
        {
          name: 'IT Step',
          isEnd: true,
        },
        {
          name: 'IT-Brains',
          isEnd: false,
        },
      ],

      certificates: [
        {
          name: 'C++ developer',
          id: 1735,
        },
        {
          name: 'Salesforse by Synebo',
          id: 7953,
        },
        {
          name: 'Web-design',
          id: 6485,
        },
      ],
    },

    footer,
  })
  //                  ↑↑ сюди вводимо JSON дані
})

router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані
    layout: 'big',

    page: {
      title: 'Resume | Work',
    },

    header,

    main: {
      works: [
        {
          position: 'Junior FullStack developer',
          company: {
            name: 'IT Brains',
            url: 'https://it-brains.com.ua/',
          },
          duration: {
            from: '05.03.2023',
            to: null,
          },
          projectAmount: 3,

          projects: [
            {
              name: 'Resume',
              url: 'https://resume.com.ua/',
              about: 'Опииис проєкту.........',
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML / CSS',
                },
                {
                  name: 'Node.js',
                },
              ],
              stackAmount: 3,
              awards: [
                {
                  name: 'Якісь нагороди...',
                },
                {
                  name: 'Відзнаки за плідну працю...',
                },
              ],
              awardAmount: 2,
            },
          ],
        },
      ],
    },

    footer,
  })
})

// Підключаємо роутер до бек-енду
module.exports = router
