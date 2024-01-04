class Table {
    constructor(div) {
        this._div = div;
        this.#generate(6, 6);
    }

    randomColor(item) {
        const color = this.#generateColor();
        item.style = "background: " + color;
    }

    changeColor(item, color) {
        item.style = "background: " + color;
    }

    changeRowColor(row, startItem, color) {
        const rowItems = Array.from(row.childNodes);
        const startIndex = rowItems.indexOf(startItem);
        for (let i = startIndex; i < rowItems.length; i += 2) {
            rowItems[i].style = "background: " + color;
        }
    }

    #generate(n, m) {
        let table = document.createElement('table');
        let tbody = document.createElement('tbody');
        let value = 1;
        for (let i = 0; i < n; i++) {
            let row = document.createElement('tr');
            for (let j = 0; j < m; j++) {
                let col = document.createElement('td');
                col.textContent = value++;
                row.appendChild(col)
            }
            tbody.appendChild(row);
        }
        table.appendChild(tbody);
        this._div.appendChild(table);
    }


    #generateColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';

        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }

        return color;
    }
}