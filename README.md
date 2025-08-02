# Fashionee - Интернет-магазин одежды (React)

[![Демо](https://img.shields.io/badge/-ДЕМО%20САЙТA-00CC88?style=for-the-badge&logo=react&logoColor=white)](https://likeoooh.github.io/fashionee-react/)

## 📌 О проекте

React-приложение интернет-магазина модной одежды Fashionee.  
**Текущая реализация** (MVP версия 0.1):

✔️ Реализованные страницы:
- `Shop` - каталог с товарами
- `Cart` - корзина с товарами

✔️ Основной функционал:
- Отображение каталога товаров
- Фильтрация по категориям, ценам и цветам
- Постраничная навигация (12 товаров на странице) (клиентская пагинация)
- Добавление товаров в избранное
- Пересчет стоимости заказа в зависимости от количества заказанных товаров
- Применение промокода `ilovereact`, предоставляющего скидку 10%
- Адаптивный дизайн 

**Особенности реализации страниц:**
- Страницы формируются непосредственно в `App.js` из компонентов
- Нет отдельной папки `pages` (целенаправленное архитектурное решение)
- Состояние навигации управляется через React Context

🛠 Макеты в Figma:  
[![Figma](https://img.shields.io/badge/-Figma%20макеты-FF6B6B?style=flat&logo=figma)](https://www.figma.com/file/LSancjCw067xAOteD0unOt/Fashionee---Fashion-Store-Figma-UI-Template?node-id=586%3A13306)

## 🚀 Установка

```bash
# 1. Установка зависимостей
npm install

# 2. Запуск dev-сервера
npm run dev

# 3. Сборка для production
npm run build
```

## 📂 Структура проекта
```bash
data/              # Данные о продуктах
src/
├── assets/        # Медиафайлы
│   ├── icons/
│   └── images/
├── components/    # UI-компоненты, компоненты страниц
│   ├── cartPage/  # компоненты страницы Cart
│   │   ├── cart
│   │   ├── cart-order
│   │   ├── promo-code
│   │   └── ...
│   ├── shopPage/  # компоненты страницы Page
│   │   ├── filters/...  # компоненты фильтров
│   │   ├── pagination
│   │   ├── product
│   │   ├── search
│   │   ├── sort
│   │   └── ...
│   ├── layout/  # макетные компоненты
│   │   ├── header
│   │   ├── footer
│   │   └── ...
│   └──  ui/      # UI-компоненты
│       ├── icon
│       ├── logo
│       └── ...
├── constants/       
├── context/   
├── helpers/     
├── hooks/         
├── styles/       # Глобальные стили
├── App.jsx       # Корневой компонент
└── main.jsx      # Точка входа
```

## 🔮 Планы развития

- Система авторизации
- Страница детального просмотра продукта
- Интеграция с CMS

## 🛠 Технологический стек

[![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/ru/docs/Web/JavaScript)
[![React](https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![SCSS](https://img.shields.io/badge/-SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)
[![SVG Sprite](https://img.shields.io/badge/-SVG_Sprite-FFB13B?style=for-the-badge&logo=svg&logoColor=white)](https://css-tricks.com/svg-sprites-use-better-icon-fonts/)
[![ESLint](https://img.shields.io/badge/-ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/-Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black)](https://prettier.io/)
[![Figma](https://img.shields.io/badge/-Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)](https://figma.com/)