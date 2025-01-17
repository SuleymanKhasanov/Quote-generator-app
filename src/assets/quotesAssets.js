const randomQuotesArray = [
  {
    quote:
      'Счастье не зависит от внешних условий, оно зависит только от внутреннего состояния человека.',
    author: 'Дейл Карнеги',
  },
  {
    quote: 'Будь собой; все остальные роли уже заняты.',
    author: 'Оскар Уайльд',
  },
  {
    quote: 'Не бойтесь совершенства – его никогда не достигнете.',
    author: 'Сальвадор Дали',
  },
  {
    quote:
      'Жизнь — это то, что происходит, пока вы строите другие планы.',
    author: 'Джон Леннон',
  },
  {
    quote:
      'Чем больше ты знаешь, тем больше понимаешь, как мало знаешь.',
    author: 'Сократ',
  },
  {
    quote:
      'Время, которое вы проводите с любимыми людьми, всегда стоит того.',
    author: 'Марк Твен',
  },
  {
    quote: 'Верьте в себя и все станет возможным.',
    author: 'Майкл Джордан',
  },
  {
    quote: 'Лучшая месть – это огромный успех.',
    author: 'Фрэнк Синатра',
  },
  {
    quote:
      'Секрет счастья – в том, чтобы всегда быть довольным тем, что имеешь.',
    author: 'Конфуций',
  },
  {
    quote:
      'Неудача – это просто возможность начать снова, но уже более разумно.',
    author: 'Генри Форд',
  },
  {
    quote:
      'Тот, кто хочет двигаться вперед, должен отпустить прошлое.',
    author: 'Лев Толстой',
  },
  {
    quote:
      'Смех – это солнце, которое прогоняет зиму с человеческого лица.',
    author: 'Виктор Гюго',
  },
  {
    quote:
      'Самый лучший способ предсказать будущее – это создать его.',
    author: 'Питер Друкер',
  },
  {
    quote: 'Каждый день – это новый шанс изменить свою жизнь.',
    author: 'Пауло Коэльо',
  },
  {
    quote: 'Мечтайте так, как будто вам суждено добиться успеха.',
    author: 'Альберт Эйнштейн',
  },
  {
    quote: 'Действуйте так, как будто неудача невозможна.',
    author: 'Наполеон Хилл',
  },
  {
    quote: 'Мудрость приходит с опытом, а опыт приходит с ошибками.',
    author: 'Эллен ДеДженерес',
  },
  {
    quote:
      'Любовь – это единственное, что растет, когда мы ее отдаем.',
    author: 'Антуан де Сент-Экзюпери',
  },
  {
    quote: 'Каждый день – это новая возможность стать лучше.',
    author: 'Джек Лондон',
  },
  {
    quote: 'Вера в себя – это первый секрет успеха.',
    author: 'Рalph Waldo Emerson',
  },
  {
    quote: 'Все, что нам нужно для счастья, уже у нас есть.',
    author: 'Будда',
  },
  {
    quote:
      'Изменения – это закон жизни. И те, кто смотрит только в прошлое или настоящее, определенно упустят будущее.',
    author: 'Джон Ф. Кеннеди',
  },
  {
    quote:
      'Мир не станет лучше, если вы просто будете ждать. Действуйте сами.',
    author: 'Альберт Швейцер',
  },
  {
    quote:
      'Каждый человек может стать великим, потому что любой человек может служить.',
    author: 'Мартин Лютер Кинг',
  },
  {
    quote:
      'Ваше время ограничено, не тратьте его, живя чужой жизнью.',
    author: 'Стив Джобс',
  },
  {
    quote: 'Лишь тот, кто сам любил, может быть любимым.',
    author: 'Габриэль Гарсиа Маркес',
  },
  {
    quote:
      'Человек, который говорит, что не может, и человек, который говорит, что может, оба правы.',
    author: 'Генри Форд',
  },
  {
    quote:
      'Каждый день – это новая возможность сделать что-то великое.',
    author: 'Энтони Роббинс',
  },
  {
    quote: 'Не жди подходящего момента, делай его подходящим.',
    author: 'Джордж Бернард Шоу',
  },
  {
    quote: 'Будьте изменением, которое хотите увидеть в мире.',
    author: 'Махатма Ганди',
  },
  {
    quote:
      'Наши самые большие страхи – это не страхи, а то, как мы можем быть великими.',
    author: 'Мэри Энн Рэдмач',
  },
  {
    quote: 'Каждый момент – это шанс стать лучше, чем вы были вчера.',
    author: 'Роберт Кийосаки',
  },
  {
    quote:
      'Неудача – это просто возможность начать снова, но более умно.',
    author: 'Томас Эдисон',
  },
  {
    quote:
      'Настоящее богатство – это не то, что вы имеете, а то, кем вы становитесь.',
    author: 'Опра Уинфри',
  },
  {
    quote: 'Проблемы – это не препятствия, а возможности для роста.',
    author: 'Нельсон Мандела',
  },
  {
    quote: 'Все, что вы можете себе представить, реально.',
    author: 'Пабло Пикассо',
  },
  {
    quote:
      'Живите, как будто бы вы умирали завтра, и учитесь, как будто бы вы жили вечно.',
    author: 'Махатма Ганди',
  },
  {
    quote: 'Лучший способ предсказать будущее – это создать его.',
    author: 'Питер Друкер',
  },
  {
    quote: 'Ваши действия говорят громче, чем слова.',
    author: 'Уинстон Черчилль',
  },
  {
    quote: 'Ваша жизнь – это результат ваших выборов.',
    author: 'Стивен Кови',
  },
  {
    quote:
      'Сначала они игнорируют вас, потом они смеются над вами, потом они борются с вами, и затем вы побеждаете.',
    author: 'Махатма Ганди',
  },
  {
    quote: 'Великое дело начинается с простого действия.',
    author: 'Мать Тереза',
  },
  {
    quote: 'Секрет успеха – это верить в себя.',
    author: 'Норман Винсент Пил',
  },
  {
    quote:
      'Если вы не можете изменить направление ветра, настройте свои паруса.',
    author: 'Джимми Дин',
  },
  {
    quote: 'Каждый день – это шанс начать жизнь заново.',
    author: 'Лао Цзы',
  },
  {
    quote: 'Никогда не поздно стать тем, кем вы могли бы быть.',
    author: 'Джордж Элиот',
  },
  {
    quote:
      'Неудача – это просто возможность начать снова, но более умно.',
    author: 'Томас Эдисон',
  },
  {
    quote:
      'Тот, кто хочет достичь великих целей, должен быть готов к большим жертвам.',
    author: 'Винс Ломбарди',
  },
  {
    quote: 'Ваше прошлое не определяет ваше будущее.',
    author: 'Тони Роббинс',
  },
  {
    quote: 'Секрет успеха – это сосредоточенность на цели.',
    author: 'Брюс Ли',
  },
  {
    quote: 'Будьте тем изменением, которое хотите видеть в мире.',
    author: 'Махатма Ганди',
  },
  {
    quote: 'Каждый человек – это художник своей судьбы.',
    author: 'Фридрих Ницше',
  },
  {
    quote:
      'Время, которое вы тратите на раздумья, – это время, которое вы могли бы потратить на действие.',
    author: 'Генри Дэвид Торо',
  },
  {
    quote:
      'Наибольшие преграды на пути к успеху – это собственные страхи.',
    author: 'Уоррен Баффет',
  },
  {
    quote: 'То, что вы делаете сегодня, определяет ваше будущее.',
    author: 'Элеонора Рузвельт',
  },
  {
    quote: 'Будьте смелыми, и мир откроется вам.',
    author: 'Жан Поль Сартр',
  },
  { quote: 'Изменение начинается с вас.', author: 'Мать Тереза' },
];

export default randomQuotesArray;
