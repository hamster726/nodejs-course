const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
});

// подключение handlebars
app.engine('hbs', hbs.engine); // регистрируем новый движок рендеринга страниц в Express
app.set('view engine', 'hbs'); // подключаем новый движок
app.set('views', 'views'); // указываем папку, в которой будут лежат наши html страницы
app.use(express.static('public'));




app.get('/', (req, res) => {
  res.render('index',{
    title: "Главная страница",
    isHome: true,
  });
})

app.get('/add', (req,res) => {
  res.render('add',{
    title: "Добавить курс",
    isAdd: true,
  });
})

app.get('/courses', (req,res) => {
  res.render('courses',{
    title: "Курсы",
    isCourses: true,
  });
})



const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
})

