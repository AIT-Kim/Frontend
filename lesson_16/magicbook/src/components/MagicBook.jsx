import React, { useState } from 'react';
import './MagicBook.css'; 

const MagicBook = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [pageFlip, setPageFlip] = useState(false);
    const pages = [
        {
            title: 'Введение в магию',
            content: 'Магия — это древнее искусство использования окружающих энергий для вызова сверхъестественных эффектов и изменения реальности по воле мага. Она уходит корнями в саму ткань бытия, где практикующие маги черпают силу из стихий, энергий звёзд и даже скрытых потоков времени. Глубокие знания тайных символов, древних заклинаний и загадочных ритуалов являются ключом к пониманию и управлению магическими силами. Эта область знаний обширна и разнообразна, она включает в себя множество практик — от лечебных заклинаний и защитных чар до искусства призыва и прорицания. В современном мире магия часто воспринимается как метафора для персонального роста и самопознания, где волшебство символизирует внутреннюю силу и потенциал человека преобразовать свою жизнь и окружающий мир. Неотъемлемой частью магической практики является вера в свои силы, ведь магия начинается там, где заканчивается логика, и каждый шаг в этом искусстве требует от практикующего уверенности в своих намерениях и чёткости мысли.'
        },
        {
            title: 'Заклинания и чары',
            content: 'Заклинания — это тщательно сформулированные утверждения, призванные вызвать магические эффекты и активировать скрытые энергии. Они являются основным инструментом в руках магов и ведьм, позволяющим влиять на физический и эфирный миры. Каждое заклинание состоит из уникального сочетания слов, жестов и использования специфических ингредиентов или артефактов, которые вместе создают особый ритуал. Эти слова не просто фразы; они суть вибрации, которые резонируют с энергиями вселенной, становясь ключом к открытию её тайн. В древности заклинания передавались устно от мастера к ученику и были окружены ореолом тайны и мистицизма. Существуют различные типы заклинаний, каждое из которых нацелено на определённый эффект — от исцеления и защиты до изменения погоды или управления силами природы. Произнесение заклинания — это искусство, требующее не только знания и понимания его компонентов, но и сосредоточенности, воли и представления о желаемом исходе. Исполнение заклинания может быть мгновенным или требовать времени для его активации, в зависимости от сложности и мощи заклинания. Маг, владеющий искусством заклинаний, уважаем и опасен, его знания и умения часто окутаны слухами и домыслами, добавляя загадочности всему, что связано с магическими практиками.'
        },
        {
            title: 'Магические существа',
            content: 'В мире существует множество магических существ, каждое со своими уникальными особенностями, силами и мудростью. От загадочных драконов, владеющих древнейшими тайнами огня и времени, до лесных нимф, олицетворяющих красоту и загадки природы, эти существа населяют различные уголки нашего фантазийного мира. Эльфы, с их острой интуицией и невиданной ловкостью, обитают в дремучих лесах, где они сливаются с окружающей средой, становясь едва уловимыми тенями среди деревьев. Гномы, мастера кузнечного дела и каменной резьбы, затворничают в своих подземных царствах, охраняя сокровища земли. Величественные грифоны, с телом льва и крыльями орла, несут ответственность за охрану небес и земель, которые они считают своим домом. Морские сирены с их завораживающим пением манили моряков, вводя их в заблуждение и подводя к таинственным глубинам океана. В этом мире каждое существо играет роль в сложной экосистеме магии и природы, внося свой вклад в равновесие и гармонию, которые необходимы для поддержания порядка в мире фэнтези. Сказания о их подвигах и приключениях передаются из поколения в поколение, вознося этих существ в ранг легенд и мифов.'
        },
    ];

    const nextPage = () => {
        if (currentPage < pages.length - 1) {
            setPageFlip(true);
            setTimeout(() => {
                setCurrentPage(currentPage + 1);
                setPageFlip(false);
            }, 500);
        }
    };

    const prevPage = () => {
        if (currentPage > 0) {
            setPageFlip(true);
            setTimeout(() => {
                setCurrentPage(currentPage - 1);
                setPageFlip(false);
            }, 500);
        }
    };

    return (
        <div className="magicBook">
            <div className={`page ${pageFlip ? 'page-flip' : ''}`}>
                <div className="page-content">
                    <h2>{pages[currentPage].title}</h2>
                    <p>{pages[currentPage].content}</p>
                </div>
            </div>
            <button onClick={prevPage} disabled={currentPage === 0}>Назад</button>
            <button onClick={nextPage} disabled={currentPage === pages.length - 1}>Вперёд</button>
        </div>
    );
};

export default MagicBook;
