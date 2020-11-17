// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.

//     створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
//
// let h2_element = document.getElementsByTagName('h2');
// let id_element = document.getElementById('content');
// let ul = document.createElement('ul');
// for (const h2 of h2_element) {
//     let li = document.createElement('li');
//     li.innerText = h2.innerText;
//     ul.appendChild(li);
// }
// id_element.appendChild(ul);

// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];
//
// <div id="wrap">
//     <div class="rules rule1">
//         <h2>Первое правило Бойцовского клуба.</h2>
//         <p>Никому не рассказывать о Бойцовском клубе.</p>
//     </div>

let wrap = document.createElement('div');
wrap.id = 'wrap';
for (let i = 0; i < rules.length; i++) {
    const rule = rules[i];
    let div = document.createElement('div');
    div.className = `rules rule$[i]`;
    let h2 = document.createElement('h2');
    h2.innerText =  rule.title;
    let p = document.createElement('p');
    p.innerText = rule.body;

    div.appendChild(h2);
    div.appendChild(p);
    wrap.appendChild(div);
}
document.body.appendChild(wrap);