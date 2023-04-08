// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================
var header = {
  name: {
    firstname: 'Ivan',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$',
  address: '46011 Ukraine Ternopil Bandera st. №33',
}
var footer = {
  social: {
    email: {
      text: 'ivanov@mail.com',
      href: 'mailto:dmytro@mail.com',
    },
    phone: {
      href: 'tel:+380670000123',
      text: '+380670000123',
    },
    linkedin: {
      text: 'LinkedIn',
      href: '"https://www.linkedin.com/in/dmytro-test" ',
    },
  },
}
//=================================================================
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
    header,
    page: {
      title: 'Resume | Summary',
    },
    main: {
      summary: {
        title: 'Summary',
        text: ' Open-minded for new technologies, with 1 years of experience in development. Whenever I start to work on a new project I learn the domain and try to understand the idea of the project. Good team player, every colleague is a friend to me.',
      },
      expirience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
			  tournament position, goals etc), analyzing by simple mathematics models and preparing probability
			  for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },
    footer,
  })
})

// ================================================================
// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
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
          point: 10,
          isTop: true,
        },
        {
          name: 'VS code',
          point: 9,
        },
        {
          name: 'Git',
          point: 10,
          isTop: true,
        },
        {
          name: 'Terminal',
          point: 7,
          isTop: false,
        },
        {
          name: 'NPM',
          point: 8,
        },
        {
          name: 'React JS',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],
      hobbies: [
        {
          name: 'Hrestukom',
          isMain: false,
        },
        {
          name: 'Numismatics',
          isMain: true,
        },
        {
          name: 'Travel',
          isMain: true,
        },
      ],
    },

    footer,
  })
})
// ================================================================
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: 'Resume | Education',
    },
    header,
    main: {
      education: [
        {
          name: 'School of craftsmen',
          isEnd: true,
        },
        {
          name: 'Lviv University',
          isEnd: true,
        },
        {
          name: 'University of Cambridge',
          isEnd: false,
        },
        {
          name: 'Stanford University',
          isEnd: false,
        },
      ],

      certificates: [
        {
          name: 'Duplom',
          id: 1001,
        },
        {
          name: 'Atestat',
          id: 1002,
        },
        {
          name: 'Certificate',
          id: 1003,
        },
      ],
    },
    footer,
  })
})
// ================================================================
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
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT Brains',
            url: null,
          },
          duration: {
            from: '10.10.2022',
            to: null,
          },
          projectAmount: 3,
          projects: [
            {
              name: 'Resume',
              url: 'https://resume.com.ua/',
              about:
                'Airbnb competitor. High-load application for searching aprtments',
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML, CSS',
                },
                {
                  name: 'Nodejs',
                },
              ],
              stackAmount: 3,
              awards: [
                {
                  name: 'Background verification',
                },
                {
                  name: 'Os take prechudove imya',
                },
              ],
              awardsAmount: 2,
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
