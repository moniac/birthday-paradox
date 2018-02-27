(function() {
    const app = {
        init() {
            helpers.getInput()
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