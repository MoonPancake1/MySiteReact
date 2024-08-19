export default class utils {

    static getViews(view) {
        if (view < 10 ** 3) {
            return view;
        } else if (100 > view / 10 ** 3 > 0) {
            return `${Math.round(view / 10 ** 3)} тыс`;
        } else if (view / 10 ** 6 > 0) {
            return `${Math.round(view / 10 ** 6)} млн`;
        }

        return `${Math.round(view / 10 ** 9)} млрд`
    }

    static getRate(rate) {
        if (rate === -1) {
            return "отсутствует";
        } else if (rate <= 5) {
            return `${rate} 🤒`
        } else if (rate <= 7) {
            return `${rate} 🔥`
        }
        return `${rate} ❤️`
    }

    static getFormattedDate(dateString) {
        // Создаем объект Date из строки
        const date = new Date(dateString);

        // Массив названий месяцев на русском языке
        const months = [
            "января", "февраля", "марта", "апреля", "мая", "июня",
            "июля", "августа", "сентября", "октября", "ноября", "декабря"
        ];

        // Получаем день, месяц и год
        const day = date.getDate();
        const month = months[date.getMonth()]; // Месяцы начинаются с 0
        const year = date.getFullYear();

        // Формируем строку и возвращаем
        return `${day} ${month} ${year}`;

    }
}