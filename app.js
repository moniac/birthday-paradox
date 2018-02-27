(function() {
    const app = {
        init() {
            helpers.getInput()
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
            })
        }
    }
    app.init()
})()