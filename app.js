(function() {
    const app = {
        people: [],
        init() {
            helpers.getInput()
        },

        generate(numberOfPersons) {
            let inc = 0
            while (inc <= numberOfPersons) {
                this.people.push(new person().generateDate())
                inc++

            }
        }
    }

    const person = {
        date: 0,
        generateDate(start = new Date(2012, 0, 1), end = new Date()) {
            this.date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
        }
    }

    const helpers = {
        getInput() {
            document.querySelector('body > input').addEventListener('keyup', function(e) {
                console.log(e.target.value)
                app.generate(e.target.value)
            })
        }
    }
    app.init()
})()