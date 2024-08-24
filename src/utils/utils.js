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

    static sortProject(projects, title, stack, sort) {
        const regSearchTitle = new RegExp(`${title.toLowerCase()}`);
        const listStack = []
        for (const tech in stack) {
             listStack.push(stack[tech].toLowerCase());
        }
        let newProjects = projects.filter(project =>
            regSearchTitle.test(project.title.toLowerCase())
        );
        newProjects = newProjects.filter(project =>
            this.checkStack(project.stack, listStack) === true
        );
        newProjects = this.sortedOnSortSelect(newProjects, sort);
        return newProjects
    }

    static checkStack(projectStack, sortStack) {
        const listProjectStack = []
        for (const cat in projectStack) {
            for (const tech in projectStack[cat]) {
                const techStr = projectStack[cat][tech].toLowerCase()
                if (techStr !== "none")
                    {
                        listProjectStack.push(techStr);
                    }
            }
        }

        const regSortStack = new RegExp(sortStack.join(""));
        const strProjectStack = listProjectStack.join("");

        return regSortStack.test(strProjectStack);
    }

    static sortedOnSortSelect(projects, sort) {
        if (sort === "Сначала новые") {
            projects.sort((a, b) => {
                const dateA = new Date(a.realize_project);
                const dateB = new Date(b.realize_project);

                return dateB - dateA;
            });
        } else if (sort === "Сначала старые"){
            projects.sort((a, b) => {
                const dateA = new Date(a.realize_project);
                const dateB = new Date(b.realize_project);

                return dateA - dateB;
            });
        } else if (sort === "По названию"){
            projects.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()))
        } else if (sort === "По просмотрам") {
            projects.sort((a, b) => {
                return b.view - a.view;
            })
        } else if (sort === "По рейтингу") {
            projects.sort((a, b) => {
                return b.rate - a.rate;
            })
        } else if (sort === "Рабочие проекты"){
            projects = projects.filter(project => (
                project.status === "active"
            ))
        } else if (sort === "В разаработке"){
            projects = projects.filter(project => (
                project.status === "in develop"
            ))
        } else if (sort === "Не рабочие проекты"){
            projects = projects.filter(project => (
                project.status === "inactive"
            ))
        }
        return projects
    }

    static componentToHex(c) {
        const hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }

    static rgbToHex(r, g, b) {
        return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
    }
}